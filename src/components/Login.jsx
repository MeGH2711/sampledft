import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaGraduationCap,
  FaBriefcase,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
  FaCheckCircle,
  FaTimesCircle,
  FaHome,
  FaCalendarAlt,
  FaPhone,
  FaWhatsapp,
  FaSync,
  FaHeart,
  FaBuilding,
  FaLinkedin,
  FaPlus,
  FaTrash,
  FaCertificate,
  FaGlobe,
  FaBoxOpen,
  FaMapMarkerAlt,
  FaSitemap,
  FaAward
} from 'react-icons/fa'
import alumniLogo from '../assets/Logo/dft-logo-dark.avif'
import './Login.css'
import { auth, db, isFirebaseConfigured } from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { doc, setDoc, getDoc, collection, query, where, getDocs } from 'firebase/firestore'
import {
  countryCodes,
  ACADEMIC_YEARS,
  DEGREE_OPTIONS,
  CERTIFICATION_OPTIONS,
  PRODUCT_SERVICE_OPTIONS
} from '../data/formdata'

const MONTH_OPTIONS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const PROMOTION_YEAR_OPTIONS = Array.from({ length: new Date().getFullYear() - 1980 + 1 }, (_, i) => String(new Date().getFullYear() - i));

const parsePhoneNumber = (fullPhone) => {
  if (!fullPhone) return { code: '+91', number: '' }
  const clean = fullPhone.trim()
  const match = clean.match(/^(\+\d+)\s*(.*)$/)
  if (match) {
    return { code: match[1], number: match[2] }
  }
  if (clean.length === 10 && /^\d+$/.test(clean)) {
    return { code: '+91', number: clean }
  }
  if (clean.startsWith('+')) {
    if (clean.startsWith('+91')) {
      return { code: '+91', number: clean.slice(3) }
    }
    return { code: clean.slice(0, 3), number: clean.slice(3) }
  }
  return { code: '+91', number: clean }
}

const getCountryIso = (code) => {
  const map = {
    '+91': 'in',
    '+1': 'us',
    '+44': 'gb',
    '+971': 'ae',
    '+65': 'sg',
    '+61': 'au',
    '+49': 'de',
    '+966': 'sa',
    '+968': 'om',
    '+974': 'qa',
    '+965': 'kw',
    '+973': 'bh',
    '+27': 'za',
    '+33': 'fr',
    '+81': 'jp'
  }
  return map[code] || 'in'
}

// Form options imported from src/data/formdata.js

export default function Login({ user, onLoginSuccess }) {
  const navigate = useNavigate()

  // Tab control: 'login' | 'register'
  const [activeTab, setActiveTab] = useState('login')

  // Common states
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  // Show/Hide password toggles
  const [showLoginPassword, setShowLoginPassword] = useState(false)
  const [showRegPassword, setShowRegPassword] = useState(false)
  const [showRegConfirmPassword, setShowRegConfirmPassword] = useState(false)

  // Login form states
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  // Registration form states
  const [registerForm, setRegisterForm] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    dob: '',
    phoneCode: '+91',
    phone: '',
    secondaryPhoneCode: '+91',
    secondaryPhone: '',
    whatsappCode: '+91',
    whatsapp: '',
    userType: '',
    bloodGroup: '',
    password: '',
    confirmPassword: '',
    admissionYear: '',
    passoutYear: '',
    jobTitle: '',
    company: '',
    linkedin: '',
    dom: '',
    degrees: [],
    profession: '',
    companyWebsite: '',

    // New/replaced fields:
    city: '',
    state: '',
    country: '',
    certifications: [],
    productServices: [],
    otherProductServices: '',
    department: '',
    workingSince: '',
    companyCity: '',
    companyState: '',
    companyCountry: '',
    lastPromotionDesignation: '',
    lastPromotionMonth: '',
    lastPromotionYear: '',
    awards: [],
    hobbies: []
  })

  const [showPhoneModal, setShowPhoneModal] = useState(false)
  const [verifyPhoneInput, setVerifyPhoneInput] = useState('')
  const [verifyPhoneError, setVerifyPhoneError] = useState('')

  const [showRegSuccessModal, setShowRegSuccessModal] = useState(false)
  const [registeredUserObj, setRegisteredUserObj] = useState(null)

  const handleCloseRegSuccessModal = () => {
    if (registeredUserObj) {
      onLoginSuccess(registeredUserObj)
    }
    setShowRegSuccessModal(false)
    setRegisteredUserObj(null)
    navigate('/')
  }

  const [captchaCode, setCaptchaCode] = useState('')
  const [captchaInput, setCaptchaInput] = useState('')
  const canvasRef = useRef(null)

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789'
    let code = ''
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setCaptchaCode(code)
    setCaptchaInput('')
  }

  // Draw captcha on canvas whenever captchaCode changes
  useEffect(() => {
    if (captchaCode && canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background noise
      ctx.fillStyle = '#f3f4f6'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add text styling
      ctx.font = 'bold 24px monospace'
      ctx.textBaseline = 'middle'

      // Draw random lines to distort
      for (let i = 0; i < 5; i++) {
        ctx.strokeStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3)`
        ctx.beginPath()
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height)
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height)
        ctx.stroke()
      }

      // Draw random dots
      for (let i = 0; i < 30; i++) {
        ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.2)`
        ctx.beginPath()
        ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 3, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw the characters with random rotations and colors
      for (let i = 0; i < captchaCode.length; i++) {
        ctx.save()
        const x = 15 + i * 22
        const y = canvas.height / 2 + (Math.random() * 10 - 5)
        const angle = (Math.random() * 30 - 15) * Math.PI / 180
        ctx.translate(x, y)
        ctx.rotate(angle)

        ctx.fillStyle = `rgb(${Math.random() * 100}, ${Math.random() * 100}, ${Math.random() * 100})`
        ctx.fillText(captchaCode.charAt(i), 0, 0)
        ctx.restore()
      }
    }
  }, [captchaCode])

  // Redirect if already logged in
  useEffect(() => {
    if (user && !showSuccess) {
      navigate('/')
    }
  }, [user, navigate, showSuccess])

  // Initialize CAPTCHA whenever activeTab changes to register (only if not already set)
  useEffect(() => {
    if (activeTab === 'register' && !captchaCode) {
      generateCaptcha()
    }
  }, [activeTab, captchaCode])

  // Clear errors when switching tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setError('')
  }

  // Handle inputs
  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target
    setLoginForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleRegisterChange = (e) => {
    const { name, value } = e.target
    const cleanValue = ['phone', 'secondaryPhone', 'whatsapp'].includes(name)
      ? value.replace(/\D/g, '')
      : value;
    setRegisterForm(prev => {
      const updated = {
        ...prev,
        [name]: cleanValue
      }
      if (name === 'admissionYear' && cleanValue) {
        const parsedYear = parseInt(cleanValue, 10)
        if (!isNaN(parsedYear)) {
          const targetPassout = parsedYear + 3
          if (targetPassout <= 2040) {
            updated.passoutYear = String(targetPassout)
          } else {
            updated.passoutYear = '2040'
          }
        }
      }
      return updated
    })
  }

  const handleAddDegree = () => {
    setRegisterForm(prev => ({
      ...prev,
      degrees: [...(prev.degrees || []), { degree: '', domain: '' }]
    }))
  }

  const handleRemoveDegree = (index) => {
    setRegisterForm(prev => ({
      ...prev,
      degrees: (prev.degrees || []).filter((_, i) => i !== index)
    }))
  }

  const handleDegreeChange = (index, field, val) => {
    setRegisterForm(prev => {
      const updatedDegrees = [...(prev.degrees || [])]
      updatedDegrees[index] = { ...updatedDegrees[index], [field]: val }
      return {
        ...prev,
        degrees: updatedDegrees
      }
    })
  }

  const handleAddCertification = () => {
    setRegisterForm(prev => ({
      ...prev,
      certifications: [...(prev.certifications || []), { area: '', detail: '' }]
    }))
  }

  const handleRemoveCertification = (index) => {
    setRegisterForm(prev => ({
      ...prev,
      certifications: (prev.certifications || []).filter((_, i) => i !== index)
    }))
  }

  const handleCertificationChange = (index, field, val) => {
    setRegisterForm(prev => {
      const updated = [...(prev.certifications || [])]
      updated[index] = { ...updated[index], [field]: val }
      return {
        ...prev,
        certifications: updated
      }
    })
  }

  const handleMultiSelectChange = (name, val) => {
    setRegisterForm(prev => {
      const current = prev[name] || []
      const updated = current.includes(val)
        ? current.filter(item => item !== val)
        : [...current, val]
      return {
        ...prev,
        [name]: updated
      }
    })
  }

  const handleAddAward = () => {
    setRegisterForm(prev => ({
      ...prev,
      awards: [...(prev.awards || []), '']
    }))
  }

  const handleRemoveAward = (index) => {
    setRegisterForm(prev => ({
      ...prev,
      awards: (prev.awards || []).filter((_, i) => i !== index)
    }))
  }

  const handleAwardChange = (index, val) => {
    setRegisterForm(prev => {
      const updated = [...(prev.awards || [])]
      updated[index] = val
      return {
        ...prev,
        awards: updated
      }
    })
  }

  const handleAddHobby = () => {
    setRegisterForm(prev => ({
      ...prev,
      hobbies: [...(prev.hobbies || []), '']
    }))
  }

  const handleRemoveHobby = (index) => {
    setRegisterForm(prev => ({
      ...prev,
      hobbies: (prev.hobbies || []).filter((_, i) => i !== index)
    }))
  }

  const handleHobbyChange = (index, val) => {
    setRegisterForm(prev => {
      const updated = [...(prev.hobbies || [])]
      updated[index] = val
      return {
        ...prev,
        hobbies: updated
      }
    })
  }

  // Login Submit Handler
  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (isFirebaseConfigured) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, loginForm.email, loginForm.password)
        const user = userCredential.user

        // Retrieve user profile data from Firestore
        const userDocRef = doc(db, 'users', user.uid)
        const userDocSnap = await getDoc(userDocRef)

        let userToLogin = null
        if (userDocSnap.exists()) {
          const profileData = userDocSnap.data()
          const parsedPhone = parsePhoneNumber(profileData.phone)
          const parsedSecPhone = parsePhoneNumber(profileData.secondaryPhone)
          const parsedWhatsapp = parsePhoneNumber(profileData.whatsapp)

          // Let's parse productServices
          let loadedProductServices = [];
          if (Array.isArray(profileData.productServices)) {
            loadedProductServices = profileData.productServices;
          } else if (profileData.productServices) {
            loadedProductServices = [profileData.productServices];
          }

          // Let's parse certifications
          let loadedCertifications = [];
          if (Array.isArray(profileData.certifications)) {
            loadedCertifications = profileData.certifications;
          } else if (profileData.areaOfCertification) {
            loadedCertifications = [{ area: profileData.areaOfCertification, detail: '' }];
          }

          userToLogin = {
            uid: user.uid,
            name: profileData.name || user.displayName || 'Alumni Member',
            email: user.email,
            dob: profileData.dob || '',
            middleName: profileData.middleName || '',
            userType: profileData.userType || '',
            bloodGroup: profileData.bloodGroup || '',
            phoneCode: parsedPhone.code,
            phone: parsedPhone.number,
            secondaryPhoneCode: parsedSecPhone.code,
            secondaryPhone: parsedSecPhone.number,
            whatsappCode: parsedWhatsapp.code,
            whatsapp: parsedWhatsapp.number,
            batch: profileData.batch || profileData.passoutYear || '',
            passoutYear: profileData.passoutYear || profileData.batch || '',
            degree: profileData.degree || '',
            jobTitle: profileData.jobTitle || '',
            company: profileData.company || '',
            linkedin: profileData.linkedin || '',
            verification_status: profileData.verification_status !== undefined ? profileData.verification_status : false,
            account_type: profileData.account_type || 'alumni',
            // New fields
            city: profileData.city || '',
            state: profileData.state || '',
            country: profileData.country || '',
            certifications: loadedCertifications,
            productServices: loadedProductServices,
            otherProductServices: profileData.otherProductServices || '',
            department: profileData.department || '',
            workingSince: profileData.workingSince || '',
            companyCity: profileData.companyCity || '',
            companyState: profileData.companyState || '',
            companyCountry: profileData.companyCountry || '',
            lastPromotionDesignation: profileData.lastPromotionDesignation || '',
            lastPromotionMonth: profileData.lastPromotionMonth || '',
            lastPromotionYear: profileData.lastPromotionYear || '',
            awards: profileData.awards || [],
            hobbies: profileData.hobbies || []
          }
        } else {
          userToLogin = {
            uid: user.uid,
            name: user.displayName || 'Alumni Member',
            email: user.email,
            dob: '',
            middleName: '',
            userType: '',
            bloodGroup: '',
            phoneCode: '+91',
            phone: '',
            secondaryPhoneCode: '+91',
            secondaryPhone: '',
            whatsappCode: '+91',
            whatsapp: '',
            batch: '',
            degree: '',
            jobTitle: '',
            company: '',
            linkedin: '',
            verification_status: false,
            account_type: 'alumni',
            // New fields
            city: '',
            state: '',
            country: '',
            certifications: [],
            productServices: [],
            department: '',
            workingSince: '',
            companyCity: '',
            companyState: '',
            companyCountry: '',
            lastPromotionDesignation: '',
            lastPromotionMonth: '',
            lastPromotionYear: '',
            awards: [],
            hobbies: []
          }
        }

        setSuccessMessage(`Welcome back, ${userToLogin.name.split(' ')[0]}! Redirecting to Alumni Portal...`)
        setShowSuccess(true)
        setLoading(false)

        setTimeout(() => {
          onLoginSuccess(userToLogin)
          navigate('/')
        }, 1500)
      } catch (err) {
        setLoading(false)
        console.error("Firebase Login Error:", err)
        if (err.code === 'auth/invalid-credential' || err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
          setError('Invalid email address or password.')
        } else if (err.code === 'auth/invalid-email') {
          setError('Please enter a valid email address.')
        } else {
          setError(err.message || 'An error occurred during sign in. Please try again.')
        }
      }
    } else {
      // Fallback Mock Authentication
      setTimeout(() => {
        const registeredUser = localStorage.getItem('mockRegisteredAlumni')
        let matchedUser = null

        if (registeredUser) {
          const parsed = JSON.parse(registeredUser)
          if (parsed.email === loginForm.email && loginForm.password === 'password123') {
            matchedUser = parsed
          } else if (parsed.email === loginForm.email && parsed.password === loginForm.password) {
            matchedUser = parsed
          }
        }

        const defaultMockAlumni = [
          { uid: 'mock-uid-sid', email: 'alumni@dft.edu', name: 'Dr. Siddharth Patel', batch: '1998', degree: 'Ph.D. Textile', password: 'password123' },
          { uid: 'mock-uid-john', email: 'john.doe@example.com', name: 'John Doe', batch: '2015', degree: 'B.Tech Textile', password: 'password123' }
        ]

        const defaultMatch = defaultMockAlumni.find(u => u.email === loginForm.email && u.password === loginForm.password)
        const userToLogin = matchedUser || defaultMatch

        if (userToLogin) {
          setSuccessMessage(`Welcome back, ${userToLogin.name.split(' ')[0]}! Redirecting to Alumni Portal... (Mock Mode)`)
          setShowSuccess(true)
          setLoading(false)

          setTimeout(() => {
            const parsedPhone = parsePhoneNumber(userToLogin.phone)
            const parsedSecPhone = parsePhoneNumber(userToLogin.secondaryPhone)
            const parsedWhatsapp = parsePhoneNumber(userToLogin.whatsapp)

            onLoginSuccess({
              uid: userToLogin.uid || 'mock-uid-unspecified',
              name: userToLogin.name,
              email: userToLogin.email,
              middleName: userToLogin.middleName || '',
              userType: userToLogin.userType || '',
              bloodGroup: userToLogin.bloodGroup || '',
              phoneCode: parsedPhone.code,
              phone: parsedPhone.number,
              secondaryPhoneCode: parsedSecPhone.code,
              secondaryPhone: parsedSecPhone.number,
              whatsappCode: parsedWhatsapp.code,
              whatsapp: parsedWhatsapp.number,
              batch: userToLogin.batch || userToLogin.passoutYear || '',
              passoutYear: userToLogin.passoutYear || userToLogin.batch || '',
              degree: userToLogin.degree,
              linkedin: userToLogin.linkedin || '',
              verification_status: userToLogin.verification_status !== undefined ? userToLogin.verification_status : false,
              account_type: userToLogin.account_type || 'alumni',
              otherProductServices: userToLogin.otherProductServices || ''
            })
            navigate('/')
          }, 1500)
        } else {
          setLoading(false)
          setError('Invalid email address or password. (Hint: Use alumni@dft.edu / password123)')
        }
      }, 1200)
    }
  }

  // Registration Submit Handler
  const handleRegisterSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // Validations
    if (!registerForm.middleName.trim()) {
      setError('Middle name is compulsory.')
      return
    }

    if (registerForm.password !== registerForm.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (registerForm.password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    if (!registerForm.phone.trim()) {
      setError('Contact number is compulsory.')
      return
    }

    if (!registerForm.whatsapp.trim()) {
      setError('WhatsApp number is compulsory.')
      return
    }

    if (!registerForm.userType) {
      setError('Please select whether you are a DFT Alumni or Student.')
      return
    }

    if (captchaInput !== captchaCode) {
      setError('Incorrect security verification code. Please try again.')
      return
    }

    const admYear = parseInt(registerForm.admissionYear, 10)
    const passYear = parseInt(registerForm.passoutYear, 10)
    const currentYear = new Date().getFullYear()

    if (isNaN(admYear) || admYear < 1970 || admYear > currentYear + 6) {
      setError(`Please enter a valid DFT Admission Year (1970 - ${currentYear + 6}).`)
      return
    }

    if (isNaN(passYear) || passYear < 1970 || passYear > currentYear + 6) {
      setError(`Please enter a valid DFT Passout Year (1970 - ${currentYear + 6}).`)
      return
    }

    if (admYear > passYear) {
      setError('DFT Admission Year cannot be after DFT Passout Year.')
      return
    }

    setLoading(true)

    if (isFirebaseConfigured) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, registerForm.email, registerForm.password)
        const user = userCredential.user

        // Save additional profile details to Firestore
        await setDoc(doc(db, 'users', user.uid), {
          firstName: registerForm.firstName,
          middleName: registerForm.middleName,
          lastName: registerForm.lastName,
          name: [registerForm.firstName.trim(), registerForm.middleName.trim(), registerForm.lastName.trim()].filter(Boolean).join(' '),
          email: registerForm.email,
          dob: registerForm.dob,
          phone: `${registerForm.phoneCode} ${registerForm.phone}`.trim(),
          secondaryPhone: registerForm.secondaryPhone ? `${registerForm.secondaryPhoneCode} ${registerForm.secondaryPhone}`.trim() : '',
          whatsapp: `${registerForm.whatsappCode} ${registerForm.whatsapp}`.trim(),
          userType: registerForm.userType,
          bloodGroup: registerForm.bloodGroup,
          admissionYear: registerForm.admissionYear,
          passoutYear: registerForm.passoutYear,
          degrees: registerForm.degrees || [],
          jobTitle: registerForm.jobTitle || '',
          company: registerForm.company || '',
          linkedin: registerForm.linkedin || '',
          profession: registerForm.profession || '',
          companyWebsite: registerForm.companyWebsite || '',
          verification_status: false,
          account_type: 'alumni',
          createdAt: new Date().toISOString(),

          // New fields
          city: registerForm.city || '',
          state: registerForm.state || '',
          country: registerForm.country || '',
          certifications: registerForm.certifications || [],
          productServices: registerForm.productServices || [],
          otherProductServices: registerForm.productServices.includes('Others') ? registerForm.otherProductServices || '' : '',
          department: registerForm.department || '',
          workingSince: registerForm.workingSince || '',
          companyCity: registerForm.companyCity || '',
          companyState: registerForm.companyState || '',
          companyCountry: registerForm.companyCountry || '',
          lastPromotionDesignation: registerForm.lastPromotionDesignation || '',
          lastPromotionMonth: registerForm.lastPromotionMonth || '',
          lastPromotionYear: registerForm.lastPromotionYear || '',
          awards: registerForm.awards || [],
          hobbies: registerForm.hobbies || []
        })

        const newUser = {
          uid: user.uid,
          name: [registerForm.firstName.trim(), registerForm.middleName.trim(), registerForm.lastName.trim()].filter(Boolean).join(' '),
          email: registerForm.email,
          dob: registerForm.dob,
          phone: `${registerForm.phoneCode} ${registerForm.phone}`.trim(),
          secondaryPhone: registerForm.secondaryPhone ? `${registerForm.secondaryPhoneCode} ${registerForm.secondaryPhone}`.trim() : '',
          whatsapp: `${registerForm.whatsappCode} ${registerForm.whatsapp}`.trim(),
          userType: registerForm.userType,
          bloodGroup: registerForm.bloodGroup,
          admissionYear: registerForm.admissionYear,
          passoutYear: registerForm.passoutYear,
          batch: registerForm.passoutYear,
          degrees: registerForm.degrees || [],
          jobTitle: registerForm.jobTitle || '',
          company: registerForm.company || '',
          linkedin: registerForm.linkedin || '',
          dom: registerForm.dom || '',
          profession: registerForm.profession || '',
          companyWebsite: registerForm.companyWebsite || '',
          verification_status: false,
          account_type: 'alumni',

          // New fields
          city: registerForm.city || '',
          state: registerForm.state || '',
          country: registerForm.country || '',
          certifications: registerForm.certifications || [],
          productServices: registerForm.productServices || [],
          otherProductServices: registerForm.productServices.includes('Others') ? registerForm.otherProductServices || '' : '',
          department: registerForm.department || '',
          workingSince: registerForm.workingSince || '',
          companyCity: registerForm.companyCity || '',
          companyState: registerForm.companyState || '',
          companyCountry: registerForm.companyCountry || '',
          lastPromotionDesignation: registerForm.lastPromotionDesignation || '',
          lastPromotionMonth: registerForm.lastPromotionMonth || '',
          lastPromotionYear: registerForm.lastPromotionYear || '',
          awards: registerForm.awards || [],
          hobbies: registerForm.hobbies || []
        }

        setRegisteredUserObj(newUser)
        setShowRegSuccessModal(true)
        setLoading(false)
      } catch (err) {
        setLoading(false)
        console.error("Firebase Registration Error:", err)
        if (err.code === 'auth/email-already-in-use') {
          setError('An account with this email address already exists.')
        } else if (err.code === 'auth/invalid-email') {
          setError('Please enter a valid email address.')
        } else {
          setError(err.message || 'An error occurred during registration. Please try again.')
        }
      }
    } else {
      // Fallback Mock Registration
      setTimeout(() => {
        const newUser = {
          uid: 'mock-uid-registered',
          name: [registerForm.firstName.trim(), registerForm.middleName.trim(), registerForm.lastName.trim()].filter(Boolean).join(' '),
          email: registerForm.email,
          dob: registerForm.dob,
          phone: `${registerForm.phoneCode} ${registerForm.phone}`.trim(),
          secondaryPhone: registerForm.secondaryPhone ? `${registerForm.secondaryPhoneCode} ${registerForm.secondaryPhone}`.trim() : '',
          whatsapp: `${registerForm.whatsappCode} ${registerForm.whatsapp}`.trim(),
          password: registerForm.password,
          middleName: registerForm.middleName,
          userType: registerForm.userType,
          bloodGroup: registerForm.bloodGroup,
          admissionYear: registerForm.admissionYear,
          passoutYear: registerForm.passoutYear,
          degrees: registerForm.degrees || [],
          jobTitle: registerForm.jobTitle || '',
          company: registerForm.company || '',
          linkedin: registerForm.linkedin || '',
          dom: registerForm.dom || '',
          profession: registerForm.profession || '',
          companyWebsite: registerForm.companyWebsite || '',
          verification_status: false,
          account_type: 'alumni',

          // New fields
          city: registerForm.city || '',
          state: registerForm.state || '',
          country: registerForm.country || '',
          certifications: registerForm.certifications || [],
          productServices: registerForm.productServices || [],
          otherProductServices: registerForm.productServices.includes('Others') ? registerForm.otherProductServices || '' : '',
          department: registerForm.department || '',
          workingSince: registerForm.workingSince || '',
          companyCity: registerForm.companyCity || '',
          companyState: registerForm.companyState || '',
          companyCountry: registerForm.companyCountry || '',
          lastPromotionDesignation: registerForm.lastPromotionDesignation || '',
          lastPromotionMonth: registerForm.lastPromotionMonth || '',
          lastPromotionYear: registerForm.lastPromotionYear || '',
          awards: registerForm.awards || [],
          hobbies: registerForm.hobbies || []
        }

        localStorage.setItem('mockRegisteredAlumni', JSON.stringify(newUser))

        const mockCreatedUserObj = {
          uid: newUser.uid,
          name: newUser.name,
          email: newUser.email,
          dob: newUser.dob,
          phone: newUser.phone,
          secondaryPhone: newUser.secondaryPhone,
          whatsapp: newUser.whatsapp,
          middleName: newUser.middleName,
          userType: newUser.userType,
          bloodGroup: newUser.bloodGroup,
          admissionYear: newUser.admissionYear,
          passoutYear: newUser.passoutYear,
          batch: newUser.passoutYear,
          degrees: newUser.degrees || [],
          linkedin: newUser.linkedin || '',
          dom: newUser.dom || '',
          profession: newUser.profession || '',
          companyWebsite: newUser.companyWebsite || '',
          verification_status: false,
          account_type: 'alumni',

          // New fields
          city: newUser.city || '',
          state: newUser.state || '',
          country: newUser.country || '',
          certifications: newUser.certifications || [],
          productServices: newUser.productServices || [],
          otherProductServices: newUser.otherProductServices || '',
          department: newUser.department || '',
          workingSince: newUser.workingSince || '',
          companyCity: newUser.companyCity || '',
          companyState: newUser.companyState || '',
          companyCountry: newUser.companyCountry || '',
          lastPromotionDesignation: newUser.lastPromotionDesignation || '',
          lastPromotionMonth: newUser.lastPromotionMonth || '',
          lastPromotionYear: newUser.lastPromotionYear || '',
          awards: newUser.awards || [],
          hobbies: newUser.hobbies || []
        }

        setRegisteredUserObj(mockCreatedUserObj)
        setShowRegSuccessModal(true)
        setLoading(false)
      }, 1500)
    }
  }

  // Forgot Password Handler
  const handleForgotPassword = async () => {
    if (!loginForm.email) {
      setError('Please enter your email address in the Sign In form first.')
      return
    }
    setError('')
    setVerifyPhoneInput('')
    setVerifyPhoneError('')
    setShowPhoneModal(true)
  }

  // Verify Phone and send password reset link
  const handleVerifyAndResetPassword = async (e) => {
    if (e) e.preventDefault()
    setVerifyPhoneError('')

    if (!verifyPhoneInput.trim()) {
      setVerifyPhoneError('Please enter a phone number.')
      return
    }

    setLoading(true)

    const inputDigits = verifyPhoneInput.replace(/\D/g, '')
    if (!inputDigits) {
      setVerifyPhoneError('Please enter a valid phone number with digits.')
      setLoading(false)
      return
    }

    if (isFirebaseConfigured) {
      try {
        // Query users collection for user doc with matching email
        const q = query(collection(db, 'users'), where('email', '==', loginForm.email.trim()))
        const querySnapshot = await getDocs(q)

        if (querySnapshot.empty) {
          setVerifyPhoneError('No account found with this email address.')
          setLoading(false)
          return
        }

        let matchedUser = null
        querySnapshot.forEach(doc => {
          matchedUser = doc.data()
        })

        const storedPhoneDigits = matchedUser.phone ? matchedUser.phone.replace(/\D/g, '') : ''
        const storedSecPhoneDigits = matchedUser.secondaryPhone ? matchedUser.secondaryPhone.replace(/\D/g, '') : ''
        const storedWhatsappDigits = matchedUser.whatsapp ? matchedUser.whatsapp.replace(/\D/g, '') : ''

        const isMatch = (
          (storedPhoneDigits && (storedPhoneDigits.endsWith(inputDigits) || inputDigits.endsWith(storedPhoneDigits))) ||
          (storedSecPhoneDigits && (storedSecPhoneDigits.endsWith(inputDigits) || inputDigits.endsWith(storedSecPhoneDigits))) ||
          (storedWhatsappDigits && (storedWhatsappDigits.endsWith(inputDigits) || inputDigits.endsWith(storedWhatsappDigits)))
        )

        if (!isMatch) {
          setVerifyPhoneError('Provided phone number does not match our records.')
          setLoading(false)
          return
        }

        // Match found! Send password reset email
        await sendPasswordResetEmail(auth, loginForm.email.trim())
        setShowPhoneModal(false)
        setError('')
        setSuccessMessage(`Password reset link sent to ${loginForm.email}! Check your inbox.`)
        setShowSuccess(true)
        setLoading(false)
        setTimeout(() => setShowSuccess(false), 4000)
      } catch (err) {
        setLoading(false)
        console.error("Firebase Password Reset/Verify Error:", err)
        if (err.code === 'auth/invalid-email') {
          setVerifyPhoneError('Please enter a valid email address.')
        } else {
          setVerifyPhoneError(err.message || 'Error processing request.')
        }
      }
    } else {
      // Fallback Mock Password Reset verification
      setTimeout(() => {
        const mockRegistered = localStorage.getItem('mockRegisteredAlumni')
        if (mockRegistered) {
          const parsed = JSON.parse(mockRegistered)
          if (parsed.email === loginForm.email.trim()) {
            const storedPhoneDigits = parsed.phone ? parsed.phone.replace(/\D/g, '') : ''
            const storedSecPhoneDigits = parsed.secondaryPhone ? parsed.secondaryPhone.replace(/\D/g, '') : ''
            const storedWhatsappDigits = parsed.whatsapp ? parsed.whatsapp.replace(/\D/g, '') : ''

            const isMatch = (
              (storedPhoneDigits && (storedPhoneDigits.endsWith(inputDigits) || inputDigits.endsWith(storedPhoneDigits))) ||
              (storedSecPhoneDigits && (storedSecPhoneDigits.endsWith(inputDigits) || inputDigits.endsWith(storedSecPhoneDigits))) ||
              (storedWhatsappDigits && (storedWhatsappDigits.endsWith(inputDigits) || inputDigits.endsWith(storedWhatsappDigits)))
            )

            if (!isMatch) {
              setVerifyPhoneError('Provided phone number does not match our mock records.')
              setLoading(false)
              return
            }

            // Match found! Mock success
            setShowPhoneModal(false)
            setSuccessMessage(`Password reset link has been mock-sent to ${loginForm.email}.`)
            setShowSuccess(true)
            setLoading(false)
            setTimeout(() => setShowSuccess(false), 4000)
          } else {
            setVerifyPhoneError('No account found with this email address in Mock records.')
            setLoading(false)
          }
        } else {
          setVerifyPhoneError('No accounts registered in Mock local storage.')
          setLoading(false)
        }
      }, 1000)
    }
  }

  return (
    <div className="login-page">
      {/* Background Decorative Blobs */}
      <div className="login-page__decor-circle login-page__decor-circle--1"></div>
      <div className="login-page__decor-circle login-page__decor-circle--2"></div>

      <div className="login-container">
        {/* Back Button */}
        <button className="login-container__back-btn" onClick={() => navigate('/')}>
          <FaHome /> BACK TO HOME
        </button>

        <div className="login-card">

          {/* Left: Brand Column (Visible on Desktop/Tablet, Collapses on Mobile) */}
          <div className="login-card__brand-panel">
            <div className="login-card__brand-overlay"></div>
            <div className="login-card__brand-content">
              <div className="login-card__brand-logo-wrap">
                <img src={alumniLogo} alt="Alumni Logo" className="login-card__brand-logo" />
              </div>
              <h1 className="login-card__brand-title display-title">Alumni Portal</h1>
              <div className="login-card__brand-divider"></div>
              <p className="login-card__brand-tagline">TOGETHER · UNITED · STRONGER</p>
              <p className="login-card__brand-desc">
                Connecting and empowering the DFT Alumni family worldwide. Access the Portal to connect with batchmates, participate in meets, and grow together.
              </p>
            </div>
          </div>

          {/* Right: Form Column */}
          <div className="login-card__form-panel">

            {/* Sliding Tab Control */}
            <div className="login-tabs">
              <button
                className={`login-tabs__btn ${activeTab === 'login' ? 'active' : ''}`}
                onClick={() => handleTabChange('login')}
                disabled={loading || showSuccess}
              >
                Sign In
              </button>
              <button
                className={`login-tabs__btn ${activeTab === 'register' ? 'active' : ''}`}
                onClick={() => handleTabChange('register')}
                disabled={loading || showSuccess}
              >
                Create Account
              </button>
              <div className={`login-tabs__indicator ${activeTab === 'register' ? 'slide' : ''}`}></div>
            </div>

            {/* Success Animation Overlay */}
            {showSuccess && (
              <div className="login-success-overlay">
                <div className="login-success-overlay__content">
                  <FaCheckCircle className="success-icon-anim" />
                  <h3 className="display-title">SUCCESSFUL</h3>
                  <p>{successMessage}</p>
                </div>
              </div>
            )}

            {/* Card Body containing Form */}
            <div className="login-card__body">

              {/* Compact Header for Mobile/Portrait Screens (Hidden on Desktop) */}
              <div className="login-card__mobile-brand">
                <div className="login-card__mobile-logo-wrap">
                  <img src={alumniLogo} alt="Alumni Logo" className="login-card__mobile-logo" />
                </div>
                <div>
                  <h2 className="login-card__mobile-title">Alumni Portal</h2>
                  <p className="login-card__mobile-tagline">Together · United · Stronger</p>
                </div>
              </div>

              {error && (
                <div className="login-error-alert">
                  <FaTimesCircle className="login-error-alert__icon" />
                  <span>{error}</span>
                </div>
              )}

              {activeTab === 'login' ? (
                /* SIGN IN VIEW */
                <form className="login-form" onSubmit={handleLoginSubmit}>
                  <div className="login-field">
                    <label htmlFor="login-email">Email Address <span className="login-field__required">*</span></label>
                    <div className="login-field__input-wrap">
                      <FaEnvelope className="login-field__icon" />
                      <input
                        id="login-email"
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={loginForm.email}
                        onChange={handleLoginChange}
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <div className="login-field">
                    <label htmlFor="login-password">Password <span className="login-field__required">*</span></label>
                    <div className="login-field__input-wrap">
                      <FaLock className="login-field__icon" />
                      <input
                        id="login-password"
                        type={showLoginPassword ? "text" : "password"}
                        name="password"
                        placeholder="••••••••"
                        value={loginForm.password}
                        onChange={handleLoginChange}
                        required
                        disabled={loading}
                      />
                      <button
                        type="button"
                        className="login-field__toggle-pw"
                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                        tabIndex="-1"
                      >
                        {showLoginPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>

                  <div className="login-form__actions">
                    <label className="login-checkbox">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={loginForm.rememberMe}
                        onChange={handleLoginChange}
                        disabled={loading}
                      />
                      <span className="login-checkbox__box"></span>
                      <span className="login-checkbox__label">Remember me</span>
                    </label>

                    <button
                      type="button"
                      className="login-forgot-link"
                      onClick={handleForgotPassword}
                      disabled={loading}
                    >
                      Forgot Password?
                    </button>
                  </div>

                  <button
                    type="submit"
                    className={`login-submit-btn ${loading ? 'loading' : ''}`}
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="login-spinner"></span>
                    ) : (
                      <>
                        SIGN IN <FaArrowRight />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* REGISTRATION VIEW */
                <form className="login-form" onSubmit={handleRegisterSubmit}>

                  <h4 className="login-section-title">Personal Details</h4>
                  <div className="login-form__grid-3">
                    <div className="login-field">
                      <label htmlFor="reg-first-name">First Name <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap">
                        <FaUser className="login-field__icon" />
                        <input
                          id="reg-first-name"
                          type="text"
                          name="firstName"
                          placeholder="John"
                          value={registerForm.firstName}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>
                    <div className="login-field">
                      <label htmlFor="reg-middle-name">Middle Name <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap">
                        <FaUser className="login-field__icon" />
                        <input
                          id="reg-middle-name"
                          type="text"
                          name="middleName"
                          placeholder="Kumar"
                          value={registerForm.middleName}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>
                    <div className="login-field">
                      <label htmlFor="reg-last-name">Last Name <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap">
                        <FaUser className="login-field__icon" />
                        <input
                          id="reg-last-name"
                          type="text"
                          name="lastName"
                          placeholder="Doe"
                          value={registerForm.lastName}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="login-form__grid">
                    <div className="login-field">
                      <label htmlFor="reg-email">Email Address <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap">
                        <FaEnvelope className="login-field__icon" />
                        <input
                          id="reg-email"
                          type="email"
                          name="email"
                          placeholder="john.doe@example.com"
                          value={registerForm.email}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-bloodgroup">Blood Group</label>
                      <div className="login-field__input-wrap">
                        <FaHeart className="login-field__icon" />
                        <select
                          id="reg-bloodgroup"
                          name="bloodGroup"
                          value={registerForm.bloodGroup}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        >
                          <option value="">Select Blood Group</option>
                          <option value="A+">A+</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B-">B-</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-">AB-</option>
                          <option value="O+">O+</option>
                          <option value="O-">O-</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="login-form__grid">
                    <div className="login-field">
                      <label htmlFor="reg-dob">Date of Birth <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap">
                        <FaCalendarAlt className="login-field__icon" />
                        <input
                          id="reg-dob"
                          type="date"
                          name="dob"
                          value={registerForm.dob}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-dom">Date of Marriage</label>
                      <div className="login-field__input-wrap">
                        <FaCalendarAlt className="login-field__icon" />
                        <input
                          id="reg-dom"
                          type="date"
                          name="dom"
                          value={registerForm.dom}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="login-form__grid">
                    <div className="login-field">
                      <label htmlFor="reg-phone">Contact Number <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap phone-input-wrap">
                        <span className={`fi fi-${getCountryIso(registerForm.phoneCode)} login-field__icon`}></span>
                        <select
                          className="phone-country-select"
                          name="phoneCode"
                          value={registerForm.phoneCode}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        >
                          {countryCodes.map(c => <option key={c.code} value={c.code}>{c.label}</option>)}
                        </select>
                        <input
                          id="reg-phone"
                          type="tel"
                          name="phone"
                          placeholder="98765 43210"
                          value={registerForm.phone}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-sec-phone">Secondary Contact Number</label>
                      <div className="login-field__input-wrap phone-input-wrap">
                        <span className={`fi fi-${getCountryIso(registerForm.secondaryPhoneCode)} login-field__icon`}></span>
                        <select
                          className="phone-country-select"
                          name="secondaryPhoneCode"
                          value={registerForm.secondaryPhoneCode}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        >
                          {countryCodes.map(c => <option key={c.code} value={c.code}>{c.label}</option>)}
                        </select>
                        <input
                          id="reg-sec-phone"
                          type="tel"
                          name="secondaryPhone"
                          placeholder="Optional"
                          value={registerForm.secondaryPhone}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-whatsapp">WhatsApp Number <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap phone-input-wrap">
                        <span className={`fi fi-${getCountryIso(registerForm.whatsappCode)} login-field__icon`}></span>
                        <select
                          className="phone-country-select"
                          name="whatsappCode"
                          value={registerForm.whatsappCode}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        >
                          {countryCodes.map(c => <option key={c.code} value={c.code}>{c.label}</option>)}
                        </select>
                        <input
                          id="reg-whatsapp"
                          type="tel"
                          name="whatsapp"
                          placeholder="98765 43210"
                          value={registerForm.whatsapp}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field" style={{ visibility: 'hidden' }}></div>
                  </div>

                  <div className="login-form__grid-3" style={{ marginTop: '15px' }}>
                    <div className="login-field">
                      <label htmlFor="reg-city">City</label>
                      <div className="login-field__input-wrap">
                        <FaMapMarkerAlt className="login-field__icon" />
                        <input
                          id="reg-city"
                          type="text"
                          name="city"
                          placeholder="Ahmedabad"
                          value={registerForm.city}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>
                    <div className="login-field">
                      <label htmlFor="reg-state">State</label>
                      <div className="login-field__input-wrap">
                        <FaMapMarkerAlt className="login-field__icon" />
                        <input
                          id="reg-state"
                          type="text"
                          name="state"
                          placeholder="Gujarat"
                          value={registerForm.state}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>
                    <div className="login-field">
                      <label htmlFor="reg-country">Country</label>
                      <div className="login-field__input-wrap">
                        <FaGlobe className="login-field__icon" />
                        <input
                          id="reg-country"
                          type="text"
                          name="country"
                          placeholder="India"
                          value={registerForm.country}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>
                  </div>

                  <h4 className="login-section-title" style={{ marginTop: '20px' }}>Academic Details</h4>
                  <div className="login-form__grid">
                    <div className="login-field login-field--full">
                      <label htmlFor="reg-usertype">Are you DFT Alumni or Student <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap">
                        <FaUser className="login-field__icon" />
                        <select
                          id="reg-usertype"
                          name="userType"
                          value={registerForm.userType}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        >
                          <option value="">Select Option</option>
                          <option value="Alumni">DFT Alumni</option>
                          <option value="Student">Student</option>
                        </select>
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-admission">DFT Admission Year <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap">
                        <FaCalendarAlt className="login-field__icon" />
                        <select
                          id="reg-admission"
                          name="admissionYear"
                          value={registerForm.admissionYear}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        >
                          <option value="">Select Year</option>
                          {ACADEMIC_YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-passout">DFT Passout Year <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap">
                        <FaCalendarAlt className="login-field__icon" />
                        <select
                          id="reg-passout"
                          name="passoutYear"
                          value={registerForm.passoutYear}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        >
                          <option value="">Select Year</option>
                          {ACADEMIC_YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Previous Academic Details list */}
                  {((registerForm.degrees || []).length > 0) && (
                    <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--slate)' }}>
                        Previous Academic Details
                      </label>
                      {(registerForm.degrees || []).map((deg, index) => (
                        <div key={index} className="previous-degree-row">
                          <div className="login-field">
                            <label htmlFor={`reg-deg-title-${index}`}>Degree <span className="login-field__required">*</span></label>
                            <div className="login-field__input-wrap">
                              <FaGraduationCap className="login-field__icon" />
                              <select
                                id={`reg-deg-title-${index}`}
                                name="degree"
                                value={deg.degree}
                                onChange={(e) => handleDegreeChange(index, 'degree', e.target.value)}
                                required
                                disabled={loading}
                              >
                                <option value="">Select Degree</option>
                                {DEGREE_OPTIONS.map(d => <option key={d} value={d}>{d}</option>)}
                              </select>
                            </div>
                          </div>

                          <div className="login-field">
                            <label htmlFor={`reg-deg-domain-${index}`}>Domain <span className="login-field__required">*</span></label>
                            <div className="login-field__input-wrap">
                              <FaGraduationCap className="login-field__icon" />
                              <input
                                id={`reg-deg-domain-${index}`}
                                type="text"
                                placeholder="Domain (e.g. Textile Technology)"
                                value={deg.domain}
                                onChange={(e) => handleDegreeChange(index, 'domain', e.target.value)}
                                required
                                disabled={loading}
                              />
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleRemoveDegree(index)}
                            className="profile-btn profile-btn--secondary"
                            style={{
                              width: '100%',
                              height: '44px',
                              padding: 0,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'var(--signal-red)',
                              backgroundColor: 'rgba(232, 48, 42, 0.05)',
                              borderColor: 'var(--line-grey)'
                            }}
                            title="Remove Degree"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Add Degree Button */}
                  <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'flex-start' }}>
                    <button
                      type="button"
                      onClick={handleAddDegree}
                      className="profile-btn profile-btn--secondary"
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 18px', fontSize: '0.8rem' }}
                      disabled={loading}
                    >
                      <FaPlus /> Add Degree
                    </button>
                  </div>

                  <h4 className="login-section-title" style={{ marginTop: '20px' }}>Professional Details</h4>
                  <div className="login-form__grid">
                    <div className="login-field login-field--full">
                      <label htmlFor="reg-profession">Profession</label>
                      <div className="login-field__input-wrap">
                        <FaBriefcase className="login-field__icon" />
                        <select
                          id="reg-profession"
                          name="profession"
                          value={registerForm.profession}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        >
                          <option value="">Select Profession</option>
                          <option value="Business">Business</option>
                          <option value="Job">Job</option>
                        </select>
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-company">Current Organization</label>
                      <div className="login-field__input-wrap">
                        <FaBuilding className="login-field__icon" />
                        <input
                          id="reg-company"
                          type="text"
                          name="company"
                          placeholder="Arvind Mills"
                          value={registerForm.company}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-department">Department</label>
                      <div className="login-field__input-wrap">
                        <FaSitemap className="login-field__icon" />
                        <input
                          id="reg-department"
                          type="text"
                          name="department"
                          placeholder="e.g. Sales, Quality Assurance"
                          value={registerForm.department}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-job">Current Job Title</label>
                      <div className="login-field__input-wrap">
                        <FaBriefcase className="login-field__icon" />
                        <input
                          id="reg-job"
                          type="text"
                          name="jobTitle"
                          placeholder="Senior Merchandiser"
                          value={registerForm.jobTitle}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-working-since">Working Since</label>
                      <div className="login-field__input-wrap">
                        <FaCalendarAlt className="login-field__icon" />
                        <input
                          id="reg-working-since"
                          type="date"
                          name="workingSince"
                          value={registerForm.workingSince}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field login-field--full">
                      <label htmlFor="reg-company-website">Company Website (Optional)</label>
                      <div className="login-field__input-wrap">
                        <FaGlobe className="login-field__icon" />
                        <input
                          id="reg-company-website"
                          type="url"
                          name="companyWebsite"
                          placeholder="https://example.com"
                          value={registerForm.companyWebsite}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field login-field--full">
                      <label htmlFor="reg-linkedin">LinkedIn Profile Link</label>
                      <div className="login-field__input-wrap">
                        <FaLinkedin className="login-field__icon" style={{ color: '#0077b5' }} />
                        <input
                          id="reg-linkedin"
                          type="url"
                          name="linkedin"
                          placeholder="https://linkedin.com/in/username"
                          value={registerForm.linkedin}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="login-form__grid-3" style={{ marginTop: '10px' }}>
                    <div className="login-field">
                      <label htmlFor="reg-company-city">Company Location (City)</label>
                      <div className="login-field__input-wrap">
                        <FaMapMarkerAlt className="login-field__icon" />
                        <input
                          id="reg-company-city"
                          type="text"
                          name="companyCity"
                          placeholder="e.g. Mumbai"
                          value={registerForm.companyCity}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>
                    <div className="login-field">
                      <label htmlFor="reg-company-state">Company Location (State)</label>
                      <div className="login-field__input-wrap">
                        <FaMapMarkerAlt className="login-field__icon" />
                        <input
                          id="reg-company-state"
                          type="text"
                          name="companyState"
                          placeholder="e.g. Maharashtra"
                          value={registerForm.companyState}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>
                    <div className="login-field">
                      <label htmlFor="reg-company-country">Company Location (Country)</label>
                      <div className="login-field__input-wrap">
                        <FaGlobe className="login-field__icon" />
                        <input
                          id="reg-company-country"
                          type="text"
                          name="companyCountry"
                          placeholder="e.g. India"
                          value={registerForm.companyCountry}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="login-form__grid" style={{ marginTop: '10px' }}>
                    <div className="login-field login-field--full">
                      <label>Detail of Product / Services offered by your Company</label>
                      <div className="product-services-checkbox-group">
                        {PRODUCT_SERVICE_OPTIONS.map(opt => {
                          const isChecked = (registerForm.productServices || []).includes(opt)
                          return (
                            <label key={opt} className="checkbox-option">
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => handleMultiSelectChange('productServices', opt)}
                                disabled={loading}
                              />
                              <span>{opt}</span>
                            </label>
                          )
                        })}
                      </div>
                    </div>

                    {registerForm.productServices.includes('Others') && (
                      <div className="login-field login-field--full" style={{ marginTop: '5px' }}>
                        <label htmlFor="reg-other-product-services">Please specify other products/services <span className="login-field__required">*</span></label>
                        <div className="login-field__input-wrap">
                          <FaBoxOpen className="login-field__icon" />
                          <input
                            id="reg-other-product-services"
                            type="text"
                            name="otherProductServices"
                            placeholder="Enter details of other products/services offered"
                            value={registerForm.otherProductServices}
                            onChange={handleRegisterChange}
                            required
                            disabled={loading}
                          />
                        </div>
                      </div>
                    )}

                    <div className="login-field">
                      <label htmlFor="reg-last-promotion">Last Received Promotion (Designation)</label>
                      <div className="login-field__input-wrap">
                        <FaAward className="login-field__icon" />
                        <input
                          id="reg-last-promotion"
                          type="text"
                          name="lastPromotionDesignation"
                          placeholder="e.g. Team Lead"
                          value={registerForm.lastPromotionDesignation}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field">
                      <label>Last Promotion Received Date (Month / Year)</label>
                      <div className="login-form__row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', padding: 0, margin: 0, border: 'none' }}>
                        <div className="login-field__input-wrap">
                          <FaCalendarAlt className="login-field__icon" />
                          <select
                            name="lastPromotionMonth"
                            value={registerForm.lastPromotionMonth}
                            onChange={handleRegisterChange}
                            disabled={loading}
                            style={{ paddingLeft: '42px' }}
                          >
                            <option value="">Select Month</option>
                            {MONTH_OPTIONS.map(m => <option key={m} value={m}>{m}</option>)}
                          </select>
                        </div>
                        <div className="login-field__input-wrap">
                          <FaCalendarAlt className="login-field__icon" />
                          <select
                            name="lastPromotionYear"
                            value={registerForm.lastPromotionYear}
                            onChange={handleRegisterChange}
                            disabled={loading}
                            style={{ paddingLeft: '42px' }}
                          >
                            <option value="">Select Year</option>
                            {PROMOTION_YEAR_OPTIONS.map(y => <option key={y} value={y}>{y}</option>)}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Certifications list */}
                  <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--slate)' }}>
                      Certifications
                    </label>
                    {((registerForm.certifications || []).length > 0) ? (
                      (registerForm.certifications || []).map((cert, index) => (
                        <div key={index} className="previous-degree-row">
                          <div className="login-field">
                            <label htmlFor={`reg-cert-area-${index}`}>Area of Certification</label>
                            <div className="login-field__input-wrap">
                              <FaCertificate className="login-field__icon" style={{ color: 'var(--slate)' }} />
                              <select
                                id={`reg-cert-area-${index}`}
                                name="area"
                                value={cert.area}
                                onChange={(e) => handleCertificationChange(index, 'area', e.target.value)}
                                disabled={loading}
                              >
                                <option value="">Select Area</option>
                                {CERTIFICATION_OPTIONS.map(c => <option key={c} value={c}>{c}</option>)}
                              </select>
                            </div>
                          </div>

                          <div className="login-field">
                            <label htmlFor={`reg-cert-detail-${index}`}>About the Certification Detail</label>
                            <div className="login-field__input-wrap">
                              <FaBriefcase className="login-field__icon" />
                              <input
                                id={`reg-cert-detail-${index}`}
                                type="text"
                                placeholder="Detail (e.g. AWS Certified Developer)"
                                value={cert.detail}
                                onChange={(e) => handleCertificationChange(index, 'detail', e.target.value)}
                                disabled={loading}
                              />
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleRemoveCertification(index)}
                            className="profile-btn profile-btn--secondary"
                            style={{
                              width: '100%',
                              height: '44px',
                              padding: 0,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'var(--signal-red)',
                              backgroundColor: 'rgba(232, 48, 42, 0.05)',
                              borderColor: 'var(--line-grey)'
                            }}
                            title="Remove Certification"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      ))
                    ) : (
                      <div style={{ fontSize: '0.85rem', color: 'var(--slate)', fontStyle: 'italic' }}>No Certifications added.</div>
                    )}
                  </div>

                  {/* Add Certification Button */}
                  <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}>
                    <button
                      type="button"
                      onClick={handleAddCertification}
                      className="profile-btn profile-btn--secondary"
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 18px', fontSize: '0.8rem' }}
                      disabled={loading}
                    >
                      <FaPlus /> Add Certification
                    </button>
                  </div>

                  {/* Awards list */}
                  <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--slate)' }}>
                      Details of Award received from Government, Company, Professional Association etc.
                    </label>
                    {((registerForm.awards || []).length > 0) ? (
                      (registerForm.awards || []).map((award, index) => (
                        <div key={index} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                          <div className="login-field" style={{ flex: 1 }}>
                            <div className="login-field__input-wrap">
                              <FaAward className="login-field__icon" />
                              <input
                                type="text"
                                placeholder="Award Details (e.g. Best Employee 2025)"
                                value={award}
                                onChange={(e) => handleAwardChange(index, e.target.value)}
                                disabled={loading}
                              />
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveAward(index)}
                            className="profile-btn profile-btn--secondary"
                            style={{
                              width: '44px',
                              height: '44px',
                              padding: 0,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'var(--signal-red)',
                              backgroundColor: 'rgba(232, 48, 42, 0.05)',
                              borderColor: 'var(--line-grey)',
                              margin: 0
                            }}
                            title="Remove Award"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      ))
                    ) : (
                      <div style={{ fontSize: '0.85rem', color: 'var(--slate)', fontStyle: 'italic' }}>No Awards added.</div>
                    )}
                  </div>

                  {/* Add Award Button */}
                  <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}>
                    <button
                      type="button"
                      onClick={handleAddAward}
                      className="profile-btn profile-btn--secondary"
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 18px', fontSize: '0.8rem' }}
                      disabled={loading}
                    >
                      <FaPlus /> Add Award
                    </button>
                  </div>

                  {/* Hobbies list */}
                  <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--slate)' }}>
                      Interest / Hobby
                    </label>
                    {((registerForm.hobbies || []).length > 0) ? (
                      (registerForm.hobbies || []).map((hobby, index) => (
                        <div key={index} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                          <div className="login-field" style={{ flex: 1 }}>
                            <div className="login-field__input-wrap">
                              <FaHeart className="login-field__icon" />
                              <input
                                type="text"
                                placeholder="Hobby (e.g. Reading, Photography)"
                                value={hobby}
                                onChange={(e) => handleHobbyChange(index, e.target.value)}
                                disabled={loading}
                              />
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveHobby(index)}
                            className="profile-btn profile-btn--secondary"
                            style={{
                              width: '44px',
                              height: '44px',
                              padding: 0,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'var(--signal-red)',
                              backgroundColor: 'rgba(232, 48, 42, 0.05)',
                              borderColor: 'var(--line-grey)',
                              margin: 0
                            }}
                            title="Remove Hobby"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      ))
                    ) : (
                      <div style={{ fontSize: '0.85rem', color: 'var(--slate)', fontStyle: 'italic' }}>No Interests or Hobbies added.</div>
                    )}
                  </div>

                  {/* Add Hobby Button */}
                  <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}>
                    <button
                      type="button"
                      onClick={handleAddHobby}
                      className="profile-btn profile-btn--secondary"
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 18px', fontSize: '0.8rem' }}
                      disabled={loading}
                    >
                      <FaPlus /> Add Interest / Hobby
                    </button>
                  </div>

                  <div className="login-form__row">
                    <div className="login-field">
                      <label htmlFor="reg-password">Password <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap">
                        <FaLock className="login-field__icon" />
                        <input
                          id="reg-password"
                          type={showRegPassword ? "text" : "password"}
                          name="password"
                          placeholder="Min 6 characters"
                          value={registerForm.password}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        />
                        <button
                          type="button"
                          className="login-field__toggle-pw"
                          onClick={() => setShowRegPassword(!showRegPassword)}
                          tabIndex="-1"
                        >
                          {showRegPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-confirm">Confirm Password <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap">
                        <FaLock className="login-field__icon" />
                        <input
                          id="reg-confirm"
                          type={showRegConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          placeholder="Re-type password"
                          value={registerForm.confirmPassword}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        />
                        <button
                          type="button"
                          className="login-field__toggle-pw"
                          onClick={() => setShowRegConfirmPassword(!showRegConfirmPassword)}
                          tabIndex="-1"
                        >
                          {showRegConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="login-form__row" style={{ gridTemplateColumns: '1fr', marginTop: '15px', marginBottom: '15px' }}>
                    <div className="login-field">
                      <label htmlFor="reg-captcha">Captcha Verification <span className="login-field__required">*</span></label>
                      <div className="login-captcha-container" style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '10px' }}>
                        <canvas
                          ref={canvasRef}
                          width="160"
                          height="44"
                          style={{ border: '1px solid #e5e7eb', borderRadius: '6px', backgroundColor: '#f3f4f6' }}
                        />
                        <button
                          type="button"
                          onClick={generateCaptcha}
                          className="profile-btn profile-btn--secondary"
                          style={{ padding: '8px 16px', fontSize: '0.85rem', height: '44px', margin: 0 }}
                          title="Refresh Code"
                        >
                          <FaSync />
                        </button>
                      </div>
                      <div className="login-field__input-wrap">
                        <FaLock className="login-field__icon" />
                        <input
                          id="reg-captcha"
                          type="text"
                          name="captcha"
                          placeholder="Type the characters shown above (case-sensitive)"
                          value={captchaInput}
                          onChange={(e) => setCaptchaInput(e.target.value)}
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`login-submit-btn ${loading ? 'loading' : ''}`}
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="login-spinner"></span>
                    ) : (
                      <>
                        CREATE ACCOUNT <FaArrowRight />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>
        </div>
      </div>
      {showPhoneModal && (
        <div className="login-modal-overlay" onClick={() => !loading && setShowPhoneModal(false)}>
          <div className="login-modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="login-modal-title">Verify Phone Number</h3>
            <p className="login-modal-description">
              Please enter the Primary, Secondary, or WhatsApp phone number associated with the account <strong>{loginForm.email}</strong> to verify your identity.
            </p>

            {verifyPhoneError && (
              <div className="login-error" style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', borderRadius: '6px', fontSize: '0.85rem' }}>
                <FaTimesCircle /> {verifyPhoneError}
              </div>
            )}

            <form onSubmit={handleVerifyAndResetPassword}>
              <div className="login-field" style={{ margin: '15px 0' }}>
                <label htmlFor="verify-phone">Associated Phone Number</label>
                <div className="login-field__input-wrap">
                  <FaPhone className="login-field__icon" style={{ transform: 'rotate(90deg)' }} />
                  <input
                    id="verify-phone"
                    type="tel"
                    placeholder="Enter phone number"
                    value={verifyPhoneInput}
                    onChange={(e) => setVerifyPhoneInput(e.target.value)}
                    disabled={loading}
                    required
                    style={{ paddingLeft: '42px' }}
                  />
                </div>
              </div>

              <div className="login-modal-actions" style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '20px' }}>
                <button
                  type="button"
                  className="profile-btn profile-btn--secondary"
                  style={{ margin: 0, padding: '10px 20px', fontSize: '0.85rem' }}
                  onClick={() => {
                    setShowPhoneModal(false)
                    setVerifyPhoneInput('')
                    setVerifyPhoneError('')
                  }}
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="profile-btn profile-btn--primary"
                  style={{ margin: 0, padding: '10px 20px', fontSize: '0.85rem' }}
                  disabled={loading || !verifyPhoneInput.trim()}
                >
                  {loading ? <span className="login-spinner"></span> : 'Verify & Send Link'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showRegSuccessModal && (
        <div className="login-modal-overlay">
          <div className="login-modal-content" style={{ textAlign: 'center', padding: '40px' }}>
            <FaCheckCircle className="success-icon-anim" style={{ fontSize: '4.5rem', marginBottom: '20px' }} />
            <h3 className="login-modal-title" style={{ fontSize: '1.6rem', color: 'var(--navy-deep)', marginBottom: '15px' }}>Account Created!</h3>
            <p className="login-modal-description" style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--slate)', marginBottom: '24px' }}>
              You have successfully created your account!
              <br /><br />
              Please note that your account will be verified within <strong style={{ color: 'var(--signal-red)', fontWeight: '700' }}>1-2 days</strong> by the Administrator.
            </p>
            <button
              type="button"
              className="profile-btn profile-btn--primary"
              style={{ margin: '0 auto', width: 'auto', display: 'inline-flex', padding: '12px 30px', fontSize: '0.9rem' }}
              onClick={handleCloseRegSuccessModal}
            >
              Proceed to Portal
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

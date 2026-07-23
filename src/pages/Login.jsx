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
  FaAward,
  FaExclamationTriangle,
  FaFilePdf
} from 'react-icons/fa'
import alumniLogo from '../assets/Logo/dft-logo-dark.avif'
import CountryAutocomplete from '../components/CountryAutocomplete'
import StateAutocomplete from '../components/StateAutocomplete'
import CityAutocomplete from '../components/CityAutocomplete'
import CompanyAutocomplete from '../components/CompanyAutocomplete'
import CvDropzone from '../components/CvDropzone'
import FullPageLoader from '../components/FullPageLoader'
import './Login.css'
import { auth, db, isFirebaseConfigured } from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { doc, setDoc, getDoc, collection, query, where, getDocs } from 'firebase/firestore'
import { countryCodes } from '../data/countryData'
import { getCountryByState } from '../data/stateData'
import { getStateAndCountryByCity } from '../data/cityData'
import {
  ACADEMIC_YEARS,
  DEGREE_OPTIONS,
  GENDER_OPTIONS,
  CERTIFICATION_OPTIONS,
  PRODUCT_SERVICE_OPTIONS,
  HOBBY_OPTIONS,
  PLACEHOLDERS
} from '../data/formdata'
import { hashEmail, hashPhoneDigits } from '../utils/hash'
import { uploadPdfToDrive } from '../utils/googleDriveUpload'

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
    '+1': 'us',
    '+7': 'ru',
    '+20': 'eg',
    '+27': 'za',
    '+30': 'gr',
    '+31': 'nl',
    '+32': 'be',
    '+33': 'fr',
    '+34': 'es',
    '+36': 'hu',
    '+39': 'it',
    '+40': 'ro',
    '+41': 'ch',
    '+43': 'at',
    '+44': 'gb',
    '+45': 'dk',
    '+46': 'se',
    '+47': 'no',
    '+48': 'pl',
    '+49': 'de',
    '+51': 'pe',
    '+52': 'mx',
    '+53': 'cu',
    '+54': 'ar',
    '+55': 'br',
    '+56': 'cl',
    '+57': 'co',
    '+58': 've',
    '+60': 'my',
    '+61': 'au',
    '+62': 'id',
    '+63': 'ph',
    '+64': 'nz',
    '+65': 'sg',
    '+66': 'th',
    '+81': 'jp',
    '+82': 'kr',
    '+84': 'vn',
    '+86': 'cn',
    '+90': 'tr',
    '+91': 'in',
    '+92': 'pk',
    '+93': 'af',
    '+94': 'lk',
    '+95': 'mm',
    '+98': 'ir',
    '+211': 'ss',
    '+212': 'ma',
    '+213': 'dz',
    '+216': 'tn',
    '+218': 'ly',
    '+220': 'gm',
    '+221': 'sn',
    '+222': 'mr',
    '+223': 'ml',
    '+224': 'gn',
    '+225': 'ci',
    '+226': 'bf',
    '+227': 'ne',
    '+228': 'tg',
    '+229': 'bj',
    '+230': 'mu',
    '+231': 'lr',
    '+232': 'sl',
    '+233': 'gh',
    '+234': 'ng',
    '+235': 'td',
    '+236': 'cf',
    '+237': 'cm',
    '+238': 'cv',
    '+239': 'st',
    '+240': 'gq',
    '+241': 'ga',
    '+242': 'cg',
    '+243': 'cd',
    '+244': 'ao',
    '+245': 'gw',
    '+248': 'sc',
    '+249': 'sd',
    '+250': 'rw',
    '+251': 'et',
    '+252': 'so',
    '+253': 'dj',
    '+254': 'ke',
    '+255': 'tz',
    '+256': 'ug',
    '+257': 'bi',
    '+258': 'mz',
    '+260': 'zm',
    '+261': 'mg',
    '+263': 'zw',
    '+264': 'na',
    '+265': 'mw',
    '+266': 'ls',
    '+267': 'bw',
    '+268': 'sz',
    '+269': 'km',
    '+291': 'er',
    '+351': 'pt',
    '+352': 'lu',
    '+353': 'ie',
    '+354': 'is',
    '+355': 'al',
    '+356': 'mt',
    '+357': 'cy',
    '+358': 'fi',
    '+359': 'bg',
    '+370': 'lt',
    '+371': 'lv',
    '+372': 'ee',
    '+373': 'md',
    '+374': 'am',
    '+375': 'by',
    '+376': 'ad',
    '+377': 'mc',
    '+378': 'sm',
    '+380': 'ua',
    '+381': 'rs',
    '+382': 'me',
    '+385': 'hr',
    '+386': 'si',
    '+387': 'ba',
    '+389': 'mk',
    '+420': 'cz',
    '+421': 'sk',
    '+423': 'li',
    '+501': 'bz',
    '+502': 'gt',
    '+503': 'sv',
    '+504': 'hn',
    '+505': 'ni',
    '+506': 'cr',
    '+507': 'pa',
    '+509': 'ht',
    '+591': 'bo',
    '+592': 'gy',
    '+593': 'ec',
    '+595': 'py',
    '+597': 'sr',
    '+598': 'uy',
    '+670': 'tl',
    '+673': 'bn',
    '+674': 'nr',
    '+675': 'pg',
    '+676': 'to',
    '+677': 'sb',
    '+678': 'vu',
    '+679': 'fj',
    '+680': 'pw',
    '+685': 'ws',
    '+686': 'ki',
    '+688': 'tv',
    '+691': 'fm',
    '+692': 'mh',
    '+850': 'kp',
    '+855': 'kh',
    '+856': 'la',
    '+880': 'bd',
    '+960': 'mv',
    '+961': 'lb',
    '+962': 'jo',
    '+963': 'sy',
    '+964': 'iq',
    '+965': 'kw',
    '+966': 'sa',
    '+967': 'ye',
    '+968': 'om',
    '+970': 'ps',
    '+971': 'ae',
    '+972': 'il',
    '+973': 'bh',
    '+974': 'qa',
    '+975': 'bt',
    '+976': 'mn',
    '+977': 'np',
    '+992': 'tj',
    '+993': 'tm',
    '+994': 'az',
    '+995': 'ge',
    '+996': 'kg',
    '+998': 'uz'
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
    gender: '',
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
    diplomaNotCompleted: false,
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
    division: '',
    workingSince: '',
    workingSinceMonth: '',
    workingSinceYear: '',
    companyCity: '',
    companyState: '',
    companyCountry: '',
    lastPromotionDesignation: '',
    lastPromotionMonth: '',
    lastPromotionYear: '',
    awards: [],
    hobbies: [],
    otherHobbies: '',
    workExperience: '',
    consentEmail: false,
    consentPhone: false,
    consentWhatsapp: false,
    cvBase64: '',
    cvFileName: '',
    cvFile: null
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

  // Auto-hide general errors after 10 seconds & scroll to top to show error banner
  useEffect(() => {
    if (error) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const timer = setTimeout(() => {
        setError('');
      }, 10000);
      return () => clearTimeout(timer); // Cleanup if the error changes or component unmounts
    }
  }, [error]);

  // Auto-hide phone verification errors after 10 seconds
  useEffect(() => {
    if (verifyPhoneError) {
      const timer = setTimeout(() => {
        setVerifyPhoneError('');
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [verifyPhoneError]);

  // Auto-hide success messages after 10 seconds 
  // (Note: Some of your existing success actions redirect the user before this timer finishes)
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
        setSuccessMessage('');
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

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

  const capitalizeWords = (str) => {
    if (!str || typeof str !== 'string') return str;
    return str.replace(/\b[a-zA-Z]+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  };

  const handleCvFileSelect = (file, base64) => {
    setRegisterForm(prev => ({
      ...prev,
      cvBase64: base64,
      cvFileName: file ? file.name : '',
      cvFile: file
    }))
  }

  const handleCvFileRemove = () => {
    setRegisterForm(prev => ({
      ...prev,
      cvBase64: '',
      cvFileName: '',
      cvFile: null
    }))
  }

  const handleRegisterChange = (e) => {
    const { name, value, type, checked } = e.target
    let cleanValue = ['phone', 'secondaryPhone', 'whatsapp', 'workExperience'].includes(name)
      ? value.replace(/\D/g, '')
      : value;

    if (['firstName', 'middleName', 'lastName'].includes(name) && typeof cleanValue === 'string') {
      cleanValue = capitalizeWords(cleanValue);
    }

    setRegisterForm(prev => {
      const updated = {
        ...prev,
        [name]: type === 'checkbox' ? checked : cleanValue
      }

      // Auto populate state & country when personal city changes
      if (name === 'city' && typeof cleanValue === 'string' && cleanValue.trim()) {
        const { state: autoState, country: autoCountry } = getStateAndCountryByCity(cleanValue);
        if (autoState) updated.state = autoState;
        if (autoCountry) updated.country = autoCountry;
      }

      // Auto populate country when personal state changes
      if (name === 'state' && typeof cleanValue === 'string' && cleanValue.trim()) {
        const autoCountry = getCountryByState(cleanValue);
        if (autoCountry) updated.country = autoCountry;
      }

      // Auto populate state & country when company city changes
      if (name === 'companyCity' && typeof cleanValue === 'string' && cleanValue.trim()) {
        const { state: autoState, country: autoCountry } = getStateAndCountryByCity(cleanValue);
        if (autoState) updated.companyState = autoState;
        if (autoCountry) updated.companyCountry = autoCountry;
      }

      // Auto populate country when company state changes
      if (name === 'companyState' && typeof cleanValue === 'string' && cleanValue.trim()) {
        const autoCountry = getCountryByState(cleanValue);
        if (autoCountry) updated.companyCountry = autoCountry;
      }

      if (name === 'admissionYear' && cleanValue && !prev.diplomaNotCompleted) {
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
      if (name === 'diplomaNotCompleted' && checked) {
        updated.passoutYear = ''
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
            division: profileData.division || '',
            workingSince: profileData.workingSince || '',
            workingSinceMonth: profileData.workingSinceMonth || '',
            workingSinceYear: profileData.workingSinceYear || '',
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
            division: '',
            workingSince: '',
            workingSinceMonth: '',
            workingSinceYear: '',
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
      setError('Primary Contact number is compulsory.')
      return
    }

    if (!registerForm.whatsapp.trim()) {
      setError('WhatsApp number is compulsory.')
      return
    }

    if (!registerForm.gender) {
      setError('Gender is compulsory.')
      return
    }

    if (!registerForm.consentEmail && !registerForm.consentPhone && !registerForm.consentWhatsapp) {
      setError('Please select at least one detail (Email ID, Mobile Number, or WhatsApp Number) to show on the Alumni Portal.')
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

    if (!registerForm.diplomaNotCompleted) {
      if (isNaN(passYear) || passYear < 1970 || passYear > currentYear + 6) {
        setError(`Please enter a valid DFT Passout Year (1970 - ${currentYear + 6}).`)
        return
      }

      if (admYear > passYear) {
        setError('DFT Admission Year cannot be after DFT Passout Year.')
        return
      }
    }

    setLoading(true)

    const cleanFirstName = capitalizeWords(registerForm.firstName.trim());
    const cleanMiddleName = capitalizeWords(registerForm.middleName.trim());
    const cleanLastName = capitalizeWords(registerForm.lastName.trim());
    const cleanFullName = [cleanFirstName, cleanMiddleName, cleanLastName].filter(Boolean).join(' ');

    if (isFirebaseConfigured) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, registerForm.email, registerForm.password)
        const user = userCredential.user

        // Upload PDF CV to Google Drive if a file was selected
        let finalCvUrl = registerForm.cvBase64 || ''
        if (registerForm.cvFile) {
          try {
            const cvRes = await uploadPdfToDrive(registerForm.cvFile, `${user.uid}_CV.pdf`, user.uid)
            if (cvRes && cvRes.fileUrl) {
              finalCvUrl = cvRes.fileUrl
            }
          } catch (cvErr) {
            console.warn('Google Drive CV upload failed, fallback to base64 preview:', cvErr)
          }
        }

        // Save additional profile details to Firestore
        await setDoc(doc(db, 'users', user.uid), {
          firstName: cleanFirstName,
          middleName: cleanMiddleName,
          lastName: cleanLastName,
          name: cleanFullName,
          email: registerForm.email,
          gender: registerForm.gender || '',
          dob: registerForm.dob,
          dom: registerForm.dom || '',
          phone: `${registerForm.phoneCode} ${registerForm.phone}`.trim(),
          secondaryPhone: registerForm.secondaryPhone ? `${registerForm.secondaryPhoneCode} ${registerForm.secondaryPhone}`.trim() : '',
          whatsapp: `${registerForm.whatsappCode} ${registerForm.whatsapp}`.trim(),
          userType: registerForm.userType,
          bloodGroup: registerForm.bloodGroup,
          admissionYear: registerForm.admissionYear,
          passoutYear: registerForm.passoutYear,
          diplomaNotCompleted: registerForm.diplomaNotCompleted || false,
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
          division: registerForm.division || '',
          workingSinceMonth: registerForm.workingSinceMonth || '',
          workingSinceYear: registerForm.workingSinceYear || '',
          workingSince: (registerForm.workingSinceMonth && registerForm.workingSinceYear) ? `${registerForm.workingSinceMonth} ${registerForm.workingSinceYear}` : (registerForm.workingSince || ''),
          companyCity: registerForm.companyCity || '',
          companyState: registerForm.companyState || '',
          companyCountry: registerForm.companyCountry || '',
          lastPromotionDesignation: registerForm.lastPromotionDesignation || '',
          lastPromotionMonth: registerForm.lastPromotionMonth || '',
          lastPromotionYear: registerForm.lastPromotionYear || '',
          awards: registerForm.awards || [],
          hobbies: registerForm.hobbies || [],
          otherHobbies: registerForm.hobbies.includes('Others') ? registerForm.otherHobbies || '' : '',
          workExperience: registerForm.workExperience || '',
          consentEmail: registerForm.consentEmail || false,
          consentPhone: registerForm.consentPhone || false,
          consentWhatsapp: registerForm.consentWhatsapp || false,
          cvUrl: finalCvUrl,
          cvBase64: finalCvUrl,
          cvFileName: registerForm.cvFileName || ''
        })

        if (registerForm.company && registerForm.company.trim()) {
          try {
            await setDoc(doc(db, 'companies', registerForm.company.trim().toLowerCase()), {
              name: registerForm.company.trim()
            }, { merge: true })
          } catch (compErr) {
            console.warn('Failed to save company name to collection:', compErr)
          }
        }

        // Write the password-reset lookup doc (hashes only, no plaintext phone data)
        try {
          const emailHashKey = await hashEmail(registerForm.email)
          const phoneHash = await hashPhoneDigits(`${registerForm.phoneCode} ${registerForm.phone}`)
          const secPhoneHash = registerForm.secondaryPhone
            ? await hashPhoneDigits(`${registerForm.secondaryPhoneCode} ${registerForm.secondaryPhone}`)
            : ''
          const whatsappHash = await hashPhoneDigits(`${registerForm.whatsappCode} ${registerForm.whatsapp}`)

          await setDoc(doc(db, 'passwordResetLookup', emailHashKey), {
            uid: user.uid,
            phoneHash: phoneHash || '',
            secPhoneHash: secPhoneHash || '',
            whatsappHash: whatsappHash || ''
          })
        } catch (lookupErr) {
          console.warn('Failed to save passwordResetLookup doc:', lookupErr)
        }

        const newUser = {
          uid: user.uid,
          firstName: cleanFirstName,
          middleName: cleanMiddleName,
          lastName: cleanLastName,
          name: cleanFullName,
          email: registerForm.email,
          gender: registerForm.gender || '',
          dob: registerForm.dob,
          phone: `${registerForm.phoneCode} ${registerForm.phone}`.trim(),
          secondaryPhone: registerForm.secondaryPhone ? `${registerForm.secondaryPhoneCode} ${registerForm.secondaryPhone}`.trim() : '',
          whatsapp: `${registerForm.whatsappCode} ${registerForm.whatsapp}`.trim(),
          userType: registerForm.userType,
          bloodGroup: registerForm.bloodGroup,
          admissionYear: registerForm.admissionYear,
          passoutYear: registerForm.passoutYear,
          diplomaNotCompleted: registerForm.diplomaNotCompleted || false,
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
          division: registerForm.division || '',
          workingSinceMonth: registerForm.workingSinceMonth || '',
          workingSinceYear: registerForm.workingSinceYear || '',
          workingSince: (registerForm.workingSinceMonth && registerForm.workingSinceYear) ? `${registerForm.workingSinceMonth} ${registerForm.workingSinceYear}` : (registerForm.workingSince || ''),
          companyCity: registerForm.companyCity || '',
          companyState: registerForm.companyState || '',
          companyCountry: registerForm.companyCountry || '',
          lastPromotionDesignation: registerForm.lastPromotionDesignation || '',
          lastPromotionMonth: registerForm.lastPromotionMonth || '',
          lastPromotionYear: registerForm.lastPromotionYear || '',
          awards: registerForm.awards || [],
          hobbies: registerForm.hobbies || [],
          otherHobbies: registerForm.hobbies.includes('Others') ? registerForm.otherHobbies || '' : '',
          workExperience: registerForm.workExperience || '',
          consentEmail: registerForm.consentEmail || false,
          consentPhone: registerForm.consentPhone || false,
          consentWhatsapp: registerForm.consentWhatsapp || false,
          cvUrl: finalCvUrl,
          cvBase64: finalCvUrl,
          cvFileName: registerForm.cvFileName || ''
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
        } else if (err.code === 'permission-denied' || (err.message && err.message.toLowerCase().includes('permission'))) {
          setError('Database permission denied. Please verify your Firestore Security Rules in Firebase Console.')
        } else {
          setError(err.message || 'An error occurred during registration. Please try again.')
        }
      }
    } else {
      // Fallback Mock Registration
      setTimeout(() => {
        const newUser = {
          uid: 'mock-uid-registered',
          firstName: cleanFirstName,
          middleName: cleanMiddleName,
          lastName: cleanLastName,
          name: cleanFullName,
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
          diplomaNotCompleted: registerForm.diplomaNotCompleted || false,
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
          division: registerForm.division || '',
          workingSinceMonth: registerForm.workingSinceMonth || '',
          workingSinceYear: registerForm.workingSinceYear || '',
          workingSince: (registerForm.workingSinceMonth && registerForm.workingSinceYear) ? `${registerForm.workingSinceMonth} ${registerForm.workingSinceYear}` : (registerForm.workingSince || ''),
          companyCity: registerForm.companyCity || '',
          companyState: registerForm.companyState || '',
          companyCountry: registerForm.companyCountry || '',
          lastPromotionDesignation: registerForm.lastPromotionDesignation || '',
          lastPromotionMonth: registerForm.lastPromotionMonth || '',
          lastPromotionYear: registerForm.lastPromotionYear || '',
          awards: registerForm.awards || [],
          hobbies: registerForm.hobbies || [],
          consentEmail: registerForm.consentEmail || false,
          consentPhone: registerForm.consentPhone || false,
          consentWhatsapp: registerForm.consentWhatsapp || false
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
          division: newUser.division || '',
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
        const emailHashKey = await hashEmail(loginForm.email)
        const lookupSnap = await getDoc(doc(db, 'passwordResetLookup', emailHashKey))

        if (!lookupSnap.exists()) {
          setVerifyPhoneError('No account found with that email/phone combination.')
          setLoading(false)
          return
        }

        const lookupData = lookupSnap.data()
        const inputPhoneHash = await hashPhoneDigits(verifyPhoneInput)

        const isMatch =
          (lookupData.phoneHash && lookupData.phoneHash === inputPhoneHash) ||
          (lookupData.secPhoneHash && lookupData.secPhoneHash === inputPhoneHash) ||
          (lookupData.whatsappHash && lookupData.whatsappHash === inputPhoneHash)

        if (!isMatch) {
          setVerifyPhoneError('No account found with that email/phone combination.')
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
          <FaHome /> <span className="login-container__back-btn-text">BACK TO HOME</span>
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

            {/* RESTORED: Success Animation Overlay */}
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

              {error && (
                <div className="login-error-banner">
                  <FaExclamationTriangle className="login-error-banner__icon" />
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
                        placeholder={PLACEHOLDERS.loginEmail}
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
                        placeholder={PLACEHOLDERS.loginPassword}
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

                  <p style={{ fontSize: '13px', color: 'var(--slate)', marginBottom: '14px', fontWeight: '500' }}>
                    Fields marked with <span style={{ color: 'var(--signal-red)', fontWeight: 'bold' }}>*</span> are mandatory
                  </p>
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
                          placeholder={PLACEHOLDERS.firstName}
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
                          placeholder={PLACEHOLDERS.middleName}
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
                          placeholder={PLACEHOLDERS.lastName}
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
                          placeholder={PLACEHOLDERS.regEmail}
                          value={registerForm.email}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-gender">Gender <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap">
                        <FaUser className="login-field__icon" />
                        <select
                          id="reg-gender"
                          name="gender"
                          value={registerForm.gender}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        >
                          <option value="">Select Gender</option>
                          {GENDER_OPTIONS.map(g => <option key={g} value={g}>{g}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="login-form__grid">
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
                  </div>

                  <div className="login-form__grid">
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

                    <div className="login-field" style={{ visibility: 'hidden' }}></div>
                  </div>

                  <div className="login-form__grid">
                    <div className="login-field">
                      <label htmlFor="reg-phone">Primary Contact Number <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap phone-input-wrap">
                        <span className={`fi fi-${getCountryIso(registerForm.phoneCode)} login-field__icon`}></span>

                        {/* ADD THIS SPAN */}
                        <span className="phone-selected-text">{registerForm.phoneCode}</span>

                        <select
                          className="phone-country-select"
                          name="phoneCode"
                          value={registerForm.phoneCode}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        >
                          {countryCodes.map((c, idx) => <option key={`${c.code}-${c.iso || idx}`} value={c.code}>{c.label}</option>)}
                        </select>
                        <input
                          id="reg-phone"
                          type="tel"
                          name="phone"
                          placeholder={PLACEHOLDERS.phone}
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

                        {/* ADD THIS SPAN */}
                        <span className="phone-selected-text">{registerForm.secondaryPhoneCode}</span>

                        <select
                          className="phone-country-select"
                          name="secondaryPhoneCode"
                          value={registerForm.secondaryPhoneCode}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        >
                          {countryCodes.map((c, idx) => <option key={`${c.code}-${c.iso || idx}`} value={c.code}>{c.label}</option>)}
                        </select>
                        <input
                          id="reg-sec-phone"
                          type="tel"
                          name="secondaryPhone"
                          placeholder={PLACEHOLDERS.secondaryPhone}
                          value={registerForm.secondaryPhone}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-whatsapp">WhatsApp Number</label>
                      <div className="login-field__input-wrap phone-input-wrap">
                        <span className={`fi fi-${getCountryIso(registerForm.whatsappCode)} login-field__icon`}></span>

                        {/* ADD THIS SPAN */}
                        <span className="phone-selected-text">{registerForm.whatsappCode}</span>

                        <select
                          className="phone-country-select"
                          name="whatsappCode"
                          value={registerForm.whatsappCode}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        >
                          {countryCodes.map((c, idx) => <option key={`${c.code}-${c.iso || idx}`} value={c.code}>{c.label}</option>)}
                        </select>
                        <input
                          id="reg-whatsapp"
                          type="tel"
                          name="whatsapp"
                          placeholder={PLACEHOLDERS.whatsapp}
                          value={registerForm.whatsapp}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field" style={{ visibility: 'hidden' }}></div>
                  </div>

                  <div className="login-form__grid-3" style={{ marginTop: '15px' }}>
                    <div className="login-field">
                      <label htmlFor="reg-city">Native (City)</label>
                      <CityAutocomplete
                        id="reg-city"
                        name="city"
                        placeholder={PLACEHOLDERS.city}
                        value={registerForm.city}
                        state={registerForm.state}
                        onChange={handleRegisterChange}
                        disabled={loading}
                        wrapClassName="login-field__input-wrap"
                      />
                    </div>
                    <div className="login-field">
                      <label htmlFor="reg-state">Native (State)</label>
                      <StateAutocomplete
                        id="reg-state"
                        name="state"
                        placeholder={PLACEHOLDERS.state}
                        value={registerForm.state}
                        country={registerForm.country}
                        onChange={handleRegisterChange}
                        disabled={loading}
                        wrapClassName="login-field__input-wrap"
                      />
                    </div>
                    <div className="login-field">
                      <label htmlFor="reg-country">Native (Country)</label>
                      <CountryAutocomplete
                        id="reg-country"
                        name="country"
                        placeholder={PLACEHOLDERS.country}
                        value={registerForm.country}
                        onChange={handleRegisterChange}
                        disabled={loading}
                        wrapClassName="login-field__input-wrap"
                      />
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
                      <label htmlFor="reg-passout">
                        DFT Passout Year
                        {!registerForm.diplomaNotCompleted && <span className="login-field__required"> *</span>}
                      </label>
                      <div className="login-field__input-wrap">
                        <FaCalendarAlt className="login-field__icon" />
                        <select
                          id="reg-passout"
                          name="passoutYear"
                          value={registerForm.passoutYear}
                          onChange={handleRegisterChange}
                          required={!registerForm.diplomaNotCompleted}
                          disabled={loading || registerForm.diplomaNotCompleted}
                        >
                          <option value="">Select Year</option>
                          {ACADEMIC_YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                      </div>

                      <label className="login-checkbox" style={{ marginTop: '10px' }}>
                        <input
                          type="checkbox"
                          name="diplomaNotCompleted"
                          checked={registerForm.diplomaNotCompleted}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                        <span className="login-checkbox__box"></span>
                        <span className="login-checkbox__label">
                          I have not yet completed my diploma / Passout Year is not applicable
                        </span>
                      </label>
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
                                placeholder={PLACEHOLDERS.degreeDomain}
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
                      <label htmlFor="reg-work-experience">Total Work Experience (Years)</label>
                      <div className="login-field__input-wrap">
                        <FaBriefcase className="login-field__icon" />
                        <input
                          id="reg-work-experience"
                          type="text"
                          inputMode="numeric"
                          name="workExperience"
                          placeholder={PLACEHOLDERS.workExperience}
                          value={registerForm.workExperience}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-linkedin">LinkedIn Profile Link</label>
                      <div className="login-field__input-wrap">
                        <FaLinkedin className="login-field__icon" style={{ color: '#0077b5' }} />
                        <input
                          id="reg-linkedin"
                          type="text"
                          name="linkedin"
                          placeholder={PLACEHOLDERS.linkedin}
                          value={registerForm.linkedin}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field login-field--full">
                      <CvDropzone
                        label="Upload Resume / CV"
                        cvFile={registerForm.cvFile}
                        cvFileName={registerForm.cvFileName}
                        cvUrl={registerForm.cvBase64}
                        onFileSelect={handleCvFileSelect}
                        onFileRemove={handleCvFileRemove}
                        disabled={loading}
                        isEditing={true}
                        setError={setError}
                      />
                    </div>
                  </div>

                  <h4 className="login-section-title" style={{ marginTop: '24px' }}>Company Details</h4>
                  <div className="login-form__grid">
                    <div className="login-field login-field--full">
                      <label htmlFor="reg-company">Current Organization</label>
                      <CompanyAutocomplete
                        id="reg-company"
                        name="company"
                        value={registerForm.company}
                        onChange={handleRegisterChange}
                        disabled={loading}
                        placeholder={PLACEHOLDERS.company || 'Select or type company name'}
                        wrapClassName="login-field__input-wrap"
                      />
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-department">Department</label>
                      <div className="login-field__input-wrap">
                        <FaSitemap className="login-field__icon" />
                        <input
                          id="reg-department"
                          type="text"
                          name="department"
                          placeholder={PLACEHOLDERS.department}
                          value={registerForm.department}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-division">Division</label>
                      <div className="login-field__input-wrap">
                        <FaSitemap className="login-field__icon" />
                        <input
                          id="reg-division"
                          type="text"
                          name="division"
                          placeholder={PLACEHOLDERS.division}
                          value={registerForm.division}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-job">Current Job Title (Designation)</label>
                      <div className="login-field__input-wrap">
                        <FaBriefcase className="login-field__icon" />
                        <input
                          id="reg-job"
                          type="text"
                          name="jobTitle"
                          placeholder={PLACEHOLDERS.jobTitle}
                          value={registerForm.jobTitle}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field">
                      <label>Working Since (Month / Year)</label>
                      <div className="login-form__row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', padding: 0, margin: 0, border: 'none' }}>
                        <div className="login-field__input-wrap">
                          <FaCalendarAlt className="login-field__icon" />
                          <select
                            name="workingSinceMonth"
                            value={registerForm.workingSinceMonth}
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
                            name="workingSinceYear"
                            value={registerForm.workingSinceYear}
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

                    <div className="login-field login-field--full">
                      <label htmlFor="reg-company-website">Company Website</label>
                      <div className="login-field__input-wrap">
                        <FaGlobe className="login-field__icon" />
                        <input
                          id="reg-company-website"
                          type="text"
                          name="companyWebsite"
                          placeholder={PLACEHOLDERS.companyWebsite}
                          value={registerForm.companyWebsite}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="login-form__grid-3" style={{ marginTop: '10px' }}>
                    <div className="login-field">
                      <label htmlFor="reg-company-city">Company Location (City)</label>
                      <CityAutocomplete
                        id="reg-company-city"
                        name="companyCity"
                        placeholder={PLACEHOLDERS.companyCity}
                        value={registerForm.companyCity}
                        state={registerForm.companyState}
                        onChange={handleRegisterChange}
                        disabled={loading}
                        wrapClassName="login-field__input-wrap"
                      />
                    </div>
                    <div className="login-field">
                      <label htmlFor="reg-company-state">Company Location (State)</label>
                      <StateAutocomplete
                        id="reg-company-state"
                        name="companyState"
                        placeholder={PLACEHOLDERS.companyState}
                        value={registerForm.companyState}
                        country={registerForm.companyCountry}
                        onChange={handleRegisterChange}
                        disabled={loading}
                        wrapClassName="login-field__input-wrap"
                      />
                    </div>
                    <div className="login-field">
                      <label htmlFor="reg-company-country">Company Location (Country)</label>
                      <CountryAutocomplete
                        id="reg-company-country"
                        name="companyCountry"
                        placeholder={PLACEHOLDERS.companyCountry}
                        value={registerForm.companyCountry}
                        onChange={handleRegisterChange}
                        disabled={loading}
                        wrapClassName="login-field__input-wrap"
                      />
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
                            placeholder={PLACEHOLDERS.otherProductServices}
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
                          placeholder={PLACEHOLDERS.lastPromotionDesignation}
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
                      Certifications / Qualifications
                    </label>
                    {((registerForm.certifications || []).length > 0) ? (
                      (registerForm.certifications || []).map((cert, index) => (
                        <div key={index} className="previous-degree-row">
                          <div className="login-field">
                            <label htmlFor={`reg-cert-area-${index}`}>Area of Certification / Qualification</label>
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
                            <label htmlFor={`reg-cert-detail-${index}`}>About the Certification / Qualification Detail</label>
                            <div className="login-field__input-wrap">
                              <FaBriefcase className="login-field__icon" />
                              <input
                                id={`reg-cert-detail-${index}`}
                                type="text"
                                placeholder={PLACEHOLDERS.certificationDetail}
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
                            title="Remove Certification / Qualification"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      ))
                    ) : (
                      <div style={{ fontSize: '0.85rem', color: 'var(--slate)', fontStyle: 'italic' }}>No Certifications / Qualifications added.</div>
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
                      <FaPlus /> Add Certification / Qualification
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
                                placeholder={PLACEHOLDERS.awardDetail}
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

                  {/* Interest / Hobby checkbox grid */}
                  <div className="login-field login-field--full" style={{ marginTop: '15px', marginBottom: '20px' }}>
                    <label>Interest / Hobby</label>
                    <div className="product-services-checkbox-group">
                      {HOBBY_OPTIONS.map(opt => {
                        const isChecked = (registerForm.hobbies || []).includes(opt)
                        return (
                          <label key={opt} className="checkbox-option">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => handleMultiSelectChange('hobbies', opt)}
                              disabled={loading}
                            />
                            <span>{opt}</span>
                          </label>
                        )
                      })}
                    </div>
                    {(registerForm.hobbies || []).includes('Others') && (
                      <div className="login-field__input-wrap" style={{ marginTop: '12px' }}>
                        <FaHeart className="login-field__icon" />
                        <input
                          type="text"
                          name="otherHobbies"
                          placeholder={PLACEHOLDERS.otherHobbies}
                          value={registerForm.otherHobbies}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    )}
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
                          placeholder={PLACEHOLDERS.regPassword}
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
                          placeholder={PLACEHOLDERS.confirmPassword}
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
                          placeholder={PLACEHOLDERS.captcha}
                          value={captchaInput}
                          onChange={(e) => setCaptchaInput(e.target.value)}
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="login-field" style={{ margin: '20px 0', padding: '16px', backgroundColor: 'rgba(241, 245, 249, 0.6)', borderRadius: '12px', border: '1px solid var(--line-grey)' }}>
                    <label style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--navy)', display: 'block', marginBottom: '12px' }}>
                      I give my consent to show my below-mentioned details on the Alumni Portal (Click at least one) <span className="login-field__required">*</span>
                    </label>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <label className="login-checkbox">
                        <input
                          type="checkbox"
                          name="consentEmail"
                          checked={registerForm.consentEmail}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                        <span className="login-checkbox__box"></span>
                        <span className="login-checkbox__label" style={{ fontSize: '0.85rem', color: 'var(--charcoal)', fontWeight: '500' }}>Email ID</span>
                      </label>

                      <label className="login-checkbox">
                        <input
                          type="checkbox"
                          name="consentPhone"
                          checked={registerForm.consentPhone}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                        <span className="login-checkbox__box"></span>
                        <span className="login-checkbox__label" style={{ fontSize: '0.85rem', color: 'var(--charcoal)', fontWeight: '500' }}>Mobile Number</span>
                      </label>

                      <label className="login-checkbox">
                        <input
                          type="checkbox"
                          name="consentWhatsapp"
                          checked={registerForm.consentWhatsapp}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                        <span className="login-checkbox__box"></span>
                        <span className="login-checkbox__label" style={{ fontSize: '0.85rem', color: 'var(--charcoal)', fontWeight: '500' }}>WhatsApp Number</span>
                      </label>
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

            <form onSubmit={handleVerifyAndResetPassword}>
              <div className="login-field" style={{ margin: '15px 0' }}>
                <label htmlFor="verify-phone">Associated Phone Number</label>
                <div className="login-field__input-wrap">
                  <FaPhone className="login-field__icon" style={{ transform: 'rotate(90deg)' }} />
                  <input
                    id="verify-phone"
                    type="tel"
                    placeholder={PLACEHOLDERS.verifyPhone}
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
      {/* Global Toast Notifications */}
      <div className="toast-container">
        {error && (
          <div className="toast toast--error" role="alert">
            <FaTimesCircle className="toast__icon" />
            <span>{error}</span>
            <button
              type="button"
              className="toast__close"
              onClick={() => setError('')}
              aria-label="Dismiss"
            >
              &times;
            </button>
          </div>
        )}

        {verifyPhoneError && (
          <div className="toast toast--error" role="alert">
            <FaTimesCircle className="toast__icon" />
            <span>{verifyPhoneError}</span>
            <button
              type="button"
              className="toast__close"
              onClick={() => setVerifyPhoneError('')}
              aria-label="Dismiss"
            >
              &times;
            </button>
          </div>
        )}
      </div>
      <FullPageLoader
        show={loading}
        title={activeTab === 'register' ? 'Creating Your Account...' : 'Signing In...'}
        subtitle={activeTab === 'register' ? 'Please wait while we upload your files and setup your profile.' : 'Verifying your credentials. Please wait a moment.'}
      />
    </div> // This is the final closing div of the component
  )
}
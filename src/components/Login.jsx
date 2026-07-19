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
  FaBoxOpen
} from 'react-icons/fa'
import alumniLogo from '../assets/Logo/dft-logo-dark.avif'
import './Login.css'
import { auth, db, isFirebaseConfigured } from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import {
  countryCodes,
  ACADEMIC_YEARS,
  DEGREE_OPTIONS,
  CERTIFICATION_OPTIONS,
  PRODUCT_SERVICE_OPTIONS
} from '../data/formdata'

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
    areaOfCertification: '',
    profession: '',
    productServices: '',
    companyWebsite: ''
  })

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
            batch: profileData.batch || '',
            degree: profileData.degree || '',
            jobTitle: profileData.jobTitle || '',
            company: profileData.company || '',
            linkedin: profileData.linkedin || '',
            verification_status: profileData.verification_status !== undefined ? profileData.verification_status : false,
            account_type: profileData.account_type || 'alumni'
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
            account_type: 'alumni'
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
              batch: userToLogin.batch,
              degree: userToLogin.degree,
              linkedin: userToLogin.linkedin || '',
              verification_status: userToLogin.verification_status !== undefined ? userToLogin.verification_status : false,
              account_type: userToLogin.account_type || 'alumni'
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
          areaOfCertification: registerForm.areaOfCertification || '',
          profession: registerForm.profession || '',
          productServices: registerForm.productServices || '',
          companyWebsite: registerForm.companyWebsite || '',
          verification_status: false,
          account_type: 'alumni',
          createdAt: new Date().toISOString()
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
          degrees: registerForm.degrees || [],
          jobTitle: registerForm.jobTitle || '',
          company: registerForm.company || '',
          linkedin: registerForm.linkedin || '',
          dom: registerForm.dom || '',
          areaOfCertification: registerForm.areaOfCertification || '',
          profession: registerForm.profession || '',
          productServices: registerForm.productServices || '',
          companyWebsite: registerForm.companyWebsite || '',
          verification_status: false,
          account_type: 'alumni'
        }

        setSuccessMessage('Account created successfully! Welcome to the DFT Alumni Network.')
        setShowSuccess(true)
        setLoading(false)

        setTimeout(() => {
          onLoginSuccess(newUser)
          navigate('/')
        }, 1500)
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
          areaOfCertification: registerForm.areaOfCertification || '',
          verification_status: false,
          account_type: 'alumni'
        }

        localStorage.setItem('mockRegisteredAlumni', JSON.stringify(newUser))

        setSuccessMessage('Account created successfully! Welcome to the DFT Alumni Network. (Mock Mode)')
        setShowSuccess(true)
        setLoading(false)

        setTimeout(() => {
          onLoginSuccess({
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
            degrees: newUser.degrees || [],
            linkedin: newUser.linkedin || '',
            dom: newUser.dom || '',
            areaOfCertification: newUser.areaOfCertification || '',
            profession: newUser.profession || '',
            productServices: newUser.productServices || '',
            companyWebsite: newUser.companyWebsite || '',
            verification_status: false,
            account_type: 'alumni'
          })
          navigate('/')
        }, 1500)
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
    setLoading(true)

    if (isFirebaseConfigured) {
      try {
        await sendPasswordResetEmail(auth, loginForm.email)
        setError('')
        setSuccessMessage(`Password reset link sent to ${loginForm.email}! Check your inbox.`)
        setShowSuccess(true)
        setLoading(false)
        setTimeout(() => setShowSuccess(false), 4000)
      } catch (err) {
        setLoading(false)
        console.error("Firebase Password Reset Error:", err)
        if (err.code === 'auth/invalid-email') {
          setError('Please enter a valid email address.')
        } else if (err.code === 'auth/user-not-found') {
          setError('No account found with this email address.')
        } else {
          setError(err.message || 'Error sending password reset link.')
        }
      }
    } else {
      // Fallback Mock Password Reset
      setTimeout(() => {
        setSuccessMessage(`Password reset link has been mock-sent to ${loginForm.email}.`)
        setShowSuccess(true)
        setLoading(false)
        setTimeout(() => setShowSuccess(false), 4000)
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

                    <div className="login-field login-field--full">
                      <label htmlFor="reg-product-services">Detail of Product / Services offered by your Company</label>
                      <div className="login-field__input-wrap">
                        <FaBoxOpen className="login-field__icon" />
                        <select
                          id="reg-product-services"
                          name="productServices"
                          value={registerForm.productServices}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        >
                          <option value="">Select Offerings</option>
                          {PRODUCT_SERVICE_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
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
                      <label htmlFor="reg-certification">Area of Certification</label>
                      <div className="login-field__input-wrap">
                        <FaCertificate className="login-field__icon" style={{ color: 'var(--slate)' }} />
                        <select
                          id="reg-certification"
                          name="areaOfCertification"
                          value={registerForm.areaOfCertification}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        >
                          <option value="">Select Certification Area</option>
                          {CERTIFICATION_OPTIONS.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
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
    </div>
  )
}

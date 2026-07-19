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
  FaWhatsapp
} from 'react-icons/fa'
import alumniLogo from '../assets/Logo/dft-logo-dark.avif'
import './Login.css'
import { auth, db, isFirebaseConfigured } from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'

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
    lastName: '',
    email: '',
    dob: '',
    phone: '',
    secondaryPhone: '',
    whatsapp: '',
    password: '',
    confirmPassword: '',
    batch: '',
    degree: 'B.Tech Textile',
    jobTitle: '',
    company: ''
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
    setRegisterForm(prev => ({
      ...prev,
      [name]: cleanValue
    }))
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
          userToLogin = {
            uid: user.uid,
            name: profileData.name || user.displayName || 'Alumni Member',
            email: user.email,
            dob: profileData.dob || '',
            batch: profileData.batch || '',
            degree: profileData.degree || '',
            jobTitle: profileData.jobTitle || '',
            company: profileData.company || '',
            verification_status: profileData.verification_status !== undefined ? profileData.verification_status : false,
            account_type: profileData.account_type || 'alumni'
          }
        } else {
          userToLogin = {
            uid: user.uid,
            name: user.displayName || 'Alumni Member',
            email: user.email,
            dob: '',
            batch: '',
            degree: '',
            jobTitle: '',
            company: '',
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
            onLoginSuccess({
              uid: userToLogin.uid || 'mock-uid-unspecified',
              name: userToLogin.name,
              email: userToLogin.email,
              batch: userToLogin.batch,
              degree: userToLogin.degree,
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

    if (captchaInput !== captchaCode) {
      setError('Incorrect security verification code. Please try again.')
      return
    }

    const batchYear = parseInt(registerForm.batch, 10)
    const currentYear = new Date().getFullYear()
    if (isNaN(batchYear) || batchYear < 1970 || batchYear > currentYear + 4) {
      setError(`Please enter a valid graduation batch year (e.g. 1970 - ${currentYear + 4}).`)
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
          lastName: registerForm.lastName,
          name: `${registerForm.firstName} ${registerForm.lastName}`.trim(),
          email: registerForm.email,
          dob: registerForm.dob,
          phone: registerForm.phone.trim(),
          secondaryPhone: registerForm.secondaryPhone.trim(),
          whatsapp: registerForm.whatsapp.trim(),
          batch: registerForm.batch,
          degree: registerForm.degree,
          jobTitle: registerForm.jobTitle || '',
          company: registerForm.company || '',
          verification_status: false,
          account_type: 'alumni',
          createdAt: new Date().toISOString()
        })

        const newUser = {
          uid: user.uid,
          name: `${registerForm.firstName} ${registerForm.lastName}`.trim(),
          email: registerForm.email,
          dob: registerForm.dob,
          phone: registerForm.phone.trim(),
          secondaryPhone: registerForm.secondaryPhone.trim(),
          whatsapp: registerForm.whatsapp.trim(),
          batch: registerForm.batch,
          degree: registerForm.degree,
          jobTitle: registerForm.jobTitle || '',
          company: registerForm.company || '',
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
          name: `${registerForm.firstName} ${registerForm.lastName}`.trim(),
          email: registerForm.email,
          dob: registerForm.dob,
          phone: registerForm.phone.trim(),
          secondaryPhone: registerForm.secondaryPhone.trim(),
          whatsapp: registerForm.whatsapp.trim(),
          password: registerForm.password,
          batch: registerForm.batch,
          degree: registerForm.degree,
          jobTitle: registerForm.jobTitle || '',
          company: registerForm.company || '',
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
            batch: newUser.batch,
            degree: newUser.degree,
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

                  <div className="login-form__grid">
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
                      <label htmlFor="reg-batch">Graduation Batch Year <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap">
                        <FaGraduationCap className="login-field__icon" />
                        <input
                          id="reg-batch"
                          type="text"
                          name="batch"
                          placeholder="e.g. 2018"
                          value={registerForm.batch}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-degree">Degree / Branch <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap">
                        <FaGraduationCap className="login-field__icon" />
                        <select
                          id="reg-degree"
                          name="degree"
                          value={registerForm.degree}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        >
                          <option value="B.Tech Textile">B.Tech Textile Technology</option>
                          <option value="M.Tech Textile">M.Tech Textile Engineering</option>
                          <option value="B.Tech Chemical">B.Tech Chemical Technology</option>
                          <option value="Ph.D. Textile">Ph.D. Textile Science</option>
                          <option value="Diploma Textile">Diploma Textile Design</option>
                        </select>
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-phone">Contact Number <span className="login-field__required">*</span></label>
                      <div className="login-field__input-wrap">
                        <FaPhone className="login-field__icon" style={{ transform: 'scaleX(-1)' }} />
                        <input
                          id="reg-phone"
                          type="tel"
                          name="phone"
                          placeholder="e.g. +91 98765 43210"
                          value={registerForm.phone}
                          onChange={handleRegisterChange}
                          required
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-sec-phone">Secondary Contact Number</label>
                      <div className="login-field__input-wrap">
                        <FaPhone className="login-field__icon" style={{ transform: 'scaleX(-1)' }} />
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
                      <label htmlFor="reg-whatsapp">WhatsApp Number</label>
                      <div className="login-field__input-wrap">
                        <FaWhatsapp className="login-field__icon" />
                        <input
                          id="reg-whatsapp"
                          type="tel"
                          name="whatsapp"
                          placeholder="Optional"
                          value={registerForm.whatsapp}
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
                          placeholder="e.g. Senior Merchandiser"
                          value={registerForm.jobTitle}
                          onChange={handleRegisterChange}
                          disabled={loading}
                        />
                      </div>
                    </div>

                    <div className="login-field">
                      <label htmlFor="reg-company">Current Organization</label>
                      <div className="login-field__input-wrap">
                        <FaBriefcase className="login-field__icon" />
                        <input
                          id="reg-company"
                          type="text"
                          name="company"
                          placeholder="e.g. Arvind Mills"
                          value={registerForm.company}
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
                      <label htmlFor="reg-captcha">Security Verification <span className="login-field__required">*</span></label>
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
                        >
                          Refresh Code
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

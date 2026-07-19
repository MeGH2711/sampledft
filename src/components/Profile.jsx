import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  FaArrowLeft, 
  FaUser, 
  FaEnvelope, 
  FaCalendarAlt, 
  FaGraduationCap, 
  FaBuilding, 
  FaBriefcase, 
  FaSave, 
  FaEdit, 
  FaTimes, 
  FaTimesCircle,
  FaCheckCircle, 
  FaClock,
  FaPhone,
  FaWhatsapp
} from 'react-icons/fa'
import { auth, db, isFirebaseConfigured } from '../firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import './Profile.css'

const formatDob = (dobField) => {
  if (!dobField) return ''
  // If it's a Firestore Timestamp object
  if (typeof dobField.toDate === 'function') {
    try {
      const date = dobField.toDate()
      return date.toISOString().split('T')[0]
    } catch (e) {
      console.error(e)
    }
  }
  // If it's a JS Date object
  if (dobField instanceof Date) {
    return dobField.toISOString().split('T')[0]
  }
  // If it's a string, return it (ensure it is yyyy-MM-dd if it's an ISO timestamp)
  if (typeof dobField === 'string') {
    if (dobField.includes('T')) {
      return dobField.split('T')[0]
    }
    return dobField
  }
  return ''
}

export default function Profile({ user, onUpdateUser }) {
  const navigate = useNavigate()
  
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  
  // Local state holding the profile values
  const [profileForm, setProfileForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    phone: '',
    secondaryPhone: '',
    whatsapp: '',
    batch: '',
    degree: '',
    jobTitle: '',
    company: '',
    verification_status: false,
    account_type: 'alumni'
  })

  const [originalForm, setOriginalForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    phone: '',
    secondaryPhone: '',
    whatsapp: '',
    batch: '',
    degree: '',
    jobTitle: '',
    company: '',
    verification_status: false,
    account_type: 'alumni'
  })

  // Load user data on mount
  useEffect(() => {
    if (!user) return

    const fetchLatestUserData = async () => {
      setFetching(true)
      setError('')

      const uid = user.uid || (auth.currentUser ? auth.currentUser.uid : null)

      if (isFirebaseConfigured && uid) {
        try {
          const userDocRef = doc(db, 'users', uid)
          const userDocSnap = await getDoc(userDocRef)
          
          if (userDocSnap.exists()) {
            const data = userDocSnap.data()
            // Retrieve first and last name from saved values, or split display name if missing
            const nameSplit = (data.name || user.name || '').split(' ')
            const defaultFirstName = data.firstName || nameSplit[0] || ''
            const defaultLastName = data.lastName || nameSplit.slice(1).join(' ') || ''

            const loadedData = {
              firstName: defaultFirstName,
              lastName: defaultLastName,
              email: data.email || user.email || '',
              dob: formatDob(data.dob),
              phone: data.phone || '',
              secondaryPhone: data.secondaryPhone || '',
              whatsapp: data.whatsapp || '',
              batch: data.batch || '',
              degree: data.degree || '',
              jobTitle: data.jobTitle || '',
              company: data.company || '',
              verification_status: data.verification_status !== undefined ? data.verification_status : false,
              account_type: data.account_type || 'alumni'
            }
            setProfileForm(loadedData)
            setOriginalForm(loadedData)
          } else {
            // Document doesn't exist yet, seed with basic login info
            const nameSplit = (user.name || '').split(' ')
            const seedData = {
              firstName: nameSplit[0] || '',
              lastName: nameSplit.slice(1).join(' ') || '',
              email: user.email || '',
              dob: '',
              phone: '',
              secondaryPhone: '',
              whatsapp: '',
              batch: user.batch || '',
              degree: user.degree || '',
              jobTitle: '',
              company: '',
              verification_status: false,
              account_type: 'alumni'
            }
            setProfileForm(seedData)
            setOriginalForm(seedData)
          }
        } catch (err) {
          console.error("Error fetching latest user profile:", err)
          setError('Failed to fetch the latest profile details from the server.')
        } finally {
          setFetching(false)
        }
      } else {
        // Mock Mode fetch: read from localStorage mockRegisteredAlumni if email matches
        const mockRegistered = localStorage.getItem('mockRegisteredAlumni')
        if (mockRegistered) {
          const parsed = JSON.parse(mockRegistered)
          if (parsed.email === user.email) {
            const nameSplit = (parsed.name || '').split(' ')
            const mockData = {
              firstName: parsed.firstName || nameSplit[0] || '',
              lastName: parsed.lastName || nameSplit.slice(1).join(' ') || '',
              email: parsed.email || '',
              dob: formatDob(parsed.dob),
              phone: parsed.phone || '',
              secondaryPhone: parsed.secondaryPhone || '',
              whatsapp: parsed.whatsapp || '',
              batch: parsed.batch || '',
              degree: parsed.degree || '',
              jobTitle: parsed.jobTitle || '',
              company: parsed.company || '',
              verification_status: parsed.verification_status !== undefined ? parsed.verification_status : false,
              account_type: parsed.account_type || 'alumni'
            }
            setProfileForm(mockData)
            setOriginalForm(mockData)
            setFetching(false)
            return
          }
        }

        // Default layout load fallback
        const nameSplit = (user.name || '').split(' ')
        const fallbackData = {
          firstName: nameSplit[0] || '',
          lastName: nameSplit.slice(1).join(' ') || '',
          email: user.email || '',
          dob: formatDob(user.dob),
          phone: user.phone || '',
          secondaryPhone: user.secondaryPhone || '',
          whatsapp: user.whatsapp || '',
          batch: user.batch || '',
          degree: user.degree || '',
          jobTitle: user.jobTitle || '',
          company: user.company || '',
          verification_status: user.verification_status || false,
          account_type: user.account_type || 'alumni'
        }
        setProfileForm(fallbackData)
        setOriginalForm(fallbackData)
        setFetching(false)
      }
    }

    fetchLatestUserData()
  }, [user])

  // Auto-clear success message after 5 seconds to match fade-out animation
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess('')
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [success])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    const cleanValue = ['phone', 'secondaryPhone', 'whatsapp'].includes(name) 
      ? value.replace(/\D/g, '') 
      : value;
    setProfileForm(prev => ({
      ...prev,
      [name]: cleanValue
    }))
  }

  const handleEditToggle = () => {
    if (isEditing) {
      setProfileForm(originalForm)
    }
    setIsEditing(!isEditing)
    setError('')
    setSuccess('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    // Basic Validations
    if (!profileForm.firstName.trim() || !profileForm.lastName.trim()) {
      setError('First name and last name fields are required.')
      return
    }

    if (!profileForm.phone.trim()) {
      setError('Contact number is compulsory.')
      return
    }

    const batchYear = parseInt(profileForm.batch)
    const currentYear = new Date().getFullYear()
    if (profileForm.batch && (isNaN(batchYear) || batchYear < 1970 || batchYear > currentYear + 4)) {
      setError(`Please enter a valid graduation batch year (e.g. 1970 - ${currentYear + 4}).`)
      return
    }

    setLoading(true)

    const updatedProfile = {
      firstName: profileForm.firstName.trim(),
      lastName: profileForm.lastName.trim(),
      name: `${profileForm.firstName.trim()} ${profileForm.lastName.trim()}`,
      dob: profileForm.dob,
      phone: profileForm.phone.trim(),
      secondaryPhone: profileForm.secondaryPhone.trim(),
      whatsapp: profileForm.whatsapp.trim(),
      batch: profileForm.batch,
      degree: profileForm.degree,
      jobTitle: profileForm.jobTitle.trim(),
      company: profileForm.company.trim()
    }

    const uid = user.uid || (auth.currentUser ? auth.currentUser.uid : null)

    if (isFirebaseConfigured && uid) {
      try {
        const userDocRef = doc(db, 'users', uid)
        await setDoc(userDocRef, updatedProfile, { merge: true })
        
        // Propagate updates up to the App session state
        onUpdateUser(updatedProfile)
        setOriginalForm(prev => ({ ...prev, ...updatedProfile }))
        
        setSuccess('Profile updated successfully!')
        setIsEditing(false)
      } catch (err) {
        console.error("Error updating user Firestore document:", err)
        setError('Failed to save changes. Please try again.')
      } finally {
        setLoading(false)
      }
    } else {
      // Mock Mode save
      setTimeout(() => {
        const mockRegistered = localStorage.getItem('mockRegisteredAlumni')
        if (mockRegistered) {
          const parsed = JSON.parse(mockRegistered)
          if (parsed.email === user.email) {
            const updatedMock = {
              ...parsed,
              ...updatedProfile,
              // sync individual fields in root
              firstName: updatedProfile.firstName,
              lastName: updatedProfile.lastName,
              name: updatedProfile.name,
              dob: updatedProfile.dob,
              phone: updatedProfile.phone,
              secondaryPhone: updatedProfile.secondaryPhone,
              whatsapp: updatedProfile.whatsapp,
              batch: updatedProfile.batch,
              degree: updatedProfile.degree,
              jobTitle: updatedProfile.jobTitle,
              company: updatedProfile.company
            }
            localStorage.setItem('mockRegisteredAlumni', JSON.stringify(updatedMock))
          }
        }
        
        // Propagate updates
        onUpdateUser(updatedProfile)
        setOriginalForm(prev => ({ ...prev, ...updatedProfile }))
        
        setSuccess('Profile updated successfully! (Mock Mode)')
        setIsEditing(false)
        setLoading(false)
      }, 1000)
    }
  }

  const hasChanges = originalForm ? (
    profileForm.firstName !== originalForm.firstName ||
    profileForm.lastName !== originalForm.lastName ||
    profileForm.dob !== originalForm.dob ||
    profileForm.phone !== originalForm.phone ||
    profileForm.secondaryPhone !== originalForm.secondaryPhone ||
    profileForm.whatsapp !== originalForm.whatsapp ||
    profileForm.batch !== originalForm.batch ||
    profileForm.degree !== originalForm.degree ||
    profileForm.jobTitle !== originalForm.jobTitle ||
    profileForm.company !== originalForm.company
  ) : false

  // Signed out check
  if (!user) {
    return (
      <div className="profile-page">
        <div className="profile-page__decor profile-page__decor--1"></div>
        <div className="profile-page__decor profile-page__decor--2"></div>
        <div className="profile-container">
          <div className="profile-empty-state">
            <h2 className="profile-empty-state__title">Access Restricted</h2>
            <p className="profile-empty-state__desc">
              Please sign in to the DFT Alumni Portal to view and update your profile details.
            </p>
            <button 
              className="profile-btn profile-btn--primary"
              onClick={() => navigate('/login')}
            >
              GO TO SIGN IN
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="profile-page">
      <div className="profile-page__decor profile-page__decor--1"></div>
      <div className="profile-page__decor profile-page__decor--2"></div>

      <div className="profile-container">
        {/* Back Link */}
        <button className="profile-back-link" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back
        </button>

        {error && (
          <div className="profile-alert profile-alert--error">
            <FaTimesCircle className="profile-alert__icon" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="profile-alert profile-alert--success">
            <FaCheckCircle className="profile-alert__icon" />
            <span>{success}</span>
          </div>
        )}

        <div className="profile-grid">
          {/* Left Column */}
          <div className="profile-card-left">
            <div className="profile-avatar-large">
              {((profileForm.firstName || user.name || 'U').charAt(0)).toUpperCase()}
            </div>
            <h2 className="profile-name">
              {profileForm.firstName || profileForm.lastName 
                ? `${profileForm.firstName} ${profileForm.lastName}` 
                : user.name
              }
            </h2>
            
            <div className="profile-badge-row">
              <span className={`navbar__user-badge ${profileForm.verification_status ? 'navbar__user-badge--verified' : 'navbar__user-badge--unverified'}`} style={{ margin: '0 auto', display: 'inline-flex' }}>
                {profileForm.verification_status ? (
                  <>
                    <FaCheckCircle className="navbar__user-badge-icon" /> Verified Alumni
                    <span className="navbar__user-badge-tooltip">Your account has been successfully verified by the Administrator.</span>
                  </>
                ) : (
                  <>
                    <FaClock className="navbar__user-badge-icon" /> Pending Verification
                    <span className="navbar__user-badge-tooltip">Admin will verify the account, this might take 1-2 days</span>
                  </>
                )}
              </span>
            </div>

            {profileForm.batch && (
              <span className="profile-class-sub">
                Class of {profileForm.batch}
              </span>
            )}

            <hr className="profile-divider" />

            <div className="profile-meta-info">
              <div className="profile-meta-item">
                <span className="profile-meta-label">Email Address</span>
                <span className="profile-meta-value" title={profileForm.email}>{profileForm.email}</span>
              </div>
              <div className="profile-meta-item">
                <span className="profile-meta-label">Contact Number</span>
                <span className="profile-meta-value">{profileForm.phone || 'Not Provided'}</span>
              </div>
              <div className="profile-meta-item">
                <span className="profile-meta-label">Account Type</span>
                <span className="profile-meta-value" style={{ textTransform: 'capitalize' }}>
                  {profileForm.account_type}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="profile-card-right">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 className="profile-section-title" style={{ marginBottom: 0 }}>Profile Details</h3>
              {!isEditing && (
                <button 
                  type="button" 
                  className="profile-btn profile-btn--secondary"
                  onClick={handleEditToggle}
                  disabled={fetching}
                >
                  <FaEdit /> Edit Profile
                </button>
              )}
            </div>

            {fetching ? (
              <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
                <div className="profile-spinner" style={{ borderTopColor: 'var(--navy-deep)', width: '32px', height: '32px', borderWidth: '3px' }}></div>
              </div>
            ) : (
              <form className="profile-form" onSubmit={handleSubmit}>
                <div className="profile-form__grid">
                  <div className="profile-field">
                    <label htmlFor="prof-first-name">First Name <span className="profile-field__required">*</span></label>
                    <div className="profile-field__input-wrap">
                      <FaUser className="profile-field__icon" />
                      <input 
                        id="prof-first-name"
                        type="text" 
                        name="firstName"
                        value={profileForm.firstName}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        required
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>

                  <div className="profile-field">
                    <label htmlFor="prof-last-name">Last Name <span className="profile-field__required">*</span></label>
                    <div className="profile-field__input-wrap">
                      <FaUser className="profile-field__icon" />
                      <input 
                        id="prof-last-name"
                        type="text" 
                        name="lastName"
                        value={profileForm.lastName}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        required
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>
                </div>

                <div className="profile-form__grid">
                  <div className="profile-field">
                    <label htmlFor="prof-dob">Date of Birth</label>
                    <div className="profile-field__input-wrap">
                      <FaCalendarAlt className="profile-field__icon" />
                      <input 
                        id="prof-dob"
                        type="date" 
                        name="dob"
                        value={profileForm.dob}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>

                  <div className="profile-field">
                    <label htmlFor="prof-email">Email Address</label>
                    <div className="profile-field__input-wrap">
                      <FaEnvelope className="profile-field__icon" />
                      <input 
                        id="prof-email"
                        type="email" 
                        name="email"
                        value={profileForm.email}
                        disabled // email cannot be modified directly
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>
                </div>

                <div className="profile-form__grid">
                  <div className="profile-field">
                    <label htmlFor="prof-batch">Graduation Batch <span className="profile-field__required">*</span></label>
                    <div className="profile-field__input-wrap">
                      <FaCalendarAlt className="profile-field__icon" />
                      <input 
                        id="prof-batch"
                        type="number" 
                        name="batch"
                        value={profileForm.batch}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        placeholder="No Data Provided"
                        required
                      />
                    </div>
                  </div>

                  <div className="profile-field">
                    <label htmlFor="prof-degree">Degree <span className="profile-field__required">*</span></label>
                    <div className="profile-field__input-wrap">
                      <FaGraduationCap className="profile-field__icon" />
                      <input 
                        id="prof-degree"
                        type="text" 
                        name="degree"
                        value={profileForm.degree}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        placeholder="No Data Provided"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="profile-form__grid">
                  <div className="profile-field">
                    <label htmlFor="prof-phone">Contact Number <span className="profile-field__required">*</span></label>
                    <div className="profile-field__input-wrap">
                      <FaPhone className="profile-field__icon" style={{ transform: 'scaleX(-1)' }} />
                      <input 
                        id="prof-phone"
                        type="tel" 
                        name="phone"
                        value={profileForm.phone}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        required
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>

                  <div className="profile-field">
                    <label htmlFor="prof-sec-phone">Secondary Contact Number</label>
                    <div className="profile-field__input-wrap">
                      <FaPhone className="profile-field__icon" style={{ transform: 'scaleX(-1)' }} />
                      <input 
                        id="prof-sec-phone"
                        type="tel" 
                        name="secondaryPhone"
                        value={profileForm.secondaryPhone}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>
                </div>

                <div className="profile-form__grid">
                  <div className="profile-field">
                    <label htmlFor="prof-whatsapp">WhatsApp Number</label>
                    <div className="profile-field__input-wrap">
                      <FaWhatsapp className="profile-field__icon" />
                      <input 
                        id="prof-whatsapp"
                        type="tel" 
                        name="whatsapp"
                        value={profileForm.whatsapp}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>
                  <div className="profile-field" style={{ visibility: 'hidden' }}></div>
                </div>

                <div className="profile-form__grid">
                  <div className="profile-field">
                    <label htmlFor="prof-job-title">Job Title</label>
                    <div className="profile-field__input-wrap">
                      <FaBriefcase className="profile-field__icon" />
                      <input 
                        id="prof-job-title"
                        type="text" 
                        name="jobTitle"
                        value={profileForm.jobTitle}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>

                  <div className="profile-field">
                    <label htmlFor="prof-company">Company</label>
                    <div className="profile-field__input-wrap">
                      <FaBuilding className="profile-field__icon" />
                      <input 
                        id="prof-company"
                        type="text" 
                        name="company"
                        value={profileForm.company}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>
                </div>

                {isEditing && (
                  <div className="profile-actions">
                    <button 
                      type="button" 
                      className="profile-btn profile-btn--secondary"
                      onClick={handleEditToggle}
                      disabled={loading}
                    >
                      <FaTimes /> Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="profile-btn profile-btn--primary"
                      disabled={loading || !hasChanges}
                    >
                      {loading ? (
                        <span className="profile-spinner"></span>
                      ) : (
                        <>
                          <FaSave /> Save Changes
                        </>
                      )}
                    </button>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

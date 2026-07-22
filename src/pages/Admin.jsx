import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FaUserShield,
  FaUsers,
  FaCheckCircle,
  FaTimesCircle,
  FaBriefcase,
  FaTrash,
  FaExclamationTriangle,
  FaClock,
  FaSearch,
  FaArrowLeft,
  FaPlus,
  FaMapMarkerAlt,
  FaCopy
} from 'react-icons/fa'
import { db } from '../firebase'
import { collection, getDocs, doc, updateDoc, deleteDoc, addDoc } from 'firebase/firestore'
import './Admin.css'

const formatDateFormatted = (dateStr) => {
  if (!dateStr) return 'N/A'
  try {
    const cleanStr = String(dateStr).trim()
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ]
    // Match YYYY-MM-DD
    const match = cleanStr.match(/^(\d{4})-(\d{2})-(\d{2})$/)
    if (match) {
      const year = parseInt(match[1], 10)
      const monthIndex = parseInt(match[2], 10) - 1
      const day = parseInt(match[3], 10)
      if (monthIndex >= 0 && monthIndex < 12) {
        return `${day} ${months[monthIndex]} ${year}`
      }
    }

    // Match DD-MM-YYYY or DD/MM/YYYY
    const matchAlt = cleanStr.match(/^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/)
    if (matchAlt) {
      const day = parseInt(matchAlt[1], 10)
      const monthIndex = parseInt(matchAlt[2], 10) - 1
      const year = parseInt(matchAlt[3], 10)
      if (monthIndex >= 0 && monthIndex < 12) {
        return `${day} ${months[monthIndex]} ${year}`
      }
    }

    // Standard ISO parse fallback
    const d = new Date(cleanStr)
    if (!isNaN(d.getTime())) {
      return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
    }
  } catch (e) {
    console.warn("Date formatting error:", e)
  }
  return dateStr
}

export default function Admin({ user, onUpdateUser }) {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('verification')
  const [loading, setLoading] = useState(true)
  const [usersList, setUsersList] = useState([])
  const [jobsList, setJobsList] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState('all') // all, pending, verified
  const [toast, setToast] = useState({ show: false, message: '', type: '' })
  const [permissionError, setPermissionError] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [deletingJobId, setDeletingJobId] = useState(null)

  // Job Posting Form State
  const [jobForm, setJobForm] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    experience: '',
    skills: '',
    applyUrl: ''
  })
  const [submittingJob, setSubmittingJob] = useState(false)

  // Setup toast notification helper
  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type })
    setTimeout(() => {
      setToast({ show: false, message: '', type: '' })
    }, 4500)
  }

  // Load dashboard data directly from Firestore
  const loadData = async () => {
    setLoading(true)
    setPermissionError(false)
    try {
      // Fetch users from Firestore collection 'users'
      const usersSnap = await getDocs(collection(db, 'users'))
      const fetchedUsers = []
      usersSnap.forEach((doc) => {
        const data = doc.data()
        fetchedUsers.push({
          uid: doc.id,
          ...data,
          name: data.name || (data.firstName ? `${data.firstName} ${data.lastName || ''}`.trim() : 'Unnamed User')
        })
      })
      setUsersList(fetchedUsers)
      console.log("Admin Loaded Firestore Users:", fetchedUsers.length, fetchedUsers)

      // Fetch jobs from Firestore collection 'jobs'
      const jobsSnap = await getDocs(collection(db, 'jobs'))
      const fetchedJobs = []
      jobsSnap.forEach((doc) => {
        fetchedJobs.push({
          id: doc.id,
          ...doc.data()
        })
      })
      setJobsList(fetchedJobs)
    } catch (err) {
      console.error("Firestore loading error:", err)
      if (err.code === 'permission-denied' || String(err).includes('permission')) {
        setPermissionError(true)
        showToast("Database Permission Denied. Check Firestore security rules.", "error")
      } else {
        showToast("Failed to fetch database records.", "error")
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!user || (user.account_type !== 'admin' && user.account_type !== 'developer')) {
      setLoading(false)
      return
    }
    loadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.uid])

  // --- Account Verification Handlers ---
  const handleToggleVerification = async (uid, currentStatus) => {
    const newStatus = !currentStatus
    try {
      await updateDoc(doc(db, 'users', uid), {
        verification_status: newStatus
      })

      // Sync if the admin/dev just modified their own status
      if (uid === user.uid) {
        onUpdateUser({ verification_status: newStatus })
      }

      setUsersList(prev => prev.map(u => u.uid === uid ? { ...u, verification_status: newStatus } : u))
      if (selectedUser && selectedUser.uid === uid) {
        setSelectedUser(prev => ({ ...prev, verification_status: newStatus }))
      }
      showToast(newStatus ? "Account verified successfully!" : "Verification revoked.")
    } catch (err) {
      console.error("Error updating user verification:", err)
      showToast("Error updating verification status in database.", "error")
    }
  }

  // --- Access Management Handlers (Developer Only) ---
  const handleRoleChange = async (uid, newRole) => {
    try {
      await updateDoc(doc(db, 'users', uid), {
        account_type: newRole
      })

      // Sync if the logged-in dev modifies their own role
      if (uid === user.uid) {
        onUpdateUser({ account_type: newRole })
      }

      setUsersList(prev => prev.map(u => u.uid === uid ? { ...u, account_type: newRole } : u))
      showToast(`User role updated to ${newRole.toUpperCase()}.`)
    } catch (err) {
      console.error("Error updating user role in database:", err)
      showToast("Error updating user role in database.", "error")
    }
  }

  // --- Job Posting Handlers ---
  const handleJobFormChange = (e) => {
    const { name, value } = e.target
    setJobForm(prev => ({ ...prev, [name]: value }))
  }

  const handlePostJob = async (e) => {
    e.preventDefault()
    if (!jobForm.title.trim() || !jobForm.company.trim() || !jobForm.location.trim()) {
      showToast("Please fill in Job Title, Company, and Location.", "error")
      return
    }

    setSubmittingJob(true)
    try {
      const newJob = {
        title: jobForm.title.trim(),
        company: jobForm.company.trim(),
        location: jobForm.location.trim(),
        description: jobForm.description.trim(),
        experience: jobForm.experience.trim() || 'Not Specified',
        skills: jobForm.skills.trim() || 'Not Specified',
        applyUrl: jobForm.applyUrl.trim() || '#',
        postedAt: new Date().toISOString()
      }

      const docRef = await addDoc(collection(db, 'jobs'), newJob)
      setJobsList(prev => [{ id: docRef.id, ...newJob }, ...prev])

      showToast("Job opportunity posted successfully!")
      setJobForm({
        title: '',
        company: '',
        location: '',
        description: '',
        experience: '',
        skills: '',
        applyUrl: ''
      })
    } catch (err) {
      console.error("Error posting job to Firestore:", err)
      showToast("Error saving job vacancy in database.", "error")
    } finally {
      setSubmittingJob(false)
    }
  }

  const handleConfirmDeleteJob = async () => {
    if (!deletingJobId) return

    try {
      await deleteDoc(doc(db, 'jobs', deletingJobId))
      setJobsList(prev => prev.filter(j => j.id !== deletingJobId))
      showToast("Job vacancy deleted successfully!")
    } catch (err) {
      console.error("Error deleting job posting:", err)
      showToast("Error deleting job vacancy.", "error")
    } finally {
      setDeletingJobId(null)
    }
  }

  const copyRulesToClipboard = () => {
    const rules = `rules_version = '2';\nservice cloud.firestore {\n  match /databases/{database}/documents {\n    function isLoggedIn() {\n      return request.auth != null;\n    }\n    function getUserData() {\n      return get(/databases/$(database)/documents/users/$(request.auth.uid)).data;\n    }\n    function isAdminOrDev() {\n      return isLoggedIn() && (getUserData().account_type == 'admin' || getUserData().account_type == 'developer');\n    }\n    match /users/{userId} {\n      allow read, write: if isLoggedIn() && request.auth.uid == userId;\n      allow read, write: if isAdminOrDev();\n    }\n    match /jobs/{jobId} {\n      allow read: if true;\n      allow write: if isAdminOrDev();\n    }\n  }\n}`;
    navigator.clipboard.writeText(rules)
    showToast("Firestore rules copied to clipboard!")
  }

  // Auth/Role Guard Rendering
  if (!user || (user.account_type !== 'admin' && user.account_type !== 'developer')) {
    return (
      <div className="admin-denied-page">
        <div className="admin-denied-card">
          <FaExclamationTriangle className="admin-denied-icon" />
          <h2>Access Restricted</h2>
          <p>
            This portal is strictly reserved for DFT website Administrators and Developers.
            If you believe this is an error, please contact support or re-authenticate.
          </p>
          <button className="admin-btn-primary" onClick={() => navigate('/')}>
            <FaArrowLeft style={{ marginRight: '8px' }} /> Return to Home
          </button>
        </div>
      </div>
    )
  }

  // Loading indicator
  if (loading) {
    return (
      <div className="admin-page">
        <div className="admin-loading-container">
          <div className="admin-spinner"></div>
          <p style={{ color: 'var(--navy-deep)', fontWeight: '600' }}>Loading Dashboard Data...</p>
        </div>
      </div>
    )
  }

  // Filtering and Searching Users
  const filteredUsers = usersList.filter(u => {
    const query = searchQuery.toLowerCase().trim()
    const nameMatch = String(u.name || '').toLowerCase().includes(query)
    const emailMatch = String(u.email || '').toLowerCase().includes(query)
    const batchMatch = String(u.batch || u.passoutYear || '').toLowerCase().includes(query)
    const genderMatch = String(u.gender || '').toLowerCase().includes(query)

    // Check degrees array safely or fallback to degree string comparison
    const degreeMatch = Array.isArray(u.degrees)
      ? u.degrees.some(d => {
        if (d && typeof d === 'object') {
          return String(d.degree || '').toLowerCase().includes(query) ||
            String(d.domain || '').toLowerCase().includes(query);
        }
        return String(d || '').toLowerCase().includes(query);
      })
      : String(u.degree || '').toLowerCase().includes(query)

    const searchMatch = !query || nameMatch || emailMatch || batchMatch || degreeMatch || genderMatch

    let statusMatch = true
    if (filterStatus === 'pending') statusMatch = !u.verification_status
    if (filterStatus === 'verified') statusMatch = u.verification_status

    return searchMatch && statusMatch
  })

  // Access Management tab: same filtered set, ordered developer -> admin -> alumni
  const ROLE_ORDER = { developer: 0, admin: 1, alumni: 2 }
  const accessManagementUsers = [...filteredUsers].sort((a, b) => {
    const roleA = ROLE_ORDER[a.account_type] ?? ROLE_ORDER.alumni
    const roleB = ROLE_ORDER[b.account_type] ?? ROLE_ORDER.alumni
    return roleA - roleB
  })

  // Count helper statistics
  const totalUsers = usersList.length
  const pendingCount = usersList.filter(u => !u.verification_status).length
  const verifiedCount = usersList.filter(u => u.verification_status).length
  const activeJobsCount = jobsList.length

  return (
    <div className="admin-page">
      <div className="admin-container">

        {/* Toast notification banner */}
        {toast.show && (
          <div className={`admin-toast-message ${toast.type}`} role={toast.type === 'error' ? 'alert' : 'status'}>
            {toast.type === 'error' ? <FaTimesCircle /> : <FaCheckCircle />}
            <span>{toast.message}</span>
            <button
              type="button"
              className="admin-toast-message__close"
              onClick={() => setToast({ show: false, message: '', type: '' })}
              aria-label="Dismiss"
            >
              &times;
            </button>
          </div>
        )}

        {/* Dashboard Title & Meta */}
        <div className="admin-header">
          <div style={{ marginBottom: '20px' }}>
            <button
              type="button"
              className="admin-btn-view"
              style={{ padding: '8px 16px', display: 'inline-flex', alignItems: 'center', gap: '6px', border: '1px solid var(--line-grey)' }}
              onClick={() => navigate('/')}
            >
              <FaArrowLeft /> Return to Website
            </button>
          </div>
          <div className="admin-title-row">
            <h1>Admin Control Panel</h1>
            <div className="admin-user-pill">
              <span className="admin-user-avatar">
                {user.name.charAt(0).toUpperCase()}
              </span>
              <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--navy-deep)' }}>
                {user.name}
              </span>
              <span className={`admin-user-role-badge ${user.account_type}`}>
                {user.account_type}
              </span>
            </div>
          </div>
          <p style={{ color: 'var(--slate)', fontSize: '15px', marginTop: '-15px', maxWidth: '700px' }}>
            Manage DFT Alumni user verifications, post job opportunities for the network, and config account access policies.
          </p>
        </div>

        {/* Database Permission Issue Card */}
        {permissionError && (
          <div style={{
            backgroundColor: 'rgba(239, 68, 68, 0.05)',
            borderLeft: '4px solid var(--admin-color-admin)',
            padding: '24px',
            borderRadius: '8px',
            marginBottom: '30px',
            color: 'var(--navy-deep)',
            animation: 'fadeIn 0.3s ease'
          }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--signal-red)', fontWeight: '700' }}>
              <FaExclamationTriangle /> Database Permission Denied (Missing Firestore Rules)
            </h4>
            <p style={{ fontSize: '14px', color: 'var(--slate)', marginBottom: '16px', lineHeight: '1.6' }}>
              Firestore rejected the load request because your current security rules restrict administrative queries on collections.
              To authorize admins to verify alumni profiles and post jobs, configure the following rules in your **Firebase Console &gt; Firestore Database &gt; Rules** tab:
            </p>

            <pre style={{
              background: '#0B1B3F',
              color: '#F3F4F7',
              padding: '16px',
              borderRadius: '6px',
              fontSize: '12px',
              fontFamily: 'monospace',
              overflowX: 'auto',
              marginBottom: '16px',
              lineHeight: '1.5'
            }}>
              {`rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function isLoggedIn() {
      return request.auth != null;
    }
    function getUserData() {
      return get(/databases/$(database)/documents/users/$(request.auth.uid)).data;
    }
    function isAdminOrDev() {
      return isLoggedIn() && (getUserData().account_type == 'admin' || getUserData().account_type == 'developer');
    }

    match /users/{userId} {
      allow read, write: if isLoggedIn() && request.auth.uid == userId;
      allow read, write: if isAdminOrDev();
    }

    match /jobs/{jobId} {
      allow read: if true;
      allow write: if isAdminOrDev();
    }
  }
}`}
            </pre>

            <button
              className="admin-btn-primary"
              style={{ marginTop: 0, padding: '8px 16px', fontSize: '13px' }}
              onClick={copyRulesToClipboard}
            >
              <FaCopy style={{ marginRight: '6px' }} /> Copy Rules to Clipboard
            </button>
          </div>
        )}

        {/* Stats Summary Cards */}
        <div className="admin-stats-grid">
          <div className="admin-stat-card">
            <div className="admin-stat-icon-wrapper blue">
              <FaUsers />
            </div>
            <div className="admin-stat-info">
              <span className="admin-stat-num">{totalUsers}</span>
              <span className="admin-stat-label">Total Registered</span>
            </div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-icon-wrapper red">
              <FaClock />
            </div>
            <div className="admin-stat-info">
              <span className="admin-stat-num">{pendingCount}</span>
              <span className="admin-stat-label">Pending Verification</span>
            </div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-icon-wrapper green">
              <FaBriefcase />
            </div>
            <div className="admin-stat-info">
              <span className="admin-stat-num">{activeJobsCount}</span>
              <span className="admin-stat-label">Job Opportunities</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="admin-tabs">
          <button
            className={`admin-tab-btn ${activeTab === 'verification' ? 'active' : ''}`}
            onClick={() => setActiveTab('verification')}
          >
            <FaCheckCircle className="admin-tab-btn-icon" /> Account Verification
          </button>

          <button
            className={`admin-tab-btn ${activeTab === 'jobs' ? 'active' : ''}`}
            onClick={() => setActiveTab('jobs')}
          >
            <FaBriefcase className="admin-tab-btn-icon" /> Job Postings
          </button>

          {/* Strictly Gated: Access Management is Developer Only */}
          {user.account_type === 'developer' && (
            <button
              className={`admin-tab-btn ${activeTab === 'access' ? 'active' : ''}`}
              onClick={() => setActiveTab('access')}
            >
              <FaUserShield className="admin-tab-btn-icon" /> Access Management
            </button>
          )}
        </div>

        {/* --- TAB CONTENT: ACCOUNT VERIFICATION --- */}
        {activeTab === 'verification' && (
          <div className="admin-tab-content">

            {/* Search & Filter Controls */}
            <div className="admin-controls-row">
              <div className="admin-search-wrapper">
                <FaSearch className="admin-search-icon" />
                <input
                  type="text"
                  placeholder="Search by name, email, degree or batch..."
                  className="admin-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="admin-filters">
                <button
                  className={`admin-filter-btn ${filterStatus === 'all' ? 'active' : ''}`}
                  onClick={() => setFilterStatus('all')}
                >
                  All ({totalUsers})
                </button>
                <button
                  className={`admin-filter-btn ${filterStatus === 'pending' ? 'active' : ''}`}
                  onClick={() => setFilterStatus('pending')}
                >
                  Pending ({pendingCount})
                </button>
                <button
                  className={`admin-filter-btn ${filterStatus === 'verified' ? 'active' : ''}`}
                  onClick={() => setFilterStatus('verified')}
                >
                  Verified ({verifiedCount})
                </button>
              </div>
            </div>

            {/* Users Table */}
            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Alumni User</th>
                    <th>Contact Number</th>
                    <th>Batch</th>
                    <th>Registration Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((item) => (
                      <tr key={item.uid}>
                        <td>
                          <div className="admin-table-user-info">
                            <div className="admin-table-avatar">
                              {(item.name || 'U').charAt(0).toUpperCase()}
                            </div>
                            <div className="admin-table-user-details">
                              <span className="admin-table-name">{item.name || 'Unnamed User'}</span>
                              <span className="admin-table-email">{item.email}</span>
                            </div>
                          </div>
                        </td>
                        <td>{item.phone || 'N/A'}</td>
                        <td>{item.batch || item.passoutYear || 'N/A'}</td>
                        <td style={{ fontSize: '13px', color: 'var(--navy-mid)' }}>{formatDateFormatted(item.createdAt)}</td>
                        <td>
                          <span className={`admin-badge ${item.verification_status ? 'verified' : 'pending'}`}>
                            {item.verification_status ? (
                              <><FaCheckCircle className="admin-badge-icon" /> Verified</>
                            ) : (
                              <><FaClock className="admin-badge-icon" /> Pending</>
                            )}
                          </span>
                        </td>
                        <td style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'nowrap' }}>
                          <button
                            type="button"
                            className="admin-btn-view"
                            onClick={() => setSelectedUser(item)}
                          >
                            View Profile
                          </button>
                          {item.verification_status ? (
                            <button
                              type="button"
                              className="admin-btn-revoke"
                              onClick={() => handleToggleVerification(item.uid, true)}
                            >
                              Revoke Approval
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="admin-btn-verify"
                              onClick={() => handleToggleVerification(item.uid, false)}
                            >
                              Verify Account
                            </button>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" style={{ textAlign: 'center', padding: '40px 0', color: 'var(--slate)' }}>
                        No user matching filters found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

          </div>
        )}

        {/* --- TAB CONTENT: JOB POSTINGS --- */}
        {activeTab === 'jobs' && (
          <div className="admin-tab-content">
            <div className="admin-jobs-layout">

              {/* Job Posting Form */}
              <div className="admin-job-form-card">
                <h3 className="admin-card-title">
                  <FaPlus /> Post a Job Vacancy
                </h3>

                <form onSubmit={handlePostJob}>
                  <div className="admin-form-grid">
                    <div className="admin-form-group">
                      <label htmlFor="job-title">Job Title *</label>
                      <input
                        type="text"
                        id="job-title"
                        name="title"
                        className="admin-form-input"
                        placeholder="e.g. Lead Textile Merchandiser"
                        value={jobForm.title}
                        onChange={handleJobFormChange}
                        required
                      />
                    </div>

                    <div className="admin-form-grid-2">
                      <div className="admin-form-group">
                        <label htmlFor="job-company">Company *</label>
                        <input
                          type="text"
                          id="job-company"
                          name="company"
                          className="admin-form-input"
                          placeholder="e.g. Reliance Retail"
                          value={jobForm.company}
                          onChange={handleJobFormChange}
                          required
                        />
                      </div>

                      <div className="admin-form-group">
                        <label htmlFor="job-location">Location *</label>
                        <input
                          type="text"
                          id="job-location"
                          name="location"
                          className="admin-form-input"
                          placeholder="e.g. Mumbai, India"
                          value={jobForm.location}
                          onChange={handleJobFormChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="admin-form-grid-2">
                      <div className="admin-form-group">
                        <label htmlFor="job-exp">Experience Required</label>
                        <input
                          type="text"
                          id="job-exp"
                          name="experience"
                          className="admin-form-input"
                          placeholder="e.g. 3-5 years"
                          value={jobForm.experience}
                          onChange={handleJobFormChange}
                        />
                      </div>

                      <div className="admin-form-group">
                        <label htmlFor="job-skills">Key Skills (comma separated)</label>
                        <input
                          type="text"
                          id="job-skills"
                          name="skills"
                          className="admin-form-input"
                          placeholder="e.g. Merchandising, Sourcing, Excel"
                          value={jobForm.skills}
                          onChange={handleJobFormChange}
                        />
                      </div>
                    </div>

                    <div className="admin-form-group">
                      <label htmlFor="job-desc">Job Description</label>
                      <textarea
                        id="job-desc"
                        name="description"
                        className="admin-form-textarea"
                        placeholder="Enter key details about the role, duties, salary details..."
                        value={jobForm.description}
                        onChange={handleJobFormChange}
                      ></textarea>
                    </div>

                    <div className="admin-form-group">
                      <label htmlFor="job-apply">Apply Link or Email Address</label>
                      <input
                        type="text"
                        id="job-apply"
                        name="applyUrl"
                        className="admin-form-input"
                        placeholder="e.g. careers@reliance.com or http://company.com/apply"
                        value={jobForm.applyUrl}
                        onChange={handleJobFormChange}
                      />
                    </div>

                    <button
                      type="submit"
                      className="admin-btn-primary"
                      disabled={submittingJob}
                    >
                      {submittingJob ? "Posting Opportunity..." : "Publish Job Post"}
                    </button>
                  </div>
                </form>
              </div>

              {/* Active Jobs List */}
              <div className="admin-jobs-list-card">
                <h3 className="admin-card-title">
                  <FaBriefcase /> Active Job Board ({activeJobsCount})
                </h3>

                <div className="admin-jobs-list">
                  {jobsList.length > 0 ? (
                    jobsList.map((job) => (
                      <div className="admin-job-item" key={job.id}>
                        <div className="admin-job-details">
                          <h4 className="admin-job-title">{job.title}</h4>
                          <span className="admin-job-company">{job.company}</span>
                          <div className="admin-job-meta">
                            <span><FaMapMarkerAlt /> {job.location}</span>
                            <span>Experience: {job.experience}</span>
                          </div>
                          <p className="admin-job-desc">{job.description || "No description provided."}</p>
                          <div style={{ marginTop: '8px', fontSize: '12px' }}>
                            <strong style={{ color: 'var(--navy-deep)' }}>Key Skills:</strong>
                            <span style={{ marginLeft: '6px', color: 'var(--slate)' }}>{job.skills}</span>
                          </div>
                          {job.applyUrl && job.applyUrl !== '#' && (
                            <a
                              href={job.applyUrl.startsWith('http') || job.applyUrl.startsWith('mailto') ? job.applyUrl : `http://${job.applyUrl}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                display: 'inline-flex',
                                marginTop: '12px',
                                fontSize: '13px',
                                fontWeight: '600',
                                color: 'var(--signal-red)',
                                textDecoration: 'underline'
                              }}
                            >
                              Application Link
                            </a>
                          )}
                        </div>
                        <div className="admin-job-actions">
                          <button
                            className="admin-btn-delete-job"
                            onClick={() => setDeletingJobId(job.id)}
                            title="Delete vacancy post"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="admin-no-jobs">
                      <FaBriefcase className="admin-no-jobs-icon" />
                      <p>No job postings currently listed.</p>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* --- TAB CONTENT: ACCESS MANAGEMENT (Dev-Only) --- */}
        {activeTab === 'access' && user.account_type === 'developer' && (
          <div className="admin-tab-content">
            <div className="admin-controls-row">
              <div className="admin-search-wrapper" style={{ maxWidth: '100%' }}>
                <FaSearch className="admin-search-icon" />
                <input
                  type="text"
                  placeholder="Search users to modify database access roles..."
                  className="admin-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Current Permission Role</th>
                    <th>Change Access Level</th>
                    <th>User ID</th>
                  </tr>
                </thead>
                <tbody>
                  {accessManagementUsers.length > 0 ? (
                    accessManagementUsers.map((item) => (
                      <tr key={item.uid}>
                        <td>
                          <div className="admin-table-user-info">
                            <div className="admin-table-avatar">
                              {(item.name || 'U').charAt(0).toUpperCase()}
                            </div>
                            <div className="admin-table-user-details">
                              <span className="admin-table-name">{item.name || 'Unnamed User'}</span>
                              <span className="admin-table-email">{item.email}</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className={`admin-user-role-badge ${item.account_type || 'alumni'}`}>
                            {item.account_type || 'alumni'}
                          </span>
                        </td>
                        <td>
                          <select
                            value={item.account_type || 'alumni'}
                            onChange={(e) => handleRoleChange(item.uid, e.target.value)}
                            className={`admin-role-select ${item.account_type || 'alumni'}`}
                            disabled={String(item.email || '').toLowerCase() === 'patelmeghmahesh2701@gmail.com'}
                          >
                            <option value="alumni">Alumni (Normal User)</option>
                            <option value="admin">Admin</option>
                            <option value="developer">Developer</option>
                          </select>
                        </td>
                        <td style={{ fontSize: '11px', fontFamily: 'monospace', color: 'var(--slate)' }}>
                          {item.uid}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" style={{ textAlign: 'center', padding: '40px 0', color: 'var(--slate)' }}>
                        No user match found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div style={{
              backgroundColor: 'rgba(99, 102, 241, 0.05)',
              borderLeft: '4px solid var(--admin-color-dev)',
              padding: '16px',
              borderRadius: '6px',
              fontSize: '13px',
              color: 'var(--navy-mid)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: '20px'
            }}>
              <FaUserShield style={{ fontSize: '20px', color: 'var(--admin-color-dev)', flexShrink: 0 }} />
              <div>
                <strong>Developer Notice:</strong> Modifying account permissions changes security rules globally.
                Setting a user's role to <strong>Admin</strong> grants them authorization to verify user accounts and post/delete vacancies.
                Setting a user to <strong>Developer</strong> additionally grants access to this Access Management panel.
              </div>
            </div>
          </div>
        )}

      </div>

      {/* User Profile Details Modal */}
      {selectedUser && (
        <div className="admin-modal-overlay" onClick={() => setSelectedUser(null)}>
          <div className="admin-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h2>Alumni Profile Details</h2>
              <button className="admin-modal-close-btn" onClick={() => setSelectedUser(null)}>&times;</button>
            </div>

            <div className="admin-modal-body">
              {/* Profile Avatar Banner */}
              <div className="admin-modal-user-card">
                <div className="admin-modal-avatar">
                  {(selectedUser.name || 'U').charAt(0).toUpperCase()}
                </div>
                <div className="admin-modal-user-meta">
                  <h3 className="admin-modal-user-name">{selectedUser.name || 'Unnamed User'}</h3>
                  <span className="admin-modal-user-email">{selectedUser.email}</span>
                  <div style={{ marginTop: '6px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span className={`admin-badge ${selectedUser.verification_status ? 'verified' : 'pending'}`}>
                      {selectedUser.verification_status ? "Verified Account" : "Pending Verification"}
                    </span>
                    <span className={`admin-user-role-badge ${selectedUser.account_type || 'alumni'}`}>
                      {selectedUser.account_type || 'alumni'}
                    </span>
                  </div>
                  <div style={{ marginTop: '6px', fontSize: '0.8rem', color: 'var(--slate)', fontWeight: '500' }}>
                    Registered: {formatDateFormatted(selectedUser.createdAt)}
                  </div>
                </div>
              </div>

              {/* General Info */}
              <div className="admin-modal-section">
                <h4 className="admin-modal-section-title">Personal & Contact Info</h4>
                <div className="admin-modal-grid-2">
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Full Name</span>
                    <span className="admin-modal-info-value">{selectedUser.name || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">First / Middle / Last Name</span>
                    <span className="admin-modal-info-value">
                      {[selectedUser.firstName, selectedUser.middleName, selectedUser.lastName].filter(Boolean).join(' ') || 'N/A'}
                    </span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Email Address</span>
                    <span className="admin-modal-info-value">{selectedUser.email || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Gender</span>
                    <span className="admin-modal-info-value">{selectedUser.gender || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Phone Number</span>
                    <span className="admin-modal-info-value">{selectedUser.phone || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Secondary Phone</span>
                    <span className="admin-modal-info-value">{selectedUser.secondaryPhone || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">WhatsApp Number</span>
                    <span className="admin-modal-info-value">{selectedUser.whatsapp || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Date of Birth</span>
                    <span className="admin-modal-info-value">{formatDateFormatted(selectedUser.dob)}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Date of Marriage / Anniversary</span>
                    <span className="admin-modal-info-value">{formatDateFormatted(selectedUser.dom)}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Blood Group</span>
                    <span className="admin-modal-info-value">{selectedUser.bloodGroup || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Location</span>
                    <span className="admin-modal-info-value">
                      {[selectedUser.city, selectedUser.state, selectedUser.country].filter(Boolean).join(', ') || 'N/A'}
                    </span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Directory Search Consent</span>
                    <span className="admin-modal-info-value">
                      {selectedUser.consentAlumniSearch ? 'Yes (Opted In)' : 'No (Opted Out)'}
                    </span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Registration Date</span>
                    <span className="admin-modal-info-value">
                      {formatDateFormatted(selectedUser.createdAt)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Academic Details */}
              <div className="admin-modal-section">
                <h4 className="admin-modal-section-title">Academic Details</h4>
                <div className="admin-modal-grid-2">
                  <div className="admin-modal-info-item" style={{ gridColumn: 'span 2' }}>
                    <span className="admin-modal-info-label">Degrees Completed</span>
                    <div className="admin-modal-info-value" style={{ marginTop: '6px' }}>
                      {Array.isArray(selectedUser.degrees) && selectedUser.degrees.length > 0 ? (
                        <ul style={{ margin: 0, paddingLeft: '20px', listStyleType: 'disc' }}>
                          {selectedUser.degrees
                            .map(d => d && typeof d === 'object' ? `${d.degree || ''} ${d.domain ? `(${d.domain})` : ''}`.trim() : String(d))
                            .filter(Boolean)
                            .map((degText, idx) => (
                              <li key={idx} style={{ marginBottom: '4px', fontWeight: '600' }}>{degText}</li>
                            ))}
                        </ul>
                      ) : (
                        <span>{selectedUser.degree || 'N/A'}</span>
                      )}
                    </div>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Admission Year</span>
                    <span className="admin-modal-info-value">{selectedUser.admissionYear || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Passout / Graduation Year</span>
                    <span className="admin-modal-info-value">{selectedUser.passoutYear || selectedUser.batch || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Course Completion Status</span>
                    <span className="admin-modal-info-value">
                      {selectedUser.diplomaNotCompleted ? 'Diploma / Course Not Completed' : 'Completed / Graduated'}
                    </span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Student Type / Classification</span>
                    <span className="admin-modal-info-value">{selectedUser.userType || 'N/A'}</span>
                  </div>
                </div>
              </div>

              {/* Professional Details */}
              <div className="admin-modal-section">
                <h4 className="admin-modal-section-title">Professional Details</h4>
                <div className="admin-modal-grid-2">
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Job Title / Designation</span>
                    <span className="admin-modal-info-value">{selectedUser.jobTitle || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Company / Employer</span>
                    <span className="admin-modal-info-value">{selectedUser.company || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Industry / Profession</span>
                    <span className="admin-modal-info-value">{selectedUser.profession || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Department</span>
                    <span className="admin-modal-info-value">{selectedUser.department || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Division</span>
                    <span className="admin-modal-info-value">{selectedUser.division || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Working Since</span>
                    <span className="admin-modal-info-value">{formatDateFormatted(selectedUser.workingSince)}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Total Work Experience</span>
                    <span className="admin-modal-info-value">
                      {selectedUser.workExperience ? `${selectedUser.workExperience} ${parseInt(selectedUser.workExperience, 10) === 1 ? 'Year' : 'Years'}` : 'N/A'}
                    </span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Last Promotion Designation</span>
                    <span className="admin-modal-info-value">{selectedUser.lastPromotionDesignation || 'N/A'}</span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Date of Last Promotion</span>
                    <span className="admin-modal-info-value">
                      {[selectedUser.lastPromotionMonth, selectedUser.lastPromotionYear].filter(Boolean).join(' ') || 'N/A'}
                    </span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">LinkedIn Profile</span>
                    <span className="admin-modal-info-value">
                      {selectedUser.linkedin ? (
                        <a href={selectedUser.linkedin.startsWith('http') ? selectedUser.linkedin : `https://${selectedUser.linkedin}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--navy-mid)', textDecoration: 'underline' }}>
                          {selectedUser.linkedin}
                        </a>
                      ) : 'N/A'}
                    </span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Company Location</span>
                    <span className="admin-modal-info-value">
                      {[selectedUser.companyCity, selectedUser.companyState, selectedUser.companyCountry].filter(Boolean).join(', ') || 'N/A'}
                    </span>
                  </div>
                  <div className="admin-modal-info-item">
                    <span className="admin-modal-info-label">Company Website</span>
                    <span className="admin-modal-info-value">
                      {selectedUser.companyWebsite ? (
                        <a href={selectedUser.companyWebsite.startsWith('http') ? selectedUser.companyWebsite : `http://${selectedUser.companyWebsite}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--navy-mid)', textDecoration: 'underline' }}>
                          {selectedUser.companyWebsite}
                        </a>
                      ) : 'N/A'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Certifications, Awards & Skills */}
              <div className="admin-modal-section">
                <h4 className="admin-modal-section-title">Certifications & Skills</h4>
                <div className="admin-modal-grid-2">
                  <div className="admin-modal-info-item" style={{ gridColumn: 'span 2' }}>
                    <span className="admin-modal-info-label" style={{ marginBottom: '6px' }}>Areas of Certification</span>
                    <div className="admin-modal-info-value">
                      {Array.isArray(selectedUser.certifications) && selectedUser.certifications.length > 0 ? (
                        <ul style={{ margin: 0, paddingLeft: '20px', listStyleType: 'disc' }}>
                          {selectedUser.certifications.map((c, i) => {
                            const certText = c && typeof c === 'object'
                              ? `${c.area || ''} ${c.detail ? `(${c.detail})` : ''}`.trim()
                              : String(c);
                            return <li key={i} style={{ marginBottom: '4px', fontWeight: '600' }}>{certText}</li>;
                          })}
                        </ul>
                      ) : (
                        <span style={{ fontSize: '13px', color: 'var(--slate)' }}>No certifications listed.</span>
                      )}
                    </div>
                  </div>

                  <div className="admin-modal-info-item" style={{ gridColumn: 'span 2', marginTop: '14px' }}>
                    <span className="admin-modal-info-label" style={{ marginBottom: '6px' }}>Products & Services / Skills</span>
                    <div className="admin-modal-info-value">
                      {Array.isArray(selectedUser.productServices) && selectedUser.productServices.length > 0 ? (
                        <ul style={{ margin: 0, paddingLeft: '20px', listStyleType: 'disc' }}>
                          {selectedUser.productServices.map((p, i) => (
                            <li key={i} style={{ marginBottom: '4px', fontWeight: '600' }}>{p}</li>
                          ))}
                        </ul>
                      ) : (
                        <span style={{ fontSize: '13px', color: 'var(--slate)' }}>No skills listed.</span>
                      )}
                    </div>
                  </div>

                  {selectedUser.otherProductServices && (
                    <div className="admin-modal-info-item" style={{ gridColumn: 'span 2', marginTop: '14px' }}>
                      <span className="admin-modal-info-label" style={{ marginBottom: '6px' }}>Details of Other Products & Services</span>
                      <div className="admin-modal-info-value" style={{ fontSize: '13px', color: 'var(--navy-deep)', background: 'var(--fog-grey)', padding: '10px 14px', borderRadius: '6px' }}>
                        {selectedUser.otherProductServices}
                      </div>
                    </div>
                  )}

                  <div className="admin-modal-info-item" style={{ gridColumn: 'span 2', marginTop: '14px' }}>
                    <span className="admin-modal-info-label" style={{ marginBottom: '6px' }}>Awards & Achievements</span>
                    <div className="admin-modal-info-value">
                      {Array.isArray(selectedUser.awards) && selectedUser.awards.length > 0 ? (
                        <ul style={{ margin: 0, paddingLeft: '20px', listStyleType: 'disc' }}>
                          {selectedUser.awards.map((a, i) => (
                            <li key={i} style={{ marginBottom: '4px', fontWeight: '600' }}>{a}</li>
                          ))}
                        </ul>
                      ) : (
                        <span style={{ fontSize: '13px', color: 'var(--slate)' }}>No achievements listed.</span>
                      )}
                    </div>
                  </div>

                  <div className="admin-modal-info-item" style={{ gridColumn: 'span 2', marginTop: '14px' }}>
                    <span className="admin-modal-info-label" style={{ marginBottom: '6px' }}>Interest / Hobbies</span>
                    <div className="admin-modal-info-value">
                      {Array.isArray(selectedUser.hobbies) && selectedUser.hobbies.length > 0 ? (
                        <div className="admin-modal-badge-list">
                          {selectedUser.hobbies.map((hobby, i) => (
                            <span key={i} className="admin-modal-badge-tag">
                              {hobby === 'Others' && selectedUser.otherHobbies ? `Others (${selectedUser.otherHobbies})` : hobby}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span style={{ fontSize: '13px', color: 'var(--slate)' }}>No hobbies listed.</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="admin-modal-footer">
              <button
                type="button"
                className="admin-btn-primary"
                style={{ background: 'var(--slate)', border: 'none', marginTop: 0 }}
                onClick={() => setSelectedUser(null)}
              >
                Close Profile
              </button>
              {selectedUser.verification_status ? (
                <button
                  type="button"
                  className="admin-btn-revoke"
                  style={{ padding: '10px 20px' }}
                  onClick={() => handleToggleVerification(selectedUser.uid, true)}
                >
                  Revoke Approval
                </button>
              ) : (
                <button
                  type="button"
                  className="admin-btn-verify"
                  style={{ padding: '10px 20px' }}
                  onClick={() => handleToggleVerification(selectedUser.uid, false)}
                >
                  Verify Account
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Deletion Confirmation Modal */}
      {deletingJobId && (
        <div className="admin-delete-modal-overlay" onClick={() => setDeletingJobId(null)}>
          <div className="admin-delete-modal-card" onClick={(e) => e.stopPropagation()}>
            <h3 className="admin-delete-modal-title">
              <FaTrash style={{ color: 'var(--signal-red)' }} /> Confirm Deletion
            </h3>
            <p className="admin-delete-modal-desc">
              Are you sure you want to delete this job vacancy from the Job Board? This action is permanent and cannot be undone.
            </p>
            <div className="admin-delete-modal-footer">
              <button
                type="button"
                className="admin-btn-primary"
                style={{ background: 'var(--slate)', border: 'none', margin: 0, padding: '10px 18px' }}
                onClick={() => setDeletingJobId(null)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="admin-btn-delete-confirm"
                style={{ margin: 0, padding: '10px 18px' }}
                onClick={handleConfirmDeleteJob}
              >
                Delete Opportunity
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
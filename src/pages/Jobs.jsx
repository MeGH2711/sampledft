import { useState, useEffect, useMemo, useCallback } from 'react'
import { useNavigate, Link as RouterLink } from 'react-router-dom'
import {
  FaBriefcase,
  FaSearch,
  FaTimes,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaPlus,
  FaBuilding,
  FaFilter,
  FaLock,
  FaEnvelope,
  FaExternalLinkAlt,
  FaUserTie,
  FaDollarSign,
  FaCalendarAlt,
  FaChevronRight,
  FaTrashAlt
} from 'react-icons/fa'
import { db } from '../firebase'
import { collection, getDocs, addDoc, deleteDoc, doc, query, orderBy, serverTimestamp } from 'firebase/firestore'
import { personal, contact, academic, professional, meta, getUserDisplayName, formatDateFormatted } from '../utils/userHelpers'
import PortalNavbar from '../components/PortalNavbar'
import './Jobs.css'

/* ─── Helpers ─── */
const JOB_TYPES = ['Full-time', 'Part-time', 'Contract', 'Internship', 'Remote']
const EXP_LEVELS = ['0-2 Years', '2-5 Years', '5-8 Years', '8+ Years']

function getTimeAgo(dateStr) {
  if (!dateStr) return 'Recently'
  try {
    const d = new Date(dateStr)
    if (isNaN(d.getTime())) return 'Recently'
    const now = new Date()
    const diffMs = now - d
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return 'Yesterday'
    if (diffDays < 30) return `${diffDays} days ago`
    return formatDateFormatted(dateStr)
  } catch (e) {
    return 'Recently'
  }
}

/* ══════════════════════════════════════════
   POST A JOB MODAL COMPONENT
══════════════════════════════════════════ */
function PostJobModal({ open, onClose, currentUser, onJobPosted }) {
  const [form, setForm] = useState({
    title: '',
    company: '',
    location: '',
    jobType: 'Full-time',
    experienceLevel: '2-5 Years',
    salaryRange: '',
    applyUrlOrEmail: '',
    description: '',
    requirements: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  // Body scroll lock & Escape listener
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && open) onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  // Pre-fill company if available from user profile
  useEffect(() => {
    if (currentUser) {
      const userCompany = professional(currentUser, 'company')
      if (userCompany) {
        setForm(prev => ({ ...prev, company: prev.company || userCompany }))
      }
    }
  }, [currentUser])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.title.trim() || !form.company.trim() || !form.applyUrlOrEmail.trim() || !form.description.trim()) {
      setError('Please fill in all required fields.')
      return
    }

    setSubmitting(true)
    setError('')

    try {
      const posterName = getUserDisplayName(currentUser)
      const posterAvatar = meta(currentUser, 'profilePhotoUrl', '')
      const posterJobTitle = professional(currentUser, 'jobTitle', '')
      const posterCompany = professional(currentUser, 'company', '')
      const posterEmail = contact(currentUser, 'email', '')
      const posterPhone = contact(currentUser, 'phone', '')

      const jobData = {
        title: form.title.trim(),
        company: form.company.trim(),
        location: form.location.trim() || 'Remote / On-site',
        jobType: form.jobType,
        experienceLevel: form.experienceLevel,
        salaryRange: form.salaryRange.trim() || 'As per industry standards',
        applyUrlOrEmail: form.applyUrlOrEmail.trim(),
        description: form.description.trim(),
        requirements: form.requirements.trim(),
        createdAt: new Date().toISOString(),
        postedBy: {
          uid: currentUser.uid || '',
          name: posterName,
          avatar: posterAvatar,
          jobTitle: posterJobTitle,
          company: posterCompany,
          email: posterEmail,
          phone: posterPhone
        }
      }

      const docRef = await addDoc(collection(db, 'jobs'), jobData)
      const savedJob = { id: docRef.id, ...jobData }
      setSubmitting(false)
      onJobPosted(savedJob)
      onClose()
      setForm({
        title: '',
        company: '',
        location: '',
        jobType: 'Full-time',
        experienceLevel: '2-5 Years',
        salaryRange: '',
        applyUrlOrEmail: '',
        description: '',
        requirements: ''
      })
    } catch (err) {
      console.error('Error posting job:', err)
      setError('Failed to post job. Please try again.')
      setSubmitting(false)
    }
  }

  if (!open) return null

  return (
    <div className="modal-overlay modal-overlay--open" onClick={onClose}>
      <div className="detail-modal detail-modal--xxl post-job-modal" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="detail-modal__header">
          <div className="modal-profile">
            <div className="modal-card__icon-box" style={{ background: 'rgba(232,48,42,0.15)', color: '#ff8f8c' }}>
              <FaPlus />
            </div>
            <div>
              <h2 className="modal-profile__name" style={{ fontSize: '1.2rem' }}>Post a Career Opportunity</h2>
              <p className="modal-card__subtitle">Share job openings with your fellow DFT alumni</p>
            </div>
          </div>
          <button className="detail-modal__close" onClick={onClose} aria-label="Close modal">
            <FaTimes />
          </button>
        </div>

        {/* Body Form */}
        <div className="detail-modal__body" style={{ padding: '24px 32px 32px' }}>
          {error && (
            <div className="job-form-error">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="job-post-form">
            <div className="job-form-grid">
              {/* Job Title */}
              <div className="filter-group">
                <label className="filter-group__label" htmlFor="job-title">
                  Job Title <span className="profile-field__required">*</span>
                </label>
                <input
                  id="job-title"
                  name="title"
                  className="filter-group__input"
                  type="text"
                  placeholder="e.g. Senior Textile Designer / Merchandiser"
                  value={form.title}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Company */}
              <div className="filter-group">
                <label className="filter-group__label" htmlFor="job-company">
                  Company / Organization <span className="profile-field__required">*</span>
                </label>
                <input
                  id="job-company"
                  name="company"
                  className="filter-group__input"
                  type="text"
                  placeholder="e.g. Arvind Limited / Shahi Exports"
                  value={form.company}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Location */}
              <div className="filter-group">
                <label className="filter-group__label" htmlFor="job-location">Location</label>
                <input
                  id="job-location"
                  name="location"
                  className="filter-group__input"
                  type="text"
                  placeholder="e.g. Ahmedabad, India or Remote"
                  value={form.location}
                  onChange={handleChange}
                />
              </div>

              {/* Job Type */}
              <div className="filter-group">
                <label className="filter-group__label" htmlFor="job-type">Job Type</label>
                <select
                  id="job-type"
                  name="jobType"
                  className="filter-group__select"
                  value={form.jobType}
                  onChange={handleChange}
                >
                  {JOB_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              {/* Experience Level */}
              <div className="filter-group">
                <label className="filter-group__label" htmlFor="job-exp">Experience Level</label>
                <select
                  id="job-exp"
                  name="experienceLevel"
                  className="filter-group__select"
                  value={form.experienceLevel}
                  onChange={handleChange}
                >
                  {EXP_LEVELS.map(e => <option key={e} value={e}>{e}</option>)}
                </select>
              </div>

              {/* Salary Range */}
              <div className="filter-group">
                <label className="filter-group__label" htmlFor="job-salary">Salary / Compensation</label>
                <input
                  id="job-salary"
                  name="salaryRange"
                  className="filter-group__input"
                  type="text"
                  placeholder="e.g. ₹8 - 12 LPA or Negotiable"
                  value={form.salaryRange}
                  onChange={handleChange}
                />
              </div>

              {/* How to Apply (Email or URL) */}
              <div className="filter-group filter-group--full">
                <label className="filter-group__label" htmlFor="job-apply">
                  How to Apply (Email or Web Link) <span className="profile-field__required">*</span>
                </label>
                <input
                  id="job-apply"
                  name="applyUrlOrEmail"
                  className="filter-group__input"
                  type="text"
                  placeholder="e.g. careers@company.com OR https://company.com/jobs/123"
                  value={form.applyUrlOrEmail}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Description */}
              <div className="filter-group filter-group--full">
                <label className="filter-group__label" htmlFor="job-desc">
                  Job Description <span className="profile-field__required">*</span>
                </label>
                <textarea
                  id="job-desc"
                  name="description"
                  className="filter-group__input job-textarea"
                  rows={4}
                  placeholder="Describe the role, key responsibilities, and team culture..."
                  value={form.description}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Requirements */}
              <div className="filter-group filter-group--full">
                <label className="filter-group__label" htmlFor="job-req">Skills & Key Requirements</label>
                <textarea
                  id="job-req"
                  name="requirements"
                  className="filter-group__input job-textarea"
                  rows={3}
                  placeholder="e.g. Garment manufacturing, Fabric quality assurance, CAD software proficiency..."
                  value={form.requirements}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Poster Info Confirmation */}
            <div className="job-poster-preview">
              <span className="poster-preview-label">This opportunity will be published as posted by:</span>
              <div className="poster-preview-user">
                <div className="poster-preview-avatar">
                  {meta(currentUser, 'profilePhotoUrl', '') ? (
                    <img src={meta(currentUser, 'profilePhotoUrl', '')} alt={getUserDisplayName(currentUser)} />
                  ) : (
                    getUserDisplayName(currentUser).charAt(0).toUpperCase()
                  )}
                </div>
                <div>
                  <strong>{getUserDisplayName(currentUser)}</strong>
                  <span className="poster-preview-sub">
                    {[professional(currentUser, 'jobTitle'), professional(currentUser, 'company')].filter(Boolean).join(' at ') || 'Alumni Member'}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="job-form-actions">
              <button type="button" className="job-btn job-btn--cancel" onClick={onClose} disabled={submitting}>
                Cancel
              </button>
              <button type="submit" className="job-btn job-btn--submit" disabled={submitting}>
                {submitting ? 'Publishing Opportunity...' : 'Publish Job Opening'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════
   DELETE CONFIRMATION MODAL COMPONENT
══════════════════════════════════════════ */
function DeleteConfirmModal({ open, job, onClose, onConfirm, deleting }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && open) onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  if (!open || !job) return null

  return (
    <div className="modal-overlay modal-overlay--open" onClick={onClose}>
      <div className="detail-modal delete-confirm-modal" onClick={e => e.stopPropagation()}>
        <div className="delete-modal-content">
          <div className="delete-modal-icon-box">
            <FaTrashAlt />
          </div>

          <h3 className="delete-modal-title">Delete Job Opening?</h3>
          <p className="delete-modal-text">
            Are you sure you want to permanently delete <strong>{job.title}</strong> at <strong>{job.company}</strong>?
          </p>
          <p className="delete-modal-subtext">
            This action cannot be undone and will remove the post for all alumni members.
          </p>

          <div className="delete-modal-actions">
            <button
              type="button"
              className="job-btn job-btn--cancel"
              onClick={onClose}
              disabled={deleting}
            >
              Cancel
            </button>
            <button
              type="button"
              className="job-btn job-btn--danger"
              onClick={() => onConfirm(job.id)}
              disabled={deleting}
            >
              {deleting ? 'Deleting...' : 'Yes, Delete Job'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════
   JOB DETAIL XXL MODAL COMPONENT
══════════════════════════════════════════ */
function JobDetailModal({ job, open, onClose, currentUser, onDelete }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && open) onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  if (!job) return null

  const isEmailApply = job.applyUrlOrEmail.includes('@')
  const applyHref = isEmailApply
    ? `mailto:${job.applyUrlOrEmail}?subject=Application for ${encodeURIComponent(job.title)} via DFT Alumni Network`
    : (job.applyUrlOrEmail.startsWith('http') ? job.applyUrlOrEmail : `https://${job.applyUrlOrEmail}`)

  const poster = job.postedBy || {}
  const userAccountType = currentUser ? meta(currentUser, 'account_type', '') : ''
  const isOwner = currentUser && (
    (job.postedBy?.uid && job.postedBy.uid === currentUser.uid) ||
    (job.postedBy?.email && currentUser.email && job.postedBy.email.toLowerCase() === currentUser.email.toLowerCase()) ||
    userAccountType === 'admin'
  )

  return (
    <div className="modal-overlay modal-overlay--open" onClick={onClose}>
      <div className="detail-modal detail-modal--xxl job-detail-modal" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="detail-modal__header">
          <div className="modal-profile">
            <div className="job-detail-company-icon">
              <FaBuilding />
            </div>
            <div className="modal-profile__info">
              <div className="modal-profile__title-row">
                <h2 className="modal-profile__name">{job.title}</h2>
                <span className="job-type-pill">{job.jobType}</span>
              </div>
              <p className="modal-profile__headline">
                <strong>{job.company}</strong> • <FaMapMarkerAlt style={{ fontSize: '0.7rem', margin: '0 2px' }} /> {job.location}
              </p>
            </div>
          </div>

          <div className="modal-header-actions">
            {isOwner && (
              <button
                type="button"
                className="modal-action-btn modal-action-btn--delete"
                onClick={() => onDelete(job)}
                title="Delete this job posting"
              >
                <FaTrashAlt />
                <span>Delete Job</span>
              </button>
            )}
            <a href={applyHref} target="_blank" rel="noreferrer" className="modal-action-btn modal-action-btn--email" style={{ padding: '8px 18px' }}>
              {isEmailApply ? <FaEnvelope /> : <FaExternalLinkAlt />}
              <span>Apply Now</span>
            </a>
            <button className="detail-modal__close" onClick={onClose} aria-label="Close modal">
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="detail-modal__body">
          {/* Highlights Row */}
          <div className="modal-quick-stats">
            <div className="stat-card">
              <div className="stat-card__icon"><FaBuilding /></div>
              <div className="stat-card__content">
                <span className="stat-card__label">Company</span>
                <span className="stat-card__value">{job.company}</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-card__icon"><FaMapMarkerAlt /></div>
              <div className="stat-card__content">
                <span className="stat-card__label">Location</span>
                <span className="stat-card__value">{job.location}</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-card__icon"><FaUserTie /></div>
              <div className="stat-card__content">
                <span className="stat-card__label">Experience</span>
                <span className="stat-card__value">{job.experienceLevel}</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-card__icon"><FaDollarSign /></div>
              <div className="stat-card__content">
                <span className="stat-card__label">Compensation</span>
                <span className="stat-card__value">{job.salaryRange || 'As per industry'}</span>
              </div>
            </div>
          </div>

          <div className="modal-cards-grid">
            {/* Left Column: Description & Requirements */}
            <div className="modal-column">
              <div className="modal-card">
                <div className="modal-card__header">
                  <div className="modal-card__icon-box"><FaBriefcase /></div>
                  <div>
                    <h3 className="modal-card__title">Job Description</h3>
                    <p className="modal-card__subtitle">Roles & Key Responsibilities</p>
                  </div>
                </div>
                <div className="modal-card__body">
                  <p className="job-full-text">{job.description}</p>
                </div>
              </div>

              {job.requirements && (
                <div className="modal-card">
                  <div className="modal-card__header">
                    <div className="modal-card__icon-box"><FaCheckCircle /></div>
                    <div>
                      <h3 className="modal-card__title">Skills & Requirements</h3>
                      <p className="modal-card__subtitle">Qualifications requested by poster</p>
                    </div>
                  </div>
                  <div className="modal-card__body">
                    <p className="job-full-text">{job.requirements}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Poster Profile Card & How to Apply */}
            <div className="modal-column">
              <div className="modal-card">
                <div className="modal-card__header">
                  <div className="modal-card__icon-box"><FaUserTie /></div>
                  <div>
                    <h3 className="modal-card__title">Posted By Alumnus</h3>
                    <p className="modal-card__subtitle">Job Poster Credentials</p>
                  </div>
                </div>
                <div className="modal-card__body">
                  <div className="poster-full-card">
                    <div className="poster-avatar">
                      {poster.avatar ? (
                        <img src={poster.avatar} alt={poster.name} />
                      ) : (
                        (poster.name || 'Alumni').charAt(0).toUpperCase()
                      )}
                    </div>
                    <div className="poster-info">
                      <div className="poster-name">{poster.name || 'Alumni Member'}</div>
                      <div className="poster-headline">
                        {[poster.jobTitle, poster.company].filter(Boolean).join(' at ') || 'DFT Alumni Member'}
                      </div>
                      <div className="poster-time">
                        <FaClock style={{ fontSize: '0.6rem' }} /> Posted {getTimeAgo(job.createdAt)}
                      </div>
                    </div>
                  </div>

                  {poster.email && (
                    <div className="contact-item" style={{ marginTop: 16 }}>
                      <div className="contact-item__icon"><FaEnvelope /></div>
                      <div className="contact-item__detail">
                        <span className="contact-item__label">Poster Email</span>
                        <a href={`mailto:${poster.email}`} className="contact-item__link">{poster.email}</a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Apply Action Card */}
              <div className="modal-card" style={{ background: 'rgba(232,48,42,0.06)', borderColor: 'rgba(232,48,42,0.2)' }}>
                <div className="modal-card__header">
                  <div className="modal-card__icon-box" style={{ background: 'rgba(232,48,42,0.15)', color: '#ff8f8c' }}>
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="modal-card__title">Ready to Apply?</h3>
                    <p className="modal-card__subtitle">Submit your resume directly to the employer</p>
                  </div>
                </div>
                <div className="modal-card__body">
                  <p className="apply-instruction-text">
                    {isEmailApply
                      ? `Send your CV directly to ${job.applyUrlOrEmail}`
                      : `Apply via official application URL at ${job.applyUrlOrEmail}`}
                  </p>
                  <a href={applyHref} target="_blank" rel="noreferrer" className="job-apply-big-btn">
                    {isEmailApply ? 'Send Email Application' : 'Open Application Link'} <FaChevronRight style={{ fontSize: '0.7rem' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════
   MAIN JOBS PAGE COMPONENT
══════════════════════════════════════════ */
export default function Jobs({ user, onLogout }) {
  const navigate = useNavigate()

  /* ── Auth guard ── */
  useEffect(() => {
    if (!user) navigate('/login', { replace: true })
  }, [user, navigate])

  const isVerified = user ? meta(user, 'verification_status', false) : false

  /* ── State ── */
  const [jobsList, setJobsList] = useState([])
  const [loading, setLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null)

  const [search, setSearch] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterExp, setFilterExp] = useState('')

  const [postModalOpen, setPostModalOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState(null)
  const [detailModalOpen, setDetailModalOpen] = useState(false)

  /* ── Load jobs from Firestore ── */
  const loadJobs = useCallback(async () => {
    if (!user || !isVerified) { setLoading(false); return }
    setLoading(true)
    setFetchError(null)
    try {
      const snap = await getDocs(collection(db, 'jobs'))
      const list = []
      snap.forEach(docSnap => list.push({ id: docSnap.id, ...docSnap.data() }))
      // Sort newest first
      list.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
      setJobsList(list)
    } catch (err) {
      console.error('Jobs: Firestore error', err)
      setFetchError('Could not load career opportunities. Please try again later.')
    } finally {
      setLoading(false)
    }
  }, [user?.uid, isVerified])

  useEffect(() => {
    loadJobs()
  }, [loadJobs])

  const handleJobPosted = (newJob) => {
    setJobsList(prev => [newJob, ...prev])
  }

  /* ── Filtered list ── */
  const filteredJobs = useMemo(() => {
    let list = [...jobsList]

    if (search.trim()) {
      const q = search.toLowerCase().trim()
      list = list.filter(j =>
        (j.title || '').toLowerCase().includes(q) ||
        (j.company || '').toLowerCase().includes(q) ||
        (j.location || '').toLowerCase().includes(q) ||
        (j.description || '').toLowerCase().includes(q) ||
        (j.requirements || '').toLowerCase().includes(q)
      )
    }

    if (filterType) {
      list = list.filter(j => j.jobType === filterType)
    }

    if (filterExp) {
      list = list.filter(j => j.experienceLevel === filterExp)
    }

    return list
  }, [jobsList, search, filterType, filterExp])

  const openDetailModal = (j) => {
    setSelectedJob(j)
    setDetailModalOpen(true)
  }

  const closeDetailModal = () => {
    setDetailModalOpen(false)
    setTimeout(() => setSelectedJob(null), 350)
  }

  const [jobToDelete, setJobToDelete] = useState(null)
  const [deleting, setDeleting] = useState(false)

  const promptDeleteJob = useCallback((j) => {
    setJobToDelete(j)
  }, [])

  const handleConfirmDelete = useCallback(async (jobId) => {
    if (!jobId || typeof jobId !== 'string') {
      console.error('Invalid jobId for deletion:', jobId)
      setJobToDelete(null)
      alert('Unable to delete job: Missing valid document ID.')
      return
    }

    setDeleting(true)
    try {
      await deleteDoc(doc(db, 'jobs', jobId))
      setJobsList(prev => prev.filter(j => j.id !== jobId))
      setJobToDelete(null)
      if (selectedJob && selectedJob.id === jobId) {
        setDetailModalOpen(false)
        setTimeout(() => setSelectedJob(null), 350)
      }
    } catch (err) {
      console.error('Error deleting job:', err)
      alert('Failed to delete job. Please try again.')
    } finally {
      setDeleting(false)
    }
  }, [selectedJob])

  /* ── No user ── */
  if (!user) return null

  /* ── Unverified screen ── */
  if (!isVerified) {
    return (
      <div className="jobs-page">
        <PortalNavbar user={user} />
        <div className="network-locked">
          <div className="network-locked__card">
            <div className="network-locked__icon-box">
              <FaLock />
            </div>
            <h2 className="network-locked__title">Job Board Access Locked</h2>
            <p className="network-locked__text">
              Career opportunities and posting access are restricted exclusively to <strong>Verified Alumni Members</strong>.
            </p>
            <div className="network-locked__badge">
              <FaClock /> Verification Pending
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="jobs-page">
      <PortalNavbar user={user} />

      {/* Hero Header */}
      <section className="jobs-hero">
        <div className="jobs-hero__container">
          <div className="jobs-hero__content">
            <div className="jobs-hero__badge">
              <FaBriefcase style={{ fontSize: '0.62rem' }} /> Alumni Career Network
            </div>
            <h1 className="jobs-hero__title">
              Career Opportunities & <span>Job Board</span>
            </h1>
            <p className="jobs-hero__sub">
              Discover exclusive job openings shared by alumni or post career opportunities for fellow graduates.
            </p>
          </div>

          <button className="jobs-post-trigger-btn" onClick={() => setPostModalOpen(true)}>
            <FaPlus /> <span>Post a Job Opening</span>
          </button>
        </div>
      </section>

      {/* Main Container */}
      <main className="jobs-container">
        {/* Top Controls & Search Bar */}
        <div className="jobs-controls-card">
          <div className="jobs-search-wrap">
            <FaSearch className="jobs-search-icon" />
            <input
              type="text"
              className="jobs-search-input"
              placeholder="Search by job title, company, skills, location..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {search && (
              <button className="jobs-search-clear" onClick={() => setSearch('')}>
                <FaTimes />
              </button>
            )}
          </div>

          <div className="jobs-filters-row">
            {/* Job Type Dropdown */}
            <div className="jobs-filter-item">
              <label htmlFor="filter-job-type">Job Type</label>
              <select
                id="filter-job-type"
                className="filter-group__select"
                value={filterType}
                onChange={e => setFilterType(e.target.value)}
              >
                <option value="">All Job Types</option>
                {JOB_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            {/* Experience Level */}
            <div className="jobs-filter-item">
              <label htmlFor="filter-job-exp">Experience</label>
              <select
                id="filter-job-exp"
                className="filter-group__select"
                value={filterExp}
                onChange={e => setFilterExp(e.target.value)}
              >
                <option value="">All Experience Levels</option>
                {EXP_LEVELS.map(e => <option key={e} value={e}>{e}</option>)}
              </select>
            </div>

            {(search || filterType || filterExp) && (
              <button
                className="jobs-clear-filters-btn"
                onClick={() => { setSearch(''); setFilterType(''); setFilterExp('') }}
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Status Count Bar */}
        <div className="jobs-count-bar">
          <span>Showing <strong>{filteredJobs.length}</strong> of {jobsList.length} career opportunities</span>
        </div>

        {/* Error message */}
        {fetchError && (
          <div className="job-form-error" style={{ marginBottom: 20 }}>
            {fetchError}
          </div>
        )}

        {/* Jobs List */}
        {loading ? (
          <div className="jobs-grid">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="job-card skeleton-block" style={{ height: 220 }} />
            ))}
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="network-empty">
            <div className="network-empty__icon"><FaBriefcase /></div>
            <div className="network-empty__title">No career opportunities found</div>
            <div className="network-empty__sub">Be the first to share an opening with fellow alumni</div>
            <button className="jobs-post-trigger-btn" style={{ marginTop: 16 }} onClick={() => setPostModalOpen(true)}>
              <FaPlus /> <span>Post a Job Opening</span>
            </button>
          </div>
        ) : (
          <div className="jobs-grid">
            {filteredJobs.map((job, index) => {
              const poster = job.postedBy || {}
              const cardKey = job.id || `job-${index}-${job.createdAt || ''}`
              const userAccountType = user ? meta(user, 'account_type', '') : ''
              const isOwner = user && (
                (job.postedBy?.uid && job.postedBy.uid === user.uid) ||
                (job.postedBy?.email && user.email && job.postedBy.email.toLowerCase() === user.email.toLowerCase()) ||
                userAccountType === 'admin'
              )

              return (
                <div key={cardKey} className="job-card" onClick={() => openDetailModal(job)}>
                  {/* Header */}
                  <div className="job-card__header">
                    <div className="job-card__company-badge">
                      <FaBuilding />
                    </div>
                    <div className="job-card__info">
                      <h3 className="job-card__title">{job.title}</h3>
                      <div className="job-card__company">
                        {job.company} • <FaMapMarkerAlt style={{ fontSize: '0.62rem', margin: '0 2px' }} /> {job.location}
                      </div>
                    </div>
                    {isOwner && (
                      <button
                        type="button"
                        className="job-card__delete-btn"
                        title="Delete job opening"
                        aria-label="Delete job opening"
                        onClick={(e) => {
                          e.stopPropagation()
                          promptDeleteJob(job)
                        }}
                      >
                        <FaTrashAlt />
                      </button>
                    )}
                  </div>

                  {/* Badges */}
                  <div className="job-card__badges">
                    <span className="job-pill job-pill--type">{job.jobType}</span>
                    <span className="job-pill job-pill--exp">{job.experienceLevel}</span>
                    {job.salaryRange && <span className="job-pill job-pill--salary">{job.salaryRange}</span>}
                  </div>

                  {/* Description snippet */}
                  <p className="job-card__snippet">
                    {job.description}
                  </p>

                  {/* Poster Footer */}
                  <div className="job-card__footer">
                    <div className="job-card__poster">
                      <div className="job-card__poster-avatar">
                        {poster.avatar ? (
                          <img src={poster.avatar} alt={poster.name} />
                        ) : (
                          (poster.name || 'Alumni').charAt(0).toUpperCase()
                        )}
                      </div>
                      <div className="job-card__poster-meta">
                        <span className="job-card__poster-name">Posted by {poster.name || 'Alumni Member'}</span>
                        <span className="job-card__poster-time">{getTimeAgo(job.createdAt)}</span>
                      </div>
                    </div>

                    <button className="job-card__action-btn" onClick={(e) => { e.stopPropagation(); openDetailModal(job) }}>
                      View & Apply <FaChevronRight style={{ fontSize: '0.55rem' }} />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </main>

      {/* Post Job Modal */}
      <PostJobModal
        open={postModalOpen}
        onClose={() => setPostModalOpen(false)}
        currentUser={user}
        onJobPosted={handleJobPosted}
      />

      {/* Job Detail XXL Modal */}
      <JobDetailModal
        job={selectedJob}
        open={detailModalOpen}
        onClose={closeDetailModal}
        currentUser={user}
        onDelete={promptDeleteJob}
      />

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        open={!!jobToDelete}
        job={jobToDelete}
        onClose={() => setJobToDelete(null)}
        onConfirm={handleConfirmDelete}
        deleting={deleting}
      />
    </div>
  )
}

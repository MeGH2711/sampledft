import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { useNavigate, Link as RouterLink } from 'react-router-dom'
import {
  FaUsers,
  FaSearch,
  FaTimes,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaLinkedin,
  FaFilter,
  FaLock,
  FaBuilding,
  FaGlobe,
  FaCalendarAlt,
  FaSortAmountDown,
  FaNetworkWired,
  FaChevronRight,
  FaAward,
  FaHeart,
  FaFileAlt,
  FaThLarge,
  FaTh,
  FaTable,
  FaChevronDown,
  FaCheck,
  FaCertificate
} from 'react-icons/fa'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'
import { personal, contact, academic, professional, meta, pref, getArrayField, getUserDisplayName, formatDateFormatted } from '../utils/userHelpers'
import { COMPANY_OPTIONS } from '../data/formdata'
import PortalNavbar from '../components/PortalNavbar'
import './Network.css'

/* ─── Helpers ─── */
const AVATAR_COLORS = ['--red', '--blue', '--teal', '--purple', '--amber', '--green']

function getAvatarColor(name = '') {
  const code = [...name].reduce((acc, ch) => acc + ch.charCodeAt(0), 0)
  return AVATAR_COLORS[code % AVATAR_COLORS.length]
}

function buildLocation(user) {
  const parts = [personal(user, 'city'), personal(user, 'state'), personal(user, 'country')].filter(Boolean)
  return parts.join(', ')
}

function buildCompanyLine(user) {
  const title = professional(user, 'jobTitle')
  const company = professional(user, 'company')
  if (title && company) return `${title} @ ${company}`
  if (title) return title
  if (company) return company
  return ''
}

/* ─── Skeleton Card ─── */
function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <div className="skeleton-block" style={{ width: 48, height: 48, borderRadius: '50%', flexShrink: 0 }} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 7 }}>
          <div className="skeleton-block" style={{ height: 14, width: '70%', borderRadius: 4 }} />
          <div className="skeleton-block" style={{ height: 10, width: '45%', borderRadius: 4 }} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        <div className="skeleton-block" style={{ height: 10, borderRadius: 4 }} />
        <div className="skeleton-block" style={{ height: 10, width: '80%', borderRadius: 4 }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="skeleton-block" style={{ height: 10, width: '35%', borderRadius: 4 }} />
        <div className="skeleton-block" style={{ height: 10, width: '25%', borderRadius: 4 }} />
      </div>
    </div>
  )
}

/* ─── User Card ─── */
function UserCard({ user, onClick }) {
  const name = getUserDisplayName(user)
  const colorVariant = getAvatarColor(name)
  const avatarLetter = name.charAt(0).toUpperCase()
  const photoUrl = meta(user, 'profilePhotoUrl', '')
  const isVerified = meta(user, 'verification_status', false)
  const batch = academic(user, 'passoutYear') || academic(user, 'admissionYear') || ''
  const location = buildLocation(user)
  const companyLine = buildCompanyLine(user)
  const degrees = getArrayField(user, 'academicDetails', 'degrees')
  const firstDegObj = degrees?.[0]
  const firstDegree = firstDegObj
    ? (typeof firstDegObj === 'string'
      ? firstDegObj
      : [firstDegObj.degree, firstDegObj.domain].filter(Boolean).join(' - '))
    : ''

  return (
    <div className="user-card" onClick={() => onClick(user)} role="button" tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(user)}
      aria-label={`View profile of ${name}`}>

      <div className="user-card__header">
        <div className={`user-card__avatar user-card__avatar${colorVariant}`}>
          {photoUrl
            ? <img src={photoUrl} alt={name} loading="lazy" />
            : <span className="user-card__avatar-initials">{avatarLetter}</span>
          }
        </div>
        <div className="user-card__info">
          <div className="user-card__name">{name}</div>
          {batch && (
            <div className="user-card__batch">
              <FaGraduationCap style={{ fontSize: '0.58rem' }} />
              Batch {batch}
            </div>
          )}
        </div>
        {isVerified
          ? <span className="user-card__verified-badge"><FaCheckCircle /> Verified</span>
          : <span className="user-card__pending-badge"><FaClock /> Pending</span>
        }
      </div>

      <div className="user-card__body">
        {companyLine && (
          <div className="user-card__row">
            <FaBriefcase className="user-card__row-icon" />
            <span className="user-card__row-text">{companyLine}</span>
          </div>
        )}
        {location && (
          <div className="user-card__row">
            <FaMapMarkerAlt className="user-card__row-icon" />
            <span className="user-card__row-text">{location}</span>
          </div>
        )}
      </div>

      <div className="user-card__footer">
        {firstDegree
          ? <span className="user-card__degree-tag">{firstDegree}</span>
          : <span className="user-card__degree-tag">Alumni</span>
        }
        <span className="user-card__view-btn">View <FaChevronRight style={{ fontSize: '0.55rem' }} /></span>
      </div>
    </div>
  )
}

/* ─── XXL Detail Modal (Organized Layout) ─── */
function DetailModal({ user, open, onClose }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && open) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  if (!user) return null

  const name = getUserDisplayName(user)
  const colorVariant = getAvatarColor(name)
  const avatarLetter = name.charAt(0).toUpperCase()
  const photoUrl = meta(user, 'profilePhotoUrl', '')
  const isVerified = meta(user, 'verification_status', false)

  const consentEmail = pref(user, 'consentEmail', false)
  const consentPhone = pref(user, 'consentPhone', false)
  const consentWhatsapp = pref(user, 'consentWhatsapp', false)
  const consentLinkedin = pref(user, 'consentLinkedin', false)

  const batch = academic(user, 'passoutYear') || academic(user, 'admissionYear') || ''
  const admYear = academic(user, 'admissionYear') || ''
  const userType = academic(user, 'userType') || ''
  const degrees = getArrayField(user, 'academicDetails', 'degrees')
  const certifications = getArrayField(user, 'academicDetails', 'certifications')
  const hobbies = getArrayField(user, 'personalDetails', 'hobbies')
  const otherHobbies = personal(user, 'otherHobbies')
  const standardHobbies = hobbies.filter(h => h && h !== 'Others')
  const otherHobbiesList = (otherHobbies || '')
    .split(',')
    .map(item => item.trim())
    .filter(Boolean)

  // Personal
  const gender = personal(user, 'gender')
  const dob = personal(user, 'dob')
  const dom = personal(user, 'dom')
  const city = personal(user, 'city')
  const state = personal(user, 'state')
  const country = personal(user, 'country')

  // Professional
  const jobTitle = professional(user, 'jobTitle')
  const profession = professional(user, 'profession')
  const department = professional(user, 'department')
  const division = professional(user, 'division')
  const workExperience = professional(user, 'workExperience')
  const company = professional(user, 'company')
  const companyWebsite = professional(user, 'companyWebsite')
  const companyCity = professional(user, 'companyCity')
  const companyState = professional(user, 'companyState')
  const companyCountry = professional(user, 'companyCountry')
  const workingSinceYear = professional(user, 'workingSinceYear')
  const workingSinceMonth = professional(user, 'workingSinceMonth')
  const lastPromotionDesignation = professional(user, 'lastPromotionDesignation')
  const lastPromotionMonth = professional(user, 'lastPromotionMonth')
  const lastPromotionYear = professional(user, 'lastPromotionYear')
  const awards = getArrayField(user, 'professionalDetails', 'awards')
  const productServices = getArrayField(user, 'professionalDetails', 'productServices')
  const otherProductServices = professional(user, 'otherProductServices')
  const standardProductServices = productServices.filter(p => p && p !== 'Others')
  const otherProductServicesList = (otherProductServices || '')
    .split(',')
    .map(item => item.trim())
    .filter(Boolean)
  const linkedin = professional(user, 'linkedin')

  // System Meta
  const cvUrl = meta(user, 'cvUrl') || meta(user, 'cvBase64')
  const cvFileName = meta(user, 'cvFileName') || ''

  // Contact
  const email = contact(user, 'email')
  const phone = contact(user, 'phone')
  const whatsapp = contact(user, 'whatsapp')

  // Formatted location strings & clean phone numbers
  const homeLocation = [city, state, country].filter(Boolean).join(', ')
  const workLocation = [companyCity, companyCountry].filter(Boolean).join(', ')
  const cleanPhone = phone ? phone.replace(/\D/g, '') : ''
  const cleanWhatsapp = whatsapp ? whatsapp.replace(/\D/g, '') : cleanPhone

  return (
    <div
      className={`modal-overlay${open ? ' modal-overlay--open' : ''}`}
      onClick={onClose}
      aria-hidden={!open}
    >
      <div
        className="detail-modal detail-modal--xxl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`Profile of ${name}`}
      >
        {/* Modal Header / Banner */}
        <div className="detail-modal__header">
          <div className="detail-modal__banner-accent" />
          <button className="detail-modal__close" onClick={onClose} aria-label="Close modal">
            <FaTimes />
          </button>

          <div className="modal-profile">
            <div className={`modal-profile__avatar user-card__avatar${colorVariant}`}>
              {photoUrl
                ? <img src={photoUrl} alt={name} />
                : <span className="user-card__avatar-initials">{avatarLetter}</span>
              }
            </div>
            <div className="modal-profile__info">
              <div className="modal-profile__title-row">
                <h2 className="modal-profile__name">{name}</h2>
                {isVerified
                  ? <span className="modal-badge modal-badge--verified"><FaCheckCircle /> Verified Member</span>
                  : <span className="modal-badge modal-badge--pending"><FaClock /> Verification Pending</span>
                }
              </div>

              {(jobTitle || company) && (
                <div className="modal-profile__headline">
                  <FaBriefcase className="modal-profile__headline-icon" />
                  <span>
                    {jobTitle && company ? (
                      <>{jobTitle} <span className="headline-at">at</span> <strong>{company}</strong></>
                    ) : (
                      jobTitle || company
                    )}
                  </span>
                </div>
              )}

              <div className="modal-profile__subrow">
                {batch && (
                  <span className="modal-chip">
                    <FaGraduationCap /> Batch {batch}
                  </span>
                )}
                {homeLocation && (
                  <span className="modal-chip">
                    <FaMapMarkerAlt /> {homeLocation}
                  </span>
                )}
                {userType && (
                  <span className="modal-chip modal-chip--tag">
                    {userType}
                  </span>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Content Body */}
        <div className="detail-modal__body">
          {/* Quick Actions Strip */}
          {(cvUrl || (consentEmail && email) || (consentLinkedin && linkedin) || (consentWhatsapp && cleanWhatsapp)) && (
            <div className="modal-header-actions">
              {cvUrl && (
                <a href={cvUrl} target="_blank" rel="noreferrer" className="modal-action-btn modal-action-btn--cv" title="View Resume / CV">
                  <FaFileAlt /> <span>Resume / CV</span>
                </a>
              )}
              {consentEmail && email && (
                <a href={`mailto:${email}`} className="modal-action-btn modal-action-btn--email" title="Send Email">
                  <FaEnvelope /> <span>Email</span>
                </a>
              )}
              {consentLinkedin && linkedin && (
                <a href={linkedin.startsWith('http') ? linkedin : `https://${linkedin}`} target="_blank" rel="noreferrer" className="modal-action-btn modal-action-btn--linkedin" title="LinkedIn Profile">
                  <FaLinkedin /> <span>LinkedIn</span>
                </a>
              )}
              {consentWhatsapp && cleanWhatsapp && (
                <a href={`https://wa.me/${cleanWhatsapp}`} target="_blank" rel="noreferrer" className="modal-action-btn modal-action-btn--whatsapp" title="WhatsApp Message">
                  <FaWhatsapp /> <span>Chat</span>
                </a>
              )}
            </div>
          )}

          {/* Quick Stats Row */}
          <div className="modal-quick-stats">
            <div className="stat-card">
              <div className="stat-card__icon"><FaGraduationCap /></div>
              <div className="stat-card__content">
                <span className="stat-card__label">Graduation Batch</span>
                <span className="stat-card__value">{batch ? `Class of ${batch}` : 'N/A'}</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-card__icon"><FaBriefcase /></div>
              <div className="stat-card__content">
                <span className="stat-card__label">Current Role</span>
                <span className="stat-card__value">{jobTitle || 'Not Specified'}</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-card__icon"><FaBuilding /></div>
              <div className="stat-card__content">
                <span className="stat-card__label">Organization</span>
                <span className="stat-card__value">{company || 'Not Specified'}</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-card__icon"><FaMapMarkerAlt /></div>
              <div className="stat-card__content">
                <span className="stat-card__label">Location</span>
                <span className="stat-card__value">{city ? `${city}${country ? `, ${country}` : ''}` : (homeLocation || 'N/A')}</span>
              </div>
            </div>
          </div>

          {/* Structured Cards Grid */}
          <div className="modal-content-grid">

            {/* CARD 1: Professional Information */}
            <div className="modal-card">
              <div className="modal-card__header">
                <div className="modal-card__icon-box"><FaBriefcase /></div>
                <div>
                  <h3 className="modal-card__title">Professional Profile</h3>
                  <p className="modal-card__subtitle">Role, designation & career details</p>
                </div>
              </div>
              <div className="modal-card__body">
                <div className="modal-info-table">
                  <div className="info-row">
                    <span className="info-row__label">Designation / Role</span>
                    <span className="info-row__value font-highlight">{jobTitle || 'N/A'}</span>
                  </div>
                  {profession && (
                    <div className="info-row">
                      <span className="info-row__label">Profession</span>
                      <span className="info-row__value">{profession}</span>
                    </div>
                  )}
                  {department && (
                    <div className="info-row">
                      <span className="info-row__label">Department</span>
                      <span className="info-row__value">{department}</span>
                    </div>
                  )}
                  {division && (
                    <div className="info-row">
                      <span className="info-row__label">Division</span>
                      <span className="info-row__value">{division}</span>
                    </div>
                  )}
                  {workExperience && (
                    <div className="info-row">
                      <span className="info-row__label">Total Experience</span>
                      <span className="info-row__value">{workExperience} Years</span>
                    </div>
                  )}
                  {(workingSinceMonth || workingSinceYear) && (
                    <div className="info-row">
                      <span className="info-row__label">Working Since</span>
                      <span className="info-row__value">{[workingSinceMonth, workingSinceYear].filter(Boolean).join(' ')}</span>
                    </div>
                  )}
                  {lastPromotionDesignation && (
                    <div className="info-row">
                      <span className="info-row__label">Last Promotion</span>
                      <span className="info-row__value">
                        {lastPromotionDesignation}{[lastPromotionMonth, lastPromotionYear].filter(Boolean).length > 0 ? ` (${[lastPromotionMonth, lastPromotionYear].filter(Boolean).join(' ')})` : ''}
                      </span>
                    </div>
                  )}
                </div>

                {/* Awards */}
                {awards.length > 0 && (
                  <div className="modal-card__subsection">
                    <div className="subsection-title">
                      <FaAward style={{ color: '#fbbf24' }} /> Awards & Recognitions
                    </div>
                    <div className="awards-grid">
                      {awards.map((a, i) => {
                        const awardTitle = typeof a === 'object' && a !== null ? (a.name || a.title || '') : String(a || '');
                        const month = typeof a === 'object' && a !== null ? (a.month || '') : '';
                        const year = typeof a === 'object' && a !== null ? (a.year || '') : '';
                        const dateStr = [month, year].filter(Boolean).join(' ');
                        const attachmentUrl = typeof a === 'object' && a !== null ? (a.attachmentUrl || a.url || '') : '';
                        if (!awardTitle && !dateStr) return null;

                        return (
                          <div key={i} className="award-card">
                            <div className="award-card__badge">
                              <FaAward />
                            </div>
                            <div className="award-card__details">
                              {awardTitle && <div className="award-card__title">{awardTitle}</div>}
                              {dateStr && (
                                <div className="award-card__date">
                                  <FaCalendarAlt style={{ fontSize: '0.62rem' }} /> Received: {dateStr}
                                </div>
                              )}
                              {attachmentUrl && (
                                <div style={{ marginTop: '4px' }}>
                                  <a
                                    href={attachmentUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ fontSize: '0.72rem', color: '#60a5fa', textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                                  >
                                    <FaFileAlt style={{ fontSize: '0.68rem' }} /> View Attachment
                                  </a>
                                </div>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CARD 2: Company & Organization */}
            <div className="modal-card">
              <div className="modal-card__header">
                <div className="modal-card__icon-box"><FaBuilding /></div>
                <div>
                  <h3 className="modal-card__title">Company & Organization</h3>
                  <p className="modal-card__subtitle">Workplace profile & business offerings</p>
                </div>
              </div>
              <div className="modal-card__body">
                <div className="modal-info-table">
                  <div className="info-row">
                    <span className="info-row__label">Company / Org</span>
                    <span className="info-row__value font-highlight">{company || 'N/A'}</span>
                  </div>
                  {[companyCity, companyState, companyCountry].filter(Boolean).join(', ') && (
                    <div className="info-row">
                      <span className="info-row__label">Work Location</span>
                      <span className="info-row__value">{[companyCity, companyState, companyCountry].filter(Boolean).join(', ')}</span>
                    </div>
                  )}
                  {companyWebsite && (
                    <div className="info-row">
                      <span className="info-row__label">Company Website</span>
                      <span className="info-row__value">
                        <a
                          href={companyWebsite.startsWith('http') ? companyWebsite : `https://${companyWebsite}`}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: '#60a5fa', textDecoration: 'underline' }}
                        >
                          {companyWebsite}
                        </a>
                      </span>
                    </div>
                  )}
                </div>

                {/* Products / Services */}
                {(standardProductServices.length > 0 || otherProductServicesList.length > 0) && (
                  <div className="modal-card__subsection">
                    <div className="subsection-title">Products & Services</div>

                    {standardProductServices.length > 0 && (
                      <div className="pill-tags-list">
                        {standardProductServices.map((p, i) => (
                          <span key={i} className="info-pill">{p}</span>
                        ))}
                      </div>
                    )}

                    {otherProductServicesList.length > 0 && (
                      <div className="modal-card__nested-subsection">
                        <div className="nested-subsection-title">Other Products & Services</div>
                        <div className="pill-tags-list">
                          {otherProductServicesList.map((item, i) => (
                            <span key={i} className="info-pill info-pill--other">{item}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* CARD 2: Academic Profile */}
            <div className="modal-card">
              <div className="modal-card__header">
                <div className="modal-card__icon-box"><FaGraduationCap /></div>
                <div>
                  <h3 className="modal-card__title">Academic Background</h3>
                  <p className="modal-card__subtitle">DFT education & degree details</p>
                </div>
              </div>
              <div className="modal-card__body">
                <div className="modal-info-table">
                  {batch && (
                    <div className="info-row">
                      <span className="info-row__label">Passout Batch</span>
                      <span className="info-row__value font-highlight">{batch}</span>
                    </div>
                  )}
                  {admYear && (
                    <div className="info-row">
                      <span className="info-row__label">Admission Year</span>
                      <span className="info-row__value">{admYear}</span>
                    </div>
                  )}
                  {userType && (
                    <div className="info-row">
                      <span className="info-row__label">Category</span>
                      <span className="info-row__value">{userType}</span>
                    </div>
                  )}
                </div>

                {/* Degrees */}
                {degrees.length > 0 && (
                  <div className="modal-card__subsection">
                    <div className="subsection-title">Degrees & Credentials</div>
                    <div className="degrees-grid">
                      {degrees.map((d, i) => {
                        const degreeName = typeof d === 'string' ? d : d?.degree
                        const domainName = typeof d === 'object' ? d?.domain : ''
                        const streamName = typeof d === 'object' ? d?.stream : ''
                        const collegeName = typeof d === 'object' ? d?.college : ''

                        return (
                          <div key={i} className="degree-card">
                            <div className="degree-card__badge"><FaGraduationCap /></div>
                            <div className="degree-card__details">
                              <div className="degree-card__title">
                                {degreeName || 'Degree Program'}
                              </div>
                              {domainName && (
                                <div className="degree-card__domain">
                                  Domain: <strong>{domainName}</strong>
                                </div>
                              )}
                              {(streamName || collegeName) && (
                                <div className="degree-card__college">
                                  {[streamName, collegeName].filter(Boolean).join(' · ')}
                                </div>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Certifications */}
                {certifications.length > 0 && (
                  <div className="modal-card__subsection">
                    <div className="subsection-title">
                      <FaCertificate style={{ color: '#fbbf24' }} /> Certifications
                    </div>
                    <div className="certifications-grid">
                      {certifications.map((c, i) => {
                        const area = typeof c === 'object' ? (c?.area || c?.name || c?.title || '') : String(c)
                        const level2 = typeof c === 'object' ? (c?.level2 || c?.detail || c?.description || '') : ''
                        const level3 = typeof c === 'object' ? (c?.level3 || '') : ''
                        const otherDescribe = typeof c === 'object' ? (c?.otherDescribe || '') : ''
                        const validTillMonth = typeof c === 'object' ? (c?.validTillMonth || '') : ''
                        const validTillYear = typeof c === 'object' ? (c?.validTillYear || '') : ''

                        const breadcrumb = [area, level2, level3, otherDescribe].filter(Boolean).join(' › ')
                        const validTill = validTillMonth && validTillYear ? `Valid Till: ${validTillMonth} ${validTillYear}` : ''
                        if (!breadcrumb) return null

                        return (
                          <div key={i} className="cert-card">
                            <div className="cert-card__badge"><FaCertificate /></div>
                            <div className="cert-card__details">
                              <div className="cert-card__area">{breadcrumb}</div>
                              {validTill && <div className="cert-card__detail">{validTill}</div>}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CARD 3: Contact & Connectivity */}
            <div className="modal-card">
              <div className="modal-card__header">
                <div className="modal-card__icon-box"><FaEnvelope /></div>
                <div>
                  <h3 className="modal-card__title">Contact & Communication</h3>
                  <p className="modal-card__subtitle">Reach out & connect directly</p>
                </div>
              </div>
              <div className="modal-card__body">
                <div className="contact-list">
                  {/* Email */}
                  <div className="contact-item">
                    <div className="contact-item__icon"><FaEnvelope /></div>
                    <div className="contact-item__detail">
                      <span className="contact-item__label">Email Address</span>
                      {consentEmail && email ? (
                        <a href={`mailto:${email}`} className="contact-item__link">{email}</a>
                      ) : (
                        <span className="contact-item__hidden"><FaLock /> Hidden per member request</span>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="contact-item">
                    <div className="contact-item__icon contact-item__icon--phone"><FaPhone /></div>
                    <div className="contact-item__detail">
                      <span className="contact-item__label">Phone Number</span>
                      {consentPhone && phone ? (
                        <a href={`tel:${cleanPhone}`} className="contact-item__link">{phone}</a>
                      ) : (
                        <span className="contact-item__hidden"><FaLock /> Hidden per member request</span>
                      )}
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="contact-item">
                    <div className="contact-item__icon"><FaWhatsapp /></div>
                    <div className="contact-item__detail">
                      <span className="contact-item__label">WhatsApp</span>
                      {consentWhatsapp && whatsapp ? (
                        <a href={`https://wa.me/${cleanWhatsapp}`} target="_blank" rel="noreferrer" className="contact-item__link">{whatsapp}</a>
                      ) : (
                        <span className="contact-item__hidden"><FaLock /> Hidden per member request</span>
                      )}
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="contact-item">
                    <div className="contact-item__icon"><FaLinkedin /></div>
                    <div className="contact-item__detail">
                      <span className="contact-item__label">LinkedIn Profile</span>
                      {consentLinkedin && linkedin ? (
                        <a href={linkedin.startsWith('http') ? linkedin : `https://${linkedin}`} target="_blank" rel="noreferrer" className="contact-item__link">
                          View LinkedIn Profile
                        </a>
                      ) : (
                        <span className="contact-item__hidden"><FaLock /> Hidden per member request</span>
                      )}
                    </div>
                  </div>

                  {/* Resume / CV */}
                  {cvUrl && (
                    <div className="contact-item">
                      <div className="contact-item__icon"><FaFileAlt /></div>
                      <div className="contact-item__detail">
                        <span className="contact-item__label">Resume / CV</span>
                        <a href={cvUrl} target="_blank" rel="noreferrer" className="contact-item__link">
                          {cvFileName ? `View ${cvFileName}` : 'View / Download Resume (PDF)'}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* CARD 4: Personal Information & Hobbies */}
            <div className="modal-card">
              <div className="modal-card__header">
                <div className="modal-card__icon-box"><FaUsers /></div>
                <div>
                  <h3 className="modal-card__title">Personal Details</h3>
                  <p className="modal-card__subtitle">Demographics & personal interests</p>
                </div>
              </div>
              <div className="modal-card__body">
                <div className="modal-info-table">
                  {gender && (
                    <div className="info-row">
                      <span className="info-row__label">Gender</span>
                      <span className="info-row__value">{gender}</span>
                    </div>
                  )}
                  {dob && (
                    <div className="info-row">
                      <span className="info-row__label">Date of Birth</span>
                      <span className="info-row__value">{formatDateFormatted(dob)}</span>
                    </div>
                  )}
                  {dom && (
                    <div className="info-row">
                      <span className="info-row__label">Anniversary</span>
                      <span className="info-row__value">{formatDateFormatted(dom)}</span>
                    </div>
                  )}
                  {homeLocation && (
                    <div className="info-row">
                      <span className="info-row__label">Residential Location</span>
                      <span className="info-row__value">{homeLocation}</span>
                    </div>
                  )}
                </div>

                {/* Hobbies */}
                {(standardHobbies.length > 0 || otherHobbiesList.length > 0) && (
                  <div className="modal-card__subsection">
                    <div className="subsection-title"><FaHeart /> Hobbies & Interests</div>

                    {standardHobbies.length > 0 && (
                      <div className="pill-tags-list">
                        {standardHobbies.map((h, i) => (
                          <span key={i} className="hobby-pill">{h}</span>
                        ))}
                      </div>
                    )}

                    {otherHobbiesList.length > 0 && (
                      <div className="modal-card__nested-subsection">
                        <div className="nested-subsection-title">Other Interests & Hobbies</div>
                        <div className="pill-tags-list">
                          {otherHobbiesList.map((item, i) => (
                            <span key={i} className="hobby-pill hobby-pill--other">{item}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Custom Sort Dropdown ─── */
function CustomSortSelect({ value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const selectedOption = options.find(o => o.value === value) || options[0]

  return (
    <div className="custom-select-container" ref={containerRef}>
      <button
        type="button"
        className={`custom-select-trigger${isOpen ? ' custom-select-trigger--open' : ''}`}
        onClick={() => setIsOpen(v => !v)}
        aria-label="Sort members"
        aria-expanded={isOpen}
      >
        <span>{selectedOption?.label}</span>
        <FaChevronDown className={`custom-select-arrow${isOpen ? ' custom-select-arrow--open' : ''}`} />
      </button>

      {isOpen && (
        <div className="custom-select-dropdown" role="listbox">
          {options.map(opt => (
            <div
              key={opt.value}
              role="option"
              aria-selected={opt.value === value}
              className={`custom-select-option${opt.value === value ? ' custom-select-option--selected' : ''}`}
              onClick={() => {
                onChange(opt.value)
                setIsOpen(false)
              }}
            >
              <span>{opt.label}</span>
              {opt.value === value && <FaCheck style={{ fontSize: '0.62rem', color: '#ff8f8c' }} />}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

/* ─── Filter Chip ─── */
function Chip({ label, onRemove }) {
  return (
    <span className="filter-chip">
      {label}
      <button onClick={onRemove} aria-label={`Remove filter: ${label}`}><FaTimes /></button>
    </span>
  )
}

/* ─── Company Autofill Filter ─── */
function CompanyAutofillFilter({ value, onChange, companyOptions }) {
  const [isOpen, setIsOpen] = useState(false)
  const [inputVal, setInputVal] = useState(value || '')
  const containerRef = useRef(null)

  useEffect(() => {
    setInputVal(value || '')
  }, [value])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filteredOptions = useMemo(() => {
    if (!inputVal.trim()) return companyOptions.slice(0, 30)
    const q = inputVal.toLowerCase().trim()
    return companyOptions
      .filter(c => c.toLowerCase().includes(q))
      .slice(0, 30)
  }, [companyOptions, inputVal])

  return (
    <div className="company-autofill-container" ref={containerRef} style={{ position: 'relative' }}>
      <div className="filter-group__input-wrap" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <input
          id="net-company"
          className="filter-group__input"
          type="text"
          placeholder="Type or select company…"
          value={inputVal}
          onChange={(e) => {
            const v = e.target.value
            setInputVal(v)
            onChange(v)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          autoComplete="off"
          style={{ paddingRight: inputVal ? '28px' : '12px' }}
        />
        {inputVal && (
          <button
            type="button"
            onClick={() => {
              setInputVal('')
              onChange('')
              setIsOpen(false)
            }}
            style={{
              position: 'absolute',
              right: '10px',
              background: 'none',
              border: 'none',
              color: 'rgba(255, 255, 255, 0.4)',
              cursor: 'pointer',
              fontSize: '0.7rem',
              display: 'flex',
              alignItems: 'center'
            }}
            title="Clear company"
          >
            <FaTimes />
          </button>
        )}
      </div>

      {isOpen && filteredOptions.length > 0 && (
        <div
          className="company-autofill-dropdown"
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            left: 0,
            right: 0,
            maxHeight: '180px',
            overflowY: 'auto',
            background: '#0c1833',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '8px',
            boxShadow: '0 12px 28px rgba(0, 0, 0, 0.65)',
            zIndex: 100,
            padding: '4px 0'
          }}
        >
          {filteredOptions.map((comp) => (
            <div
              key={comp}
              style={{
                padding: '7px 12px',
                fontSize: '0.7rem',
                color: comp === value ? '#ff8f8c' : 'rgba(255, 255, 255, 0.85)',
                cursor: 'pointer',
                background: comp === value ? 'rgba(232, 48, 42, 0.12)' : 'transparent',
                fontWeight: comp === value ? '700' : '400',
                transition: 'background 0.15s ease'
              }}
              onMouseDown={(e) => {
                e.preventDefault()
                setInputVal(comp)
                onChange(comp)
                setIsOpen(false)
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = comp === value ? 'rgba(232, 48, 42, 0.12)' : 'transparent'
              }}
            >
              {comp}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

/* ══════════════════════════════════════════
   MAIN NETWORK PAGE COMPONENT
══════════════════════════════════════════ */
export default function Network({ user, onLogout }) {
  const navigate = useNavigate()

  /* ── Auth guard ── */
  useEffect(() => {
    if (!user) navigate('/login', { replace: true })
  }, [user, navigate])

  const isVerified = user ? meta(user, 'verification_status', false) : false

  /* ── Data ── */
  const [usersList, setUsersList] = useState([])
  const [loading, setLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    if (!user || !isVerified) { setLoading(false); return }

    const load = async () => {
      setLoading(true)
      setFetchError(null)
      try {
        const snap = await getDocs(collection(db, 'users'))
        const list = []
        snap.forEach(docSnap => {
          const uData = { uid: docSnap.id, ...docSnap.data() }
          if (meta(uData, 'verification_status', false) === true) {
            list.push(uData)
          }
        })
        setUsersList(list)
      } catch (err) {
        console.error('Network: Firestore error', err)
        setFetchError('Could not load alumni data. Please try again later.')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [user?.uid, isVerified])

  /* ── Filter state ── */
  const [search, setSearch] = useState('')
  const [filterCompany, setFilterCompany] = useState('')
  const [filterBatch, setFilterBatch] = useState('')
  const [filterCountry, setFilterCountry] = useState('')
  const [filterState, setFilterState] = useState('')
  const [filterCity, setFilterCity] = useState('')
  const [filterProfession, setFilterProfession] = useState('')
  const [sortBy, setSortBy] = useState('name-az')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [viewMode, setViewMode] = useState('grid-3') // 'grid-2' | 'grid-3' | 'table'

  /* ── Drawer ── */
  const [selectedUser, setSelectedUser] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const openDrawer = useCallback((u) => {
    setSelectedUser(u)
    setDrawerOpen(true)
  }, [])

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false)
    setTimeout(() => setSelectedUser(null), 350)
  }, [])

  /* ── Body scroll lock when modal or mobile sheet is open ── */
  useEffect(() => {
    if (drawerOpen || mobileFiltersOpen) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [drawerOpen, mobileFiltersOpen])

  /* ── Derived option lists ── */
  const batchOptions = useMemo(() => {
    const years = new Set()
    usersList.forEach(u => {
      const y = academic(u, 'passoutYear') || academic(u, 'admissionYear')
      if (y) years.add(y)
    })
    return [...years].sort((a, b) => b - a)
  }, [usersList])

  const countryOptions = useMemo(() => {
    const s = new Set()
    usersList.forEach(u => { const c = personal(u, 'country'); if (c) s.add(c) })
    return [...s].sort()
  }, [usersList])

  const stateOptions = useMemo(() => {
    if (!filterCountry) return []
    const s = new Set()
    usersList.forEach(u => {
      if (personal(u, 'country') === filterCountry) {
        const st = personal(u, 'state'); if (st) s.add(st)
      }
    })
    return [...s].sort()
  }, [usersList, filterCountry])

  const cityOptions = useMemo(() => {
    if (!filterState) return []
    const s = new Set()
    usersList.forEach(u => {
      if (personal(u, 'state') === filterState) {
        const c = personal(u, 'city'); if (c) s.add(c)
      }
    })
    return [...s].sort()
  }, [usersList, filterState])

  const professionOptions = useMemo(() => {
    const s = new Set()
    usersList.forEach(u => {
      const p = professional(u, 'profession') || professional(u, 'jobTitle')
      if (p) s.add(p)
    })
    return [...s].sort()
  }, [usersList])

  const companyOptions = useMemo(() => {
    const s = new Set()
    COMPANY_OPTIONS.forEach(c => { if (c) s.add(c) })
    usersList.forEach(u => {
      const comp = professional(u, 'company')
      if (comp) s.add(comp)
    })
    return [...s].sort((a, b) => a.localeCompare(b))
  }, [usersList])

  /* ── Filter reset cascade ── */
  const handleCountryChange = (val) => {
    setFilterCountry(val)
    setFilterState('')
    setFilterCity('')
  }

  const handleStateChange = (val) => {
    setFilterState(val)
    setFilterCity('')
  }

  /* ── Active filters count (for mobile badge) ── */
  const activeFilterCount = [
    filterBatch, filterCountry, filterState, filterCity, filterProfession, filterCompany
  ].filter(Boolean).length

  /* ── Clear all ── */
  const clearAll = () => {
    setSearch('')
    setFilterCompany('')
    setFilterBatch('')
    setFilterCountry('')
    setFilterState('')
    setFilterCity('')
    setFilterProfession('')
  }

  /* ── Filtered + sorted list ── */
  const filtered = useMemo(() => {
    // Only show verified users on the Network page
    let list = usersList.filter(u => meta(u, 'verification_status', false) === true)

    // Search
    if (search.trim()) {
      const q = search.toLowerCase().trim()
      list = list.filter(u => {
        const name = getUserDisplayName(u).toLowerCase()
        const email = contact(u, 'email').toLowerCase()
        const company = professional(u, 'company').toLowerCase()
        const city = personal(u, 'city').toLowerCase()
        const country = personal(u, 'country').toLowerCase()
        const jobTitle = professional(u, 'jobTitle').toLowerCase()
        const certs = getArrayField(u, 'academicDetails', 'certifications')
        const certsMatch = certs.some(c => {
          if (c && typeof c === 'object') {
            return (
              (c.area || '').toLowerCase().includes(q) ||
              (c.level2 || '').toLowerCase().includes(q) ||
              (c.level3 || '').toLowerCase().includes(q) ||
              (c.otherDescribe || '').toLowerCase().includes(q) ||
              (c.detail || '').toLowerCase().includes(q)
            )
          }
          return String(c || '').toLowerCase().includes(q)
        })
        return name.includes(q) || email.includes(q) || company.includes(q)
          || city.includes(q) || country.includes(q) || jobTitle.includes(q) || certsMatch
      })
    }

    // Company filter
    if (filterCompany.trim()) {
      const compQ = filterCompany.toLowerCase().trim()
      list = list.filter(u =>
        professional(u, 'company').toLowerCase().includes(compQ)
      )
    }

    // Batch
    if (filterBatch) {
      list = list.filter(u =>
        (academic(u, 'passoutYear') || academic(u, 'admissionYear')) === filterBatch
      )
    }

    // Nested location cascade
    if (filterCountry) list = list.filter(u => personal(u, 'country') === filterCountry)
    if (filterState) list = list.filter(u => personal(u, 'state') === filterState)
    if (filterCity) list = list.filter(u => personal(u, 'city') === filterCity)

    // Profession
    if (filterProfession) {
      list = list.filter(u =>
        professional(u, 'profession') === filterProfession ||
        professional(u, 'jobTitle') === filterProfession
      )
    }

    // Sort
    list.sort((a, b) => {
      if (sortBy === 'name-az') return getUserDisplayName(a).localeCompare(getUserDisplayName(b))
      if (sortBy === 'name-za') return getUserDisplayName(b).localeCompare(getUserDisplayName(a))
      if (sortBy === 'batch-new') {
        const ay = parseInt(academic(a, 'passoutYear') || academic(a, 'admissionYear') || 0)
        const by = parseInt(academic(b, 'passoutYear') || academic(b, 'admissionYear') || 0)
        return by - ay
      }
      if (sortBy === 'batch-old') {
        const ay = parseInt(academic(a, 'passoutYear') || academic(a, 'admissionYear') || 0)
        const by = parseInt(academic(b, 'passoutYear') || academic(b, 'admissionYear') || 0)
        return ay - by
      }
      if (sortBy === 'recent') {
        const da = new Date(meta(a, 'createdAt') || 0).getTime()
        const db_ = new Date(meta(b, 'createdAt') || 0).getTime()
        return db_ - da
      }
      return 0
    })

    return list
  }, [usersList, search, filterCompany, filterBatch, filterCountry, filterState, filterCity, filterProfession, sortBy])

  /* ── Stats ── */
  const totalVerified = usersList.filter(u => meta(u, 'verification_status', false)).length
  const totalCountries = new Set(usersList.map(u => personal(u, 'country')).filter(Boolean)).size

  /* ── No user ── */
  if (!user) return null

  /* ── Unverified screen ── */
  if (!isVerified) {
    return (
      <div className="network-page">
        <PortalNavbar user={user} />
        <div className="network-locked">
          <div className="network-locked__card">
            <div className="network-locked__icon">🔒</div>
            <div className="network-locked__title">Access Pending</div>
            <p className="network-locked__text">
              The Alumni Network is exclusively available to <strong>verified members</strong>.
              Your account is currently under review by our administrators.
            </p>
            <div className="network-locked__badge">
              <FaClock /> Verification typically takes 1–2 days
            </div>
            <RouterLink to="/profile" className="network-locked__back">
              View My Profile
            </RouterLink>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="network-page">
      <PortalNavbar user={user} />

      {/* Hero */}
      <div className="network-hero">
        <div className="network-hero__label">
          <div className="network-hero__label-line" />
          Alumni Network
          <div className="network-hero__label-line" />
        </div>
        <h1 className="network-hero__heading">
          <span>Connect with</span> <em>DFT Alumni</em>
        </h1>
        <p className="network-hero__sub">
          Discover, filter and connect with fellow alumni across industries and locations.
        </p>
        {!loading && (
          <div className="network-hero__stats">
            <div className="network-hero__stat">
              <span className="network-hero__stat-num">{usersList.length}</span>
              <span className="network-hero__stat-label">Total Members</span>
            </div>
            <div className="network-hero__stat">
              <span className="network-hero__stat-num">{totalVerified}</span>
              <span className="network-hero__stat-label">Verified Alumni</span>
            </div>
            {totalCountries > 0 && (
              <div className="network-hero__stat">
                <span className="network-hero__stat-num">{totalCountries}</span>
                <span className="network-hero__stat-label">Countries</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Layout */}
      <div className="network-layout">

        {/* ── Mobile/Tablet Backdrop Overlay ── */}
        {mobileFiltersOpen && (
          <div
            className="mobile-filter-backdrop"
            onClick={() => setMobileFiltersOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* ── Filter Sidebar / Bottom Sheet for Mobile/Tablet ── */}
        <aside className={`network-filters${mobileFiltersOpen ? ' network-filters--mobile-open' : ''}`}>
          <div className="mobile-filter-handle" />

          <div className="network-filters__header">
            <div className="mobile-filter-title-box">
              <span className="network-filters__title">Filter Alumni</span>
              {activeFilterCount > 0 && (
                <span className="mobile-filter-count-badge">{activeFilterCount} Active</span>
              )}
            </div>
            <div className="mobile-filter-header-actions">
              {activeFilterCount > 0 && (
                <button className="network-filters__clear-btn" onClick={clearAll}>Clear All</button>
              )}
              <button
                className="mobile-filter-close-btn"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* Active chips */}
          {activeFilterCount > 0 && (
            <div className="network-filters__chips">
              {filterCompany && <Chip label={`Company: ${filterCompany}`} onRemove={() => setFilterCompany('')} />}
              {filterBatch && <Chip label={`Batch ${filterBatch}`} onRemove={() => setFilterBatch('')} />}
              {filterCountry && <Chip label={filterCountry} onRemove={() => { setFilterCountry(''); setFilterState(''); setFilterCity('') }} />}
              {filterState && <Chip label={filterState} onRemove={() => { setFilterState(''); setFilterCity('') }} />}
              {filterCity && <Chip label={filterCity} onRemove={() => setFilterCity('')} />}
              {filterProfession && <Chip label={filterProfession} onRemove={() => setFilterProfession('')} />}
            </div>
          )}

          <div className="network-filters__divider" />

          {/* Filter Groups Grid (2-column on tablet, 1-column on mobile) */}
          <div className="filter-groups-grid">
            {/* Search Keyword */}
            <div className="filter-group filter-group--full">
              <label className="filter-group__label" htmlFor="net-search">Search Keyword</label>
              <input
                id="net-search"
                className="filter-group__input"
                type="text"
                placeholder="Name, city, degree…"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>

            {/* Search by Company with Autofill Dropdown */}
            <div className="filter-group filter-group--full">
              <label className="filter-group__label" htmlFor="net-company">Search by Company</label>
              <CompanyAutofillFilter
                value={filterCompany}
                onChange={setFilterCompany}
                companyOptions={companyOptions}
              />
            </div>

            {/* Batch */}
            <div className="filter-group">
              <label className="filter-group__label" htmlFor="net-batch">Batch Year</label>
              <select
                id="net-batch"
                className="filter-group__select"
                value={filterBatch}
                onChange={e => setFilterBatch(e.target.value)}
              >
                <option value="">All Batches</option>
                {batchOptions.map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>

            {/* Country */}
            <div className="filter-group">
              <label className="filter-group__label" htmlFor="net-country">Country</label>
              <select
                id="net-country"
                className="filter-group__select"
                value={filterCountry}
                onChange={e => handleCountryChange(e.target.value)}
              >
                <option value="">All Countries</option>
                {countryOptions.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {/* State */}
            <div className="filter-group">
              <label className="filter-group__label" htmlFor="net-state">State / Region</label>
              <select
                id="net-state"
                className="filter-group__select"
                value={filterState}
                onChange={e => handleStateChange(e.target.value)}
                disabled={!filterCountry || stateOptions.length === 0}
              >
                <option value="">All States</option>
                {stateOptions.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            {/* City */}
            <div className="filter-group">
              <label className="filter-group__label" htmlFor="net-city">City</label>
              <select
                id="net-city"
                className="filter-group__select"
                value={filterCity}
                onChange={e => setFilterCity(e.target.value)}
                disabled={!filterState || cityOptions.length === 0}
              >
                <option value="">All Cities</option>
                {cityOptions.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {/* Profession */}
            {professionOptions.length > 0 && (
              <div className="filter-group">
                <label className="filter-group__label" htmlFor="net-profession">Profession</label>
                <select
                  id="net-profession"
                  className="filter-group__select"
                  value={filterProfession}
                  onChange={e => setFilterProfession(e.target.value)}
                >
                  <option value="">All Professions</option>
                  {professionOptions.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
            )}
          </div>

          {/* Sticky Mobile/Tablet Apply Footer */}
          <div className="mobile-filter-footer">
            <button className="mobile-apply-btn" onClick={() => setMobileFiltersOpen(false)}>
              Show {filtered.length} {filtered.length === 1 ? 'Member' : 'Members'}
            </button>
          </div>
        </aside>

        {/* ── Main content ── */}
        <div className="network-main">

          {/* Mobile search */}
          <div className="network-mobile-search">
            <div className="filter-group">
              <input
                className="filter-group__input"
                type="text"
                placeholder="Search alumni by name, company, city…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                aria-label="Search alumni"
              />
            </div>
          </div>

          {/* Top bar */}
          <div className="network-topbar">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {/* Mobile filter toggle */}
              <button
                className="network-filter-toggle"
                onClick={() => setMobileFiltersOpen(v => !v)}
                aria-label="Toggle filters"
              >
                <FaFilter />
                Filters
                {activeFilterCount > 0 && <span className="filter-badge">{activeFilterCount}</span>}
              </button>
              {!loading && (
                <span className="network-topbar__count">
                  Showing <strong>{filtered.length}</strong> of {usersList.length} members
                </span>
              )}
            </div>

            <div className="network-topbar__right">
              {/* View Mode Button Group */}
              <div className="view-mode-toggle" role="group" aria-label="View mode switcher">
                <button
                  type="button"
                  className={`view-mode-btn${viewMode === 'grid-2' ? ' view-mode-btn--active' : ''}`}
                  onClick={() => setViewMode('grid-2')}
                  title="2 Column Grid View"
                  aria-label="2 Column Grid View"
                >
                  <FaThLarge />
                </button>
                <button
                  type="button"
                  className={`view-mode-btn${viewMode === 'grid-3' ? ' view-mode-btn--active' : ''}`}
                  onClick={() => setViewMode('grid-3')}
                  title="3 Column Grid View"
                  aria-label="3 Column Grid View"
                >
                  <FaTh />
                </button>
                <button
                  type="button"
                  className={`view-mode-btn${viewMode === 'table' ? ' view-mode-btn--active' : ''}`}
                  onClick={() => setViewMode('table')}
                  title="Table View"
                  aria-label="Table View"
                >
                  <FaTable />
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="network-topbar__sort">
                <span className="network-topbar__sort-label">Sort by</span>
                <CustomSortSelect
                  value={sortBy}
                  onChange={setSortBy}
                  options={[
                    { value: 'name-az', label: 'Name A → Z' },
                    { value: 'name-za', label: 'Name Z → A' },
                    { value: 'batch-new', label: 'Batch (Newest)' },
                    { value: 'batch-old', label: 'Batch (Oldest)' },
                    { value: 'recent', label: 'Recently Joined' }
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Error */}
          {fetchError && (
            <div style={{
              background: 'rgba(232,48,42,0.1)', border: '1px solid rgba(232,48,42,0.3)',
              borderRadius: 10, padding: '14px 18px', color: 'rgba(255,255,255,0.7)', fontSize: '0.76rem'
            }}>
              {fetchError}
            </div>
          )}

          {/* Content Rendering: Skeleton / Empty / Table / Grid */}
          {loading ? (
            <div className="skeleton-grid">
              {Array.from({ length: 9 }).map((_, i) => <SkeletonCard key={i} />)}
            </div>
          ) : filtered.length === 0 ? (
            <div className="network-empty">
              <div className="network-empty__icon"><FaNetworkWired /></div>
              <div className="network-empty__title">No alumni found</div>
              <div className="network-empty__sub">Try adjusting your search or filters</div>
            </div>
          ) : viewMode === 'table' ? (
            <div className="network-table-wrapper">
              <table className="network-table">
                <thead>
                  <tr>
                    <th>Member</th>
                    <th>Batch</th>
                    <th>Designation & Company</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th style={{ textAlign: 'right' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(u => {
                    const uName = getUserDisplayName(u)
                    const uColor = getAvatarColor(uName)
                    const uInitial = uName.charAt(0).toUpperCase()
                    const uPhoto = meta(u, 'profilePhotoUrl', '')
                    const uVerified = meta(u, 'verification_status', false)
                    const uBatch = academic(u, 'passoutYear') || academic(u, 'admissionYear') || '—'
                    const uComp = buildCompanyLine(u) || '—'
                    const uLoc = buildLocation(u) || '—'

                    return (
                      <tr key={u.uid} onClick={() => openDrawer(u)} className="network-table__row">
                        <td>
                          <div className="network-table__user">
                            <div className={`network-table__avatar user-card__avatar${uColor}`}>
                              {uPhoto ? <img src={uPhoto} alt={uName} /> : uInitial}
                            </div>
                            <span className="network-table__name">{uName}</span>
                          </div>
                        </td>
                        <td>
                          <span className="network-table__badge"><FaGraduationCap style={{ fontSize: '0.62rem' }} /> Batch {uBatch}</span>
                        </td>
                        <td>
                          <span className="network-table__text">{uComp}</span>
                        </td>
                        <td>
                          <span className="network-table__text">{uLoc}</span>
                        </td>
                        <td>
                          {uVerified ? (
                            <span className="user-card__verified-badge"><FaCheckCircle /> Verified</span>
                          ) : (
                            <span className="user-card__pending-badge"><FaClock /> Pending</span>
                          )}
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <button
                            type="button"
                            className="network-table__action-btn"
                            onClick={(e) => { e.stopPropagation(); openDrawer(u) }}
                          >
                            View Profile <FaChevronRight style={{ fontSize: '0.55rem' }} />
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className={`network-grid network-grid--${viewMode === 'grid-2' ? '2col' : '3col'}`}>
              {filtered.map(u => (
                <UserCard key={u.uid} user={u} onClick={openDrawer} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal (XXL) */}
      <DetailModal user={selectedUser} open={drawerOpen} onClose={closeDrawer} />
    </div>
  )
}

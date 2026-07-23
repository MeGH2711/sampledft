/**
 * Lightweight helpers for reading and writing user data organized in nested section buckets.
 * Replaces the old userAdapter.js — no data duplication, no normalization layer.
 *
 * Firestore document structure:
 *   personalDetails: { firstName, middleName, lastName, name, gender, dob, dom, bloodGroup, city, state, country, hobbies, otherHobbies }
 *   contactDetails: { email, phone, secondaryPhone, whatsapp }
 *   academicDetails: { userType, admissionYear, passoutYear, diplomaNotCompleted, degrees, certifications }
 *   professionalDetails: { jobTitle, company, profession, department, division, companyWebsite, companyCity, companyState, companyCountry, workingSinceMonth, workingSinceYear, workingSince, workExperience, lastPromotionDesignation, lastPromotionMonth, lastPromotionYear, awards, productServices, otherProductServices, linkedin }
 *   preferences: { consentEmail, consentPhone, consentWhatsapp, consentLinkedin }
 *   systemMetaData: { account_type, verification_status, createdAt, profilePhotoUrl, cvUrl, cvBase64, cvFileName }
 */

// ─── Field Accessors (read from section bucket, fallback to flat root for legacy) ───

export const getField = (user, section, field, defaultVal = '') =>
  user?.[section]?.[field] ?? user?.[field] ?? defaultVal

export const personal = (user, field, def = '') => getField(user, 'personalDetails', field, def)
export const contact = (user, field, def = '') => getField(user, 'contactDetails', field, def)
export const academic = (user, field, def = '') => getField(user, 'academicDetails', field, def)
export const professional = (user, field, def = '') => getField(user, 'professionalDetails', field, def)
export const pref = (user, field, def = '') => getField(user, 'preferences', field, def)
export const meta = (user, field, def = '') => getField(user, 'systemMetaData', field, def)

// Array-safe accessor (returns [] as default instead of '')
export const getArrayField = (user, section, field) => {
  const val = user?.[section]?.[field] ?? user?.[field]
  return Array.isArray(val) ? val : []
}

// ─── Display Name Helpers ───

export function getUserDisplayName(user) {
  if (!user) return 'Alumni Member'

  const firstName = personal(user, 'firstName')
  const middleName = personal(user, 'middleName')
  const lastName = personal(user, 'lastName')
  const constructed = [firstName, middleName, lastName].filter(Boolean).join(' ').trim()

  let name = personal(user, 'name')
  if (!name || name === 'Alumni Member' || name === 'Alumni') {
    if (constructed) {
      name = constructed
    } else {
      const email = contact(user, 'email')
      name = email ? email.split('@')[0] : 'Alumni Member'
    }
  }
  return name
}

export function getUserFirstName(user) {
  if (!user) return ''
  const firstName = personal(user, 'firstName')
  if (firstName && firstName !== 'Alumni' && firstName !== 'Alumni Member') {
    return firstName
  }
  const name = getUserDisplayName(user)
  if (name && name !== 'Alumni Member' && name !== 'Alumni') {
    return name.split(' ')[0]
  }
  return ''
}

// ─── Build Firestore Document (nested sections only, no flat root duplication) ───

export function buildUserDoc(data = {}) {
  // Helper: pick from top-level data (e.g. form fields) or fallback to nested section bucket (e.g. existing user doc)
  const getVal = (section, field, def = '') => {
    if (data[field] !== undefined && data[field] !== null) {
      return data[field]
    }
    if (data[section] && data[section][field] !== undefined && data[section][field] !== null) {
      return data[section][field]
    }
    return def
  }

  const getBool = (section, field, def = false) => {
    if (typeof data[field] === 'boolean') {
      return data[field]
    }
    if (data[section] && typeof data[section][field] === 'boolean') {
      return data[section][field]
    }
    if (data[field] !== undefined && data[field] !== null) {
      return Boolean(data[field])
    }
    if (data[section] && data[section][field] !== undefined && data[section][field] !== null) {
      return Boolean(data[section][field])
    }
    return def
  }

  const getArr = (section, field) => {
    if (Array.isArray(data[field])) {
      return data[field]
    }
    if (data[section] && Array.isArray(data[section][field])) {
      return data[section][field]
    }
    return []
  }

  // Derive full name
  const firstName = getVal('personalDetails', 'firstName')
  const middleName = getVal('personalDetails', 'middleName')
  const lastName = getVal('personalDetails', 'lastName')
  let name = getVal('personalDetails', 'name')
  if (!name || name === 'Alumni Member' || name === 'Alumni') {
    const constructed = [firstName, middleName, lastName].filter(Boolean).join(' ').trim()
    if (constructed) name = constructed
  }

  return {
    personalDetails: {
      firstName,
      middleName,
      lastName,
      name,
      gender: getVal('personalDetails', 'gender'),
      dob: getVal('personalDetails', 'dob'),
      dom: getVal('personalDetails', 'dom'),
      bloodGroup: getVal('personalDetails', 'bloodGroup'),
      city: getVal('personalDetails', 'city'),
      state: getVal('personalDetails', 'state'),
      country: getVal('personalDetails', 'country'),
      hobbies: getArr('personalDetails', 'hobbies'),
      otherHobbies: getVal('personalDetails', 'otherHobbies')
    },
    contactDetails: {
      email: getVal('contactDetails', 'email'),
      phone: getVal('contactDetails', 'phone'),
      secondaryPhone: getVal('contactDetails', 'secondaryPhone'),
      whatsapp: getVal('contactDetails', 'whatsapp')
    },
    academicDetails: {
      userType: getVal('academicDetails', 'userType'),
      admissionYear: getVal('academicDetails', 'admissionYear'),
      passoutYear: getVal('academicDetails', 'passoutYear') || getVal('academicDetails', 'batch'),
      diplomaNotCompleted: getBool('academicDetails', 'diplomaNotCompleted'),
      degrees: getArr('academicDetails', 'degrees'),
      certifications: getArr('academicDetails', 'certifications')
    },
    professionalDetails: {
      jobTitle: getVal('professionalDetails', 'jobTitle'),
      company: getVal('professionalDetails', 'company'),
      profession: getVal('professionalDetails', 'profession'),
      department: getVal('professionalDetails', 'department'),
      division: getVal('professionalDetails', 'division'),
      companyWebsite: getVal('professionalDetails', 'companyWebsite'),
      companyCity: getVal('professionalDetails', 'companyCity'),
      companyState: getVal('professionalDetails', 'companyState'),
      companyCountry: getVal('professionalDetails', 'companyCountry'),
      workingSinceMonth: getVal('professionalDetails', 'workingSinceMonth'),
      workingSinceYear: getVal('professionalDetails', 'workingSinceYear'),
      workingSince: getVal('professionalDetails', 'workingSince'),
      workExperience: getVal('professionalDetails', 'workExperience'),
      lastPromotionDesignation: getVal('professionalDetails', 'lastPromotionDesignation'),
      lastPromotionMonth: getVal('professionalDetails', 'lastPromotionMonth'),
      lastPromotionYear: getVal('professionalDetails', 'lastPromotionYear'),
      awards: getArr('professionalDetails', 'awards'),
      productServices: getArr('professionalDetails', 'productServices'),
      otherProductServices: getVal('professionalDetails', 'otherProductServices'),
      linkedin: getVal('professionalDetails', 'linkedin')
    },
    preferences: {
      consentEmail: getBool('preferences', 'consentEmail'),
      consentPhone: getBool('preferences', 'consentPhone'),
      consentWhatsapp: getBool('preferences', 'consentWhatsapp'),
      consentLinkedin: getBool('preferences', 'consentLinkedin')
    },
    systemMetaData: {
      account_type: getVal('systemMetaData', 'account_type', 'alumni'),
      verification_status: getBool('systemMetaData', 'verification_status', false),
      createdAt: getVal('systemMetaData', 'createdAt') || new Date().toISOString(),
      profilePhotoUrl: getVal('systemMetaData', 'profilePhotoUrl'),
      cvUrl: getVal('systemMetaData', 'cvUrl') || getVal('systemMetaData', 'cvBase64'),
      cvFileName: getVal('systemMetaData', 'cvFileName')
    }
  }
}

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
  FaTimesCircle,
  FaCheckCircle,
  FaClock,
  FaPhone,
  FaWhatsapp,
  FaHeart,
  FaLinkedin,
  FaPlus,
  FaTrash,
  FaCertificate,
  FaGlobe,
  FaBoxOpen,
  FaMapMarkerAlt,
  FaSitemap,
  FaAward,
  FaFilePdf
} from 'react-icons/fa'
import { uploadPdfToDrive } from '../utils/googleDriveUpload'
import { buildUserDoc, personal, contact, academic, professional, meta, pref, getArrayField, getUserDisplayName } from '../utils/userHelpers'
import { auth, db, isFirebaseConfigured } from '../firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import CountryAutocomplete from '../components/CountryAutocomplete'
import StateAutocomplete from '../components/StateAutocomplete'
import CityAutocomplete from '../components/CityAutocomplete'
import CompanyAutocomplete from '../components/CompanyAutocomplete'
import CvDropzone from '../components/CvDropzone'
import FullPageLoader from '../components/FullPageLoader'
import './Profile.css'
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

const MONTH_OPTIONS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const PROMOTION_YEAR_OPTIONS = Array.from({ length: new Date().getFullYear() - 1980 + 1 }, (_, i) => String(new Date().getFullYear() - i));

const parseWorkingSince = (dataObj) => {
  if (!dataObj) return { workingSinceMonth: '', workingSinceYear: '' };
  const m = dataObj.workingSinceMonth || '';
  const y = dataObj.workingSinceYear || '';
  if (m || y) {
    return { workingSinceMonth: m, workingSinceYear: y };
  }
  const str = dataObj.workingSince || '';
  if (!str) return { workingSinceMonth: '', workingSinceYear: '' };

  const parts = str.trim().split(/[\s\-]+/);
  if (parts.length >= 2) {
    if (/^\d{4}$/.test(parts[0])) {
      const year = parts[0];
      const mNum = parseInt(parts[1], 10);
      const month = (!isNaN(mNum) && mNum >= 1 && mNum <= 12) ? MONTH_OPTIONS[mNum - 1] : parts[1];
      return { workingSinceMonth: month, workingSinceYear: year };
    } else if (/^\d{4}$/.test(parts[1])) {
      return { workingSinceMonth: parts[0], workingSinceYear: parts[1] };
    }
  } else if (parts.length === 1 && /^\d{4}$/.test(parts[0])) {
    return { workingSinceMonth: '', workingSinceYear: parts[0] };
  }
  return { workingSinceMonth: '', workingSinceYear: '' };
};

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

// Form options imported from src/data/formdata.js

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
    admissionYear: '',
    passoutYear: '',
    diplomaNotCompleted: false,
    jobTitle: '',
    company: '',
    linkedin: '',
    dom: '',
    verification_status: false,
    account_type: 'alumni',
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
    cvFileName: ''
  })

  const [originalForm, setOriginalForm] = useState({
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
    admissionYear: '',
    passoutYear: '',
    diplomaNotCompleted: false,
    jobTitle: '',
    company: '',
    linkedin: '',
    dom: '',
    verification_status: false,
    account_type: 'alumni',
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
    cvFileName: ''
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
            const displayName = getUserDisplayName(data)
            const nameSplit = (displayName || personal(user, 'name') || '').split(' ')
            const defaultFirstName = personal(data, 'firstName') || nameSplit[0] || ''
            const defaultLastName = personal(data, 'lastName') || nameSplit.slice(1).join(' ') || ''

            const parsedPhone = parsePhoneNumber(contact(data, 'phone'))
            const parsedSecPhone = parsePhoneNumber(contact(data, 'secondaryPhone'))
            const parsedWhatsapp = parsePhoneNumber(contact(data, 'whatsapp'))

            // Let's parse productServices
            const rawPS = getArrayField(data, 'professionalDetails', 'productServices')
            let loadedProductServices = rawPS.length > 0 ? rawPS : getArrayField(user, 'professionalDetails', 'productServices')

            // Let's parse certifications
            const rawCerts = getArrayField(data, 'academicDetails', 'certifications')
            let loadedCertifications = rawCerts.length > 0 ? rawCerts : []

            const wsData = { workingSinceMonth: professional(data, 'workingSinceMonth'), workingSinceYear: professional(data, 'workingSinceYear'), workingSince: professional(data, 'workingSince') }
            const wsUser = { workingSinceMonth: professional(user, 'workingSinceMonth'), workingSinceYear: professional(user, 'workingSinceYear'), workingSince: professional(user, 'workingSince') }

            const loadedData = {
              firstName: defaultFirstName,
              middleName: personal(data, 'middleName') || personal(user, 'middleName') || '',
              lastName: defaultLastName,
              email: contact(data, 'email') || contact(user, 'email') || '',
              gender: personal(data, 'gender') || personal(user, 'gender') || '',
              dob: formatDob(personal(data, 'dob')),
              phoneCode: parsedPhone.code,
              phone: parsedPhone.number,
              secondaryPhoneCode: parsedSecPhone.code,
              secondaryPhone: parsedSecPhone.number,
              whatsappCode: parsedWhatsapp.code,
              whatsapp: parsedWhatsapp.number,
              userType: academic(data, 'userType') || academic(user, 'userType') || '',
              bloodGroup: personal(data, 'bloodGroup') || personal(user, 'bloodGroup') || '',
              admissionYear: academic(data, 'admissionYear') || '',
              passoutYear: academic(data, 'passoutYear') || '',
              diplomaNotCompleted: academic(data, 'diplomaNotCompleted') || false,
              jobTitle: professional(data, 'jobTitle') || '',
              company: professional(data, 'company') || '',
              linkedin: professional(data, 'linkedin') || '',
              dom: formatDob(personal(data, 'dom')),
              verification_status: meta(data, 'verification_status', false),
              account_type: meta(data, 'account_type', 'alumni'),
              degrees: getArrayField(data, 'academicDetails', 'degrees'),
              profession: professional(data, 'profession') || professional(user, 'profession') || '',
              companyWebsite: professional(data, 'companyWebsite') || professional(user, 'companyWebsite') || '',

              // Additional fields
              city: personal(data, 'city') || personal(user, 'city') || '',
              state: personal(data, 'state') || personal(user, 'state') || '',
              country: personal(data, 'country') || personal(user, 'country') || '',
              certifications: loadedCertifications,
              productServices: loadedProductServices,
              otherProductServices: professional(data, 'otherProductServices') || professional(user, 'otherProductServices') || '',
              department: professional(data, 'department') || professional(user, 'department') || '',
              division: professional(data, 'division') || professional(user, 'division') || '',
              workingSince: professional(data, 'workingSince') || professional(user, 'workingSince') || '',
              workingSinceMonth: parseWorkingSince(wsData).workingSinceMonth || parseWorkingSince(wsUser).workingSinceMonth || '',
              workingSinceYear: parseWorkingSince(wsData).workingSinceYear || parseWorkingSince(wsUser).workingSinceYear || '',
              companyCity: professional(data, 'companyCity') || professional(user, 'companyCity') || '',
              companyState: professional(data, 'companyState') || professional(user, 'companyState') || '',
              companyCountry: professional(data, 'companyCountry') || professional(user, 'companyCountry') || '',
              lastPromotionDesignation: professional(data, 'lastPromotionDesignation') || professional(user, 'lastPromotionDesignation') || '',
              lastPromotionMonth: professional(data, 'lastPromotionMonth') || professional(user, 'lastPromotionMonth') || '',
              lastPromotionYear: professional(data, 'lastPromotionYear') || professional(user, 'lastPromotionYear') || '',
              awards: getArrayField(data, 'professionalDetails', 'awards').length > 0 ? getArrayField(data, 'professionalDetails', 'awards') : getArrayField(user, 'professionalDetails', 'awards'),
              hobbies: getArrayField(data, 'personalDetails', 'hobbies').length > 0 ? getArrayField(data, 'personalDetails', 'hobbies') : getArrayField(user, 'personalDetails', 'hobbies'),
              otherHobbies: personal(data, 'otherHobbies') || personal(user, 'otherHobbies') || '',
              workExperience: professional(data, 'workExperience') || professional(user, 'workExperience') || '',
              consentEmail: Boolean(pref(data, 'consentEmail', false)),
              consentPhone: Boolean(pref(data, 'consentPhone', false)),
              consentWhatsapp: Boolean(pref(data, 'consentWhatsapp', false)),
              cvBase64: meta(data, 'cvBase64') || meta(user, 'cvBase64') || '',
              cvFileName: meta(data, 'cvFileName') || meta(user, 'cvFileName') || ''
            }
            setProfileForm(loadedData)
            setOriginalForm(loadedData)
          } else {
            // Document doesn't exist yet, seed with basic login info
            const displayName = getUserDisplayName(user)
            const nameSplit = (displayName || '').split(' ')
            const parsedPhone = parsePhoneNumber(contact(user, 'phone'))
            const parsedSecPhone = parsePhoneNumber(contact(user, 'secondaryPhone'))
            const parsedWhatsapp = parsePhoneNumber(contact(user, 'whatsapp'))

            const loadedProductServices = getArrayField(user, 'professionalDetails', 'productServices')
            const loadedCertifications = getArrayField(user, 'academicDetails', 'certifications')
            const wsUser = { workingSinceMonth: professional(user, 'workingSinceMonth'), workingSinceYear: professional(user, 'workingSinceYear'), workingSince: professional(user, 'workingSince') }

            const seedData = {
              firstName: personal(user, 'firstName') || nameSplit[0] || '',
              middleName: personal(user, 'middleName') || '',
              lastName: personal(user, 'lastName') || nameSplit.slice(1).join(' ') || '',
              email: contact(user, 'email') || '',
              gender: personal(user, 'gender') || '',
              dob: '',
              phoneCode: parsedPhone.code,
              phone: parsedPhone.number,
              secondaryPhoneCode: parsedSecPhone.code,
              secondaryPhone: parsedSecPhone.number,
              whatsappCode: parsedWhatsapp.code,
              whatsapp: parsedWhatsapp.number,
              userType: academic(user, 'userType') || '',
              bloodGroup: personal(user, 'bloodGroup') || '',
              admissionYear: academic(user, 'admissionYear') || '',
              passoutYear: academic(user, 'passoutYear') || '',
              diplomaNotCompleted: academic(user, 'diplomaNotCompleted') || false,
              jobTitle: professional(user, 'jobTitle') || '',
              company: professional(user, 'company') || '',
              linkedin: professional(user, 'linkedin') || '',
              dom: '',
              verification_status: meta(user, 'verification_status', false),
              account_type: meta(user, 'account_type', 'alumni'),
              degrees: getArrayField(user, 'academicDetails', 'degrees'),
              profession: professional(user, 'profession') || '',
              companyWebsite: professional(user, 'companyWebsite') || '',

              city: personal(user, 'city') || '',
              state: personal(user, 'state') || '',
              country: personal(user, 'country') || '',
              certifications: loadedCertifications,
              productServices: loadedProductServices,
              otherProductServices: professional(user, 'otherProductServices') || '',
              department: professional(user, 'department') || '',
              division: professional(user, 'division') || '',
              workingSince: professional(user, 'workingSince') || '',
              workingSinceMonth: parseWorkingSince(wsUser).workingSinceMonth || '',
              workingSinceYear: parseWorkingSince(wsUser).workingSinceYear || '',
              companyCity: professional(user, 'companyCity') || '',
              companyState: professional(user, 'companyState') || '',
              companyCountry: professional(user, 'companyCountry') || '',
              lastPromotionDesignation: professional(user, 'lastPromotionDesignation') || '',
              lastPromotionMonth: professional(user, 'lastPromotionMonth') || '',
              lastPromotionYear: professional(user, 'lastPromotionYear') || '',
              awards: getArrayField(user, 'professionalDetails', 'awards'),
              hobbies: getArrayField(user, 'personalDetails', 'hobbies'),
              otherHobbies: personal(user, 'otherHobbies') || '',
              workExperience: professional(user, 'workExperience') || '',
              consentEmail: Boolean(pref(user, 'consentEmail', false)),
              consentPhone: Boolean(pref(user, 'consentPhone', false)),
              consentWhatsapp: Boolean(pref(user, 'consentWhatsapp', false)),
              cvBase64: meta(user, 'cvBase64') || '',
              cvFileName: meta(user, 'cvFileName') || ''
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
            const parsedPhone = parsePhoneNumber(parsed.phone)
            const parsedSecPhone = parsePhoneNumber(parsed.secondaryPhone)
            const parsedWhatsapp = parsePhoneNumber(parsed.whatsapp)

            // Let's parse productServices
            let loadedProductServices = [];
            if (Array.isArray(parsed.productServices)) {
              loadedProductServices = parsed.productServices;
            } else if (parsed.productServices) {
              loadedProductServices = [parsed.productServices];
            }

            // Let's parse certifications
            let loadedCertifications = [];
            if (Array.isArray(parsed.certifications)) {
              loadedCertifications = parsed.certifications;
            } else if (parsed.areaOfCertification) {
              loadedCertifications = [{ area: parsed.areaOfCertification, detail: '' }];
            }

            const mockData = {
              firstName: parsed.firstName || nameSplit[0] || '',
              middleName: parsed.middleName || '',
              lastName: parsed.lastName || nameSplit.slice(1).join(' ') || '',
              email: parsed.email || '',
              gender: parsed.gender || '',
              dob: formatDob(parsed.dob),
              phoneCode: parsedPhone.code,
              phone: parsedPhone.number,
              secondaryPhoneCode: parsedSecPhone.code,
              secondaryPhone: parsedSecPhone.number,
              whatsappCode: parsedWhatsapp.code,
              whatsapp: parsedWhatsapp.number,
              userType: parsed.userType || '',
              bloodGroup: parsed.bloodGroup || '',
              admissionYear: parsed.admissionYear || '',
              passoutYear: parsed.passoutYear || parsed.batch || '',
              diplomaNotCompleted: parsed.diplomaNotCompleted || false,
              jobTitle: parsed.jobTitle || '',
              company: parsed.company || '',
              linkedin: parsed.linkedin || '',
              dom: formatDob(parsed.dom),
              verification_status: parsed.verification_status !== undefined ? parsed.verification_status : false,
              account_type: parsed.account_type || 'alumni',
              degrees: parsed.degrees || [],
              profession: parsed.profession || '',
              companyWebsite: parsed.companyWebsite || '',

              // New fields
              city: parsed.city || '',
              state: parsed.state || '',
              country: parsed.country || '',
              certifications: loadedCertifications,
              productServices: loadedProductServices,
              otherProductServices: parsed.otherProductServices || '',
              department: parsed.department || '',
              division: parsed.division || '',
              workingSince: parsed.workingSince || '',
              workingSinceMonth: parseWorkingSince(parsed).workingSinceMonth || '',
              workingSinceYear: parseWorkingSince(parsed).workingSinceYear || '',
              companyCity: parsed.companyCity || '',
              companyState: parsed.companyState || '',
              companyCountry: parsed.companyCountry || '',
              lastPromotionDesignation: parsed.lastPromotionDesignation || '',
              lastPromotionMonth: parsed.lastPromotionMonth || '',
              lastPromotionYear: parsed.lastPromotionYear || '',
              awards: parsed.awards || [],
              hobbies: parsed.hobbies || [],
              consentEmail: (parsed.consentEmail !== undefined || parsed.consentPhone !== undefined || parsed.consentWhatsapp !== undefined) ? Boolean(parsed.consentEmail) : Boolean(parsed.consentAlumniSearch ?? false),
              consentPhone: (parsed.consentEmail !== undefined || parsed.consentPhone !== undefined || parsed.consentWhatsapp !== undefined) ? Boolean(parsed.consentPhone) : Boolean(parsed.consentAlumniSearch ?? false),
              consentWhatsapp: (parsed.consentEmail !== undefined || parsed.consentPhone !== undefined || parsed.consentWhatsapp !== undefined) ? Boolean(parsed.consentWhatsapp) : Boolean(parsed.consentAlumniSearch ?? false),
              cvBase64: parsed.cvBase64 || '',
              cvFileName: parsed.cvFileName || ''
            }
            setProfileForm(mockData)
            setOriginalForm(mockData)
            setFetching(false)
            return
          }
        }

        // Default layout load fallback
        const displayName = getUserDisplayName(user)
        const nameSplit = (displayName || '').split(' ')
        const parsedPhone = parsePhoneNumber(contact(user, 'phone'))
        const parsedSecPhone = parsePhoneNumber(contact(user, 'secondaryPhone'))
        const parsedWhatsapp = parsePhoneNumber(contact(user, 'whatsapp'))

        const loadedProductServices = getArrayField(user, 'professionalDetails', 'productServices')
        const loadedCertifications = getArrayField(user, 'academicDetails', 'certifications')

        const fallbackData = {
          firstName: personal(user, 'firstName') || nameSplit[0] || '',
          middleName: personal(user, 'middleName') || '',
          lastName: personal(user, 'lastName') || nameSplit.slice(1).join(' ') || '',
          email: contact(user, 'email') || '',
          gender: personal(user, 'gender') || '',
          dob: formatDob(personal(user, 'dob')),
          phoneCode: parsedPhone.code,
          phone: parsedPhone.number,
          secondaryPhoneCode: parsedSecPhone.code,
          secondaryPhone: parsedSecPhone.number,
          whatsappCode: parsedWhatsapp.code,
          whatsapp: parsedWhatsapp.number,
          userType: academic(user, 'userType') || '',
          bloodGroup: personal(user, 'bloodGroup') || '',
          admissionYear: academic(user, 'admissionYear') || '',
          passoutYear: academic(user, 'passoutYear') || '',
          diplomaNotCompleted: academic(user, 'diplomaNotCompleted') || false,
          jobTitle: professional(user, 'jobTitle') || '',
          company: professional(user, 'company') || '',
          linkedin: professional(user, 'linkedin') || '',
          dom: formatDob(personal(user, 'dom')),
          verification_status: meta(user, 'verification_status', false),
          account_type: meta(user, 'account_type', 'alumni'),
          degrees: getArrayField(user, 'academicDetails', 'degrees'),
          profession: professional(user, 'profession') || '',
          companyWebsite: professional(user, 'companyWebsite') || '',

          city: personal(user, 'city') || '',
          state: personal(user, 'state') || '',
          country: personal(user, 'country') || '',
          certifications: loadedCertifications,
          productServices: loadedProductServices,
          otherProductServices: professional(user, 'otherProductServices') || '',
          department: professional(user, 'department') || '',
          division: professional(user, 'division') || '',
          workingSince: professional(user, 'workingSince') || '',
          companyCity: professional(user, 'companyCity') || '',
          companyState: professional(user, 'companyState') || '',
          companyCountry: professional(user, 'companyCountry') || '',
          lastPromotionDesignation: professional(user, 'lastPromotionDesignation') || '',
          lastPromotionMonth: professional(user, 'lastPromotionMonth') || '',
          lastPromotionYear: professional(user, 'lastPromotionYear') || '',
          awards: getArrayField(user, 'professionalDetails', 'awards'),
          hobbies: getArrayField(user, 'personalDetails', 'hobbies'),
          otherHobbies: personal(user, 'otherHobbies') || '',
          workExperience: professional(user, 'workExperience') || ''
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

  // Auto-clear error toast after 5 seconds to match fade-out animation
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('')
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [error])

  const capitalizeWords = (str) => {
    if (!str || typeof str !== 'string') return str;
    return str.replace(/\b[a-zA-Z]+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  };

  const handleCvFileSelect = (file, base64) => {
    setProfileForm(prev => ({
      ...prev,
      cvBase64: base64,
      cvFileName: file ? file.name : '',
      cvFile: file
    }))
  }

  const handleCvFileRemove = () => {
    setProfileForm(prev => ({
      ...prev,
      cvBase64: '',
      cvUrl: '',
      cvFileName: '',
      cvFile: null
    }))
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target // Extract type and checked
    let cleanValue = ['phone', 'secondaryPhone', 'whatsapp', 'workExperience'].includes(name)
      ? value.replace(/\D/g, '')
      : value;

    if (['firstName', 'middleName', 'lastName'].includes(name) && typeof cleanValue === 'string') {
      cleanValue = capitalizeWords(cleanValue);
    }

    setProfileForm(prev => {
      const updated = {
        ...prev,
        [name]: type === 'checkbox' ? checked : cleanValue // Handle checkbox
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

      // Calculate target passout year only if diploma is not checked
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
      // Clear passout year if checkbox gets ticked
      if (name === 'diplomaNotCompleted' && checked) {
        updated.passoutYear = ''
      }
      return updated
    })
  }

  const handleAddDegree = () => {
    setProfileForm(prev => ({
      ...prev,
      degrees: [...(prev.degrees || []), { degree: '', domain: '' }]
    }))
  }

  const handleRemoveDegree = (index) => {
    setProfileForm(prev => ({
      ...prev,
      degrees: (prev.degrees || []).filter((_, i) => i !== index)
    }))
  }

  const handleDegreeChange = (index, field, val) => {
    setProfileForm(prev => {
      const updatedDegrees = [...(prev.degrees || [])]
      updatedDegrees[index] = { ...updatedDegrees[index], [field]: val }
      return {
        ...prev,
        degrees: updatedDegrees
      }
    })
  }

  const handleAddCertification = () => {
    setProfileForm(prev => ({
      ...prev,
      certifications: [...(prev.certifications || []), { area: '', detail: '' }]
    }))
  }

  const handleRemoveCertification = (index) => {
    setProfileForm(prev => ({
      ...prev,
      certifications: (prev.certifications || []).filter((_, i) => i !== index)
    }))
  }

  const handleCertificationChange = (index, field, val) => {
    setProfileForm(prev => {
      const updated = [...(prev.certifications || [])]
      updated[index] = { ...updated[index], [field]: val }
      return {
        ...prev,
        certifications: updated
      }
    })
  }

  const handleMultiSelectChange = (name, val) => {
    setProfileForm(prev => {
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
    setProfileForm(prev => ({
      ...prev,
      awards: [...(prev.awards || []), '']
    }))
  }

  const handleRemoveAward = (index) => {
    setProfileForm(prev => ({
      ...prev,
      awards: (prev.awards || []).filter((_, i) => i !== index)
    }))
  }

  const handleAwardChange = (index, val) => {
    setProfileForm(prev => {
      const updated = [...(prev.awards || [])]
      updated[index] = val
      return {
        ...prev,
        awards: updated
      }
    })
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
      setError('First name and last name fields are compulsory.')
      return
    }

    if (!profileForm.phone.trim()) {
      setError('Primary Contact number is compulsory.')
      return
    }

    if (!profileForm.gender) {
      setError('Gender is compulsory.')
      return
    }

    if (!profileForm.consentEmail && !profileForm.consentPhone && !profileForm.consentWhatsapp) {
      setError('Please select at least one detail (Email ID, Mobile Number, or WhatsApp Number) to show on the Alumni Portal.')
      return
    }

    if (!profileForm.userType) {
      setError('Please select whether you are a DFT Alumni or Student.')
      return
    }

    const admYear = parseInt(profileForm.admissionYear, 10)
    const passYear = parseInt(profileForm.passoutYear, 10)
    const currentYear = new Date().getFullYear()

    if (isNaN(admYear) || admYear < 1970 || admYear > currentYear + 6) {
      setError(`Please enter a valid DFT Admission Year (e.g. 1970 - ${currentYear + 6}).`)
      return
    }

    // Only validate passout year if the checkbox is NOT ticked
    if (!profileForm.diplomaNotCompleted) {
      if (isNaN(passYear) || passYear < 1970 || passYear > currentYear + 6) {
        setError(`Please enter a valid DFT Passout Year (e.g. 1970 - ${currentYear + 6}).`)
        return
      }

      if (admYear > passYear) {
        setError('DFT Admission Year cannot be after DFT Passout Year.')
        return
      }
    }

    if (profileForm.userType === 'Alumni') {
      if (!profileForm.company || !profileForm.company.trim()) {
        setError('Please select or enter your Current Organization.')
        return
      }
      if (!profileForm.department || !profileForm.department.trim()) {
        setError('Please enter your Department.')
        return
      }
      if (!profileForm.jobTitle || !profileForm.jobTitle.trim()) {
        setError('Please enter your Current Job Title (Designation).')
        return
      }
      if (!profileForm.workingSinceMonth || !profileForm.workingSinceYear) {
        setError('Please select both Working Since Month and Year.')
        return
      }
      if (!profileForm.companyWebsite || !profileForm.companyWebsite.trim()) {
        setError('Please enter your Company Website.')
        return
      }
      if (!profileForm.companyCity || !profileForm.companyCity.trim()) {
        setError('Please select/enter Company Location (City).')
        return
      }
      if (!profileForm.companyState || !profileForm.companyState.trim()) {
        setError('Please select/enter Company Location (State).')
        return
      }
      if (!profileForm.companyCountry || !profileForm.companyCountry.trim()) {
        setError('Please select/enter Company Location (Country).')
        return
      }
      if (!profileForm.productServices || profileForm.productServices.length === 0) {
        setError('Please select at least one Product/Service offered by your company.')
        return
      }
    }

    setLoading(true)

    const cleanFirstName = capitalizeWords(profileForm.firstName.trim());
    const cleanMiddleName = capitalizeWords(profileForm.middleName.trim());
    const cleanLastName = capitalizeWords(profileForm.lastName.trim());
    const cleanFullName = [cleanFirstName, cleanMiddleName, cleanLastName].filter(Boolean).join(' ');
    const uid = user ? (user.uid || (auth.currentUser ? auth.currentUser.uid : null)) : null

    let finalCvUrl = profileForm.cvBase64 || ''
    if (profileForm.cvFile) {
      try {
        const cvRes = await uploadPdfToDrive(profileForm.cvFile, `${uid || 'Alumni'}_CV.pdf`, uid || '')
        if (cvRes && cvRes.fileUrl) {
          finalCvUrl = cvRes.fileUrl
        }
      } catch (cvErr) {
        console.warn('Google Drive CV upload failed in Profile:', cvErr)
      }
    }

    const rawProfilePayload = {
      ...user,
      email: profileForm.email || contact(user, 'email') || user.email || '',
      verification_status: meta(user, 'verification_status', false),
      account_type: meta(user, 'account_type', 'alumni'),
      createdAt: meta(user, 'createdAt', ''),
      firstName: cleanFirstName,
      middleName: cleanMiddleName,
      lastName: cleanLastName,
      name: cleanFullName,
      gender: profileForm.gender || '',
      dob: profileForm.dob,
      phone: `${profileForm.phoneCode} ${profileForm.phone}`.trim(),
      secondaryPhone: profileForm.secondaryPhone ? `${profileForm.secondaryPhoneCode} ${profileForm.secondaryPhone}`.trim() : '',
      whatsapp: `${profileForm.whatsappCode} ${profileForm.whatsapp}`.trim(),
      userType: profileForm.userType,
      bloodGroup: profileForm.bloodGroup,
      admissionYear: profileForm.admissionYear,
      passoutYear: profileForm.passoutYear,
      diplomaNotCompleted: profileForm.diplomaNotCompleted || false,
      degrees: profileForm.degrees || [],
      jobTitle: profileForm.jobTitle.trim(),
      company: profileForm.company.trim(),
      linkedin: profileForm.linkedin.trim(),
      dom: profileForm.dom,
      profession: profileForm.profession || '',
      companyWebsite: profileForm.companyWebsite || '',
      city: profileForm.city.trim(),
      state: profileForm.state.trim(),
      country: profileForm.country.trim(),
      certifications: profileForm.certifications || [],
      productServices: profileForm.productServices || [],
      otherProductServices: profileForm.productServices.includes('Others') ? profileForm.otherProductServices || '' : '',
      department: profileForm.department.trim(),
      division: profileForm.division.trim(),
      workingSinceMonth: profileForm.workingSinceMonth || '',
      workingSinceYear: profileForm.workingSinceYear || '',
      workingSince: (profileForm.workingSinceMonth && profileForm.workingSinceYear) ? `${profileForm.workingSinceMonth} ${profileForm.workingSinceYear}` : (profileForm.workingSince || ''),
      companyCity: profileForm.companyCity.trim(),
      companyState: profileForm.companyState.trim(),
      companyCountry: profileForm.companyCountry.trim(),
      lastPromotionDesignation: profileForm.lastPromotionDesignation.trim(),
      lastPromotionMonth: profileForm.lastPromotionMonth,
      lastPromotionYear: profileForm.lastPromotionYear,
      awards: profileForm.awards || [],
      hobbies: profileForm.hobbies || [],
      otherHobbies: profileForm.hobbies.includes('Others') ? profileForm.otherHobbies || '' : '',
      workExperience: profileForm.workExperience ? profileForm.workExperience.trim() : '',
      consentEmail: profileForm.consentEmail || false,
      consentPhone: profileForm.consentPhone || false,
      consentWhatsapp: profileForm.consentWhatsapp || false,
      cvUrl: finalCvUrl,
      cvFileName: profileForm.cvFileName || ''
    }

    const nestedDocToSave = buildUserDoc(rawProfilePayload)
    // Build section-structured user object for the app session
    const savedUserForSession = { uid, ...nestedDocToSave }

    const updatedFormState = {
      ...profileForm,
      firstName: cleanFirstName,
      middleName: cleanMiddleName,
      lastName: cleanLastName,
      name: cleanFullName,
      jobTitle: profileForm.jobTitle.trim(),
      company: profileForm.company.trim(),
      linkedin: profileForm.linkedin.trim(),
      city: profileForm.city.trim(),
      state: profileForm.state.trim(),
      country: profileForm.country.trim(),
      department: profileForm.department.trim(),
      division: profileForm.division.trim(),
      companyCity: profileForm.companyCity.trim(),
      companyState: profileForm.companyState.trim(),
      companyCountry: profileForm.companyCountry.trim(),
      lastPromotionDesignation: profileForm.lastPromotionDesignation.trim(),
      workExperience: profileForm.workExperience ? profileForm.workExperience.trim() : '',
      workingSince: (profileForm.workingSinceMonth && profileForm.workingSinceYear) ? `${profileForm.workingSinceMonth} ${profileForm.workingSinceYear}` : (profileForm.workingSince || ''),
      cvUrl: finalCvUrl,
      cvBase64: finalCvUrl
    }

    if (isFirebaseConfigured && uid) {
      try {
        const userDocRef = doc(db, 'users', uid)
        await setDoc(userDocRef, nestedDocToSave, { merge: true })

        if (profileForm.company && profileForm.company.trim()) {
          try {
            await setDoc(doc(db, 'companies', profileForm.company.trim().toLowerCase()), {
              name: profileForm.company.trim()
            }, { merge: true })
          } catch (compErr) {
            console.warn('Failed to save company name to collection:', compErr)
          }
        }

        // Keep the password-reset lookup doc in sync with any phone/email changes
        const emailHashKey = await hashEmail(user.email) // account email — not editable here
        const phoneHash = await hashPhoneDigits(rawProfilePayload.phone)
        const secPhoneHash = rawProfilePayload.secondaryPhone ? await hashPhoneDigits(rawProfilePayload.secondaryPhone) : ''
        const whatsappHash = await hashPhoneDigits(rawProfilePayload.whatsapp)

        await setDoc(doc(db, 'passwordResetLookup', emailHashKey), {
          uid,
          phoneHash,
          secPhoneHash,
          whatsappHash
        }, { merge: true })

        // Propagate updates up to the App session state
        onUpdateUser(savedUserForSession)
        setProfileForm(updatedFormState)
        setOriginalForm(updatedFormState)

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
              ...savedUserForSession
            }
            localStorage.setItem('mockRegisteredAlumni', JSON.stringify(updatedMock))
          }
        }

        // Propagate updates
        onUpdateUser(savedUserForSession)
        setProfileForm(updatedFormState)
        setOriginalForm(updatedFormState)

        setSuccess('Profile updated successfully! (Mock Mode)')
        setIsEditing(false)
        setLoading(false)
      }, 1000)
    }
  }

  const hasChanges = originalForm ? (
    profileForm.firstName !== originalForm.firstName ||
    profileForm.middleName !== originalForm.middleName ||
    profileForm.lastName !== originalForm.lastName ||
    profileForm.gender !== originalForm.gender ||
    profileForm.dob !== originalForm.dob ||
    profileForm.phoneCode !== originalForm.phoneCode ||
    profileForm.phone !== originalForm.phone ||
    profileForm.secondaryPhoneCode !== originalForm.secondaryPhoneCode ||
    profileForm.secondaryPhone !== originalForm.secondaryPhone ||
    profileForm.whatsappCode !== originalForm.whatsappCode ||
    profileForm.whatsapp !== originalForm.whatsapp ||
    profileForm.userType !== originalForm.userType ||
    profileForm.bloodGroup !== originalForm.bloodGroup ||
    profileForm.admissionYear !== originalForm.admissionYear ||
    profileForm.passoutYear !== originalForm.passoutYear ||
    profileForm.diplomaNotCompleted !== originalForm.diplomaNotCompleted ||
    profileForm.jobTitle !== originalForm.jobTitle ||
    profileForm.company !== originalForm.company ||
    profileForm.linkedin !== originalForm.linkedin ||
    profileForm.dom !== originalForm.dom ||
    profileForm.profession !== originalForm.profession ||
    profileForm.companyWebsite !== originalForm.companyWebsite ||
    profileForm.city !== originalForm.city ||
    profileForm.state !== originalForm.state ||
    profileForm.country !== originalForm.country ||
    profileForm.department !== originalForm.department ||
    profileForm.division !== originalForm.division ||
    profileForm.workingSinceMonth !== originalForm.workingSinceMonth ||
    profileForm.workingSinceYear !== originalForm.workingSinceYear ||
    profileForm.companyCity !== originalForm.companyCity ||
    profileForm.companyState !== originalForm.companyState ||
    profileForm.companyCountry !== originalForm.companyCountry ||
    profileForm.lastPromotionDesignation !== originalForm.lastPromotionDesignation ||
    profileForm.lastPromotionMonth !== originalForm.lastPromotionMonth ||
    profileForm.lastPromotionYear !== originalForm.lastPromotionYear ||
    JSON.stringify(profileForm.degrees || []) !== JSON.stringify(originalForm.degrees || []) ||
    JSON.stringify(profileForm.certifications || []) !== JSON.stringify(originalForm.certifications || []) ||
    JSON.stringify(profileForm.productServices || []) !== JSON.stringify(originalForm.productServices || []) ||
    profileForm.otherProductServices !== originalForm.otherProductServices ||
    JSON.stringify(profileForm.awards || []) !== JSON.stringify(originalForm.awards || []) ||
    JSON.stringify(profileForm.hobbies || []) !== JSON.stringify(originalForm.hobbies || []) ||
    profileForm.otherHobbies !== originalForm.otherHobbies ||
    profileForm.consentEmail !== originalForm.consentEmail ||
    profileForm.consentPhone !== originalForm.consentPhone ||
    profileForm.consentWhatsapp !== originalForm.consentWhatsapp ||
    profileForm.cvBase64 !== originalForm.cvBase64 ||
    profileForm.workExperience !== originalForm.workExperience
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

      <div className="profile-toast-container">
        {error && (
          <div className="profile-alert profile-alert--error" role="alert">
            <FaTimesCircle className="profile-alert__icon" />
            <span>{error}</span>
            <button
              type="button"
              className="profile-alert__close"
              onClick={() => setError('')}
              aria-label="Dismiss"
            >
              &times;
            </button>
          </div>
        )}

        {success && (
          <div className="profile-alert profile-alert--success" role="status">
            <FaCheckCircle className="profile-alert__icon" />
            <span>{success}</span>
            <button
              type="button"
              className="profile-alert__close"
              onClick={() => setSuccess('')}
              aria-label="Dismiss"
            >
              &times;
            </button>
          </div>
        )}
      </div>

      <div className="profile-container">
        {/* Back Link */}
        <button className="profile-back-link" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back
        </button>

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
                <span className="profile-meta-label">Primary Contact Number</span>
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
                  Edit Profile
                </button>
              )}
            </div>

            {fetching ? (
              <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
                <div className="profile-spinner" style={{ borderTopColor: 'var(--navy-deep)', width: '32px', height: '32px', borderWidth: '3px' }}></div>
              </div>
            ) : (
              <form className="profile-form" onSubmit={handleSubmit}>
                <p style={{ fontSize: '13px', color: 'var(--slate)', marginBottom: '14px', fontWeight: '500' }}>
                  Fields marked with <span style={{ color: 'var(--signal-red)', fontWeight: 'bold' }}>*</span> are mandatory
                </p>
                <h4 className="profile-form__section-title">Personal Details</h4>
                <div className="profile-form__grid-3">
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
                    <label htmlFor="prof-middle-name">Middle Name</label>
                    <div className="profile-field__input-wrap">
                      <FaUser className="profile-field__icon" />
                      <input
                        id="prof-middle-name"
                        type="text"
                        name="middleName"
                        value={profileForm.middleName}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
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
                    <label htmlFor="prof-email">Email Address <span className="profile-field__required">*</span></label>
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

                  <div className="profile-field">
                    <label htmlFor="prof-gender">Gender <span className="profile-field__required">*</span></label>
                    <div className="profile-field__input-wrap">
                      <FaUser className="profile-field__icon" />
                      <select
                        id="prof-gender"
                        name="gender"
                        value={profileForm.gender}
                        onChange={handleInputChange}
                        required
                        disabled={!isEditing || loading}
                      >
                        <option value="">Select Gender</option>
                        {GENDER_OPTIONS.map(g => <option key={g} value={g}>{g}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="profile-form__grid">
                  <div className="profile-field">
                    <label htmlFor="prof-bloodgroup">Blood Group</label>
                    <div className="profile-field__input-wrap">
                      <FaHeart className="profile-field__icon" />
                      <select
                        id="prof-bloodgroup"
                        name="bloodGroup"
                        value={profileForm.bloodGroup}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
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
                </div>

                <div className="profile-form__grid">
                  <div className="profile-field">
                    <label htmlFor="prof-dom">Date of Marriage</label>
                    <div className="profile-field__input-wrap">
                      <FaCalendarAlt className="profile-field__icon" />
                      <input
                        id="prof-dom"
                        type="date"
                        name="dom"
                        value={profileForm.dom}
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
                    <label htmlFor="prof-phone">Primary Contact Number <span className="profile-field__required">*</span></label>
                    <div className="profile-field__input-wrap phone-input-wrap">
                      <span className={`fi fi-${getCountryIso(profileForm.phoneCode)} profile-field__icon`}></span>

                      {/* ADD THIS SPAN */}
                      <span className="phone-selected-text">{profileForm.phoneCode}</span>

                      <select
                        className="phone-country-select"
                        name="phoneCode"
                        value={profileForm.phoneCode}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                      >
                        {countryCodes.map((c, idx) => <option key={`${c.code}-${c.iso || idx}`} value={c.code}>{c.label}</option>)}
                      </select>
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
                    <div className="profile-field__input-wrap phone-input-wrap">
                      <span className={`fi fi-${getCountryIso(profileForm.secondaryPhoneCode)} profile-field__icon`}></span>

                      {/* ADD THIS SPAN */}
                      <span className="phone-selected-text">{profileForm.secondaryPhoneCode}</span>

                      <select
                        className="phone-country-select"
                        name="secondaryPhoneCode"
                        value={profileForm.secondaryPhoneCode}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                      >
                        {countryCodes.map((c, idx) => <option key={`${c.code}-${c.iso || idx}`} value={c.code}>{c.label}</option>)}
                      </select>
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
                    <div className="profile-field__input-wrap phone-input-wrap">
                      <span className={`fi fi-${getCountryIso(profileForm.whatsappCode)} profile-field__icon`}></span>

                      {/* ADD THIS SPAN */}
                      <span className="phone-selected-text">{profileForm.whatsappCode}</span>

                      <select
                        className="phone-country-select"
                        name="whatsappCode"
                        value={profileForm.whatsappCode}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                      >
                        {countryCodes.map((c, idx) => <option key={`${c.code}-${c.iso || idx}`} value={c.code}>{c.label}</option>)}
                      </select>
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

                <div className="profile-form__grid-3" style={{ marginTop: '15px' }}>
                  <div className="profile-field">
                    <label htmlFor="prof-city">Native (City)</label>
                    <CityAutocomplete
                      id="prof-city"
                      name="city"
                      value={profileForm.city}
                      state={profileForm.state}
                      onChange={handleInputChange}
                      disabled={!isEditing || loading}
                      placeholder="No Data Provided"
                      wrapClassName="profile-field__input-wrap"
                    />
                  </div>
                  <div className="profile-field">
                    <label htmlFor="prof-state">Native (State)</label>
                    <StateAutocomplete
                      id="prof-state"
                      name="state"
                      value={profileForm.state}
                      country={profileForm.country}
                      onChange={handleInputChange}
                      disabled={!isEditing || loading}
                      placeholder="No Data Provided"
                      wrapClassName="profile-field__input-wrap"
                    />
                  </div>
                  <div className="profile-field">
                    <label htmlFor="prof-country">Native (Country)</label>
                    <CountryAutocomplete
                      id="prof-country"
                      name="country"
                      value={profileForm.country}
                      onChange={handleInputChange}
                      disabled={!isEditing || loading}
                      placeholder="No Data Provided"
                      wrapClassName="profile-field__input-wrap"
                    />
                  </div>
                </div>

                <h4 className="profile-form__section-title" style={{ marginTop: '20px' }}>Academic Details</h4>
                <div className="profile-form__grid">
                  <div className="profile-field profile-field--full">
                    <label htmlFor="prof-usertype">Are you DFT Alumni or Student <span className="profile-field__required">*</span></label>
                    <div className="profile-field__input-wrap">
                      <FaUser className="profile-field__icon" />
                      <select
                        id="prof-usertype"
                        name="userType"
                        value={profileForm.userType}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        required
                      >
                        <option value="">Select Option</option>
                        <option value="Alumni">DFT Alumni</option>
                        <option value="Student">Student</option>
                      </select>
                    </div>
                  </div>

                  <div className="profile-field">
                    <label htmlFor="prof-admission">DFT Admission Year <span className="profile-field__required">*</span></label>
                    <div className="profile-field__input-wrap">
                      <FaCalendarAlt className="profile-field__icon" />
                      <select
                        id="prof-admission"
                        name="admissionYear"
                        value={profileForm.admissionYear}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        required
                      >
                        <option value="">Select Year</option>
                        {ACADEMIC_YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="profile-field">
                    <label htmlFor="prof-passout">
                      DFT Passout Year
                      {!profileForm.diplomaNotCompleted && <span className="profile-field__required">*</span>}
                    </label>
                    <div className="profile-field__input-wrap">
                      <FaCalendarAlt className="profile-field__icon" />
                      <select
                        id="prof-passout"
                        name="passoutYear"
                        value={profileForm.passoutYear}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading || profileForm.diplomaNotCompleted}
                        required={!profileForm.diplomaNotCompleted}
                      >
                        <option value="">Select Year</option>
                        {ACADEMIC_YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                      </select>
                    </div>

                    <label className="checkbox-option" style={{ marginTop: '10px', cursor: (!isEditing || loading) ? 'default' : 'pointer' }}>
                      <input
                        type="checkbox"
                        name="diplomaNotCompleted"
                        checked={profileForm.diplomaNotCompleted || false}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                      />
                      <span>I have not yet completed my diploma / Passout Year is not applicable</span>
                    </label>
                  </div>
                </div>

                {/* Previous Academic Details list */}
                {((profileForm.degrees || []).length > 0) && (
                  <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--slate)' }}>
                      Previous Academic Details
                    </label>
                    {(profileForm.degrees || []).map((deg, index) => (
                      <div key={index} className={isEditing ? "previous-degree-row" : "profile-form__grid"}>
                        <div className="profile-field">
                          <label htmlFor={`prof-deg-title-${index}`}>Degree <span className="profile-field__required">*</span></label>
                          <div className="profile-field__input-wrap">
                            <FaGraduationCap className="profile-field__icon" />
                            <select
                              id={`prof-deg-title-${index}`}
                              name="degree"
                              value={deg.degree}
                              onChange={(e) => handleDegreeChange(index, 'degree', e.target.value)}
                              required
                              disabled={!isEditing || loading}
                            >
                              <option value="">Select Degree</option>
                              {DEGREE_OPTIONS.map(d => <option key={d} value={d}>{d}</option>)}
                            </select>
                          </div>
                        </div>

                        <div className="profile-field">
                          <label htmlFor={`prof-deg-domain-${index}`}>Domain <span className="profile-field__required">*</span></label>
                          <div className="profile-field__input-wrap">
                            <FaGraduationCap className="profile-field__icon" />
                            <input
                              id={`prof-deg-domain-${index}`}
                              type="text"
                              placeholder="Domain (e.g. Textile Technology)"
                              value={deg.domain}
                              onChange={(e) => handleDegreeChange(index, 'domain', e.target.value)}
                              required
                              disabled={!isEditing || loading}
                            />
                          </div>
                        </div>

                        {isEditing && (
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
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Add Degree Button */}
                {isEditing && (
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
                )}

                <h4 className="profile-form__section-title" style={{ marginTop: '20px' }}>Professional Details</h4>
                <div className="profile-form__grid">
                  {/* Profession dropdown [Two-col] */}
                  <div className="profile-field profile-field--full">
                    <label htmlFor="prof-profession">Profession</label>
                    <div className="profile-field__input-wrap">
                      <FaBriefcase className="profile-field__icon" />
                      <select
                        id="prof-profession"
                        name="profession"
                        value={profileForm.profession}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                      >
                        <option value="">Select Profession</option>
                        <option value="Business">Business</option>
                        <option value="Job">Job</option>
                      </select>
                    </div>
                  </div>

                  <div className="profile-field">
                    <label htmlFor="prof-work-experience">Total Work Experience (Years)</label>
                    <div className="profile-field__input-wrap">
                      <FaBriefcase className="profile-field__icon" />
                      <input
                        id="prof-work-experience"
                        type="text"
                        inputMode="numeric"
                        name="workExperience"
                        value={profileForm.workExperience}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        placeholder={!isEditing && !profileForm.workExperience ? "No Data Provided" : PLACEHOLDERS.workExperience}
                      />
                    </div>
                  </div>

                  <div className="profile-field">
                    <label htmlFor="prof-linkedin">LinkedIn Profile Link</label>
                    <div className="profile-field__input-wrap">
                      <FaLinkedin className="profile-field__icon" style={{ color: isEditing ? '#0077b5' : 'var(--slate)' }} />
                      <input
                        id="prof-linkedin"
                        type="text"
                        name="linkedin"
                        value={profileForm.linkedin}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>

                  <div className="profile-field profile-field--full">
                    <CvDropzone
                      label="Resume / CV"
                      cvFile={profileForm.cvFile}
                      cvFileName={profileForm.cvFileName}
                      cvUrl={profileForm.cvUrl || profileForm.cvBase64}
                      onFileSelect={handleCvFileSelect}
                      onFileRemove={handleCvFileRemove}
                      disabled={loading}
                      isEditing={isEditing}
                      setError={setError}
                    />
                  </div>
                </div>                <h4 className="profile-form__section-title" style={{ marginTop: '24px' }}>
                  Company Details {profileForm.userType === 'Student' && <span style={{ fontSize: '0.8rem', color: 'var(--slate)', fontWeight: 'normal', textTransform: 'none' }}>(Not applicable for Students)</span>}
                </h4>
                <div className="profile-form__grid">
                  <div className="profile-field profile-field--full">
                    <label htmlFor="prof-company">Current Organization {profileForm.userType === 'Alumni' && <span className="profile-field__required">*</span>}</label>
                    <CompanyAutocomplete
                      id="prof-company"
                      name="company"
                      value={profileForm.company}
                      onChange={handleInputChange}
                      disabled={!isEditing || loading || profileForm.userType === 'Student'}
                      required={isEditing && profileForm.userType === 'Alumni'}
                      placeholder={!isEditing && !profileForm.company ? "No Data Provided" : "Select or type company name"}
                      wrapClassName="profile-field__input-wrap"
                    />
                  </div>

                  <div className="profile-field">
                    <label htmlFor="prof-department">Department {profileForm.userType === 'Alumni' && <span className="profile-field__required">*</span>}</label>
                    <div className="profile-field__input-wrap">
                      <FaSitemap className="profile-field__icon" />
                      <input
                        id="prof-department"
                        type="text"
                        name="department"
                        value={profileForm.department}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading || profileForm.userType === 'Student'}
                        required={isEditing && profileForm.userType === 'Alumni'}
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>

                  <div className="profile-field">
                    <label htmlFor="prof-division">Division</label>
                    <div className="profile-field__input-wrap">
                      <FaSitemap className="profile-field__icon" />
                      <input
                        id="prof-division"
                        type="text"
                        name="division"
                        value={profileForm.division}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading || profileForm.userType === 'Student'}
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>

                  <div className="profile-field">
                    <label htmlFor="prof-job-title">Current Job Title (Designation) {profileForm.userType === 'Alumni' && <span className="profile-field__required">*</span>}</label>
                    <div className="profile-field__input-wrap">
                      <FaBriefcase className="profile-field__icon" />
                      <input
                        id="prof-job-title"
                        type="text"
                        name="jobTitle"
                        value={profileForm.jobTitle}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading || profileForm.userType === 'Student'}
                        required={isEditing && profileForm.userType === 'Alumni'}
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>

                  <div className="profile-field">
                    <label>Working Since (Month / Year) {profileForm.userType === 'Alumni' && <span className="profile-field__required">*</span>}</label>
                    <div className="profile-form__row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', padding: 0, margin: 0, border: 'none' }}>
                      <div className="profile-field__input-wrap">
                        <FaCalendarAlt className="profile-field__icon" />
                        <select
                          name="workingSinceMonth"
                          value={profileForm.workingSinceMonth}
                          onChange={handleInputChange}
                          disabled={!isEditing || loading || profileForm.userType === 'Student'}
                          required={isEditing && profileForm.userType === 'Alumni'}
                          style={{ paddingLeft: '42px' }}
                        >
                          <option value="">Select Month</option>
                          {MONTH_OPTIONS.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                      </div>
                      <div className="profile-field__input-wrap">
                        <FaCalendarAlt className="profile-field__icon" />
                        <select
                          name="workingSinceYear"
                          value={profileForm.workingSinceYear}
                          onChange={handleInputChange}
                          disabled={!isEditing || loading || profileForm.userType === 'Student'}
                          required={isEditing && profileForm.userType === 'Alumni'}
                          style={{ paddingLeft: '42px' }}
                        >
                          <option value="">Select Year</option>
                          {PROMOTION_YEAR_OPTIONS.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="profile-field profile-field--full">
                    <label htmlFor="prof-company-website">Company Website {profileForm.userType === 'Alumni' && <span className="profile-field__required">*</span>}</label>
                    <div className="profile-field__input-wrap">
                      <FaGlobe className="profile-field__icon" style={{ color: isEditing ? 'var(--slate)' : 'var(--line-grey)' }} />
                      <input
                        id="prof-company-website"
                        type="text"
                        name="companyWebsite"
                        value={profileForm.companyWebsite}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading || profileForm.userType === 'Student'}
                        required={isEditing && profileForm.userType === 'Alumni'}
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>
                </div>

                <div className="profile-form__grid-3" style={{ marginTop: '10px' }}>
                  <div className="profile-field">
                    <label htmlFor="prof-company-city">Company Location (City) {profileForm.userType === 'Alumni' && <span className="profile-field__required">*</span>}</label>
                    <CityAutocomplete
                      id="prof-company-city"
                      name="companyCity"
                      value={profileForm.companyCity}
                      state={profileForm.companyState}
                      onChange={handleInputChange}
                      disabled={!isEditing || loading || profileForm.userType === 'Student'}
                      placeholder="No Data Provided"
                      wrapClassName="profile-field__input-wrap"
                    />
                  </div>
                  <div className="profile-field">
                    <label htmlFor="prof-company-state">Company Location (State) {profileForm.userType === 'Alumni' && <span className="profile-field__required">*</span>}</label>
                    <StateAutocomplete
                      id="prof-company-state"
                      name="companyState"
                      value={profileForm.companyState}
                      country={profileForm.companyCountry}
                      onChange={handleInputChange}
                      disabled={!isEditing || loading || profileForm.userType === 'Student'}
                      placeholder="No Data Provided"
                      wrapClassName="profile-field__input-wrap"
                    />
                  </div>
                  <div className="profile-field">
                    <label htmlFor="prof-company-country">Company Location (Country) {profileForm.userType === 'Alumni' && <span className="profile-field__required">*</span>}</label>
                    <CountryAutocomplete
                      id="prof-company-country"
                      name="companyCountry"
                      value={profileForm.companyCountry}
                      onChange={handleInputChange}
                      disabled={!isEditing || loading || profileForm.userType === 'Student'}
                      placeholder="No Data Provided"
                      wrapClassName="profile-field__input-wrap"
                    />
                  </div>
                </div>

                <div className="profile-form__grid" style={{ marginTop: '10px' }}>
                  <div className="profile-field profile-field--full">
                    <label>Detail of Product / Services offered by your Company {profileForm.userType === 'Alumni' && <span className="profile-field__required">*</span>}</label>
                    <div className="profile-field__input-wrap">
                      {isEditing ? (
                        <div className="product-services-checkbox-group">
                          {PRODUCT_SERVICE_OPTIONS.map(opt => {
                            const isChecked = (profileForm.productServices || []).includes(opt)
                            return (
                              <label key={opt} className="checkbox-option" style={{ cursor: (loading || profileForm.userType === 'Student') ? 'not-allowed' : 'pointer' }}>
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => handleMultiSelectChange('productServices', opt)}
                                  disabled={loading || profileForm.userType === 'Student'}
                                />
                                <span>{opt}</span>
                              </label>
                            )
                          })}
                        </div>
                      ) : (
                        <div className="profile-field__view-value" style={{ minHeight: '44px', display: 'flex', alignItems: 'center', background: 'var(--fog-grey)', border: '1px solid var(--line-grey)', borderRadius: '4px', padding: '10px 14px', fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy-deep)', width: '100%', boxSizing: 'border-box' }}>
                          {profileForm.productServices && profileForm.productServices.length > 0 ? (
                            profileForm.productServices.map((val) => val === 'Others' && profileForm.otherProductServices ? `Others (${profileForm.otherProductServices})` : val).join(', ')
                          ) : (
                            'No Data Provided'
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {profileForm.productServices.includes('Others') && (
                    <div className="profile-field profile-field--full" style={{ marginTop: '10px' }}>
                      <label htmlFor="prof-other-product-services">Please specify other products/services {isEditing && <span className="profile-field__required">*</span>}</label>
                      <div className="profile-field__input-wrap">
                        <FaBoxOpen className="profile-field__icon" style={{ color: isEditing ? 'var(--slate)' : 'var(--line-grey)' }} />
                        <input
                          id="prof-other-product-services"
                          type="text"
                          name="otherProductServices"
                          placeholder="Enter details of other products/services offered"
                          value={profileForm.otherProductServices}
                          onChange={handleInputChange}
                          disabled={!isEditing || loading || profileForm.userType === 'Student'}
                          required={isEditing}
                          style={{
                            width: '100%',
                            padding: '10px 14px 10px 42px',
                            background: isEditing ? 'var(--paper-white)' : 'var(--fog-grey)',
                            border: '1px solid var(--line-grey)',
                            borderRadius: '4px',
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.82rem',
                            fontWeight: '600',
                            color: 'var(--navy-deep)',
                            boxSizing: 'border-box'
                          }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="profile-field">
                    <label htmlFor="prof-last-promotion">Last Received Promotion (Designation)</label>
                    <div className="profile-field__input-wrap">
                      <FaAward className="profile-field__icon" />
                      <input
                        id="prof-last-promotion"
                        type="text"
                        name="lastPromotionDesignation"
                        value={profileForm.lastPromotionDesignation}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading || profileForm.userType === 'Student'}
                        placeholder="No Data Provided"
                      />
                    </div>
                  </div>

                  <div className="profile-field">
                    <label>Last Promotion Received Date (Month / Year)</label>
                    <div className="profile-form__grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', padding: 0, margin: 0, border: 'none' }}>
                      <div className="profile-field__input-wrap">
                        <FaCalendarAlt className="profile-field__icon" />
                        <select
                          name="lastPromotionMonth"
                          value={profileForm.lastPromotionMonth}
                          onChange={handleInputChange}
                          disabled={!isEditing || loading || profileForm.userType === 'Student'}
                          style={{ paddingLeft: '42px' }}
                        >
                          <option value="">Select Month</option>
                          {MONTH_OPTIONS.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                      </div>
                      <div className="profile-field__input-wrap">
                        <FaCalendarAlt className="profile-field__icon" />
                        <select
                          name="lastPromotionYear"
                          value={profileForm.lastPromotionYear}
                          onChange={handleInputChange}
                          disabled={!isEditing || loading || profileForm.userType === 'Student'}
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
                  {((profileForm.certifications || []).length > 0) ? (
                    (profileForm.certifications || []).map((cert, index) => (
                      <div key={index} className={isEditing ? "previous-degree-row" : "profile-form__grid"}>
                        <div className="profile-field">
                          <label htmlFor={`prof-cert-area-${index}`}>Area of Certification / Qualification</label>
                          <div className="profile-field__input-wrap">
                            <FaCertificate className="profile-field__icon" style={{ color: isEditing ? 'var(--slate)' : 'var(--line-grey)' }} />
                            <select
                              id={`prof-cert-area-${index}`}
                              name="area"
                              value={cert.area}
                              onChange={(e) => handleCertificationChange(index, 'area', e.target.value)}
                              disabled={!isEditing || loading}
                            >
                              <option value="">Select Area</option>
                              {CERTIFICATION_OPTIONS.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                          </div>
                        </div>

                        <div className="profile-field">
                          <label htmlFor={`prof-cert-detail-${index}`}>About the Certification / Qualification Detail</label>
                          <div className="profile-field__input-wrap">
                            <FaBriefcase className="profile-field__icon" />
                            <input
                              id={`prof-cert-detail-${index}`}
                              type="text"
                              value={cert.detail}
                              onChange={(e) => handleCertificationChange(index, 'detail', e.target.value)}
                              disabled={!isEditing || loading}
                              placeholder="No Data Provided"
                            />
                          </div>
                        </div>

                        {isEditing && (
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
                        )}
                      </div>
                    ))
                  ) : (
                    <div style={{ fontSize: '0.85rem', color: 'var(--slate)', fontStyle: 'italic' }}>No Certifications / Qualifications added.</div>
                  )}
                </div>

                {/* Add Certification Button */}
                {isEditing && (
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
                )}

                {/* Awards list */}
                <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--slate)' }}>
                    Details of Award received from Government, Company, Professional Association etc.
                  </label>
                  {((profileForm.awards || []).length > 0) ? (
                    (profileForm.awards || []).map((award, index) => (
                      <div key={index} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <div className="profile-field" style={{ flex: 1 }}>
                          <div className="profile-field__input-wrap">
                            <FaAward className="profile-field__icon" />
                            <input
                              type="text"
                              value={award}
                              onChange={(e) => handleAwardChange(index, e.target.value)}
                              disabled={!isEditing || loading}
                              placeholder="No Data Provided"
                            />
                          </div>
                        </div>
                        {isEditing && (
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
                        )}
                      </div>
                    ))
                  ) : (
                    <div style={{ fontSize: '0.85rem', color: 'var(--slate)', fontStyle: 'italic' }}>No Awards added.</div>
                  )}
                </div>

                {/* Add Award Button */}
                {isEditing && (
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
                )}

                {/* Interest / Hobby checkbox grid */}
                <div className="profile-field profile-field--full" style={{ marginTop: '15px', marginBottom: '20px' }}>
                  <label>Interest / Hobby</label>
                  <div className="profile-field__input-wrap" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
                    {isEditing ? (
                      <>
                        <div className="product-services-checkbox-group">
                          {HOBBY_OPTIONS.map(opt => {
                            const isChecked = (profileForm.hobbies || []).includes(opt)
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
                        {(profileForm.hobbies || []).includes('Others') && (
                          <div className="profile-field__input-wrap" style={{ marginTop: '12px' }}>
                            <FaHeart className="profile-field__icon" />
                            <input
                              type="text"
                              name="otherHobbies"
                              placeholder={PLACEHOLDERS.otherHobbies}
                              value={profileForm.otherHobbies}
                              onChange={handleInputChange}
                              disabled={!isEditing || loading}
                            />
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="profile-field__view-value" style={{ minHeight: '44px', display: 'flex', alignItems: 'center', background: 'var(--fog-grey)', border: '1px solid var(--line-grey)', borderRadius: '4px', padding: '10px 14px', fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy-deep)', width: '100%', boxSizing: 'border-box' }}>
                        {profileForm.hobbies && profileForm.hobbies.length > 0 ? (
                          profileForm.hobbies.map(val => val === 'Others' && profileForm.otherHobbies ? `Others (${profileForm.otherHobbies})` : val).join(', ')
                        ) : (
                          'No Data Provided'
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Privacy Consent Section */}
                <h4 className="profile-form__section-title" style={{ marginTop: '24px' }}>Alumni Portal Privacy Consent</h4>
                <div className="profile-field" style={{ margin: '15px 0 20px', padding: '16px', backgroundColor: 'rgba(241, 245, 249, 0.6)', borderRadius: '12px', border: '1px solid var(--line-grey)' }}>
                  <label style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--navy)', display: 'block', marginBottom: '12px' }}>
                    I give my consent to show my below-mentioned details on the Alumni Portal (Click at least one) <span className="profile-field__required">*</span>
                  </label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <label className="profile-checkbox" style={{ cursor: (!isEditing || loading) ? 'not-allowed' : 'pointer' }}>
                      <input
                        type="checkbox"
                        name="consentEmail"
                        checked={profileForm.consentEmail}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                      />
                      <span className="profile-checkbox__box"></span>
                      <span className="profile-checkbox__label">Email ID</span>
                    </label>

                    <label className="profile-checkbox" style={{ cursor: (!isEditing || loading) ? 'not-allowed' : 'pointer' }}>
                      <input
                        type="checkbox"
                        name="consentPhone"
                        checked={profileForm.consentPhone}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                      />
                      <span className="profile-checkbox__box"></span>
                      <span className="profile-checkbox__label">Mobile Number</span>
                    </label>

                    <label className="profile-checkbox" style={{ cursor: (!isEditing || loading) ? 'not-allowed' : 'pointer' }}>
                      <input
                        type="checkbox"
                        name="consentWhatsapp"
                        checked={profileForm.consentWhatsapp}
                        onChange={handleInputChange}
                        disabled={!isEditing || loading}
                      />
                      <span className="profile-checkbox__box"></span>
                      <span className="profile-checkbox__label">WhatsApp Number</span>
                    </label>
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
                      Cancel
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
                          Save Changes
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
      <FullPageLoader
        show={loading}
        title="Saving Changes..."
        subtitle="Please wait while we update your profile and secure files."
      />
    </div>
  )
}
// src/utils/hash.js
//
// Uses the browser's built-in Web Crypto API (crypto.subtle) — no extra
// dependency needed. Requires a secure context (HTTPS or localhost), which
// is already true for any deployed Vite/Firebase Hosting app.

export async function sha256Hex(input) {
    const encoder = new TextEncoder()
    const data = encoder.encode(input)
    const hashBuffer = await crypto.subtle.digest('SHA-256', data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
}

export function normalizeEmail(email) {
    return (email || '').trim().toLowerCase()
}

// Country-code prefixes vary (e.g. "+91 9876543210" vs "9876543210"),
// which previously worked because the app did suffix-matching on raw
// digits. Hashes can't be suffix-matched, so instead we normalize to a
// canonical form BEFORE hashing: strip all non-digits, then keep only
// the last 10 digits (standard mobile number length). This makes
// "+91 9876543210" and "9876543210" hash identically.
export function canonicalPhoneDigits(phone) {
    const digits = (phone || '').replace(/\D/g, '')
    return digits.length > 10 ? digits.slice(-10) : digits
}

export async function hashEmail(email) {
    return sha256Hex(normalizeEmail(email))
}

export async function hashPhoneDigits(phone) {
    const canonical = canonicalPhoneDigits(phone)
    if (!canonical) return ''
    return sha256Hex(canonical)
}
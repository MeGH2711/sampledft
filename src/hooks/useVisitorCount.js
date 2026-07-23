import { useEffect, useState } from 'react'
import { doc, setDoc, onSnapshot, increment } from 'firebase/firestore'
import { db, isFirebaseConfigured } from '../firebase'

// Global in-memory lock to prevent concurrent component mounts from double-incrementing
let hasIncrementedInSession = typeof window !== 'undefined' && !!sessionStorage.getItem('dft_session_visited')
let isIncrementingLock = false

function getTodayStr() {
  const d = new Date()
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function recordVisitOnce() {
  if (hasIncrementedInSession || isIncrementingLock || !isFirebaseConfigured || !db) {
    return
  }

  // Acquire lock synchronously before any async call
  isIncrementingLock = true
  hasIncrementedInSession = true
  try {
    sessionStorage.setItem('dft_session_visited', 'true')
  } catch (e) {
    console.warn('sessionStorage error:', e)
  }

  const todayStr = getTodayStr()
  const statDocRef = doc(db, 'stats', 'site_visits')
  setDoc(
    statDocRef,
    {
      count: increment(1),
      visitsByDate: {
        [todayStr]: increment(1)
      }
    },
    { merge: true }
  )
    .catch((err) => {
      console.warn('Failed to increment visitor count:', err)
    })
    .finally(() => {
      isIncrementingLock = false
    })
}

export default function useVisitorCount() {
  const [visitorStats, setVisitorStats] = useState({
    count: 0,
    visitsByDate: {},
    todayVisits: 0
  })

  useEffect(() => {
    if (!isFirebaseConfigured || !db) return

    // Record visit ONCE per browser session globally
    recordVisitOnce()

    const statDocRef = doc(db, 'stats', 'site_visits')
    const todayStr = getTodayStr()

    // Subscribe to real-time updates from Firestore
    const unsubscribe = onSnapshot(
      statDocRef,
      (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data()
          const visitsByDate = data.visitsByDate || {}

          // Calculate count: use data.count if available, otherwise sum date values
          let count = typeof data.count === 'number' ? data.count : 0
          if (!count && Object.keys(visitsByDate).length > 0) {
            count = Object.values(visitsByDate).reduce((acc, curr) => acc + (Number(curr) || 0), 0)
          }

          const todayVisits = visitsByDate[todayStr] || 0

          setVisitorStats({
            count,
            visitsByDate,
            todayVisits
          })
        }
      },
      (error) => {
        console.warn('Visitor counter subscription warning:', error)
      }
    )

    return () => unsubscribe()
  }, [])

  return visitorStats
}

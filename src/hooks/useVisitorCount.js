import { useEffect, useState } from 'react'
import { doc, setDoc, onSnapshot, increment } from 'firebase/firestore'
import { db, isFirebaseConfigured } from '../firebase'

// Global in-memory lock to prevent concurrent component mounts from double-incrementing
let hasIncrementedInSession = typeof window !== 'undefined' && !!sessionStorage.getItem('dft_session_visited')
let isIncrementingLock = false

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

  const statDocRef = doc(db, 'stats', 'site_visits')
  setDoc(statDocRef, { count: increment(1) }, { merge: true })
    .catch((err) => {
      console.warn('Failed to increment visitor count:', err)
    })
    .finally(() => {
      isIncrementingLock = false
    })
}

export default function useVisitorCount() {
  const [visitorCount, setVisitorCount] = useState(0)

  useEffect(() => {
    if (!isFirebaseConfigured || !db) return

    // Record visit ONCE per browser session globally
    recordVisitOnce()

    const statDocRef = doc(db, 'stats', 'site_visits')

    // Subscribe to real-time updates from Firestore
    const unsubscribe = onSnapshot(
      statDocRef,
      (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data()
          if (typeof data.count === 'number') {
            setVisitorCount(data.count)
          }
        }
      },
      (error) => {
        console.warn('Visitor counter subscription warning:', error)
      }
    )

    return () => unsubscribe()
  }, [])

  return visitorCount
}

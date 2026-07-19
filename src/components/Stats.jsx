import { useEffect, useRef, useState } from 'react'
import { FaUserGraduate, FaCalendarCheck, FaHandshake, FaTrophy } from 'react-icons/fa'
import './Stats.css'

const stats = [
  { icon: <FaUserGraduate />, value: 1700, suffix: '+', label: 'ALUMNI MEMBERS', sub: 'across the globe' },
  { icon: <FaCalendarCheck />, value: 43, suffix: '+', label: 'YEARS OF LEGACY', sub: 'and counting' },
  { icon: <FaHandshake />, value: 120, suffix: '+', label: 'TRUSTED BY SPONSORS', sub: 'across all events' },
  { icon: <FaTrophy />, value: 500, suffix: '+', label: 'qualified alumni', sub: ' with superior qualification in fabrication domain' },
]

function useCountUp(target, duration = 1800, active = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [active, target, duration])
  return count
}

function StatCol({ stat, active, index }) {
  const count = useCountUp(stat.value, 1800, active)
  return (
    <div className="stat-col reveal" style={{ transitionDelay: `${index * 0.12}s` }}>
      <div className="stats__icon">{stat.icon}</div>
      <div className="stat-num">{count}{stat.suffix}</div>
      <div className="stat-lbl">{stat.label}</div>
      <div className="stat-sub">{stat.sub}</div>
    </div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    const el = ref.current
    if (el) observer.observe(el)
    return () => el && observer.unobserve(el)
  }, [])

  return (
    <section className="section stats section-navy" ref={ref}>
      <div className="masthead-bg-lines" style={{ position: 'absolute', inset: 0 }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Section header */}
        <div className="stats__header reveal">
          <span className="eyebrow">BY THE NUMBERS</span>
          <h2 className="stats__title display-title">
            OUR IMPACT
            <span className="stats__title-red"> IN NUMBERS</span>
          </h2>
        </div>

        {/* Stat block (from design-system) */}
        <div className="stats__block">
          {stats.map((stat, i) => (
            <div key={i} style={{ display: 'contents' }}>
              <StatCol stat={stat} active={active} index={i} />
              {i < stats.length - 1 && <div className="stat-divider" />}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
import { FaUserGraduate, FaCalendarCheck, FaHandshake, FaTrophy, FaChartLine } from 'react-icons/fa'
import useVisitorCount from '../hooks/useVisitorCount'
import './Stats.css'

function useCountUp(target, duration = 1800, active = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = Math.max(1, target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [active, target, duration])
  return count
}

export default function Stats() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)
  const visitorCount = useVisitorCount()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    const el = ref.current
    if (el) observer.observe(el)
    return () => el && observer.unobserve(el)
  }, [])

  const countAlumni = useCountUp(1700, 1800, active)
  const countYears = useCountUp(43, 1800, active)
  const countSponsors = useCountUp(120, 1800, active)
  const countQualified = useCountUp(500, 1800, active)
  const countVisits = useCountUp(visitorCount || 1, 1800, active)

  return (
    <section className="section stats section-navy" ref={ref}>
      <div className="masthead-bg-lines" style={{ position: 'absolute', inset: 0 }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Section Header */}
        <div className="stats__header reveal">
          <span className="eyebrow">BY THE NUMBERS</span>
          <h2 className="stats__title display-title">
            OUR IMPACT <span className="stats__title-red">IN NUMBERS</span>
          </h2>
          <p className="stats__subtitle">
            Celebrating decades of excellence, professional growth, and global fabrication leadership.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">

          {/* Bento Card 1: Hero Large (Alumni Members) */}
          <div className="bento-card bento-card--hero reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="bento-card__header">
              <div className="bento-card__badge bento-card__badge--red">
                <FaUserGraduate /> GLOBAL NETWORK
              </div>
              <span className="bento-card__tag">PIONEERS</span>
            </div>
            <div className="bento-card__body">
              <div className="bento-card__stat-huge">
                {countAlumni.toLocaleString()}<span className="bento-card__plus">+</span>
              </div>
              <h3 className="bento-card__title">ALUMNI MEMBERS WORLDWIDE</h3>
              <p className="bento-card__desc">
                Connecting graduates spanning across top engineering industries, fabrication MNCs, research, and academia globally.
              </p>
            </div>
            <div className="bento-card__accent-glow red" />
          </div>

          {/* Bento Card 2: Legacy (43+ Years) */}
          <div className="bento-card bento-card--legacy reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="bento-card__header">
              <div className="bento-card__badge bento-card__badge--gold">
                <FaCalendarCheck /> EST. 1983
              </div>
            </div>
            <div className="bento-card__body">
              <div className="bento-card__stat-large">
                {countYears.toLocaleString()}<span className="bento-card__plus">+</span>
              </div>
              <h3 className="bento-card__title">YEARS OF LEGACY</h3>
              <p className="bento-card__desc">Unbroken tradition of technical excellence and industry leadership.</p>
            </div>
            <div className="bento-card__accent-glow gold" />
          </div>

          {/* Bento Card 3: Trusted Sponsors */}
          <div className="bento-card bento-card--sponsor reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="bento-card__header">
              <div className="bento-card__badge bento-card__badge--blue">
                <FaHandshake /> PARTNERSHIPS
              </div>
            </div>
            <div className="bento-card__body">
              <div className="bento-card__stat-med">
                {countSponsors.toLocaleString()}<span className="bento-card__plus">+</span>
              </div>
              <h3 className="bento-card__title">TRUSTED SPONSORS</h3>
              <p className="bento-card__desc">Partnering across flagship alumni meets and industrial conventions.</p>
            </div>
            <div className="bento-card__accent-glow blue" />
          </div>

          {/* Bento Card 4: Qualified Alumni */}
          <div className="bento-card bento-card--specialist reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="bento-card__header">
              <div className="bento-card__badge bento-card__badge--purple">
                <FaTrophy /> EXPERTISE
              </div>
            </div>
            <div className="bento-card__body">
              <div className="bento-card__stat-med">
                {countQualified.toLocaleString()}<span className="bento-card__plus">+</span>
              </div>
              <h3 className="bento-card__title">QUALIFIED ALUMNI</h3>
              <p className="bento-card__desc">Specialized experts certified in NDT, welding, corrosion & piping domain.</p>
            </div>
            <div className="bento-card__accent-glow purple" />
          </div>

          {/* Bento Card 5: Real-time Site Traffic (Live) */}
          <div className="bento-card bento-card--live reveal" style={{ transitionDelay: '0.5s' }}>
            <div className="bento-card__header">
              <div className="bento-card__badge bento-card__badge--green">
                <FaChartLine /> REAL-TIME TRAFFIC
              </div>
              <div className="bento-card__pulse-pill">
                <span className="bento-card__pulse-dot" /> LIVE
              </div>
            </div>
            <div className="bento-card__body">
              <div className="bento-card__stat-med">
                {countVisits.toLocaleString()}<span className="bento-card__plus">+</span>
              </div>
              <h3 className="bento-card__title">TOTAL SITE VISITS</h3>
              <p className="bento-card__desc">Live platform visitors interacting across our portal till now.</p>
            </div>
            <div className="bento-card__accent-glow green" />
          </div>

        </div>

      </div>
    </section>
  )
}

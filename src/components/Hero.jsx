import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-scroll'
import { FaArrowRight, FaChevronDown } from 'react-icons/fa'
import heroSlide1 from '../assets/Meet2023/img90.7da26a7b0531a14f219e.png'
import heroSlide2 from '../assets/Sangaath2024/AJY_6412.avif'
import heroSlide3 from '../assets/Meet2023/img34.9ab305e8ae48ca6fb887.png'
import './Hero.css'

const slides = [
  {
    image: heroSlide1,
    eyebrow: 'DFT ALUMNI · SIR BHAVSINHJI POLYTECHNIC, BHAVNAGAR',
    title: 'CONNECTED',
    titleAccent: 'BY LEGACY.',
    sub: 'Thousands of DFT graduates united across India and beyond. Relive your memories, reconnect with batchmates, and carry the torch forward.',
    cta1: { label: 'EXPLORE MORE', to: 'about' },
    cta2: { label: 'OUR COMMITTEE', to: 'committee' },
  },
  {
    image: heroSlide2,
    eyebrow: 'DFT ALUMNI · GIVING BACK TO ALMA MATER',
    title: 'EMPOWER THE',
    titleAccent: 'NEXT BATCH.',
    sub: 'Mentor students, share your journey, and invest in the future of Fabrication Technology. Your experience is their blueprint.',
    cta1: { label: 'JOIN NOW', to: 'contact' },
    cta2: { label: 'VIEW GALLERY', to: 'gallery' },
  },
  {
    image: heroSlide3,
    eyebrow: 'DFT ALUMNI · SANGAM 2026 · VADODARA',
    title: 'WHERE MEMORIES',
    titleAccent: 'COME ALIVE.',
    sub: 'From convocation halls to annual Sangam — we celebrate every milestone, every reunion, every achievement together.',
    cta1: { label: 'GET IN TOUCH', to: 'contact' },
    cta2: { label: 'SEE GALLERY', to: 'gallery' },
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [animState, setAnimState] = useState('in') // 'in' | 'out'

  const goTo = useCallback(
    (i) => {
      if (i === current || animState === 'out') return
      setAnimState('out')
      setTimeout(() => {
        setCurrent(i)
        setAnimState('in')
      }, 400)
    },
    [current, animState]
  )

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimState('out')
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length)
        setAnimState('in')
      }, 400)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <section className="hero" id="home">
      {/* ── Full-bleed background images with crossfade ── */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`hero__bg-slide ${i === current ? 'hero__bg-slide--active' : ''}`}
        >
          <img src={s.image} alt="" className="hero__bg-img" />
        </div>
      ))}
      <div className="hero__bg-overlay" />

      {/* ── Geometric accents ── */}
      <div className="hero__accent-grid" />
      <div className="hero__accent-diagonal" />
      <div className="hero__accent-corner" />

      {/* ── Repeating line texture ── */}
      <div className="masthead-bg-lines" />

      {/* ── Main content ── */}
      <div className="container hero__inner">
        {/* Left: Text content */}
        <div className="hero__content">
          <div className="hero__text-container">
            {slides.map((s, i) => (
              <div
                key={i}
                className={`hero__text ${i === current ? `hero__text--active hero__text--${animState}` : 'hero__text--inactive'}`}
              >
                <div className="hero__badge">
                  <span className="hero__badge-text">{s.eyebrow}</span>
                </div>

                <h1 className="hero__title">
                  {s.title}
                  <span className="hero__title-accent">{s.titleAccent}</span>
                </h1>

                <p className="hero__sub">{s.sub}</p>

                <div className="hero__actions">
                  <Link
                    to={s.cta1.to}
                    smooth
                    duration={700}
                    offset={-80}
                    className="hero__btn hero__btn--primary"
                  >
                    <span>{s.cta1.label}</span>
                    <FaArrowRight className="hero__btn-icon" />
                  </Link>
                  <Link
                    to={s.cta2.to}
                    smooth
                    duration={700}
                    offset={-80}
                    className="hero__btn hero__btn--outline"
                  >
                    {s.cta2.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image showcase */}
        <div className="hero__showcase">
          <div className="hero__showcase-frame">
            {slides.map((s, i) => (
              <img
                key={i}
                src={s.image}
                alt="DFT Alumni"
                className={`hero__showcase-img ${i === current ? 'hero__showcase-img--active' : ''}`}
              />
            ))}
            <div className="hero__showcase-border" />
          </div>
          {/* Decorative floating badge */}
          <div className="hero__showcase-badge">
            <span className="hero__showcase-badge-year">EST.</span>
            <span className="hero__showcase-badge-num">1983</span>
          </div>
        </div>
      </div>

      {/* ── Slide progress & dots ── */}
      <div className="hero__controls">
        <div className="hero__progress">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            >
              <span className="hero__dot-fill" />
              <span className="hero__dot-num">{String(i + 1).padStart(2, '0')}</span>
            </button>
          ))}
        </div>
        <div className="hero__slide-counter">
          <span className="hero__slide-current">{String(current + 1).padStart(2, '0')}</span>
          <span className="hero__slide-sep">/</span>
          <span className="hero__slide-total">{String(slides.length).padStart(2, '0')}</span>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <Link to="about" smooth duration={700} offset={-80} className="hero__scroll">
        <span className="hero__scroll-text">SCROLL</span>
        <div className="hero__scroll-line" />
        <FaChevronDown className="hero__scroll-chevron" />
      </Link>
    </section>
  )
}

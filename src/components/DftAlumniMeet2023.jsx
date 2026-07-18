import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes, FaChevronLeft, FaChevronRight, FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './DftAlumniMeet2023.css'

// Dynamically import all images starting with 'img' inside Meet2023 folder
const imageModules = import.meta.glob('../assets/Meet2023/img*.{png,jpg,jpeg,webp}', { eager: true })

const items = Object.entries(imageModules)
  .map(([path, module]) => {
    const filename = path.split('/').pop()
    const match = filename.match(/^img(\d+)/)
    const num = match ? parseInt(match[1], 10) : 999
    return {
      src: module.default,
      num,
      title: `Alumni Meet Photo ${num}`
    }
  })
  .sort((a, b) => a.num - b.num)
  .map(item => ({
    src: item.src,
    title: item.title,
    category: 'REUNION',
    resolution: '5568x3712'
  }))

// GalleryCard component to handle skeleton loaders and load states
function GalleryCard({ item, index, onClick }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className="meet-gallery__item reveal"
      style={{ transitionDelay: `${index * 0.05}s` }}
      onClick={onClick}
    >
      <div className="meet-gallery__img-wrap">
        {!loaded && <div className="meet-gallery__skeleton" />}
        <img
          src={item.src}
          alt={item.title}
          className={`meet-gallery__img ${loaded ? 'meet-gallery__img--loaded' : ''}`}
          onLoad={() => setLoaded(true)}
        />
        <div className="meet-gallery__overlay">
          <svg className="meet-gallery__zoom-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 21L21 3M3 21H9M3 21L3 15M21 3H15M21 3V9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
          </svg>
        </div>
      </div>
    </div>
  )
}

// LightboxImage component to handle skeleton loading in lightbox
function LightboxImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)
  }, [src])

  return (
    <div className="lightbox__img-container">
      {!loaded && <div className="lightbox__skeleton" />}
      <img
        src={src}
        alt={alt}
        className={`lightbox__img ${loaded ? 'lightbox__img--loaded' : ''}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

export default function DftAlumniMeet2023() {
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (lightbox === null) return
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowLeft') setLightbox((i) => (i - 1 + items.length) % items.length)
      if (e.key === 'ArrowRight') setLightbox((i) => (i + 1) % items.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <div className="meet-page">
      {/* Hero header area */}
      <section className="meet-hero">
        <div className="container meet-hero__inner">
          <Link to="/" className="back-link-gallerypage">
            <FaArrowLeft /> BACK TO HOME
          </Link>
          <span className="meet-hero__eyebrow">GALLERY EXCLUSIVE</span>
          <h1 className="meet-hero__title">
            DFT Alumni <span>Meet 2023</span>
          </h1>
          <p className="meet-hero__sub">
            Relive the memories and professional milestones from our historic 2023 gathering.
          </p>

          {/* Quick Details Bar */}
          <div className="meet-hero__meta">
            <div className="meet-meta-item">
              <FaCalendarAlt className="meet-meta-icon" />
              <div>
                <div className="meet-meta-label">DATE</div>
                <div className="meet-meta-val">18 June 2023</div>
              </div>
            </div>
            <div className="meet-meta-item">
              <FaMapMarkerAlt className="meet-meta-icon" />
              <div>
                <div className="meet-meta-label">LOCATION</div>
                <div className="meet-meta-val">Ahmedabad, Gujarat</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery grid section */}
      <section className="section meet-gallery">
        <div className="container">
          <div className="meet-gallery__info">
            <p className="meet-gallery__count">Showing <strong>{items.length}</strong> Images</p>
          </div>

          <div className="meet-gallery__grid">
            {items.map((item, i) => (
              <GalleryCard
                key={i}
                item={item}
                index={i}
                onClick={() => setLightbox(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" onClick={() => setLightbox(null)}>
            <FaTimes />
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((i) => (i - 1 + items.length) % items.length)
            }}
          >
            <FaChevronLeft />
          </button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <LightboxImage src={items[lightbox].src} alt={items[lightbox].title} />
          </div>
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((i) => (i + 1) % items.length)
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  )
}

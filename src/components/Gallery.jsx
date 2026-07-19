import { useState, useEffect, useRef } from 'react'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import gallery1 from '../assets/Gallery_Images/Gallery_4.avif'
import gallery2 from '../assets/Gallery_Images/Gallery_2.avif'
import gallery3 from '../assets/Gallery_Images/Gallery_6.avif'
import gallery4 from '../assets/Gallery_Images/Gallery_3.avif'
import gallery5 from '../assets/Gallery_Images/Gallery_5.avif'
import gallery6 from '../assets/Gallery_Images/Gallery_1.avif'
import './Gallery.css'
import ImageWithSkeleton from './ImageWithSkeleton'

const items = [
  { src: gallery1 },
  { src: gallery2 },
  { src: gallery3 },
  { src: gallery4 },
  { src: gallery5 },
  { src: gallery6 },
]

function LightboxImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    setLoaded(false)
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true)
    }
  }, [src])

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`lightbox__img ${loaded ? 'lightbox__img--loaded' : ''}`}
      onLoad={() => setLoaded(true)}
    />
  )
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

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
    <section className="section section-fog gallery" id="gallery">
      <div className="container">

        <div className="section-head reveal">
          <h2>Our <span>Gallery</span></h2>
        </div>
        <p className="section-sub reveal">
          A visual journey through years of celebrations, achievements, and cherished memories
          with the DFT family — from Sangam to Surat Sangaath and beyond.
        </p>

        <div className="gallery__grid">
          {items.map((item, i) => (
            <div
              key={i}
              className="gallery__item reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
              onClick={() => setLightbox(i)}
            >
              <ImageWithSkeleton src={item.src} alt={`Gallery item ${i + 1}`} className="gallery__img" />
              {/* Dark overlay on hover for subtle visual feedback */}
              <div className="gallery__overlay">
                <div className="gallery__overlay-panel-clean" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" onClick={() => setLightbox(null)}>
            <FaTimes />
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i - 1 + items.length) % items.length) }}
          >
            <FaChevronLeft />
          </button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <LightboxImage src={items[lightbox].src} alt={`Gallery enlarged ${lightbox + 1}`} />
          </div>
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i + 1) % items.length) }}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  )
}

import { useState, useEffect, useRef } from 'react'
import './ImageWithSkeleton.css'

export default function ImageWithSkeleton({
  src,
  alt,
  className,
  wrapperClassName,
  style,
  theme = 'light',
  ...props
}) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    // Reset state for new src
    setLoaded(false)
    setError(false)

    // Check cached state
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true)
    }
  }, [src])

  const handleLoad = () => {
    setLoaded(true)
  }

  const handleError = () => {
    setError(true)
  }

  const isLoaded = loaded && !error;

  return (
    <div
      className={`image-skeleton-wrapper ${theme === 'dark' ? 'image-skeleton-wrapper--dark' : ''} ${className || ''} ${wrapperClassName || ''}`}
      style={style}
    >
      {!isLoaded && (
        <div className="image-skeleton-shimmer" />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`image-skeleton-img ${isLoaded ? 'image-skeleton-img--loaded' : ''}`}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          opacity: isLoaded ? undefined : 0, // inline opacity overrides stylesheet while loading
          ...props.style
        }}
        {...props}
      />
    </div>
  )
}

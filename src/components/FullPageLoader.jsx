import dftLogo from '../assets/Logo/dft-logo-dark.avif'
import './FullPageLoader.css'

export default function FullPageLoader({
  show = false,
  title = 'Processing...',
  subtitle = 'Please wait while we update your details.'
}) {
  if (!show) return null

  return (
    <div className="fullpage-loader-overlay">
      <div className="fullpage-loader-card">
        <div className="fullpage-loader__logo-container">
          <div className="fullpage-loader__glow-aura"></div>
          <div className="fullpage-loader__logo-badge">
            <img src={dftLogo} alt="DFT Logo" className="fullpage-loader__logo" />
            <div className="fullpage-loader__shimmer-sweep"></div>
          </div>
        </div>
        <h3 className="fullpage-loader__title">{title}</h3>
        <p className="fullpage-loader__subtitle">{subtitle}</p>
      </div>
    </div>
  )
}

import { FaEye, FaBullseye } from 'react-icons/fa'
import visionImg from '../assets/VisionMission/vision.avif'
import missionImg from '../assets/VisionMission/mission.avif'
import './VisionMission.css'
import ImageWithSkeleton from '../components/ImageWithSkeleton'

export default function VisionMission() {
  return (
    <section className="section section-fog vm" id="vision">
      <div className="container">

        {/* Section header */}
        <div className="section-head reveal">
          <h2>Vision &amp; <span>Mission</span></h2>
        </div>
        <p className="section-sub reveal">
          Guided by a clear purpose — the DFT Alumni Association is committed to excellence,
          unity, and meaningful contribution to the institute and community.
        </p>

        {/* Cards */}
        <div className="vm__cards">
          {/* Vision card */}
          <div className="vm__card reveal-left">
            <div className="vm__card-img-wrap">
              <ImageWithSkeleton src={visionImg} alt="Our Vision" className="vm__card-img" />
              {/* Diagonal clip overlay */}
              <div className="vm__card-img-panel">
                <FaEye className="vm__card-icon" />
                <span className="vm__card-label">OUR VISION</span>
              </div>
            </div>
            <div className="vm__card-body">
              <div className="red-accent-bar" />
              <h3 className="vm__card-title display-title">A Global Community<br />of Excellence</h3>
              <p className="vm__card-text body-text">
                To build an enduring global network of DFT graduates who inspire each other, contribute
                to society, and uphold the values of integrity, innovation, and compassion that
                Sir Bhavsinhji Polytechnic is celebrated for.
              </p>
            </div>
          </div>

          {/* Mission card */}
          <div className="vm__card reveal-right">
            <div className="vm__card-img-wrap">
              <ImageWithSkeleton src={missionImg} alt="Our Mission" className="vm__card-img" />
              <div className="vm__card-img-panel vm__card-img-panel--mission">
                <FaBullseye className="vm__card-icon" />
                <span className="vm__card-label">OUR MISSION</span>
              </div>
            </div>
            <div className="vm__card-body">
              <div className="red-accent-bar" />
              <h3 className="vm__card-title display-title">Empower, Connect<br />&amp; Give Back</h3>
              <p className="vm__card-text body-text">
                To actively engage alumni in meaningful ways — fostering mentorship, enabling
                professional connections, celebrating shared heritage, and channeling collective
                energy toward the growth of DFT and its students.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

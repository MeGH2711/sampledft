import { FaLinkedin, FaAward } from 'react-icons/fa'
import './AlumniSpotlight.css'

import rajeshImg from '../assets/spotlight_rajesh.png'
import snehaImg from '../assets/spotlight_sneha.png'
import vikramImg from '../assets/spotlight_vikram.png'

const spotlightAlumni = [
  {
    name: 'Rajesh Mehta',
    role: 'Founder & MD, Apex Heavy Engineering',
    batch: 'Batch of 2002',
    award: 'Entrepreneurship Excellence',
    desc: 'Pioneered advanced fabrication processes in heavy manufacturing and established a state-of-the-art facility employing over 300+ technicians and engineers.',
    img: rajeshImg,
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Dr. Sneha Patel',
    role: 'Senior Materials Scientist, National Research Laboratory',
    batch: 'Batch of 2008',
    award: 'Innovation in Metallurgy',
    desc: 'Holds multiple patents in stress-resistant material design and published international research papers on high-strength alloy weld integrity.',
    img: snehaImg,
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Vikram Shah',
    role: 'Director of Community Projects, Sewa Foundation',
    batch: 'Batch of 1995',
    award: 'Social Impact Leadership',
    desc: 'Dedicated to community upliftment, spearheading technical skill development workshops and vocational training programs that empowered 2,000+ rural youth.',
    img: vikramImg,
    linkedin: 'https://linkedin.com'
  }
]

export default function AlumniSpotlight() {
  return (
    <section className="section section-fog spotlight" id="spotlight">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-head reveal">
          <h2>Alumni <span>Spotlight</span></h2>
        </div>
        
        {/* Description intro */}
        <p className="spotlight__intro reveal body-text">
          Alumni Spotlight (Awards & Recognition) celebrates the outstanding achievements of DFT graduates who have made a significant impact in industry, entrepreneurship, research, and society. This section honors their professional milestones, leadership, innovations, and community contributions, inspiring current students and fellow alumni to strive for excellence. Every success story reflects the strength, values, and legacy of the DFT Alumni Family.
        </p>

        {/* Cards Grid */}
        <div className="spotlight__grid">
          {spotlightAlumni.map((alumnus, i) => (
            <div 
              key={i} 
              className="spotlight__card reveal" 
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Image wrap with award ribbon */}
              <div className="spotlight__img-wrap">
                <img src={alumnus.img} alt={alumnus.name} className="spotlight__img" />
                <div className="spotlight__award-tag">
                  <FaAward className="spotlight__award-icon" />
                  <span>{alumnus.award}</span>
                </div>
              </div>

              {/* Card Content Info */}
              <div className="spotlight__info">
                <div className="spotlight__meta">
                  <span className="spotlight__batch">{alumnus.batch}</span>
                </div>
                <h3 className="spotlight__name">{alumnus.name}</h3>
                <p className="spotlight__role">{alumnus.role}</p>
                <div className="spotlight__divider" />
                <p className="spotlight__desc">{alumnus.desc}</p>
                
                <div className="spotlight__footer">
                  {alumnus.linkedin && (
                    <a 
                      href={alumnus.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="spotlight__social"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin /> Connect on LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

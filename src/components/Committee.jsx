import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Committee.css'

import { sangamCoreTeam, members } from '../data/committeeData'

export default function Committee() {
  return (
    <section className="section section-white committee" id="committee">
      <div className="container">

        {/* Section Header */}
        <div className="section-head reveal">
          <h2>Our <span>Committee</span></h2>
        </div>
        <p className="section-sub reveal">
          The Committee Members of the DFT Alumni Family are passionate volunteers who dedicate their time, expertise, and leadership to strengthening the alumni community. Together, they serve as the backbone of the DFT Alumni Family, fostering lifelong connections and a spirit of giving back.
          he dedicated committee members below have been the heart of the DFT Alumni Family since its inception. Their selfless efforts continue to strengthen relationships, inspire new initiatives, and shape the legacy of our growing alumni community.
        </p>

        {/* Subsection: Executive Committee */}
        <div className="committee__subsection reveal">
          <div className="committee__subhead">
            <h3 className="committee__subtitle">Executive <span>Committee</span></h3>
            <p className="committee__subtext">
              Meet the passionate alumni who lead our association with integrity, vision, and commitment to the DFT community.
            </p>
          </div>
          <div className="committee__grid">
            {members.map((member, i) => (
              <div
                key={i}
                className="committee__card reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Photo */}
                <div className="committee__img-wrap">
                  <img src={member.img} alt={member.name} className="committee__img" />
                </div>

                {/* Info */}
                <div className="committee__info">
                  <h3 className="committee__name">{member.name}</h3>
                  <span className="committee__role-text">{member.role}</span>
                  <span className="committee__batch caption-text">{member.batch}</span>
                  <div className="committee__socials">
                    <a href={member.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="committee__social" aria-label="LinkedIn">
                      <FaLinkedin />
                    </a>
                    {member.gmail && (
                      <a href={`mailto:${member.gmail}`} target="_blank" rel="noopener noreferrer" className="committee__social" aria-label="Email">
                        <FaEnvelope />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subsection: Core Team for Sangam 2026 */}
        <div className="committee__subsection reveal">
          <div className="committee__subhead">
            <h3 className="committee__subtitle">Core Team for <span>Sangam 2026</span></h3>
            <p className="committee__subtext">
              The dedicated task force driving the planning, coordination, and execution of our grand homecoming reunion.
            </p>
          </div>
          <div className="committee__grid">
            {sangamCoreTeam.map((member, i) => (
              <div
                key={i}
                className="committee__card reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Photo */}
                <div className="committee__img-wrap">
                  <img src={member.img} alt={member.name} className="committee__img" />
                </div>

                {/* Info */}
                <div className="committee__info">
                  <h3 className="committee__name">{member.name}</h3>
                  <span className="committee__role-text">{member.role}</span>
                  <span className="committee__batch caption-text">{member.batch}</span>
                  <div className="committee__socials">
                    <a href={member.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="committee__social" aria-label="LinkedIn">
                      <FaLinkedin />
                    </a>
                    {member.gmail && (
                      <a href={`mailto:${member.gmail}`} target="_blank" rel="noopener noreferrer" className="committee__social" aria-label="Email">
                        <FaEnvelope />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}


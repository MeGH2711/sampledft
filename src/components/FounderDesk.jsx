import founderImg from '../assets/G_D_Acharya.jpg'
import './FounderDesk.css'

export default function FounderDesk() {
  return (
    <section className="section section-white founder-desk" id="founder-desk">
      <div className="container founder-desk__inner">

        {/* Text side */}
        <div className="founder-desk__text reveal-left">
          <div className="section-head founder-desk__section-head">
            <h2>From the Desk of <span>Founder</span></h2>
          </div>

          <p className="founder-desk__para body-text founder-desk__para--lead">
            Welcome to the Fabrication Family! We're all about continuous growth, a positive mindset,
            technology advancement, sustainable living, and personal well-being.
          </p>

          <p className="founder-desk__para body-text">
            We constantly upgrade ourselves to stay ahead in the industry, adopting innovative techniques
            and investing in R&D. With a positive attitude, we embrace challenges, foster collaboration,
            and celebrate achievements. Our success is a result of our united efforts.
          </p>

          {/* Special Quote Highlight Block */}
          <div className="founder-desk__quote">
            <span className="quote-mark">“</span>
            <p>
              Technology is at the heart of what we do. We keep up with the latest advancements,
              ensuring we deliver cutting-edge solutions to our clients. We as a Fabrication family
              members I quote <strong className="highlight-red">"Never say CHALSE to quality"</strong>.
            </p>
          </div>

          <p className="founder-desk__para body-text">
            Learning is a lifelong journey, and we're committed to it. Through training programs and
            knowledge sharing, we empower our team to grow and excel. We care about your well-being.
            We promote work-life balance and provide resources for physical and mental health support.
          </p>

          {/* Hindi Slogan Highlight Box */}
          <div className="founder-desk__slogan-box">
            <p className="slogan-text">
              Join us as we embark on an exciting journey of growth, innovation, and personal strength
              because <span className="slogan-highlight">सर्व के शुभ में स्व शुभ समाया हुआ है।</span> Together,
              we'll shape a brighter future of Fabrication industries.
            </p>
          </div>
        </div>

        {/* Image side */}
        <div className="founder-desk__image-wrap reveal-right">
          <div className="founder-desk__image-frame">
            <img src={founderImg} alt="Dr. G. D. Acharya" className="founder-desk__image" />
            {/* Diagonal confidence accent block matching the design system */}
            <div className="founder-desk__image-accent" />
          </div>
          <div className="founder-desk__info">
            <h3 className="founder-desk__name">Dr. G. D. Acharya</h3>
            <p className="founder-desk__role">Founder, DFT Department</p>
          </div>
        </div>

      </div>
    </section>
  )
}

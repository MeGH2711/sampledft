import aboutImg from '../assets/About.avif'
import './About.css'
import ImageWithSkeleton from './ImageWithSkeleton'

const highlights = [
  'Connecting alumni across India and the world',
  'Organizing annual Sangam reunions and family meets',
  'Mentorship programs for current DFT students',
  'Preserving the legacy and culture of Sir Bhavsinhji Polytechnic',
]

export default function About() {
  return (
    <section className="section section-white about" id="about">
      <div className="container about__inner">

        {/* Image side */}
        <div className="about__image-wrap reveal-left">
          <div className="about__image-frame">
            <ImageWithSkeleton src={aboutImg} alt="DFT Alumni gathering" className="about__image" />
            {/* Diagonal overlay accent */}
            <div className="about__image-accent" />
          </div>
          {/* Est badge — diagonal panel style */}
          <div className="about__badge">
            <div className="about__badge-year">1983</div>
            <div className="about__badge-label">EST.</div>
          </div>
        </div>

        {/* Text side */}
        <div className="about__text reveal-right">

          <div className="section-head about__section-head">
            <h2>About <span>the Association</span></h2>
          </div>

          <p className="about__para body-text">
            The DFT Alumni Family is more than an alumni association, it is a lifelong bond that connects generations of students, alumni, faculty, and industry professionals from the Diploma in Fabrication Technology (DFT), Sir Bhavsinhji Polytechnic Institute, Bhavnagar.
          </p>
          <p className="about__para body-text">
            Built on the values of friendship, learning, and mutual support, our community continues to strengthen the legacy of DFT by bringing alumni together across industries and across the world.
          </p>
          <p className="about__para body-text">
            Our aim is to unite generations of DFTians on a single platform where knowledge, experience, opportunities, and friendships can be shared for the collective growth of our community & to serve society through meaningful social initiatives, community service, and collective efforts that create a positive and lasting impact.
          </p>

          <ul className="about__list">
            {highlights.map((item, i) => (
              <li key={i} className="about__list-item">
                <span className="about__check" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

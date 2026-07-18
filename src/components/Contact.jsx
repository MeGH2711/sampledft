import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import './Contact.css'

const contactInfo = [
  { icon: <FaMapMarkerAlt />, label: 'ADDRESS', value: 'Sir Bhavsinhji Polytechnic Institute, Waghawadi Road, Bhavnagar, Gujarat — 364001' },
  { icon: <FaPhone />, label: 'PHONE', value: '+91 98765 43210' },
  { icon: <FaEnvelope />, label: 'EMAIL', value: 'dftalumnifamily@gmail.com' },
]

export default function Contact() {
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', batch: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Using import.meta.env to get environment variables in Vite
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS credentials are not set in the .env file.");
      setLoading(false);
      setError("Email service is not configured. Please try again later.");
      return;
    }

    emailjs.sendForm(
      serviceId,
      templateId,
      formRef.current,
      publicKey
    )
    .then((result) => {
      console.log(result.text)
      setLoading(false)
      setSubmitted(true)
    }, (err) => {
      console.error(err.text)
      setLoading(false)
      setError('An error occurred while sending the message. Please try again later.')
    })
  }

  return (
    <section className="section section-white contact" id="contact">
      <div className="container">

        {/* Section header */}
        <div className="section-head reveal">
          <h2>Get In <span>Touch</span></h2>
        </div>
        <p className="section-sub reveal">
          Whether you want to join our community, reconnect with batchmates, or contribute —
          we&apos;d love to hear from you.
        </p>

        <div className="contact__grid">

          {/* Info column */}
          <div className="contact__info">
            {contactInfo.map((info, i) => (
              <div key={i} className="contact__info-item reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="contact__info-icon">{info.icon}</div>
                <div>
                  <div className="contact__info-label">{info.label}</div>
                  <div className="contact__info-value">{info.value}</div>
                </div>
              </div>
            ))}

            {/* Ticket CTA component from design-system */}
            <div className="ticket contact__ticket reveal" style={{ transitionDelay: '0.35s' }}>
              <div className="contact__ticket-plane">✈</div>
              <div>
                <div className="contact__ticket-txt">JOIN YOUR</div>
                <div className="contact__ticket-txt contact__ticket-red">ALUMNI NETWORK!</div>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="contact__form-wrap reveal-right">
            {/* Ribbon at top */}
            <div className="ribbon contact__form-ribbon">
              <div className="icon-circle">
                <FaEnvelope size={20} color="#0B1B3F" />
              </div>
              <div className="labels">
                <div className="l1">SEND US A</div>
                <div className="l2">MESSAGE</div>
              </div>
            </div>

            {submitted ? (
              <div className="contact__success">
                <FaCheckCircle className="contact__success-icon" />
                <h3 className="display-title">Message Sent!</h3>
                <p className="body-text">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                <button
                  className="contact__btn"
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', batch: '', subject: '', message: '' }) }}
                >
                  SEND ANOTHER <FaArrowRight />
                </button>
              </div>
            ) : (
              <form ref={formRef} className="contact__form" onSubmit={handleSubmit}>
                {error && <div className="contact__error" style={{ color: 'var(--signal-red)', marginBottom: '1rem', fontWeight: 'bold' }}>{error}</div>}
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="c-name">Full Name *</label>
                    <input id="c-name" type="text" name="name" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="c-email">Email Address *</label>
                    <input id="c-email" type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="c-batch">Batch Year</label>
                    <input id="c-batch" type="text" name="batch" placeholder="e.g. 2005" value={form.batch} onChange={handleChange} />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="c-subject">Subject *</label>
                    <input id="c-subject" type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="c-message">Message *</label>
                  <textarea id="c-message" name="message" rows={5} placeholder="Write your message here..." value={form.message} onChange={handleChange} required />
                </div>
                <button type="submit" className={`contact__btn ${loading ? 'loading' : ''}`} disabled={loading}>
                  {loading ? <span className="contact__spinner" /> : <><FaArrowRight /> SEND MESSAGE</>}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

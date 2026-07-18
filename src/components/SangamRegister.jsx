import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaBriefcase, FaTicketAlt, FaTshirt, FaUtensils, FaCreditCard, FaCheckCircle, FaPrint, FaArrowLeft } from 'react-icons/fa'
import './SangamRegister.css'

export default function SangamRegister() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    batch: '',
    occupation: '',
    tshirt: 'L',
    food: 'Veg',
  })
  
  const [step, setStep] = useState(1) // 1: Form, 2: Payment, 3: Success
  const [ticketId, setTicketId] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('upi')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [step])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setStep(2) // Move to Payment
  }

  const handlePaymentSubmit = (e) => {
    e.preventDefault()
    // Generate a random Ticket ID
    const randomId = 'DFT-' + Math.floor(100000 + Math.random() * 900000)
    setTicketId(randomId)
    setStep(3) // Move to Success
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="register-page">
      {/* ── Page Header ── */}
      <div className="register-header">
        <div className="container">
          <Link to="/sangam2026" className="back-link">
            <FaArrowLeft /> Back to Event Info
          </Link>
          <h1 className="register-page-title">Sangam 2026 <span>Registration</span></h1>
          <p className="register-page-sub">Secure your entry pass and custom alumni kit for the homecoming reunion.</p>
        </div>
      </div>

      <div className="container register-container">
        {step === 1 && (
          <div className="register-grid">
            {/* Left Column: Input Form */}
            <form onSubmit={handleFormSubmit} className="register-card main-form-card">
              <h2 className="card-section-title">Attendee Details</h2>
              <div className="form-group-grid">
                <div className="form-group">
                  <label htmlFor="name"><FaUser /> Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email"><FaEnvelope /> Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone"><FaPhone /> Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="10-digit mobile number"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="batch"><FaGraduationCap /> Graduation Batch Year</label>
                  <input
                    type="number"
                    id="batch"
                    name="batch"
                    min="1983"
                    max="2026"
                    placeholder="e.g. 2012"
                    required
                    value={formData.batch}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="occupation"><FaBriefcase /> Designation & Company</label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  placeholder="e.g. Project Manager at L&T"
                  required
                  value={formData.occupation}
                  onChange={handleInputChange}
                />
              </div>

              <h2 className="card-section-title spacing-top">Kit Preference</h2>
              <div className="form-group" style={{ maxWidth: '320px' }}>
                <label htmlFor="tshirt"><FaTshirt /> T-Shirt Size (for Memorabilia Kit)</label>
                <select
                  id="tshirt"
                  name="tshirt"
                  value={formData.tshirt}
                  onChange={handleInputChange}
                >
                  <option value="S">Small (S)</option>
                  <option value="M">Medium (M)</option>
                  <option value="L">Large (L)</option>
                  <option value="XL">Extra Large (XL)</option>
                  <option value="XXL">Double Extra Large (XXL)</option>
                </select>
              </div>

              <button type="submit" className="action-btn next-step-btn">
                PROCEED TO PAYMENT
              </button>
            </form>

            {/* Right Column: Order Summary */}
            <div className="summary-sidebar">
              <div className="summary-card">
                <h3 className="summary-title"><FaTicketAlt /> Order Summary</h3>
                <div className="summary-item">
                  <span className="item-name">General Entry Pass x 1</span>
                  <span className="item-price">₹1,500</span>
                </div>
                <div className="summary-item sub-item">
                  <span className="item-name">DFT Souvenir Kit</span>
                  <span className="item-price text-free">FREE</span>
                </div>
                <div className="summary-divider" />
                <div className="summary-item font-bold">
                  <span>Subtotal</span>
                  <span>₹1,500</span>
                </div>
                <div className="summary-item text-muted">
                  <span>Convenience Fee (incl. GST)</span>
                  <span>₹50</span>
                </div>
                <div className="summary-divider" />
                <div className="summary-item total-item">
                  <span>Total Amount</span>
                  <span className="total-amount">₹1,550</span>
                </div>
                <div className="summary-note">
                  * Entry passes are non-refundable but transferable to other registered alumni.
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="register-grid">
            {/* Left Column: Mock Payment Screen */}
            <form onSubmit={handlePaymentSubmit} className="register-card payment-card">
              <h2 className="card-section-title"><FaCreditCard /> Select Payment Method</h2>
              
              <div className="payment-options">
                <label className={`pay-option ${paymentMethod === 'upi' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={paymentMethod === 'upi'}
                    onChange={() => setPaymentMethod('upi')}
                  />
                  <div className="pay-option-content">
                    <span className="pay-option-title">UPI (GPay / PhonePe / Paytm)</span>
                    <span className="pay-option-desc">Pay instantly using any UPI App.</span>
                  </div>
                </label>
                
                <label className={`pay-option ${paymentMethod === 'card' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                  />
                  <div className="pay-option-content">
                    <span className="pay-option-title">Debit / Credit Card</span>
                    <span className="pay-option-desc">Visa, Mastercard, RuPay cards accepted.</span>
                  </div>
                </label>
              </div>

              {paymentMethod === 'upi' && (
                <div className="payment-details-box fade-in">
                  <div className="form-group">
                    <label htmlFor="vpa">Virtual Payment Address (VPA) / UPI ID</label>
                    <input
                      type="text"
                      id="vpa"
                      placeholder="username@okaxis"
                      required
                    />
                  </div>
                  <p className="pay-instruction">A payment request will be sent to your UPI App. Complete the transaction within 5 minutes.</p>
                </div>
              )}

              {paymentMethod === 'card' && (
                <div className="payment-details-box fade-in">
                  <div className="form-group">
                    <label htmlFor="ccnum">Card Number</label>
                    <input
                      type="text"
                      id="ccnum"
                      placeholder="4111 2222 3333 4444"
                      maxLength="19"
                      required
                    />
                  </div>
                  <div className="form-group-grid">
                    <div className="form-group">
                      <label htmlFor="ccexp">Expiry Date</label>
                      <input
                        type="text"
                        id="ccexp"
                        placeholder="MM / YY"
                        maxLength="5"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        type="password"
                        id="cvv"
                        placeholder="123"
                        maxLength="3"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="payment-actions">
                <button type="button" onClick={() => setStep(1)} className="back-btn-secondary">
                  Back to Details
                </button>
                <button type="submit" className="action-btn pay-submit-btn">
                  CONFIRM & PAY ₹1,550
                </button>
              </div>
            </form>

            {/* Right Column: Mini Summary */}
            <div className="summary-sidebar">
              <div className="summary-card">
                <h3 className="summary-title">Billing Summary</h3>
                <div className="summary-item">
                  <span>Attendee Name</span>
                  <span className="font-bold">{formData.name}</span>
                </div>
                <div className="summary-item">
                  <span>Batch Year</span>
                  <span className="font-bold">Class of {formData.batch}</span>
                </div>
                <div className="summary-item">
                  <span>T-Shirt Size</span>
                  <span className="font-bold">{formData.tshirt}</span>
                </div>
                <div className="summary-divider" />
                <div className="summary-item total-item">
                  <span>Total Amount</span>
                  <span className="total-amount">₹1,550</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="success-container fade-in">
            <div className="success-banner">
              <div className="success-icon-wrap">
                <FaCheckCircle className="success-icon" />
              </div>
              <h2 className="success-title">Payment Successful!</h2>
              <p className="success-sub">Your entry pass has been secured. A copy of the receipt and pass details has been emailed to <strong>{formData.email}</strong>.</p>
            </div>

            {/* ── High-Fidelity Ticket Pass Visual ── */}
            <div className="ticket-pass" id="printable-ticket">
              <div className="ticket-main">
                <div className="ticket-brand">
                  <div className="ticket-logo-title">DFT ALUMNI ASSOCIATION</div>
                  <div className="ticket-event-label">SANGAM 2026 · HOMECOMING REUNION</div>
                </div>
                <div className="ticket-body">
                  <div className="ticket-row">
                    <div className="ticket-field">
                      <div className="field-lbl">ATTENDEE NAME</div>
                      <div className="field-val">{formData.name.toUpperCase()}</div>
                    </div>
                    <div className="ticket-field text-right">
                      <div className="field-lbl">GRADUATION BATCH</div>
                      <div className="field-val">CLASS OF {formData.batch}</div>
                    </div>
                  </div>
                  <div className="ticket-row spacing">
                    <div className="ticket-field">
                      <div className="field-lbl">VENUE</div>
                      <div className="field-val font-accent">GRAND REGENCY PALACE, VADODARA</div>
                    </div>
                    <div className="ticket-field text-right">
                      <div className="field-lbl">DATE & TIME</div>
                      <div className="field-val">DEC 20, 2026 @ 4:00 PM</div>
                    </div>
                  </div>
                  <div className="ticket-row spacing">
                    <div className="ticket-field">
                      <div className="field-lbl">T-SHIRT SIZE</div>
                      <div className="field-val">{formData.tshirt}</div>
                    </div>
                    <div className="ticket-field">
                      <div className="field-lbl">MEAL</div>
                      <div className="field-val">VEGETARIAN</div>
                    </div>
                    <div className="ticket-field text-right">
                      <div className="field-lbl">PASS TYPE</div>
                      <div className="field-val ticket-type">GENERAL PASS</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="ticket-stub">
                <div className="stub-header">GATE PASS</div>
                <div className="stub-id-box">
                  <div className="field-lbl">TICKET ID</div>
                  <div className="stub-id">{ticketId}</div>
                </div>
                <div className="stub-barcode">
                  <div className="barcode-line" style={{ width: '4px' }} />
                  <div className="barcode-line" style={{ width: '2px' }} />
                  <div className="barcode-line" style={{ width: '6px' }} />
                  <div className="barcode-line" style={{ width: '1px' }} />
                  <div className="barcode-line" style={{ width: '4px' }} />
                  <div className="barcode-line" style={{ width: '2px' }} />
                  <div className="barcode-line" style={{ width: '8px' }} />
                  <div className="barcode-line" style={{ width: '3px' }} />
                  <div className="barcode-line" style={{ width: '1px' }} />
                  <div className="barcode-line" style={{ width: '5px' }} />
                  <div className="barcode-line" style={{ width: '2px' }} />
                </div>
                <div className="stub-footer">Scan at Entry</div>
              </div>
            </div>

            <div className="success-actions no-print">
              <button onClick={handlePrint} className="print-btn">
                <FaPrint /> Print / Save Ticket
              </button>
              <Link to="/" className="home-btn">
                Return to Homepage
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

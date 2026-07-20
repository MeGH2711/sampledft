import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaFileContract } from 'react-icons/fa'
import './TermsAndConditions.css'

export default function TermsAndConditions() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="terms-page">
      <div className="container terms-container">
        
        {/* Back Button */}
        <div style={{ marginBottom: '24px' }}>
          <button 
            type="button"
            className="terms-back-btn" 
            onClick={() => navigate('/')}
          >
            <FaArrowLeft /> Return to Website
          </button>
        </div>

        {/* Page Header */}
        <div className="terms-header">
          <div className="terms-icon-wrapper">
            <FaFileContract className="terms-header-icon" />
          </div>
          <h1>Terms &amp; Conditions</h1>
          <p className="terms-last-updated">Last Updated: July 2026</p>
          <div className="title-underline"></div>
        </div>

        {/* Content Card */}
        <div className="terms-card">
          <div className="terms-section">
            <h2>1. Introduction</h2>
            <p>
              Welcome to the DFT Alumni Association Portal ("Website", "Service"). These Terms and Conditions 
              govern your use of this Website. By accessing and registering on this portal, you accept these terms in full. 
              If you disagree with any part of these terms, you must not use this Website.
            </p>
          </div>

          <div className="terms-section">
            <h2>2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise stated, the DFT Alumni Association and/or its licensors own the intellectual property rights 
              published on this website and materials used on the Service. Subject to the license below, all these intellectual 
              property rights are reserved. You may view, download for caching purposes only, and print pages for your personal use.
            </p>
          </div>

          <div className="terms-section">
            <h2>3. Acceptable Use Policy</h2>
            <p>
              You must not use this Website in any way that causes, or may cause, damage to the Website or impairment of the 
              availability or accessibility of the portal. You must not use the portal to copy, store, host, transmit, send, 
              use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan 
              horse, worm, keystroke logger, rootkit, or other malicious computer software.
            </p>
          </div>

          <div className="terms-section">
            <h2>4. User Registration and Profiles</h2>
            <p>
              To access directories, job boards, and networking features, you must register as a verified alumnus. 
              You are solely responsible for maintaining the confidentiality of your credentials. The Administrator 
              reserves the right to review academic degree information, verify passout batches, and revoke approval 
              or restrict accounts that submit falsified academic records or contact numbers.
            </p>
          </div>

          <div className="terms-section">
            <h2>5. Rights Content &amp; Copyright</h2>
            <p>
              All community postings, spotlight articles, newsletter documents, and official imagery on this portal are 
              protected under copyright and intellectual property laws of India. Users retain ownership of individual job vacancy 
              postings and certifications uploaded to their profiles, but grant the DFT Alumni Association a perpetual, royalty-free, 
              worldwide license to display and distribute this content within the network.
            </p>
          </div>

          <div className="terms-section">
            <h2>6. Limitation of Liability</h2>
            <p>
              The materials on this Website are provided on an "as is" basis. DFT Alumni Association makes no warranties, 
              expressed or implied, and hereby disclaims all other warranties. In no event shall the association or its 
              development partners be liable for any damages (including, without limitation, damages for loss of data or profit, 
              or due to business interruption) arising out of the use or inability to use the portal resources.
            </p>
          </div>

          <div className="terms-section">
            <h2>7. Governing Law</h2>
            <p>
              These Terms and Conditions will be governed by and construed in accordance with the laws of the State of Gujarat, 
              India, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of 
              the courts of Bhavnagar.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

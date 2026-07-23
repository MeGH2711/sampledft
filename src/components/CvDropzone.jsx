import { useState, useRef } from 'react'
import { FaCloudUploadAlt, FaFilePdf, FaLock, FaTrash, FaExternalLinkAlt } from 'react-icons/fa'
import { openPdfInNewTab } from '../utils/pdfHelper'
import './CvDropzone.css'

const formatFileSize = (bytes) => {
  if (!bytes || isNaN(bytes)) return ''
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`
  }
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

export default function CvDropzone({
  label = 'Upload Resume / CV',
  cvFile = null,
  cvFileName = '',
  cvUrl = '',
  onFileSelect,
  onFileRemove,
  disabled = false,
  isEditing = true,
  setError
}) {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null)

  const handleViewPdf = (e) => {
    if (e) e.preventDefault()
    openPdfInNewTab(cvFile || cvUrl)
  }

  const validateAndProcessFile = (file) => {
    if (!file) return

    // 1. Restrict size type of PDF only
    const isPdfType = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')
    if (!isPdfType) {
      if (setError) setError('Only PDF files are allowed for CV upload.')
      if (fileInputRef.current) fileInputRef.current.value = ''
      return
    }

    // 2. Restrict file size to be within 5 MB
    const MAX_SIZE_BYTES = 5 * 1024 * 1024 // 5 MB
    if (file.size > MAX_SIZE_BYTES) {
      if (setError) setError('PDF file size must be within 5 MB.')
      if (fileInputRef.current) fileInputRef.current.value = ''
      return
    }

    if (setError) setError('')

    const reader = new FileReader()
    reader.onload = () => {
      if (onFileSelect) {
        onFileSelect(file, reader.result)
      }
    }
    reader.onerror = () => {
      if (setError) setError('Failed to read the uploaded PDF file.')
    }
    reader.readAsDataURL(file)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (!disabled && isEditing) {
      setIsDragging(true)
    }
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    if (disabled || !isEditing) return

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndProcessFile(e.dataTransfer.files[0])
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndProcessFile(e.target.files[0])
    }
  }

  const handleBoxClick = () => {
    if (!disabled && isEditing && fileInputRef.current && !hasFile) {
      fileInputRef.current.click()
    }
  }

  const hasFile = Boolean(cvFile || cvFileName || cvUrl)
  const currentFileName = cvFile?.name || cvFileName || (cvUrl ? 'Uploaded_CV.pdf' : '')
  const fileSizeText = cvFile?.size ? formatFileSize(cvFile.size) : ''

  return (
    <div className="cv-dropzone-container">
      {label && (
        <label
          style={{
            fontSize: '0.82rem',
            fontWeight: '600',
            color: 'var(--navy-deep, #0f172a)',
            display: 'block',
            marginBottom: '6px'
          }}
        >
          {label}
        </label>
      )}

      <div
        className={`cv-dropzone-box ${isDragging ? 'cv-dropzone-box--dragging' : ''} ${
          hasFile ? 'cv-dropzone-box--has-file' : ''
        } ${disabled || !isEditing ? 'cv-dropzone-box--disabled' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleBoxClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,application/pdf"
          onChange={handleFileChange}
          disabled={disabled || !isEditing}
          style={{ display: 'none' }}
        />

        {hasFile ? (
          <div className="cv-dropzone__file-card" onClick={(e) => e.stopPropagation()}>
            <div className="cv-dropzone__file-info">
              <FaFilePdf className="cv-dropzone__file-icon" />
              <div className="cv-dropzone__file-details">
                <span className="cv-dropzone__file-name" title={currentFileName}>
                  {currentFileName}
                </span>
                <span className="cv-dropzone__file-meta">
                  PDF Document {fileSizeText ? `• ${fileSizeText}` : ''}
                </span>
              </div>
            </div>

            <div className="cv-dropzone__file-actions">
              {(cvFile || cvUrl) && (
                <button
                  type="button"
                  className="cv-dropzone__action-btn"
                  onClick={handleViewPdf}
                  title="View / Download PDF"
                >
                  <FaExternalLinkAlt style={{ fontSize: '0.72rem' }} /> View PDF
                </button>
              )}

              {isEditing && !disabled && (
                <>
                  <button
                    type="button"
                    className="cv-dropzone__action-btn"
                    onClick={() => fileInputRef.current && fileInputRef.current.click()}
                    title="Change PDF File"
                  >
                    Change File
                  </button>
                  <button
                    type="button"
                    className="cv-dropzone__action-btn cv-dropzone__action-btn--remove"
                    onClick={() => {
                      if (fileInputRef.current) fileInputRef.current.value = ''
                      if (onFileRemove) onFileRemove()
                    }}
                    title="Remove File"
                  >
                    <FaTrash style={{ fontSize: '0.72rem' }} /> Remove
                  </button>
                </>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="cv-dropzone__icon-wrap">
              <FaCloudUploadAlt />
            </div>
            <p className="cv-dropzone__title">Drag and Drop here</p>
            <span className="cv-dropzone__divider-text">or</span>
            <button
              type="button"
              className="cv-dropzone__browse-btn"
              onClick={(e) => {
                e.stopPropagation()
                if (!disabled && isEditing && fileInputRef.current) {
                  fileInputRef.current.click()
                }
              }}
              disabled={disabled || !isEditing}
            >
              Browse files
            </button>
          </>
        )}
      </div>

      <div className="cv-dropzone__footer">
        <div className="cv-dropzone__accepted-types">
          Accepted File Types : .pdf only (Max 5 MB)
        </div>
        <div className="cv-dropzone__secure-badge">
          <FaLock style={{ fontSize: '0.72rem' }} /> Secure
        </div>
      </div>
    </div>
  )
}

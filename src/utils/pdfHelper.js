/**
 * Safely opens a PDF file, Blob, base64 data URL, or web link in a new browser tab.
 * Avoids modern browser restrictions that block direct top-frame navigation to data: URIs.
 *
 * @param {File | Blob | string} pdfSource - The PDF File, Blob, base64 data URL, or web link.
 */
export function openPdfInNewTab(pdfSource) {
  if (!pdfSource) return

  // 1. If it's a File or Blob object
  if (pdfSource instanceof File || pdfSource instanceof Blob) {
    const blobUrl = URL.createObjectURL(pdfSource)
    window.open(blobUrl, '_blank')
    return
  }

  // 2. If it's a string (URL or Base64 Data URI)
  if (typeof pdfSource === 'string') {
    const trimmed = pdfSource.trim()
    if (!trimmed) return

    if (trimmed.startsWith('data:')) {
      try {
        const arr = trimmed.split(',')
        const mimeMatch = arr[0].match(/:(.*?);/)
        const mime = mimeMatch ? mimeMatch[1] : 'application/pdf'
        const bstr = atob(arr[1])
        let n = bstr.length
        const u8arr = new Uint8Array(n)
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n)
        }
        const blob = new Blob([u8arr], { type: mime })
        const blobUrl = URL.createObjectURL(blob)
        window.open(blobUrl, '_blank')
        return
      } catch (err) {
        console.warn('Failed to parse data URL into Blob:', err)
      }
    }

    // Standard HTTP/HTTPS link or object URL
    window.open(trimmed, '_blank', 'noopener,noreferrer')
  }
}

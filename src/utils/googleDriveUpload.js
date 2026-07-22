/**
 * Uploads a PDF file to Google Drive via a Google Apps Script Web App Endpoint.
 * If the endpoint is not configured or fails, falls back gracefully to a Base64 data URL.
 * 
 * @param {File} file - The PDF File object
 * @param {string} fileName - Preferred file name for Google Drive (e.g., "John_Doe_CV.pdf")
 * @param {string} userId - User UID to overwrite previous CV file in Drive if exists
 * @returns {Promise<{ fileUrl: string, isDrive: boolean }>}
 */
export async function uploadPdfToDrive(file, fileName, userId = '') {
  if (!file) return { fileUrl: '', isDrive: false };

  // Read file as Base64 data URL
  const base64DataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });

  const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  if (scriptUrl && scriptUrl.trim() && scriptUrl.startsWith('http')) {
    try {
      const response = await fetch(scriptUrl.trim(), {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
          filename: fileName || file.name,
          base64: base64DataUrl,
          uid: userId || ''
        })
      });

      const result = await response.json();
      if (result && result.status === 'success' && result.fileUrl) {
        return { fileUrl: result.fileUrl, isDrive: true };
      } else {
        console.warn('Google Apps Script response warning, falling back to Base64:', result);
      }
    } catch (err) {
      console.warn('Failed to upload to Google Drive endpoint, falling back to Base64:', err);
    }
  }

  // Fallback to Base64 data URL if Google Drive script is not configured or fails
  return { fileUrl: base64DataUrl, isDrive: false };
}

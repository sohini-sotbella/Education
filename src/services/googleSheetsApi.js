const GOOGLE_SHEETS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxhk0VGfVlMGvJHNQOgYE8ShlYkMCKXWXmJZTRPPr6mSbSvtI85ovcgBobL2fGU7MRTyQ/exec';

const removeSensitiveFields = (data) => {
  const copy = { ...data };

  delete copy.password;
  delete copy.confirmPassword;

  return copy;
};

function timeoutPromise(ms) {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Request timed out')), ms)
  );
}

export async function submitGoogleSheetForm(
  formType,
  data,
  opts = {}
) {
  if (!GOOGLE_SHEETS_SCRIPT_URL) {
    throw new Error('Google Sheets script URL is not configured.');
  }

  const payload = {
    formType,
    ...removeSensitiveFields(data),
    userAgent:
      typeof navigator !== 'undefined'
        ? navigator.userAgent
        : 'unknown',
  };

  console.debug('[googleSheetsApi] payload:', payload);

  try {
    const controller =
      typeof AbortController !== 'undefined'
        ? new AbortController()
        : null;

    let timeoutId;

    if (controller && opts.timeout) {
      timeoutId = setTimeout(() => {
        controller.abort();
      }, opts.timeout);
    }

    const fetchPromise = fetch(GOOGLE_SHEETS_SCRIPT_URL, {
      method: 'POST',

      // IMPORTANT:
      // application/json triggers an OPTIONS preflight.
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },

      body: JSON.stringify(payload),

      signal: controller?.signal,
    });

    const response = opts.timeout
      ? await Promise.race([
          fetchPromise,
          timeoutPromise(opts.timeout),
        ])
      : await fetchPromise;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    let result;

    try {
      result = await response.json();
    } catch {
      throw new Error(
        `Invalid JSON response from Google Script (status ${response.status})`
      );
    }

    if (!response.ok) {
      throw new Error(
        result?.message ||
          `Request failed with status ${response.status}`
      );
    }

    if (!result?.success) {
      throw new Error(
        result?.message ||
          'Unable to save data to Google Sheets.'
      );
    }

    console.debug('[googleSheetsApi] success:', result);

    return result;
  } catch (err) {
    if (err.name === 'AbortError') {
      throw new Error('Request was aborted (timeout).');
    }

    if (
      err.message
        ?.toLowerCase()
        .includes('failed to fetch')
    ) {
      throw new Error(
        'Network error while contacting Google Script.'
      );
    }

    throw err;
  }
}
import { safeStorage } from '../utils/safeStorage.js';

const API_URL = '/api';

// Helper to safely parse JSON responses
async function parseJSON(response) {
  try {
    const text = await response.text();
    if (!text) return null;
    return JSON.parse(text);
  } catch (error) {
    console.error('JSON parse error:', error);
    return null;
  }
}

/**
 * Wrapper around fetch that automatically attaches the Bearer token.
 * If the server responds with 401 (token expired / invalid), it clears
 * the stored token and fires an `auth:expired` custom event so App.jsx
 * can redirect to the login screen without a hard page reload.
 */
async function authenticatedFetch(url, options = {}) {
  const token = localStorage.getItem('authToken');
  const headers = {
    ...options.headers,
    'Authorization': `Bearer ${token}`
  };

  const res = await fetch(url, { ...options, headers });

  if (res.status === 401) {
    localStorage.removeItem('authToken');
    // Notify the SPA — App.jsx listens and navigates to /survey-credentials
    window.dispatchEvent(new CustomEvent('auth:expired'));
    throw new Error('Session expired. Please log in again.');
  }

  return res;
}

export const apiClient = {
  // ── Public (unauthenticated) endpoints ──────────────────────────────────────

  async login(username, password) {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await parseJSON(res);
    if (!res.ok) throw new Error(data?.error || 'Login failed');
    return data; // { token, username, draft, surveys }
  },

<<<<<<< HEAD
  async saveSurvey(respondent, answers, confirmed, confirmedSnapshot, skipped, progress) {
    const token = safeStorage.getItem('authToken');
    const res = await fetch(`${API_URL}/survey/save`, {
=======
  // ── Session management ──────────────────────────────────────────────────────

  /**
   * Verify the stored token is still valid and return user info.
   * Call this once on app load to restore the session silently.
   * Returns { username, isAdmin } on success, or null if token is missing/invalid.
   */
  async verifySession() {
    const token = localStorage.getItem('authToken');
    if (!token) return null;
    try {
      const res = await fetch(`${API_URL}/auth/me`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!res.ok) {
        localStorage.removeItem('authToken');
        return null;
      }
      return await parseJSON(res); // { username, isAdmin }
    } catch {
      return null;
    }
  },

  /** Remove the stored auth token (logout). */
  logout() {
    localStorage.removeItem('authToken');
  },

  // ── Authenticated survey endpoints ──────────────────────────────────────────

  async saveSurvey(respondent, answers, confirmed, confirmedSnapshot, skipped, progress) {
    const res = await authenticatedFetch(`${API_URL}/survey/save`, {
>>>>>>> e606fd1ec9d7a38db0349054de48c79ebf41d1c7
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ respondent, answers, confirmed, confirmedSnapshot, skipped, progress })
    });
    const data = await parseJSON(res);
    if (!res.ok) throw new Error(data?.error || 'Failed to save survey');
    return data;
  },

  async getDraft() {
<<<<<<< HEAD
    const token = safeStorage.getItem('authToken');
    const res = await fetch(`${API_URL}/survey/draft`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
=======
    const res = await authenticatedFetch(`${API_URL}/survey/draft`);
>>>>>>> e606fd1ec9d7a38db0349054de48c79ebf41d1c7
    const data = await parseJSON(res);
    if (!res.ok) throw new Error(data?.error || 'Failed to fetch draft');
    return data;
  },

  async submitSurvey(surveyId) {
<<<<<<< HEAD
    const token = safeStorage.getItem('authToken');
    const res = await fetch(`${API_URL}/survey/submit`, {
=======
    const res = await authenticatedFetch(`${API_URL}/survey/submit`, {
>>>>>>> e606fd1ec9d7a38db0349054de48c79ebf41d1c7
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ surveyId })
    });
    const data = await parseJSON(res);
    if (!res.ok) throw new Error(data?.error || 'Failed to submit survey');
    return data;
  },

  async saveReferrals(referrals) {
<<<<<<< HEAD
    const token = safeStorage.getItem('authToken');
    const res = await fetch(`${API_URL}/survey/referral`, {
=======
    const res = await authenticatedFetch(`${API_URL}/survey/referral`, {
>>>>>>> e606fd1ec9d7a38db0349054de48c79ebf41d1c7
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ referrals })
    });
    const data = await parseJSON(res);
    if (!res.ok) throw new Error(data?.error || 'Failed to save referrals');
    return data;
  }
};

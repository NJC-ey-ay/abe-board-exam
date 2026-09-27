import mixpanel from 'mixpanel-browser';

const TOKEN = '3d6f243e22a686d8b0f9f16f2f67ff78';

mixpanel.init(TOKEN, {
  debug: true,
  persistence: 'localStorage',
});

const pending: Array<{ event: string; properties?: Record<string, unknown> }> = [];
let flushing = false;

async function flush() {
  if (flushing) return;
  flushing = true;
  while (pending.length) {
    const { event, properties } = pending.shift()!;
    try {
      mixpanel.track(event, properties);
      console.log(`[Mixpanel] Tracked: ${event}`, properties ?? '');
    } catch (e) {
      console.warn(`[Mixpanel] Failed to track ${event}:`, e);
    }
    await new Promise(r => setTimeout(r, 100));
  }
  flushing = false;
}

export function track(event: string, properties?: Record<string, unknown>) {
  pending.push({ event, properties });
  flush();
}

export function trackLandingPageViewed() {
  track('landing_page_viewed');
}

export function trackEmailSubmitted(email: string) {
  track('email_submitted', { email });
}

export function trackOtpVerified() {
  track('otp_verified');
}

export function trackPasswordSet() {
  track('password_set');
}

export function trackSurveyStarted() {
  track('survey_started');
}

export function trackSurveyCompleted(answers: Record<string, string>) {
  track('survey_completed', { answers });
}

export function trackReferralLinkCopied() {
  track('referral_link_copied');
}

export function trackLoginSucceeded() {
  track('login_succeeded');
}

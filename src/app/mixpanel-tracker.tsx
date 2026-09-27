'use client';

import { useEffect, useRef } from 'react';
import { trackLandingPageViewed } from '@/lib/mixpanel';

let fired = false;

export default function MixpanelTracker() {
  useEffect(() => {
    if (fired) return;
    fired = true;
    trackLandingPageViewed();
  }, []);
  return null;
}

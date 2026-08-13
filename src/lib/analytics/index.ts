type EventName =
  | 'hero_cta_click'
  | 'secondary_cta_click'
  | 'video_play'
  | 'beta_form_started'
  | 'beta_form_submitted'
  | 'beta_form_error'
  | 'privacy_clicked'
  | 'terms_clicked'
  | 'faq_opened'
  | 'final_cta_click'
  | 'nav_cta_click'
  | 'mode_card_viewed';

type EventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: EventName, params?: EventParams): void {
  if (typeof console !== 'undefined') {
    console.log('[analytics]', name, params ?? {});
  }
  // Future integrations:
  // - Meta Pixel: fbq('trackCustom', name, params)
  // - TikTok Pixel: ttq.track(name, params)
  // - Google Analytics: gtag('event', name, params)
}

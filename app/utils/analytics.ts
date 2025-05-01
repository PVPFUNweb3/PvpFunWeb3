// Simple analytics tracking tools that can be integrated with real analytics services
// In a real project, this would be replaced with Google Analytics, Mixpanel, etc.

interface EventData {
  category: string;
  action: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

/**
 * Track user events
 */
export function trackEvent({ category, action, label, value, ...rest }: EventData): void {
  // In development, only log to console
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', {
      category,
      action,
      label,
      value,
      ...rest,
      timestamp: new Date().toISOString(),
    });
    return;
  }
  
  // In production, send to actual analytics service
  // For example, Google Analytics
  try {
    // window.gtag('event', action, {
    //   event_category: category,
    //   event_label: label,
    //   value: value,
    //   ...rest
    // });
    
    // Or send to custom endpoint
    fetch('/api/analytics/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category,
        action,
        label,
        value,
        ...rest,
        timestamp: new Date().toISOString(),
      }),
    }).catch(err => console.error('Error sending analytics:', err));
  } catch (error) {
    console.error('Error tracking event:', error);
  }
}

/**
 * Track page views
 */
export function trackPageView(url: string): void {
  trackEvent({
    category: 'Page',
    action: 'View',
    label: url,
  });
  
  // For Google Analytics
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('config', 'GA-TRACKING-ID', {
  //     page_path: url,
  //   });
  // }
}

/**
 * Game-related event tracking
 */
export function trackGameEvent(action: string, data: any): void {
  trackEvent({
    category: 'Game',
    action,
    ...data,
  });
}

/**
 * NFT-related event tracking
 */
export function trackNftEvent(action: string, data: any): void {
  trackEvent({
    category: 'NFT',
    action,
    ...data,
  });
}

/**
 * Wallet-related event tracking
 */
export function trackWalletEvent(action: string, data: any): void {
  trackEvent({
    category: 'Wallet',
    action,
    ...data,
  });
} 
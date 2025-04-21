import { useRef, useEffect } from 'react';

export function CookieConsentWrapper() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Let the legacy script do its thing after mount
    // You can optionally load or trigger it here
    const windowAsAny = (window as any);
    if (windowAsAny.tryInitializeWcp) {
      windowAsAny.tryInitializeWcp();
    } else {
      console.warn('The consent system is not available. Cookies will not be set.');
    }
  }, []);

  return <div id="cookiebanner" ref={ref} suppressHydrationWarning />;
}

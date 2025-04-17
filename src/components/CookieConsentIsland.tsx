import { useRef, useEffect } from 'react';

export function CookieConsentWrapper() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Let the legacy script do its thing after mount
    // You can optionally load or trigger it here
  }, []);

  return <div id="cookiebanner" ref={ref} suppressHydrationWarning />;
}

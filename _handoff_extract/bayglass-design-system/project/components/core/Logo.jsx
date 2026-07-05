import React from 'react';

/**
 * Bayglass wordmark. Renders the brand name in Michroma (the logo typeface).
 * `dark` for use on light surfaces (navy ink); default light for dark surfaces.
 */
export function Logo({ dark = false, showLocation = true, style = {}, ...rest }) {
  const ink = dark ? 'var(--bg-navy)' : '#ffffff';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: '0.55rem', ...style }} {...rest}>
      <span style={{ display: 'inline-flex', gap: '3px' }} aria-hidden="true">
        <span style={{ width: 11, height: 22, background: 'var(--bg-sky)', transform: 'skewX(-16deg)', borderRadius: 2 }} />
        <span style={{ width: 11, height: 22, background: 'var(--bg-blue)', transform: 'skewX(-16deg)', borderRadius: 2 }} />
      </span>
      <span style={{ fontFamily: 'var(--font-logo)', fontSize: '1.1rem', letterSpacing: '0.01em', color: ink, lineHeight: 1 }}>
        BAYGLASS
      </span>
      {showLocation && (
        <span style={{ fontFamily: 'var(--font-logo)', fontSize: '0.6rem', letterSpacing: '0.18em', color: dark ? 'var(--color-primary)' : 'var(--bg-sky)', lineHeight: 1 }}>
          KERIKERI
        </span>
      )}
    </span>
  );
}

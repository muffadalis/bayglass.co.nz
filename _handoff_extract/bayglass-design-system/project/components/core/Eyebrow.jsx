import React from 'react';

/** Uppercase, letter-spaced eyebrow label that sits above section headings (Radiant style). */
export function Eyebrow({ children, dark = false, style = {}, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-block',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: 'var(--tracking-eyebrow)',
        textTransform: 'uppercase',
        color: dark ? 'var(--text-on-dark-muted)' : 'var(--color-primary)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}

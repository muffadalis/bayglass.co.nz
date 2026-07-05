import React from 'react';

/** Horizontal partner / brand strip (Radiant logo cloud). Renders text wordmarks by default. */
export function LogoCloud({
  items = ['LouvreTec', 'Metro Glass', 'Viridian', 'Insulglass', 'Houzz'],
  dark = false,
  style = {},
  ...rest
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '2rem',
        ...style,
      }}
      {...rest}
    >
      {items.map((it) => (
        <span
          key={typeof it === 'string' ? it : it.key}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 'var(--weight-semibold)',
            fontSize: 'var(--text-xl)',
            letterSpacing: 'var(--tracking-tight)',
            color: dark ? 'var(--text-on-dark)' : 'var(--text-heading)',
            opacity: 0.85,
          }}
        >
          {it}
        </span>
      ))}
    </div>
  );
}

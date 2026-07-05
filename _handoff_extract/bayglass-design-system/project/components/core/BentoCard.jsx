import React from 'react';

/**
 * Bento-grid feature tile (Radiant "Know more about your customers" grid).
 * Light theme by default; `dark` for the navy outreach section.
 * Supply `media` (an image src or node) shown above the eyebrow + heading + body.
 */
export function BentoCard({
  eyebrow,
  title,
  children,
  media,
  dark = false,
  style = {},
  ...rest
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        background: dark ? 'var(--surface-dark-2)' : 'var(--surface-card)',
        border: dark ? '1px solid var(--border-on-dark)' : '1px solid var(--border-card)',
        boxShadow: dark ? 'none' : 'var(--shadow-md)',
        ...style,
      }}
      {...rest}
    >
      {media && (
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 10', overflow: 'hidden', background: dark ? 'rgba(255,255,255,0.03)' : 'var(--neutral-100)' }}>
          {typeof media === 'string'
            ? <img src={media} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            : media}
        </div>
      )}
      <div style={{ padding: '1.75rem 1.75rem 2rem' }}>
        {eyebrow && (
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-xs)',
            fontWeight: 'var(--weight-semibold)',
            letterSpacing: 'var(--tracking-eyebrow)',
            textTransform: 'uppercase',
            color: dark ? 'var(--text-on-dark-muted)' : 'var(--color-primary)',
            marginBottom: '0.6rem',
          }}>{eyebrow}</div>
        )}
        <h3 style={{
          margin: '0 0 0.5rem',
          fontFamily: 'var(--font-display)',
          fontWeight: 'var(--weight-medium)',
          fontSize: 'var(--text-2xl)',
          letterSpacing: 'var(--tracking-tight)',
          color: dark ? 'var(--text-on-dark)' : 'var(--text-heading)',
        }}>{title}</h3>
        <p style={{
          margin: 0,
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-base)',
          lineHeight: 'var(--leading-relaxed)',
          color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-body)',
          textWrap: 'pretty',
        }}>{children}</p>
      </div>
    </div>
  );
}

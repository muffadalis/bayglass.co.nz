import React from 'react';

/**
 * Bayglass primary action button.
 * Radiant-style pill: solid navy default, soft neutral secondary, hollow outline.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '0.5rem 1rem', fontSize: 'var(--text-sm)' },
    md: { padding: '0.7rem 1.4rem', fontSize: 'var(--text-base)' },
    lg: { padding: '0.9rem 1.9rem', fontSize: 'var(--text-lg)' },
  };
  const variants = {
    primary: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--surface-dark)',
    },
    accent: {
      background: 'var(--color-accent)',
      color: 'var(--text-on-accent)',
      border: '1px solid var(--color-accent)',
    },
    secondary: {
      background: 'rgba(2,48,71,0.06)',
      color: 'var(--text-heading)',
      border: '1px solid transparent',
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-heading)',
      border: '1px solid rgba(2,48,71,0.18)',
    },
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-medium)',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'transform var(--dur-fast) var(--ease-out), filter var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)',
    ...sizes[size],
    ...variants[variant],
    ...style,
  };
  const onEnter = (e) => { if (!disabled) e.currentTarget.style.filter = 'brightness(1.08)'; };
  const onLeave = (e) => { e.currentTarget.style.filter = 'none'; };
  const onDown = (e) => { if (!disabled) e.currentTarget.style.transform = 'scale(0.97)'; };
  const onUp = (e) => { e.currentTarget.style.transform = 'none'; };
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      disabled={href ? undefined : disabled}
      style={base}
      onMouseEnter={onEnter}
      onMouseLeave={(e) => { onLeave(e); onUp(e); }}
      onMouseDown={onDown}
      onMouseUp={onUp}
      {...rest}
    >
      {children}
    </Tag>
  );
}

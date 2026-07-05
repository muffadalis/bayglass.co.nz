import React from 'react';
import { Logo } from './Logo.jsx';
import { Button } from './Button.jsx';

/**
 * Bayglass top navigation — Radiant layout: wordmark left, optional announcement
 * pill, nav links + action right. Sits on the light gradient panel.
 */
export function Navbar({
  links = [
    { label: 'Services', href: '#' },
    { label: 'Testimonials', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  banner = '24-hour emergency callouts — Northland wide',
  cta = { label: 'Get a quote', href: '#' },
  style = {},
  ...rest
}) {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        padding: '1.25rem 0',
        fontFamily: 'var(--font-body)',
        ...style,
      }}
      {...rest}
    >
      <Logo dark />
      {banner && (
        <a
          href="#"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.35rem 0.9rem',
            borderRadius: 'var(--radius-pill)',
            background: 'rgba(2,48,71,0.06)',
            color: 'var(--text-heading)',
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--weight-medium)',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          {banner} <span aria-hidden="true">›</span>
        </a>
      )}
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            style={{
              color: 'var(--text-heading)',
              textDecoration: 'none',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--weight-medium)',
            }}
          >
            {l.label}
          </a>
        ))}
        {cta && <Button href={cta.href} size="sm">{cta.label}</Button>}
      </div>
    </nav>
  );
}

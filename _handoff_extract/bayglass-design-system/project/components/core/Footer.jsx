import React from 'react';
import { Logo } from './Logo.jsx';

/** Radiant-style footer: brand + link columns on the soft gradient, fine dividers. */
export function Footer({
  columns = [
    { title: 'Services', links: ['Glass & glazing', 'Splashbacks', 'Glass showers', 'Balustrades'] },
    { title: 'Company', links: ['About', 'Testimonials', 'Contact', 'Careers'] },
    { title: 'Support', links: ['24hr callouts', 'Get a quote', 'Warranty'] },
  ],
  legal = '© 2026 Bay Glass Kerikeri Ltd.',
  style = {},
  ...rest
}) {
  const linkStyle = {
    color: 'var(--text-body)',
    textDecoration: 'none',
    fontSize: 'var(--text-base)',
    fontFamily: 'var(--font-body)',
    display: 'block',
    padding: '0.35rem 0',
  };
  return (
    <footer style={{ fontFamily: 'var(--font-body)', ...style }} {...rest}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr repeat(3, 1fr)',
          gap: '2rem',
          padding: '3.5rem 0',
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        <div><Logo dark /></div>
        {columns.map((c) => (
          <div key={c.title}>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 'var(--weight-medium)' }}>{c.title}</div>
            {c.links.map((l) => <a key={l} href="#" style={linkStyle}>{l}</a>)}
          </div>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 0',
          borderTop: '1px solid var(--border-subtle)',
          fontSize: 'var(--text-sm)',
          color: 'var(--text-muted)',
        }}
      >
        <span>{legal}</span>
        <span>09-407 9035 · 40 Klinac Lane, Waipapa</span>
      </div>
    </footer>
  );
}

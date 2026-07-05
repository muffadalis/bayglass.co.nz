import React from 'react';

/**
 * Bayglass display heading — Space Grotesk, tight tracking, low leading.
 * `size` maps to the Radiant heading scale; `dark` flips color for navy sections.
 */
export function Heading({ children, size = 'lg', as = 'h2', dark = false, style = {}, ...rest }) {
  const sizes = {
    xl: 'var(--text-7xl)', // hero
    lg: 'var(--text-5xl)', // section
    md: 'var(--text-4xl)', // sub-section
    sm: 'var(--text-3xl)', // card / small
  };
  const Tag = as;
  return (
    <Tag
      style={{
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 'var(--weight-medium)',
        fontSize: sizes[size],
        lineHeight: size === 'xl' ? 'var(--leading-tight)' : 'var(--leading-snug)',
        letterSpacing: 'var(--tracking-tight)',
        color: dark ? 'var(--text-on-dark)' : 'var(--text-heading)',
        textWrap: 'balance',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

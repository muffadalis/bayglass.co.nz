import React from 'react';

/** Large intro paragraph that follows a heading (Work Sans, muted). */
export function Lead({ children, dark = false, style = {}, ...rest }) {
  return (
    <p
      style={{
        margin: 0,
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-xl)',
        fontWeight: 'var(--weight-regular)',
        lineHeight: 'var(--leading-relaxed)',
        color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-body)',
        maxWidth: '42ch',
        textWrap: 'pretty',
        ...style,
      }}
      {...rest}
    >
      {children}
    </p>
  );
}

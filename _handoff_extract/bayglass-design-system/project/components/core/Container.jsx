import React from 'react';

/** Centered max-width content column used across every Bayglass page section. */
export function Container({ children, style = {}, ...rest }) {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: 'var(--container-max)',
        marginInline: 'auto',
        paddingInline: 'var(--container-pad)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

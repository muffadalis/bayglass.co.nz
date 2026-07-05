import React from 'react';

/**
 * The signature Bayglass "radiant" gradient — sky-blue drifting into gold/orange.
 * `panel` renders a rounded hero card (Radiant hero); `soft` uses the pale wash.
 */
export function Gradient({ children, panel = false, soft = false, style = {}, ...rest }) {
  return (
    <div
      style={{
        background: soft ? 'var(--gradient-radiant-soft)' : 'var(--gradient-radiant)',
        borderRadius: panel ? 'var(--radius-2xl)' : 0,
        boxShadow: panel ? 'var(--shadow-ring)' : 'none',
        overflow: 'hidden',
        position: 'relative',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

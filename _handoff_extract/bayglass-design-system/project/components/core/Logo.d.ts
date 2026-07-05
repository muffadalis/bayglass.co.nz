import React from 'react';
export interface LogoProps {
  /** Navy ink for light backgrounds. @default false (white, for dark) */
  dark?: boolean;
  /** Show the "KERIKERI" locality tag. @default true */
  showLocation?: boolean;
  style?: React.CSSProperties;
}
/**
 * Bayglass wordmark in Michroma with the twin-parallelogram glyph.
 * For photographic/hero placement use the real logo image in assets/ instead.
 */
export function Logo(props: LogoProps): JSX.Element;

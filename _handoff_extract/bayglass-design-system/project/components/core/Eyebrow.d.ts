import React from 'react';
export interface EyebrowProps {
  children: React.ReactNode;
  /** Use on dark surfaces. @default false */
  dark?: boolean;
  style?: React.CSSProperties;
}
/** Uppercase letter-spaced eyebrow label above section headings. */
export function Eyebrow(props: EyebrowProps): JSX.Element;

import React from 'react';
export interface GradientProps {
  children?: React.ReactNode;
  /** Rounded hero panel with hairline ring. @default false */
  panel?: boolean;
  /** Use the pale soft wash instead of the full-saturation gradient. @default false */
  soft?: boolean;
  style?: React.CSSProperties;
}
/**
 * Signature sky→gold radiant gradient surface.
 * @startingPoint section="Core" subtitle="The Bayglass radiant gradient panel" viewport="700x300"
 */
export function Gradient(props: GradientProps): JSX.Element;

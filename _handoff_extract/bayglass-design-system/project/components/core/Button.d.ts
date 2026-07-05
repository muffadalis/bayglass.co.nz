import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'accent' | 'secondary' | 'outline';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Render as an anchor when set. */
  href?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/**
 * Bayglass action button — Radiant-style pill.
 * @startingPoint section="Core" subtitle="Pill buttons in every variant" viewport="700x160"
 */
export function Button(props: ButtonProps): JSX.Element;

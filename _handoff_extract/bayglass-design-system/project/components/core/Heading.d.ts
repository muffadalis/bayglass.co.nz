import React from 'react';
export interface HeadingProps {
  children: React.ReactNode;
  /** Scale step. @default "lg" */
  size?: 'xl' | 'lg' | 'md' | 'sm';
  /** HTML tag. @default "h2" */
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  /** Use on dark surfaces. @default false */
  dark?: boolean;
  style?: React.CSSProperties;
}
/**
 * Space Grotesk display heading with tight tracking.
 * @startingPoint section="Core" subtitle="Display headings, hero → card scale" viewport="700x220"
 */
export function Heading(props: HeadingProps): JSX.Element;

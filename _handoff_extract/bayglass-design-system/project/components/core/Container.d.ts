import React from 'react';
export interface ContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}
/** Centered max-width (1216px) content column with responsive side padding. */
export function Container(props: ContainerProps): JSX.Element;

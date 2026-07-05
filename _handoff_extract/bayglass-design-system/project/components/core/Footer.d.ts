import React from 'react';
export interface FooterColumn { title: string; links: string[]; }
export interface FooterProps {
  columns?: FooterColumn[];
  legal?: string;
  style?: React.CSSProperties;
}
/**
 * Site footer with brand + link columns and a legal row.
 * @startingPoint section="Navigation" subtitle="Bayglass site footer" viewport="1216x320"
 */
export function Footer(props: FooterProps): JSX.Element;

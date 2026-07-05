import React from 'react';
export interface NavLink { label: string; href: string; }
export interface NavbarProps {
  links?: NavLink[];
  /** Announcement pill text; pass null to hide. */
  banner?: string | null;
  cta?: { label: string; href: string } | null;
  style?: React.CSSProperties;
}
/**
 * Marketing top-nav: wordmark, announcement pill, links + CTA.
 * @startingPoint section="Navigation" subtitle="Bayglass marketing navbar" viewport="1216x88"
 */
export function Navbar(props: NavbarProps): JSX.Element;

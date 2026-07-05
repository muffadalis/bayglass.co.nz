import React from 'react';
export interface BentoCardProps {
  /** Uppercase kicker, e.g. "INSIGHT". */
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  /** Image src string or a custom React node shown at the top. */
  media?: string | React.ReactNode;
  /** Dark navy variant. @default false */
  dark?: boolean;
  style?: React.CSSProperties;
}
/**
 * Feature tile for bento grids (media + eyebrow + heading + body).
 * @startingPoint section="Core" subtitle="Bento feature tiles, light + dark" viewport="700x420"
 */
export function BentoCard(props: BentoCardProps): JSX.Element;

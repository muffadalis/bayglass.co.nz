import React from 'react';
export interface LeadProps {
  children: React.ReactNode;
  dark?: boolean;
  style?: React.CSSProperties;
}
/** Large muted intro paragraph that follows a heading. */
export function Lead(props: LeadProps): JSX.Element;

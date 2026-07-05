import React from 'react';
export interface LogoCloudProps {
  /** Wordmark labels (or nodes) to display in the strip. */
  items?: React.ReactNode[];
  dark?: boolean;
  style?: React.CSSProperties;
}
/** Partner / brand strip shown under the hero. */
export function LogoCloud(props: LogoCloudProps): JSX.Element;

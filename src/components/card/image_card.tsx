import { EuiPanel } from '@elastic/eui';
import React from 'react';

interface Props {
  alt: string;
  src: string;
}

/**
 * `ImageCard` wraps an `img` inside of an `EuiPanel`.
 *
 * Images are loaded lazily by the browser using the `loading` attribute
 * set to "lazy".
 */
export const ImageCard: React.VFC<Props> = (props: Props) => (
  <EuiPanel
    borderRadius="none"
    className="imageCard"
    grow={false}
    paddingSize="none"
  >
    <img alt={props.alt} loading="lazy" src={props.src} />
  </EuiPanel>
);

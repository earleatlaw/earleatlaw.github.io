import { EuiCard, EuiTextAlign } from '@elastic/eui';
import React, { ReactNode } from 'react';
import { Locale } from '../locale';

interface Props {
  button?: ReactNode;
  className?: string;
  description: Exclude<ReactNode, undefined | null>;
  titleToken: string;
}

/**
 * `Card` wraps an `EuiCard` and makes the description text left-aligned with an
 * optional button as the footer.
 */
export const Card: React.VFC<Props> = (props: Props) => (
  <EuiCard
    className={props.className}
    description={props.description}
    footer={
      props.button ? (
        <EuiTextAlign textAlign="center">{props.button}</EuiTextAlign>
      ) : undefined
    }
    textAlign="left"
    title={
      <EuiTextAlign textAlign="center">
        <Locale token={props.titleToken} />
      </EuiTextAlign>
    }
  />
);

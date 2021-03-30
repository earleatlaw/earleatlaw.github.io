import React, { ReactNode } from 'react';
import { Locale } from '../locale';
import { Card } from './card';

interface Props {
  button?: ReactNode;
  className?: string;
  token: string;
}

/**
 * `TokenizedCard` is a simple `Card` that uses a base `token` to load the
 * description and title tokens by appending `.desc` and `.title` accordingly.
 */
export const TokenizedCard: React.VFC<Props> = (props: Props) => (
  <Card
    button={props.button}
    className={props.className}
    description={<Locale token={`${props.token}.desc`} />}
    titleToken={`${props.token}.title`}
  />
);

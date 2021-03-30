import React, { ReactNode } from 'react';
import { Locale } from './locale';

interface Props {
  children?: ReactNode;
  token?: string;
}

/**
 * Render the `Locale` using the `token` or the `children` if no `token` is
 * provided.
 */
export const TokenOrChildren = (props: Props) =>
  props.token ? <Locale token={props.token} /> : <>{props.children}</>;

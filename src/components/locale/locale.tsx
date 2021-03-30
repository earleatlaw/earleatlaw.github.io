import { EuiI18n } from '@elastic/eui';
import React, { ReactNode } from 'react';

interface Props {
  token: string;
  values?: Record<string, ReactNode>;
}

/**
 * `Locale` wraps `EuiI8n` to display the `token` as the default value if no
 * value exists, which should make discovery easy.
 *
 * @param props Token properties.
 */
export const Locale: React.VFC<Props> = (props: Props) => (
  <EuiI18n default={props.token} token={props.token} values={props.values} />
);

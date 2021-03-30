import { EuiFormRow, useEuiI18n } from '@elastic/eui';
import React, { ReactElement } from 'react';

interface Props {
  children: ReactElement;
  error?: boolean;
  token: string;
}

/**
 * `HelpFormRow` wraps `EuiFormRow` and enables a `token` to be passed for the
 * form row's `label` and `helpText`.
 */
export const HelpFormRow: React.FC<Props> = (props: Props) => {
  const errorToken = `${props.token}.error`;
  const helpToken = `${props.token}.help`;

  return (
    <EuiFormRow
      error={useEuiI18n(errorToken, errorToken)}
      helpText={useEuiI18n(helpToken, helpToken)}
      isInvalid={props.error}
      label={useEuiI18n(props.token, props.token)}
    >
      {props.children}
    </EuiFormRow>
  );
};

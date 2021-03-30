import { EuiFormRow, useEuiI18n } from '@elastic/eui';
import React, { ReactElement } from 'react';

interface Props {
  children: ReactElement;
  error?: boolean;
  token: string;
}

/**
 * `FormRow` wraps `EuiFormRow` and enables a `token` to be passed for the
 * form row's `label`.
 */
export const FormRow: React.FC<Props> = (props: Props) => {
  const errorToken = `${props.token}.error`;

  return (
    <EuiFormRow
      error={useEuiI18n(errorToken, errorToken)}
      isInvalid={props.error}
      label={useEuiI18n(props.token, props.token)}
    >
      {props.children}
    </EuiFormRow>
  );
};

import { EuiButton, EuiButtonProps } from '@elastic/eui';
import React from 'react';
import { useHistory } from 'react-router';
import { TokenOrChildren } from '../locale';
import { historyHandler } from './history_handler';

interface Props extends EuiButtonProps {
  href: string;
  token?: string;
}

/**
 * `Button` wraps `EuiButton` with an `href` link to make a linkable button
 * that uses React Router.
 *
 * @param href The local path to use.
 * @returns React Router-friendly `EuiButton`.
 */
export const Button: React.FC<Props> = ({
  children,
  href: to,
  token,
  ...rest
}: Props) => {
  const history = useHistory();
  const props = { ...rest, ...historyHandler(history, to) };

  return (
    <EuiButton {...props}>
      <TokenOrChildren token={token}>{children}</TokenOrChildren>
    </EuiButton>
  );
};

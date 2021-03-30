import { EuiLink, EuiLinkAnchorProps } from '@elastic/eui';
import React from 'react';
import { useHistory } from 'react-router';
import { TokenOrChildren } from '../locale';
import { historyHandler } from './history_handler';

interface Props extends EuiLinkAnchorProps {
  href: string;
  token?: string;
}

/**
 * `Link` wraps `EuiLink` with an `href` link that uses React Router.
 *
 * @param href The local path to use.
 * @returns React Router-friendly link, or direct link if external.
 */
export const Link: React.FC<Props> = ({
  children,
  href: to,
  token,
  ...rest
}: Props) => {
  const history = useHistory();

  // external links should just use EuiLink
  if (rest.external || rest.target === '_blank') {
    return (
      <EuiLink href={to} {...rest}>
        <TokenOrChildren token={token}>{children}</TokenOrChildren>
      </EuiLink>
    );
  }

  const props = { ...rest, ...historyHandler(history, to) };

  return (
    <EuiLink {...props}>
      <TokenOrChildren token={token}>{children}</TokenOrChildren>
    </EuiLink>
  );
};

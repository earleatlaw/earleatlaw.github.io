import { EuiHeader, EuiHideFor, EuiShowFor } from '@elastic/eui';
import React from 'react';
import { Locale } from '../locale';
import { HeaderIcon } from './header_icon';
import { Navigation } from './navigation';

export const Header: React.VFC = () => (
  <EuiHeader
    position="fixed"
    sections={[
      {
        items: [<Navigation />, <HeaderIcon />],
        borders: 'right',
      },
      {
        items: [
          <>
            <EuiShowFor sizes={['xs', 's']}>
              <Locale token="header.services.mobile" />
            </EuiShowFor>
            <EuiHideFor sizes={['xs', 's']}>
              <Locale token="header.services" />
            </EuiHideFor>
          </>,
        ],
      },
    ]}
  />
);

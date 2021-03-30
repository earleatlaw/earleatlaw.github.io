import { EuiHeader } from '@elastic/eui';
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
        items: [<Locale token="header.services" />],
      },
    ]}
  />
);

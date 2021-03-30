import { EuiFlexGroup, EuiFlexItem } from '@elastic/eui';
import React from 'react';
import { Locale } from '../locale';
import { FooterIcon } from './footer_icon';

export const Footer: React.VFC = () => (
  <div className="footer">
    <EuiFlexGroup
      alignItems="center"
      justifyContent="spaceBetween"
      responsive={false}
    >
      <EuiFlexItem grow={false}>
        <FooterIcon />
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <Locale token="footer.copyright" />
      </EuiFlexItem>
    </EuiFlexGroup>
  </div>
);

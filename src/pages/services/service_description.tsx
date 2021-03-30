import { EuiFlexGroup, EuiFlexItem, EuiText, EuiTitle } from '@elastic/eui';
import React from 'react';
import { Locale } from '../../components';

interface Props {
  token: string;
}

export const ServiceDescription: React.VFC<Props> = ({ token }: Props) => (
  <EuiFlexGroup alignItems="center" className="serviceDescription">
    <EuiFlexItem />
    <EuiFlexItem>
      <EuiText>
        <EuiTitle>
          <h2>
            <Locale token={`${token}.subtitle`} />
          </h2>
        </EuiTitle>
        <p>
          <Locale token={`${token}.desc`} />
        </p>
      </EuiText>
    </EuiFlexItem>
  </EuiFlexGroup>
);

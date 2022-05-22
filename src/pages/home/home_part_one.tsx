import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiPageContent,
  EuiPageContentBody,
  EuiSpacer,
  EuiTextAlign,
} from '@elastic/eui';
import React from 'react';
import { Button, Locale } from '../../components';
import { Routes } from '../../constants';

/**
 * `HomePartOne` is the first part of the Home page to display.
 */
export const HomePartOne: React.VFC = () => (
  <EuiPageContent borderRadius="none" className="home-background-1">
    <EuiPageContentBody>
      <EuiFlexGroup justifyContent="spaceAround">
        <EuiFlexItem grow={false}>
          <img
            alt="Earle at Law PLLC"
            src="/images/logo.svg"
            style={{ maxWidth: '100%' }}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer size="l" />
      <EuiTextAlign style={{ fontSize: '30px' }} textAlign="center">
        <Locale token="home.1.line1" />{' '}
        <span style={{ fontWeight: 'bold' }}>
          <Locale token="home.1.line2" />
        </span>
      </EuiTextAlign>
      <EuiSpacer size="l" />
      <EuiFlexGroup justifyContent="spaceAround">
        <EuiFlexItem grow={false}>
          <EuiFlexGroup alignItems="center" gutterSize="l">
            <EuiFlexItem grow={false}>
              <Button href={Routes.business}>
                <Locale token="route.business" />
              </Button>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <Button href={Routes.individual}>
                <Locale token="route.individual" />
              </Button>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPageContentBody>
  </EuiPageContent>
);

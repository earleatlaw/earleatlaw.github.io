import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiPageContent,
  EuiPageContentBody,
} from '@elastic/eui';
import React from 'react';
import { Button, TokenizedCard } from '../../components';
import { Routes } from '../../constants';

export const HomePartFour: React.VFC = () => (
  <div className="home-background-4 fullScreen">
    <EuiPageContent
      borderRadius="none"
      color="transparent"
      hasShadow={false}
      verticalPosition="center"
    >
      <EuiPageContentBody>
        <EuiFlexGroup alignItems="center" justifyContent="spaceEvenly">
          <EuiFlexItem>
            <TokenizedCard
              button={<Button href={Routes.contact} token="route.contact" />}
              token="home.4.people"
            />
          </EuiFlexItem>
          <EuiFlexItem />
        </EuiFlexGroup>
      </EuiPageContentBody>
    </EuiPageContent>
  </div>
);

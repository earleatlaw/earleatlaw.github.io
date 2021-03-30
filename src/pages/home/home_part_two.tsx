import {
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPageContent,
  EuiPageContentBody,
} from '@elastic/eui';
import React from 'react';
import { Button, TokenizedCard } from '../../components';

export const HomePartTwo: React.VFC = () => (
  <EuiPageContent
    borderRadius="none"
    className="home-background-2"
    hasShadow={false}
    verticalPosition="center"
  >
    <EuiPageContentBody>
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiCard
            description="Thinking about starting a business? Want to finally have your Will done? Need an attorney’s advice about a situation but don’t want to use up your savings doing so? Look no further."
            title="For you and your small business."
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <TokenizedCard
            button={<Button href="/about" token="route.about" />}
            token="home.2.values"
          />
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiPageContentBody>
  </EuiPageContent>
);

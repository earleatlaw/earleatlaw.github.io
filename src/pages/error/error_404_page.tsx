import { EuiEmptyPrompt, EuiPageTemplate, EuiText } from '@elastic/eui';
import React from 'react';
import { Button, Locale } from '../../components';

/**
 * `Error404Page` should be displayed as a fallback whenever a page cannot be
 * found.
 */
export const Error404Page: React.VFC = () => (
  <EuiPageTemplate
    pageContentProps={{
      borderRadius: 'none',
      className: 'borderedPanel',
      paddingSize: 'none',
    }}
    template="centeredBody"
  >
    <EuiEmptyPrompt
      actions={<Button color="primary" fill href="/" token="route.go_home" />}
      body={
        <EuiText>
          <p>
            <Locale token="error.404.line1" />
          </p>
          <p>
            <Locale token="error.404.line2" />
          </p>
        </EuiText>
      }
      iconColor="danger"
      iconType="link"
      title={
        <h2>
          <Locale token="error.404.title" />
        </h2>
      }
    />
  </EuiPageTemplate>
);

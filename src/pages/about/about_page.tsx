import { EuiPageTemplate, EuiText } from '@elastic/eui';
import React from 'react';
import { Locale } from '../../components';

/**
 * `AboutPage` provides a simple page to show the origins of the firm.
 */
export const AboutPage: React.VFC = () => (
  <EuiPageTemplate
    pageBodyProps={{
      className: 'pageBody',
    }}
    pageHeader={{
      iconType: 'iInCircle',
      pageTitle: <Locale token="page.about.title" />,
    }}
  >
    <EuiText>
      <p>
        <Locale token="page.about.body.1" />
      </p>
      <p>
        <Locale token="page.about.body.2" />
      </p>
      <p>
        <Locale token="page.about.body.3" />
      </p>
    </EuiText>
  </EuiPageTemplate>
);

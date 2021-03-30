import { EuiPageTemplate, IconType } from '@elastic/eui';
import React, { ReactNode } from 'react';
import { Locale } from '../../components';
import { ServiceDescription } from './service_description';

interface Props {
  children: ReactNode;
  iconType?: IconType;
  token: string;
}

/**
 * `ServicesPage` provides the page for customers to find an explanation for
 * all services offered dealing with the supplied details.
 *
 * This is the basis for Individual and Small Business Service pages.
 */
export const ServicesPage: React.FC<Props> = ({
  children,
  iconType,
  token,
}: Props) => (
  <EuiPageTemplate
    pageContentBodyProps={{ paddingSize: 'none', restrictWidth: false }}
    pageHeader={{
      iconType,
      pageTitle: <Locale token={`${token}.title`} />,
    }}
  >
    <ServiceDescription token={token} />
    {children}
  </EuiPageTemplate>
);

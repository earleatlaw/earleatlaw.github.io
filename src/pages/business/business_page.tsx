import React from 'react';
import { BusinessServices } from '../../constants';
import { ServiceComponent, ServicesPage } from '../services';

/**
 * `BusinessPage` provides the page for customers to find an explanation for
 * all services offered dealing with small business (not individual) matters.
 */
export const BusinessPage: React.VFC = () => (
  <ServicesPage iconType="users" token="page.business.header">
    {BusinessServices.map((service, index) => (
      <ServiceComponent
        id={service.id}
        index={index}
        key={`service-${service.id}`}
        listItems={service.items}
        type="business"
      />
    ))}
  </ServicesPage>
);

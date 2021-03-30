import React from 'react';
import { IndividualServices } from '../../constants';
import { ServiceComponent, ServicesPage } from '../services';

/**
 * `IndividualPage` provides the page for customers to find an explanation for
 * all services offered dealing with individual (not small business) matters.
 */
export const IndividualPage: React.VFC = () => (
  <ServicesPage iconType="user" token="page.individual.header">
    {IndividualServices.map((service, index) => (
      <ServiceComponent
        id={service.id}
        index={index}
        key={`service-${service.id}`}
        listItems={service.items}
        type="individual"
      />
    ))}
  </ServicesPage>
);

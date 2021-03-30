import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiPageContent,
  EuiPageContentBody,
} from '@elastic/eui';
import React from 'react';
import { Button, TokenizedCard } from '../../components';
import { BusinessServices, IndividualServices, Routes } from '../../constants';

export const HomePartThree: React.VFC = () => (
  <div className="home-background-3">
    <div className="home-background-3-color fullScreen">
      <EuiPageContent
        borderRadius="none"
        color="transparent"
        hasShadow={false}
        horizontalPosition="center"
        verticalPosition="center"
      >
        <EuiPageContentBody>
          <EuiFlexGroup className="top" gutterSize="xl">
            {IndividualServices.filter((service) => service.home).map(
              (service) => (
                <EuiFlexItem key={`individual-${service.id}`}>
                  <TokenizedCard
                    button={
                      <Button
                        href={
                          service.link_anchor !== false
                            ? `${Routes.individual}#${service.id}`
                            : Routes.individual
                        }
                        token="route.learn_more"
                      />
                    }
                    token={`home.3.individual.${service.id}`}
                  />
                </EuiFlexItem>
              )
            )}
          </EuiFlexGroup>
          <EuiFlexGroup className="bottom" gutterSize="xl">
            {BusinessServices.filter((service) => service.home).map(
              (service) => (
                <EuiFlexItem key={`business-${service.id}`}>
                  <TokenizedCard
                    button={
                      <Button
                        href={
                          service.link_anchor !== false
                            ? `${Routes.business}#${service.id}`
                            : Routes.business
                        }
                        token="route.learn_more"
                      />
                    }
                    token={`home.3.business.${service.id}`}
                  />
                </EuiFlexItem>
              )
            )}
          </EuiFlexGroup>
        </EuiPageContentBody>
      </EuiPageContent>
    </div>
  </div>
);

import {
  EuiCollapsibleNav,
  EuiCollapsibleNavGroup,
  EuiFlexItem,
  EuiHeaderSectionItemButton,
  EuiIcon,
  EuiListGroupItem,
} from '@elastic/eui';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { NamedRoutes } from '../../constants';
import { Locale } from '../locale';
import { historyHandler } from '../route';

/**
 * `Navigation` represents the sidebar navigation that pops out from the
 * hamburger menu (three lines).
 */
export const Navigation: React.VFC = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const close = () => setOpen(false);

  return (
    <EuiCollapsibleNav
      aria-label="Site navigation"
      isOpen={open}
      isDocked={false}
      button={
        <EuiHeaderSectionItemButton
          aria-label="Toggle main navigation"
          onClick={() => setOpen(!open)}
        >
          <EuiIcon type="menu" size="m" aria-hidden="true" />
        </EuiHeaderSectionItemButton>
      }
      onClose={close}
    >
      <EuiFlexItem className="eui-yScroll">
        <EuiCollapsibleNavGroup background="light">
          {NamedRoutes.map((page, index) => (
            <EuiListGroupItem
              color="subdued"
              {...page}
              label={<Locale token={page.token} />}
              {...historyHandler(history, page.href, close)}
              key={`nav-${index}`}
            />
          ))}
        </EuiCollapsibleNavGroup>
      </EuiFlexItem>
    </EuiCollapsibleNav>
  );
};

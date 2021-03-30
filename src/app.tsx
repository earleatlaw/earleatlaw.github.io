import { EuiContext } from '@elastic/eui';
import React from 'react';
import { useHistory } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { Footer, Header, useAnchorScroller } from './components';
import { NamedRoutes } from './constants';
import { localeMappings } from './locale_mappings';
import { Error404Page } from './pages';

import '@elastic/eui/dist/eui_theme_amsterdam_light.css';

/**
 * `App` provides the entire Single Page App content for the site.
 */
export const App: React.VFC = () => {
  useAnchorScroller(useHistory(), { headerSelector: '.euiHeader' });

  return (
    <EuiContext i18n={{ mapping: localeMappings['en-us'] }}>
      <Header />
      <Switch>
        {NamedRoutes.filter((route) => route.component).map((route) => (
          <Route
            component={route.component}
            exact
            key={`route-${route.href}`}
            path={route.path ?? route.href}
          />
        ))}
        <Route path="*">
          <Error404Page />
        </Route>
      </Switch>
      <Footer />
    </EuiContext>
  );
};

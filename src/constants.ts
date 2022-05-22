import {
  AboutPage,
  BusinessPage,
  ContactPage,
  HomePage,
  IndividualPage,
} from './pages';

export const IndividualServices = [
  { home: true, id: 'estate', items: 3 },
  { home: true, id: 'nuptials', items: 4 },
  { home: true, id: 'landlord_tenant' },
  { home: false, id: 'other', link_anchor: false },
];

export const BusinessServices = [
  { home: true, id: 'create', items: 2 },
  { home: true, id: 'contracts', items: 3 },
  { home: false, id: 'drafting', items: 4 },
  { home: false, id: 'landlord_tenant', items: 2 },
  { home: true, id: 'other', link_anchor: false },
];

/**
 * `Routes` represents the same
 */
export const Routes = {
  about: '/about',
  business: '/business',
  contact: '/contact',
  home: '/',
  individual: '/individual',
};

/**
 * `NamedRoutes` provides the `Routes` with the locale tokens and pages to
 * enable simple linkage and navigation.
 */
export const NamedRoutes = [
  {
    component: HomePage,
    href: Routes.home,
    iconType: 'home',
    token: 'route.home',
  },
  {
    component: AboutPage,
    href: Routes.about,
    iconType: 'iInCircle',
    token: 'route.about',
  },
  {
    component: BusinessPage,
    href: Routes.business,
    iconType: 'users',
    token: 'route.business',
  },
  {
    component: IndividualPage,
    href: Routes.individual,
    iconType: 'user',
    token: 'route.individual',
  },
  {
    component: ContactPage,
    href: Routes.contact,
    iconType: 'email',
    path: `${Routes.contact}/:type?/:reason?`,
    token: 'route.contact',
  },
];

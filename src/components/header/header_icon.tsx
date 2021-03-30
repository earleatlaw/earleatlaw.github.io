import React from 'react';
import { Link } from '../route';

export const HeaderIcon: React.VFC = () => (
  <Link href="/">
    <img alt="Earle at Law" className="euiHeaderLogo" src="/images/logo.svg" />
  </Link>
);

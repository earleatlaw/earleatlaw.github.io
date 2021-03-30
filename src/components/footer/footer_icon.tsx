import React from 'react';
import { Link } from '../route';

export const FooterIcon: React.VFC = () => (
  <Link href="/">
    <img
      alt="Earle at Law"
      className="euiHeaderLogo noHover"
      src="/images/logo.white.svg"
    />
  </Link>
);

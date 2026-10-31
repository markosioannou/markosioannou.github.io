import React from 'react';

export default function NavbarLogo() {
  return (
    <a className="navbar__brand" href="/blog/" aria-label="Markos Ioannou home">
      <div className="navbar__logo">
        <img src="/assets/icons/android-chrome-512x512.png" alt="" />
      </div>
      <b className="navbar__title text--truncate">Markos Ioannou</b>
    </a>
  );
}

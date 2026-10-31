import React from 'react';
import clsx from 'clsx';
import {useLocation} from '@docusaurus/router';

const links = [
  {label: 'About', href: '/#about'},
  {label: 'Projects', href: '/#projects'},
  {label: 'Contact', href: '/contact.html'},
  {label: 'Blog', href: '/blog/', portal: true, section: 'blog'},
  {label: 'Docs', href: '/blog/docs/intro', portal: true, section: 'docs'},
];

function isActive(pathname, section) {
  if (section === 'blog') {
    return (
      (pathname === '/blog' || pathname.startsWith('/blog/')) &&
      !pathname.startsWith('/blog/docs/')
    );
  }

  if (section === 'docs') {
    return pathname.startsWith('/blog/docs/');
  }

  return false;
}

export default function MainNavbarLinks({mobile = false, onClick}) {
  const {pathname} = useLocation();

  if (mobile) {
    return links.map(({label, href, portal, section}) => {
      const active = isActive(pathname, section);

      return (
        <li className="menu__list-item" key={label}>
          <a
            aria-current={active ? 'page' : undefined}
            className={clsx('menu__link', portal && 'navbar__link--portal', active && 'menu__link--active')}
            href={href}
            onClick={onClick}>
            {label}
          </a>
        </li>
      );
    });
  }

  return (
    <nav className="mk-navbar-links" aria-label="Primary navigation">
      {links.map(({label, href, portal, section}) => {
        const active = isActive(pathname, section);

        return (
          <a
            aria-current={active ? 'page' : undefined}
            className={clsx(
              'navbar__link',
              portal && 'navbar__link--portal',
              active && 'navbar__link--active',
            )}
            href={href}
            key={label}>
            {label}
          </a>
        );
      })}
    </nav>
  );
}

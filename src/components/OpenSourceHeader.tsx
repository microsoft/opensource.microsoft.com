//
// Copyright (c) Microsoft Corporation. All rights reserved.
//

'use client'

import { FunctionComponent, useCallback, useState } from 'react';

// React
// import { useNavigate } from 'react-router-dom';
// import { Link } from '@primer/react';

// Next
import Link from 'next/link'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import './OpenSourceHeader.scss';
import '@primer/css/layout/index.scss' with { "with": "sass:map" };
import '@primer/css/buttons/index.scss' with { "with": "sass:map" };
//import '../../components/layout/Layout.scss';

import { useGlobalScroll } from '../hooks/useGlobalEvent';

import MicrosoftOpenSourceLogo from './MicrosoftOpenSourceLogo.svg';
import { ArrowUpRightIcon } from '@primer/octicons-react';
// import UserSystemButton from '../../components/layout/UserSystemButton';

type Props = {
  siteSection?: string;
  showDevelopmentHeader?: boolean;
  site: 'opensource.microsoft.com' | 'opensource-management-portal';
}

type LinkProps = {
  href: string;
  title: string;
};

const OPENSOURCE_SITE_LINKS: LinkProps[] = [
  { href: '/collaborate', title: 'Get involved' },
  { href: '/projects', title: 'Projects' },
  { href: '/ecosystem', title: 'Ecosystem' },
  { href: '/program', title: 'Our program' },
  { href: '/blog', title: 'Blog' },
];

const MicrosoftOpenSourceHeader: FunctionComponent<Props> = ( { site, siteSection, showDevelopmentHeader }) => {
  const selected = siteSection || 'github';
  const selectedClassName = 'is-active';

  // const navigate = useNavigate();
  const router = useRouter();
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const callback = useCallback(() => {
    // Adapted for React from the JavaScript + jQuery implementation we launched
    // in the public site here: https://github.com/microsoft/opensource.microsoft.com/blob/main/_dev/js/main.js
    const header = document.getElementById(showDevelopmentHeader ? 'site-header-dev' : 'site-header');
    if (window.pageYOffset >= 120) {
      header?.classList.add('is-sticky');
    } else {
      header?.classList.remove('is-sticky');
    }
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop <= 0) {
      currentScrollTop = 0;
    }
    if (currentScrollTop > lastScrollTop) {
      if (header?.classList.contains('scrolling-up')) {
        header?.classList.remove('scrolling-up');
      }
    } else {
      if( !header?.classList.contains('scrolling-up') ){
        header?.classList.add('scrolling-up');
      }
    }
    if (lastScrollTop !== currentScrollTop) {
      setLastScrollTop(currentScrollTop);
    }
  }, [lastScrollTop]);

  useGlobalScroll(callback);

  return (
    <>
      <header id={showDevelopmentHeader ? 'site-header-dev' : 'site-header'} role="banner">
        <div className={`site-header${showDevelopmentHeader ? '-dev' : ''}__inner`}>
          <div className="site-logo">
            <a href="/" onClick={(e) => { /* tabIndex={2}  */
              e.preventDefault();
              router.push('/');
              // navigate('/');
            }}>
              <Image src={MicrosoftOpenSourceLogo} alt='Microsoft | Open Source logo' />
              <span className="sr-only">Return to homepage</span>
            </a>
          </div>
          <ul className="site-header__nav list-style-none">
            {site === 'opensource-management-portal' && (
              <>
                <li>
                  <a href="https://aka.ms/opensource">Docs</a>
                </li>
                <li className={selected === 'github' ? selectedClassName : undefined}>
                  <Link as="a" href="/" onClick={(e: any) => {
                    e.preventDefault();
                    // navigate('/');
                    router.push('/');
                  }}>Open Source Management</Link>
                </li>
                <li className={selected === 'use' ? selectedClassName : undefined}>
                  <Link as="a" href="/use" onClick={(e: any) => {
                    e.preventDefault();
                    // navigate('/use');
                    router.push('/use');
                  }}>Use</Link>
                </li>
                <li className={selected === 'release' ? selectedClassName : undefined}>
                  <Link as="a" href="/release" onClick={(e: any) => {
                    e.preventDefault();
                    // navigate('/release');
                    router.push('/release');
                  }}>Release</Link>
                </li>
                <li className={selected === 'contribute' ? selectedClassName : undefined}>
                  <Link as="a" href="/contribute" onClick={(e: any) => {
                    e.preventDefault();
                    // navigate('/contribute');
                    router.push('/contribute');
                  }}>Contribute</Link>
                </li>
                <li>
                  <a href="https://opensource.microsoft.com" className="external" target="_new">opensource.microsoft.com</a>
                </li>
              </>
            )}
            {site === 'opensource.microsoft.com' && (
              <>
                {OPENSOURCE_SITE_LINKS.map((link) => (
                  <li key={link.href} className={selected === link.href ? selectedClassName : undefined}>
                    <Link as="a" href={
                      link.href
                    } onClick={(e: any) => {
                      e.preventDefault();
                      // navigate(link.href);
                      router.push(link.href);
                    }}>{link.title}</Link>
                  </li>
                ))}
                <li>
                  <a
                    className='external'
                    href="https://careers.microsoft.com/us/en/search-results?keywords=open%20source" target='_blank'>
                    Jobs
                  </a>
                </li>
              </>
            )}
          </ul>
          <div className="site-header__utilities">
            <>
            {/*
              <UserSystemButton />
            */}
            </>
          </div>
        </div>
      </header>
      {/*
      <nav id="navigation">
        <div className="site-navigation">
          <div>
            <ul className="main-nav">
              <li>
                <form className="search-form" role="search" action="/projects/explore" method="GET">
                  <label>
                    <span className="sr-only">Search projects</span>
                  </label>
                  <input id="mobile-search" type="text" name="q" placeholder="Search" />
                </form>
              </li>
              <li>
                <a className="is-active" href="/">Home</a>
              </li>
              <li>
                <a className="is-active" href="/">Other</a>
              </li>
            </ul>
          </div>
        </div>
        <span className="navigation-screen js-menu-trigger"></span>
      </nav>
      */}
      {/*
      <div className="search-form-mobile">
        <form className="search-form" role="search" action="/projects/explore" method="GET">
          <label>
            <span className="sr-only">Search projects</span>
          </label>
          <input id="mobile-search" type="text" name="q" placeholder="Search" />
        </form>
      </div>*/}
    </>
  );
}

export default MicrosoftOpenSourceHeader;

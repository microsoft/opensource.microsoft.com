import React from 'react';
import Link from 'next/link';
import '../styles/globals.css';

const Header = () => {
  return (
    <header id="site-header" role="banner">
      <div className="site-header__inner">
        <div className="site-logo">
          <Link href="/">
            <a tabIndex="2">
              <img
                className="mr-3 icon"
                src="/assets/images/svgs/microsoft-logo-no-text.svg"
                alt="Microsoft | Open Source logo"
              />
              <span className="p-lg text-white">Microsoft | Open Source</span>
            </a>
          </Link>
        </div>

        <ul className="site-header__nav">
          <li>
            <Link href="/collaborate">
              <a>Get involved</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/ecosystem">
              <a>Ecosystem</a>
            </Link>
          </li>
          <li>
            <Link href="/program">
              <a>Our program</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="https://careers.microsoft.com/us/en/search-results?keywords=open%20source">
              <a target="_new">Jobs</a>
            </Link>
          </li>
        </ul>

        <div className="site-header__utilities">
          <div className="site-header__search">
            <form className="search-form" role="search" action="/projects/explore" method="GET">
              <label htmlFor="header-search">
                <span className="sr-only">Search projects</span>
              </label>
              <input type="text" id="header-search" name="q" placeholder="Search" />
            </form>
            <div className="search-trigger">
            </div>
          </div>
          <div className="nav-trigger js-menu-trigger">
            <img className="open-menu" src="/assets/images/svgs/menu.svg" alt="menu icon" />
            <img className="close-menu" src="/assets/images/svgs/close.svg" alt="close icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

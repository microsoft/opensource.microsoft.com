//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link href="/" className="header__logo">
            Microsoft Open Source
          </Link>
          
          <button className={`header__menu-toggle ${menuOpen ? 'is-active' : ''}`} onClick={toggleMenu}>
            <span className="header__menu-toggle-inner">
              <span className="header__menu-toggle-line"></span>
              <span className="header__menu-toggle-line"></span>
              <span className="header__menu-toggle-line"></span>
            </span>
          </button>
          
          <nav className={`header__nav ${menuOpen ? 'is-active' : ''}`}>
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <Link href="/projects" className="header__nav-link">Projects</Link>
              </li>
              <li className="header__nav-item">
                <Link href="/ecosystem" className="header__nav-link">Ecosystem</Link>
              </li>
              <li className="header__nav-item">
                <Link href="/program" className="header__nav-link">Program</Link>
              </li>
              <li className="header__nav-item">
                <Link href="/collaborate" className="header__nav-link">Collaborate</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
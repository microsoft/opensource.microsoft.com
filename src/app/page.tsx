//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import Why from './components/Why';
import OpenSourceHero from './components/OpenSourceHero';
import Projects from './components/Projects';
import Azure from './components/Azure';
// import OpenSourceBlog from './components/OpenSourceBlog';
import CommunityResources from './components/CommunityResources';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Microsoft Open Source',
};

export default function Home() {
  return (
    <article>

      <OpenSourceHero />

      <Projects />
      <hr />

      <Why />
      <Azure />
      {/*
      <OpenSourceBlog />
      */}
      <CommunityResources />

      {/*
        TODO: homepage.js
        TODO: animation fixes
      */}

    </article>
  )
}

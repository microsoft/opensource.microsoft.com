//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import { Metadata } from 'next';

import ProgramDynamicContent from './Content';
import Contributing from './Contributing';
import Overview from './Overview';
import Releasing from './Releasing';
import ProgramTabs from './Tabs';
import Tools from './Tools';
import Using from './Using';

export const metadata: Metadata = {
  title: 'About Microsoft\'s Open Source Program',
};

{/*
  Other pages not live now:
  - Supporting
*/}

export default function Program() {
  return (
    <article className="program-page">
      <div className="page-header">
        <div className="wrapper">
          <div className="col-md-10 col-lg-7 mx-auto">
            <h1 className="h2">Our program</h1>
          </div>
        </div>
      </div>
      <div className="wrapper-full bg-light">
        <div className="wrapper my-6 py-4">
          <div className="col-md-10 col-lg-7 mx-auto">
            <h3 className="h4 font-weight-400 mb-4">
              {`
              Microsoft has a strong open source program that encourages contribution, respects
              license obligations, and allows engineers to use open source with ease, work in the open,
              release projects, and be secure.
              `}
            </h3>
            <p>
              {`
              Our developers use more than 200,000 open source components every month while building
              products and services.
              `}
            </p>
            <p>
              {`
              Relentless automation, engineering system innovation, and making it easy for our
              developers to "fall into the pit of success" have been key to using open source
              at enterprise-scale.
              `}
            </p>
            <p>
              {`
              Here are just a few of the ways that we've built a strong open source program.
              We're sharing our process in hopes it helps others be more successful in open source too.
              `}
            </p>
          </div>
        </div>
      </div>
      <div className="tabs">
        <nav className="wrapper my-6" data-require-javascript="yes" data-javascript-show="immediate">
          <div className="col-md-10 col-lg-7 mx-auto">
            <div className="tabs__tabs" role="tablist">
              <ProgramTabs />
            </div>
          </div>
        </nav>
        <div className="wrapper my-6 pt-lg-3 pb-4">
          {/* No JavaScript entire set of content */}
          <noscript>
            <div className="col-md-10 col-lg-7 mx-auto">
              <h2>Overview</h2>
              <div className="tabs__content is-active" data-tab="program-overview">
                <Overview />
              </div>
              <div className="tabs__content" data-tab="program-tools">
                <h2>Tools &amp; resources</h2>
                <Tools />
              </div>
              <div className="tabs__content" data-tab="program-using">
                <h2>Using open source</h2>
                <Using />
              </div>
              <div className="tabs__content" data-tab="program-contributing">
                <h2>Contributing</h2>
                <Contributing />
              </div>
              <div className="tabs__content" data-tab="program-releasing">
                <h2>Releasing projects</h2>
                <Releasing />
              </div>
            </div>
          </noscript>
          {/* Equivalent content for JavaScript */}
          <ProgramDynamicContent />
        </div>
      </div>
    </article>
  );
}

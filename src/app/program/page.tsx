//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import Contributing from "./Contributing";
import Overview from "./Overview";
import Releasing from "./Releasing";
import Tools from "./Tools";
import Using from "./Using";

// Page title: Microsoft's Open Source Program

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
              Microsoft has a strong open source program that encourages contribution, respects
              license obligations, and allows engineers to use open source with ease, work in the open,
              release projects, and be secure.
            </h3>
            <p>
              Our developers use more than 200,000 open source components every month while building 
              products and services.
            </p>
            <p>
              Relentless automation, engineering system innovation, and making it easy for our
              developers to "fall into the pit of success" have been key to using open source
              at enterprise-scale.
            </p>
            <p>
              Here are just a few of the ways that we've built a strong open source program. 
              We're sharing our process in hopes it helps others be more successful in open source too.
            </p>
          </div>
        </div>
      </div>
      <div className="tabs">
        <nav className="wrapper my-6" data-require-javascript="yes" data-javascript-show="immediate">
          <div className="col-md-10 col-lg-7 mx-auto">
            <div className="tabs__tabs" role="tablist">
              <a className="tabs__tab is-active" role="tab" href="#program-overview" data-tab="program-overview">Overview</a>
              <a className="tabs__tab" role="tab" href="#program-tools" data-tab="program-tools">Tools &amp; resources</a>
              <a className="tabs__tab" role="tab" href="#program-using" data-tab="program-using">Using open source</a>
              <a className="tabs__tab" role="tab" href="#program-contributing" data-tab="program-contributing">Contributing</a>
              <a className="tabs__tab" role="tab" href="#program-releasing" data-tab="program-releasing">Releasing projects</a>
            </div>
          </div>
        </nav>
        <div className="wrapper my-6 pt-lg-3 pb-4">
          <div className="col-md-10 col-lg-7 mx-auto">
            <noscript><h2>Overview</h2></noscript>
            <div className="tabs__content is-active" data-tab="program-overview">
              <Overview />
            </div>
            <div className="tabs__content" data-tab="program-tools">
              <noscript><h2>Tools &amp; resources</h2></noscript>
              <Tools />
            </div>
            <div className="tabs__content" data-tab="program-using">
              <noscript><h2>Using open source</h2></noscript>
              <Using />
            </div>
            <div className="tabs__content" data-tab="program-contributing">
              <noscript><h2>Contributing</h2></noscript>
              <Contributing />
            </div>
            <div className="tabs__content" data-tab="program-releasing">
              <noscript><h2>Releasing projects</h2></noscript>
              <Releasing />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

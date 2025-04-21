//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import { Metadata } from 'next';
import AzureCreditsTabs from './components/Tabs';
import AzureCreditsOverview from './components/Overview';
import AzureCreditsQuestions from './components/FAQ';
import AzureCreditsApply from './components/Apply';
import AzureCreditsDynamicContent from './components/DynamicContent';

export const metadata: Metadata = {
  title: 'Azure Credits for Open Source Projects',
};

// @cspell: ignore Snakemake

export default function AzureCredits() {
  return (
    <article className="program-page">
      <div className="page-header">
        <div className="wrapper">
          <div className="col-md-10 col-lg-7 mx-auto">
            <h1 className="h2">Azure credits for open source projects</h1>
          </div>
        </div>
      </div>
      {/*
      <div className="wrapper-full bg-light">
        <div className="wrapper my-6 py-4">
          <div className="col-md-10 col-lg-7 mx-auto">
            <h3 className="h4 font-weight-400 mb-4">
              Introduction text
            </h3>
          </div>
        </div>
      </div>
      */}
      <div className="tabs">
        <nav className="wrapper my-6" data-require-javascript="yes" data-javascript-show="immediate">
          <div className="col-md-10 col-lg-7 mx-auto">
            <div className="tabs__tabs" role="tablist">
              <AzureCreditsTabs />
            </div>
          </div>
        </nav>
        <div className="wrapper my-6 pt-lg-3 pb-4">
          <AzureCreditsDynamicContent />
          {/* No JavaScript: entire set of content */}
          <noscript>
            <div className="col-md-10 col-lg-7 mx-auto">
              <div className="tabs__content is-active" data-tab="credits-overview">
                <h2>Overview</h2>
                <AzureCreditsOverview />
              </div>
              <div className="tabs__content" data-tab="credits-faq">
                <h2>FAQ</h2>
                <AzureCreditsQuestions />
              </div>
              <div className="tabs__content" data-tab="credits-apply">
                <AzureCreditsApply />
              </div>
            </div>
          </noscript>
        </div>
      </div>
    </article>
  );
}

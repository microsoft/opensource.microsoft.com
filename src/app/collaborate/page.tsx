//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import { BellSlashIcon, SyncIcon } from '@primer/octicons-react';
import CommunityResources from '../components/CommunityResources';

// Page title: Get involved

export default function Collaborate() {
  return (
    <article>
      <div className="page-header">
        <div className="wrapper d-md-flex">
          <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
            <h1 className="h2">
            Get involved
            </h1>
          </div>
          <div className="col-md-6 pl-md-4 col-lg-4">
            <p>
              Right now, open communities are building amazing software together, and
              there are excellent "good first issue" opportunities, if you're looking
              to get involved.
            </p>
            {/*
            <div data-animate-in="fade" data-animate-in-delay="240">
              <a className="link-arrow text-white mt-4" href="/collaborate">
                <a className="link-arrow text-white mt-4" href="/">Join the community</a>
              </a>
            </div>
            */}
          </div>
        </div>
      </div>
      {/*
      <!--
      <div className="wrapper my-6 py-6">
          <div className="d-md-flex flex-items-center">
              <div className="col-md-6 col-lg-5 pr-md-4 pr-lg-6 mb-4 mb-md-0">
                  <h2 className="h2">Happening now</h2>
              </div>
              <div className="col-md-6 pl-md-4 col-lg-4">
                  <img className="mb-4" src="/images/direction/community-shapes.svg" alt="" />
              </div>
          </div>
      </div>
      <hr className="wrapper" />
      -->
      */}
      <section className="wrapper  my-6 py-lg-4">
        <header className="mb-6 border-bottom pb-4">
          <div className="d-lg-flex flex-items-end flex-justify-between">
            <div>
              <h2 className="h3">
                Happening now
              </h2>
              <p>
                See the latest activity on GitHub with Microsoft Open Source projects.
              </p>
            </div>
            <div data-javascript-show="immediate" data-require-javascript="yes">
              <p>
                <a
                  className="refresh"
                  id="toggle-feed"
                  href="#"
                  title="Pause real-time activity feed"><span className="sr-only" id="toggle-text2">
                    Pause real-time activity feed
                  </span>
                  <span
                    id="toggle-text"
                    aria-hidden="true">
                    Pause
                  </span> 
                  <span
                    id="pause-icon">
                    <BellSlashIcon />
                  </span>
                  <span
                    id="resume-icon"
                    style={{ display: 'none' }}
                  >
                    <SyncIcon />
                  </span>
                </a>
              </p>
            </div>
          </div>
        </header>
        <div className="d-lg-flex flex-justify-between">
          <div className="col-12 col-lg-8 pr-lg-6 mb-4 mb-md-0">
            <div className="d-sm-flex flex-wrap">
              <div className="col-12" id="activityFeed">
                <noscript>
                  <h2>JavaScript is required for this interactive feature.</h2>
                  <p>This page works best with JavaScript. The activity feeds are dynamically generated using a REST API and JavaScript.</p>
                </noscript>
                <ul className="project-list" id="activityList">
                </ul>
              </div>
              <script id="activity-template" type="text/x-handlebars-template">
                <li>
                  {/* TODO: equivalent of activity.html */}
                </li>
              </script>
            </div>
          </div>
          <div className="col-12 col-lg-4 pl-lg-6 col-lg-4">
            <div className="sticky">
              <div className="cta">
                <div className="cta__inner">
                  <p className="h5">Explore Microsoft projects</p>
                  <p>
                    Microsoft engineers and community members
                    maintain thousands of GitHub repos: everything
                    from complete samples, to product SDKs, to entire products.
                  </p>
                  <p>
                    Search, filter and explore to find what you're looking for
                    or an opportunity to join in the fun.
                  </p>
                  <a className="link-arrow text-white mt-4" href="/projects">Featured projects</a>
                  <br />
                  <a className="link-arrow text-white mt-4" href="/projects/explore">View all projects</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="wrapper" />
      <section className="wrapper my-6 py-lg-4">
        <header className="mb-6 border-bottom pb-4">
          <h2 className="h3" id="get-started">Get started</h2>
          <p>These issues have been labeled as a great place to start in a project.</p>
        </header>
        <div className="d-lg-flex flex-justify-between">
          <div className="col-12 col-lg-8 pr-lg-6 mb-4 mb-md-0">
            <div className="d-sm-flex flex-wrap">
              <div className="col-12" id="goodFirstIssueFeed">
                <ul className="project-list" id="goodFirstIssueList">
                </ul>
              </div>
              <script id="goodfirstissue-template" type="text/x-handlebars-template">
                <li>
                  {/* TODO: equivalent of good-first-issue.html */}
                </li>
              </script>
            </div>
            <div>&nbsp;</div>
            <header className="mb-6 border-bottom pb-4 mt-6">
              <h2 className="h3" id="help-wanted">Help Wanted</h2>
              <p>
                These issues are a great way to jump in and engage deeply.
              </p>
            </header>
            <div className="d-sm-flex flex-wrap">
              <div className="col-12" id="helpWantedIssueFeed">
                <ul className="project-list" id="helpWantedIssueList">
                </ul>
              </div>
              <script id="helpwantedissue-template" type="text/x-handlebars-template">
                <li>
                  {/* TODO: equivalent of help-wanted-issue.html */}
                </li>
              </script>
            </div>
          </div>
          <div className="col-12 col-lg-4 pl-lg-6 col-lg-4">
            <div>
              <h4 className="h4">Resources</h4>
                <p>
                  A few good resources to learn about getting involved in online communities:
                </p>
                <ul>
                  <li><a href="https://opensource.guide/how-to-contribute/" className="link-arrow text-brand" target="_new">How to Contribute to Open Source</a></li>
                  <li><a href="https://opensource.microsoft.com/codeofconduct/" className="link-arrow text-brand" target="_new">Microsoft's Open Source Code of Conduct</a></li>
                  <li><a href="https://opensource.com/life/14/2/exploring-open-source-beginners" className="link-arrow text-brand" target="_new">Getting Started in Open Source Online and Offline</a></li>
                  <li><a href="https://todogroup.org/guides/participating/" className="link-arrow text-brand" target="_new">TODO Group's Participating in Open Source Communities Guide</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      <CommunityResources />
    </article>
  );
}

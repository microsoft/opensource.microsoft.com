//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import React from 'react';

export default function Why() {
  return (
    <div className="split-content text-white">
      <div className="split-content__content split-content__content--left" style={
        {
          backgroundColor: '#0070f2', // overriding color for more contrast
        }
      }>
        <div data-animate-in="fade" data-animate-in-delay="200">
              <h2 className="mb-4">
                  <span className="h5">Microsoft's communities</span>
                  <span className="h2">Get involved</span>
              </h2>
              <p className="p-lg font-weight-400">
                  We are building value together and welcome everyone to
                  participate. Together, in the open, it's an exciting
                  time to use technology to build hacks, apps, and services.
              </p>

              <div className="mt-6">
                  <a className="link-arrow" href="/collaborate/#get-involved">Happening now</a><br />
                  <a className="link-arrow" href="/collaborate/#get-started">Find a "good first issue"</a><br />
                  <a className="link-arrow" href="/projects">Featured projects</a>
              </div>
          </div>

          <img src="/images/direction/stripes-corner.svg" alt="" />
      </div>

      <div className="split-content__content split-content__content--right">
          <div data-animate-in="fade" data-animate-in-delay="200">
              <h2 className="mb-4">
                  <span className="h5">Learn from our enterprise-scale approach</span>
                  <span className="h2">Our program &amp; tools</span>
              </h2>
              <p className="p-lg font-weight-400">
                  We have worked to develop a strong open source program over the past decade, making
                  it easy for every team at Microsoft to choose to use, contribute to, and release open
                  source software.
              </p>
              <p className="p-lg font-weight-400">
                  Many of our tools and approaches are available for you to learn from, too.
              </p>

              <div className="mt-6">
                  <a className="link-arrow" href="/program">Our program</a><br />
                  <a className="link-arrow" href="/program/#program-tools">Our tools</a><br />
                  <a className="link-arrow" href="/ecosystem">The ecosystem we support</a>
              </div>
          </div>
          <img src="/images/direction/dots-corner.svg" alt="" />
      </div>
    </div>
  );
}

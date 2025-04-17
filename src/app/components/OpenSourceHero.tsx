//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import React from 'react';

import OpenSourceAvatars from './OpenSourceAvatars';

export default function OpenSourceHero() {
  return (
    <div className="wrapper-full bg-dark">
      <div className="wrapper py-6 my-6">
        <div className="d-md-flex flex-justify-between">
          <div className="col-12 col-md-7 col-lg-7 mb-6 mb-md-0">
            <h1 className="h1-xl mb-6" x-data-animate-in="fade" x-data-animate-in-delay="100">
              Open.<br />
              Collaborative.<br />
              Flexible.
            </h1>
            <p className="p-lg text-white col-md-11 col-lg-9" x-data-animate-in="fade" x-data-animate-in-delay="220">
              {`
              Open Source enables Microsoft products and services to 
              bring choice, technology and community to our customers.
              `}
            </p>
            <div data-animate-in="fade" data-animate-in-delay="240">
              <a className="link-arrow text-white mt-4" href="/collaborate">Get involved</a>
              <br />
              <a className="link-arrow text-white mt-4" href="/projects">Explore projects</a>
            </div>
          </div>
          <OpenSourceAvatars />
        </div>
      </div>
    </div>
  );
}

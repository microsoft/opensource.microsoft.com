//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import OpenSourceSvg from './components/svg/OpenSourceSvg';

export default function Oops() {
  return (
    <div className="wrapper-full bg-dark">
      <div className="wrapper py-6 my-6">
        <div className="d-md-flex flex-justify-between">
          <div className="col-12 col-md-7 col-lg-7 mb-6 mb-md-0">
            <h1 className="h1-xl mb-6" data-animate-in="fade" data-animate-in-delay="200">404 Error</h1>
            <p className="p-lg text-white col-md-11 col-lg-9" data-animate-in="fade" data-animate-in-delay="220">
              This page does not exist. Please use the navigation to get back to a working page on the site.
            </p>
            {/*
              <!--
              <div data-animate-in="fade" data-animate-in-delay="240">
                  <a className="link-arrow text-white mt-4" href="/explore">Explore Projects</a>
              </div>
              -->
            */}
          </div>
          <div className="col-12 col-md-5 col-lg-4 pl-md-4 pl-lg-2">
            <figure className="intro-svg">
              <OpenSourceSvg />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

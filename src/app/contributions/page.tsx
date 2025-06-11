//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import CommunityResources from "../components/CommunityResources"
import UpstreamContributionsWidget from "./components/UpstreamContributionsWidget";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contributions that Microsoft makes to open source',
};

export default function Contributions() {
  return (
    <article>
      <div className="page-header">
        <div className="wrapper d-md-flex">
          <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
            <h1 className="h2">
              Contributions
            </h1>
          </div>
          <div className="col-md-6 pl-md-4 col-lg-4">
            <p>
              {`
              Microsoft's engineers can be found participating 
              in communities throughout the Internet and GitHub.
              `}
            </p>
            <div data-animate-in="fade" data-animate-in-delay="240">
              <a className="link-arrow text-white mt-4" href="/collaborate">
                Get involved
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper py-6 my-6">
        <h3 className="h3">
          Recent contributions
        </h3>
        <p>
          {`
          Thousands of Microsoft engineers are active in open source communities, 
          whether contributing for work, hobbies, or maintaining other projects.
          `}
        </p>
        <p>
          Here are some recent contributions that have been made to projects on GitHub.
        </p>
        <p>
          {`
          While many public highlighted contributions here may be for official work, 
          Microsoft does not endorse any contribution listed here.
          `}
        </p>
        <UpstreamContributionsWidget />
      </div>
      <CommunityResources />
    </article>
  );
}

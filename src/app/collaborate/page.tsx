//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import CommunityResources from '../components/CommunityResources';
import HelpWantedWidget from './components/HelpWantedWidget';
import ActivityStreamWidget from './components/ActivityStreamWidget';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get involved',
};

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
              {`
              Right now, open communities are building amazing software together, and
              there are excellent "good first issue" opportunities, if you're looking
              to get involved.
              `}
            </p>
          </div>
        </div>
      </div>
      <section className="wrapper my-6 py-lg-4">
        <ActivityStreamWidget />
      </section>
      <hr className="wrapper" />
      <HelpWantedWidget />
      <CommunityResources />
    </article>
  );
}

//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import React from 'react';

export default function Azure() {
  return (
    <div className="wrapper pt-6 pb-6 mt-6 mb-6">
      <div className="d-md-flex">
        <div className="col-md-6 col-lg-5 mb-4 mb-md-0">
          <h3 className="h5 text-brand font-weight-600 mb-2">Innovate faster and more securely with open source on Azure</h3>
          <p>Build on a highly secure cloud platform designed to protect your data and business assets, including proactive, comprehensive compliance coverage.  Gain the flexibility to move your app anywhere. Operate seamlessly and elastically, on-premises, in hybrid or multicloud environments, or at the edge.</p>
          <div className="link-arrow-external mt-4"><a href="https://azure.microsoft.com/solutions/open-source/#overview">Learn more about open source on Azure</a></div>
        </div>

        {/*
          To restore this section, we would need code to connect to the post-cookie consent process.
        <div className="col-md-6 pl-md-4 pl-lg-6">
          <div>
              <iframe loading="lazy" src="https://docs.microsoft.com/_themes/docs.theme/master/en-us/_themes/global/video-embed.html?id=ec3d794c-eb61-42fe-a0ae-016cfa1663a4" allowfullscreen="" title="" tabindex="0" allow="autoplay" style="width: 100%;height:200px;position: relative;"></iframe>
              <div className="link-arrow-external mt-4"><a href="https://azure.microsoft.com/en-us/blog/genomics-testing-on-the-iss-with-hpe-spaceborne-computer2-and-azure/">Azure - The cloud powering the space race. Read the story</a>.</div>
          </div>               
        </div>
        */}

      </div>
    </div>
  );
}

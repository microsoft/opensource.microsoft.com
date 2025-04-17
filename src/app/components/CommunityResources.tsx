//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import React from 'react';

type Resource = {
  title: string;
  url: string;
};

const COMMUNITY_RESOURCES: Resource[] = [
  {
    title: "Microsoft's Open Source Code of Conduct",
    url: "/codeofconduct",
  },
  {
    title: "Microsoft Contributor License Agreement",
    url: "/cla",
  },
  {
    title: "Third-Party Source Disclosures",
    url: "https://3rdpartysource.microsoft.com/",
  },
  {
    title: "Microsoft's Open Source Program",
    url: "/program/",
  },
];

export default function CommunityResources() {
  return (
    <>
      <div className="wrapper-full">
        <div className="wrapper py-6 my-6">
          <h3 className="h3">Community Resources</h3>
          <div className="d-md-flex">
            <div className="col-md-6 col-lg-5 mb-4 mb-md-0">
              <p>
                We welcome you to our open communities. Please check out
                our Code of Conduct and one-time Contributor License Agreement
                to help us all participate with care.
              </p>
            </div>
            <div className="col-md-6 pl-md-4 pl-lg-6">
              {COMMUNITY_RESOURCES.map((resource, index) => (
                <div key={index}>
                  <a
                    className="link-arrow-external mb-2"
                    href={resource.url}
                    target="_blank"
                    rel="noopener"
                  >
                    {resource.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

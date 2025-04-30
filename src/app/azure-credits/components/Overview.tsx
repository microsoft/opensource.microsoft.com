//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

const AzureCreditsOverview = () => {
  return (
    <div className="pb-6">
      <h4 className="h4">
        Azure credits for open source projects
      </h4>
      <p>
        {`
        Many Microsoft product teams grant Azure credits to open source communities 
        to support their work. These credits augment other complementary programs
        such as GitHub repositories, CI/CD with GitHub Actions, as well as financial 
        contributions through the Microsoft FOSS Fund, foundation memberships, and
        other ecosystem support.
        `}
      </p>
      <p>
        {`
        Microsoft is not accepting new applications from projects directly and 
        is instead relying on strategic, organic relationships between Microsoft
        businesses and the open source that they depend on.
        `}
      </p>
    </div>
  );
}

export default AzureCreditsOverview;

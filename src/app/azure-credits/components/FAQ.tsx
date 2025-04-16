//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

const AzureCreditsQuestions = () => {
  return (
    <div className="pb-6">
      <h4 className="h4">
        Frequently asked questions
      </h4>
      <p>
        Frequently asked questions about the Azure credits for open source projects program.
      </p>
      <ul className="ul mt-4">
        <li>
          <b>What is this program?</b>
          <br />
          Microsoft offers grants of Azure credits to open source projects to help with their short-term development, infrastructure, and testing needs. Workloads such as long-term website hosting, continuous integration, and permanent database hosting are not a good fit for grant programs.
        </li>
        <li>
          <b>Why does Microsoft provide Azure credits?</b>
          <br />
          Microsoft recognizes the value of contributing to communities, and we are in a position to provide grants to support the ecosystem. Our product and service teams often build strategic relationships with communities and are able to choose to provide credit as a result.
        </li>
        <li>
          <b>What are the grants for and how long do they last?</b>
          <br />
          Most grants span a single Microsoft fiscal year, but strategic relationships with specific businesses may be available on other terms.
        </li>
      </ul>
    </div>
  );
}

export default AzureCreditsQuestions;

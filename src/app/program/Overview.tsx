//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

export default function Overview() {
  return (
    <div className="pb-6">
      <p>
        {`
        The Microsoft open source program is managed by the Open Source Programs Office
        in partnership with expert teams across Microsoft. A community of open source
        experts, open source leaders, and others help curate guidance and policy.
        `}
      </p>
      <h4 className="h4">One Engineering System (1ES)</h4>
      <p>
        {`
        The 1ES team at Microsoft has made using,
        releasing and contributing to open source an easy, efficient, native
        part of the engineering experience.
        `}
      </p>
      <p>
        Building on a foundation of <strong
        >eliminate</strong> (reducing complex and dated {' '}
        policies for the modern engineering era), <strong
        >automate</strong> (detecting open {' '}
        source use, automated policy and decision guides, legal alerts and security workflows),{' '}
        and <strong>delegate</strong> (letting business groups make decisions aligned with{' '}
        their priorities and goals), the open source program has scaled.
      </p>
      <ul className="ul mt-4">
        <li>
          <b>Built into the engineering system:</b>{' '}
          {`
          Powered by GitHub and Azure Pipelines, and internal hyperscale 
          CloudBuild, CloudTest, and policy systems, many tasks as simple as
          maintaining an inventory of the open source used in builds and products
          is automatic.
          `}
        </li>
        <li>
          <b>Using GitHub Enterprise Cloud:</b>{' '}
          Over 70,000 engineers at Microsoft are using {' '}
          <a href="https://github.com" className="link-standard" target="_new">GitHub Enterprise Cloud</a> {' '}
          to host and release official Microsoft open source projects, samples,{' '}
          and documentation, building communities and connecting directly with{' '}
          technologists and Microsoft customers right on GitHub, working in the open.
        </li>
      </ul>
      <h4 className="h4">Expert support &amp; resources</h4>
      <p>
        A coalition of teams, experts, and friendly resources are available{' '}
        to make sure that everyone at Microsoft understands how to use open source.
      </p>
      <ul className="ul mt-4">
        <li>
          <b>Easy, crisp guidance for engineers:</b>{' '}
          Comprehensive reference material for everyone at Microsoft to refer to{' '}
          helps to share knowledge and reduce confusion. Checklists, policies and{' '}
          advanced guides have been prepared by Subject Matter Experts, open source attorneys, and {' '}
          curated by engineers, to make learning about using open source easy and efficient.
          <br />
          <br />
          If you work at Microsoft, you can authenticate and find these resources at{' '}
          <a href="https://aka.ms/opensource" target="_new">aka.ms/opensource</a>.
        </li>
        <li>
          <b>Open Source Standards and Legal Team:</b>{' '}
          Expert attorneys and program managers with decades of open source experience{' '}
          from across the industry make up the legal team that crafts policies, guidance,{' '}
          and inform their clients regarding all their licensing and open community needs. {' '}
          Every employee at Microsoft has access to an open source attorney dedicated to their{' '}
          organization and familiar with their business goals and unique needs.
        </li>
        <li>
          <b>Open Source Champs:</b>{' '}
          Internal e-mail discussion lists and Microsoft Teams channels make it{' '}
          easy and straightforward to connect with open source maintainers and{' '}
          experts to get answers.
          <br/>
          <br/>
          The Open Source Champs come from teams across Microsoft and are able to{' '}
          help advise their team and help share knowledge. 
        </li>
        <li>
          <b>Business and Legal review process:</b>{' '}
          Some open source activities at the company, depending on use case, license,{' '}
          or other conditions, may automatically trigger a straightforward business and legal{' '}
          review process.
          <br/>
          <br/>
          An open source review takes the form of a standard engineering work{' '}
          item and presents reviewers with a contextual look at the business goals, specific{' '}
          use scenario, and other aspects, to help make the right decisions for some scenarios.
        </li>
        <li>
          <b>Open Source Executive Council:</b>{' '}
          Essentially the board of directors for the open source program, the{' '}
          executive council consists of leaders from across Microsoft. The council{' '}
          helps to guide the program, highlight opportunities, and provide a {' '}
          central place for decisions regarding open source.
        </li>
      </ul>
      <h4 className="h4">OpenChain 2.1 conformance</h4>
      <p>
        Trust is key to open source. Developers should be able to trust users to {' '}
        respect their licensing choices. And when you receive software, you should {' '}
        be able to trust that the open source licenses were followed.
      </p>
      <p>
        The <a href="https://www.openchainproject.org/" target="_new">OpenChain Project</a> {' '}
        plays an important role in building trust by setting standards that define how to operate a {' '}
        high-quality open source compliance program. It means that when you receive open source from a {' '}
        company that follows the OpenChain standard, you can be assured that the code went through a rigorous {' '}
        license compliance process. You can trust it.
      </p>
      <p>
        We <a href="https://cloudblogs.microsoft.com/opensource/2019/12/12/announcing-microsoft-openchain-conformance/" 
        target="_new">
        announced that Microsoft is OpenChain 2.0-conformant</a> {' '}
        in December 2019 and continue to keep the program up-to-date, most recently self-certifying OpenChain 2.1 requirements.
      </p>
    </div>
  );
}

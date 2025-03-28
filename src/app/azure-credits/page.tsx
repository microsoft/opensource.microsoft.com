//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

// Page title: Azure Credits for Open Source Projects

// @cspell: ignore Snakemake

export default function AzureCredits() {
  return (
    <article className="program-page">
      <div className="page-header">
        <div className="wrapper">
          <div className="col-md-10 col-lg-7 mx-auto">
            <h1 className="h2">Azure credits for open source projects</h1>
          </div>
        </div>
      </div>
      <div className="wrapper-full bg-light">
        <div className="wrapper my-6 py-4">
          <div className="col-md-10 col-lg-7 mx-auto">
            <h3 className="h4 font-weight-400 mb-4">
              We are offering Azure credits to open source projects for their use for testing, builds, 
              and other infrastructure support needs. Projects must apply for credits. Applications are 
              reviewed and applicants will be contacted with a decision within 3-4 weeks.
            </h3>
          </div>
        </div>
      </div>
      <div className="tabs">
        <nav className="wrapper my-6" data-require-javascript="yes" data-javascript-show="immediate">
          <div className="col-md-10 col-lg-7 mx-auto">
            <div className="tabs__tabs" role="tablist">
              <a className="tabs__tab is-active" role="tab" href="#credits-overview" data-tab="credits-overview">Overview</a>
              <a className="tabs__tab" href="#credits-faq" role="tab" data-tab="credits-faq">FAQ</a>
              <a className="tabs__tab" href="#credits-apply" role="tab" data-tab="credits-apply">Apply</a>
            </div>
          </div>
        </nav>
        <div className="wrapper my-6 pt-lg-3 pb-4">
          <div className="col-md-10 col-lg-7 mx-auto">
            <noscript><h2>Overview</h2></noscript>
            <div className="tabs__content is-active" data-tab="credits-overview">
              {/* OVERVIEW */}

              <div className="pb-6">
                <h4 className="h4">
                  Azure credits for open source projects
                </h4>
                <p>
                  Microsoft makes renewable Azure credits available in terms up to a year
                  to select open source projects for test, build, and other development work.
                </p>
                <p>
                  Here's how some of the projects
                  participating in the program are benefitting from Azure credits:
                </p>
                <ul className="ul mt-4">
                  <li>
                    <b>FreeBSD</b>
                    <br />
                    FreeBSD is a Unix-like operating system for servers, desktops, and embedded platforms. Azure credits have helped developers to work on custom kernels. 
                    They are now releasing more timely updates for security advisories for third-party software and spinning up larger VM classes for package building 
                    and smaller VM classes for testing, both of which are hugely helpful to their developers.
                  </li>
                  <li>
                    <b>AlmaLinux</b>
                    <br />
                    AlmaLinux OS is a 1:1 binary compatible clone of RHEL®, guided and built by the community. They were the first downstream RHEL clone to be 
                    released after the announcement by RedHat that support for CentOS Linux was ending, and their goal is to provide an option for folks who 
                    have historically used CentOS Linux, and for whom CentOS Stream is not an option. The AlmaLinux OS Foundation is a 501(c)(6) non-profit 
                    created for the benefit of the AlmaLinux OS community.
                  </li>
                  <li>
                    <b>Haskell</b>
                    <br />
                    Haskell is a purely functional programming language. Azure credits are helping their continuous integration system, releases, their GitLab instances, 
                    and other builds.
                  </li>
                <li>
                  <b>Snakemake</b>
                  <br />
                      The Snakemake workflow management system is a tool for creating reproducible and scalable data analyses. Workflows are described via a human-readable,
                      Python-based language, and Snakemake enables these to be seamlessly scaled to server, cluster, grid, and cloud environments. 
                  </li>
                </ul>
              </div>

              {/* end OVERVIEW */}
            </div>
            <div className="tabs__content" data-tab="credits-faq">
              <noscript><h2>FAQ</h2></noscript>
              {/* FAQ */}
                      
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
                    Microsoft is offering grants of Azure credits to open source projects to help with their short-term development, infrastructure, and testing needs. Workloads such as long-term website hosting, continuous integration, and permanent database hosting are not a good fit for this program. 
                  </li>
                  <li>
                    <b>Why is Microsoft running this program?</b>
                    <br />
                    We are giving back to the open source ecosystem we participate in and depend on. 
                  </li>
                  <li>
                    <b>What are the grants for and how long do they last?</b>
                    <br />
                    Each grant will be given through May 31st of the calendar year. Applicants will need to re-apply each year if they would like credits again. 
                  </li>
                  <li>
                    <b>What open source projects are eligible to apply?</b>
                    <br />
                    Any open source project with an <a href="https://opensource.org/licenses/category">OSI-approved license </a> and a formalized Code of Conduct is eligible 
                    to apply.
                  </li>
                  <li>
                    <b>How do I apply?</b><br />
                    Fill out and submit the application form on the Apply tab. 
                  </li>
                  <li>
                    <b>If granted credits, what is required?</b><br />
                    Projects will need to have or setup some kind of Microsoft account (Outlook.com mail, or have a Microsoft 365 account) to 
                    connect the subscription to. Azure requires a credit card to connect to a subscription as well. Notice is provided before 
                    credits expire if you need to spin down resources or cancel the subscription to avoid charge.
                  </li>
                  <li>
                    <b>When will I be notified of the decision on my application?</b>
                    <br />
                    We review all applications and notify all applicants of our decisions within 3-4 weeks. 
                  </li>
                </ul>
              </div>

              {/* end FAQ */}
            </div>
            <div className="tabs__content" data-tab="credits-apply">
              <noscript><h2>Apply</h2></noscript>
              <div className="pb-2">
                <h4 className="h4">
                  Apply for the Azure credits for open source projects program
                </h4>
                <p>
                  You can use this page to apply for the Azure credits for open source projects program.
                </p>
              </div>
              <p>
                Applications to the program will be reviewed and you will receive a notification of the decision within 3-4 weeks. 
              </p>
              <div className="ul mt-4">
                <iframe
                  title="Azure Credits Application" 
                  width="640px" 
                  height="480px" 
                  src= "https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR90vS-jx9TxHvDhlVnIdXodUQUZMWE1BNVZXVTgxWEVGMk8zNEtNWDZKQSQlQCN0PWcu&embed=true" 
                  frameBorder={0} 
                  marginWidth={0} 
                  marginHeight={0}
                  style={{
                    border: "none",
                    maxWidth: "100%",
                    maxHeight: "100vh"
                  }} 
                  allowFullScreen={true}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

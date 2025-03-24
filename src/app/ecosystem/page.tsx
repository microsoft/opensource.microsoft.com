//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import CommunityResources from "../components/CommunityResources";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Page title: Ecosystem

// TODO: {% include upstream-contributions.js %}

type FundedProject = {
  title: string;
  logo?: string;
  projectUrl?: string;
  linkText?: string;
  externalLogo?: string;
  description: string;
  fund?: string;
  awarded?: boolean;
  processing?: string;
  context?: string;
};

type CommunityProject = {
  title: string;
  logo?: string;
  developer?: string;
  projectUrl?: string;
  linkText?: string;
  externalLogo?: string;
  description: string;
};

function getCommunityProjects() {
  const fossFundDir = path.join(process.cwd(), '_community');
  const files = fs.readdirSync(fossFundDir);

  return files.map((file) => {
    const filePath = path.join(fossFundDir, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return data as CommunityProject;
  });
}

function getStaticFundedProjects() {
  const fossFundDir = path.join(process.cwd(), '_fossfund');
  const files = fs.readdirSync(fossFundDir);

  return files.map((file) => {
    const filePath = path.join(fossFundDir, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return data as FundedProject;
  });
}

export default function Ecosystem() {
  const projects = getStaticFundedProjects();
  const communities = getCommunityProjects();
  return (
    <article>
      <div className="page-header">
        <div className="wrapper d-md-flex">
          <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
            <h1 className="h2">Ecosystem</h1>
          </div>
          <div className="col-md-6 pl-md-4 col-lg-4">
            <p>
              Microsoft is proud to support amazing <a href="#fossfund">open source projects</a>, <a href="#foundations">initiatives, and foundations</a>,
              to offer <a href="#credits">Azure credits</a> to open source projects,
              and to make <a href="#contributions">upstream contributions</a> to thousands of open source projects on GitHub and beyond.
            </p>
            <p>
              The examples on this page are just a few of the ways that we're working with the broader open source ecosystem to collectively empower
              every person and every organization on the planet to achieve more.
            </p>
            <div data-animate-in="fade" data-animate-in-delay="240">
              <a className="link-arrow text-white mt-4" href="/collaborate">See recent activity in Microsoft open source repositories</a>
            </div>
          </div>
      </div>
    </div>
    <div className="wrapper my-6 py-6">
      <div className="d-md-flex flex-items-center">
        <div className="col-md-6 col-lg-5 pr-md-4 pr-lg-6 mb-4 mb-md-0">
        <h2 className="h2" id="fossfund">FOSS Fund</h2>
          <p>
            The Free and Open Source Software Fund (FOSS Fund) is a
            way for our employees to collectively select open source
            projects to receive sponsorship awards throughout the year.
          </p>
          <p>
            Microsoft's engineers select projects they are super passionate about.
            Only employees who contribute to open source projects can
            participate in the selection process.
          </p>
          <p>
            The following projects are a subset of the many that have been sponsored.
          </p>
          <p>
            <a className="link-arrow-external" href="https://aka.ms/microsoftfossfund" target="_new">
              Learn about the Microsoft FOSS Fund process and see the full list of sponsored projects
            </a>
          </p>
      </div>
      <div className="col-md-6 pl-md-4 col-lg-4">
        <img className="mb-4" src="/images/direction/community-shapes.svg" alt="" />
      </div>
    </div>
  </div>
  <div className="wrapper py-6 my-6">
    <div className="d-sm-flex flex-wrap">
      {projects.map((post: FundedProject) => {
        let img = null;
        if (post.externalLogo) {
          img = post.externalLogo;
        } else if (post.logo) {
          img = `/images/fossfund/${post.logo}`;
        }
        return (
          <div key={post.title} className="col-12 col-sm-6 col-md-4 pr-sm-3 pr-lg-4 mb-6" data-animate-in="fade"
              data-animate-in-delay="200">
            {post.projectUrl ? (
              <a className="mb-3" href={post.projectUrl} target="_new">
                {img ? (
                  <img className="mb-4 icon" src={img} alt={`${post.title} logo`} />
                ) : (
                  <span className="mb-4 icon"></span>
                )}
                <h3 className="h3 mb-3 text-brand">{post.title}</h3>
              </a>
            ) : (
              <>
                {img ? (
                  <img className="mb-4 icon" src={img} alt={`${post.title} logo`} />
                ) : (
                  <span className="mb-4 icon"></span>
                )}
                <h3 className="h3 mb-3 text-brand">{post.title}</h3>
              </>
            )}
            <p>{post.description}</p>
            {post.processing && <p className="f5">{post.processing}</p>}
            {post.context && <p className="f5">{post.context}</p>}
            {post.projectUrl && (
              <a className="link-arrow-external mt-3" href={post.projectUrl}>
                {post.linkText || `Learn about ${post.title}`}
              </a>
            )}
          </div>
        );
      })}
    </div>
  </div>
  <hr className="wrapper" />
    <div className="wrapper my-6 py-6">
      <div className="d-md-flex flex-items-center">
        <div className="col-md-6 col-lg-5 pr-md-4 pr-lg-6 mb-4 mb-md-0">
          <h2 className="h2" id="foundations">Foundations &amp; Initiatives</h2>
          <p>
            Microsoft is proud to participate, partner, and sponsor
            many amazing initiatives to better the open source ecosystem.
          </p>
          </div>
          <div className="col-md-6 pl-md-4 col-lg-4">
            <img className="mb-4" src="/images/direction/community-shapes.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="wrapper py-6 my-6">
        <div className="d-sm-flex flex-wrap foundation-list">
          {communities.map((post: CommunityProject) => {
            let img = null;
            if (post.externalLogo) {
              img = post.externalLogo;
            } else if (post.logo) {
              img = `/images/foundation/${post.logo}`;
            }
            return (
              <div key={post.title} className="col-12 col-sm-6 col-md-4 pr-sm-3 pr-lg-4 mb-6" data-animate-in="fade"
                  data-animate-in-delay="200">
                {post.projectUrl ? (
                  <a href={post.projectUrl} target="_new">
                    {img ? (
                      <img className="mb-4 icon" src={img} alt={`${post.title} logo`} />
                    ) : (
                      <span className="mb-4 icon"></span>
                    )}
                    <h3 className="h3 mb-3 text-brand">{post.title}</h3>
                  </a>
                ) : (
                  <>
                    {img ? (
                      <img className="mb-4 icon" src={img} alt={`${post.title} logo`} />
                    ) : (
                      <span className="mb-4 icon"></span>
                    )}
                    <h3 className="h3 mb-3 text-brand">{post.title}</h3>
                  </>
                )}
                <p>{post.description}</p>
                {post.projectUrl && (
                  <a className="link-arrow-external mt-3" href={post.projectUrl}>
                    {post.linkText || `Learn about ${post.title}`}
                  </a>
                )}
              </div>
            );
          })
          }
        </div>
      </div>
      <div className="wrapper my-6 py-6">
        <div className="d-md-flex flex-items-center">
          <div className="col-md-6 col-lg-5 pr-md-4 pr-lg-6 mb-4 mb-md-0">
            <h2 className="h2" id="credits">
              Azure Credits
            </h2>
            <p>
              We are offering Azure credits to open source projects for their use for testing, builds, 
              and other infrustructure support needs. Projects must apply for credits. Applications are 
              reviewed and applicants will be contacted with a decision within 3-4 weeks.
            </p>
            <p>
              <a className="link-arrow-external" href="/azure-credits">
                Learn about our Azure Credits program
              </a>
            </p>
          </div>
          <div className="col-md-6 pl-md-4 col-lg-4">
            <img className="mb-4" src="/images/direction/community-shapes.svg" alt="" />
          </div>
        </div>
      </div>
      <hr className="wrapper" />
      <div className="wrapper my-6 py-6">
        <div className="col-lg-8 mx-auto">
          <div>
            <h2 className="h2" id="contributions">
              Recent Contributions
            </h2>
            <p>
              Whether an official contribution as part of a team's business goals,
              an after-hours project in robotics and hackathons, or contributions to
              non-profits and communities, our employees are always involved.
            </p>
          </div>
        </div>
      </div>
      {/* TODO: include octicons.html */}
      <div className="wrapper py-6 my-6">
        <div className="col-lg-8 mx-auto">
          <div className="d-sm-flex flex-wrap" style={{minHeight: '350px'}}>
            <div id="contributionsFeed" className="col-12">
              <noscript>
                <h2>JavaScript is required for this interactive feature.</h2>
                <p>This section works best with JavaScript. A feed of recent contributions is used with a REST API and JavaScript.</p>
              </noscript>
              <ul className="project-list" id="contributionsList"></ul>
            </div>
            <script id="contributions-template" type="text/x-handlebars-template">
              <li>
                {/* TODO:
               
                include activity.html
                also previously included upstream-contribution.html

                */}
              </li>
            </script>
          </div>
        </div>
        <div className="mt-6 col-lg-8 mx-auto">
          <p className="t6">
            NOTE: This data represents contributions on GitHub that some of our employees have opted in to sharing. Microsoft does not endorse any particular contribution here, as this list will include everything from hobbyist work through official upstream contributions.
          </p>
        </div>
      </div>
      <CommunityResources />
    </article>
  );
}

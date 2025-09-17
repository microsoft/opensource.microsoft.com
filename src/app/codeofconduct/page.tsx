//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Code of Conduct for Microsoft open source projects',
};


export default function CodeOfConduct() {
  return (
    <article>
      <div className="page-header">
        <div className="wrapper d-md-flex">
          <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
            <p>Microsoft Open Source</p>
            <h1 className="h2">Code of Conduct</h1>
          </div>
          <div className="col-md-6 pl-md-4 col-lg-4">
            <p>Have a question?</p>
            <div data-animate-in="fade" data-animate-in-delay="240">
              <Link className="link-arrow text-white mt-4" href="/codeofconduct/faq/">Read our FAQ</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper my-6 py-4">
        <div className="col-md-10 col-lg-7 mx-auto longform">
          <p className="p-lg">
            {`
            This code of conduct outlines expectations for participation in Microsoft-managed open source communities, 
            as well as steps for reporting unacceptable behavior. We are committed to providing a welcoming and 
            inspiring community for all. People violating this code of conduct may be banned from the community.
            `}
          </p>
          <br />
          <br />
          <div className="pb-6">
            <h3 className="h3">Our Pledge</h3>
            <p>
              {`
              We as members, contributors, and leaders pledge to make participation in our community a 
              harassment-free experience for everyone, regardless of age, body size, visible or invisible 
              disability, ethnicity, sex characteristics, gender identity and expression, level of experience, 
              education, socio-economic status, nationality, personal appearance, race, caste, color, religion, 
              or sexual identity and orientation.
              `}
            </p>
            <p>
              {`
              We pledge to act and interact in ways that contribute to an open, welcoming, diverse, 
              inclusive, and healthy community.
              `}
            </p>
          </div>
          <div className="pb-6">
            <h3 className="h3">
              Our Standards
            </h3>
            <p>
              Examples of behavior that contributes to a positive environment for our community include:
            </p>
            <ul>
              <li>Demonstrating empathy and kindness toward other people</li>
              <li>Being respectful of differing opinions, viewpoints, and experiences</li>
              <li>Giving and gracefully accepting constructive feedback</li>
              <li>Accepting responsibility and apologizing to those affected by our mistakes, and learning from the experience</li>
              <li>Focusing on what is best not just for us as individuals, but for the overall community</li>
            </ul>
            <br />
            <p>
              Examples of unacceptable behavior include:
            </p>
            <ul>
              <li>The use of sexualized language or imagery, and sexual attention or advances of any kind</li>
              <li>Trolling, insulting or derogatory comments, and personal or political attacks</li>
              <li>Public or private harassment</li>
              <li>Disruptive behavior</li>
              <li>Publishing others' private information, such as a physical or email address, without their explicit permission</li>
              <li>Other conduct which could reasonably be considered inappropriate in a professional setting</li>
            </ul>
          </div>
          <div className="pb-6">
            <h3 className="h3">
              Enforcement Responsibilities
            </h3>
            <p>
              {`
              Community leaders are responsible for clarifying and enforcing our standards of acceptable 
              behavior and will take appropriate and fair corrective action in response to any behavior 
              that they deem inappropriate, threatening, offensive, or harmful.
              `}
            </p>
            <p>
              {`
              Community leaders have the right and responsibility to remove, edit, or reject comments,
              commits, code, wiki edits, issues, and other contributions that are not aligned to this 
              Code of Conduct, and will communicate reasons for moderation decisions when appropriate.
              `}
            </p>
          </div>
          <div className="pb-6">
            <h3 className="h3">
              Scope
            </h3>
            <p>
              {`
              This Code of Conduct applies within all community spaces, and also applies when an individual 
              is officially representing the community in public spaces. Examples of representing our 
              community include using an official e-mail address, posting via an official social media 
              account, or acting as an appointed representative at an online or offline event.
              `}
            </p>
            <p>
              {`
              This Code of Conduct also applies to actions taken outside of these spaces, and which have 
              a negative impact on community health.
              `}
            </p>
          </div>
          <div className="pb-6">
            <h3 className="h3">
              Enforcement and Reporting
            </h3>
            <p>
              {`
              We encourage all communities to resolve issues on their own whenever possible. Instances of 
              abusive, harassing, or otherwise unacceptable behavior should be reported to the community
              leaders responsible for enforcement in a given project or to `}
              <a
              className="link-standard" href="mailto:opencode@microsoft.com">
                opencode@microsoft.com
                </a>.
              {`
              If you are a Microsoft employee looking for support, please use the `}
              <a 
              href="https://aka.ms/community-911-landingpage" className="link-standard" target="_new">
                Community 911 reporting process
              </a>.
            </p>
            <p>
              {`
              Your report will be handled in accordance with the issue resolution process described 
              in the Code of Conduct FAQ. All project and community leaders are obligated to respect 
              the privacy and security of the reporter of any incident.
              `}
            </p> 
          </div>
          <div className="pb-6">
            <h3 className="h3">
              Responsible Use of AI-Generated Content
            </h3>
            <p>
              {`
              We are excited about the innovation and the opportunities that generative AI tools like 
              GitHub Copilot bring to our community. It's essential to use these technologies thoughtfully 
              and in alignment with our shared values of integrity, respect, and authenticity.
              `}
            </p>
            <p>
              When using generative AI to contribute to the community:
            </p>
            <ul>
              <li><strong>Take ownership of your contributions.</strong> You are responsible for the content you share.</li>
              <li><strong>Review and revise AI-generated responses before posting.</strong> Ensure they reflect your own understanding and voice.</li>
              <li><strong>Apply your expertise </strong> to validate that the information is accurate, relevant, and helpful.</li>
            </ul>
            <p>
              {`
              These practices support a community built on trust, collaboration, and mutual respect. 
              Misuse of AI-generated content may be considered a violation of our Code of Conduct. 
              Please refer to the enforcement section for more details.
              `}
            </p>
          </div>          
          <div className="pb-6">
            <h3 className="h3">
              Attribution
            </h3>
            <p>
              This Code of Conduct is adapted from the <a href="https://www.contributor-covenant.org" 
              className="link-standard" target="_new">Contributor Covenant</a>, version 2.0, available 
              at <a href="https://www.contributor-covenant.org/version/2/0/code_of_conduct.html" 
              className="link-standard" target="_new">
                https://www.contributor-covenant.org/version/2/0/code_of_conduct.html
              </a>.
            </p>
            <p>
              Community Impact Guidelines were inspired by <a href="https://github.com/mozilla/inclusion" 
              className="link-standard" target="_new">Mozilla's code of conduct enforcement ladder</a>.
            </p>
            <p>
              Expanding scope to include external impact on community health inspired by <a 
              href="https://opensource.fb.com/code-of-conduct/" className="link-standard" 
              target="_new">Facebook's Open Source Code of Conduct</a> and <a 
              href="https://www.mozilla.org/about/governance/policies/participation/" 
              className="link-standard" target="_new">Mozilla's Community Participation Guidelines</a>.
            </p>
            <p>
              For answers to common questions about this code of conduct, see the FAQ at <a 
              href="https://www.contributor-covenant.org/faq" className="link-standard" 
              target="_new">https://www.contributor-covenant.org/faq</a>. Translations are 
              available at <a href="https://www.contributor-covenant.org/translations" className="link-standard" 
              target="_new">https://www.contributor-covenant.org/translations</a>.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

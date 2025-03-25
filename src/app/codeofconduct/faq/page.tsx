//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import React from 'react';

// Page title: Code of Conduct - FAQ

type Entry = {
  question: string;
  answer: string | React.ReactNode;
};

const FAQ_ENTRIES: Entry[] = [
  {
    question: "Why have a Code of Conduct?",
    answer: (
      <>
        People and communities are the foundation of open source. Communities thrive through diversity of thought and the safety of its members. Microsoft has a deep-seated commitment to diversity and inclusion. All Microsoft employees enjoy a safe work environment and a culture of mutual respect and responsibility. Our team members and open source partners should enjoy the same environment when collaborating on open source projects.
        <br />
        <br />
        While conduct issues seldom arise, when they do, they are often very public and very passionate. It is best for the community to be prepared with:
        <ul>
          <li>A clear and accessible <b>Code of Conduct</b> stating the norms under which projects operate</li>
          <li>An <b>Issue Resolution Process</b> for addressing cases where these norms are not being maintained</li>
        </ul>
      </>
    ),
  },
  {
    question: "Why this Code of Conduct?",
    answer: (
      <>
        The Microsoft Open Source Code of Conduct is an instantiation of the{" "}
        <a className="link-standard" href="https://www.contributor-covenant.org/version/2/0/code_of_conduct/">
          Contributor's Covenant 2.0
        </a>
        , that captures the Microsoft culture of equality, respect and inclusion. By leveraging this template, which is used by many{" "}
        <a className="link-standard" href="https://www.contributor-covenant.org/adopters/">
          open source projects
        </a>
        , we acknowledge both the opportunity gained by leveraging a community-based effort for inclusion, and responsibility to contribute to its evolution.
      </>
    ),
  },
  {
    question: "How does a project adopt the code and process?",
    answer: (
      <p>
        All Microsoft projects are automatically covered by the Code of Conduct and the Issue Resolution Process. However, it is critical that everyone in the communities be aware of the code and process. For that reason, all projects must link to the Code of Conduct. Please refer to this{" "}
        <a className="link-standard" href="https://github.com/microsoft/repo-templates/blob/main/shared/CODE_OF_CONDUCT.md">
          repository standard
        </a>{" "}
        for the current CODE_OF_CONDUCT.md version.
      </p>
    ),
  },
  {
    question: "What if my Microsoft project already has a Code of Conduct?",
    answer: (
      <>
        <p>
          Thanks for being proactive in this important area. You are welcome to continue using your existing Code of Conduct, or you may change to the{" "}
          <a className="link-standard" href="https://opensource.microsoft.com/codeofconduct/">
            Microsoft Open Source Code of Conduct
          </a>
          . Either way, all Microsoft projects must use the same issue resolution process. Please ensure that your documentation and guidance is updated to point people at the process outlined in this FAQ (see below).
        </p>
        <p>
          Projects in the .NET Foundation are already covered by the{" "}
          <a className="link-standard" href="https://www.dotnetfoundation.org/code-of-conduct">
            .NET Foundation Contributors Code of Conduct
          </a>
          . As such, there is no need for .NET Foundation projects to make any changes.
        </p>
      </>
    ),
  },
  {
    question: "How do I raise a concern?",
    answer: (
      <>
        <p>
          If you have witnessed or been subjected to a violation of the Code of Conduct, please send an email to{" "}
          <a className="link-standard" href="mailto:opencode@microsoft.com">
            opencode@microsoft.com
          </a>
          . Your message will be handled in a secure and confidential manner. This email address is monitored by the Open Source Program's Office, who are not directly active in open source projects or communities — so you can be sure that you are not communicating with a person involved in the issue you are reporting.
        </p>
        <p>
          You will receive a response within one business day acknowledging receipt of your email and describing the process for its resolution. (See below for more details.)
        </p>
        <p>
          NOTE: this process is not appropriate for reporting spamming. Please reach out to{" "}
          <a className="link-standard" href="https://support.github.com/contact">
            GitHub Support
          </a>{" "}
          for these issues.
        </p>
      </>
    ),
  },
  {
    question: "What is the process for addressing issues that arise?",
    answer: (
      <>
        <p>
          Emails sent to{" "}
          <a className="link-standard" href="mailto:opencode@microsoft.com">
            opencode@microsoft.com
          </a>{" "}
          or reported directly to a member of the OSPO team, kick off the following process:
        </p>
        <ol>
          <li>Your message will be acknowledged within one business day.</li>
          <li>
            Within the following business day a small, (2-3) person team will be assembled from a pool of Microsoft employee volunteers to review your concern. This team will be as diverse as possible given its size and will pull in additional people as needed to gain further insight and provide guidance. The team will not include anyone directly involved in the issue that has been raised.
          </li>
          <li>
            From there the team will work with you and the others involved to come to a conclusion. While issue complexity varies, the goal is to resolve issues within five working days.
          </li>
          <li>All communication will be confidential with very limited circulation.</li>
        </ol>
        <div className="pre">
          <div>
            <p>Step 1: Issue Reported</p>
            <p>
              <span className="org">Reporter</span> reports directly to a member of the OSPO team or via email to{" "}
              <a className="link-standard" href="mailto:opencode@microsoft.com">
                opencode@microsoft.com
              </a>
            </p>
            <small>Email address is published with Code of Conduct, linked from every Microsoft Open Source project's repo.</small>
            <hr />
          </div>
          <div>
            <p>Step 2: Acknowledgment</p>
            <p>
              <span className="co">Coordinator</span> acknowledges to <span className="org">Reporter</span> receipt of issue
            </p>
            <small>Coordinator replies via email to set expectations and explain resolution process.</small>
            <hr />
          </div>
          <div>
            <p>Step 3: Assignment</p>
            <p>
              <span className="co">Coordinator</span> assigns 2-3 person <span className="rt">Resolution Team</span> to issue
            </p>
            <small>Coordinator verifies that selected team members are not involved in the issue and are available to provide timely resolution.</small>
            <hr />
          </div>
          <div>
            <p>Step 4: Resolution</p>
            <p>
              <span className="rt">Resolution Team</span> works with <span className="org">Reporter</span> to solve the issue.
            </p>
            <small>Resolution Team contacts Originator to collect information as needed, agree on appropriate steps, and drive resolution.</small>
          </div>
        </div>
      </>
    ),
  },
  {
    question: "How does the resolution team work?",
    answer: (
      <>
        <p>Beyond the norms and values set out in the Code of Conduct, issue review teams operate under the following principles:</p>
        <ul>
          <li>
            <b>Safety & Privacy</b> — Safety and privacy of all involved are at the center of resolution procedure.
          </li>
          <li>
            <b>Equality</b> — Contribution value or status in the community are not relevant to the review. Key people do not have more rights (either to abuse or be protected from abuse) than others in the community.
          </li>
          <li>
            <b>Independence</b> — Reviewers must act and be seen to act with independence from the project(s) in question and from Microsoft.
          </li>
          <li>
            <b>Consequence</b> — If a report is validated by the resolution team, appropriate consequences will be applied. These can be very minimal (written warning) or serious (full ban) depending on the violation. Repeated violations will result in escalation of consequence.
          </li>
        </ul>
      </>
    ),
  },
];

export default function CodeOfConductFaq() {
  return (
    <article>
      <div className="page-header">
        <div className="wrapper d-md-flex">
          <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
            <p>Microsoft Open Source</p>
            <h1 className="h2">Code of Conduct FAQ</h1>
          </div>
        </div>
      </div>
      <div className="wrapper my-6 py-4">
        <div className="col-md-10 col-lg-7 mx-auto">
          {FAQ_ENTRIES.map((entry, index) => (
            <div key={index} className="pb-6">
              <h4 className="h4">{entry.question}</h4>
              <div>
                <div className="longform">
                  {typeof entry.answer === 'string' ? (
                    <p>{entry.answer}</p>
                  ) : (
                    entry.answer
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

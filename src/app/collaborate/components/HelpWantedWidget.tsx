//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

'use client';

import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { RepoIcon } from '@primer/octicons-react';
import { formatDistanceToNow } from 'date-fns';

import { GitHubDescriptionFromType } from '@/app/contributions/components/UpstreamContributionsWidget';
import Link from 'next/link';

// @cspell: ignore octicon

const queryClient = new QueryClient();

const QUERY_KEY = 'help-wanted';

type Issue = {
  id: string;
  issueNumber: number;
  repoName: string;
  orgName: string;
  created: string; // iso8601
  type: string;
  activityUrl: string;
  repoUrl: string;
  title: string;
  labels?: {
    name: string;
    color: string;
    foreground: string;
  }[];
};

type GitHubIssuesResponse = {
  future: string; // iso8601
  past: string;   // iso8601
  issues: Issue[];
  helpWanted: Issue[];
};

function TimeAgo({ isoDate }: { isoDate: string }) {
  return <span>{formatDistanceToNow(new Date(isoDate), { addSuffix: true })}</span>;
}

export default function HelpWantedWidget() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelpWantedSection />
    </QueryClientProvider>
  );
}

function HelpWantedSection() {
  const { isPending, error, data } = useQuery<GitHubIssuesResponse>({
    queryKey: [QUERY_KEY],
    queryFn: () =>
      fetch('/api/issues').then((res) =>
        res.json(),
      ),
  });

  const issues = data?.issues || [];
  const helpWanted = data?.helpWanted || [];

  if (isPending) {
    return <>Discovering recent activity...</>;
  }

  if (error) {
    return (
      <div className="error">
        <p>There was an error loading recent activity.</p>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <section className="wrapper my-6 py-lg-4">
    <header className="mb-6 border-bottom pb-4">
      <h2 className="h3" id="get-started">Get started</h2>
      <p>These issues have been labeled as a great place to start in a project.</p>
    </header>
    <div className="d-lg-flex flex-justify-between">
      <div className="col-12 col-lg-8 pr-lg-6 mb-4 mb-md-0">
        <div className="d-sm-flex flex-wrap">
          <div className="col-12" id="goodFirstIssueFeed">
            <ul className="project-list" id="goodFirstIssueList">
              {issues.map((issue) => {
                const { activityUrl, repoName, created, title, id, orgName, labels } = issue;
                return (
                  <li key={id} className="project-list-item">
                    <article className='activity good-first-issue'>
                      <div className="activity__body">
                        <div className="activity__body-hd">
                          <a href={activityUrl}
                             target='_blank'>
                            <RepoIcon />
                            {' '}
                            {orgName}/{repoName}
                          </a>
                          <p className="activity__activity">
                            <span>
                              {GitHubDescriptionFromType(issue.type, '')}
                            </span>
                            {' '}
                            <TimeAgo isoDate={created} />
                          </p>
                        </div>
                        <a
                          className="activity__title"
                          href={activityUrl}
                          target="_blank"
                        >
                          {title}
                        </a>
                        {labels && labels.length > 0 && (
                          <div>
                            {labels.map((label) => (
                              <span
                                key={label.name}
                                className="IssueLabel"
                                style={{
                                  backgroundColor: `#${label.color}`,
                                  color: `#${label.foreground}`,
                                }}
                              >
                                {label.name}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div>&nbsp;</div>
        <header className="mb-6 border-bottom pb-4 mt-6">
          <h2 className="h3" id="help-wanted">Help Wanted</h2>
          <p>
            These issues are a great way to jump in.
          </p>
        </header>
        <div className="d-sm-flex flex-wrap">
          <div className="col-12" id="helpWantedIssueFeed">
            <ul className="project-list" id="helpWantedIssueList">
            {helpWanted.map((issue) => {
                const { activityUrl, repoName, created, title, id, orgName, labels } = issue;
                return (
                  <li key={id} className="project-list-item">
                    <article className='activity good-first-issue'>
                      <div className="activity__body">
                        <div className="activity__body-hd">
                          <a href={activityUrl}
                             target='_blank'>
                            <RepoIcon />
                            {' '}
                            {orgName}/{repoName}
                          </a>
                          <p className="activity__activity">
                            <span>
                              {GitHubDescriptionFromType(issue.type, '')}
                            </span>
                            {' '}
                            <TimeAgo isoDate={created} />
                          </p>
                        </div>
                        <a
                          className="activity__title"
                          href={activityUrl}
                          target="_blank"
                        >
                          {title}
                        </a>
                        {labels && labels.length > 0 && (
                          <div>
                            {labels.map((label) => (
                              <span
                                key={label.name}
                                className="IssueLabel"
                                style={{
                                  backgroundColor: `#${label.color}`,
                                  color: `#${label.foreground}`,
                                }}
                              >
                                {label.name}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4 pl-lg-6 col-lg-4">
        <div>
          <h4 className="h4">Resources</h4>
          <p>
            A few good resources to learn about getting involved in online communities:
          </p>
          <ul>
            <li><a href="https://opensource.guide/how-to-contribute/" className="link-arrow text-brand" target="_new">How to Contribute to Open Source</a></li>
            <li><Link href="/codeofconduct" className="link-arrow text-brand">Microsoft's Open Source Code of Conduct</Link></li>
            <li><a href="https://opensource.com/life/14/2/exploring-open-source-beginners" className="link-arrow text-brand" target="_new">Getting Started in Open Source Online and Offline</a></li>
            <li><a href="https://todogroup.org/resources/guides/participating-in-open-source-communities/" className="link-arrow text-brand" target="_new">TODO Group's Participating in Open Source Communities Guide</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  );
}

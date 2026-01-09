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
import { BellSlashIcon, CommentIcon, GitMergeIcon, GitPullRequestIcon, IssueOpenedIcon, IssueReopenedIcon, RepoIcon, SyncIcon } from '@primer/octicons-react';
import { formatDistanceToNow } from 'date-fns';
import { GitHubDescriptionFromType, ShowOcticonForType } from '@/app/contributions/components/UpstreamContributionsWidget';
import Link from 'next/link';

// @cspell: ignore octicon

const queryClient = new QueryClient();

const QUERY_KEY = 'activity-stream';

const IS_LIVE = false;

type Event = {
  id: string;
  repoName: string;
  orgName: string;
  created: string; // iso8601
  actorLogin: string;
  actorAvatar: string;
  type: string;
  activityUrl: string;
  repoUrl: string;
  title: string;
};

type GitHubStreamResponse = {
  future: string; // iso8601
  past: string;   // iso8601
  activities: Event[];
};

function TimeAgo({ isoDate }: { isoDate: string }) {
  return <span>{formatDistanceToNow(new Date(isoDate), { addSuffix: true })}</span>;
}

export default function ActivityStreamWidget() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <header className="mb-6 border-bottom pb-4">
          <div className="d-lg-flex flex-items-end flex-justify-between">
            <div>
              <h2 className="h3">
                Happening now
              </h2>
              <p>
                See the latest activity on GitHub with Microsoft Open Source projects.
              </p>
            </div>
            <div data-javascript-show="immediate" data-require-javascript="yes">
              {IS_LIVE && (
                <p>
                  <a
                    className="refresh"
                    id="toggle-feed"
                    href="#"
                    title="Pause real-time activity feed"><span className="sr-only" id="toggle-text2">
                      Pause real-time activity feed
                    </span>
                    <span
                      id="toggle-text"
                      aria-hidden="true">
                      Pause
                    </span> 
                    <span
                      id="pause-icon">
                      <BellSlashIcon />
                    </span>
                    <span
                      id="resume-icon"
                      style={{ display: 'none' }}
                    >
                      <SyncIcon />
                    </span>
                  </a>
                </p>
              )}
            </div>
          </div>
        </header>
        <div className="d-lg-flex flex-justify-between">
          <div className="col-12 col-lg-8 pr-lg-6 mb-4 mb-md-0">
            <div className="d-sm-flex flex-wrap">
              <div className="col-12" id="activityFeed">
                <noscript>
                  <h2>JavaScript is required for this interactive feature.</h2>
                  <p>This page works best with JavaScript. The activity feeds are dynamically generated using a REST API and JavaScript.</p>
                </noscript>
                <ul className="project-list" id="activityList">
                  <ActivityStream />
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 pl-lg-6 col-lg-4">
            <div className="sticky">
              <div className="cta">
                <div className="cta__inner">
                  <p className="h5">Explore Microsoft projects</p>
                  <p>
                    {`
                    Microsoft engineers and community members
                    maintain thousands of GitHub repos: everything
                    from complete samples, to product SDKs, to entire products.
                    `}
                  </p>
                  <p>
                    {`
                    Search, filter and explore to find what you're looking for
                    or an opportunity to join in the fun.
                    `}
                  </p>
                  <Link className="link-arrow text-white mt-4" href="/projects">Featured projects</Link>
                  <br />
                  <Link className="link-arrow text-white mt-4" href="/projects/explore">View all projects</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </QueryClientProvider>
  );
}

function ActivityStream() {
  const [continuation, setContinuation] = React.useState<string | null>(null);
  const { isPending, error, data } = useQuery<GitHubStreamResponse>({
    queryKey: [QUERY_KEY, continuation],
    queryFn: () =>
      fetch('/api/stream').then((res) =>
      // fetch('/api/stream' + (continuation ? '?future=' + encodeURIComponent(continuation) : '')).then((res) =>
        res.json(),
      ),
  });

  if (data?.future && data?.future !== continuation) {
    setContinuation(data.future);
  }

  const activities = data?.activities || [];

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

  if (!activities.length) {
    return (
      <div className="error">
        <p>No recent information to show.</p>
      </div>
    );
  }

  return activities.map((activity) => {
    const { id, created, actorLogin, actorAvatar, type, activityUrl, repoName, orgName, title } = activity;
    const description = GitHubDescriptionFromType(type, '');
    const showOcticon = ShowOcticonForType(type, '');

    return (
      <li key={id}>
        <article className="activity">
          <a
            href={activityUrl}
            target="_blank"
            className="activity__avatar">
            <img
              src={actorAvatar}
              alt={`Avatar image of GitHub user @${actorLogin}`} />
          </a>
          <div className="activity__body">
            <div className="activity__body-hd">
              <a href={activityUrl} target="_blank">
                {actorLogin}
              </a>
              <p className="activity__activity">
                <span>
                  {showOcticon}
                  {' '}
                  {description}
                  {' '}
                </span>
                &nbsp;
                <TimeAgo isoDate={created} />
              </p>
            </div>
            <a className='activity__title'
               href={activityUrl}
               target="_blank">
                {title}
            </a>
            <div className="activity__footer">
              <RepoIcon />
              <a target='_blank'
              href={activityUrl}>
                {orgName}/{repoName}
              </a>
            </div>
          </div>
        </article>
      </li>
    );
  });
}

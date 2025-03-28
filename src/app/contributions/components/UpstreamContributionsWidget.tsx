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
import { CommentIcon, GitMergeIcon, GitPullRequestIcon, IssueOpenedIcon, IssueReopenedIcon, RepoIcon } from '@primer/octicons-react';
import { formatDistanceToNow } from 'date-fns';

// Just using single-page react query to keep this mostly-static server-side
// Next.js app simple.

// @cspell: ignore octicon

const queryClient = new QueryClient();

const QUERY_KEY = 'upstream-contributions'
const INITIAL_CONTRIBUTIONS_DISPLAY = 15;

type Contribution = {
  repoName: string;
  orgName: string;
  title: string;
  id: string;
  context?: string;
  payload: {
    number: number;
    pull_request?: {
      state: string;
      merged: boolean;
      title: string;
      number: number;
    };
  };
  action: string;
  created: string;
  actorLogin: string;
  actorAvatar: string;
  type: string;
  repoUrl: string;
  activityUrl: string;
};

type GitHubContributionsEvent = {
  future: string; // iso8601
  past: string;   // iso8601
  contributions: Contribution[];
}

function TimeAgo({ isoDate }: { isoDate: string }) {
  return <span>{formatDistanceToNow(new Date(isoDate), { addSuffix: true })}</span>;
}

export default function UpstreamContributionsWidget() {
  return (
    <QueryClientProvider client={queryClient}>
      <UpstreamContributions />
    </QueryClientProvider>
  );
}

function UpstreamContributions() {
  const { isPending, error, data } = useQuery<GitHubContributionsEvent>({
    queryKey: [QUERY_KEY],
    queryFn: () =>
      fetch('/api/contributions').then((res) =>
        res.json(),
      ),
  });

  const contributions = data?.contributions || [];
  const contributionsToDisplay = contributions.slice(0, INITIAL_CONTRIBUTIONS_DISPLAY);

  if (isPending) {
    return <div className="loading">Discovering recent contributions...</div>;
  }

  if (error) {
    return (
      <div className="error">
        <p>There was an error loading contributions.</p>
        <p>{error.message}</p>
      </div>
    );
  }

  if (!data || !data.contributions) {
    return (
      <div className="error">
        <p>No contributions data is currently available.</p>
      </div>
    );
  }

  return (
    <div className="d-sm-flex flex-wrap" style={{ minHeight: '400px' }}>
      <div id="contributionsFeed" className="col-12">
        <ul className="project-list" id="contributionsList">
          {contributionsToDisplay.map((contribution) => {
            const { repoName, created, context, title, id, actorLogin, orgName, actorAvatar, type, activityUrl } = contribution;
            return (
              <article key={id} className="activity">
                {actorAvatar && (
                  <a
                    className="activity__avatar"
                    target='_blank'
                    href={`https://github.com/${actorLogin}`}
                  >
                    <img
                      src={actorAvatar}
                      alt={actorLogin}
                      className="activity__avatar"
                    />
                    {actorLogin}
                  </a>
                )}
                <div className="activity__body">
                  <div className="activity__body-hd">
                    <a href={`https://github.com/${actorLogin}`} target='_blank'>
                      {actorLogin}
                    </a>
                    <p className="activity__activity">
                      <span>
                        {ShowOcticonForType(type, context || '')}
                        {' '}
                        {descriptionFromType(type, context || '')}
                      </span>
                      {' '}
                      <TimeAgo isoDate={created} />
                    </p>
                  </div>
                  <a className="activity__title" href={activityUrl} target="_blank">
                    {title}
                  </a>
                  <div className="activity__footer">
                    <RepoIcon />
                    {' '}
                    <a target="_blank" href={activityUrl}>
                      <strong>{orgName}/{repoName}</strong> repo
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function ShowOcticonForType(type: string, optionalContext: string) {
  if (optionalContext === 'merged') {
    return <GitMergeIcon />;
  }
  switch (type) {
    case 'pull_request.opened': {
      return <GitPullRequestIcon />;
    }
    case 'issue_comment.created':
    case 'pull_request_review_comment.created': {
      return <CommentIcon />;
    }
    case 'issues.opened':
    case 'issues.labeled': {
      return <IssueOpenedIcon />;
    }
    case 'issues.reopened': {
      return <IssueReopenedIcon />;
    }
    default: {
      return null;
    }
  }
}

function descriptionFromType(type: string, optionalContext: string) {
  if (optionalContext === 'merged') {
    return 'merged a pull request';
  }
  switch(type) {
    case 'pull_request.reopened':
      return 're-opened a pull request';
    case 'pull_request.opened':
      return 'opened a pull request';
    case 'issues.closed':
      return 'closed an issue';
    case 'issue_comment.created':
      return 'commented on an issue';
    case 'pull_request_review_comment.created':
      return 'commented on a pull request';
    case 'issues.opened':
      return 'opened an issue';
    case 'issues.reopened':
      return 're-opened an issue';
    case 'pull_request_review.submitted':
      return 'reviewed a pull request';
    case 'issues.labeled':
      return 'good first issue';
    default:
      return type;
  }
}

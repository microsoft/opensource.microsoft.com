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
import { ShowOcticonForType } from '@/app/contributions/components/UpstreamContributionsWidget';

// @cspell: ignore octicon

const queryClient = new QueryClient();

const QUERY_KEY = 'activity-stream';

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
      <ActivityStream />
    </QueryClientProvider>
  );
}

function ActivityStream() {
  const [continuation, setContinuation] = React.useState<string | null>(null);
  const { isPending, error, data } = useQuery<GitHubStreamResponse>({
    queryKey: [QUERY_KEY, continuation],
    queryFn: () =>
      fetch('/api/stream' + (continuation ? '?future=' + encodeURIComponent(continuation) : '')).then((res) =>
        res.json(),
      ),
  });

  const activities = data?.activities || [];

  if (isPending) {
    return <div className="loading">Discovering recent activity...</div>;
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

  return (
    <div className="d-sm-flex flex-wrap" style={{ minHeight: '400px' }}>
      <div id="contributionsFeed" className="col-12">
        <ul className="project-list" id="contributionsList">
          {activities.map((activity) => {
            const { repoName, created, title, id, actorLogin, orgName, actorAvatar, type, activityUrl } = activity;
            function descriptionFromType(type: string, arg1: any): React.ReactNode {
              throw new Error('Function not implemented.');
            }

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
                        {ShowOcticonForType(type, '')}
                        {' '}
                        {descriptionFromType(type, '')}
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

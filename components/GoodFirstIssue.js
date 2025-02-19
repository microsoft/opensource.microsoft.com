import React from 'react';
import '../styles/globals.css';

const GoodFirstIssue = ({ activity }) => {
  return (
    <article className="activity good-first-issue" id={`goodfirstissue${activity.id}`}>
      <div className="activity__body">
        <div className="activity__body-hd">
          <a href={activity.activityUrl} target="_new">
            <span className="octicon octicon-repo"></span>
            {activity.orgName}/{activity.repoName}
          </a>
          <p className="activity__activity">
            <span>{activity.description}</span>
            <time className="timeago" dateTime={activity.created}>{activity.created}</time>
          </p>
        </div>
        <a className="activity__title" href={activity.activityUrl} target="_new">
          {activity.title}
        </a>
        {activity.labels && (
          <div>
            {activity.labels.map((label, index) => (
              <span key={index} className="IssueLabel" style={{ backgroundColor: `#${label.color}`, color: `#${label.foreground}` }}>
                {label.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default GoodFirstIssue;

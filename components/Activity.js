import React from 'react';
import '../styles/globals.css';

const Activity = ({ activity }) => {
  return (
    <article className="activity" style={{ display: 'none' }} id={`activity${activity.id}`}>
      <a className="activity__avatar" href={`https://github.com/${activity.actorLogin}`} target="_new">
        <img src={activity.actorAvatar} alt={`Avatar image of GitHub login ${activity.actorAvatar}`} />
        {activity.actorLogin}
      </a>
      <div className="activity__body">
        <div className="activity__body-hd">
          <a href={activity.activityUrl} target="_new">
            {activity.actorLogin}
          </a>
          <p className="activity__activity">
            <span>{activity.octicon} {activity.description}</span>
            <time className="timeago" dateTime={activity.created}>{activity.created}</time>
          </p>
        </div>
        <a className="activity__title" href={activity.activityUrl} target="_new">
          {activity.title}
        </a>
        <div className="activity__footer">
          <span className="octicon octicon-repo"></span>
          <a href={activity.activityUrl} target="_new">{activity.orgName}/{activity.repoName}</a>
        </div>
      </div>
    </article>
  );
};

export default Activity;

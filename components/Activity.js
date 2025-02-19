import React from 'react';

const Activity = () => {
  const [activities, setActivities] = React.useState([]);

  React.useEffect(() => {
    // Mock data for now - this should be replaced with actual API call
    const mockActivity = {
      id: 1,
      actorLogin: 'demo-user',
      actorAvatar: 'https://avatars.githubusercontent.com/u/1',
      activityUrl: 'https://github.com/microsoft/opensource.microsoft.com',
      description: 'opened a pull request',
      created: new Date().toISOString(),
      title: 'Example Activity',
      orgName: 'microsoft',
      repoName: 'opensource.microsoft.com',
      octicon: '🔄'
    };
    setActivities([mockActivity]);
  }, []);

  return (
    <div>
      {activities.map(activity => (
        <article key={activity.id} className="activity" id={`activity${activity.id}`}>
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
      ))}
    </div>
  );
}

export default Activity;

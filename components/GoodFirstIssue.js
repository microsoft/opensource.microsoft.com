import React from 'react';

const GoodFirstIssue = () => {
  const [issues, setIssues] = React.useState([]);

  React.useEffect(() => {
    // Mock data for now - this should be replaced with actual API call
    const mockIssue = {
      id: 1,
      activityUrl: 'https://github.com/microsoft/opensource.microsoft.com/issues/1',
      orgName: 'microsoft',
      repoName: 'opensource.microsoft.com',
      description: 'Good first issue',
      created: new Date().toISOString(),
      title: 'Example Good First Issue',
      labels: [
        { name: 'good first issue', color: '7057ff', foreground: 'ffffff' }
      ]
    };
    setIssues([mockIssue]);
  }, []);

  return (
    <div>
      {issues.map(activity => (
        <article key={activity.id} className="activity good-first-issue" id={`goodfirstissue${activity.id}`}>
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
      ))}
    </div>
  );
};

export default GoodFirstIssue;

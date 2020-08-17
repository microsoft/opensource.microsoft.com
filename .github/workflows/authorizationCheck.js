async function authorizationCheck({github, context}) {
    const { payload, eventName } = context;
    const { sender, action, pull_request, review, repository } = payload;
    const { login } = sender;
    console.log(`eventName=${eventName}, action=${action}, sender=${login}`);
    if (pull_request) {
      console.log(`pull_request ${pull_request.number}: state=${pull_request.state}, draft=${pull_request.draft}, web=${pull_request.html_url}`);
    }
    if (review) {
      console.log(`review: state=${review.state}`);
    }
    const commentTrigger = '/build';
    let authorized = false;
    if (pull_request && !pull_request.draft && action == 'created') {
      console.log('The pull request has been created.');
      // Authorized to automatically build if this is a repo writer
      authorized = await hasWritePermissions({ github, repository, login });
    } else if (review && pull_request && !pull_request.draft && pull_request.state === 'open') {
      const { body, state, commit_id } = review;
      console.log(`This is a pull request review. action=${action}, state=${state}, commitId=${commit_id}`);
      if (body) {
        console.log('Body:');
        console.log(body);
      }
      if (action === 'submitted' && state === 'approved') {
        console.log('This pull request review submits an approval');
        authorized = await hasWritePermissions({ github, repository, login });
      } else if (body && body.includes(commentTrigger)) {
        console.log(`Body contains the trigger phrase ${commentTrigger}`);
        authorized = await hasWritePermissions({ github, repository, login });
      }
    }
    return { authorized };
  }
  
  async function hasWritePermissions({ github, repository, login }) {
    const response = await github.repos.getCollaboratorPermissionLevel({
      owner: repository.owner.login,
      repo: repository.name,
      username: login,
    });
    let permission = null;
    let authorizedWriter = false;
    if (response && response.data && response.data.permission) {
      permission = response.data.permission;
    }
    if (permission) {
      switch (permission) {
        case 'admin':
        case 'write':
          authorizedWriter = true;
          console.log(`User is authorized to contribute to ${repository.full_name}`);
          break;
        default:
          break;
      }
    } else {
      console.log('Permission level for the user could not be retrieved.');
    }
    return authorizedWriter;
  }
  
  module.exports = authorizationCheck;

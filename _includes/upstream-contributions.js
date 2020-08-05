var $ = jQuery;
var octicons = {};

function tryGetOcticon(name) {
    if (octicons[name] !== undefined) {
        return octicons[name];
    }
    var html = octicon = $('#octicon-' + name).html();
    octicons[name] = html || '';
    return html;
}

function octiconFromType(type, optionalContext) {
    if (optionalContext === 'merged') {
        return 'git-merge';
    }
    switch(type) {
        case 'pull_request.opened':
          return 'git-pull-request';
        case 'issue_comment.created':
        case 'pull_request_review_comment.created':
            return 'comment';
        case 'issues.opened':
        case 'issues.labeled':
            return 'issue-opened';
        case 'issues.reopened':
           return 'issue-reopened';
        default:
            return null;
    }
}

function descriptionFromType(type, optionalContext) {
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

var contributionsFeed = $('#contributionsFeed'),
    contributionsList = $('#contributionsList'),
    contributionsSource = $("#contributions-template").html(),
    contributionsTemplate = Handlebars.compile(contributionsSource);
var visibleIds = {};
var initialContributionsDisplay = 15;

function renderContributions(contributions) {
    var shown = 0;
    if (contributions && contributions.length) {
        var contribution = contributions.pop();
        while (contribution) {
            try {
                if (shown++ < initialContributionsDisplay) {
                    var id = contribution.id;
                    if (!visibleIds[id]) {
                        var octicon = octiconFromType(contribution.type, contribution.context);
                        var html = contributionsTemplate({
                            activity: contribution,
                            id: id,
                            octicon: tryGetOcticon(octicon),
                            description: descriptionFromType(contribution.type, contribution.context),
                        });
                        contributionsList.prepend(html);
                        $('#activity' + id).fadeIn();
                        jQuery('time.timeago').timeago();
                    }
                }
            } catch (ignoredError) {
                console.dir(ignoredError);
            }
            contribution = contributions.pop();
        }
    }
}

function loadContributions() {
    $.ajax({
        type: 'GET',
        url: '/api/contributions',
        dataType: 'json',
        success: function(contributions){
            if (contributions && contributions.contributions) {
                renderContributions(contributions.contributions);
            }
        }
    });
}

// just one-time
loadContributions();

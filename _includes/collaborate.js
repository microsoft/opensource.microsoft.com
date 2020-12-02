    // CONSIDER: More button

    var $ = jQuery,
        activityFeed = $('#activityFeed'),
        activityList = $('#activityList'),
        // refreshAction = $('#refresh-feed'),
        toggleAction = $('#toggle-feed'),
        toggleText = $('#toggle-text'),
        toggleText2 = $('#toggle-text2'),
        resumeIcon = $('#resume-icon'),
        pauseIcon = $('#pause-icon'),
        source = $("#activity-template").html(),
        template = Handlebars.compile(source);

    var octicons = {};

    var futureContinuation = null;
    var backwardContinuation = null;

    var rendering = null;
    var alive = false;
    var queuedActivity = [];
    var visibleActivity = [];
    var pinnedActivity = [];
    var visibleIds = {};

    var refreshInterval = 7500;
    var displayInterval = 1500;

    var refreshTimer = null;

    var initialDisplay = 5;
    var maximumVisible = 8;

    function refresh(isAutomatic) {
        iteration(isAutomatic);
        return false;
    }

    function toggle() {
        if (alive) {
            return pause();
        } else {
            return resume();
        }
    }

    function pause() {
        toggleText.text('Resume');
        toggleText2.text('Resume real-time activity feed');
        resumeIcon.show();
        pauseIcon.hide();
        alive = false;
        if (refreshTimer) {
            clearInterval(refreshTimer);
            refreshTimer = null;
        }
        return false;
    }

    function resume() {
        toggleText.text('Pause');
        toggleText2.text('Pause real-time activity feed');
        alive = true;
        resumeIcon.hide();
        pauseIcon.show();
        iteration(true);
        if (!refreshTimer) {
            refreshTimer = setInterval(refresh.bind(null, true), refreshInterval);
        }
        return false;
    }

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
            case 'pull_request_review.submitted':
                return 'comment-discussion'; // could find a better octicon probably
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
            case 'release.released':
              return 'released';
            case 'release.published':
              return 'published release';
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
                return 'issue labeled';
            default:
                return type;
        }
    }

    function renderNext() {
        if (queuedActivity && queuedActivity.length) {
            var activity = queuedActivity.pop();
            try {
                var id = activity.id;
                if (!visibleIds[id]) {
                    var octicon = octiconFromType(activity.type, activity.context);
                    var html = template({
                        activity: activity,
                        id: id,
                        octicon: tryGetOcticon(octicon),
                        description: descriptionFromType(activity.type, activity.context),
                    });
                    activityList.prepend(html);
                    $('#activity' + id).fadeIn();
                    visibleActivity.push(id);
                    visibleIds[id] = activity.created;
                    jQuery('time.timeago').timeago();
                }
            } catch (ignoredError) {
                console.dir(ignoredError);
            }
        }
        if (visibleActivity.length > maximumVisible) {
            cleanupDisplay();
        }
        if (visibleActivity.length < initialDisplay && queuedActivity.length) {
            rendinging = setTimeout(renderNext, 1);
        }
    }

    function cleanupDisplay() {
        var cleanupIds = [];
        while (visibleActivity.length > maximumVisible) {
            cleanupIds.push(visibleActivity.shift());
        }
        cleanupIds.forEach(id => {
            delete visibleIds[id];
            try {
                $('#activity' + id).remove();
            } catch (error) {
                console.log(error);
            };
        });
    }

    function updateRefreshFeed(enabled) {
        //refreshAction.prop('disabled', enabled ? null : 'disabled');
    }

    function iteration(isAutomatic) {
        updateRefreshFeed(false);
        var qs = futureContinuation ? '?future=' + encodeURIComponent(futureContinuation) : '';
        if (!isAutomatic) {
            qs = ''; // refresh should grab the latest
        }
        var url = '/api/stream' + qs;
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            error: function () {
                updateRefreshFeed(true);
            },
            success: function(activity){
                updateRefreshFeed(true);
                if (activity && activity.future) {
                    futureContinuation = activity.future;
                }
                if (activity && activity.past && !backwardContinuation) {
                    backwardContinuation = activity.past;
                }
                if (activity && activity.activities) {
                    activity.activities.forEach(activity => queuedActivity.push(activity));
                    if (activity.activities.length && !rendering) {
                        renderNext();
                    }
                }
            }
        });
    }

    toggleAction.click(toggle);

    resume(); // iteration();

    // ---------------------
    // this is a one-time pull of "good first issue"

    var goodFirstIssueFeed = $('#goodFirstIssueFeed'),
        goodFirstIssueList = $('#goodFirstIssueList'),
        goodFirstIssueSource = $("#goodfirstissue-template").html(),
        goodFirstIssueTemplate = Handlebars.compile(goodFirstIssueSource);

    var initialGoodFirstIssueDisplay = 6;

    function renderGoodFirstIssues(goodFirstIssues) {
        var shown = 0;
        if (goodFirstIssues && goodFirstIssues.length) {
            var gfi = goodFirstIssues.pop();
            while (gfi) {
                try {
                    if (shown++ < initialGoodFirstIssueDisplay) {
                        var id = gfi.id;
                        if (!visibleIds[id]) {
                            var octicon = octiconFromType(gfi.type, gfi.context);
                            var html = goodFirstIssueTemplate({
                                activity: gfi,
                                id: id,
                                octicon: tryGetOcticon(octicon),
                                description: descriptionFromType(gfi.type, gfi.context),
                            });
                            goodFirstIssueList.prepend(html);
                            jQuery('time.timeago').timeago();
                        }
                    }
                } catch (ignoredError) {
                    console.dir(ignoredError);
                }
                gfi = goodFirstIssues.pop();
            }
        }
    }

    function loadIssuesOneTime() {
        $.ajax({
            type: 'GET',
            url: '/api/issues',
            dataType: 'json',
            success: function(issues){
                if (issues && issues.issues) {
                    renderGoodFirstIssues(issues.issues);
                }
                if (issues && issues.helpWanted) {
                    renderHelpWantedIssues(issues.helpWanted);
                }
            }
        });
    }

    loadIssuesOneTime();

    var helpWantedIssueFeed = $('#helpWantedIssueFeed'),
        helpWantedIssueList = $('#helpWantedIssueList'),
        helpWantedIssueSource = $("#helpwantedissue-template").html(),
        helpWantedIssueTemplate = Handlebars.compile(helpWantedIssueSource);

    var initialHelpWantedIssueDisplay = 6;

    function renderHelpWantedIssues(helpWantedIssues) {
        var shown = 0;
        if (helpWantedIssues && helpWantedIssues.length) {
            var gfi = helpWantedIssues.pop();
            while (gfi) {
                try {
                    if (shown++ < initialHelpWantedIssueDisplay) {
                        var id = gfi.id;
                        if (!visibleIds[id]) {
                            var octicon = octiconFromType(gfi.type, gfi.context);
                            var html = helpWantedIssueTemplate({
                                activity: gfi,
                                id: id,
                                octicon: tryGetOcticon(octicon),
                                description: descriptionFromType(gfi.type, gfi.context),
                            });
                            helpWantedIssueList.prepend(html);
                            jQuery('time.timeago').timeago();
                        }
                    }
                } catch (ignoredError) {
                    console.dir(ignoredError);
                }
                gfi = helpWantedIssues.pop();
            }
        }
    }

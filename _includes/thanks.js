var highlightedProjects = [
  {
      title: 'Kubernetes',
      repo: 'https://github.com/kubernetes/kubernetes',
      description: 'Kubernetes (K8s) is an open-source system for automating deployment, scaling, and management of containerized applications.',
  }, 
  {
      title: 'NGINX',
      repo: 'http://nginx.org/',
      description: 'nginx [engine x] is an HTTP and reverse proxy server.',
  },
  {
      title: 'Moby',
      repo: 'https://github.com/moby',
      description: 'An open framework to assemble specialized container systems without reinventing the wheel.',
  },
  {
      title: 'PostgreSQL',
      repo: 'https://www.postgresql.org/',
      description: 'PostgreSQL: The World\'s Most Advanced Open Source Relational Database',
  },
  {
    title: 'jQuery',
    repo: 'https://github.com/jquery/jquery',
    description: 'jQuery is a fast, small, and feature-rich JavaScript library.',
  },
  {
      title: 'GitHub Primer CSS',
      repo: 'https://github.com/primer/css',
      description: 'The CSS design system that powers GitHub',
  },
];

var $ = jQuery;

var thanksSection = $('#thanksSection'),
    thanksSource = $("#thanks-template").html(),
    thanksTemplate = Handlebars.compile(thanksSource);

function renderThanks(thanks) {
    var incrementingId = 0;
    if (thanks && thanks.length) {
      var project = thanks.pop();
      while (project) {
        try {
          var id = 'project' + incrementingId++;
          var html = thanksTemplate({
              project: project,
              id: id,
          });
          thanksSection.prepend(html);
        } catch (ignoredError) {
            console.dir(ignoredError);
        }
        project = thanks.pop();
      }
    }
}

function loadThanksXXX() {
    $.ajax({
        type: 'GET',
        url: '/api/thanks',
        dataType: 'json',
        success: function(response){
            if (response && response.thanks) {
                renderThanks([...highlightedProjects, ...response.thanks]); //ES6+ only
            }
        }
    });
}

function loadThanks() {
  renderThanks(highlightedProjects);
}

loadThanks();

//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import React from 'react';

export default function Projects() {
  return (
    <div className="wrapper pt-6 pb-4 mt-6 mb-4">
        <div className="text-center mb-6" data-animate-in="up" data-animate-in-delay="200">
            <h2 className="h3">Projects</h2>
            <p>
                Some of the most popular developer tools, frameworks and experiences in the world
                are built around open communities. Here are a few featured Microsoft projects of note.
            </p>
        </div>

        <div className="tile-list" data-animate-in="up" data-animate-in-delay="400">
          {/*
          TODO: PORT

            {% assign featured_projects_count = 0 %}
            {% for project in site.projects %}
            {% if project.featured and featured_projects_count < 3 %}
            {% assign featured_projects_count = featured_projects_count | plus: 1 %}
            <a className="tile" href="{{ project.projectUrl }}" target="_blank" rel= "noopener">
                <div>
                    {% if project.externalLogo %}
                    {% assign img = project.externalLogo %}
                    {% else %}
                    {% capture img %}/assets/images/projects/{{ project.logo }}{% endcapture %}
                    {% endif %}
                    <img className="mb-4" src="{{ img | relative_url }}" alt="" />
                    <h3 className="h4 text-brand font-weight-600 mb-3">{{ project.title }}</h3>
                    <p>{{ project.description }}</p>
                </div>
            </a>
            {% endif %}
            {% endfor %}
            */}
        </div>

        <div className="text-center mt-6 pb-6">
            <a className="link-arrow text-brand" href="/projects">Explore Microsoft projects</a>
        </div>
    </div>
  );
}

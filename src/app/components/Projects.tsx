//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import React from 'react';
import { getHighlightedProjects } from '../projects/data';
import Link from 'next/link';

function chooseRandom(arr: any[], num: number) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

export default function Projects() {
  // this is a build-time random choice
  let projects = getHighlightedProjects();
  projects = projects.filter((project) => project.featured);
  const random = chooseRandom(projects, 3);

  return (
    <div className="wrapper pt-6 pb-4 mt-6 mb-4">
      <div className="text-center mb-6" data-animate-in="up" data-animate-in-delay="200">
        <h2 className="h3">Projects</h2>
        <p>
          {`
          Some of the most popular developer tools, frameworks and experiences in the world
          are built around open communities. Here are a few featured Microsoft projects of note:
          `}
        </p>
      </div>
      <div className="tile-list" data-animate-in="up" data-animate-in-delay="400">
        {random.map((project) => (
          <a
            className="tile"
            href={project.projectUrl}
            target="_blank"
            rel="noopener"
            key={project.projectUrl}
          >
            <div>
              {project.externalLogo ? (
                <img className="mb-4" src={project.externalLogo} alt="" />
              ) : (
                <img
                  className="mb-4"
                  src={`/images/projects/${project.logo}`}
                  alt=""
                />
              )}
              <h3 className="h4 text-brand font-weight-600 mb-3">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
        </div>
        <div className="text-center mt-6 pb-6">
            <Link className="link-arrow text-brand" href="/projects">Explore Microsoft projects</Link>
        </div>
    </div>
  );
}

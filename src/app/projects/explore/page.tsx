//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

'use client';

import { RepoForkedIcon, RepoIcon, StarIcon } from '@primer/octicons-react';
import { useState, useEffect } from 'react';

const LANGUAGES = [
  'C#',
  'C++',
  'Go',
  'Java',
  'JavaScript',
  'PowerShell',
  'Python',
  'Ruby',
  'Rust',
  'Shell',
  'TypeScript',
];

type ProjectRepo = {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  forks_count: number;
  stargazers_count: number;
  open_issues_count: number;
  language: string;
  social?: string;
};

type ProjectsSearchResponse = {
  page: number;
  totalPages: number;
  repos: ProjectRepo[];
};

export default function ExploreProjects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [projects, setProjects] = useState([] as ProjectRepo[]);
  const [filters, setFilters] = useState([] as string[]);

  useEffect(() => {
    // Fetch all projects on initial load
    fetch('/api/repos')
      .then((response) => response.json())
      .then((data: ProjectsSearchResponse) => {
        setProjects(data.repos); // Initial display
      });
  }, []);

  const handleSearch = (e: any) => {
    e.preventDefault();
    fetch(`/api/repos?q=${encodeURIComponent(searchQuery)}&languages=${filters.join(',')}`)
      .then((response) => response.json())
      .then((data: ProjectsSearchResponse) => {
        setProjects(data.repos);
      });
  };

  const handleFilterChange = (filter: string) => {
    setFilters((prevFilters) => {
      const newFilters = prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter];

      // Trigger a new search with updated filters
      fetch(`/api/repos?q=${encodeURIComponent(searchQuery)}&languages=${newFilters.join(',')}`)
        .then((response) => response.json())
        .then((data: ProjectsSearchResponse) => {
          setProjects(data.repos);
        });

      return newFilters;
    });
  };

  return (
    <article>
      <header className="wrapper-full explore-header pb-4 pt-6">
        <div className="wrapper py-6">
          <h1 className="h2">Explore</h1>
          <form onSubmit={handleSearch} className="search-form search-form--dark" role="search">
            <label htmlFor="project-search-field">
              <span className="sr-only">Search open source projects on Microsoft.com</span>
            </label>
            <input
              type="text"
              id="project-search-field"
              name="q"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <img className="explore-header__img" src="/images/direction/explore-shapes.svg" alt="" />
      </header>

      <div className="explore-projects pt-4 pb-6">
        <div>
          <div className="filters">
            <p className="h4">Filters</p>
            {LANGUAGES.map((language) => (
              <div key={language} className="checkbox">
                <input
                  type="checkbox"
                  id={language}
                  value={language}
                  checked={filters.includes(language)}
                  onChange={() => handleFilterChange(language)}
                />
                <label htmlFor={language}>{language}</label>
              </div>
            ))}
          </div>

          <div className="project-wrap">
            {projects.length > 0 ? (
              <div id="projectResults">
                <ul className="project-list">
                  {projects.map((project) => (
                    <li key={project.html_url}>
                      <ProjectItem project={project} />
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>No projects found.</p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

const ProjectItem = ({ project }: { project: ProjectRepo }) => {
  return (
    <article className="project">
      {project?.social && (
        <figure className="project__social-image">
          <img src={project.social} alt={`${project.name} social media image`} />
        </figure>
      )}
      <div className="project__details">
        <RepoIcon />
        <div className="project__overview">
          <a
            className="project__name"
            href={project?.html_url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {project?.name}
          </a>         
        </div>
        <p>{project.description}</p>
        <div className="project__meta">
          <div className="pr-4">
            <span className="sr-only">{project.stargazers_count} favorites</span>
            <span aria-hidden="true">
              <StarIcon /> <span className="format-number">{project.stargazers_count}</span>
            </span>
          </div>
          <div className="pr-4">
            <span className="sr-only">{project.forks_count} forks</span>
            <span aria-hidden="true">
              <RepoForkedIcon /> <span className="format-number">{project.forks_count}</span>
            </span>
          </div>
          <div className="pr-4">
            <span className="sr-only">{project.language} issues</span>
            <span aria-hidden="true">
              <span className="format-number">{project.language} project language</span>
            </span>
          </div>
        </div>
      </div>
      <div className="project__urls">
        <a className="project__repo_url" href={project?.html_url} target="_blank" rel="noopener noreferrer">
          <span>{project.name}</span>
          <span className="ms-icon ms-icon--Forward"></span>
        </a>
        {project?.homepage && (
          <a className="project__homepage_url" href={project?.
            homepage}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{project.homepage}</span>
            <span className="ms-icon ms-icon--Forward"></span>
          </a>
        )}
      </div>
    </article>
  );
}

//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

import { getHighlightedProjects } from "./data";

// Page title: Projects

export default function Projects() {
  const projects = getHighlightedProjects();
  return (
    <article className="mb-6 pb-6">
      <div className="page-header">
        <div className="wrapper d-md-flex">
          <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
            <h1 className="h2">
              Featured Projects
            </h1>
          </div>
          <div className="col-md-6 pl-md-4 col-lg-4">
            <p>
              Check out featured open source projects and products, or search on your own.
            </p>
            <div data-animate-in="fade" data-animate-in-delay="240">
              <a className="link-arrow text-white mt-4" href="/projects/explore/">All projects</a>
            </div>
          </div>
      </div>
    </div>
    <img className="page-header__shapes-lg" src="/images/direction/project-shapes.svg" alt="abstract shapes" />
    <div className="wrapper d-lg-flex flex-justify-between my-6 py-lg-4">
      <div className="col-12 col-lg-7 pr-lg-6 mb-4 mb-md-0">
        {projects.map((project, index) => (
          <div key={index} className="mb-6 pb-lg-4" data-animate-in="up">
            <div className="d-flex mb-3">
              {project.logo === "" || project.logo == null ? (
                <svg height="32" style={{ marginRight: "12px" }} aria-label="repository">
                  <path d="M16 0a16 16 0 1 0 0 32A16 16 0 1 0 16 0zm8.5 22.5h-2v-6.5h2v6.5zm-4.5-6.5h-2v6.5h2v-6.5zm-4.5 0h-2v6.5h2v-6.5zm4.5-4h-2V8h2v4.5zM8.5 22.5h-2v-6.5h2v6.5zM4 8H2V4h2v4zm0 10H2v-4h2v4zm12-10V4h2v4h-2zm0 10V14h2v4h-2z" />
                </svg>
              ) : (
                <img className="mr-3 icon" src={`/images/projects/${project.logo}`} alt={`${project.title} logo`} />
              )}
              <h2>{project.title}</h2>
            </div>
            <p>{project.description}</p>
            <a className="link-arrow-external mt-3" href={project.projectUrl}
              target="_blank"
              rel="noopener"
            >
              {project.linkText}
            </a>
            {project.storeUrl && (
              <a className="link-arrow-external mt-3" href={`https://apps.microsoft.com/store/detail/${project.storeUrl}`} target="_blank" rel="noopener">
                Download {project.title} from Microsoft Store
              </a>
            )}
          </div>
        ))}
      </div>
      <div className="col-12 col-lg-4 pl-lg-6 col-lg-4">
        <div className="sticky">
          <div className="cta">
            <div className="cta__inner">
              <p className="h5">
                Explore Microsoft projects
              </p>
              <p>
                Microsoft engineers and community members 
                maintain thousands of GitHub repos: everything 
                from complete samples, to product SDKs, to entire products.
              </p>
              {/*
                <p>
                    Search, filter and explore to find what you're looking for, or an opportunity to join in the fun.
                </p>
                <a className="link-arrow text-white mt-4" href="/projects/explore">View all projects</a>
                <br />
                <a className="link-arrow text-white mt-4" href="/collaborate">Get involved</a>
                <br/>
                <a className="link-arrow text-white mt-4" href="https://github.com/microsoft">Microsoft on GitHub</a>
              */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </article>
  );
}

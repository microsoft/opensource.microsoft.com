//
// Copyright (c) Microsoft.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
//

// Page title: Thanks - Open Source used in this site

import fs from 'fs';
import path from 'path';

const SHOW_SKIPS = false;

type FeaturedDependency = {
  title: string;
  identity: string;
  repo?: string;
  description: string;
};

const FEATURED_DEPENDENCIES: FeaturedDependency[] = [
  {
    title: 'React',
    identity: 'react',
    repo: 'https://github.com/facebook/react',
    description: 'A JavaScript library for building user interfaces.',
  },
  {
    title: 'Next.js',
    identity: 'nextjs',
    repo: 'https://github.com/vercel/next.js/',
    description: 'An opinionated framework for building server-rendered React applications.',
  },
  {
    title: 'Node.js',
    identity: '@types/node',
    repo: 'https://github.com/nodejs',
    description: 'Node.js JavaScript runtime.',
  },
  {
    title: 'GitHub Primer CSS',
    identity: '@primer/css',
    repo: 'https://github.com/primer/css',
    description: 'The CSS framework that powers GitHub.',
  },
  {
    title: 'BBC Color Contrast Checker',
    repo: 'https://www.bbc.com/opensource/projects/project/color-contrast-checker',
    identity: 'color-contrast-checker',
    description: 'A color contrast checker for web accessibility.',
  },
];

type DependencyEntry = {
  title: string;
  description?: string;
  repo?: string;
};

const SKIP_DEPENDENCIES: string[] = [
];

const components: DependencyEntry[] = [];
let dependencies: DependencyEntry[] = [];
const skips = new Set(SKIP_DEPENDENCIES);

function fromPackage(src: any, dest: DependencyEntry[]) {
  for (let component of src) {
    const name = component.name;
    if (skips.has(name)) {
      continue;
    }
    try {
      const dataPath = path.join(process.cwd(), 'node_modules', name, 'package.json');
      if (!fs.existsSync(dataPath)) {
        if (SHOW_SKIPS) {
          console.log(`skipping ${name}; no package.json or path issue: ${dataPath}`);
        }
        continue;
      }
      const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
      let entry: DependencyEntry = { title: data.title || data.name };
      let repo = getGitHubRepo(data.homepage);
      if (repo) {
        entry.repo = repo;
      }
      dest.push(entry);
    } catch (error) {
      console.log(`issue reviewing dependency ${name}; error: ${error}`);
    }
  }
}

function getGitHubRepo(...values: any[]) {
  for (let i = 0; i < values.length; i++) {
    if (values[i] && values[i].startsWith && values[i].startsWith('https://github.com/')) {
      return values[i];
    }
  }
}

type LockEntry = {
  version: string;
  dev: boolean;
};

// NPM
const packageRaw = fs.readFileSync(path.join(process.cwd(), 'package-lock.json'), 'utf8');
const packageLock = JSON.parse(packageRaw);
const lock = packageLock.dependencies as Record<string, LockEntry>;
const lockfile = (Object.getOwnPropertyNames(lock).sort()).map(name => { return {name, dev: lock[name].dev}});
fromPackage(lockfile.filter(dep => dep.dev !== true), components);
fromPackage(lockfile.filter(dep => dep.dev === true), dependencies);

dependencies = dependencies.sort((a, b) => (a.title > b.title) ? 1 : -1);

export default function Thanks() {
  return (
    <article>
      <div className="page-header">
        <div className="wrapper">
          <div className="col-md-10 col-lg-7 mx-auto">
            <h1 className="h5 text-white">Thank you.</h1>
          </div>
        </div>
      </div>
      <div className="wrapper-full bg-light">
        <div className="wrapper my-6 py-4">
          <div className="col-md-10 col-lg-7 mx-auto">
            <h3 className="h4 font-weight-400 mb-4">
              Hundreds of thousands of open source projects are used across Microsoft's
              products and services, many contributed to by Microsoft engineers and teams
              along the way.
            </h3>
            <p>
              Thousands of projects power this simple website alone. Thanks to all of
              the participants of these communities for building great technology together.
            </p>
          </div>
        </div>
      </div>
      <div className="wrapper py-6 my-6">
        <h3 className="h3">Powering this site</h3>
      </div>  
      <div className="wrapper py-6 my-6">
        <div className="d-sm-flex flex-wrap">
          {FEATURED_DEPENDENCIES.map((dependency) => (
            <div 
              key={dependency.identity}
              className="col-12 col-sm-6 col-md-4 col-lg-3 pr-sm-3 pr-lg-4 mb-6">
              <p>
                {dependency.repo ? (
                  <a 
                    href={dependency.repo} 
                    target="_blank" 
                    rel= "noopener"
                    className="link-arrow-external mt-3">{dependency.title}</a>
                ) : (
                  <span className="mt-3">{dependency.title}</span>
                )}
              </p>
              {dependency.description && (
                <p>{dependency.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <hr className="wrapper" />
      <div className="wrapper py-6 my-6">
        <h3 className="h3">Web dependencies</h3>
      </div>
      <div className="wrapper py-6 my-6">
        <div className="d-sm-flex flex-wrap">
          {components.map((component) => (
            <div
              key={component.title}
              className="col-12 col-sm-6 col-md-4 col-lg-3 pr-sm-3 pr-lg-4 mb-6">
              <p>
                {component.repo ? (
                  <a 
                    href={component.repo} 
                    target="_blank" 
                    rel= "noopener"
                    className="link-arrow-external mt-3">{component.title}</a>
                ) : (
                  <span className="mt-3">{component.title}</span>
                )}
              </p>
              {component.description && (
                <p>{component.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <hr className="wrapper" />
      <div className="wrapper py-6 my-6">
          <h3 className="h3">Development and build dependencies</h3>
      </div>
      <div className="wrapper py-6 my-6">
        <div className="d-sm-flex flex-wrap">
          {dependencies.map((dependency) => (
            <div
              key={dependency.title}
              className="col-12 col-sm-6 col-md-4 col-lg-3 pr-sm-3 pr-lg-4 mb-6">
              <p>
                {dependency.repo ? (
                  <a 
                    href={dependency.repo} 
                    target="_blank" 
                    rel= "noopener"
                    className="link-arrow-external mt-3">{dependency.title}</a>
                ) : (
                  <span className="mt-3">{dependency.title}</span>
                )}
              </p>
              {dependency.description && (
                <p>{dependency.description}</p>
              )}
            </div>
          ))}
          </div>
      </div>
    </article>
  );
}

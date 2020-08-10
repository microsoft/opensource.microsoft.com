const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

const dependenciesPath = path.resolve(path.join(__dirname, '..', '_data', 'dependencies.yml'));
const document = yaml.parse(fs.readFileSync(dependenciesPath, 'utf8'));

const skip = fromYaml(document, 'skip') || [];
const components = fromYaml(document, 'components') || [];
const featured = fromYaml(document, 'featured') || [];
const dependencies = fromYaml(document, 'dependencies') || [];

function fromYaml(y, name) {
    for (let i = 0; i < y.length; i++) {
      if (y[i][name]) {
        return y[i][name];
      }
    }
}

function fromPackage(src, dest) {
  for (let component of src) {
    const name = component.name;
    if (skips.has(name)) {
      continue;
    }
    try {
      const data = require(`${name}/package.json`);
      let entry = { title: data.title || data.name };
      let repo = getGitHubRepo(data.homepage);
      if (repo) {
          entry.repo = repo;
      }
      dest.push(entry);
    } catch (error) {
      console.error(error);
    }
  }
}

function getGitHubRepo(...values) {
  for (let i = 0; i < values.length; i++) {
    if (values[i] && values[i].startsWith && values[i].startsWith('https://github.com/')) {
      return values[i];
    }
  }
}

const skips = new Set(skip.map(item => item.title));

const lock = (require('../package-lock.json')).dependencies;
const lockfile = (Object.getOwnPropertyNames(lock).sort()).map(name => { return {name, dev: lock[name].dev}});
fromPackage(lockfile.filter(dep => dep.dev !== true), components);
fromPackage(lockfile.filter(dep => dep.dev === true), dependencies);

const output = yaml.stringify([
  {skip},
  {featured},
  {components},
  {dependencies},
]);
console.log(output);

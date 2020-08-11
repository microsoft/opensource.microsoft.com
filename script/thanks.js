const fs = require('fs');
const path = require('path');
const yaml = require('yaml');
const gemfile = require('gemfile');

module.exports = function() {

const dependenciesPath = path.resolve(path.join(__dirname, '..', '_data', 'dependencies.yml'));
const document = yaml.parse(fs.readFileSync(dependenciesPath, 'utf8'));

const skip = fromYaml(document, 'skip') || [];
const components = []; // explicitly emptied: fromYaml(document, 'components') || [];
const featured = fromYaml(document, 'featured') || [];
let dependencies = []; // explicitly emptied: fromYaml(document, 'dependencies') || [];

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
      console.log(`skipping ${name}`);
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

// Node
const lock = (require('../package-lock.json')).dependencies;
const lockfile = (Object.getOwnPropertyNames(lock).sort()).map(name => { return {name, dev: lock[name].dev}});
fromPackage(lockfile.filter(dep => dep.dev !== true), components);
fromPackage(lockfile.filter(dep => dep.dev === true), dependencies);

// Ruby
const gems = gemfile.parseSync(path.resolve(path.join(__dirname, '..', 'Gemfile.lock')));
const gemNames = Object.getOwnPropertyNames(gems.GEM.specs);
for (let gem of gemNames) {
  let entry = {title: gem, repo: `https://rubygems.org/gems/${gem}`};
  dependencies.push(entry);
}

dependencies = dependencies.sort((a, b) => (a.title > b.title) ? 1 : -1);

const output = yaml.stringify([
  {skip},
  {featured},
  {components},
  {dependencies},
]);

return output;
}

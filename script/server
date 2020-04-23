#!/bin/bash

set -e

cd "$(dirname "$0")/.."

export JEKYLL_ENV=development
export DISABLE_WHITELIST=1

bundle exec jekyll serve --unpublished --incremental --watch $*

#!/bin/bash
docker build -t opensourcesite/builder:v1 .

docker run -i -v ${PWD}:/tmp opensourcesite/builder:v1 sh << COMMANDS
cd /tmp
echo Building site...
jekyll build
echo Compressing site...
tar -cvjf /tmp/_artifacts/site.tar.gz -C /tmp/_site .
COMMANDS

FROM jekyll/builder as build

RUN apk update && apk add --no-cache zip

WORKDIR /tmp
COPY Gemfile /tmp
COPY Gemfile.lock /tmp

RUN addgroup oss && adduser -D -G oss oss && chown -R oss:oss .
RUN chown -R oss:oss /usr/gem
USER oss
RUN bundle install

#RUN jekyll build

#WORKDIR /tmp/_site
#RUN tar -cvf site.tar.gz .

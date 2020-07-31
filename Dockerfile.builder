FROM jekyll/builder as build

RUN apk update && apk add --no-cache zip

WORKDIR /usr/local/site
COPY Gemfile /usr/local/site
COPY Gemfile.lock /usr/local/site
COPY package.json /usr/local/site
COPY package-lock.json /usr/local/site

RUN addgroup oss && adduser -D -G oss oss && chown -R oss:oss .
RUN chown -R oss:oss /usr/gem
USER oss

RUN bundle install
RUN npm install

#RUN jekyll build
#WORKDIR /usr/local/site/_site
#RUN tar -cvf site.tar.gz .

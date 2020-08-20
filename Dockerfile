FROM jekyll/builder as build
WORKDIR /tmp
COPY . /tmp

RUN addgroup oss && adduser -D -G oss oss && chown -R oss:oss .
RUN chown -R oss:oss /usr/gem
USER oss
RUN bundle install
RUN npm install
RUN ./node_modules/gulp/bin/gulp.js build
RUN jekyll build

FROM nginx:alpine
COPY --from=build /tmp/_site /usr/share/nginx/html

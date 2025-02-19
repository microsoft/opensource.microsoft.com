"use strict";

// Project Specific Variables
const projectPath = './';
const devPath = projectPath + '_dev';
const buildPath = projectPath + 'assets';
const projectURL = projectPath + './_site';

// npm packages
const fs = require('fs');
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const rename = require('gulp-rename');
const newer = require('gulp-newer');
const path = require('path');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

// local scripts
const buildThanksData = require('./script/thanks');

const browsersync = require("browser-sync").create();
const del = require("del");
const $ = gulpLoadPlugins();

var paths = {
    styles: {
        src: "assets/**/*.scss",
        dest: "assets/css"
    }
};

// BrowserSync
function browserSync() {
    console.log('browser sync');
    browsersync.init({
        server: {
            baseDir: "./_site/"
        },
        open: false,
        injectChanges: true,
        port: 3000,
        files: [buildPath + '/css/*.css', buildPath + '/js/*.js', projectPath + '*.html']
    });
}

// BrowserSync Reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}

// Clean assets
function clean() {
    return del(["./_site/assets/"]);
}

function css() {
    console.log('Compiling CSS...');
    return gulp
        .src([devPath + '/scss/compile.scss'])
        .pipe(rename({ basename: "index" }))
        .pipe(sass({ includePaths: ['node_modules/'] }).on('error', sass.logError))
        .pipe(autoprefixer({ cascade: false }))
        .pipe(cleanCSS())
        .pipe(gulp.dest("./assets/css/"))
        .pipe(browsersync.stream());
}

function thanks(done) {
    console.log('Building thanks data...');
    const yaml = buildThanksData();
    const file = path.join(__dirname, '_data', 'dependencies.yml');
    fs.writeFileSync(file, yaml);
    return done();
}

function js() {
    console.log('Compiling JS...');

    var scriptsToConcat = [
        devPath + '/js/main.js'
    ];

    return (
        gulp
            .src(scriptsToConcat)
            .pipe(concat('main.js'))
            .pipe(uglify())
            .pipe(gulp.dest("./assets/js/"))
            .pipe(browsersync.stream())
    );
}

function jsFromNpm() {
    return gulp
        .src([
            'node_modules/gsap/dist/gsap.min.js',
            'node_modules/timeago/jquery.timeago.js',
        ])
        .pipe(gulp.dest("./assets/js/"))
}

function images() {
    return gulp
        .src([devPath + '/images/**/*.{png,jpg,gif,ico,svg}'])
        .pipe(newer(buildPath + '/images/'))
        .pipe(imagemin({
            progressive: true,
            use: [pngquant()]
        }))
        .pipe(gulp.dest(buildPath + '/images/'))
}

// Next.js build
function nextBuild() {
    console.log('Building Next.js application...');
    return cp.spawn("npm", ["run", "build"], { stdio: "inherit" });
}

function watchFiles() {
    css();
    js();
    nextBuild();
    console.log('watching...');

    gulp.watch(
        [
            "./_dev/scss/**/*"
        ],
        gulp.series(css, nextBuild)
    );
    gulp.watch(
        [
            "./_dev/js/main.js"
        ],
        gulp.series(js, nextBuild, browserSyncReload)
    );
    gulp.watch(
        [
            "./components/**/*",
            "./pages/**/*"
        ],
        gulp.series(nextBuild, browserSyncReload)
    );
    gulp.watch("./assets/img/**/*", images);
}

const build = gulp.series(clean, jsFromNpm, css, js, thanks, nextBuild);
const watch = gulp.parallel(watchFiles, browserSync);

gulp.task('default', watch);
gulp.task('build', build);

exports.css = css;
exports.js = js;
exports.nextBuild = nextBuild;
exports.clean = clean;
exports.watch = watch;
exports.watchFiles = watchFiles;
exports.jsFromNpm = jsFromNpm;
exports.thanks = thanks;

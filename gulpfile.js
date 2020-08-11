"use strict";

// Project Specific Variables
const projectPath 		= './';
const devPath 			= projectPath + '_dev';
const buildPath 		= projectPath + 'assets';
const projectURL 		= projectPath + './_site';


// npm packages
const fs = require('fs');
const gulp 				= require('gulp');
const gulpLoadPlugins 	= require('gulp-load-plugins');
const cp = require("child_process");
const rename			= require('gulp-rename');
const newer				= require('gulp-newer');
const path 				= require('path');
const sass 				= require('gulp-sass');
const autoprefixer 		= require('gulp-autoprefixer');
const cleanCSS 			= require('gulp-clean-css');
const concat 			= require('gulp-concat');
const uglify			= require('gulp-uglify');
const imagemin			= require('gulp-imagemin');
const pngquant			= require('imagemin-pngquant');

// local scripts
const buildThanksData   = require('./script/thanks');

const browsersync = require("browser-sync").create();
const del = require("del");
//const reload = browserSync.reload;
const $ = gulpLoadPlugins();


var paths = {
    styles: {
        // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
        src: "assets/**/*.scss",
        // Compiled files will end up in whichever folder it's found in (partials are not compiled)
        dest: "assets/css"
    }

    // Easily add additional paths
    // ,html: {
    //  src: '...',
    //  dest: '...'
    // }
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
 // done();
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
    .pipe(sass({includePaths: ['node_modules/']}).on('error', sass.logError))
    .pipe(autoprefixer({ cascade: false }))
	.pipe(cleanCSS())
    .pipe(gulp.dest("./assets/css/"))
	.pipe(browsersync.stream());
    //.pipe(browsersync.stream());
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

// Jekyll
function jekyll() {
	console.log('recompile jekyll');
	return cp.spawn("bundle", ["exec", "jekyll", "build"], { stdio: "inherit" });
}


function watchFiles() {
	css();
	js();
	jekyll();
	console.log('watching...');

	gulp.watch(
	    [
	      "./_dev/scss/**/*"
	    ],
	    gulp.series(css, jekyll)
	);
	gulp.watch(
	    [
	      "./_dev/js/main.js"
	    ],
	    gulp.series(js, jekyll, browserSyncReload)
	);
	gulp.watch(
    [
      "./_includes/**/*",
      "./_layouts/**/*",
      "./_pages/**/*",
      "./_posts/**/*",
      "./_projects/**/*"
    ],
	  gulp.series(jekyll, browserSyncReload)
	);
	gulp.watch("./assets/img/**/*", images);
}


const build = gulp.series(clean, jsFromNpm, css, js, thanks);
//const watch = gulp.parallel(watchFiles, browserSync);

const jekylll = gulp.series(clean, gulp.parallel(css,js,jekyll));
const watch = gulp.parallel(watchFiles, browserSync);

gulp.task('default', watch);

gulp.task('build', build);

exports.css = css;
exports.js = js;
exports.jekyll = jekyll;
exports.jekylll = jekylll;
exports.clean = clean;
exports.watch = watch;
exports.watchFiles = watchFiles;
exports.jsFromNpm = jsFromNpm;
exports.thanks = thanks;

//
// gulp.task('default', gulp.series('clean', 'styles', function(done){
// 	done();
// }));

'use strict';

//Load Gulp 
var gulp = require('gulp');

//PLUGINS
//Live reload and server
var browserSync = require('browser-sync').create();
//Prefix CSS with browser prefixes
var autoprefixer = require('gulp-autoprefixer');
//Turn SASS into CSS
var sass = require('gulp-sass');
//Minify images
var imagemin = require('gulp-imagemin');
//Only changed file
var changed = require('gulp-changed');
//Source maps to see through the uglyness of min.css/js
var sourcemaps = require('gulp-sourcemaps');
//Minify JS files for performance
var uglify = require('gulp-uglify');
//Minify CSS files for performance
var minifyCSS = require('gulp-cssnano');
//Rename files
var rename = require('gulp-rename');


//FOLDER SETUP
//Setup build folders
var source = './app/src'; // Source Folder path
var target = './app/dist'; //Distribution Folder path

//TASKS
// Static Server + watching scss/html files
gulp.task('serve', ['fonts','markup','scripts', 'images', 'php', 'sass'], function() {

    //Tell BS what folder to serve
    browserSync.init({
        server: target
    });

    //Watching for these changes and reloading the browser
    gulp.watch(source + "/fonts/**", ['fonts']).on('change', browserSync.reload);
    gulp.watch(source + "/js/**/*.js", ['scripts']).on('change', browserSync.reload);
    gulp.watch(source + "/*.html", ['markup']).on('change', browserSync.reload);
    gulp.watch(source + "/*.php", ['php']).on('change', browserSync.reload);
    gulp.watch(source + "/**/*.php", ['php']).on('change', browserSync.reload);
    gulp.watch(source + "/img/**", ['images']).on('change', browserSync.reload);
    gulp.watch(source + "/css/**/*.{sass,scss}", ['sass']).on('change', browserSync.reload);
});

// Sass task
gulp.task('sass', function() {
    return gulp.src(source + "/css/**/*.{sass,scss}")
        .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            //Add CSS vendor prefixes
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            //Make it small
            .pipe(cssnano())
            .pipe(rename({
                suffix: '.min'
            }))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest(target + "/css"))
        .pipe(browserSync.stream());
});

// Markup task
gulp.task('markup', function() {
    return gulp.src(source + "/*.html")
        .pipe(gulp.dest(target))
        .pipe(browserSync.stream());
});

// PHP task
gulp.task('php', function() {
    return gulp.src(source + "/**/*.php")
        .pipe(gulp.dest(target))
        .pipe(browserSync.stream());
});

// Scripts task
gulp.task('scripts', function() {
    return gulp.src(source + "/js/**")
        .pipe(gulp.dest(target + "/js"))
        .pipe(sourcemaps.init())
            //Make it small
            .pipe(uglify())
            .pipe(rename({
                suffix: '.min'
            }))
        .pipe(sourcemaps.write('../maps'))
        .pipe(browserSync.stream());
});

// Images task
gulp.task('images', function() {
    return gulp.src(source + "/img/**")
        .pipe(changed(target))
        .pipe(imagemin()) //Make it smaller
        .pipe(gulp.dest(target + "/img"))
        .pipe(browserSync.stream());
});

// Fonts task
gulp.task('fonts', function() {
    return gulp.src(source + "/fonts/**")
        .pipe(gulp.dest(target + "/fonts"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
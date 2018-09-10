// Useful gulp functions for the development of HoodCMS.
// Note this is a demo project and should not be used for production HoodCMS projects.
// In production, you should install the nuget and bower packages to your HoodCMS project.

var gulp = require('gulp'),
    path = require('path'),
    fs = require('fs'),
    rimraf = require('gulp-rimraf'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    stripCss = require('gulp-strip-css-comments'),
    stripJs = require('gulp-strip-comments'),
    sourcemaps = require('gulp-sourcemaps');

// Site gulpage
jsFolder = './wwwroot/js/',
cssFolder = './wwwroot/css/',
lessFolder = './wwwroot/less/';
libFolder = './wwwroot/lib/';
hoodFolder = './wwwroot/lib/hood/';

gulp.task('clean', function (cb) {
    return gulp.src([
        jsFolder + '*.min.js',
        jsFolder + '*.packaged.js',
        cssFolder
    ], { read: false })
    .pipe(rimraf({ force: true }));
});

gulp.task('less:src', function () {
    return gulp
        .src(lessFolder + '*.less')
        .pipe(sourcemaps.init({ largeFile: true }))
        .pipe(less({ relativeUrls: true }))
        .pipe(sourcemaps.write("/"))
        .pipe(gulp.dest(cssFolder));
});

gulp.task('less', function () {
    return gulp
        .src(lessFolder + '*.less')
        .pipe(sourcemaps.init({ largeFile: true }))
        .pipe(less({ relativeUrls: true }))
        .pipe(stripCss({ preserve: false }))
        .pipe(cssmin())
        .pipe(rename({ suffix: ".min" }))
        .pipe(sourcemaps.write("/"))
        .pipe(gulp.dest(cssFolder));
});

gulp.task('js', function () {
    l = uglify({});
    l.on('error', function (e) {
        console.log(e);
        l.end();
    });
    return gulp
        .src(jsFolder + 'site.js')
        .pipe(l)
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest(jsFolder));
});

gulp.task('js:package', function () {
    return gulp.src([
        libFolder + 'hood/dist/js/includes/google.min.js',
        jsFolder + 'site.min.js',
    ])
    .pipe(concat('site.packaged.js'))
    .pipe(gulp.dest(jsFolder))
    .pipe(stripJs())
    .pipe(gulp.dest(jsFolder));
});

gulp.task('watch:js', function () {
    gulp.watch(jsFolder + '**/*.js', gulp.series('js'));
});

gulp.task('watch:less', function () {
    gulp.watch(lessFolder + '**/*.less', gulp.series('less'));
});

gulp.task("watch", gulp.series('watch:js', 'watch:less'));

gulp.task("publish", gulp.series('clean', 'less:src', 'less', 'js', 'js:package'));
/// <binding AfterBuild='build' />
// Useful gulp functions for the development of HoodCMS.
// Note this is a demo project and should not be used for production HoodCMS projects.
// In production, you should install the nuget and bower packages to your HoodCMS project.

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rimraf = require('gulp-rimraf'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    sourcemaps = require('gulp-sourcemaps'),
    lib = './wwwroot/lib/',
    hood = {
        js: './wwwroot/hood/js/',
        css: './wwwroot/hood/css/',
        scss: './wwwroot/hood/scss/',
        images: './wwwroot/hood/images/'
    },
    output = {
        js: './../../js/',
        css: './../../css/',
        scss: './../../scss/',
        images: './../../images/'
    };

// Cleans all dist/src/images output folders, as well as the hood folders.
gulp.task('clean', function (cb) {
    return gulp.src([
        output.css,
        output.scss,
        output.js,
        output.images,
        hood.css
    ], { read: false, allowEmpty: true })
        .pipe(rimraf({ force: true }));
});

// Compiles, compresses and copies all scss files to the output directories.
gulp.task('scss', function () {
    return gulp.src(hood.scss + '*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded', indentType: 'tab', indentWidth: 1 }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(hood.css));
});

gulp.task('scss:copy', function () {
    return gulp.src(hood.scss + "**/*.scss")
        .pipe(gulp.dest(output.scss));
});

gulp.task('cssnano', function () {
    return gulp.src([hood.css + '**/*.css', '!' + hood.css + '**/*.min.css'])
        .pipe(gulp.dest(output.css))
        .pipe(cssnano({
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(hood.css))
        .pipe(gulp.dest(output.css));
});

// Copies any image files from the images directories to the distribution images directory.
gulp.task('images', function () {
    return gulp.src(hood.images + '**/*.+(png|jpg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest(output.images));
});

// Minifies javascript and copies the output to the output directories.
gulp.task('js', function () {
    l = uglify({});
    l.on('error', function (e) {
        console.log(e);
        l.end();
    });
    return gulp.src([hood.js + '**/*.js', '!' + hood.js + '**/*.min.js'], { base: hood.js })
        .pipe(gulp.dest(output.js))
        .pipe(l)
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(hood.js))
        .pipe(gulp.dest(output.js));
});

// Bundle the app into the packaged form and copies the output to the output directories.
gulp.task('js:package:app', function () {
    l = uglify({});
    l.on('error', function (e) {
        console.log(e);
        l.end();
    });
    return gulp.src([
        hood.js + 'includes/production.js',
        hood.js + 'includes/globals.js',
        hood.js + 'includes/stringhelpers.js',
        hood.js + 'includes/alerts.js',
        hood.js + 'includes/helpers.js',
        hood.js + 'includes/forms.js',
        hood.js + 'includes/handlers.js',
        hood.js + 'includes/pager.js',
        hood.js + 'includes/validator.js',
        hood.js + 'includes/modals.js',
        hood.js + 'includes/inline.js',
        hood.js + 'includes/addresses.js',
        hood.js + 'includes/cart.js',
        hood.js + 'app.js'
    ], { base: '.' })
        .pipe(concat('app.packaged.js'))
        .pipe(l)
        .pipe(gulp.dest(hood.js))
        .pipe(gulp.dest(output.js));
});

// Package the login javascript and copy the output to the output directories.
gulp.task('js:package:login', function () {
    l = uglify({});
    l.on('error', function (e) {
        console.log(e);
        l.end();
    });
    return gulp.src([
        lib + 'jquery-mask/jquery.mask.js',
        hood.js + 'includes/production.js',
        hood.js + 'login.js'
    ], { base: '.' })
        .pipe(concat('login.packaged.js'))
        .pipe(l)
        .pipe(gulp.dest(hood.js))
        .pipe(gulp.dest(output.js));
});

// Package the admin Javascript and copy the output to the output directories.
gulp.task('js:package:admin', function () {
    l = uglify({});
    l.on('error', function (e) {
        console.log(e);
        l.end();
    });
    return gulp.src([
        hood.js + 'includes/production.js',
        hood.js + 'includes/globals.js',
        hood.js + 'includes/stringhelpers.js',
        hood.js + 'includes/uploader.js',
        hood.js + 'includes/alerts.js',
        hood.js + 'includes/helpers.js',
        hood.js + 'includes/forms.js',
        hood.js + 'includes/handlers.js',
        hood.js + 'includes/datalist.js',
        hood.js + 'includes/fileupload.js',
        hood.js + 'includes/pager.js',
        hood.js + 'includes/validator.js',
        hood.js + 'includes/blades.js',
        hood.js + 'includes/modals.js',
        hood.js + 'includes/inline.js',
        hood.js + 'includes/media.js',
        hood.js + 'includes/users.js',
        hood.js + 'includes/themes.js',
        hood.js + 'includes/property.js',
        hood.js + 'includes/subscriptions.js',
        hood.js + 'includes/content.js',
        hood.js + 'includes/forums.js',
        hood.js + 'includes/logs.js',
        hood.js + 'includes/google.js',
        hood.js + 'admin.js'
    ], { base: '.' })
        .pipe(concat('admin.packaged.js'))
        .pipe(l)
        .pipe(gulp.dest(hood.js))
        .pipe(gulp.dest(output.js));
});

gulp.task('package', gulp.series('js:package:admin', 'js:package:app', 'js:package:login'));
gulp.task('build', gulp.series(gulp.parallel('scss', 'js', 'images'), gulp.parallel('scss:copy', 'cssnano', 'package')));

// Site workload, for the local site to compile files for use.
gulp.task('site:js', function () {
    l = uglify({});
    l.on('error', function (e) {
        console.log(e);
        l.end();
    });
    return gulp
        .src('./wwwroot/js/site.js')
        .pipe(l)
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(jsFolder));
});

gulp.task('site:js:package', function () {
    l = uglify({});
    l.on('error', function (e) {
        console.log(e);
        l.end();
    });
    return gulp.src([
        '/wwwroot/js/includes/google.js',
        '/wwwroot/js/site.min.js'
    ])
        .pipe(concat('site.packaged.js'))
        .pipe(l)
        .pipe(gulp.dest(jsFolder))
        .pipe(stripJs())
        .pipe(gulp.dest(jsFolder));
});

gulp.task('publish', gulp.series('clean', 'build', 'site:js', 'site:js:package'));

gulp.task('watch', function () {
    gulp.watch(hood.scss, gulp.series('scss'));
});

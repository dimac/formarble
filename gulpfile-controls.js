"use strict";
/* jshint expr:true, unused:false */
var fs = require('fs'),
    es = require('event-stream'),
    path = require('path'),
    gutil = require('gulp-util'),
    argv = require('minimist')(process.argv.slice(2));

var baseDir = path.resolve('build');//absolute path
var controlsBaseDir = path.resolve('src/controls');

if(argv.module && fs.existsSync(path.join(controlsBaseDir, argv.module))) {
    gutil.log(gutil.colors.green('Compiling module ' + argv.module, 'at', path.join(controlsBaseDir, argv.module)));
    process.chdir(path.join(controlsBaseDir, argv.module));
} else {
    gutil.log(gutil.colors.red('No or bad module specified!'));
    process.exit(1);
}

var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    nghtml = require('gulp-ng-html2js'),
    ngmin = require("gulp-ngmin"),
    minifyHtml = require("gulp-minify-html"),
    uglify = require("gulp-uglify"),
    sourcemaps = require("gulp-sourcemaps");

var name = path.basename(process.cwd()),
    buildDir = path.relative(process.cwd(), path.resolve(baseDir, name)),
    moduleName = 'formarble/controls/' + name,
    sources = {
        module: name + '.js',
        templates: 'templates/**/*.html'
    },
    dest = {
        dist: path.join(buildDir, name + '.js'),
        distMin: path.join(buildDir, name + '.min.js'),

        //module: path.join(buildDir, name + '.controls.js'),
        //templates: path.join(buildDir, name + '.templates.js')
    };

function handleErrors() {
    return plumber({
        errorHandler: function (err) {
            gutil.log(err);
        }
    })
}

//reusable pipes
var pipe = {
    module: function (stream) {
        return stream
            .pipe(handleErrors())
//            .pipe(sourcemaps.init())
//            .pipe(ngmin())
//            .pipe(uglify())
//            .pipe(sourcemaps.write())
//            .pipe(rename(dest.module))
    },
    html: function (stream) {
        return stream
            .pipe(handleErrors())
            .pipe(minifyHtml({
                empty: true,
                spare: true,
                quotes: true
            }))
            .pipe(nghtml({
                moduleName: moduleName,
                declareModule: false
            }))
            //.pipe(concat(dest.templates))
            //.pipe(gulp.dest('.'))
    }
};

gulp.task('all', function (event) {
    var module = pipe.module(gulp.src(sources.module)),
        templates = pipe.html(gulp.src(sources.templates));

    return es.merge(module, templates)
        .pipe(concat(dest.dist))
        .pipe(gulp.dest('.'))
        .pipe(ngmin())
        .pipe(uglify())
        .pipe(rename(dest.distMin))
        .pipe(gulp.dest('.'));

});

gulp.task('default', ['all']);



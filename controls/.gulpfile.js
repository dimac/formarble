"use strict";
/* jshint expr:true, unused:false */
var es = require('event-stream'),
    path = require('path');

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    nghtml = require('gulp-ng-html2js'),
    ngmin = require("gulp-ngmin"),
    minifyHtml = require("gulp-minify-html"),
    uglify = require("gulp-uglify"),
    sourcemaps = require("gulp-sourcemaps");

var name = path.basename(process.cwd()),
    moduleName = 'formarble/controls/' + name,
    sources = {
        module: name + '.js',
        templates: 'templates/**/*.html'
    },
    dest = {
        dist: name + '.all.js',
        distMin: name + '.all.min.js',

        module: name + '.controls.js',
        templates: name + '.templates.js'
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
            .pipe(concat(dest.templates))
            .pipe(gulp.dest('.'))
    }
};

gulp.task('templates', function (event) {
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

gulp.task('default', ['templates']);



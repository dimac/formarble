"use strict";
/* jshint expr:true, unused:false */
var es = require('event-stream');

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    html2js = require('gulp-ng-html2js'),
    minifyHtml = require("gulp-minify-html"),
    uglify = require("gulp-uglify");

var name = 'simple',
    moduleName = 'formarble/controls/' + name,
    sources = {
        module: 'formarble.' + name + '.js',
        templates: 'templates/**/*.html'
    },
    destinations = {
        templates: 'formarble.' + name + '.templates.js',
        dist: name + '.min.js'
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
    html: function (stream) {
        return stream
            .pipe(handleErrors())
            .pipe(minifyHtml({
                empty: true,
                spare: true,
                quotes: true
            }))
            .pipe(html2js({
                moduleName: moduleName,
                declareModule: false
            }))
    }
};

gulp.task('templates', function (event) {
    var module = gulp.src(sources.module),
        templates = pipe.html(gulp.src(sources.templates));

    return es.merge(module, templates)
        .pipe(concat(destinations.dist))
//        .pipe(uglify())
        .pipe(gulp.dest('./'));

});

gulp.task('default', ['templates']);



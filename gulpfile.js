"use strict";
/* jshint expr:true, unused:false */
var fs = require('fs'),
    path = require('path');

var gulp = require('gulp'),
    chug = require('gulp-chug'),
    rename = require('gulp-rename'),
    ngmin = require('gulp-ngmin'),
    uglify = require('gulp-uglify');

var controlsDir = 'controls',
    controls = fs.readdirSync(controlsDir)
        .filter(function (name) {
            return fs.statSync(path.join(controlsDir, name)).isDirectory();
        });

gulp.task('build-core', function () {
    return gulp.src('formarble.js')
        .pipe(ngmin())
        .pipe(uglify())
        .pipe(rename('formarble.min.js'))
        .pipe(gulp.dest('.'))
})

gulp.task('build-controls', function () {
    var stream = gulp.src('controls/.gulpfile.js')

    controls.forEach(function (dest) {
        stream
            .pipe(rename(path.join(dest, 'gulpfile.js')))
            .pipe(chug());
    });

    return stream;
});

gulp.task('default', ['build-core', 'build-controls']);
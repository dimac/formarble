"use strict";
/* jshint expr:true, unused:false */
var fs = require('fs'),
    path = require('path');

var gulp = require('gulp'),
    chug = require('gulp-chug'),
    rename = require('gulp-rename');

var controlsDir = 'controls',
    controls = fs.readdirSync(controlsDir)
        .filter(function (name) {
            return fs.statSync(path.join(controlsDir, name)).isDirectory();
        });

gulp.task('default', function () {
    var stream = gulp.src('controls/.gulpfile.js')

    controls.forEach(function (dest) {
        stream
            .pipe(rename(path.join(dest, 'gulpfile.js')))
            .pipe(chug());
    });

    return stream;
});


"use strict";
/* jshint expr:true, unused:false */
var fs = require('fs'),
    path = require('path');

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    chug = require('gulp-chug'),
    rename = require('gulp-rename'),
    ngmin = require('gulp-ngmin'),
    uglify = require('gulp-uglify'),
    bump = require('gulp-bump');

var args = require('minimist')(process.argv.slice(3)),
    controlsDir = 'controls',
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

gulp.task('version', function() {
    var packages = ['package.json', 'bower.json'];

    if (args.set) {
        return gulp.src(packages)
            .pipe(bump({version: args.set}))
            .pipe(gulp.dest('.'));
    }

    var versions = {
        patch: 'patch',
        minor: 'minor',
        major: 'major',
        pre: 'prerelease'
    };

    for(var i in versions) {
        if(args[i]) {
            return gulp.src(packages)
                .pipe(bump({type: versions[i]}))
                .pipe(gulp.dest('.'));
        }
    }

    gutil.log(gutil.colors.yellow('Version not bumped'));
})

gulp.task('default', ['build-core', 'build-controls']);
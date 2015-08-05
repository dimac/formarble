"use strict";
/* jshint expr:true, unused:false */
var fs = require('fs'),
    path = require('path'),
    es = require('event-stream');

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    chug = require('gulp-chug'),
    rename = require('gulp-rename'),
    ngmin = require('gulp-ngmin'),
    uglify = require('gulp-uglify'),
    bump = require('gulp-bump');

var args = require('minimist')(process.argv.slice(3)),
    buildDir = 'build',
    controlsDir = 'src/controls',
    controls = fs.readdirSync(controlsDir)
        .filter(function (name) {
            return fs.statSync(path.join(controlsDir, name)).isDirectory();
        });

gulp.task('build-core', function () {
    return gulp.src('src/formarble.js')
        .pipe(gulp.dest(buildDir))
        .pipe(ngmin())
        .pipe(uglify())
        .pipe(rename('formarble.min.js'))
        .pipe(gulp.dest(buildDir))
});

gulp.task('build-controls', function () {
    var streams = controls.map(function (dest) {
        return gulp.src('gulpfile-controls.js', {read: false})
            .pipe(chug({
                args: ['--module=' + dest]
            }));
    });

    return es.merge(streams);
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
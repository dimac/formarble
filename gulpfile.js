"use strict";
/* jshint expr:true, unused:false */

var gulp = require('gulp'),
    chug = require('gulp-chug');

gulp.task( 'default', function () {
    gulp.src( 'controls/**/gulpfile.js', {read: false} )
        .pipe( chug() )
} );



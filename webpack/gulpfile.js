'use strict';

var gulp = require("gulp");
var rename = require('gulp-rename');
var webpack = require('gulp-webpack');

var myConfig = Object.create(require('./webpack.config.js'));

gulp.task("default", function () {
    gulp.src("src/*.js")
        .pipe( webpack(myConfig) )
        .pipe(gulp.dest("dist"))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest("dist"));
});
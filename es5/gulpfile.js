'use strict';

var gulp = require("gulp");
var babel = require("gulp-babel");
var concat = require('gulp-concat')
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task("default", function () {
    return gulp.src("src/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"))
        .pipe(concat('main.js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest("dist"));
});
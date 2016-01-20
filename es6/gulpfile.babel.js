'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';

gulp.task('default', () => {
	return gulp.src("src/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"))
        .pipe(concat('main.js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest("dist"));
});
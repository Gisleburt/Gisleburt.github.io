'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('typescript', function () {
    return gulp.src('ts/**/*.ts')
        .pipe(typescript({
            // noImplicitAny: true,
            out: 'portfolio.js'
        }))
        .pipe(gulp.dest('./js'));
});

gulp.task('typescript:watch', function () {
    gulp.watch('./ts/**/*.ts', ['typescript']);
});

gulp.task('default', ['sass', 'typescript']);
gulp.task('watch', ['sass:watch', 'typescript:watch']);


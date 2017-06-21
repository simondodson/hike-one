const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const less = require('gulp-less');
const paths = require('../config').paths;

gulp.src(paths.stylesSrc + 'index.less')
	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(less())
	.on('error', function(error) {
		console.error(error.message);
		this.emit('end');
	})
	.pipe(autoprefixer({ browsers: ['> 1%', 'last 2 versions'] }))
	.pipe(cleanCss())
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest(paths.stylesDist));
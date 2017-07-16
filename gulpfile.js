var gulp = require('gulp')
var markdown = require('gulp-markdown')
var sass = require('gulp-sass')
var browserSync = require('browser-sync')

gulp.task('markdown', function() {
	return gulp
		.src('./src/posts/markdown/**/*.md')
		.pipe(markdown())
		.pipe(gulp.dest('./src/posts/html'))
})

gulp.task('sass', function() {
	return gulp
		.src('./src/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./src/'))
})

gulp.task('serve', function() {
	browserSync({
		server: {
			baseDir: 'src'
		}
	})

	gulp.watch('src/scss/*.scss', ['sass'])
	gulp.watch(['*.html', '*.css'], { cwd: 'src' }, browserSync.reload)
})

gulp.task('default', ['sass'])

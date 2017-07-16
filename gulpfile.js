var gulp = require('gulp')
var sass = require('gulp-sass')
var browserSync = require('browser-sync')

gulp.task('sass', function() {
	return gulp
		.src('./src/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./src/'))
})

gulp.task('serve', function() {
	browserSync({
		server: {
			baseDir: 'src'
		}
	})

	gulp.watch('src/sass/*.scss', ['sass'])

	gulp.watch(['*.html', '*.css'], { cwd: 'src' }, browserSync.reload)
})

gulp.task('default', ['sass'])

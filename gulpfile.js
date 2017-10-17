const gulp = require('gulp');
const eslint = require('gulp-eslint');
const run = require('gulp-run');

gulp.task('lint', function() {
	return gulp.src('models/**/*.js')
		.pipe(eslint({
			'fix': false,
			'useEslintrc': true
		}))
		.pipe(eslint.format());
});

gulp.task('test', function(){
  process.env.NODE_ENV = 'test';
  gulp.src('specs/tests/*.js')
      .pipe(run('npm test'))
      .on('error', function(e){
        throw e
      })
});

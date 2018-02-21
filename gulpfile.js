const gulp = require('gulp');

gulp.task('default', [], () => {
  gulp.src('index.html')
    .pipe(gulp.dest('server'));
});


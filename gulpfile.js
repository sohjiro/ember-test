var handlebars = require('gulp-ember-handlebars');
var concat = require('gulp-concat');
var gulp = require('gulp');

gulp.task('templates', function(){
  gulp.src(['src/ratpack/public/templates/**/*.hbs'])
    .pipe(handlebars({
      outputType: 'browser'
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('src/ratpack/public/templates/'));
});

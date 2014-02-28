var handlebars = require('gulp-ember-handlebars');
var concat = require('gulp-concat');
var bower = require('gulp-bower');
var gulp = require('gulp');

gulp.task('bower', function() {
  bower()
});

gulp.task('templates', function(){
  gulp.src(['src/ratpack/public/templates/**/*.hbs'])
    .pipe(handlebars({
      outputType: 'browser'
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('src/ratpack/public/templates/'));
});

gulp.task('default', ['bower', 'templates'])

module.exports = function(config) {
  config.set({
    basePath: 'src/ratpack/public',

    files: [
      'lib/jquery/jquery.min.js',
      'lib/handlebars/handlebars.js',
      'lib/ember/ember.js',
      'scripts/app.js',
      'templates/*.hbs',
      'tests/*.js'
    ],

    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS'],
    singleRun: true,
    autoWatch: false,

    frameworks: ['qunit'],

    reporters: ['progress'],
    port: 9876,
    colors: true,
    captureTimeout: 60000,

    plugins : [
      'karma-qunit',
      'karma-chrome-launcher',
      'karma-ember-preprocessor',
      'karma-phantomjs-launcher'
    ],

    preprocessors: {
      "**/*.hbs": 'ember'
    }
  });
};

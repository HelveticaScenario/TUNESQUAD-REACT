var clean, createServers, execWebpack, express, gulp, gutil, httpPort, minifyCSS, path, rev, sass, sassConfig, tiny_lr, vendorPaths, watch, webpack, webpackConfig;
path = require('path');
gulp = require('gulp');
gutil = require('gulp-util');
express = require('express');
sass = require('gulp-sass');
minifyCSS = require('gulp-minify-css');
clean = require('gulp-clean');
watch = require('gulp-watch');
rev = require('gulp-rev');
tiny_lr = require('tiny-lr');
webpack = require("webpack");
webpackConfig = require("./webpack.config.js");

if (gulp.env.production) {
  webpackConfig.plugins = webpackConfig.plugins.concat(new webpack.optimize.UglifyJsPlugin());
  webpackConfig.output.filename = "main-[hash].js";
}

sassConfig = {
  includePaths: ['src/styles']
};

httpPort = 4000;

vendorPaths = ['es5-shim/es5-sham.js', 'es5-shim/es5-shim.js', 'bootstrap/dist/css/bootstrap.css'];

gulp.task('clean', function() {
  return gulp.src('dist', {
    read: false
  }).pipe(clean());
});

gulp.task('sass', function() {
  return gulp.src('src/styles/main.scss').pipe(sass(sassConfig).on('error', gutil.log)).pipe(gulp.env.production ? minifyCSS() : gutil.noop()).pipe(gulp.env.production ? rev() : gutil.noop()).pipe(gulp.dest('dist/assets'));
});

gulp.task('vendor', function() {
  var paths;
  paths = vendorPaths.map(function(p) {
    return path.resolve("./bower_components", p);
  });
  return gulp.src(paths).pipe(gulp.dest('dist/assets/vendor'));
});

gulp.task('copy', function() {
  return gulp.src(['src/**/*', '!src/scripts', '!src/scripts/**/*', '!src/styles', '!src/styles/**/*']).pipe(gulp.dest('dist'));
});

gulp.task('webpack', function(callback) {
  execWebpack(webpackConfig);
  return callback();
});

gulp.task('dev', ['build'], function() {
  var servers;
  servers = createServers(httpPort, 35729);
  gulp.watch(['./src/**/*'], function(evt) {
    return gulp.run('build');
  });
  return gulp.watch(['./dist/**/*'], function(evt) {
    gutil.log(gutil.colors.cyan(evt.path), 'changed');
    return servers.lr.changed({
      body: {
        files: [evt.path]
      }
    });
  });
});

gulp.task('build', ['webpack', 'sass', 'copy', 'vendor'], function() {});

gulp.task('default', ['build'], function() {
  return setTimeout(function() {
    gutil.log("**********************************************");
    gutil.log("* gulp              (development build)");
    gutil.log("* gulp clean        (rm /dist)");
    gutil.log("* gulp --production (production build)");
    gutil.log("* gulp dev          (build and run dev server)");
    return gutil.log("**********************************************");
  }, 3000);
});

createServers = function(port, lrport) {
  var app, lr;
  lr = tiny_lr();
  lr.listen(lrport, function() {
    return gutil.log("LiveReload listening on", lrport);
  });
  app = express();
  app.use(express["static"](path.resolve("./dist")));
  app.listen(port, function() {
    return gutil.log("HTTP server listening on", port);
  });
  return {
    lr: lr,
    app: app
  };
};

execWebpack = function(config) {
  return webpack(config, function(err, stats) {
    if (err) {
      throw new gutil.PluginError("execWebpack", err);
    }
    return gutil.log("[execWebpack]", stats.toString({
      colors: true
    }));
  });
};
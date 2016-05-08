/*eslint-disable*/
'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
gulp.task('compile', [], function (done) {
    console.log('IMPLEMENT RUNNING browserify scripts/import_dropzone.js > scripts/browserify_dropzone.js');
    done();
});
// starts http server with live reload
// sass an jsx files are watched and compiled to www
// peerio-api-client repository is watched if --api option is provided and copied to www too
// http server watches www folder and reloads
gulp.task('serve', ['compile'], function () {
    // starting http server with watcher
    browserSync.init({
        notify: false,
        files: ['index.html', 'css', 'scripts'],
        logPrefix: 'SRV',
        logFileChanges: true,
        logConnections: true,
        open: false,
        reloadDelay: 4000,
        ui: false,
        ghostMode: false,
        port: 3002,
        server: {
            port: 3002,
            baseDir: '.',
            index: 'index.html',
            directory: true
        }
    });
});


const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.src("__tests__/test.js", { read: false })
    .pipe(mocha({ reporter: 'spec', exit: true }))
    .on('error', console.error)
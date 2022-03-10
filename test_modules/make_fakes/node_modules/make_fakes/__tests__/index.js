const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.src("__tests__/create.js", { read: false })
    .pipe(mocha({ reporter: 'spec', exit: true }))
    .on('error', console.error)
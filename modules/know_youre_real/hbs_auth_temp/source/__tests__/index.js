const gulp = require("gulp");
const mocha = require("gulp-mocha");

function runTest(file) {
  gulp
    .src(file, { read: false })
    .pipe(mocha({ reporter: "spec", exit: true }))
    .on("error", console.error);
}
runTest("0_FIRST/auth.js");

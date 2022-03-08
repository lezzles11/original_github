const { git, node_modules } = require("./index.js")
let check = new RegExp(git)

let str = ".git"

console.log(check.test(str));
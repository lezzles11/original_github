const S = require("string")
const { format } = require("make_legit")
const b = require("./dist/index.js")

// /
function STARTSWITH(string, substring) {
    let first = format(string, "string")
    let second = format(substring, "string")
    let getBoolean = S(first).startsWith(second)
    return getBoolean;
}


let trueStarts = STARTSWITH("hi", "h")

console.log("🚀 ~ file: playground.js ~ line 21 ~ trueStarts", trueStarts)
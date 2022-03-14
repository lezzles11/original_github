const test_waters = require("./dist/index.js")

function justPrint(input) {
    console.log("waters", input)
    return "waters" + input;
}
let getAll = test_waters.test(justPrint)
console.log("🚀 ~ file: playground.js ~ line 7 ~ getAll", getAll)
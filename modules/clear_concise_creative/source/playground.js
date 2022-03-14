const ccc = require("./index.js")
let test = ccc.readFile("./README.md")
ccc.writeFile("./README2.md", test)
const explain_me = require("explain_me")

// run to set up // npm install 
// explain_me.addScript("moduleName")
// explain_me.makeGlobal("array_helperz")

// run after you are finished 
// explain_me.readme("array_helperz")
// explain_me.html("array_helperz")
// explain_me.copyHTML("array_helperz")

let getInstructions = explain_me.addInstructions("array_helperz")
console.log(getInstructions)
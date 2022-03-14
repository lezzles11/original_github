const explain_me = require("explain_me")


// make sure all your files in src folder are commented.
// sets up package.json
// explain_me.addScript("code_clarity")
//     // adds scripts for compile, build, adds babel and webpack to folder
// explain_me.makeGlobal("code_clarity")
//     // run after you are finished 
// explain_me.readme("code_clarity", "", "intro.md")
//     // removes js doc.json and replaces it with module name and video
//     // runs command for you 
// explain_me.html("code_clarity", "https://dl.dropbox.com/s/zl8z7vm0z53ho0b/terminal.png")
//     // exports module from dist 
// explain_me.addIndex("code_clarity")

// explain_me.copyHTML("code_clarity")

explain_me.moveToDeploy({
    "colors": "^1.4.0",
    "when_you_free": "^1.2.1",
    "winston": "^3.6.0",
})
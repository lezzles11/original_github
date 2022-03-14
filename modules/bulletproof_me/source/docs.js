const explain_me = require("explain_me")


// make sure all your files in src folder are commented.
// // sets up package.json
// explain_me.addScript("bulletproof_me")
//     // adds scripts for compile, build, adds babel and webpack to folder
// explain_me.makeGlobal("bulletproof_me")
//     // run after you are finished 
// explain_me.readme("bulletproof_me", "https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/bulletproof_me.png", "intro.md")
//     // removes js doc.json and replaces it with module name and video
//     // runs command for you 
// explain_me.html("bulletproof_me", "https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/bulletproof_me.png")
//     // exports module from dist 
// explain_me.addIndex("bulletproof_me")

// explain_me.copyHTML("bulletproof_me")

explain_me.moveToDeploy({
    "lodash": "^4.17.21",
    "make_legit": "^1.4.10",
    "string": "^3.3.3",
    "whats_wrong": "^1.3.1",
    "when_you_free": "^1.2.5"
})
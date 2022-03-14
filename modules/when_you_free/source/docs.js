const explain_me = require("explain_me")


// make sure all your files in src folder are commented.
// sets up package.json
// explain_me.addScript("when_you_free")
//     // adds scripts for compile, build, adds babel and webpack to folder
// explain_me.makeGlobal("when_you_free")
//     // run after you are finished 
// explain_me.readme("when_you_free", "https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/when_you_free.png", "intro.md")
//     // removes js doc.json and replaces it with module name and video
//     // runs command for you 
// explain_me.html("when_you_free", "https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/when_you_free.png")
//     // exports module from dist 
// explain_me.addIndex("when_you_free")


explain_me.moveToDeploy({
    "bulletproof_me": "^1.0.8",
    "define_me": "^1.2.11",
    "moment": "^2.29.1",
    "string": "^3.3.3",
    "whats_wrong": "^1.3.1"
})
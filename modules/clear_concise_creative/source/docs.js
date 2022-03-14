const explain_me = require("explain_me")


// // make sure all your files in src folder are commented.
// // sets up package.json
// explain_me.addScript("clear_concise_creative")
//     // adds scripts for compile, build, adds babel and webpack to folder
// explain_me.makeGlobal("clear_concise_creative")
//     // run after you are finished 
// explain_me.readme("clear_concise_creative", "https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/clear_concise_creative.png")
//     // removes js doc.json and replaces it with module name and video
//     // runs command for you 
// explain_me.html("clear_concise_creative", "https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/clear_concise_creative.png")
//     // exports module from dist 
// explain_me.addIndex("clear_concise_creative")

// // explain_me.copyHTML("clear_concise_creative")

explain_me.moveToDeploy({
    "fs-extra": "^10.0.1",
    "lodash": "^4.17.21",
    "make_legit": "^1.2.0",
})
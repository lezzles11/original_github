const explain_me = require("explain_me")


// make sure all your files in src folder are commented.
// sets up package.json
// explain_me.addScript("make_fakes")
//     // adds scripts for compile, build, adds babel and webpack to folder
// explain_me.makeGlobal("make_fakes")
//     // run after you are finished 
// explain_me.readme("make_fakes", "https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/make_fakes.png", "intro.md")
//     // removes js doc.json and replaces it with module name and video
//     // runs command for you 
// explain_me.html("make_fakes", "https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/make_fakes.png")
//     // exports module from dist 
// explain_me.addIndex("make_fakes")

// explain_me.copyHTML("make_fakes")

explain_me.moveToDeploy({
    "lodash": "^4.17.21",
    "when_you_free": "^1.4.2"
})
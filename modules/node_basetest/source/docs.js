const explain_me = require("explain_me")


// // make sure all your files in src folder are commented.
// // sets up package.json
// explain_me.addScript("node_basetest")
//     // adds scripts for compile, build, adds babel and webpack to folder
// explain_me.makeGlobal("node_basetest")
//     // run after you are finished 
// explain_me.readme("node_basetest", "https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/node_basetest.png", "intro.md")
//     // removes js doc.json and replaces it with module name and video
//     // runs command for you 
// explain_me.html("node_basetest", "https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/node_basetest.png")
//     // exports module from dist 
// explain_me.addIndex("node_basetest")

// explain_me.copyHTML("node_basetest")

explain_me.moveToDeploy({
    "string": "^3.3.3",
    "chai": "^4.3.6",
    "when_you_free": "^1.1.0",
    "make_legit": "^1.2.0",
    "lodash": "^4.17.21",
}, "../../../zen-out.github.io/packages/node_basetest.html", true)
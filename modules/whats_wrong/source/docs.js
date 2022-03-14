const explain_me = require("explain_me")


// make sure all your files in src folder are commented.
// sets up package.json
// explain_me.addScript("whats_wrong")
//     // adds scripts for compile, build, adds babel and webpack to folder
// explain_me.makeGlobal("whats_wrong")
//     // run after you are finished 
// explain_me.readme("whats_wrong", "https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/whats_wrong.png")
//     // removes js doc.json and replaces it with module name and video
//     // runs command for you 
// explain_me.html("whats_wrong", "https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/whats_wrong.png")
//     // exports module from dist 
// explain_me.addIndex("whats_wrong")

// explain_me.copyHTML("whats_wrong")

explain_me.moveToDeploy({
    "make_legit": "^1.4.3",
})
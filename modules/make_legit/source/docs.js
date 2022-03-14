const explain_me = require("explain_me")


// make sure all your files in src folder are commented.
// sets up package.json
// explain_me.addScript("make_legit")
// adds scripts for compile, build, adds babel and webpack to folder
// explain_me.makeGlobal("make_legit")
// run after you are finished 
// explain_me.readme("make_legit", "https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/make_legit.png", "intro.md")
// removes js doc.json and replaces it with module name and video
// runs command for you 
// explain_me.html("make_legit", "https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/make_legit.png")
// exports module from dist 
// explain_me.addIndex("make_legit")

// explain_me.copyHTML("make_legit")

explain_me.moveToDeploy({
    "define_me": "^1.2.7",
    "check-types": "^11.1.2",
    "clean-deep": "^3.4.0",
    "whats_wrong": "^1.3.1",
    "when_you_free": "^1.2.5"
})
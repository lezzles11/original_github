const explain_me = require("explain_me")


// make sure all your files in src folder are commented.
// sets up package.json
// explain_me.addScript("know_youre_real")
// adds scripts for compile, build, adds babel and webpack to folder
// explain_me.makeGlobal("know_youre_real")
// run after you are finished 
// explain_me.readme("know_youre_real", "https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/know_youre_real.png", "intro.md")
// removes js doc.json and replaces it with module name and video
// runs command for you 
// explain_me.html("know_youre_real", "https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/know_youre_real.png")
// exports module from dist 
// explain_me.addIndex("know_youre_real")

// explain_me.copyHTML("know_youre_real")

explain_me.moveToDeploy({
    "bcrypt": "^5.0.1",
    "jsonwebtoken": "^8.5.1",
    "whats_wrong": "^1.2.0"
}, "../../../zen-out.github.io/packages/know_youre_real.html", true)
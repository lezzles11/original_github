const explain_me = require("explain_me")


// make sure all your files in src folder are commented.
// sets up package.json
explain_me.addScript("array_helperz")
    // adds scripts for compile, build, adds babel and webpack to folder
explain_me.makeGlobal("array_helperz")
    // run after you are finished 
explain_me.readme("array_helperz", "https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/array_helperz.png", "intro.md")
    // removes js doc.json and replaces it with module name and video
    // runs command for you 
explain_me.html("array_helperz", "https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/array_helperz.png")
    // exports module from dist 
explain_me.addIndex("array_helperz")

// explain_me.copyHTML("array_helperz")
const explain_me = require("explain_me")


// make sure all your files in src folder are commented.
// sets up package.json
explain_me.addScript("code_clarity")
    //     // adds scripts for compile, build, adds babel and webpack to folder
explain_me.makeGlobal("code_clarity")
    //     // run after you are finished 
explain_me.readme("code_clarity", "https://github.com/zen-out/zen-out.github.io/blob/master/assets/images/code_clarity.png", "intro.md")
    //     // removes js doc.json and replaces it with module name and video
    //     // runs command for you 
explain_me.html("code_clarity", "https://github.com/zen-out/zen-out.github.io/blob/master/assets/images/code_clarity.png")
    //     // exports module from dist 
    // explain_me.addIndex("code_clarity")

// explain_me.copyHTML("code_clarity")

explain_me.moveToDeploy({
    "make_legit": "^1.4.10",
    "colors": "^1.4.0",
    "when_you_free": "^1.4.7",
    "winston": "^3.6.0",
})
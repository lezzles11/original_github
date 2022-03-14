const explain_me = require("explain_me")


// make sure all your files in src folder are commented.
// sets up package.json
// explain_me.addScript("sparkly_clean")
// adds scripts for compile, build, adds babel and webpack to folder
// explain_me.makeGlobal("sparkly_clean")
// run after you are finished
explain_me.readme("sparkly_clean", "https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/sparkly_clean.png")
    // removes js doc.json and replaces it with module name and video
    // runs command for you
    // explain_me.html("sparkly_clean", "https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/sparkly_clean.png")
    // exports module from dist
    // explain_me.addIndex("sparkly_clean")


// explain_me.moveToDeploy({
//     "array_helperz": "^1.3.0",
//     "clear_concise_creative": "^1.1.0",
//     "define_me": "1.2.0",
//     "directory-tree": "^3.2.2",
//     "fs-extra": "^10.0.1",
//     "make_legit": "^1.2.0",
//     "when_you_free": "^1.1.0"
// }, "../../../zen-out.github.io/packages/sparkly_clean.html", true)
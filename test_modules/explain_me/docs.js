const explain_me = require("explain_me")


// make sure all your files in src folder are commented. 
// sets up package.json 
explain_me.addScript("module_name")
    // adds scripts for compile, build, adds babel and webpack to folder
explain_me.makeGlobal("module_name")
    // run after you are finished 
explain_me.readme("module_name", "video_link", "intro.md")
    // removes js doc.json and replaces it with module name and video
    // runs command for you 
explain_me.html("module_name", "video_link")
    // exports module from dist 
explain_me.addIndex("module_name")
    // explain_me.copyHTML("module_name")
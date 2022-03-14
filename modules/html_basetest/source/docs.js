const explain_me = require("explain_me")


// make sure all your files in src folder are commented. 
// sets up package.json 
explain_me.addScript("html_basetest")
    // adds scripts for compile, build, adds babel and webpack to folder
explain_me.makeGlobal("html_basetest")
    // run after you are finished 
explain_me.readme("html_basetest", "", "intro.md")
    // removes js doc.json and replaces it with module name and video
    // runs command for you 
explain_me.html("html_basetest", "")
    // exports module from dist 
explain_me.addIndex("html_basetest")
    // explain_me.copyHTML("html_basetest")
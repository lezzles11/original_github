const explain_me = require("explain_me")


// make sure all your files in src folder are commented. 
// sets up package.json 
explain_me.addScript("jquery_selectors_mergez")
    // adds scripts for compile, build, adds babel and webpack to folder
explain_me.makeGlobal("jquery_selectors_mergez")
    // run after you are finished 
explain_me.readme("jquery_selectors_mergez", "", "intro.md")
    // removes js doc.json and replaces it with module name and video
    // runs command for you 
explain_me.html("jquery_selectors_mergez", "")
    // exports module from dist 
explain_me.addIndex("jquery_selectors_mergez")
    // explain_me.copyHTML("jquery_selectors_mergez")
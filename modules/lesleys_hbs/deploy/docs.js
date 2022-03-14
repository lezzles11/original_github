const explain_me = require("explain_me")


// make sure all your files in src folder are commented. 
// sets up package.json 
explain_me.addScript("lesleys_hbs")
    // adds scripts for compile, build, adds babel and webpack to folder
explain_me.makeGlobal("lesleys_hbs")
    // run after you are finished 
explain_me.readme("lesleys_hbs", "", "intro.md")
    // removes js doc.json and replaces it with module name and video
    // runs command for you 
explain_me.html("lesleys_hbs", "")
    // exports module from dist 
explain_me.addIndex("lesleys_hbs")
    // explain_me.copyHTML("lesleys_hbs")
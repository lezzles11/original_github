const explain_me = require("explain_me")


// make sure all your files in src folder are commented. 
// sets up package.json 
// explain_me.addScript("automate_me")
//     // adds scripts for compile, build, adds babel and webpack to folder
// explain_me.makeGlobal("automate_me")
//     // run after you are finished 
// explain_me.readme("automate_me", "", "intro.md")
//     // removes js doc.json and replaces it with module name and video
//     // runs command for you 
// explain_me.html("automate_me", "")
//     // exports module from dist 
// explain_me.addIndex("automate_me")
explain_me.moveToDeploy("../../../zen-out.github.io/packages/automate_me.html")
    // explain_me.copyHTML("automate_me")
const explain_me = require("explain_me")


// make sure all your files in src folder are commented. 
// sets up package.json 
explain_me.addScript("knex_auth_token")
    // adds scripts for compile, build, adds babel and webpack to folder
explain_me.makeGlobal("knex_auth_token")
    // run after you are finished 
explain_me.readme("knex_auth_token")
    // removes js doc.json and replaces it with module name and video
    // runs command for you 
explain_me.html("knex_auth_token", "video_link")
    // exports module from dist 
explain_me.addIndex("knex_auth_token")
    // explain_me.copyHTML("array_helperz")
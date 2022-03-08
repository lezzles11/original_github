# sparkly_clean

![sparkly_clean](https://dl.dropbox.com/s/q6sadm6mxt97kby/sparkly_clean.jpeg)

Purpose 

- Requirements: 
- Removes all folders that have not been touched for two weeks. 
- Current stores all current sprint 
- modules are always going to be deployed. everything you write should be tested, and written once. 
- Recursively find all folders with this folder name and move into this folder 
- e.g., find all folders with code_clarity and then copy into the current folder 

/**********************************************
 * TO DO 
 * The purpose of this repository is to install it and then essentially feel okay about deleting it. 
 * ==================================
 * spark joy in your folder organization processes - 
 * - [ ] deletes folders that are longer than two weeks old
 * - [ ] moves all folders with a specific name
 * - [ ] prints out directory structure 
 * - [ ] encourages you to think about only things that make you a happy coder
 * - [ ] deletes folders that are git repositories
 * - [ ] moves readme into your portfolio
 ***********************************************/
const sparkly_clean = require("sparkly_clean")
const findRemoveSync = require('find-remove')
const { see, hourglass } = require("code_clarity")


// deletes 

sparkly_clean.getShape("../sparkly_clean")
sparkly_clean.deleteFolders(onlyGit, 14)

sparkly_clean.moveAllFrom({ from: "", to: "", name: "" })
sparkly_clean.moveReadMe("./README.md", "")

function deleteFolders(days, boolean) {
    hourglass.start("2:56")
    see.problem("want to remove all folders that i haven't touched")
    see.should("i mean you can do that automatically, just like by literally deleting your folders")
    see.is("yahh but i want this to be like... a way to just delete everything all the time so i can naturally stay focused")
    see.story("users will be able to treat their computer like a new one and not be too worried about what they need to focus on. the computer should only store the current project.")
    see.how("get a node_module that gets all folders that haven't been touched for this amount of time")
    see.how("if the time is above the days entered, then delete it")
    see.how("find out how to see if a folder is a git repository")
    see.step("if it  a git repository, and only git is true, then you can delete it. otherwise, don't delete it. ")
    see.problem("in terms of organizing your current node folder")
    see.is("there are so many things to take care, just make everything a node module omg.")
    see.should("organization will always be really important.")
}
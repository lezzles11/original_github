const { getDirectoryStructure, getPathForEach, printDirectory, isGitSync, formatStats, getShape } = require("../index.js")
class TestFS {
    constructor() {

    }
    first() {
        let isThisGit = isGitSync("../sparkly_clean")
        console.log("🚀 ~ file: fs.js ~ line 50 ~ isThisGit", isThisGit)
        F(isThisGit)
        let isThisGit2 = isGitSync("../array_helperz")
        console.log("🚀 ~ file: fs.js ~ line 52 ~ isThisGit2", isThisGit2)
        T(isThisGit2)
    }
    second() {
        let newObj = formatStats('../sparkly_clean')
        see.should("contain formatted time" + JSON.stringify(newObj))
        see.should(newObj["size"] + "should be type integer")
        see.should(newObj["birthtime"] + "should be type date")
        see.should(newObj["atime"] + "should be type date")
    }
    third() {

    }
}
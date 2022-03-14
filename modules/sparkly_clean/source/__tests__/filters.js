describe("filters accurately", () => {
    it("should filter for items accurately", () => {

        let onlyGit = filterForGitTrue()
        console.log("🚀 ~ file: deleteFolders.js ~ line 44 ~ onlyGit", onlyGit)
        let deleteThis = filterForPastDate(onlyGit, 14)
        console.log("🚀 ~ file: deleteFolders.js ~ line 61 ~ deleteThis", deleteThis)
    })
    it("should get files and folders", () => {

        let files = getFiles()
        let folders = getFolders()
            // console.log("🚀 ~ file: deleteFolders.js ~ line 29 ~ folders", folders)
            // console.log("🚀 ~ file: deleteFolders.js ~ line 19 ~ files", files)

    })
})
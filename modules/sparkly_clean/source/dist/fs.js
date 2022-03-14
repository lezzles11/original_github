const fs = require('fs-extra')
const when_you_free = require("when_you_free")
const path = require("path")
const dirTree = require("directory-tree")
const { git, node_modules } = require("define_me")
const ccc = require("clear_concise_creative")


// step.how("figure out which functions are running first")
// see.step("")
/**
 * @Description 
 * getDirectoryStructure("./tree", /\.txt$/)
 * @author zen-out
 * @date 2022-03-04
 * @param {any} filepath
 * @param {any} {extensions:extension}
 * @param {any} (item
 * @param {any} PATH
 * @param {any} stats
 * @returns {any}
 */
function getDirectoryStructure(filepath, extension = {}) {
    let arr = []
    if (extension !== {}) {
        const tree = dirTree(filepath, { extension: extension, exclude: node_modules }, (item, PATH, stats) => {
            let check = new RegExp(git)
            if (!check.test(PATH)) {
                let getStats = formatStats(PATH, stats)
                arr.push(getStats)
            }
        });
        return { tree: tree, files: arr };
    } else {

        const tree = dirTree(filepath, { exclude: node_modules }, (item, PATH, stats) => {
            let check = new RegExp(git)
            if (!check.test(PATH)) {
                let getStats = formatStats(PATH, stats)
                arr.push(getStats)
            }
        });
        return { tree: tree, files: arr };
    }
}

async function getPathForEach(object) {
    let arr = []
    let children = object["children"]
    console.log(children)
    for (let i = 0; i < children.length; i++) {
        let eachPath = children[i]["path"]
        let getStats = formatStats(eachPath)
        arr.push(getStats)
    }
    return arr;
}


/**
 * @example 
 * 1. Gets directory structure
 * 2. Prints out directory into structure/index.json file 
 * @author zen-out
 * @date 2022-03-04
 * @param {any} filePath
 * @param {any} extension
 * @returns {any}
 */
function printDirectory(filePath, extension = {}) {
    let dir = getDirectoryStructure(filePath, extension)
    let getFolder = getPathForEach(dir["tree"]).then((gotFolder) => {
        dir["folder"] = gotFolder

        ccc.writeJSON("./structure/index.json", dir)
    })

}


/**
 * @example 
 * isGitSync(dir)
 * @author zen-out
 * @date 2022-03-04
 * @param {any} path.join(dir
 * @param {any} '.git'
 * @returns {any}
 */
function isGitSync(dir) {
    return fs.existsSync(path.join(dir, '.git'))
}
/**
 * @example 
 * 1. Get Stats, based on the path 
 * 2. Object 
 * {
  git: false,
  atime: 2022-03-04T07:14:08.480Z,
  birthtime: 2022-03-04T05:56:32.358Z,
  size: 352
}
 * @author zen-out
 * @date 2022-03-04
 * @param {any} filePath
 * @returns {object}
 */
function formatStats(filePath, result = undefined) {


    if (!result) {
        result = fs.statSync(filePath)
        console.log("🚀 ~ file: fs.js ~ line 103 ~ formatStats ~ result", result)
    }
    const newObj = {}
    let lastOpened;
    let created;
    let git = isGitSync(filePath)
    if (result) {
        lastOpened = result["atime"]
        newObj["last_opened"] = when_you_free.format(lastOpened, "ll")
        newObj["last_opened_date"] = result["atime"]

        created = result["birthtime"]
        newObj["created"] = when_you_free.format(created, "ll")
        newObj["created_date"] = result["birthtime"]

        newObj["name"] = filePath;
        newObj["git"] = git;
        newObj["size"] = result["size"]
        return newObj;
    } else {
        return {}
    }

}

/**
 * @Description 
 * 1. Prints directory structure 
 * @author zen-out
 * @date 2022-03-04
 * @param {any} "./delete"
 * @returns {any}
 */
async function getShape(filePath) {
    await printDirectory(filePath)
}
module.exports = { getDirectoryStructure, getPathForEach, printDirectory, isGitSync, formatStats, getShape }
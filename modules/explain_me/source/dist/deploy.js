const { see, hourglass } = require("code_clarity")
    /**********************************************
     * Organization of Folders
     * ==================================
     * problem: we need to have a place for everything. 
     * what should be: we should be quite organized in our code
     * what actually is: it's hard, like, really hard, to keep our directories and things organized. 
     * hypothesis: have a better method of keeping things organized, follow the marie kondon methodology in cleaning folders, function, classes, files in your work, spark complete joy here. 
     * 
     * Feature: 
     * 
     * 
     ********************************************/
const ccc = require("clear_concise_creative")

function webpack(obj) {
    let arr = Object.keys(obj)
    let newObj = {}
    for (let i = 0; i < arr.length; i++) {
        let replaceHyphen = arr[i].replaceAll("-", "_")
        newObj[replaceHyphen] = {
            commonjs: replaceHyphen,
            commonjs2: replaceHyphen,
            amd: replaceHyphen,
            root: replaceHyphen,
        }
    }
    return newObj;
}


/**
 * @example
moveToDeploy({
    "automate_me": "^1.0.3",
    "clean-jsdoc-theme": "^3.3.3",
    "clear_concise_creative": "^1.0.17",
    "jsdoc": "^3.6.10",
    "jsdoc-to-markdown": "^7.1.1"
}, "../../../zen-out.github.io/packages/explain_me.html", true)
 * @author zen-out
 * @date 2022-03-10
 * @param {any} deployDependencies
 * @param {any}  zen_out
 * @param {any}  final = false
 * @returns {any}
 */
function moveToDeploy(deployDependencies, frontend = false) {
    ccc.deletePath("../deploy/dist")
    setTimeout(() => {
        see.should("replace dependencies with pass in object" + deployDependencies)
        ccc.replaceJSON("../deploy/package.json", ["dependencies"], deployDependencies)
        see.should("remove dev dependencies")
        ccc.replaceJSON("../deploy/package.json", ["devDependencies"], {})
        see.should("format package.json")
        ccc.replaceJSON("../deploy/package.json", ["scripts"], {
            "play": "node playground.js",
            "deploy": "npm run play && git add . && git commit -m 'updated' && git push && npm version patch && npm publish",
            "update": "ncu --upgrade"
        })
        ccc.mergeJSONObject("./package.json", ["scripts"], {
            "update": "ncu --upgrade"
        })
        see.should("copy everything from dist")
        if (frontend === true) {
            let readDist = ccc.readFile("./dist/index.js")
            ccc.writeFile("../deploy/index.js", readDist)
        } else {
            ccc.copy("./dist/**.js", "../deploy/", true)
        }
        let README = ccc.readFile("./README.md")
        see.should("copy read me file")
        ccc.writeFile("../deploy/README.md", README)
        let PLAYGROUND = ccc.readFile("./playground.js")
        see.should("copy playground.js")
        ccc.writeFile("../deploy/playground.js", PLAYGROUND)
        let INDEX = ccc.readFile("./index.js")
        see.should("copy index.js")
        ccc.writeFile("../deploy/index.js", INDEX)
        see.should("copy docs/global.html file")
        let DOCS = ccc.readFile("./docs/global.html")
        ccc.writeFile("../deploy/docs.html", DOCS)
        see.should("create deploy dependencies")
        let getWebpack = webpack(deployDependencies)
        console.log(getWebpack, "\n1. replace this in externals\n2. type in npm run build and \n3. then run this command again, adding last parameter\n")
    }, 500)
}
module.exports = { moveToDeploy, webpack }
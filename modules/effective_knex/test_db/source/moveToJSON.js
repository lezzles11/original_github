const fs = require("fs-extra")
const effective_knex = require("effective_knex")
const knex = require("knex")({
    client: "postgresql",
    connection: {
        database: "optee3",
        user: "postgres",
        password: "postgres",
    }
})

/**
 * @Description 
 * @author zen-out
 * @date 2022-03-04
 * @param {any} knex
 * @param {any} "hourglass"
 * @returns {any}
 */
async function postJSON(array) {
    let newObj = {}

    // if (Array.isArray(array)) {
    //     for (let i = 0; i < inputs.length; i++) {
    //         await writeJSON("./db.json", inputs[i])
    //     }
    // } else {

    // }
    let hourglass = await effective_knex.getAll(knex, "hourglass")

    let problem = await effective_knex.getAll(knex, "problem")

    let task = await effective_knex.getAll(knex, "task")

    let cheatsheet = await effective_knex.getAll(knex, "cheatsheet")

    let tag_snippet = await effective_knex.getAll(knex, "tag_snippet")
    newObj["hourglass"] = hourglass
    newObj["problem"] = problem
    newObj["task"] = task;
    newObj["cheatsheet"] = cheatsheet
    newObj["tag_snippet"] = tag_snippet
    writeJSON("./db.json", newObj)
        // for (let i = 0; i < inputs.length; i++) {
        //     await appendJSON("./db.json", inputs[i])
        // }

}
postJSON()

function appendJSON(filePath, object) {

}
/**
 * @Description 
 * - Deletes everything from json file 
 * @author zen-out
 * @date 2022-03-04
 * @param {any} filePath
 * @param {any} object
 * @returns {any}
 */
function writeJSON(filePath, object) {
    fs.outputJsonSync(filePath, object)
}

/**
 * @Description 
 * @author zen-out
 * @date 2022-03-04
 * @param {any} filePath
 * @returns {any}
 */
function readJSON(filePath) {
    let readFromFile = fs.readJsonSync(filePath)
    return readFromFile
}


/**
 * @Description 
 * 1. Grabs JSON from json file 
 * 2. Grabs the key {data: [{}], problems: [{}]}
 * @author zen-out
 * @date 2022-03-04
 * @param {any} "1:30PM"
 * @returns {any}
 */
function appendToJSON(filePath, key, object) {
    hourglass.start("1:30 PM")
    let readFromFile = readJSON(filePath)
        // this would be an array 
    let getKey = readFromFile[key]
    getKey = getKey.push(object)
    readFromFile[key] = getKey;
    writeJSON(filePath, readFromFile)
}
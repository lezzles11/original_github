const _ = require("lodash")
const axios = require("axios")
const fs = require("fs-extra")
const make_legit = require("make_legit")
const { userType, hourglassType, problemType, taskType, tag_snippetType, cheatsheetType, followType, deviceType, paymentType } = require("./data.js")
const { inputs } = require("./inputs.js")
const FILEPATH = "./db.json"
const arrz = require("array_helperz")
const { see } = require("code_clarity")
const { array } = require("handlebars-helpers/lib")
const { upset } = require("whats_wrong")

function formatToType(table, object) {
    let formatted;
    if (table === "problem") {
        formatted = make_legit.formatActualObject(object, problemType)

    } else if (table === "user") {
        formatted = make_legit.formatActualObject(object, userType)
        console.log("🚀 ~ file: query.js ~ line 18 ~ formatToType ~ formatted", formatted)
    } else if (table === "hourglass") {

        formatted = make_legit.formatActualObject(object, hourglassType)
    } else if (table === "task") {

        formatted = make_legit.formatActualObject(object, taskType)
    } else if (table === "tag_snippet") {

        formatted = make_legit.formatActualObject(object, tag_snippetType)
    } else if (table === "cheatsheet") {

        formatted = make_legit.formatActualObject(object, cheatsheetType)
    } else if (table === "follow") {

        formatted = make_legit.formatActualObject(object, followType)
    } else if (table === "device") {

        formatted = make_legit.formatActualObject(object, deviceType)
    } else if (table === "payment") {

        formatted = make_legit.formatActualObject(object, paymentType)
    } else {
        return upset("not actual object", "formatToType", "should be actual object or table")
    }
    see.should("format object to appropriate types")
    see.is(formatted)
    return formatted;

}
async function post(table, object) {
    let readFromFile = fs.readJsonSync(FILEPATH)
    let getKey = readFromFile[table]
    let new_id;
    if (getKey.length < 1) {
        new_id = 1;
    } else {
        let lastOne = getKey[getKey.length - 1]
        new_id = lastOne.id + 1;
    }
    object["id"] = new_id
    let getFormatted = format(table, object)
    getKey = getKey.push(getFormatted)
    readFromFile[getKey] = getKey
    fs.outputJsonSync(FILEPATH, readFromFile)
    return getFormatted;
}
async function testPost() {
    let post_hourglass = await post("hourglass", inputs["one"])
    console.log("🚀 ~ file: query.js ~ line 51 ~ testEverything ~ post_hourglass", post_hourglass)
    let post_problem = await post("problem", inputs["nine"])
    console.log("🚀 ~ file: query.js ~ line 53 ~ testEverything ~ post_problem", post_problem)
    let post_cheatsheet = await post("cheatsheet", inputs["ten"])
    console.log("🚀 ~ file: query.js ~ line 55 ~ testEverything ~ post_cheatsheet", post_cheatsheet)
    let post_task = await post("task", inputs["four"])
    console.log("🚀 ~ file: query.js ~ line 57 ~ testEverything ~ post_task", post_task)
    let post_tag_snippet = await post("tag_snippet", inputs["thirteen"])
    console.log("🚀 ~ file: query.js ~ line 58 ~ testEverything ~ post_tag_snippet", post_tag_snippet)
}
// testPost()

function replaceOrAdd(array, id, updatedObject) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]["id"] === id) {
            array[i] = updatedObject;
        } else {
            array.push(updatedObject)
        }
    }
    return array;
}
async function update(table, id, object) {
    let readFromFile = fs.readJsonSync(FILEPATH)
    let getKey = readFromFile[table]
    let original = _.filter(getKey, { id: id })
    let original_obj = make_legit.getObject(original)
    see.should("filter for the object")
    see.is(original_obj)
    let getFormatted = formatToType(table, object)
    let extended = _.extend(original_obj, getFormatted)
    extended["id"] = id;
    getKey = replaceOrAdd(getKey, id, extended)
    console.log("🚀 ~ file: query.js ~ line 102 ~ update ~ getKey", getKey)
    readFromFile[table] = getKey
    fs.outputJsonSync(FILEPATH, readFromFile)
    see.should("appended the update object to the document - we need to replace it ")
    return make_legit.getObject(extended);
}
async function updateTable(table, id, object) {
    let updateTable = await update(table, id, object)
    console.log(updateTable)
    let updateHourglass = await update("hourglass", updateTable["hourglass_id"], object)
    delete updateHourglass["id"]
    let merged = _.extend(updateTable, updateHourglass)
    return merged;
}
async function testUpdate() {
    let problem = updateTable("problem", 1, { difficulty: 3, plan: "give less shits about boys" })

    // let hourglass = updateTable("hourglass", 1, inputs["hourglass"])

    // let cheatsheet = updateTable("cheatsheet", 1, { importance: 2, structure: "think less" })

    // let task = updateTable("task", 1, { difficulty: 1, name: "keep going" })
    // let tag_snippet = updateTable("tag_snippet", 1, { usefulness: 2, tag: "give less shits about boys" })
    // let user = updateTable("user", 4, { gmail_id: "give less shits about boys" })
}
testUpdate()
async function updateOne(table, id, key, value) {

}

async function tableColValCount(table, col, val) {

}
async function getObjectCount(table, object) {

}
async function delById(table, id) {

}
async function getOneById(table, id) {

}

async function getByObject(table, object) {

}
async function getAll() {

}
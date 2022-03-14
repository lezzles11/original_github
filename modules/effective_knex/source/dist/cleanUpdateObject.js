const { extend } = require("lodash")
const make_legit = require("make_legit")
const { callbacks, knex, inputs } = require("./data")
const { getCleanObject } = require("./getCleanObject")
const { getObject } = require("./getObject")
const { see } = require("code_clarity")
    /**
     * @example
     *     // knex("hourglass").select("*").where({ id: 11 }).then((og) => {
    //     cleanUpdateObject(knex, "hourglass", 11, inputs["one"], callbacks).then((result) => {
    //         console.log("\n")
    //         console.log("og", og)
    //         console.log("input", inputs["one"])
    //         console.log("output", result, "\n")
    //     })
     * @description
     * 1. Trims object
     * 2. If it has id, will delete it
     * 3. Gets table (only matches with values that has table)
     * 4. Gets keys from that table
     * 5. Loops through array
     * 6. If there is a callback passed in and the key matches the column, then it will assign that to the new object
     * 7. If the column type doesn't match the column value
     * @author zen-out
     * @date 2022-02-16
     * @param {any} knex
     * @param {any} table
     * @param {any} checkObj
     * @param {any} callbacks={}
     * @returns {any}
     */
async function cleanUpdateObject(knex, table, id, checkObj, callbacks = {}) {
    let update = await getCleanObject(knex, table, checkObj, callbacks);
    update = getObject(update)
    let original = await knex(table).select("*").where({ id: id })
    original = getObject(original)
    let merged = extend(original, update);
    let legit = make_legit.trimObj(merged)
    return legit;
}


async function testCleanUpdateObject() {
    let arr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", ]
    setup(arr).then((result) => {
        see.done("TEST: cleanUpdateObject.js")
    })
}
// testCleanUpdateObject()

async function getCurrentIds() {
    let arr = []
    let getAll = await knex("hourglass").select("id").then((eachOne) => {
        for (let i = 0; i < eachOne.length; i++) {
            console.log(eachOne[i]["id"])
            arr.push(eachOne[i]["id"])
        }
    })
    return arr;
}
async function setup(arr) {
    let getIds = await getCurrentIds()
    console.log("🚀 ~ file: playground.js ~ line 68 ~ setup ~ getIds", getIds)
    for (let i = 0; i < arr.length; i++) {
        let eachSample = inputs[arr[i]]
        let random = getIds[i]
        knex("hourglass").select("*").where({ id: random }).then((og) => {
            cleanUpdateObject(knex, "hourglass", random, eachSample, callbacks).then((result) => {
                see.story(og)
                see.story("problem should ")
                see.problem(eachSample)
                see.is(result)

            })
        })
    }

}



module.exports = { cleanUpdateObject, testCleanUpdateObject, getCurrentIds, setup };
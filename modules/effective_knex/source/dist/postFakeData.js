const { dataExistsAndMatches } = require("./dataExistsAndMatches")
const { getInfo } = require("./getInfo")
const make_fakes = require("make_fakes")

/**
 * @author zen-out
 * @date 2022-03-10
 * @param {any} knex
 * @param {any}  table
 * @returns {any}
 */
async function getTableBody(knex, table) {
    let getTableInfo = await getInfo(knex, table, "object")
    let keys = Object.keys(getTableInfo)
    let sampleObj = {}
    for (let i = 0; i < keys.length; i++) {
        // grab the value 
        let value = keys[i]
        let shouldBeType = getTableInfo[keys[i]];
        if (shouldBeType === "object") {
            sampleObj[keys[i]] = "date";
        } else {
            sampleObj[keys[i]] = shouldBeType
        }

    }
    return sampleObj
}

/**
 * @author zen-out
 * @date 2022-03-10
 * @param {any} knex
 * @param {any}  table
 * @param {any}  number
 * @returns {any}
 */
async function makeData(knex, table, number) {
    let getShape = await getTableBody(knex, table)
    let getFakes = make_fakes.createMany(getShape, number, true)
    return getFakes
}


/**
 * @author zen-out
 * @date 2022-03-10
 * @param {any} knex
 * @param {any}  table
 * @param {any}  number
 * @returns {any}
 */
async function postFakeData(knex, table, number) {
    let arr = []
    let getTake = await makeData(knex, table, number)
    for (let i = 0; i < getTake.length; i++) {
        let getArr = await knex(table).returning("*").insert(getTake[i])
        arr.push(getArr)
    }
    return arr;
}

module.exports = { postFakeData, getTableBody, makeData }
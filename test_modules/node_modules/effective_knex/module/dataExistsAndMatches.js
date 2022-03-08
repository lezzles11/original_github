const { getInfo } = require("./getInfo")
    // const { inputs } = require("./data")
const knex = require("knex")({
    client: "postgresql",
    connection: {
        database: "hbs_auth_temp",
        user: "postgres",
        password: "postgres",
    }
})

/**
 * knexCleanTable.dataExistsAndMatches
 * @description 
 * 1. Deletes id from the object, if we are posting
 * 2. Grabs table columns 
 * 3.Loops through the table column array
 * 4. If the object has that property and the value is not ""
 * 5. Append it to newObj
 * 6. Return newObj
 * @example 
 * this.dataExistsAndMatches(knex, "hourglass", {email: "hello"})
 * // output: 
 * this.dataExistsAndMatches(knex, "hourglass", {{ start: '11/11/2011', edit: '2011/11/11', end: '2021-12-03' }})
 * // output  { start: '11/11/2011', edit: '2011/11/11', end: '2021-12-03' }
 * @author zen-out
 * @date 2022-02-16
 * @param {any} knex
 * @param {any} table
 * @param {any} checkObj
 * @returns {any}
 */
async function dataExistsAndMatches(knex, table, checkObj) {
    let newObj = {}
    let tableColumns = await getInfo(knex, table, "array")
    try {
        for (let i = 0; i < tableColumns.length; i++) {
            let columnName = tableColumns[i]
            if (checkObj.hasOwnProperty(columnName) && checkObj[columnName] !== "") {
                newObj[columnName] = checkObj[columnName]
            }
        }
        return newObj
    } catch (error) {
        console.error(error)
        return {
            error_location: "data exists and matches.js",
            error: error.detail,
        }
    }
}
module.exports = { dataExistsAndMatches }
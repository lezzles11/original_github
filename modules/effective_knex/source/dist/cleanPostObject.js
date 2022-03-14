const knex = require("knex")({
    client: "postgresql",
    connection: {
        database: "hbs_auth_temp",
        user: "postgres",
        password: "postgres",
    }
})
const { see } = require("code_clarity")
const { inputs, callbacks } = require("./data")
const { getCleanObject } = require("./getCleanObject")
    /**
     * @example
     * knexCleanObject.cleanPostObject(knex, "hourglass", object, callbacks )
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
async function cleanPostObject(knex, table, checkObj, callbacks = {}) {
    if (checkObj["id"]) {
        delete checkObj["id"]
    }
    let getCleaned = await getCleanObject(knex, table, checkObj, callbacks)
    return getCleaned;
}

async function testCleanObject() {
    see.story("users will be able to clean the post object, deleting any ids as well as checking against the key and value pairs in the database")
    cleanPostObject(knex, "hourglass", inputs["one"], callbacks).then((result) => {
        see.should(inputs["one"])
        see.is(result)
    })
    cleanPostObject(knex, "hourglass", inputs["two"], callbacks).then((result) => {
        see.should(inputs["two"])
        see.is(result)
    })
    cleanPostObject(knex, "hourglass", inputs["three"], callbacks).then((result) => {
        see.should(inputs["three"])
        see.is(result)
    })
    cleanPostObject(knex, "hourglass", inputs["four"], callbacks).then((result) => {
        see.should(inputs["four"])
        see.is(result)
    })
    cleanPostObject(knex, "hourglass", inputs["five"], callbacks).then((result) => {
        see.should(inputs["five"])
        see.is(result)
    })
    cleanPostObject(knex, "hourglass", inputs["six"], callbacks).then((result) => {
        see.should(inputs["six"])
        see.is(result)
    })
    cleanPostObject(knex, "hourglass", inputs["seven"], callbacks).then((result) => {
        see.should(inputs["seven"])
        see.is(result)
    })
    cleanPostObject(knex, "hourglass", inputs["eight"], callbacks).then((result) => {
        see.should(inputs["eight"])
        see.is(result)
    })

    cleanPostObject(knex, "hourglass", inputs["nine"], callbacks).then((result) => {
        see.should(inputs["nine"])
        see.is(result)
    })

    cleanPostObject(knex, "hourglass", inputs["ten"], callbacks).then((result) => {
        see.should(inputs["ten"])
        see.is(result)
    })

    see.done("test clean post object")
}
// testCleanObject()


module.exports = { cleanPostObject, testCleanObject };
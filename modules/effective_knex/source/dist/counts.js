const { see } = require('code_clarity')
const { upset } = require("whats_wrong")
const knex = require("knex")({
    client: "postgresql",
    connection: {
        database: "optee3",
        user: "postgres",
        password: "postgres",
    }
})



/**
 * @example
 *  let getCount = await tableColValCount(knex, table, col, val)
 * @author zen-out
 * @date 2022-03-10
 * @param {any} knex
 * @param {any}  table
 * @param {any}  col
 * @param {any}  val
 * @returns {number}
 */
function tableColValCount(knex, table, col, val) {
    let newObj = {}
    newObj[col] = val
    try {
        return knex(table).where(newObj).count("id as id").then((result) => {
            let getResult = result[0]
            let count = parseInt(getResult.id)
            return count;
        })
    } catch (error) {
        upset(error, "counts.js", "should be able to get count")
    }
}

async function testCount(knex, table, col, val) {
    let getCount = await tableColValCount(knex, table, col, val)
    if (typeof getCount === "number") {
        see.done("test passes")
    } else {
        see.problem("test does not pass")
    }
}
// testCount(knex, "problem", "user_id", 4)



module.exports = { tableColValCount, testCount };
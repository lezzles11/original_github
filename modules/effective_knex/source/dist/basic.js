const make_legit = require("make_legit")
const { see, hourglass } = require("code_clarity")
const { upset } = require("whats_wrong")
const { cleanPostObject } = require("./cleanPostObject")
const { callbacks } = require("./data.js")
const { getObject } = require("./getObject")
const { getForeignTables } = require("./getInfo")
const { tableColValCount } = require("./counts")
const { cleanUpdateObject } = require("./cleanUpdateObject")
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
 *  let testPost = await post(knex, "hourglass", { start: "2011-02-02" }, callbacks)
 * @author zen-out
 * @date 2022-03-11
 * @param {any} knex
 * @param {any}  table
 * @param {any}  object
 * @param {any}  callbacks
 * @returns {any}
 */
async function post(knex, table, object, callbacks) {
    try {
        let getCleanObject = await cleanPostObject(knex, table, object, callbacks)
        let query = await knex(table).returning("*").insert(getCleanObject)
        let objectify = getObject(query)
        let final = make_legit.trimObj(objectify)
        return final;
    } catch (error) {
        return upset("not able to post" + error, "effective_knex, post one", "should be able to return an object")
    }
}

/**
 * @example 
 *  let testUpdate = await update(knex, "hourglass", testPost.id, { start: "2012-02-02" }, callbacks)
 * @author zen-out
 * @date 2022-03-11
 * @param {any} knex
 * @param {any}  table
 * @param {any}  id
 * @param {any}  object
 * @param {any}  callbacks
 * @returns {any}
 */
async function update(knex, table, id, object, callbacks) {
    try {
        let getUpdateObject = await cleanUpdateObject(knex, table, id, object, callbacks)
        let query = await knex(table).returning("*").where({ id: id }).update(getUpdateObject)
        let objectify = getObject(query)
        let final = make_legit.trimObj(objectify)
        return final;
    } catch (error) {
        return upset("not able to update" + error, "effective_knex, update one", "should be able to return an object")
    }
}

async function testPostAndUpdate() {
    let testPost = await post(knex, "hourglass", { start: "2011-02-02" }, callbacks)
    console.log(testPost)
    let testUpdate = await update(knex, "hourglass", testPost.id, { start: "2012-02-02" }, callbacks)
    see.done("🚀 ~ file: basic.js ~ line 32 ~ testPostAndUpdate ~ testUpdate", testUpdate)
}
// testPostAndUpdate()

/**
* @example
* // getOne(knex, "hourglass", 11).then((result) => {
   //     console.log(result)
   // })
* @author zen-out
* @date 2022-03-10
* @param {any} knex
* @param {any}  table
* @param {any}  id
* @returns {any}
*/
async function getOne(knex, table, id) {
    try {
        let object = await knex(table).select("*").where({ id: id })
        return getObject(object);
    } catch (error) {
        upset("not able to get one" + error, "effective_knex, get one", "should be able to return an object")
    }
}

/**
 * @example
 *  // getAll(knex, "hourglass").then((result) => {
    //     console.log(result)
    // })
 * @author zen-out
 * @date 2022-03-10
 * @param {any} knex
 * @param {any}  table
 * @returns {array}
 */
async function getAll(knex, table) {
    try {
        let all = await knex(table).select("*")
        return all
    } catch (error) {
        upset("not able to get one" + error, "effective_knex, get one", "should be able to return an object")
    }
}

async function delById(knex, table, id) {
    try {
        let deleted = await knex(table).where({ id: id }).del()
        return deleted;
    } catch (error) {
        upset("not able to get one" + error, "effective_knex, get one", "should be able to return an object")
    }
}
async function delByKeyValue(knex, table, key, value) {
    let newObj = {}
    newObj[key] = value;
    try {
        let deleted = await knex(table).where(newObj).del()
        return deleted;
    } catch (error) {
        see.problem(error)
        upset("not able to get one" + error, "effective_knex, get one", "should be able to return an object")
    }
}

async function deleteFromOtherTables(knex, table, id, arrOfOtherTables) {
    let foreign_id = `${table}_id`
    for (let i = 0; i < arrOfOtherTables.length; i++) {
        await delByKeyValue(knex, arrOfOtherTables[i], foreign_id, id)
        let trueOrFalse = await tableColValCount(knex, arrOfOtherTables[i], foreign_id, id)
        if (trueOrFalse !== 0) {
            see.problem("not able to delete")
        }
    }
}
/**
 * @description 
 * - If there is a fourth parameter
 * - Get foreign id by table_id
 * - Delete from other tables 
 * - 
 * @example
 * del(knex, table, id, arrOfOtherTables = undefined)
 * let result2 = await del(knex, "hourglass", 54, ["problem"]).then((result) => {
        let check = typeof result === "object"
        return check;
    })
 * @author zen-out
 * @date 2022-03-10
 * @param {any} knex
 * @param {any}  table
 * @param {any}  id
 * @param {any}  arrOfOtherTables = undefined
 * @returns {any}
 */
async function del(knex, table, id, arrOfOtherTables = undefined) {
    if (arrOfOtherTables) {
        await deleteFromOtherTables(knex, table, id, arrOfOtherTables)
        await delById(knex, table, id)
        return id;
    } else {
        await delById(knex, table, id)
        return id;
    }
}
async function testBasic() {
    let result1 = await getOne(knex, "hourglass", 11).then((result) => {
        let check = typeof result === "object"
        return check;
    })
    let result = await getAll(knex, "hourglass").then((result) => {
        let check = typeof result === "object"
        return check;
    })
    let getResults = result1 && result
    see.done("TEST: get one and get all", getResults)
}
// testBasic()
async function testDelete() {
    let getHourglassId;
    let postZero = {
        "importance": 1
    }
    let postOne = {
        "problem": "problem",
        "hourglass_id": 12
    }
    return knex("hourglass").returning("id").insert(postZero).then((id) => {
        console.log(id)
        getHourglassId = id[0].id
        let problem = {
            "problem": "problem",
            "hourglass_id": getHourglassId
        }
        return problem
    }).then((problem) => {
        let newObj = { hourglass_id: problem.hourglass_id }
        return knex("problem").returning("id").insert(postOne).then((id) => {
            newObj["problem_id"] = id[0].id
            return newObj;
        })

    }).then((result) => {
        let hg = result.hourglass_id
        let problem = result.problem_id
        return del(knex, "hourglass", hg, ["problem"])
    }).then((shouldGetId) => {
        console.log("🚀 ~ file: basic.js ~ line 156 ~ returnknex ~ shouldGetId", shouldGetId)
        if (shouldGetId === getHourglassId) {
            see.done("TEST: delete passes")
            return true;
        } else {
            see.problem("delete doesnt work")
            return false;
        }
    })
}
// testDelete()

module.exports = { post, update, testPostAndUpdate, getOne, getAll, delById, delByKeyValue, deleteFromOtherTables, del, testBasic, testDelete };
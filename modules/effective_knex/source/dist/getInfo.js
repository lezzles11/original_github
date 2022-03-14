const { remove } = require("lodash")
const knex = require("knex")({
    client: "postgresql",
    connection: {
        database: "hbs_auth_temp",
        user: "postgres",
        password: "postgres",
    }
})

/**
 * knexCleanTable.getTableInfo(knex, table, type="object")
 * @description 
 * 1. Has a dictionary - 
 * 2. Gets knex(table).columnInfo()
 * 3. if property isn't created 
 * 4. Push it into array called tableColumns
 * 5. If third parameter is object, will return key and value pairs of column: type. Else, if third parameter is array, will return an array of the key values 
 * @example
 * this.getTableInfo(knex, "hourglass", "object")
 * // returns {emails: string... }
 * @author zen-out
 * @date 2022-02-16
 * @param {any} knex
 * @param {any} table
 * @param {any} type="object"
 * @returns {any}
 */
async function getInfo(knex, table, type = "object") {
    let dictionary = {
        timestamp: "date",
        boolean: "boolean",
        character: "string",
        integer: "number"
    }
    let tableInfo = {}
    let tableColumns = []
    let columns = await knex(table).columnInfo()
    for (const property in columns) {
        if (property !== "created") {
            tableColumns.push(property)
            let name = property
            let first = columns[property]["type"].split(" ")
            tableInfo[name] = dictionary[first[0]]
        }
    }
    if (type === "object") {
        return tableInfo;
    } else if (type === "array") {
        return tableColumns;
    } else {
        console.log("what other types are there")
    }
}
//refer to: http://troels.arvin.dk/db/rdbms/#cli-list_of_tables
function getAllTables(knex) {
    let dialect = knex.client.config.client;
    if (dialect === "postgresql") {

        let tables = knex.select("tablename")
            .from("pg_catalog.pg_tables")
            .where('schemaname', "public")
            .then((rst) => rst.map(it => it.tablename)).then((names) => {
                return names;
            })

        return tables;
    } else {
        upset(`${dialect} not supported`, "getTables", "should be able to get a list of tables");
    }
}

/**
 * @example
 * getTables(knex)
 * getTables(knex).then((tables) => {
    console.log(tables)
})
 * @author zen-out
 * @date 2022-03-10
 * @param {any} knex
 * @returns {array}
 */
async function getTables(knex) {
    let tables = await getAllTables(knex)
    return remove(tables, function(n) {
        return !n.includes("knex")
    })
}


/**
 * @example
 * getForeignTables(knex, "hourglass").then((result) => {
    console.log(result)
})
// will return ["user"]
 * @author zen-out
 * @date 2022-03-10
 * @param {any} knex
 * @param {any}  table
 * @returns {any}
 */
async function getForeignTables(knex, table) {
    let columns = await knex(table).columnInfo()
    let keys = Object.keys(columns)
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] === "id") {
            keys.splice(keys[i], 1)
        }
    }
    let getRemoved = remove(keys, function(n) {
        return n.includes("id")
    })
    let tables = []
    for (let i = 0; i < getRemoved.length; i++) {
        let split = getRemoved[i].split("_")
        tables.push(split[0])
    }
    return tables;
}

// getForeignTables(knex, "hourglass").then((result) => {
//     console.log(result)
// })



module.exports = { getInfo, getAllTables, getTables, getForeignTables };
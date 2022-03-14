const ek = require("effective_knex")

// the purpose of this function is to check the values and keys in the table, and then subsequently clean the object to match the data types 
ek.cleanPostObject(knex, table, object)
    // will return object to post 

// the purpose of this function is to check the values and keys in this object and then clean the object. it will also merged with preexisting values
ek.cleanUpdateObject(knex, table, id, object, callback)
    // will return updated object 

ek.massPost(knex, table, array)



ek.getInfo(knex, "hourglass", "array")
ek.getInfo(knex, "hourglass", "object")


ek.getTable(knex, table)
    // will also delete all foreign associations 
ek.tableColValCount(knex, table, col, value) // returns number
ek.post(knex, table, callbacks = {}) // returns object
ek.update(knex, table, callbacks = {}) // returns object
ek.getOne(knex, table, callbacks = {}) // returns object
ek.getAll(knex, table, callbacks = {}) // returns 

// arrOfOtherTables should go from big to small (table with most references to least references)
// returns true if deleted, false if not 
ek.del(knex, table, id, arrOfOtherTables)
ek.getSampleData(knex, table, count)
ek.getSampleDirtyData(knex, table, coun)
ek.resetDatabase(knex) // will
ek.copyDatabase(knex, knexTarget)
ek.tableColValCount(knex, table, col, val)

ek.getJoinedTables(knex, tableOne, tableTwo, joinedOn)
ek.postJoin(knex, firstTable, secondTable)
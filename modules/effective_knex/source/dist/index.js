const { handleCallbacks, convert, testConvert, getCleanObject, testGetCleanObject } = require("./getCleanObject")
const { getInfo, getAllTables, getTables, getForeignTables } = require("./getInfo")
const { dataExistsAndMatches } = require("./dataExistsAndMatches")
const { cleanPostObject, testCleanObject } = require("./cleanPostObject")
const { postFakeData, getTableBody, makeData } = require("./postFakeData")
const { cleanUpdateObject, testCleanUpdateObject, getCurrentIds, setup } = require("./cleanUpdateObject")
const { getObject } = require("./getObject")
const { tableColValCount, testCount } = require("./counts.js")
const { post, update, testPostAndUpdate, getOne, getAll, delById, delByKeyValue, deleteFromOtherTables, del, testBasic, testDelete } = require("./basic")


module.exports = {
    getAllTables,
    testGetCleanObject,
    testPostAndUpdate,
    delById,
    delByKeyValue,
    deleteFromOtherTables,
    testBasic,
    testDelete,
    tableColValCount,
    testCount,
    testCleanUpdateObject,
    convert,
    testConvert,
    getCurrentIds,
    setup,
    testCleanObject,
    post,
    update,
    getForeignTables,
    getObject,
    getOne,
    getTables,
    getAll,
    del,
    cleanUpdateObject,
    cleanPostObject,
    dataExistsAndMatches,
    getCleanObject,
    getInfo,
    postFakeData,
    getTableBody,
    makeData,
    handleCallbacks
}
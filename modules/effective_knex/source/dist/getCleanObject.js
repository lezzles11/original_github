const { see, hourglass } = require("code_clarity")
const make_legit = require("make_legit")
const { getInfo } = require("./getInfo")
const { dataExistsAndMatches } = require("./dataExistsAndMatches")
const { callbacks, knex, data } = require("./data")
const { upset } = require("whats_wrong")
const when_you_free = require("when_you_free")
    /**
     * @example
     * effective_knex.handleCallbacks({"importance": function(value) {if column is importance, then return 3}}, "importance", 3)
     * // returns "high"
     * @author zen-out
     * @date 2022-02-16
     * @param {any} callbacks
     * @param {any} columnName
     * @param {any} value
     * @returns {any}
     */
function handleCallbacks(callbacks, columnName, columnType, value) {
    see.should("pass the value into the function and the value back")
    let keys = Object.keys(callbacks)
    let getValue = undefined;
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] === columnName) {
            let getFunction = callbacks[keys[i]]
            getValue = getFunction(value)
        }
    }
    return getValue;
}

function convert(newObj, columnName, currValue, currTypeShould) {
    let getType = make_legit.getType(currValue)

    if (getType === "date") {
        let item = when_you_free.formatDateToPost(currValue)
        newObj[columnName] = item
        return newObj;
    }
    if (getType === currTypeShould) {
        newObj[columnName] = currValue;
        return newObj;
    }
    if (currTypeShould === "number") {
        let getNumber = make_legit.format(currValue, "number")
        newObj[columnName] = getNumber
        return newObj;
    } else if (currTypeShould === "boolean") {
        let getBoolean = make_legit.format(currValue, "boolean")
        newObj[columnName] = getBoolean
    } else if (currTypeShould === "string") {
        let getString = make_legit.format(currValue, "string")
        newObj[columnName] = getString
    } else {
        console.log("error, what did you put here?", currTypeShould, currValue)
    }
    return newObj;

}

function testConvert() {
    let newObj = {}
    let getThis = convert(newObj, "string", "test", "string")

    let getThis2 = convert(newObj, "boolean", "true", "boolean")
    console.log("🚀 ~ file: getCleanObject.js ~ line 60 ~ testConvert ~ getThis2", getThis2)

    let getThis3 = convert(newObj, "object", new Date(), "object")
    console.log("🚀 ~ file: getCleanObject.js ~ line 63 ~ testConvert ~ getThis3", getThis3)

    let getThis6 = convert(getThis3, "date", "2020-02-02", "date")
    console.log("🚀 ~ file: getCleanObject.js ~ line 63 ~ testConvert ~ getThis3", getThis6)
    let getThis4 = convert(newObj, "number", "3", "number")
    console.log("🚀 ~ file: getCleanObject.js ~ line 65 ~ testConvert ~ getThis4", getThis4)
    console.log("🚀 ~ file: getCleanObject.js ~ line 54 ~ testConvert ~ getThis", getThis)
}
// testConvert()
/**
 * knexCleanObject.cleanPostObject(knex, )
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
async function getCleanObject(knex, table, checkObj, callbacks = {}) {
    checkObj = make_legit.trimObj(checkObj)
    console.log(checkObj)
    let newObj = {}
    let onlyDataInTable = await dataExistsAndMatches(knex, table, checkObj)
    let existingKeys = Object.keys(onlyDataInTable)
    let tableInfo = await getInfo(knex, table, "object")
    try {
        for (let i = 0; i < existingKeys.length; i++) {
            let columnName = existingKeys[i]
            let currTypeIs = make_legit.getType(onlyDataInTable[columnName])

            let currTypeShould = tableInfo[columnName]
            let currValue = onlyDataInTable[columnName]
            see.should("curr type should match with what it should be")
            see.is(currTypeIs)
            see.is(currTypeShould)
            if (currTypeShould !== currTypeIs) {
                see.problem("the two types dont match")
                let testIfInCallback;
                see.step("if there are not callbacks")
                if (callbacks !== {}) {
                    testIfInCallback = handleCallbacks(callbacks, columnName, currTypeShould, currValue)
                    if (typeof testIfInCallback === currTypeShould) {
                        newObj[columnName] = testIfInCallback
                    }
                } else {
                    newObj = convert(newObj, columnName, currValue, currTypeShould)
                }
            } else {
                if (currTypeIs === "date") {
                    let item = when_you_free.formatDateToPost(currValue)
                    newObj[columnName] = item;
                } else {
                    newObj[columnName] = currValue
                }
            }
        }
        newObj = make_legit.trimObj(newObj)
        return newObj;
    } catch (error) {
        return upset("something wrong" + checkObj, "getCleanObject.js", "should be an object")
    }
}

async function testGetCleanObject() {
    let getObject = await getCleanObject(knex, "hourglass", { start: "Dec 11 2012", difficulty: 2 }, callbacks)
    let getObject2 = await getCleanObject(knex, "hourglass", {
        name: "hi",
        seconds: 3,
        start: new Date(),
        edit: new Date(),
        end: "2022-12-12"
    })
    let getObject3 = await getCleanObject(knex, "hourglass", {
        user_id: "4",
        seconds: "0",
        name: "hello",
        public: "public",
        status: 'to do',
        importance: 2,
        difficulty: "hard",
        // start: new Date(),
        // edit: "2020-12-22",
        // end: "2020-12-22"
    }, callbacks)
    see.should("be an object")
    see.is(getObject)
    see.is(getObject2)
    see.is(getObject3)

}

// testGetCleanObject()




module.exports = { handleCallbacks, convert, testConvert, getCleanObject, testGetCleanObject };
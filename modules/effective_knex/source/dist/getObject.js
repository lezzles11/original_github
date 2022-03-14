const { upset } = require("whats_wrong")
    /**
     * @description
     * 1. If it's an array, will return the first item in array 
     * @example
     * let isObjectOrArray = effective_knex.getObject([{id: 2}])
     * @author zen-out
     * @date 2022-03-10
     * @param {any} objectOrArray
     * @returns {any}
     */
function getObject(objectOrArray) {
    if (Array.isArray(objectOrArray) && objectOrArray.length > 0) {
        let getFirst = objectOrArray[0]
        if (typeof getFirst === "object") {
            return getFirst;
        } else {
            return upset("array is empty", "effective_knex get object", "should not be empty")
        }
    } else {
        if (typeof objectOrArray === "object") {
            return objectOrArray
        }
    }
}
module.exports = { getObject }
import { sortBy, groupBy, filter } from "lodash"
import { matchSorter } from "match-sorter"
import { formatDateToPost } from "when_you_free"

/**
 * trimArr(arr)
 * @description trims array values
 * @author zen-out
 * @author zen-out
 * @date 2021-12-19
 * @param {array} arr
 * @returns {array}
 */
export function trimArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (const [key, value] of Object.entries(arr[i])) {
            //   console.debug(`${key}: ${value}`);
            if (typeof value === "string") {
                let trimmed = value.trim()
                arr[i][key] = trimmed;
            }
        }
    }
    return arr;
}
/**
* @example
* const { arrz } = require("./index.js")
let sampleInput = [{
status: "to do",
problem: "we actually solve our problems best by looking at how other people solved them - segment each feature",
whatshouldbe: "it should be easier to develop as a whole application but that's actually quite difficult - so segment each component and make sure you test utilizing good practices",
whatactuallyis: "there's no like, database of previous problems and how people solved them, right? also, what is your current process",
hypothesis: "like, what if i wanted to start my own business, how would i do that?",
plan: "test better, when you develop, i think it would also be great actually to have an effectiveness scale - what one task really helped you?"
}, { status: "doing", problem: "we need to focus on one thing at a time", whatshouldbe: "we should be able to do that easily", whatactuallyis: "its quite difficult", hypothesis: "develop modules", plan: "make things very clear and simple" }]
let output = arrz.countByCondition(sampleInput, "status", "to do")
console.log("🚀 ~ file: playground.js ~ line 11 ~ output", output)
* @author zen-out
* @date 2022-02-17
* @param {array} array
* @param {string} key
* @param {string} value
* @returns {number} of objects that meet that condition
*/
export function countByCondition(array, key, value) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            count++;
        }
    }
    return count;
}
/**
* @example
const { arrz } = require("./index.js")
let sampleInput = [{
status: "to do",
problem: "we actually solve our problems best by looking at how other people solved them - segment each feature",
whatshouldbe: "it should be easier to develop as a whole application but that's actually quite difficult - so segment each component and make sure you test utilizing good practices",
whatactuallyis: "there's no like, database of previous problems and how people solved them, right? also, what is your current process",
hypothesis: "like, what if i wanted to start my own business, how would i do that?",
plan: "test better, when you develop, i think it would also be great actually to have an effectiveness scale - what one task really helped you?"
}, { status: "doing", problem: "we need to focus on one thing at a time", whatshouldbe: "we should be able to do that easily", whatactuallyis: "its quite difficult", hypothesis: "develop modules", plan: "make things very clear and simple" }]
let output = arrz.filterValues(sampleInput, "segment", ["problem"])
console.log("🚀 ~ file: playground.js ~ line 11 ~ output", output)
* @author zen-out
* @date 2022-02-17
* @param {array} array
* @param {string} keyword
* @param {array} arrOfKeys
* @returns {array} of objects
*/
export function filterValues(array, keyword, arrOfKeys) {
    let result = matchSorter(array, keyword, { keys: arrOfKeys })
    return trimArr(result);
}
/**
* @example
* const { arrz } = require("./index.js")
let sampleInput = [{
created: new Date(2020, 12, 1),
status: "to do",
problem: "we actually solve our problems best by looking at how other people solved them - segment each feature",
}, { created: new Date(2019, 12, 1), status: "doing", problem: "we need to focus on one thing at a time" }]
let output = arrz.sortAsc(sampleInput, "created", "date")
console.log("🚀 ~ file: playground.js ~ line 11 ~ output", output)
* @author zen-out
* @date 2022-02-17
* @param {array} array
* @param {string} property
* @param {string} type (date) - optional
* @returns {array} of objects
*/
export function sortAsc(array, property, type) {
    if (type === "date") {
        for (let i = 0; i < array.length; i++) {
            array[i][property] = formatDateToPost(array[i][property])
        }
    }
    let result = sortBy(array, [property])
    return trimArr(result);
}
/**
* @example
* const { arrz } = require("./index.js")
* let sampleInput = [{
seconds: 500,
created: new Date(2020, 12, 1),
status: "to do",
problem: "we actually solve our problems best by looking at how other people solved them - segment each feature",
}, { seconds: 1000, created: new Date(2019, 12, 1), status: "doing", problem: "we need to focus on one thing at a time" }]
let output = arrz.sortDesc(sampleInput, "seconds", "integer")
console.log("🚀 ~ file: playground.js ~ line 11 ~ output", output)
* @author zen-out
* @date 2022-02-17
* @param {array} array
* @param {string} property
* @returns {array} of objects
*/
export function sortDesc(array, property, type) {
    if (type === "date") {
        for (let i = 0; i < array.length; i++) {
            array[i][property] = formatDateToPost(array[i][property])
        }
    }
    let result = sortBy(array, [property])
    return trimArr(result.reverse())
}
/**
* @example
const { arrz } = require("./index.js")
let sampleInput = [{
seconds: 500,
created: new Date(2020, 12, 1),
status: "to do",
problem: "we actually solve our problems best by looking at how other people solved them - segment each feature",
}, { seconds: 1000, created: new Date(2019, 12, 1), status: "doing", problem: "we need to focus on one thing at a time" }]
let output = arrz.contains(sampleInput, "seconds", 500)
* @author zen-out
* @date 2022-02-17
* @param {array} array
* @param {string} property
* @param {string} value
* @returns {array} of objects
*/
export function contains(array, property, value) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (array[i][property] === value) {
            result.push(array[i])
        }
    }
    return trimArr(result)
}
/**
* @example
const { arrz } = require("./index.js")
let sampleInput = [{
seconds: 500,
created: new Date(2020, 12, 1),
status: "to do",
problem: "we actually solve our problems best by looking at how other people solved them - segment each feature",
}, { seconds: 1000, created: new Date(2019, 12, 1), status: "doing", problem: "we need to focus on one thing at a time" }]
let output = arrz.doesNotContain(sampleInput, "seconds", 500)
* @author zen-out
* @date 2022-02-17
* @param {array} array
* @param {string} property
* @param {string} value
* @returns {array} of objects
*/
export function doesNotContain(array, property, value) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (array[i][property] !== value) {
            result.push(array[i])
        }
    }
    return trimArr(result)
}
/**
* @example
const { arrz } = require("./index.js")
let sampleInput = [{
seconds: 500,
created: new Date(2020, 12, 1),
status: "to do",
problem: "we actually solve our problems best by looking at how other people solved them - segment each feature",
}, { seconds: 1000, created: new Date(2019, 12, 1), status: "doing", problem: "we need to focus on one thing at a time" }]
let output = arrz.filterAndSort(sampleInput, { status: "to do" }, "seconds", "number", true, 4)
console.log("🚀 ~ file: playground.js ~ line 9 ~ output", output)
* @date 2022-02-17
* @param {array} data
* @param {object} object
* @param {string} sortValue
* @param {string} sortType
* @param {boolean} asc=true
* @param {number} limit
* @returns {array}
*/
export function filterAndSort(data, object, sortValue, sortType, asc = true, limit = undefined) {
    let result = filter(data, object);
    let sorted = sortBy(result, [sortValue])
    if (asc === false) {
        sorted = sortDesc(sorted, sortValue, sortType)
    } else {
        sorted = sortAsc(sorted, sortValue, sortType)
    }
    if (limit) {
        let result = sorted.slice(0, limit)
        return trimArr(result);
    } else {
        return trimArr(sorted)
    }
}
/**
* * @example
const { arrz } = require("./index.js")
let sampleInput = [{
seconds: 500,
created: new Date(2020, 12, 1),
status: "to do",
problem: "we actually solve our problems best by looking at how other people solved them - segment each feature",
}, { seconds: 1000, created: new Date(2019, 12, 1), status: "doing", problem: "we need to focus on one thing at a time" }]
let output = arrz.group(sampleInput, "status")
console.log("🚀 ~ file: playground.js ~ line 9 ~ output", output)
* @author zen-out
* @date 2022-03-06
* @param {array} data
* @param {string}  groupByCondition
* @returns {array}
*/
export function group(data, groupByCondition) {
    let grouped = groupBy(data, groupByCondition)
    return trimArr(grouped)
}
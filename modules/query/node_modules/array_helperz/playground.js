const { map, merge, find, filter, keyBy, values } = require("lodash")
const _ = require("lodash")
const arrz = require("./index.js")
let arrOne = [{
        title: 'I want to be free. Free to live,  and to find my own way,  to love,  or to be alone,  but at least it is my choice,  and I am so tired of not having choices,  so scared of the years rushing past beneath my feet. I do not want to die as I’ve lived,  which is no life at all.',
        status: 'to do',
        id: 1
    },
    {
        title: 'Because we loved each other too much and found each other too interesting. And I love that about humanity,  and in fact it’s the very reason I root for us to survive—because we are so stupid about each other.',
        status: 'doing',
        id: 2
    },
    {
        title: 'But a life without art,  without wonder,  without beautiful things—she would go mad. She has gone mad. What she needs are stories. Stories are a way to preserve one’s self. To be remembered. And to forget.',
        status: 'doing',
        id: 3
    }
]

let arrTwo = [
    { name: 'Whatever', status: 'doing', problem_id: 2, id: 1 },
    { name: 'is', status: 'doing', problem_id: 2, id: 2 },
    { name: 'people', status: 'to do', problem_id: 2, id: 3 }
]

// let output = arrz.group(arrTwo, "status")
// console.log("🚀 ~ file: playground.js ~ line 25 ~ output", output)
// let problem2 = arrz.filterAndSort(arrOne, "to do", ["status", "title"], "id", true, 2)
// console.log("🚀 ~ file: playground.js ~ line 27 ~ problem2", problem2)
// let counts = arrz.countByCondition(arrOne, "status", "to do")
// console.log("🚀 ~ file: playground.js ~ line 29 ~ counts", counts)
// let getSorted = arrz.filterAndSort(arrOne, "choices", ["title"], "id")
// console.log("🚀 ~ file: playground.js ~ line 31 ~ getSorted", getSorted)
// let found = arrz.filterValues(arrOne, "choices", ["title"])
// console.log("🚀 ~ file: playground.js ~ line 33 ~ found", found)
// let sorted = arrz.sortAsc(arrOne, "title")
// console.log("🚀 ~ file: playground.js ~ line 35 ~ sorted", sorted)
// let sortedDesc = arrz.sortDesc(arrOne, "title")
// console.log("🚀 ~ file: playground.js ~ line 37 ~ sortedDesc", sortedDesc)
// let doesNotContain2 = arrz.doesNotContain(arrOne, "choices")
// console.log("🚀 ~ file: playground.js ~ line 39 ~ doesNotContain2", doesNotContain2)

// console.log("🚀 ~ file: playground.js ~ line 48 ~ merged", merged)
// let arr2Child = { data: arrTwo, key: "problem_id" }
// let result = arrz.makeChildOfAnother(arr1Child, arr2Child)
// let arr1GetOne = { data: arrOne, key: "id", value: 2 }
// console.log("🚀 ~ file: playground.js ~ line 52 ~ result", result)
// let arr2GetOne = { data: arrTwo, key: "problem_id", value: 2 }
// let result2 = arrz.getOneMakeChildOfAnother(arr1GetOne, arr2GetOne)

// function getToDoFunction(object) {
//     if (object.status === "to do") {
//         return object;
//     }
// }
// console.log("🚀 ~ file: playground.js ~ line 54 ~ result2", result2)
// let func = arrz.filterWithFuncObjectOrString(arrTwo, getToDoFunction)
// console.log("🚀 ~ file: playground.js ~ line 57 ~ func", func)
// let obj = arrz.filterWithFuncObjectOrString(arrTwo, { status: "to do" })
// console.log("🚀 ~ file: playground.js ~ line 59 ~ obj", obj)
// let keyValue = arrz.filterWithFuncObjectOrString(arrTwo, "status", "to do")
// console.log("🚀 ~ file: playground.js ~ line 61 ~ keyValue", keyValue)
// let key = arrz.filterWithFuncObjectOrString(arrTwo, "status")

// console.log("🚀 ~ file: playground.js ~ line 62 ~ key", key)

// let object = {
//     status: "to do",
//     whatsup: "hello"
// }
// let values = Object.values(object)
// let stringed = values.join(" ")
// console.log(stringed)
// console.log("🚀 ~ file: playground.js ~ line 33 ~ found", found)

function mergeByKeys(obj, obj2) {
    var merged = merge(keyBy(obj.data, obj.key), keyBy(obj2.data, obj2.key));
    var getValues = values(merged);
    return getValues;
}



let arr1Child2 = { data: arrOne, key: "id" }
let arr22 = {
    data: arrTwo,
    key: "id",
}
let merged2 = arrz.mergeByKeys(arr1Child2, arr22)
console.log(merged2)

let expected_keys = ["hello"]
let actual_keys = ["hello", "whatsup"]
let merged = arrz.intersection(expected_keys, actual_keys)

console.log(merged)
```js
const { arrz } = require("array_helperz")

let sampleInput = [{
    seconds: 500,
    created: new Date(2020, 12, 1),
    status: "to do",
    problem: "we actually solve our problems best by looking at how other people solved them - segment each feature",
}, { seconds: 1000, created: new Date(2019, 12, 1), status: "doing", problem: "we need to focus on one thing at a time" }]


let contains = arrz.contains(sampleInput, "seconds", 500)
console.log("🚀 ~ file: index.js ~ line 12 ~ contains", contains)
let doesNotContain = arrz.doesNotContain(sampleInput, "seconds", 500)
console.log("🚀 ~ file: index.js ~ line 14 ~ doesNotContain", doesNotContain)
let count = arrz.countByCondition(sampleInput, "status", "to do")
console.log("🚀 ~ file: index.js ~ line 16 ~ count", count)
let filter = arrz.filterValues(sampleInput, "segment", ["problem"])
console.log("🚀 ~ file: index.js ~ line 18 ~ filter", filter)
let sortDesc = arrz.sortDesc(sampleInput, "seconds", "integer")
console.log("🚀 ~ file: index.js ~ line 20 ~ sortDesc", sortDesc)
let sortAsc = arrz.sortAsc(sampleInput, "seconds", "integer")
console.log("🚀 ~ file: index.js ~ line 22 ~ sortAsc", sortAsc)
let grouped = arrz.group(sampleInput, "status")
console.log("🚀 ~ file: index.js ~ line 23 ~ grouped", grouped)
```
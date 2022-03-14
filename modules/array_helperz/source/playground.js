const arrz = require("./index.js")
let sampleInput = [{
    seconds: 500,
    created: new Date(2020, 12, 1),
    status: "to do",
    problem: "we actually solve our problems best by looking at how other people solved them - segment each feature",
}, { seconds: 1000, created: new Date(2019, 12, 1), status: "doing", problem: "we need to focus on one thing at a time" }]

let sampleInput2 = [{
    seconds: 500,
    created: new Date(2020, 12, 1),
    status: "to do",
    problem: "we actually solve our problems best by looking at how other people solved them - segment each feature",
}, { seconds: 1000, created: new Date(2019, 12, 1), status: "doing", problem: "we need to focus on one thing at a time" }]


let output = arrz.group(sampleInput, "status")
console.log("🚀 ~ file: playground.js ~ line 9 ~ output", output)

// // function ARRINCLUDE
// let problem2 = arrz.filterAndSort(input, "high", ["importance", "usefulness"], "created", true, 2)
//     // console.log(problem2)

// function getFilterAndSortObject() {
//     let filtered = arrz.filterAndSortObject(problem, "created", true, 10)
//     console.log(filtered)
//     return filtered;
// }
// getFilterAndSortObject()
//     // let parentAnArray = arrz.parentAnArray(problem, task, "problem", "task")
//     // console.log(parentAnArray)



// let counts = arrz.countByCondition(problem, "status", "done")
// HAS(counts, 1)
// console.log(counts)

// let grouped = arrz.groupAndSort(problem, "status", {
// "status": ["to do", "doing", "done"],
// "difficulty": ["easy", "medium", "difficult"]
// })
// console.log(grouped)


// let shouldBeTodo = grouped[0]["status"]
// HAS(shouldBeTodo, "to do")
// console.log("🚀 ~ file: playground.js ~ line 168 ~ shouldBeTodo", shouldBeTodo)
// let shouldBeDone = grouped[grouped.length - 1]["status"]
// HAS(shouldBeDone, "done")

// let getSorted = arrz.filterAndSort(problem, "mustafa", ["problem"], "created")
// returns problems that are sorted and
// console.log(getSorted.length)
// let getSorted1 = getSorted[0].seconds
// console.log("🚀 ~ file: playground.js ~ line 145 ~ getSorted1", getSorted1)

// let getSorted2 = getSorted[1].seconds
// console.log("🚀 ~ file: playground.js ~ line 148 ~ getSorted2", getSorted2)

// let getSorted3 = getSorted[2].seconds
// console.log("🚀 ~ file: playground.js ~ line 151 ~ getSorted3", getSorted3)


// let found = arrz.filterValues(problem, "mustafa", ["problem"])
// console.log(found)
// HAS(found, importance: 'high', difficulty: 'easy', email: 'ryanyiu@bu.edu')

// let sorted = arrz.sortAsc(problem, "problem")
// console.log(sorted[0]["problem"])
// console.log(sorted[1]["problem"])
// console.log(sorted[2]["problem"])


// let sortedDesc = arrz.sortDesc(problem, "problem")
// console.log(sortedDesc[0]["problem"])
// console.log(sortedDesc[1]["problem"])
// console.log(sortedDesc[2]["problem"])

// let doesNotContain2 = arrz.doesNotContain(problem, "whatsup")
// let length = doesNotContain2.length
// console.log("🚀 ~ file: playground.js ~ line 152 ~ length", length)
// IS(length, 3)


// trim arr
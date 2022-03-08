const t = require("node_basetest")
const { arrz } = require("../dist/index.js")

function testArrays(arrOne, arrTwo) {
    let stringedOne = JSON.stringify(arrOne)
    let stringedTwo = JSON.stringify(arrTwo)
    t.HAS(stringedOne, stringedTwo)
}
describe("the best array util ever", () => {
    it("should count condition correctly", () => {
        let param = [{ id: 1, problem: "hello", status: "to do", whatshouldbe: "it should be more fun" }, { id: 2, status: "doing", problem: "hello", whatshouldbe: "it should be more fun" }]

        let output = arrz.countByCondition(param, "status", "to do")
        let expectOutputIncludes = 1
        testArrays(output, expectOutputIncludes)
    })
    it("should filter values correctly", () => {
        let input = [{ id: 1, problem: "hello", status: "to do", whatshouldbe: "it should be more fun" }, { id: 2, status: "doing", problem: "hello", whatshouldbe: "it should be more fun" }]
        let output = arrz.filterValues(input, "hello", ["problem"])
        let expectOutputIncludes = { id: 2, status: "doing", problem: "hello", whatshouldbe: "it should be more fun" }
        testArrays(output, expectOutputIncludes)
    })
    it("should sort seconds, date, strings, integers and booleans", () => {
        let input = [{ id: 1, problem: "hello", status: "to do", whatshouldbe: "it should be more fun" }, { id: 2, status: "doing", problem: "asdf", whatshouldbe: "it should be more fun" }]
        let output = arrz.sortAsc(input, "problem", "string")
        let firstIndex = output[0]["problem"]
        let secondIndex = output[output.length - 1]["problem"]
        console.log(firstIndex, secondIndex, "FIRST AND LAST")
        t.ISLESS(firstIndex, secondIndex, "string")
    })
    it("should sort integers", () => {
        let input = [{ id: 1, problem: "hello", seconds: 50, status: "to do", whatshouldbe: "it should be more fun" }, { id: 2, seconds: 20, status: "doing", problem: "hello", whatshouldbe: "it should be more fun" }]
        let output = arrz.sortAsc(input, "seconds", "number")
        let firstIndex = output[0]["number"]
        let secondIndex = output[output.length - 1]["number"]
        t.ISLESS(firstIndex, secondIndex, "number")
    })
    it("should sort dates", () => {
        let input = [{ id: 1, problem: "hello", start: "Dec 11, 1995", seconds: 50, status: "to do", whatshouldbe: "it should be more fun" }, { id: 2, seconds: 20, status: "doing", start: "Dec 12, 1994", problem: "hello", whatshouldbe: "it should be more fun" }]
        let output = arrz.sortAsc(input, "start", "date")
        let firstIndex = output[0]["start"]
        let secondIndex = output[output.length - 1]["start"]
        t.ISLESS(firstIndex, secondIndex, "date")
    })
    it("should sort ascending and descending correctly", () => {
        let input = [{ id: 1, problem: "hello", start: "Dec 11, 1995", seconds: 50, status: "to do", whatshouldbe: "it should be more fun" }, { id: 2, seconds: 20, status: "doing", start: "Dec 12, 1994", problem: "hello", whatshouldbe: "hii" }]
        let output = arrz.sortDesc(input, "problem", "string")
        let firstIndex = output[0]["problem"]
        let secondIndex = output[output.length - 1]["problem"]
        t.ISLESS(secondIndex, firstIndex, "string")
        let output1 = arrz.sortDesc(input, "seconds", "number")
        let firstIndex1 = output1[0]["problem"]
        let secondIndex1 = output1[output1.length - 1]["number"]
        t.ISLESS(secondIndex1, firstIndex1, "number")
        let output2 = arrz.sortDesc(input, "start", "date")
        let firstIndex2 = output2[0]["start"]
        let secondIndex2 = output2[output2.length - 1]["start"]
        t.ISLESS(secondIndex2, firstIndex2, "date")
    })
    it("should return an array that contain a property", () => {
        let input = [{ id: 1, problem: "hello", status: "to do", whatshouldbe: "it should be more fun" }, { id: 2, status: "doing", problem: "hello", whatshouldbe: "hii" }]
        let output = arrz.contains(input, "status", "to do")
        let expectOutputIncludes = { status: "to do" }
        testArrays(output, expectOutputIncludes)
    })
    it("should return results that do contain a specific key and value pair", () => {
        let input = [{ id: 1, problem: "hello", status: "to do", whatshouldbe: "it should be more fun" }, { newProperty: "whatsup", id: 2, status: "doing", problem: "hello", whatshouldbe: "it should be more fun" }]
        let output = arrz.doesNotContain(input, "status", "to do")
        let expectOutputIncludes = { status: "doing" }
        testArrays(output, expectOutputIncludes)
    })
    it("should filter and sort object", () => {
        let input = [{ id: 1, problem: "hello", status: "to do", whatshouldbe: "it should be more fun" }, { id: 2, problem: "hello", status: "to do", whatshouldbe: "it should be more fun" }, { id: 3, status: "doing", problem: "hello", whatshouldbe: "it should be more fun" }]
        let output = arrz.filterAndSort(input, { status: "to do" }, "id", "number")
        let expectOutputIncludes = 3
        testArrays(output, expectOutputIncludes)
    })

    it("should group and sort data, based on dictionary", () => {
        let input = [{ id: 1, problem: "hello", status: "to do", whatshouldbe: "it should be more fun" }, { id: 2, status: "doing", problem: "hello", whatshouldbe: "it should be more fun" }]
        let output = arrz.group(input, "status")
        let expectOutputIncludes = { "status": "to do" }
        testArrays(output, expectOutputIncludes)
    })

})
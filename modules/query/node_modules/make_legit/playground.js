const make_legit = require("./index.js")
let shouldBeString = make_legit.format(3, "string")
console.log("🚀 ~ file: playground.js ~ line 3 ~ shouldBeString", shouldBeString)
console.log(typeof shouldBeString)
let shouldBeString2 = make_legit.format({ "start": 2, "edit": 3, "end": 4 }, "string")
console.log("🚀 ~ file: playground.js ~ line 5 ~ shouldBeString2", shouldBeString2)
let shouldBeString3 = make_legit.format([2, 3, 4], "string")
console.log("🚀 ~ file: playground.js ~ line 7 ~ shouldBeString3", shouldBeString3)
let shouldTrim = make_legit.format("  trim white space ", "string")
console.log("🚀 ~ file: playground.js ~ line 9 ~ shouldTrim", shouldTrim)
let shouldTrim2 = make_legit.format({ "a": "fffff      f   " }, "object")
console.log("🚀 ~ file: playground.js ~ line 8 ~ shouldTrim2", shouldTrim2)
let boolean = make_legit.format(false, "boolean")
console.log("🚀 ~ file: playground.js ~ line 10 ~ boolean", boolean)
let getBoolean = make_legit.format("true", "boolean")
console.log("🚀 ~ file: playground.js ~ line 15 ~ getBoolean", getBoolean)
let num = make_legit.format("3", "number")
console.log("🚀 ~ file: playground.js ~ line 13 ~ num", num)
let toPost = make_legit.format(new Date(), "date")
console.log("🚀 ~ file: playground.js ~ line 13 ~ toPost", toPost)
let trimObj = make_legit.trimObj({ test: "asdfasdf asdf ", whatsup: undefined, no: null })
console.log("🚀 ~ file: playground.js ~ line 13 ~ trimObj", trimObj)
let trimArr = make_legit.trimArr([{ test: "asdfasdf asdf ", whatsup: undefined, no: null }, { test: "asdfasdf asdf ", whatsup: undefined, no: null }])

let dates = make_legit.format("2020-02-02", "date")
console.log(dates)

let getType = make_legit.getType([])
let getObject = make_legit.getType({ test: "whatsup" })
console.log("🚀 ~ file: playground.js ~ line 20 ~ getObject", getObject)
let getDate = make_legit.getType("Dec 11 2022")

let getDate2 = make_legit.getType(new Date())
console.log("🚀 ~ file: playground.js ~ line 19 ~ getDate2", getDate2)
console.log(getDate)

console.log(make_legit.format("Dec 11, 1994", "date"))
let first = {
    "public": true,
    "seconds": 92,
    "status": "to do",
    "importance": 2,
    "usefulness": 1,
    "difficulty": 1,
    "user_id": 4,
    "id": 1
}

let hourglass = {
    id: "number",
    user_id: "number",
    email: "string",
    seconds: "number",
    public: "boolean",
    status: "string",
    usefulness: "number",
    importance: "number",
    difficulty: "number",
    start: "date",
    edit: "date",
    end: "date",
    created: "date"
}
let result = make_legit.formatActualObject(first, hourglass)
console.log(result)

let obj = make_legit.getObject([{ id: 2, }])
console.log(obj)

let original = { id: 1, whatsup: "nothing" }
let update = { id: 2, whatsup: "im pissed" }
let merged = make_legit.mergeWithOriginal(original, update)
console.log(merged)
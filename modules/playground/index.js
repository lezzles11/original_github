const make_fakes = require("make_fakes")
    // import { finalFormat } from "make_legit"
const bulletproof = require("bulletproof_me")
    // paste dist/index.js to deploy
    // importing functions : import {functionName} from "name"
const when_you_free = require("when_you_free")
const { see, hourglass } = require("code_clarity")
const make_legit = require("make_legit")
const automate_me = require("automate_me")
const define_me = require("define_me")
const ccc = require("clear_concise_creative")
const ef = require("effective_knex")
let array_helperz = require("array_helperz")

function testArrayHelperz() {
    let sampleInput = [{
        seconds: 500,
        created: new Date(2020, 12, 1),
        status: "to do",
        problem: "we actually solve our problems best by looking at how other people solved them - segment each feature",
    }, { seconds: 1000, created: new Date(2019, 12, 1), status: "doing", problem: "we need to focus on one thing at a time" }]
    let contains = array_helperz.contains(sampleInput, "seconds", 500)
    console.log("🚀 ~ file: index.js ~ line 12 ~ contains", contains)
    let doesNotContain = array_helperz.doesNotContain(sampleInput, "seconds", 500)
    console.log("🚀 ~ file: index.js ~ line 14 ~ doesNotContain", doesNotContain)
    let count = array_helperz.countByCondition(sampleInput, "status", "to do")
    console.log("🚀 ~ file: index.js ~ line 16 ~ count", count)
    let filter = array_helperz.filterValues(sampleInput, "segment", ["problem"])
    console.log("🚀 ~ file: index.js ~ line 18 ~ filter", filter)
    let sortDesc = array_helperz.sortDesc(sampleInput, "seconds", "integer")
    console.log("🚀 ~ file: index.js ~ line 20 ~ sortDesc", sortDesc)
    let sortAsc = array_helperz.sortAsc(sampleInput, "seconds", "integer")
    console.log("🚀 ~ file: index.js ~ line 22 ~ sortAsc", sortAsc)
    let grouped = array_helperz.group(sampleInput, "status")
    console.log("🚀 ~ file: index.js ~ line 23 ~ grouped", grouped)
}

testArrayHelperz()

function testMakeLegit() {
    console.log("hi")
    let shouldBeString = make_legit.format(3, "string")
    let shouldBeString2 = make_legit.format({ "start": 2, "edit": 3, "end": 4 }, "string")
    let shouldBeString3 = make_legit.format([2, 3, 4], "string")
    let shouldTrim = make_legit.format("  trim white space ", "string")
    let shouldTrim2 = make_legit.format({ "a": "fffff      f   " }, "object")
    let boolean = make_legit.format(false, "boolean")
    let getBoolean = make_legit.format("true", "boolean")
    let num = make_legit.format("3", "number")
    let toPost = make_legit.format(new Date(), "date")
    let trimObj = make_legit.trimObj({ test: "asdfasdf asdf ", whatsup: undefined, no: null })
    let trimArr = make_legit.trimArr([{ test: "asdfasdf asdf ", whatsup: undefined, no: null }, { test: "asdfasdf asdf ", whatsup: undefined, no: null }])
    let getType = make_legit.getType([])

    hourglass.start("11:16 test and format all things")
    see.should("be formatting to string")
    see.is(shouldBeString)
    see.is(shouldBeString2)
    see.is(shouldBeString3)
    see.is(shouldTrim)


    hourglass.start("11:16 test and format all things")
    see.should("be formatting to string")
    see.is(shouldBeString)
    see.is(shouldBeString2)
    see.is(shouldBeString3)
    see.is(shouldTrim)
    see.should("format")
    see.is(shouldTrim2)
    see.is(trimArr)
    see.is(trimObj)
    see.should("booleans")
    see.is(boolean)
    see.is(getBoolean)
    see.should("dates")
    see.is(toPost)
    see.should("numbers")
    see.is(num)
    see.should("identify types")
    see.is(getType)
}
// testMakeLegit()

function testAutomateMe() {
    automate_me.createFile("hello")

    // runs your shell script
    automate_me.runFile("hello")

    // just runs command
    automate_me.runCommand("echo 'hello'")
}
// testAutomateMe()

// let checkIfExist = ccc.checkPath("./focus")
// console.log("🚀 ~ file: index.js ~ line 50 ~ checkIfExist", checkIfExist)
// let copyFiles = ccc.copy("./focus/**.js", "./dist")
// let copyDir = ccc.copy("./focus/**/*", "dist", true)
// let copyWithDir = ccc.copy("./dist/**.js", "../deploy/", true)
// let readJSON = ccc.readJSON("./package.json")
// console.log("🚀 ~ file: index.js ~ line 54 ~ readJSON", readJSON)
// let writeJSON = ccc.writeJSON("./package2.json", readJSON)
// // this method will create an array 
// let appendToJSON = ccc.appendToJSON("./package.json", "keywords", "test")
// let replaceJSON = ccc.replaceJSON("./package.json", ["scripts"], {
//     "play": "node playground.js",
//     "deploy": "npm run play && git add . && git commit -m 'updated' && git push && npm version patch && npm publish"
// })

// let appendFile = ccc.appendFile("./README", "hello")
// let mergeJSONObject = ccc.mergeJSONObject("./package.json", ["scripts"], {
//     "docs": "node docs.js",
// })
// let getJSONObject = ccc.getJSONObject("./package.json", ["scripts"])
// let addToNestedJSON = ccc.addToNestedJSON("./sample.json", ["opts", "theme_opts", "menu"], {
//     "title": "visual instructions",
//     "link": "hi",
//     "target": "_blank"
// })
// let getDirNames = ccc.getDirNames("./focus")
// let deletePath = ccc.deletePath("./hello.sh")

function testCCC() {
    see.should("checks if something exists")
    see.is(checkIfExist)
    see.should("should copy files")
    let getPath = ccc.checkPath("./dist")
    see.is(getPath)
    see.should("copy files")
    let checkPath = ccc.checkPath("./dist/March11-2022")
    see.is(checkPath)
    see.should("get path names")
    see.should("read files, write files, append to files")
    see.should("get merge json objects")
    see.is("check package.json file - > scripts should include play: ")
    see.is("check merged ")
    see.should("retrieve json object")
    see.is(getJSONObject)
    see.should("provide info")
    see.is(getDirNames)
}
// testCCC()

function testCodeClarity() {
    see.problem("before deciding to do something, identify what the problem is, and see if there is a quicker way to resolve or fix something, to understand other people, ultimately, is to understand ourselves.")
    see.should("be clear as to what our goals are")
    see.is("we can think more about what softwares are available as a service, and then aim to create tools that will help us easily maintain that service")
    see.step("spend more time coding, but also track your start and end times, learn what is most effective and efficient for you.")
    see.how("finish all these modules, deploy regularly")
    see.motherlode("motherlode, solved it by...")
    hourglass.start("hello")
    hourglass.end("end")

}
// testCodeClarity()

function testDefineMe() {
    let getThis = define_me.containsThis(".git", define_me.git);
    console.log("🚀 ~ file: playground.js ~ line 4 ~ getThis", getThis)
    let checkDate = define_me.containsThis("March 20 2012", define_me.stringDate)
    console.log("🚀 ~ file: playground.js ~ line 6 ~ checkDate", checkDate)
    let output3 = define_me.containsThis("22:44", define_me.hhmm)
    console.log("🚀 ~ file: index.js ~ line 122 ~ testDefineMe ~ output3", output3)
    let output10 = define_me.containsThis("01/12/2022", define_me.dashDDMMYYYY)
    let output11 = define_me.containsThis("2022/02/02", define_me.dashYYYYMMDD)
    let output6 = define_me.containsThis("14-1-2022", define_me.hyphenDDMMYYYY)
    let output7 = define_me.containsThis("13-01-2018", define_me.hyphenDDMMYYYY)
    let output5 = define_me.containsThis("2019-2-10", define_me.hyphenYYYYMMDD)
    console.log("🚀 ~ file: index.js ~ line 138 ~ testDefineMe ~ output5", output5)
    let output4 = define_me.containsThis("2020-02-22", define_me.hyphenYYYYMMDD)
    let output12 = define_me.containsThis("Mar 2 2019", define_me.stringDate)
    let output14 = define_me.containsThis("Mar 2 2022", define_me.stringDate)
    let trueThis = define_me.containsThis("digital", define_me.hhmmss)
    console.log("🚀 ~ file: index.js ~ line 143 ~ testDefineMe ~ trueThis", trueThis)
}

// testDefineMe()

let callbacks = {
    /**
     * formatDifficulty(difficulty)
     * @author zen-out
     * @date 2021-12-19
     * @param {string}{int} 1 easy 2 medium 3 hard
     * @returns {string}{int} if empty, will return 3
     */
    "difficulty": function(difficulty) {
        if (difficulty === 1) {
            return "easy"
        } else if (difficulty === 2) {
            return "medium"
        } else if (difficulty === 3) {
            return "hard"
        } else if (difficulty === "hard") {
            return 3
        } else if (difficulty === "medium") {
            return 2
        } else if (difficulty === "easy") {
            return 1
        } else {
            return undefined
        }
    },
    /**
     * formatImportance("high")
     * formatImportance(1)
     * @description will return 3 if cannot read parameter
     * @author zen-out
     * @date 2021-12-19
     * @param {string}{int} 1 high 2 medium 3 low 
     * @returns {string}{int}
     */
    "importance": function(importance) {
        if (importance === 1) {
            return "high"
        } else if (importance === 2) {
            return "medium"
        } else if (importance === 3) {
            return "low"
        } else if (importance === 0) {
            return "low"
        } else if (importance === "high") {
            return 1
        } else if (importance === "medium") {
            return 2
        } else if (importance === "low") {
            return 3
        } else {
            return undefined
        }
    },
    /**
     * formatPublic(string/boolean)
     * @description it essentially formats the inputs and outputs 
     * @author zen-out
     * @date 2021-12-19
     * @param {string}{boolean} private public true or false
     * @returns {string}{boolean}
     */
    "public": function(publicValue) {
        if (publicValue === "public") {
            return true;
        } else if (publicValue === "private") {
            return false;
        } else if (publicValue === false) {
            return "private"
        } else if (publicValue === true) {
            return "public"
        } else if (publicValue === "false") {
            return false;
        } else if (publicValue === "true") { return true; } else {
            return undefined
        }
    },

    "status": function(status) {
        if (status === "to do") {
            return 1;
        } else if (status === "doing") {
            return 2;
        } else if (status === "done") {
            return 3;
        } else if (status === 1) {
            return "to do"
        } else if (status === 2) {
            return "doing"
        } else if (status === 3) {
            return "done"
        } else {
            return undefined
        }
    },
    "usefulness": function(usefulness) {
        if (usefulness === 1) {
            return "high"
        } else if (usefulness === 2) {
            return "medium"
        } else if (usefulness === 3) {
            return "low"
        } else if (usefulness === 0) {
            return "low"
        } else if (usefulness === "high") {
            return 1
        } else if (usefulness === "medium") {
            return 2
        } else if (usefulness === "low") {
            return 3
        } else {
            return undefined
        }
    },
}


async function testEffectiveKnex() {
    const knex = require("knex")({
        client: "postgresql",
        connection: {
            database: "optee3",
            user: "postgres",
            password: "postgres",
        }
    })
    see.should("do all basic queries")
        // let getPost = await ef.post(knex, "hourglass", { start: "2011-02-02" }, callbacks)
        // let getUpdate = await ef.update(knex, "hourglass", getPost.id, { start: "2012-02-02" }, callbacks)
    let getOne = await ef.getOne(knex, "user", 1)
        // let getAll = await ef.getAll(knex, "user")
        // let deleteOne = await ef.del(knex, "hourglass", 12)
        // let getCount = await ef.tableColValCount(knex, "hourglass", "status", "to do")
        // let getTables = await ef.getTables(knex)
        // let getTableInfo = await ef.getInfo(knex, "hourglass", "object")

    see.should("handle return object for post and update requests")
    see.is(getPost)
        // see.is(getUpdate)
        // see.should("get one and get all")
        // see.is(getOne)
        // see.is(getAll)
        // see.should("delete cascade")
        // see.is(deleteOne)
        // see.should("get count based on table key value")
        // see.is(getCount)
        // see.should("render database information")
        // see.is(getTables, getTableInfo)


}
// testEffectiveKnex()

async function testExplainMe() {
    // adds acompile and build commands

    explain_me.makeGlobal()
        // generates html based on folders in src folder
    explain_me.html("module_name", "optional_video_link")

    explain_me.readme("moduel_name", "optional_video_link")
        // if this is true, will move dist/index.js to deploy/index.js 
        // else, will just copy entire dist folder 
    explain_me.moveToDeploy({}, true)
}

function testBulletproof() {
    let trueStarts = bulletproof.STARTSWITH("hi", "h")
    let falseStarts = bulletproof.STARTSWITH("asdfasdf", "A")
    let trueEnds = bulletproof.ENDSWITH('HELLO', "O")
    let falseEnds = bulletproof.ENDSWITH("hello", "z")
    let trueHas = bulletproof.HAS("asdf", "sd")
    let falseHas = bulletproof.HAS("asdf", "z")
    let isLessDates = bulletproof.ISLESS("1994-12-11", "1995-12-12", "date")
    let shouldBeTrue = bulletproof.COUNT("hello hellodi", "div", 2)
    let test2 = bulletproof.ISLESS(1, 2, "number")
    let atLeastTrue = bulletproof.ATLEAST("div div", "div", 1)
    let getFalse = bulletproof.DOESNOTHAVE("{{>", ">")
}
// testBulletproof()

function testWhenYouFree() {
    let dateHTML = {
        one: "2020-03-01",
        two: "2021-03-01",
        two: "2022-03-01"
    }
    let dateObject = {
        one: new Date(2010, 1, 1),
        two: new Date(2011, 1, 1),
        three: new Date(2020, 1, 1)
    }
    let isTrue3 = when_you_free.difference(dateHTML["one"], dateHTML["two"], "minutes")
    let isBeforeTrue = when_you_free.isBefore(dateHTML["one"], dateHTML["two"])
    let isTrue4 = when_you_free.isBetween(dateHTML["one"], dateHTML["two"], dateHTML["three"])
    console.log("🚀 ~ file: playground.js ~ line 34 ~ testWhenYouFree ~ isTrue4", isTrue4)
    let getDays2 = when_you_free.dateIsWithinLimit("March 1 2022", 14)
    console.log("🚀 ~ file: index.js ~ line 347 ~ testWhenYouFree ~ getDays2", getDays2)
    let getDuration = when_you_free.getDuration("2022-03-14T02:20:15.986Z", "2022-03-14T02:07:15.986Z", "minutes")
    console.log("🚀 ~ file: playground.js ~ line 38 ~ testWhenYouFree ~ getDuration", getDuration)
    let getDuration2 = when_you_free.getDuration("2022-03-01T19:06:31.047Z", "2022-03-01T20:04:32.047Z", "seconds")
    console.log("🚀 ~ file: index.js ~ line 350 ~ testWhenYouFree ~ getDuration2", getDuration2)
    let secondReadable = when_you_free.getReadableFormat("Dec 11, 2012", "from") // in two months
    console.log("🚀 ~ file: playground.js ~ line 42 ~ testWhenYouFree ~ secondReadable", secondReadable)
    let firstReadable = when_you_free.getReadableFormat("Dec 11, 2012", "to") // two month sago 
    console.log("🚀 ~ file: playground.js ~ line 44 ~ testWhenYouFree ~ firstReadable", firstReadable)
    let formatted1 = when_you_free.format(dateHTML["one"], "ll")
    console.log("🚀 ~ file: playground.js ~ line 46 ~ testWhenYouFree ~ formatted1", formatted1)
    let formatted2 = when_you_free.format(dateHTML["one"], "LL")
    console.log("🚀 ~ file: playground.js ~ line 47 ~ testWhenYouFree ~ formatted2", formatted2)
    console.log("🚀 ~ file: index.js ~ line 355 ~ testWhenYouFree ~ formatted2", formatted2)
    let properDate = when_you_free.formatDateToPost(dateHTML["one"])
    console.log("🚀 ~ file: index.js ~ line 356 ~ testWhenYouFree ~ properDate", properDate)
}

testWhenYouFree()

function testMakeFakes() {

    let hourglass = {
        public: "boolean",
        seconds: "number",
        start: "past_date",
        description: "paragraph",
        edit: "date",
        end: "future_date",
        status: ["to do", "doing", "done"],
        title: "string",
        email: "email",
        created: "number_date"
    }


    // let getManyDirty = makeFakes.createManyDirty(hourglass, 2, true)
    // console.log("🚀 ~ file: playground.js ~ line 18 ~ getManyDirty", getManyDirty)
    let getOne = make_fakes.createOne(hourglass)
    console.log("🚀 ~ file: playground.js ~ line 16 ~ getOne", getOne)
        // let getOneDirty = makeFakes.createOneDirty(hourglass)
        // console.log("🚀 ~ file: playground.js ~ line 18 ~ getOneDirty", getOneDirty)

    // let getMany = makeFakes.createMany(hourglass, 2, true)
    // console.log(getMany)
    // let date = makeFakes.createOne({ hello: "date" })
    // console.log("🚀 ~ file: playground.js ~ line 21 ~ date", date)
    // let date2 = makeFakes.createOneDirty({ hello: "date" })
    // console.log(date2)
}

function handlebarsToJS() {

}
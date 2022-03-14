const { testBasic, testDelete } = require("../src/basic")
const { testCleanObject } = require("../src/cleanPostObject")
testBasic()
testCleanObject()
testDelete()

// const { see, hourglass } = require("code_clarity")
// const { Test } = require("mocha")
// const effective_knex = require("../index.js")
// class FinalTest {
//     constructor() {}
//     one() {
//         see.story("users will be able to clean the post object, deleting any ids as well as checking against the key and value pairs in the database")
//         effective_knex.cleanPostObject(knex, "hourglass", inputs["one"], callbacks).then((result) => {
//             see.should("input", inputs["one"])
//             see.is(result)
//         })
//         effective_knex.cleanPostObject(knex, "hourglass", inputs["two"], callbacks).then((result) => {
//             see.should("input", inputs["two"])
//             see.is(result)
//         })
//         effective_knex.cleanPostObject(knex, "hourglass", inputs["three"], callbacks).then((result) => {
//             see.should("input", inputs["three"])
//             see.is(result)
//         })
//         effective_knex.cleanPostObject(knex, "hourglass", inputs["four"], callbacks).then((result) => {
//             see.should("input", inputs["four"])
//             see.is(result)
//         })
//         effective_knex.cleanPostObject(knex, "hourglass", inputs["five"], callbacks).then((result) => {
//             see.should("input", inputs["five"])
//             see.is(result)
//         })
//         effective_knex.cleanPostObject(knex, "hourglass", inputs["six"], callbacks).then((result) => {
//             see.should("input", inputs["six"])
//             see.is(result)
//         })
//         effective_knex.cleanPostObject(knex, "hourglass", inputs["seven"], callbacks).then((result) => {
//             see.should("input", inputs["seven"])
//             see.is(result)
//         })
//         effective_knex.cleanPostObject(knex, "hourglass", inputs["eight"], callbacks).then((result) => {
//             see.should("input", inputs["eight"])
//             see.is(result)
//         })

//         effective_knex.cleanPostObject(knex, "hourglass", inputs["nine"], callbacks).then((result) => {
//             see.should("input", inputs["nine"])
//             see.is(result)
//         })

//         effective_knex.cleanPostObject(knex, "hourglass", inputs["ten"], callbacks).then((result) => {
//             see.should("input", inputs["ten"])
//             see.is(result)
//         })


//         effective_knex.cleanPostObject(knex, "hourglass", inputs["eleven"], callbacks).then((result) => {
//             see.should("input", inputs["eleven"])
//             see.is(result)
//         })

//         effective_knex.cleanPostObject(knex, "hourglass", inputs["twelve"], callbacks).then((result) => {
//             see.should("input", inputs["twelve"])
//             see.is(result)
//         })


//         effective_knex.cleanPostObject(knex, "task", inputs["one"], callbacks).then((result) => {
//             see.should("input", inputs["one"])
//             see.is(result)
//         })

//         effective_knex.cleanPostObject(knex, "task", inputs["two"], callbacks).then((result) => {
//             see.should("input", inputs["two"])
//             see.is(result)
//         })

//         effective_knex.cleanPostObject(knex, "task", inputs["three"], callbacks).then((result) => {
//             see.should("input", inputs["three"])
//             see.is(result)
//         })
//         effective_knex.cleanPostObject(knex, "task", inputs["four"], callbacks).then((result) => {
//             see.should("input", inputs["four"])
//             see.is(result)
//         })
//         effective_knex.cleanPostObject(knex, "task", inputs["five"], callbacks).then((result) => {
//             see.should("input", inputs["five"])
//             see.is(result)
//         })

//         effective_knex.cleanPostObject(knex, "task", inputs["six"], callbacks).then((result) => {
//             see.should("input", inputs["six"])
//             see.is(result)
//         })


//         effective_knex.cleanPostObject(knex, "task", inputs["seven"], callbacks).then((result) => {
//             see.should("input", inputs["seven"])
//             see.is(result)
//         })

//         effective_knex.cleanPostObject(knex, "task", inputs["eight"], callbacks).then((result) => {
//             see.should("input", inputs["eight"])
//             see.is(result)
//         })

//         effective_knex.cleanPostObject(knex, "task", inputs["nine"], callbacks).then((result) => {
//             see.should("input", inputs["nine"])
//             see.is(result)
//         })

//         effective_knex.cleanPostObject(knex, "task", inputs["ten"], callbacks).then((result) => {
//             see.should("input", inputs["ten"])
//             see.is(result)
//         })


//         effective_knex.cleanPostObject(knex, "task", inputs["eleven"], callbacks).then((result) => {
//             see.should("input", inputs["eleven"])
//             see.is(result)
//         })

//         effective_knex.cleanPostObject(knex, "task", inputs["twelve"], callbacks).then((result) => {
//             see.should("input", inputs["twelve"])
//             see.is(result)
//         })

//     }
//     two() {
//         see.story("users will be able to clean update object to match the existing values and keys in the knex database")
//         effective_knex.cleanUpdateObject(knex, "hourglass", 1, inputs["two"], callbacks).then((result) => {

//             see.should("input" + inputs["two"])
//             see.is("output" + result)
//         })

//         effective_knex.cleanUpdateObject(knex, "hourglass", 144, inputs["three"], callbacks).then((result) => {
//             see.should("input" + inputs["three"])
//             see.is("output" + result)
//         })
//         effective_knex.cleanUpdateObject(knex, "hourglass", 52, inputs["four"], callbacks).then((result) => {
//             see.should("input" + inputs["four"])
//             see.is("output" + result)
//         })
//         effective_knex.cleanUpdateObject(knex, "hourglass", 3, inputs["five"], callbacks).then((result) => {
//             see.should("input" + inputs["five"])
//             see.is("output" + result)
//         })

//         effective_knex.cleanUpdateObject(knex, "hourglass", 4, inputs["six"], callbacks).then((result) => {
//             see.should("input" + inputs["six"])
//             see.is("output" + result)
//         })


//         effective_knex.cleanUpdateObject(knex, "hourglass", 106, inputs["seven"], callbacks).then((result) => {
//             see.should("input" + inputs["seven"])
//             see.is("output" + result)
//         })

//         effective_knex.cleanUpdateObject(knex, "hourglass", 6, inputs["eight"], callbacks).then((result) => {
//             see.should("input" + inputs["eight"])
//             see.is("output" + result)
//         })

//         effective_knex.cleanUpdateObject(knex, "hourglass", 7, inputs["nine"], callbacks).then((result) => {
//             see.should("input" + inputs["nine"])
//             see.is("output" + result)
//         })

//         effective_knex.cleanUpdateObject(knex, "hourglass", 8, inputs["ten"], callbacks).then((result) => {
//             see.should("input" + inputs["ten"])
//             see.is("output" + result)
//         })


//         effective_knex.cleanUpdateObject(knex, "hourglass", 9, inputs["eleven"], callbacks).then((result) => {
//             see.should("input" + inputs["eleven"])
//             see.is("output" + result)
//         })

//         effective_knex.cleanUpdateObject(knex, "hourglass", 10, inputs["twelve"], callbacks).then((result) => {
//             see.should("input" + inputs["twelve"])
//             see.is("output" + result)
//         })
//     }
//     three() {
//         see.story("users will be able to get the data if it matches")
//         effective_knex.dataExistsAndMatches(knex, "hourglass", inputs["one"]).then((result) => {
//             see.is("output" + result)
//         })

//         effective_knex.dataExistsAndMatches(knex, "hourglass", inputs["two"]).then((result) => {
//             see.is("output" + result)
//         })

//         effective_knex.dataExistsAndMatches(knex, "hourglass", inputs["three"]).then((result) => {
//             see.is("output" + result)
//         })
//         effective_knex.dataExistsAndMatches(knex, "hourglass", inputs["four"]).then((result) => {
//             see.is("output" + result)
//         })
//         effective_knex.dataExistsAndMatches(knex, "hourglass", inputs["five"]).then((result) => {
//             see.is("output" + result)
//         })

//         effective_knex.dataExistsAndMatches(knex, "hourglass", inputs["six"]).then((result) => {
//             see.is("output" + result)
//         })


//         effective_knex.dataExistsAndMatches(knex, "hourglass", inputs["seven"]).then((result) => {
//             see.is("output" + result)
//         })

//         effective_knex.dataExistsAndMatches(knex, "hourglass", inputs["eight"]).then((result) => {
//             see.is("output" + result)
//         })

//         effective_knex.dataExistsAndMatches(knex, "hourglass", inputs["nine"]).then((result) => {
//             see.is("output" + result)
//         })

//         effective_knex.dataExistsAndMatches(knex, "hourglass", inputs["ten"]).then((result) => {
//             see.is("output" + result)
//         })


//         effective_knex.dataExistsAndMatches(knex, "hourglass", inputs["eleven"]).then((result) => {
//             see.is("output" + result)
//         })

//         effective_knex.dataExistsAndMatches(knex, "hourglass", inputs["twelve"]).then((result) => {
//             see.is("output" + result)
//         })
//     }
//     four() {
//         see.story("users will be able to get array and object data")
//         effective_knex.getInfo(knex, "user", "array").then((result) => {
//             see.is("output" + result)
//         })

//         effective_knex.getInfo(knex, "user", "object").then((result) => {
//             see.is("output" + result)
//         })

//         effective_knex.getInfo(knex, "hourglass", "array").then((result) => {
//             see.is("output" + result)
//         })
//         effective_knex.getInfo(knex, "hourglass", "object").then((result) => {
//             see.is("output" + result)
//         })
//     }
//     five() {
//         see.story("users will be able to grab all the tables")

//     }
//     all() {
//         this.one()
//         this.two()
//         this.three()
//         this.four()
//         this.five()

//     }
// }

// let newTest = new FinalTest()
// newTest.all()
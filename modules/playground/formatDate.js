const { STARTSWITH } = require("bulletproof_me")
let dictionary = {
    "January": 0,
    "February": 1,
    "March": 2,
    "April": 3,
    "May": 4,
    "June": 5,
    "July": 6,
    "August": 7,
    "September": 8,
    "October": 9,
    "November": 10,
    "December": 11,
    'Jan': 0,
    'Feb': 1,
    'Mar': 2,
    'Apr': 3,
    'May': 4,
    'Jun': 5,
    'Jul': 6,
    'Aug': 7,
    'Sep': 8,
    'Oct': 9,
    'Nov': 10,
    'Dec': 11,
}

function formatString(date) {
    date = date.replaceAll(",", "")
    date = date.toLowerCase().trim()
    let splitted = date.split(" ")
    console.log("splitted", splitted)
    console.log("🚀 ~ file: getType.js ~ line 115 ~ getType ~ date", date)
    let day = parseInt(splitted[1])
    let month;
    console.log("day")

    if (STARTSWITH(date, "j")) {
        month = dictionary["Jan"]
    } else if (STARTSWITH(date, "f")) {

        month = dictionary["Feb"]
    } else if (STARTSWITH(date, "mar")) {

        month = dictionary["Mar"]
    } else if (STARTSWITH(date, "ap")) {

        month = dictionary["Apr"]
    } else if (STARTSWITH(date, "may")) {

        month = dictionary["May"]
    } else if (STARTSWITH(date, "jun")) {

        month = dictionary["Jun"]
    } else if (STARTSWITH(date, "jul")) {

        month = dictionary["Jul"]
    } else if (STARTSWITH(date, "au")) {

        month = dictionary["Aug"]
    } else if (STARTSWITH(date, "s")) {

        month = dictionary["Sep"]
    } else if (STARTSWITH(date, "o")) {

        month = dictionary["Oct"]
    } else if (STARTSWITH(date, "n")) {

        month = dictionary["Nov"]
    } else if (STARTSWITH(date, "d")) {

        month = dictionary["Dec"]
    } else {
        return upset("not valid date", "get type in when_you_free", "should be a valid date")
    }
    if (splitted.length === 2) {
        let year = new Date().getFullYear()
        console.log(year)

    } else if (splitted.length === 3) {
        let year = parseInt(splitted[2])
        console.log(year)

    }
}

// let first = formatString("Dec 11, 2012")
// console.log("🚀 ~ file: formatDate.js ~ line 37 ~ first", first)
// let second = formatString("December 11, 2012")
// console.log("🚀 ~ file: formatDate.js ~ line 39 ~ second", second)
// let third = formatString("dec 1 2012")
// console.log("🚀 ~ file: formatDate.js ~ line 41 ~ third", third)
// let fourth = formatString("December 11 2012")
// console.log("🚀 ~ file: formatDate.js ~ line 43 ~ fourth", fourth)
// let fifth = formatString("dec 1")

// console.log("🚀 ~ file: formatDate.js ~ line 44 ~ fifth", fifth)

function arrStringtoNum(arr) {
    return arr.map(Number);
}

function formatKnex(knex) {
    let splitted = knex.split("T")
    let date = splitted[0]
    console.log("🚀 ~ file: formatDate.js ~ line 107 ~ formatKnex ~ date", date)
    let dates = date.split("-")
    let numberDates = arrStringtoNum(dates)
    console.log("🚀 ~ file: formatDate.js ~ line 110 ~ formatKnex ~ numberDates", numberDates)
    let time = splitted[1].split("Z")[0]
    let times = time.split(":")
    let numberTimes = arrStringtoNum(times)
    console.log("🚀 ~ file: formatDate.js ~ line 114 ~ formatKnex ~ numberTimes", numberTimes)
    return createFullDate(numberDates[0], numberDates[1] - 1, numberDates[2], numberTimes[0], numberTimes[1], numberTimes[2])
    console.log("🚀 ~ file: formatDate.js ~ line 108 ~ formatKnex ~ time", time)

}
let one = formatKnex("2022-03-14T02:19:24.329Z")
console.log("🚀 ~ file: formatDate.js ~ line 104 ~ one", one)
let two = formatKnex("2022-03-14T02:19:24.329Z")
console.log("🚀 ~ file: formatDate.js ~ line 106 ~ two", two)
let three = formatKnex("2022-12-11T16:00:00.000Z")
console.log("🚀 ~ file: formatDate.js ~ line 108 ~ three", three)
let four = formatKnex("2022-03-14T02:19:24.329Z")

console.log("🚀 ~ file: formatDate.js ~ line 109 ~ four", four)
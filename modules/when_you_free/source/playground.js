const when_you_free = require("./dist/index.js")

let dateString = {
    one: "Dec 11, 2012",
    two: "Dec 12, 2013",
    three: "Dec 13, 2014"
}
let dateTime = {
    one: "11:22",
    two: "22:11",
    three: "23:22"
}
let dateHTML = {
    one: "2020-03-01",
    two: "2021-03-01",
    two: "2022-03-01"

}

async function testWhenYouFree() {
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
        // let isTrue3 = when_you_free.difference(dateHTML["one"], dateHTML["two"], "minutes")
        // let isBeforeTrue = when_you_free.isBefore(dateHTML["one"], dateHTML["two"])
        // let isTrue4 = when_you_free.isBetween(dateHTML["one"], dateHTML["two"], dateHTML["three"])
        // console.log("🚀 ~ file: playground.js ~ line 34 ~ testWhenYouFree ~ isTrue4", isTrue4)
        // let getDays2 = when_you_free.dateIsWithinLimit("March 1 2022", 14)
        // console.log("🚀 ~ file: index.js ~ line 347 ~ testWhenYouFree ~ getDays2", getDays2)
        // let getDuration = when_you_free.getDuration("2022-03-14T02:20:15.986Z", "2022-03-14T02:07:15.986Z", "minutes")
        // console.log("🚀 ~ file: playground.js ~ line 38 ~ testWhenYouFree ~ getDuration", getDuration)
        // let getDuration2 = when_you_free.getDuration("2022-03-01T19:06:31.047Z", "2022-03-01T20:04:32.047Z", "seconds")
        // console.log("🚀 ~ file: index.js ~ line 350 ~ testWhenYouFree ~ getDuration2", getDuration2)
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
let dateObject = {
        one: new Date(2008, 04, 04),
        two: "Dec 11, 2011",
        three: new Date(2020, 02, 05)
    }
    // console.log("🚀 ~ file: index.js ~ line 347 ~ testWhenYouFree ~ getDays2", getDays2)
    // let getDuration = when_you_free.getDuration("2022-03-01T19:06:31.047Z", "2022-03-01T20:04:32.047Z", "seconds")
    // let getDuration2 = when_you_free.getDuration("2022-03-01T19:06:31.047Z", "2022-03-01T20:04:32.047Z", "seconds")
    // console.log("🚀 ~ file: index.js ~ line 350 ~ testWhenYouFree ~ getDuration2", getDuration2)
    // let secondReadable = when_you_free.getReadableFormat("Dec 11, 2012", "from") // in two months
    // let firstReadable = when_you_free.getReadableFormat("Dec 11, 2012", "to") // two month sago
    // let formatted3 = when_you_free.format(dateHTML["one"], "ll")
    // let formatted2 = when_you_free.format(dateHTML["one"], "LL")
    // console.log("🚀 ~ file: index.js ~ line 355 ~ testWhenYouFree ~ formatted2", formatted2)
    // let properDate = when_you_free.formatDateToPost(dateHTML["one"])
    // console.log("🚀 ~ file: index.js ~ line 356 ~ testWhenYouFree ~ properDate", properDate)
    // let formatted2 = when_you_free.format(dateTime["one"], "LL")
    // console.log("🚀 ~ file: playground.js ~ line 29 ~ formatted2", formatted2)
    // let digitalOne = when_you_free.digitalToSeconds(dateTime["one"])
    // console.log("🚀 ~ file: playground.js ~ line 27 ~ digitalOne", digitalOne)

// let isTrue = when_you_free.isBetween(dateString["one"], dateString["two"], dateString["three"])
// console.log("🚀 ~ file: playground.js ~ line 27 ~ isTrue", isTrue)
// let isTrue3 = when_you_free.isBetween(dateHTML["one"], dateHTML["two"], dateHTML["three"])
// console.log("🚀 ~ file: playground.js ~ line 29 ~ isTrue3", isTrue3)

// let isTrue4 = when_you_free.isBetween(dateObject["one"], dateObject["two"], dateObject["three"])

// console.log("🚀 ~ file: playground.js ~ line 31 ~ isTrue4", isTrue4)

// let isFalse = when_you_free.isBetween(dateString["two"], dateString["one"], dateString["three"])
// console.log("🚀 ~ file: playground.js ~ line 36 ~ isFalse", isFalse)

// let isFalse3 = when_you_free.isBetween(dateHTML["two"], dateHTML["one"], dateHTML["three"])

// console.log("🚀 ~ file: playground.js ~ line 26 ~ isFalse3", isFalse3)
// let isFalse4 = when_you_free.isBetween(dateObject["two"], dateObject["one"], dateObject["three"])

// console.log("🚀 ~ file: playground.js ~ line 40 ~ isFalse4", isFalse4)

// let getType2 = when_you_free.getReadableFormat(dateHTML["two"], "to")

// console.log("🚀 ~ file: playground.js ~ line 45 ~ getType2", getType2)


// let getType3 = when_you_free.formatDateToPost(dateHTML["two"])

// let getType4 = when_you_free.formatDateToPost(getType3)
// console.log("🚀 ~ file: playground.js ~ line 50 ~ getType3", getType4)
// let getDays = when_you_free.dateIsWithinLimit("2022-01-01", 14)
// console.log(getDays)
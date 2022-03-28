const fns = require("date-fns-tz")
const wyf = require("./index.js")
const { see } = require("code_clarity")
const moment = require("moment")
const ct = require("countries-and-timezones")
wyf.list()

function formatToTimezone(location, date) {
    let getDate = wyf.formatDateToPost(date)
    let timezone = ct.getTimezone(location)
    let offset = timezone["utcOffsetStr"]
    if (offset) {
        let finalDate = moment(getDate).utcOffset(offset, true)
        let date = moment(finalDate).toDate()
        return new Date(date)
    }
}
const date = new Date('2014-10-25T10:46:20Z')
let first = wyf.formatToTimezone("Asia/Hong_Kong", "Dec 11, 1994")
let second = wyf.formatToTimezone("America/New_York", "Dec 11, 1994")
let third = wyf.formatToTimezone("Europe/Copenhagen", "Dec 11, 1994")
console.log("🚀 ~ file: playground.js ~ line 22 ~ third", third)
let fifth = wyf.formatToTimezone("Europe/London", "Dec 11, 1994")
see.should("be in london time")
see.is(fifth)
let seventh = formatToTimezone("Asia/Tokyo", "Dec 11, 1994")
let nine = formatToTimezone("Asia/Bangkok", "Dec 11, 1994")
see.should("be in thai time")
see.is(nine)
    // let ten = formatToTimezone("Europe/Barcelona", "Dec 11, 1994")
    // see.should("be in barcelona time")
    // see.is(ten)
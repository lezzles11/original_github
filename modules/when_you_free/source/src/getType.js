import moment from "moment"
import { createHour, createMinute, createMonth, createFullDate, createDay } from "./create"
import { node_modules, git, stringDate, knexDate, dashYYYYMMDD, hyphenDDMMYYYY, hyphenYYYYMMDD, dashDDMMYYYY, yyyymmdd, hhmm, hhmmss, containsThis, matchWords } from "./define_me"
import { upset } from "./whats_wrong"
import { dictionary } from "./definitions"

export function STARTSWITH(string, substring) {
    let getBoolean = string.startsWith(substring)
    return getBoolean;
}
export function arrStringToNum(arr) {
    return arr.map(Number);
}
/**
 * @example
 * let one = formatKnex("2022-03-14T02:19:24.329Z")
console.log("🚀 ~ file: formatDate.js ~ line 104 ~ one", one)
let two = formatKnex("2022-03-14T02:19:24.329Z")
console.log("🚀 ~ file: formatDate.js ~ line 106 ~ two", two)
let three = formatKnex("2022-12-11T16:00:00.000Z")
console.log("🚀 ~ file: formatDate.js ~ line 108 ~ three", three)
let four = formatKnex("2022-03-14T02:19:24.329Z")

console.log("🚀 ~ file: formatDate.js ~ line 109 ~ four", four)
 * @author zen-out
 * @date 2022-03-14
 * @param {any} knex
 * @returns {any}
 */
function formatKnex(knex) {
    let splitted = knex.split("T")
    let date = splitted[0]
    let dates = date.split("-")
    let numberDates = arrStringToNum(dates)
    let time = splitted[1].split("Z")[0]
    let times = time.split(":")
    let numberTimes = arrStringToNum(times)
    return createFullDate(numberDates[0], numberDates[1] - 1, numberDates[2], numberTimes[0], numberTimes[1], numberTimes[2])
}

/**
 * @example
let first = formatString("Dec 11, 2012")
console.log("🚀 ~ file: formatDate.js ~ line 37 ~ first", first)
let second = formatString("December 11, 2012")
console.log("🚀 ~ file: formatDate.js ~ line 39 ~ second", second)
let third = formatString("dec 1 2012")
console.log("🚀 ~ file: formatDate.js ~ line 41 ~ third", third)
let fourth = formatString("December 11 2012")
console.log("🚀 ~ file: formatDate.js ~ line 43 ~ fourth", fourth)
let fifth = formatString("dec 1")
console.log("🚀 ~ file: formatDate.js ~ line 44 ~ fifth", fifth)
 * @author zen-out
 * @date 2022-03-14
 * @param {any} date
 * @returns {any}
 */
export function formatString(date) {
    if (date.includes(",")) {
        date = date.replace(",", "")
    }
    let newItem = date.toLowerCase()
    let splitted = newItem.split(" ")
    console.log(splitted)
    let day = parseInt(splitted[1])
    let month;
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
        return createDay(year, month, day)
    } else if (splitted.length === 3) {
        let year = parseInt(splitted[2])
        return createDay(year, month, day)
    }
}
export function handleDigital(hhmm) {
    let split = hhmm.split(":")
    let numbers = arrStringToNum(split)
    if (split.length === 2) {
        return createMinute(numbers[0], numbers[1])
    } else if (split.length === 3) {
        return createHour(numbers[0], numbers[1], numbers[2])
    }
}

export function handleDashed(ddmmyyyy) {
    let split = ddmmyyyy.split("/")
    let numbers = arrStringToNum(split)
    if (split[0].length === 4) {
        return createDay(numbers[0], numbers[1], numbers[2])
    } else {
        return createDay(numbers[2], numbers[1], numbers[0])
    }
}

export function handleHyphen(ddmmyyyy) {
    let split = ddmmyyyy.split("-")
    let numbers = arrStringToNum(split)
    if (split[0].length === 4) {
        return createDay(numbers[0], numbers[1], numbers[2])
    } else {
        return createDay(numbers[2], numbers[1], numbers[0])
    }
}
export function handleNumber(yyyymmdd) {
    let year = yyyymmdd.slice(0, 4)
    let month = yyyymmdd.slice(4, 6)
    let day = yyyymmdd.slice(6, 8)
    return createDay(parseInt(year), parseInt(month), parseInt(day))
}

/**
 * @example
 * isDate(date)
 * @author zen-out
 * @date 2022-03-07
 * @param {any} date
 * @returns {any}
 */
export function isDate(date) {
    if (containsThis(date, hhmm)) {
        return true;
    } else if (containsThis(date, hhmmss)) {
        return true;
    } else if (containsThis(date, dashDDMMYYYY)) {
        return true;
    } else if (containsThis(date, dashYYYYMMDD)) {
        return true;
    } else if (containsThis(date, hyphenDDMMYYYY)) {
        return true;
    } else if (containsThis(date, hyphenYYYYMMDD)) {
        return true;
    } else if (containsThis(date, yyyymmdd)) {
        return true;
    } else if (containsThis(date, knexDate)) {
        return true;
    } else if (containsThis(date, stringDate)) {
        return true;
    } else if (date instanceof Date) {
        return true;
    } else {
        return false;
    }
}

/**
 * @example
 * getType()
 * @author zen-out
 * @date 2022-03-07
 * @param {any} date
 * @returns {object} moment
 */
export function getType(date) {
    if (containsThis(date, knexDate)) {
        return formatKnex(date)
    } else if (containsThis(date, hhmm)) {
        return handleDigital(date)
    } else if (containsThis(date, hhmmss)) {
        return handleDigital(date)
    } else if (containsThis(date, dashDDMMYYYY)) {
        return handleDashed(date)
    } else if (containsThis(date, dashYYYYMMDD)) {
        return handleDashed(date)
    } else if (containsThis(date, hyphenDDMMYYYY)) {
        return handleHyphen(date)
            // return moment(date)
    } else if (containsThis(date, hyphenYYYYMMDD)) {
        return handleHyphen(date)
    } else if (containsThis(date, yyyymmdd)) {
        return handleNumber(date)

    } else if (containsThis(date, stringDate)) {
        return formatString(date)
    } else if (date instanceof Date) {
        return moment(date)
    } else if (moment(date).isValid()) {
        return moment(date)
    } else {
        return false;
    }
}


/**
 * @example
 * catchError(getDate)
 * @author zen-out
 * @date 2022-03-06
 * @param {any} getDate
 * @returns {any}
 */
export function catchError(getDate) {
    if (getDate === undefined || typeof getDate !== "object") {
        return upset("not a valid date" + getDate, "when_you_free module")
    } else {
        return true;
    }
}
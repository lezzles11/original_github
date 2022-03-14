import moment from "moment"
import { getType, catchError } from "./getType"
/**
 * @example
 * const when_you_free = require("when_you_free")
 * letTrue = when_you_free.isBefore("Dec 11, 2012", "Dec 12, 2012")
 * 
 * @author zen-out
 * @date 2022-03-06
 * @param {any} start
 * @param {any}  end
 * @returns {any}
 */
export function isBefore(start, end) {
    let dateOne = getType(start)
    let dateTwo = getType(end)
    let isTrue = moment(dateOne).isBefore(dateTwo)
    return isTrue
}

/**
      * @example
      * let dateHTML = {
    one: "2020-03-01",
    two: "2021-03-01",
    two: "2022-03-01"
}
      * let dateObject = {
    one: new Date(2010, 1, 1),
    two: new Date(2011, 1, 1),
    three: new Date(2020, 1, 1)
}
      *  let isTrue3 = when_you_free.difference(dateHTML["one"], dateHTML["two"], "minutes")
      * let isTrue4 = when_you_free.difference(dateObject["one"], dateObject["two"], "months")

      * @author zen-out
      * @date 2022-01-13
      * @param {any} one
      * @param {any} two
      * @param {any} type
      * @returns {integer}
      */
export function difference(one, two, type) {
    let dateOne = getType(one)
    let dateTwo = getType(two)
    return Math.abs(moment(dateOne).diff(dateTwo, type))
}

/**
 * @example
 * let dateHTML = {
    one: "2020-03-01",
    two: "2021-03-01",
    two: "2022-03-01"
}

let dateString = {
    one: "Dec 11, 2012",
    two: "Dec 12, 2013",
    three: "Dec 13, 2014"
}
 * let isTrue3 = when_you_free.isBetween(dateHTML["one"], dateHTML["two"], dateHTML["three"])
let isTrue = when_you_free.isBetween(dateString["one"], dateString["two"], dateString["three"])
 * 
 * @author zen-out
 * @date 2022-03-07
 * @param {any} target
 * @param {any}  start
 * @param {any}  end
 * @returns {any}
 */
export function isBetween(target, start, end) {
    let dateZero = getType(target)
    let dateOne = getType(start)
    let dateTwo = getType(end)
    let isTrue = moment(dateZero).isBetween(dateOne, dateTwo)
    return isTrue
}

/**
 * @example
 * if today is march 10
let getDays = dateIsWithinLimit("2022-01-01", 14) // return false
let getDays2 = dateIsWithinLimit("March 1, 2022", 14) // return true
 * @author zen-out
 * @date 2022-03-10
 * @param {any} getDate
 * @param {any}  limit
 * @returns {any}
 */
export function dateIsWithinLimit(getDate, limit) {
    let type = getType(getDate)
    let today = new Date()
    var m1 = moment(type)
    let m2 = moment(today)
    let actualDaysAgo = moment.duration({ from: m1, to: m2 }).as("days");
    if (actualDaysAgo <= limit) {
        return true;
    } else {
        return false;
    }
}
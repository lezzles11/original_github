import { upset } from "whats_wrong"
import check from "check-types"
import { node_modules, git, stringDate, knexDate, dashYYYYMMDD, hyphenDDMMYYYY, hyphenYYYYMMDD, dashDDMMYYYY, yyyymmdd, hhmm, hhmmss, containsThis, matchWords } from "define_me"


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
 * getType(data)
 * @date 2022-03-03
 * @param {any} data
 * @returns {string} data, number, array, string object, boolean undefined
 */
export function getType(data) {
    if (!isDate(data)) {
        if (check.number(data)) {
            return "number"
        } else if (check.array(data)) {
            return "array"
        } else if (check.object(data)) {
            return "object"
        } else if (check.string(data)) {
            return "string"
        } else if (typeof data === "boolean") {
            return "boolean"
        } else {

            return upset("not a valid type " + getType, "getType in make legit", "should be a valid type")
        }
    } else {
        return "date"
    }
}
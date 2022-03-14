import S from "./string"
import { countBy } from "lodash"
import { isBefore } from 'when_you_free'
/**
 * @example
 * COUNT("hello hellodi", "div", 2)
 * COUNT("hello hellodi", "hello", 2) // true 

 * @author zen-out
 * @date 2022-03-10
 * @param {any} type
 * @param {any}  item
 * @param {any}  amount
 * @returns {any}
 */
export function COUNT(type, item, amount) {
    var isArr = Array.isArray(type);
    let counts;
    if (isArr) {
        let finalCount = countBy(arr, (eachOne) => {
            eachOne === item
        });
        let getBoolean = finalCount === amount;
        counts = getBoolean
    } else if (typeof type === "string") {
        let getStringCount = S(type).count(item);
        let stringIncludes = getStringCount === amount;
        counts = stringIncludes
    }
    return counts;
}

/**
 * @example
 * ATLEAST("div div", "div", 1) //true 
   ATLEAST("div div", "div", 2) //true 
  ATLEAST("div div", "div", 3) //false 
 * @author zen-out
         * @date 2022-02-10
 * @param {any} type
 * @param {any} item
 * @param {any} amount
 * @returns {any}
 */
export function ATLEAST(type, item, amount) {
    var isArr = Array.isArray(type);
    let counts;
    if (isArr) {
        counts = countBy(arr, (eachOne) => {
            eachOne === item
        });

    } else if (typeof type === "string") {
        counts = S(type).count(item);
    }
    if (counts >= amount) {
        return true;
    } else {
        return false;
    }
}

/**
 * @example
 *  T(ISLESS("a", "b", "string"))
        T(ISLESS(1, 2, "number"))
        T(ISLESS("Dec 11, 1993", "Dec 11, 1994", "date"))
        F(ISLESS("b", "a", "string"))
        F(ISLESS(2, 1, "number"))
        F(ISLESS("Dec 11, 1996", "Dec 11, 1995", "date"))
 * @date 2022-02-17
 * @param {any} first
 * @param {any} second
 * @param {any} type
 * @returns {any}
 */
export function ISLESS(first, second, type) {
    if (type === "date") {
        return isBefore(first, second)
    } else if (type === "number") {
        if (first <= second) {
            return true;
        } else {
            return false;
        }
    } else if (type === "string") {
        let dict = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        let lowerCased = first.charAt(0).toLowerCase()
        let lowerCasedSecond = second.charAt(0).toLowerCase()
        let indexFirst = dict.indexOf(lowerCased)
        let indexLast = dict.indexOf(lowerCasedSecond)
        if (indexFirst <= indexLast) {
            return true;
        } else { return false; }
    } else {
        console.log("not sure what type")
    }
}

export function TESTCOUNTS() {
    let shouldBeTrue = COUNT("hello hellodi", "div", 2)
    console.log("🚀 ~ file: counts.js ~ line 102 ~ TESTCOUNTS ~ shouldBeTrue", shouldBeTrue)
    let test2 = ISLESS(1, 2, "number")
    console.log("🚀 ~ file: counts.js ~ line 104 ~ TESTCOUNTS ~ test2", test2)
    let isLessDates = ISLESS("1993-12-11", "1994-12-11", "date")
    console.log("🚀 ~ file: counts.js ~ line 106 ~ TESTCOUNTS ~ isLessDates", isLessDates)
    let atLeastTrue = ATLEAST("div div", "div", 1)
    console.log("🚀 ~ file: counts.js ~ line 108 ~ TESTCOUNTS ~ atLeastTrue", atLeastTrue)
}
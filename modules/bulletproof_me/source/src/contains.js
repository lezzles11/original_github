import { format } from "make_legit"
import S from "./string"


/**
 * @example 
 * HAS("string", "st")
 * HAS(323, 2)
 * HAS({hi: "whatsup"}, "whatsup")
 * HAS([1, 2, 3], 1)
 * @author zen-out
 * @date 2022-02-09
 * @param {any} one
 * @param {any} two
 * @returns {any}
 */
export function HAS(one, two) {
    let first = format(one, "string")
    let second = format(two, "string")
    return S(first).contains(second)
}
/**
 * @example
 *  it("starts with", () => {
        T(STARTSWITHHELPER("hello", "h"))
        F(STARTSWITHHELPER("hello", "b"))
    })
 * @author zen-out
         * @date 2022-02-10
 * @param {any} string
 * @param {any} substring
 * @returns {any}
 */
export function STARTSWITH(string, substring) {
    let first = format(string, "string")
    let second = format(substring, "string")
    let getBoolean = S(first).startsWith(second)
    return getBoolean;
}



/**
 * @example
 *  it("ends with", () => {
        F(ENDSWITHHELPER("HELLO", "o"))
        T(ENDSWITHHELPER("<div></div>", "</div>"))
    })
 * @author zen-out
         * @date 2022-02-10
 * @param {any} string
 * @param {any} substring
 * @returns {any}
 */
export function ENDSWITH(string, substring) {
    let first = format(string, "string")
    let second = format(substring, "string")
    let getBoolean = S(first).endsWith(second)
    return getBoolean
}

export function TESTCONTAINS() {
    let trueStarts = STARTSWITH("hi", "h")
    console.log("🚀 ~ file: contains.js ~ line 60 ~ TESTCONTAINS ~ trueStarts", trueStarts)
    let falseStarts = STARTSWITH("asdfasdf", "A")
    console.log("🚀 ~ file: contains.js ~ line 61 ~ TESTCONTAINS ~ falseStarts", falseStarts)
    let trueEnds = ENDSWITH('HELLO', "O")
    console.log("🚀 ~ file: contains.js ~ line 62 ~ TESTCONTAINS ~ trueEnds", trueEnds)
    let falseEnds = ENDSWITH("hello", "z")
    console.log("🚀 ~ file: contains.js ~ line 63 ~ TESTCONTAINS ~ falseEnds", falseEnds)
    let trueHas = HAS("asdf", "sd")
    console.log("🚀 ~ file: contains.js ~ line 64 ~ TESTCONTAINS ~ trueHas", trueHas)
    let falseHas = HAS("asdf", "z")
    console.log("🚀 ~ file: contains.js ~ line 65 ~ TESTCONTAINS ~ falseHas", falseHas)

}
import S from "./string"
import { countBy } from "lodash"


/**
 * @example
 * it('', () => {
        F(DOESNOTHAVEHELPER("{{>", ">")) // false (matches the full instance)
        T(DOESNOTHAVEHELPER("{{>", "asdf")) // true (matches the full instance)
    });
 * @author zen-out
         * @date 2022-02-10
 * @param {any} string
 * @param {any} item
 * @returns {any}
 */
export function DOESNOTHAVE(string, item) {
    let getItems = S(string).count(item)
    let getBoolean = getItems === 0
    return getBoolean;
}

export function TESTDOESNOT() {
    let getFalse = DOESNOTHAVE("{{>", ">")

    console.log("🚀 ~ file: doesNot.js ~ line 26 ~ TESTDOESNOT ~ getFalse", getFalse)
}
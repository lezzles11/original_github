/**
 * @example
 * const {upset} = require("whats_wrong")
 * upset("an error", "location")
 * @author zen-out
 * @date 2022-03-06
 * @param {any} error
 * @param {any}  location = undefined
 * @returns {any}
 */
export function upset(error, location = undefined, expected = "") {
    // let getError = make_legit.format(error, "string")
    // hourglass.start(getError)
    // see.problem(getError)
    // see.how(location)
    // see.should(expected)
    return {
        error: error,
        location: location,
        expected: expected
    }
}
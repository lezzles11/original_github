import { getType, catchError } from "./getType"
import { duration as _duration } from "moment"

/**
 * @example
 * let getDuration = when_you_free.getDuration("2022-03-01T19:06:31.047Z", "2022-03-01T20:04:32.047Z", "seconds")
 * @author zen-out
 * @date 2022-03-07
 * @param {any} start
 * @param {any}  end
 * @param {any}  type
 * @returns {any}
 */
export function getDuration(start, end, type) {
    let dateOne = getType(start)
    let dateTwo = getType(end)
    console.log(dateOne)
    console.log(dateTwo)
    let duration = _duration({
        from: dateOne,
        to: dateTwo
    })
    return duration.as(type)
}
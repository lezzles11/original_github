import cleanDeep from "clean-deep"
import { getType } from './getType.js'
/**
 * @example 
 * trimObj(obj)
 * @author zen-out
 * @date 2022-03-03
 * @param {any} obj
 * @returns {any}
 */
export function trimObj(obj) {
    // console.log("trim obj")
    if (obj instanceof Date) {
        return obj;
    }
    obj = cleanDeep(obj)
        // console.log("🚀 ~ file: module.js ~ line 72 ~ trimObj ~ obj", obj)
    for (const [key, value] of Object.entries(obj)) {
        if (typeof value === "string") {
            let trimmed = value.trim()
            obj[key] = trimmed;
        }
    }
    return obj;
}

/**
 * @example 
 * 
 * trimArr(arr)
 * @author zen-out
 * @date 2022-03-03
 * @param {any} arr
 * @returns {array}
 */
export function trimArr(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let type = getType(arr[i])
        if (type === "string") {
            arr[i] = arr[i].trim()
            newArr.push(arr[i])
        } else if (type === "object") {
            let trimmed = trimObj(arr[i])
            newArr.push(trimmed)
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

/**
 * @example
 * clean(data)
 * 
 * @date 2022-03-03
 * @param {any} data
 * @returns {any}
 */
export function clean(data) {
    let type = getType(data)
    switch (type) {
        case "array":
            let cleaned = trimArr(data)
            return cleaned;
        case "object":
            let trimmed = trimObj(data)
            return trimmed;
        case "string":
            return data.trim()
        default:
            return data;
    }
}

export function testClean() {
    let newObj = {
        test: null,
        what: undefined,
        id: 200,
        timer_user_id: 1,
        timer_problem_id: 1,
        timer_id: 1,
        hourglass_id: 31,
        user_id: 1,
        hourglass_user_id: 1,
        importance: 'medium',
        seconds: 20
    }
}
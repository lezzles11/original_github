import S from "./string"

/**
 * ISTYPEOFHELPER
 * @date 2022-03-01
 * @param {any} data
 * @param {any} type
 * @returns {any}
 */
export function ISTYPE(data, type) {
    if (data instanceof Date && type === "date") {
        return true
    } else if (type === "array" && Array.isArray(data)) {
        return true;
    } else if (type === "object" && typeof data === "object") {
        return true
    } else if (type === "string" && typeof data === "string") {
        return true
    } else if (type === "number" && typeof data === "number") {
        return true
    } else if (type === "boolean" && typeof data === "boolean") {
        let doubleCheck = S(data).toBoolean()
        if (doubleCheck === true) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
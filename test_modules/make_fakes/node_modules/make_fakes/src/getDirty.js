import { format } from "when_you_free";
import { getChance } from "./getChance";

export function getDirty(key) {
    let random = getChance.getArrayOptions([1, 2, 3])
    switch (key) {
        case "boolean":
            let bool = getChance.boolean()
            if (random === 1) {
                return bool.toString()
            } else {
                return undefined;
            }

        case "number":
            let number = getChance.number()
            if (random === 1) {
                return number.toString()
            } else if (random === 2) {
                return getChance.float()
            } else {
                return undefined;
            }

        case "email":
            if (random === 1) {
                let dirtyOne = getChance.string()
                return dirtyOne;
            } else if (random === 2) {
                let dirtyTwo = getChance.number()
                return dirtyTwo;
            } else {
                return undefined;
            }

        case "string":
            if (random === 1) {
                let dirtyOne = getChance.number()
                return dirtyOne;
            } else if (random === 2) {
                let dirtyTwo = getChance.paragraph()
                return dirtyTwo;
            } else {
                return undefined;
            }

        case "password":
            if (random === 1) {
                let dirtyOne = getChance.paragraph()
                return dirtyOne;
            } else if (random === 2) {
                return " ";
            } else {
                return undefined;
            }
        case "date":
            if (random === 1) {
                let dirtyOne = format(getChance.past_date(), "L")
                return dirtyOne
            } else if (random === 2) {
                let dirtyOne = format(getChance.past_date(), "LL")
                return dirtyOne
            } else {
                return undefined;
            }
        case "past_date":
            if (random === 1) {
                let dirtyOne = format(getChance.past_date(), "dateInput")
                return dirtyOne;
            } else if (random === 2) {
                let dirtyTwo = format(getChance.future_date(), "LL")
                return dirtyTwo;
            } else {
                return undefined;
            }
        case "future_date":
            if (random === 1) {
                let dirtyOne = format(getChance.future_date(), "L")
                return dirtyOne;
            } else if (random === 2) {
                let dirtyTwo = format(getChance.future_date(), "l")
                return dirtyTwo;
            } else {
                return undefined;
            }
        case "number_date":
            if (random === 1) {
                let dirtyOne = format(getChance.future_date(), "dateInput")
                return dirtyOne;
            } else if (random === 2) {
                let dirtyTwo = format(getChance.future_date(), "ll")
                return dirtyTwo;
            } else {
                return undefined;
            }
        case "phone":
            if (random === 1) {
                let dirtyOne = getChance.future_date()
                return dirtyOne;
            } else if (random === 2) {
                let dirtyTwo = getChance.boolean()
                return dirtyTwo;
            } else {
                return undefined;
            }
        case "image":
            if (random === 1) {
                let dirtyOne = getChance.string()
                return dirtyOne;
            } else if (random === 2) {
                return " "
            } else {
                return undefined;
            }
        default:
            return undefined;
    }
}

// let boolean = getDirty("boolean")
// console.log("🚀 ~ file: getDirty.js ~ line 36 ~ boolean", boolean)
// let num = getDirty("number")
// console.log("🚀 ~ file: playground.js ~ line 62 ~ num", num)
// let name = getDirty("string")
// console.log("🚀 ~ file: playground.js ~ line 63 ~ name", name)

// const future_date = getDirty("future_date")
// console.log(typeof future_date)
// const past_date = getDirty("past_date")
// console.log(typeof past_date)
// const number_date = getDirty("number_date")
// console.log(typeof number_date)
// const phone = getDirty("phone")
// console.log(phone, typeof phone)
// const arr = getDirty([1, 2, 3])
// console.log("🚀 ~ file: playground.js ~ line 73 ~ arr", arr)
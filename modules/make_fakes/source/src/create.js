import { extend } from "./extend"
import { getChance } from "./getChance"
import { getDirty } from "./getDirty"

export function getOne(key) {
    if (typeof key !== "string") {

        return getChance.getArrayOptions(key)

    } else {

        switch (key) {
            case "paragraph":
                return getChance.paragraph()
            case "boolean":
                return getChance.boolean()
            case "number":
                return getChance.number()
            case "email":
                return getChance.email();
            case "string":
                return getChance.string()
            case "password":
                return getChance.password()
            case "past_date":
                return getChance.past_date()
            case "future_date":
                return getChance.future_date()
            case "number_date":
                return getChance.number_date()
            case "phone":
                return getChance.phone()
            case "image":
                return getChance.image()
            case "date":
                return getChance.date()
            default:
                return getChance.getArrayOptions(key)
        }
    }
}
/**
* make_fakes.createOne(object)
* @example
const make_fakes = require("make_fakes")
let hourglass = {
  public: "boolean",
  seconds: "number",
  start: "past_date",
  description: "paragraph",
  edit: "date",
  end: "future_date",
  status: ["to do", "doing", "done"],
  title: "string",
  email: "email",
  created: "number_date"
}
let getOne = make_fakes.createOne(hourglass, { title: "hello" })
console.log("🚀 ~ file: index.js ~ line 17 ~ getOne", getOne)
* @date 2022-03-02
* @param {object} object
* @param {object} object
* @returns {object}
*/
export function createOne(object, needThese = {}, currIndex) {
    let values = Object.keys(object)
    let newObj = {}
    for (let i = 0; i < values.length; i++) {
        let eachKey = values[i]
        let eachValue = object[eachKey]
        if (eachValue === "foreign_id") {
            newObj[eachKey] = currIndex;
        } else {
            let getRandom = getOne(eachValue)
            newObj[eachKey] = getRandom
        }

    }

    if (needThese !== {}) {
        return extend(newObj, needThese);
    } else {
        return newObj;
    }
}
/**
* @description 
* Returns realistic fake dirty data
* boolean -> boolean to string or undefined 
* number -> stringed number, float, undefined 
* email -> string, number, undefined
* password -> " ", undefined, paragraph,
* past_date -> dateInput format, LL format, undefined
* future_date -> L format, l format, undefined
* number_date -> dateInput format, ll format
* phone -> future_date, boolean, undefined
* image -> string, " ", undefined
* @example 
const make_fakes = require("make_fakes")
let hourglass = {
  public: "boolean",
  seconds: "number",
  start: "past_date",
  description: "paragraph",
  edit: "date",
  end: "future_date",
  status: ["to do", "doing", "done"],
  title: "string",
  email: "email",
  created: "number_date"
}
let getOneDirty = make_fakes.createOneDirty(hourglass, { title: "hello" })
console.log("🚀 ~ file: index.js ~ line 23 ~ getOneDirty", getOneDirty)
* @date 2022-03-02
* @param {object} object
* @param {object} object
* @returns {object}
*/
export function createOneDirty(object, needThese = {}, currIndex) {
    let values = Object.keys(object)
    let newObj = {}
    for (let i = 0; i < values.length; i++) {
        let eachKey = values[i]
        let eachValue = object[eachKey]
        if (eachValue === "foreign_id") {
            newObj[eachKey] = currIndex;
        } else {
            let getRandom = getDirty(eachValue)
            newObj[eachKey] = getRandom
        }

    }
    if (needThese !== {}) {
        return extend(newObj, needThese);
    } else {
        return newObj;
    }
}
/**
* @example
* const make_fakes = require("make_fakes")
let hourglass = {
  public: "boolean",
  seconds: "number",
  start: "past_date",
  description: "paragraph",
  edit: "date",
  end: "future_date",
  status: ["to do", "doing", "done"],
  title: "string",
  email: "email",
  created: "number_date"
}
*let getMany = make_fakes.createMany(hourglass, 2, true, { title: "hello" })
console.log("🚀 ~ file: index.js ~ line 17 ~ getOne", getMany)
* @author zen-out
* @date 2022-03-08
* @param {object} object
* @param {number} length=1
* @param {boolean} addId=false
* @param {object} things to add 
* @returns {array}
*/
export function createMany(object, length = 1, addId = false, mustHave = {}) {
    let newArr = []
    for (let i = 0; i < length; i++) {
        let id = i + 1;
        let newObj = createOne(object, mustHave, id)

        if (addId === true) {
            newObj["id"] = id;
        }
        newArr.push(newObj)
    }
    return newArr
}
/**
* @example 
* const make_fakes = require("make_fakes")
let hourglass = {
  public: "boolean",
  seconds: "number",
  start: "past_date",
  description: "paragraph",
  edit: "date",
  end: "future_date",
  status: ["to do", "doing", "done"],
  title: "string",
  email: "email",
  created: "number_date"
}
* let getManyDirty = make_fakes.createManyDirty(hourglass, 2, true, { title: "hello" })
console.log("🚀 ~ file: index.js ~ line 23 ~ getOneDirty", getManyDirty)
* @date 2022-03-02
* @param {object} object
* @param {number} length=1
* @param {boolean} addId=false
* @param {object} things to add 
* @returns {array}
*/
export function createManyDirty(object, length = 1, addId = false, mustHave = {}) {
    let newArr = []
    for (let i = 0; i < length; i++) {
        let id = i + 1;
        let newObj = createOneDirty(object, mustHave, id)
        if (addId === true) {
            newObj["id"] = id;
        }
        newArr.push(newObj)
    }
    return newArr
}
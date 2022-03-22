# make_legit

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Downloads](https://img.shields.io/npm/dw/make_legit)
```js
const make_legit = require("make_legit")
let shouldBeString = make_legit.format(3, "string")
console.log("🚀 ~ file: playground.js ~ line 3 ~ shouldBeString", shouldBeString)
let shouldBeString2 = make_legit.format({ "start": 2, "edit": 3, "end": 4 }, "string")
console.log("🚀 ~ file: playground.js ~ line 5 ~ shouldBeString2", shouldBeString2)
let shouldBeString3 = make_legit.format([2, 3, 4], "string")
console.log("🚀 ~ file: playground.js ~ line 7 ~ shouldBeString", shouldBeString3)
let shouldTrim = make_legit.format("  trim white space ", "string")
console.log("🚀 ~ file: playground.js ~ line 9 ~ shouldTrim", shouldTrim)
let shouldTrim2 = make_legit.format({ "a": "fffff      f   " }, "object")
console.log("🚀 ~ file: playground.js ~ line 11 ~ shouldTrim", shouldTrim2)
let removeUNdefined = make_legit.format({ id: undefined, name: "lesley     " }, "object")
console.log("🚀 ~ file: playground.js ~ line 13 ~ removeUNdefined", removeUNdefined)
let boolean = make_legit.format(false, "boolean")
console.log("🚀 ~ file: playground.js ~ line 14 ~ boolean", boolean)
let getBoolean = make_legit.format("true", "boolean")
console.log("🚀 ~ file: playground.js ~ line 17 ~ getBoolean", getBoolean)
let num = make_legit.format("3", "number")
console.log("🚀 ~ file: playground.js ~ line 19 ~ num", num)
let toPost = make_legit.format(new Date(), "date")

console.log("🚀 ~ file: playground.js ~ line 20 ~ toPost", toPost)

let getType = make_legit.getType([])
let getObject = make_legit.getType({ test: "whatsup" })
console.log("🚀 ~ file: playground.js ~ line 20 ~ getObject", getObject)
let getDate = make_legit.getType("Dec 11 2022")

let getDate2 = make_legit.getType(new Date())
let first = {
    "public": true,
    "seconds": 92,
    "status": "to do",
    "importance": 2,
    "usefulness": 1,
    "difficulty": 1,
    "user_id": 4,
    "id": 1
}

let hourglass = {
    id: "number",
    user_id: "number",
    email: "string",
    seconds: "number",
    public: "boolean",
    status: "string",
    usefulness: "number",
    importance: "number",
    difficulty: "number",
    start: "date",
    edit: "date",
    end: "date",
    created: "date"
}
let result = make_legit.formatActualObject(first, hourglass)
let obj = make_legit.getObject([{ id: 2, }])
console.log(obj)

let original = { id: 1, whatsup: "nothing" }
let update = { id: 2, whatsup: "im pissed" }
let merged = make_legit.mergeWithOriginal(original, update)
console.log(merged)
```
## Instructions: 
```npm install make_legit ``` 
 ``` const make_legit =  require('make_legit')```

## If utilizing in html...: 
```<script src="./node_modules/make_legit/index.js"></script> ``` 
 ``` const output =  make_legit.method(parameter)```

## Functions

<dl>
<dt><a href="#trimObj">trimObj(obj)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#trimArr">trimArr(arr)</a> ⇒ <code>array</code></dt>
<dd></dd>
<dt><a href="#clean">clean(data)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#format">format(data, date,)</a> ⇒ <code>any</code></dt>
<dd><p>format(data, type)</p>
</dd>
<dt><a href="#formatDate">formatDate(data)</a> ⇒ <code>date</code></dt>
<dd></dd>
<dt><a href="#formatNumber">formatNumber(data, type)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#formatArray">formatArray(data)</a> ⇒ <code>array</code></dt>
<dd></dd>
<dt><a href="#formatObject">formatObject(data)</a> ⇒ <code>object</code></dt>
<dd></dd>
<dt><a href="#formatString">formatString(data)</a> ⇒ <code>string</code></dt>
<dd><p>formatString(data)</p>
</dd>
<dt><a href="#formatBoolean">formatBoolean(data)</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#formatActualObject">formatActualObject(actual, expected)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#getObject">getObject(objectOrArray)</a> ⇒ <code>any</code></dt>
<dd><ol>
<li>If it&#39;s an array, will return the first item in array</li>
</ol>
</dd>
<dt><a href="#getType">getType(data)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#mergeWithOriginal">mergeWithOriginal(original, update)</a> ⇒ <code>any</code></dt>
<dd></dd>
</dl>

<a name="trimObj"></a>

## trimObj(obj) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| obj   | <code>any</code> |

**Example**  
```js
trimObj(obj)
```
<a name="trimArr"></a>

## trimArr(arr) ⇒ <code>array</code>
**Kind**: global function  
**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| arr   | <code>any</code> |

**Example**  
```js
trimArr(arr)
```
<a name="clean"></a>

## clean(data) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-03  

| Param | Type             |
|-------|------------------|
| data  | <code>any</code> |

**Example**  
```js
clean(data)
```
<a name="format"></a>

## format(data, date,) ⇒ <code>any</code>
format(data, type)

**Kind**: global function  
**Date**: 2022-03-03  

| Param | Type                | Description                              |
|-------|---------------------|------------------------------------------|
| data  | <code>any</code>    |                                          |
| date, | <code>string</code> | string, array, object, boolean or number |

<a name="formatDate"></a>

## formatDate(data) ⇒ <code>date</code>
**Kind**: global function  
**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| data  | <code>any</code> |

**Example**  
```js
formatDate(data)
```
<a name="formatNumber"></a>

## formatNumber(data, type) ⇒ <code>number</code>
**Kind**: global function  
**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| data  | <code>any</code> |
| type  | <code>any</code> |

**Example**  
```js
formatNumber(data)
```
<a name="formatArray"></a>

## formatArray(data) ⇒ <code>array</code>
**Kind**: global function  
**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| data  | <code>any</code> |

**Example**  
```js
formatArray(data)
```
<a name="formatObject"></a>

## formatObject(data) ⇒ <code>object</code>
**Kind**: global function  
**Date**: 2022-03-03  

| Param | Type             |
|-------|------------------|
| data  | <code>any</code> |

**Example**  
```js
formatObject(data)
```
<a name="formatString"></a>

## formatString(data) ⇒ <code>string</code>
formatString(data)

**Kind**: global function  
**Date**: 2022-03-03  

| Param | Type             |
|-------|------------------|
| data  | <code>any</code> |

<a name="formatBoolean"></a>

## formatBoolean(data) ⇒ <code>boolean</code>
**Kind**: global function  
**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| data  | <code>any</code> |

**Example**  
```js
formatBoolean(data)
```
<a name="formatActualObject"></a>

## formatActualObject(actual, expected) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-22  
**Author**: zen-out  

| Param    | Type             |
|----------|------------------|
| actual   | <code>any</code> |
| expected | <code>any</code> |

**Example**  
```js
let first = {
        "public": true,
        "seconds": 92,
        "status": "to do",
        "importance": 2,
        "usefulness": 1,
        "difficulty": 1,
        "user_id": 4,
        "id": 1
    }

    let hourglass = {
        id: "number",
        user_id: "number",
        email: "string",
        seconds: "number",
        public: "boolean",
        status: "string",
        usefulness: "number",
        importance: "number",
        difficulty: "number",
        start: "date",
        edit: "date",
        end: "date",
        created: "date"
    }
    let formatted = formatObject(first, hourglass)
    console.log(formatted)
```
<a name="getObject"></a>

## getObject(objectOrArray) ⇒ <code>any</code>
1. If it's an array, will return the first item in array

**Kind**: global function  
**Date**: 2022-03-10  
**Author**: zen-out  

| Param         | Type             |
|---------------|------------------|
| objectOrArray | <code>any</code> |

**Example**  
```js
let isObjectOrArray = effective_knex.getObject([{id: 2}])
```
<a name="getType"></a>

## getType(data) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - data, number, array, string object, boolean undefined  
**Date**: 2022-03-03  

| Param | Type             |
|-------|------------------|
| data  | <code>any</code> |

**Example**  
```js
getType(data)
```
<a name="mergeWithOriginal"></a>

## mergeWithOriginal(original, update) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-22  
**Author**: zen-out  

| Param    | Type             |
|----------|------------------|
| original | <code>any</code> |
| update   | <code>any</code> |

**Example**  
```js
let original = { id: 1, whatsup: "nothing" }
    let update = { id: 2, whatsup: "im pissed" }
    let merged = mergeWithOriginal(original, update)
```

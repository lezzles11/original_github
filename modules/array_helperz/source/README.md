# array_helperz
[array_helperz - start here](https://zen-out.github.io/packages/array_helperz)
[![here](https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/array_helperz.png)](https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/array_helperz.png)
```js
const arrz = require("array_helperz")

let sampleInput = [{
    seconds: 500,
    created: new Date(2020, 12, 1),
    status: "to do",
    problem: "we actually solve our problems best by looking at how other people solved them - segment each feature",
}, { seconds: 1000, created: new Date(2019, 12, 1), status: "doing", problem: "we need to focus on one thing at a time" }]
let contains = arrz.contains(sampleInput, "seconds", 500)
console.log("🚀 ~ file: index.js ~ line 12 ~ contains", contains)
let doesNotContain = arrz.doesNotContain(sampleInput, "seconds", 500)
console.log("🚀 ~ file: index.js ~ line 14 ~ doesNotContain", doesNotContain)
let count = arrz.countByCondition(sampleInput, "status", "to do")
console.log("🚀 ~ file: index.js ~ line 16 ~ count", count)
let filter = arrz.filterValues(sampleInput, "segment", ["problem"])
console.log("🚀 ~ file: index.js ~ line 18 ~ filter", filter)
let sortDesc = arrz.sortDesc(sampleInput, "seconds", "integer")
console.log("🚀 ~ file: index.js ~ line 20 ~ sortDesc", sortDesc)
let sortAsc = arrz.sortAsc(sampleInput, "seconds", "integer")
console.log("🚀 ~ file: index.js ~ line 22 ~ sortAsc", sortAsc)
let grouped = arrz.group(sampleInput, "status")
console.log("🚀 ~ file: index.js ~ line 23 ~ grouped", grouped)
```
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Downloads](https://img.shields.io/npm/dw/array_helperz)
## Instructions: 
```npm install array_helperz ``` 
 ``` const array_helperz =  require('array_helperz')```

## If utilizing in html...: 
```<script src="https://cdn.jsdelivr.net/npm/array_helperz@1.1.22/dist/index.js"></script> ``` 
 ``` const output =  array_helperz.method(parameter)```

## Functions

<dl>
<dt><a href="#trimArr">trimArr(arr)</a> ⇒ <code>array</code></dt>
<dd><p>trims array values</p>
</dd>
<dt><a href="#countByCondition">countByCondition(array, key, value)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#filterValues">filterValues(array, keyword, arrOfKeys)</a> ⇒ <code>array</code></dt>
<dd></dd>
<dt><a href="#sortAsc">sortAsc(array, property, type)</a> ⇒ <code>array</code></dt>
<dd></dd>
<dt><a href="#sortDesc">sortDesc(array, property)</a> ⇒ <code>array</code></dt>
<dd></dd>
<dt><a href="#contains">contains(array, property, value)</a> ⇒ <code>array</code></dt>
<dd></dd>
<dt><a href="#doesNotContain">doesNotContain(array, property, value)</a> ⇒ <code>array</code></dt>
<dd></dd>
<dt><a href="#filterAndSort">filterAndSort(data, object, sortValue, sortType, asc, limit)</a> ⇒ <code>array</code></dt>
<dd></dd>
<dt><a href="#group">group(data, groupByCondition)</a> ⇒ <code>array</code></dt>
<dd><ul>
<li>@example
const { arrz } = require(&quot;./index.js&quot;)
let sampleInput = [{
seconds: 500,
created: new Date(2020, 12, 1),
status: &quot;to do&quot;,
problem: &quot;we actually solve our problems best by looking at how other people solved them - segment each feature&quot;,
}, { seconds: 1000, created: new Date(2019, 12, 1), status: &quot;doing&quot;, problem: &quot;we need to focus on one thing at a time&quot; }]
let output = arrz.group(sampleInput, &quot;status&quot;)
console.log(&quot;🚀 ~ file: playground.js ~ line 9 ~ output&quot;, output)</li>
</ul>
</dd>
</dl>

<a name="trimArr"></a>

## trimArr(arr) ⇒ <code>array</code>
trims array values

**Kind**: global function  
**Date**: 2021-12-19  
**Author**: zen-out  
**Author**: zen-out  

| Param | Type               |
|-------|--------------------|
| arr   | <code>array</code> |

<a name="countByCondition"></a>

## countByCondition(array, key, value) ⇒ <code>number</code>
**Kind**: global function  
**Returns**: <code>number</code> - of objects that meet that condition  
**Date**: 2022-02-17  
**Author**: zen-out  

| Param | Type                |
|-------|---------------------|
| array | <code>array</code>  |
| key   | <code>string</code> |
| value | <code>string</code> |

**Example**  
```js
const { arrz } = require("./index.js")
let sampleInput = [{
status: "to do",
problem: "we actually solve our problems best by looking at how other people solved them - segment each feature",
whatshouldbe: "it should be easier to develop as a whole application but that's actually quite difficult - so segment each component and make sure you test utilizing good practices",
whatactuallyis: "there's no like, database of previous problems and how people solved them, right? also, what is your current process",
hypothesis: "like, what if i wanted to start my own business, how would i do that?",
plan: "test better, when you develop, i think it would also be great actually to have an effectiveness scale - what one task really helped you?"
}, { status: "doing", problem: "we need to focus on one thing at a time", whatshouldbe: "we should be able to do that easily", whatactuallyis: "its quite difficult", hypothesis: "develop modules", plan: "make things very clear and simple" }]
let output = arrz.countByCondition(sampleInput, "status", "to do")
console.log("🚀 ~ file: playground.js ~ line 11 ~ output", output)
```
<a name="filterValues"></a>

## filterValues(array, keyword, arrOfKeys) ⇒ <code>array</code>
**Kind**: global function  
**Returns**: <code>array</code> - of objects  
**Date**: 2022-02-17  
**Author**: zen-out  

| Param     | Type                |
|-----------|---------------------|
| array     | <code>array</code>  |
| keyword   | <code>string</code> |
| arrOfKeys | <code>array</code>  |

**Example**  
```js
const { arrz } = require("./index.js")
let sampleInput = [{
status: "to do",
problem: "we actually solve our problems best by looking at how other people solved them - segment each feature",
whatshouldbe: "it should be easier to develop as a whole application but that's actually quite difficult - so segment each component and make sure you test utilizing good practices",
whatactuallyis: "there's no like, database of previous problems and how people solved them, right? also, what is your current process",
hypothesis: "like, what if i wanted to start my own business, how would i do that?",
plan: "test better, when you develop, i think it would also be great actually to have an effectiveness scale - what one task really helped you?"
}, { status: "doing", problem: "we need to focus on one thing at a time", whatshouldbe: "we should be able to do that easily", whatactuallyis: "its quite difficult", hypothesis: "develop modules", plan: "make things very clear and simple" }]
let output = arrz.filterValues(sampleInput, "segment", ["problem"])
console.log("🚀 ~ file: playground.js ~ line 11 ~ output", output)
```
<a name="sortAsc"></a>

## sortAsc(array, property, type) ⇒ <code>array</code>
**Kind**: global function  
**Returns**: <code>array</code> - of objects  
**Date**: 2022-02-17  
**Author**: zen-out  

| Param    | Type                | Description       |
|----------|---------------------|-------------------|
| array    | <code>array</code>  |                   |
| property | <code>string</code> |                   |
| type     | <code>string</code> | (date) - optional |

**Example**  
```js
const { arrz } = require("./index.js")
let sampleInput = [{
created: new Date(2020, 12, 1),
status: "to do",
problem: "we actually solve our problems best by looking at how other people solved them - segment each feature",
}, { created: new Date(2019, 12, 1), status: "doing", problem: "we need to focus on one thing at a time" }]
let output = arrz.sortAsc(sampleInput, "created", "date")
console.log("🚀 ~ file: playground.js ~ line 11 ~ output", output)
```
<a name="sortDesc"></a>

## sortDesc(array, property) ⇒ <code>array</code>
**Kind**: global function  
**Returns**: <code>array</code> - of objects  
**Date**: 2022-02-17  
**Author**: zen-out  

| Param    | Type                |
|----------|---------------------|
| array    | <code>array</code>  |
| property | <code>string</code> |

**Example**  
```js
const { arrz } = require("./index.js")
let sampleInput = [{
seconds: 500,
created: new Date(2020, 12, 1),
status: "to do",
problem: "we actually solve our problems best by looking at how other people solved them - segment each feature",
}, { seconds: 1000, created: new Date(2019, 12, 1), status: "doing", problem: "we need to focus on one thing at a time" }]
let output = arrz.sortDesc(sampleInput, "seconds", "integer")
console.log("🚀 ~ file: playground.js ~ line 11 ~ output", output)
```
<a name="contains"></a>

## contains(array, property, value) ⇒ <code>array</code>
**Kind**: global function  
**Returns**: <code>array</code> - of objects  
**Date**: 2022-02-17  
**Author**: zen-out  

| Param    | Type                |
|----------|---------------------|
| array    | <code>array</code>  |
| property | <code>string</code> |
| value    | <code>string</code> |

**Example**  
```js
const { arrz } = require("./index.js")
let sampleInput = [{
seconds: 500,
created: new Date(2020, 12, 1),
status: "to do",
problem: "we actually solve our problems best by looking at how other people solved them - segment each feature",
}, { seconds: 1000, created: new Date(2019, 12, 1), status: "doing", problem: "we need to focus on one thing at a time" }]
let output = arrz.contains(sampleInput, "seconds", 500)
```
<a name="doesNotContain"></a>

## doesNotContain(array, property, value) ⇒ <code>array</code>
**Kind**: global function  
**Returns**: <code>array</code> - of objects  
**Date**: 2022-02-17  
**Author**: zen-out  

| Param    | Type                |
|----------|---------------------|
| array    | <code>array</code>  |
| property | <code>string</code> |
| value    | <code>string</code> |

**Example**  
```js
const { arrz } = require("./index.js")
let sampleInput = [{
seconds: 500,
created: new Date(2020, 12, 1),
status: "to do",
problem: "we actually solve our problems best by looking at how other people solved them - segment each feature",
}, { seconds: 1000, created: new Date(2019, 12, 1), status: "doing", problem: "we need to focus on one thing at a time" }]
let output = arrz.doesNotContain(sampleInput, "seconds", 500)
```
<a name="filterAndSort"></a>

## filterAndSort(data, object, sortValue, sortType, asc, limit) ⇒ <code>array</code>
**Kind**: global function  
**Date**: 2022-02-17  

| Param     | Type                 | Default           |
|-----------|----------------------|-------------------|
| data      | <code>array</code>   |                   |
| object    | <code>object</code>  |                   |
| sortValue | <code>string</code>  |                   |
| sortType  | <code>string</code>  |                   |
| asc       | <code>boolean</code> | <code>true</code> |
| limit     | <code>number</code>  |                   |

**Example**  
```js
const { arrz } = require("./index.js")
let sampleInput = [{
seconds: 500,
created: new Date(2020, 12, 1),
status: "to do",
problem: "we actually solve our problems best by looking at how other people solved them - segment each feature",
}, { seconds: 1000, created: new Date(2019, 12, 1), status: "doing", problem: "we need to focus on one thing at a time" }]
let output = arrz.filterAndSort(sampleInput, { status: "to do" }, "seconds", "number", true, 4)
console.log("🚀 ~ file: playground.js ~ line 9 ~ output", output)
```
<a name="group"></a>

## group(data, groupByCondition) ⇒ <code>array</code>
* @example
const { arrz } = require("./index.js")
let sampleInput = [{
seconds: 500,
created: new Date(2020, 12, 1),
status: "to do",
problem: "we actually solve our problems best by looking at how other people solved them - segment each feature",
}, { seconds: 1000, created: new Date(2019, 12, 1), status: "doing", problem: "we need to focus on one thing at a time" }]
let output = arrz.group(sampleInput, "status")
console.log("🚀 ~ file: playground.js ~ line 9 ~ output", output)

**Kind**: global function  
**Date**: 2022-03-06  
**Author**: zen-out  

| Param            | Type                |
|------------------|---------------------|
| data             | <code>array</code>  |
| groupByCondition | <code>string</code> |
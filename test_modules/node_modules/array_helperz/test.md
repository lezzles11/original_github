[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)![NPM Downloads](https://img.shields.io/npm/dw/array_helperz)[![here]()]()
<a name="ArrayOfObjectsHelper"></a>

## ArrayOfObjectsHelper
**Kind**: global class  
**Date**: 2022-03-06  
**Author**: zen-out  

* [ArrayOfObjectsHelper](#ArrayOfObjectsHelper)
    * [new ArrayOfObjectsHelper()](#new_ArrayOfObjectsHelper_new)
    * [.trimArr(arr)](#ArrayOfObjectsHelper+trimArr) ⇒ <code>array</code>
    * [.countByCondition(array, key, value)](#ArrayOfObjectsHelper+countByCondition) ⇒ <code>number</code>
    * [.filterValues(array, keyword, arrOfKeys)](#ArrayOfObjectsHelper+filterValues) ⇒ <code>array</code>
    * [.sortAsc(array, property)](#ArrayOfObjectsHelper+sortAsc) ⇒ <code>array</code>
    * [.sortDesc(array, property)](#ArrayOfObjectsHelper+sortDesc) ⇒ <code>array</code>
    * [.contains(array, property)](#ArrayOfObjectsHelper+contains) ⇒ <code>array</code>
    * [.doesNotContain(array, property)](#ArrayOfObjectsHelper+doesNotContain) ⇒ <code>array</code>
    * [.filterAndSort(data, object, sortValue, sortType, asc, limit)](#ArrayOfObjectsHelper+filterAndSort) ⇒ <code>any</code>
    * [.group(data, groupByCondition)](#ArrayOfObjectsHelper+group) ⇒ <code>any</code>

<a name="new_ArrayOfObjectsHelper_new"></a>

### new ArrayOfObjectsHelper()
new arrz = new ArrayOfObjectsHelper

<a name="ArrayOfObjectsHelper+trimArr"></a>

### arrayOfObjectsHelper.trimArr(arr) ⇒ <code>array</code>
trims array values

**Kind**: instance method of [<code>ArrayOfObjectsHelper</code>](#ArrayOfObjectsHelper)  
**Date**: 2021-12-19  
**Author**: zen-out  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| arr | <code>array</code> | 

<a name="ArrayOfObjectsHelper+countByCondition"></a>

### arrayOfObjectsHelper.countByCondition(array, key, value) ⇒ <code>number</code>
**Kind**: instance method of [<code>ArrayOfObjectsHelper</code>](#ArrayOfObjectsHelper)  
**Returns**: <code>number</code> - of objects that meet that condition  
**Date**: 2022-02-17  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| array | <code>any</code> | 
| key | <code>string</code> | 
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
<a name="ArrayOfObjectsHelper+filterValues"></a>

### arrayOfObjectsHelper.filterValues(array, keyword, arrOfKeys) ⇒ <code>array</code>
**Kind**: instance method of [<code>ArrayOfObjectsHelper</code>](#ArrayOfObjectsHelper)  
**Returns**: <code>array</code> - of objects  
**Date**: 2022-02-17  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| array | <code>array</code> | 
| keyword | <code>any</code> | 
| arrOfKeys | <code>any</code> | 

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
<a name="ArrayOfObjectsHelper+sortAsc"></a>

### arrayOfObjectsHelper.sortAsc(array, property) ⇒ <code>array</code>
**Kind**: instance method of [<code>ArrayOfObjectsHelper</code>](#ArrayOfObjectsHelper)  
**Returns**: <code>array</code> - of objects  
**Date**: 2022-02-17  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| array | <code>array</code> | 
| property | <code>any</code> | 

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
<a name="ArrayOfObjectsHelper+sortDesc"></a>

### arrayOfObjectsHelper.sortDesc(array, property) ⇒ <code>array</code>
**Kind**: instance method of [<code>ArrayOfObjectsHelper</code>](#ArrayOfObjectsHelper)  
**Returns**: <code>array</code> - of objects  
**Date**: 2022-02-17  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| array | <code>array</code> | 
| property | <code>any</code> | 

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
<a name="ArrayOfObjectsHelper+contains"></a>

### arrayOfObjectsHelper.contains(array, property) ⇒ <code>array</code>
**Kind**: instance method of [<code>ArrayOfObjectsHelper</code>](#ArrayOfObjectsHelper)  
**Returns**: <code>array</code> - of objects  
**Date**: 2022-02-17  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| array | <code>array</code> | 
| property | <code>any</code> | 

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
<a name="ArrayOfObjectsHelper+doesNotContain"></a>

### arrayOfObjectsHelper.doesNotContain(array, property) ⇒ <code>array</code>
**Kind**: instance method of [<code>ArrayOfObjectsHelper</code>](#ArrayOfObjectsHelper)  
**Returns**: <code>array</code> - of objects  
**Date**: 2022-02-17  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| array | <code>array</code> | 
| property | <code>any</code> | 

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
<a name="ArrayOfObjectsHelper+filterAndSort"></a>

### arrayOfObjectsHelper.filterAndSort(data, object, sortValue, sortType, asc, limit) ⇒ <code>any</code>
**Kind**: instance method of [<code>ArrayOfObjectsHelper</code>](#ArrayOfObjectsHelper)  
**Date**: 2022-02-17  

| Param | Type | Default |
| --- | --- | --- |
| data | <code>any</code> |  | 
| object | <code>any</code> |  | 
| sortValue | <code>any</code> |  | 
| sortType | <code>any</code> |  | 
| asc | <code>any</code> | <code>true</code> | 
| limit | <code>any</code> |  | 

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
<a name="ArrayOfObjectsHelper+group"></a>

### arrayOfObjectsHelper.group(data, groupByCondition) ⇒ <code>any</code>
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

**Kind**: instance method of [<code>ArrayOfObjectsHelper</code>](#ArrayOfObjectsHelper)  
**Date**: 2022-03-06  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| data | <code>any</code> | 
| groupByCondition | <code>any</code> |
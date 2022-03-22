# array_helperz
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
    let func = arrz.filterWithFuncObjectOrString(arrTwo, getToDoFunction)
    let obj = arrz.filterWithFuncObjectOrString(arrTwo, { status: "to do" })
    let keyValue = arrz.filterWithFuncObjectOrString(arrTwo, "status", "to do")
    let key = arrz.filterWithFuncObjectOrString(arrTwo, "status")
let arrOne = [{
        title: 'I want to be free. Free to live,  and to find my own way,  to love,  or to be alone,  but at least it is my choice,  and I am so tired of not having choices,  so scared of the years rushing past beneath my feet. I do not want to die as I’ve lived,  which is no life at all.',
        status: 'to do',
        id: 1
    },
    {
        title: 'Because we loved each other too much and found each other too interesting. And I love that about humanity,  and in fact it’s the very reason I root for us to survive—because we are so stupid about each other.',
        status: 'doing',
        id: 2
    },
    {
        title: 'But a life without art,  without wonder,  without beautiful things—she would go mad. She has gone mad. What she needs are stories. Stories are a way to preserve one’s self. To be remembered. And to forget.',
        status: 'doing',
        id: 3
    }
]
let arrTwo = [
    { name: 'Whatever', status: 'doing', problem_id: 2, id: 1 },
    { name: 'is', status: 'doing', problem_id: 2, id: 2 },
    { name: 'people', status: 'to do', problem_id: 2, id: 3 }
]

let arr1Child = { data: arrOne, key: "id" }
let arr2 = {
    data: arrTwo,
    key: "problem_id",
    value: 2
}
let merged = arrz.mergeByKeys(arrOne, arr2)
console.log("🚀 ~ file: playground.js ~ line 48 ~ merged", merged)
let arr2Child = { data: arrTwo, key: "problem_id" }
let result = arrz.makeChildOfAnother(arr1Child, arr2Child)
let arr1GetOne = { data: arrOne, key: "id", value: 2 }
console.log("🚀 ~ file: playground.js ~ line 52 ~ result", result)
let arr2GetOne = { data: arrTwo, key: "problem_id", value: 2 }
let result2 = arrz.getOneMakeChildOfAnother(arr1GetOne, arr2GetOne)
console.log("🚀 ~ file: playground.js ~ line 54 ~ result2", result2)
let testArr = [{
        id: 1,
        hello: "whatsup"
    },
    {
        id: 2,
        hello: "whatsup"
    },
    {
        id: 1,
        hello: "whatsup"
    },
]

    let newArr = getUnique(testArr, "id")
```
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Downloads](https://img.shields.io/npm/dw/array_helperz)
## Instructions: 
```npm install array_helperz ``` 
 ``` const array_helperz =  require('array_helperz')```

## If utilizing in html...: 
```<script src="./node_modules/array_helperz/index.js"></script> ``` 
 ``` const output =  array_helperz.method(parameter)```

## Functions

<dl>
<dt><a href="#filterWithFuncObjectOrString">filterWithFuncObjectOrString(array, object, value)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#trimArr">trimArr(arr)</a> ⇒ <code>array</code></dt>
<dd><p>trims array values</p>
</dd>
<dt><a href="#countByCondition">countByCondition(array, key, value)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#search">search(array, string)</a> ⇒ <code>array</code></dt>
<dd></dd>
<dt><a href="#filterItems">filterItems(array, keyword, arrOfKeys)</a> ⇒ <code>array</code></dt>
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
<dt><a href="#getUnique">getUnique(arr, key)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#intersection">intersection(nums1, nums2)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#mergeByKeys">mergeByKeys(arr, object)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#makeChildOfAnother">makeChildOfAnother(arr, arr2)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#getOneMakeChildOfAnother">getOneMakeChildOfAnother(arr, arr2)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#makeChildOfAnotherTest">makeChildOfAnotherTest()</a> ⇒ <code>any</code></dt>
<dd><p>描述</p>
</dd>
</dl>

<a name="filterWithFuncObjectOrString"></a>

## filterWithFuncObjectOrString(array, object, value) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-17  
**Author**: zen-out  

| Param  | Type             | Description |
|--------|------------------|-------------|
| array  | <code>any</code> |             |
| object | <code>any</code> |             |
| value  | <code>any</code> | = undefined |

**Example**  
```js
let arrTwo = [
        { name: 'Because we loved each other too much and found each other too interesting. And I love that about humanity,  and in fact it’s the very reason I root for us to survive—because we are so stupid about each other.', status: 'doing', problem_id: 2, id: 1 },
        { name: 'I want to be free. Free to live,  and to find my own way,  to love,  or to be alone,  but at least it is my choice,  and I am so tired of not having choices,  so scared of the years rushing past beneath my feet. I do not want to die as I’ve lived,  which is no life at all.', status: 'doing', problem_id: 2, id: 2 },
        { name: 'But a life without art,  without wonder,  without beautiful things—she would go mad. She has gone mad. What she needs are stories. Stories are a way to preserve one’s self. To be remembered. And to forget.', status: 'to do', problem_id: 2, id: 3 }
    ]
    function getToDo(object) {
        if (object.status === "to do") {
            return object;
        }
    }
    let func = filterWithFuncObjectOrString(arrTwo, getToDo)
    let obj = filterWithFuncObjectOrString(arrTwo, { status: "to do" })
    let keyValue = filterWithFuncObjectOrString(arrTwo, "status", "to do")
    let key = filterWithFuncObjectOrString(arrTwo, "status")
```
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
<a name="search"></a>

## search(array, string) ⇒ <code>array</code>
**Kind**: global function  
**Date**: 2022-03-18  
**Author**: zen-out  

| Param  | Type                |
|--------|---------------------|
| array  | <code>array</code>  |
| string | <code>string</code> |

**Example**  
```js
var data = [{
        "id": "1",
        "name": "Ali",
        "BOD": "29/10/2055",
        "type": "primary",
        "email": null,
        "mobile": "010100000000",
        "notes": ["note1", "note2.nett", "note3"]
    },
    {
        "id": "2",
        "name": "Tie",
        "BOD": "29/10/2055",
        "type": "primary",
        "email": "b@v.net",
        "mobile": "0100000000",
        "notes": ["note4", "note5", "note6"]
    }
];
// search examples .
console.log("found", search(data, ".net")); //expected data[0] data[1]
```
<a name="filterItems"></a>

## filterItems(array, keyword, arrOfKeys) ⇒ <code>array</code>
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

<a name="getUnique"></a>

## getUnique(arr, key) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-18  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| arr   | <code>any</code> |
| key   | <code>any</code> |

**Example**  
```js
let testArr = [{
        id: 1,
        hello: "whatsup"
    },
    {
        id: 2,
        hello: "whatsup"
    },
    {
        id: 1,
        hello: "whatsup"
    },
]

export function testUnique() {
    let newArr = getUnique(testArr, "id")
    console.log(newArr)
}
```
<a name="intersection"></a>

## intersection(nums1, nums2) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-22  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| nums1 | <code>any</code> |
| nums2 | <code>any</code> |

**Example**  
```js
let expected_keys =["hello"]
    let actual_keys =["hello", "whatsup"]
    let merged = intersection(expected_keys, actual_keys)
    merged will be ["hello"]
```
<a name="mergeByKeys"></a>

## mergeByKeys(arr, object) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-15  
**Author**: zen-out  

| Param  | Type                | Description                                                       |
|--------|---------------------|-------------------------------------------------------------------|
| arr    | <code>any</code>    |                                                                   |
| object | <code>object</code> | {data: arr, key: "problem_id"} -> reference to the joining to arr |

**Example**  
```js
let arr1Child2 = { data: arr, key: "id" }
let arr22 = {
    data: arr2,
    key: "id",
}
let merged2 = arrz.mergeByKeys(arr1Child2, arr22)
```
<a name="makeChildOfAnother"></a>

## makeChildOfAnother(arr, arr2) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-15  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| arr   | <code>any</code> |
| arr2  | <code>any</code> |

**Example**  
```js
let arrOne = [{
            title: 'I want to be free. Free to live,  and to find my own way,  to love,  or to be alone,  but at least it is my choice,  and I am so tired of not having choices,  so scared of the years rushing past beneath my feet. I do not want to die as I’ve lived,  which is no life at all.',
            status: 'to do',
            id: 1
        },
        {
            title: 'Because we loved each other too much and found each other too interesting. And I love that about humanity,  and in fact it’s the very reason I root for us to survive—because we are so stupid about each other.',
            status: 'doing',
            id: 2
        },
        {
            title: 'But a life without art,  without wonder,  without beautiful things—she would go mad. She has gone mad. What she needs are stories. Stories are a way to preserve one’s self. To be remembered. And to forget.',
            status: 'doing',
            id: 3
        }
    ]
    let arrTwo = [
        { name: 'Whatever', status: 'doing', problem_id: 2, id: 1 },
        { name: 'is', status: 'doing', problem_id: 2, id: 2 },
        { name: 'people', status: 'to do', problem_id: 2, id: 3 }
    ]
    let arr1 = { data: arrOne, key: "id" }
    let arr2 = { data: arrTwo, key: "problem_id" }
    let result = makeChildOfAnother(arr1, arr2)
    console.log(result)
output
[
  {
    title: 'I want to be free. Free to live,  and to find my own way,  to love,  or to be alone,  but at least it is my choice,  and I am so tired of not having choices,  so scared of the years rushing past beneath my feet. I do not want to die as I’ve lived,  which is no life at all.',
    status: 'to do',
    id: 1,
    child: []
  },
  {
    title: 'Because we loved each other too much and found each other too interesting. And I love that about humanity,  and in fact it’s the very reason I root for us to survive—because we are so stupid about each other.',
    status: 'doing',
    id: 2,
    child: [ [Object], [Object], [Object] ]
  },
  {
    title: 'But a life without art,  without wonder,  without beautiful things—she would go mad. She has gone mad. What she needs are stories. Stories are a way to preserve one’s self. To be remembered. And to forget.',
    status: 'doing',
    id: 3,
    child: []
  }
]
```
<a name="getOneMakeChildOfAnother"></a>

## getOneMakeChildOfAnother(arr, arr2) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-15  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| arr   | <code>any</code> |
| arr2  | <code>any</code> |

**Example**  
```js
let arrOne = [{
            title: 'I want to be free. Free to live,  and to find my own way,  to love,  or to be alone,  but at least it is my choice,  and I am so tired of not having choices,  so scared of the years rushing past beneath my feet. I do not want to die as I’ve lived,  which is no life at all.',
            status: 'to do',
            id: 1
        },
        {
            title: 'Because we loved each other too much and found each other too interesting. And I love that about humanity,  and in fact it’s the very reason I root for us to survive—because we are so stupid about each other.',
            status: 'doing',
            id: 2
        },
        {
            title: 'But a life without art,  without wonder,  without beautiful things—she would go mad. She has gone mad. What she needs are stories. Stories are a way to preserve one’s self. To be remembered. And to forget.',
            status: 'doing',
            id: 3
        }
    ]
    let arrTwo = [
        { name: 'Whatever', status: 'doing', problem_id: 2, id: 1 },
        { name: 'is', status: 'doing', problem_id: 2, id: 2 },
        { name: 'people', status: 'to do', problem_id: 2, id: 3 }
    ]

    let arr1GetOne = { data: arrOne, key: "id", value: 2 }
    let arr2GetOne = { data: arrTwo, key: "problem_id", value: 2 }
    let result2 = getOneMakeChildOfAnother(arr1GetOne, arr2GetOne)
    console.log(result2)
output
[
  {
    title: 'Because we loved each other too much and found each other too interesting. And I love that about humanity,  and in fact it’s the very reason I root for us to survive—because we are so stupid about each other.',
    status: 'doing',
    id: 2,
    child: [ [Object], [Object], [Object] ]
  }
]
```
<a name="makeChildOfAnotherTest"></a>

## makeChildOfAnotherTest() ⇒ <code>any</code>
描述

**Kind**: global function  
**Date**: 2022-03-15  
**Author**: zen-out  

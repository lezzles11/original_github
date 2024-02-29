# make_legit

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Downloads](https://img.shields.io/npm/dw/make_legit)
[Play with docs](https://zen-out.github.io/modules/make_legit.html)
## Instructions: 

```js
npm install make_legit
const make_legit =  require('make_legit')
```

## If utilizing in html...: 
```html
<script src="./node_modules/make_legit/index.js"></script>
<script> 
$(()=> { 
     const output =  make_legit.method(parameter)
 })
</script>
```
```js
    getType(any) // returns type
    trimObj(obj)
    trimArr(arr)
    clean(any)
    format(arr, "string")
    formatDate(any) // if not, will return undefined
    formatNumber(any) // if not, will return undefined
    formatArray(any) makes everything into an array 
    formatObject(any) 
    formatString(any)
    formatBoolean(makes into boolean)
    formatActualObject({public: "true"},{public: "boolean", edit: "date", } )
    let original = { id: 1, whatsup: "nothing" }
    let update = { id: 2, whatsup: "im pissed" }
    mergeWithOriginal(original, update)
```

## Functions

<dl>
<dt><a href="#trimObj">trimObj()</a> ⇒ <code>object</code></dt>
<dd></dd>
<dt><a href="#trimArr">trimArr()</a> ⇒ <code>array</code></dt>
<dd></dd>
<dt><a href="#clean">clean()</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#format">format()</a> ⇒ <code>any</code></dt>
<dd><p>format(data, type)</p>
</dd>
<dt><a href="#formatDate">formatDate()</a> ⇒ <code>date</code></dt>
<dd></dd>
<dt><a href="#formatNumber">formatNumber(data)</a> ⇒ <code>number</code></dt>
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
<dt><a href="#getObject">getObject(objectOrArray)</a> ⇒ <code>object</code></dt>
<dd><ol>
<li>If it&#39;s an array, will return the first item in array</li>
</ol>
</dd>
<dt><a href="#getType">getType(data)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#mergeWithOriginal">mergeWithOriginal()</a> ⇒ <code>object</code></dt>
<dd></dd>
</dl>

<a name="trimObj"></a>

## trimObj() ⇒ <code>object</code>
**Kind**: global function  
**Date**: 2022-03-03  
**Author**: zen-out  
**Example**  
```js
trimObj(obj)
```
<a name="trimArr"></a>

## trimArr() ⇒ <code>array</code>
**Kind**: global function  
**Date**: 2022-03-03  
**Author**: zen-out  
**Example**  
```js
trimArr(arr)
```
<a name="clean"></a>

## clean() ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-03  
**Example**  
```js
clean(data)
```
<a name="format"></a>

## format() ⇒ <code>any</code>
format(data, type)

**Kind**: global function  
**Date**: 2022-03-03  
**Example**  
```js
format("   arr ", "string")
```
<a name="formatDate"></a>

## formatDate() ⇒ <code>date</code>
**Kind**: global function  
**Date**: 2022-03-03  
**Author**: zen-out  
**Example**  
```js
formatDate(data)
```
<a name="formatNumber"></a>

## formatNumber(data) ⇒ <code>number</code>
**Kind**: global function  
**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| data | <code>any</code> | 

**Example**  
```js
formatNumber(data)
```
<a name="formatArray"></a>

## formatArray(data) ⇒ <code>array</code>
**Kind**: global function  
**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| data | <code>any</code> | 

**Example**  
```js
formatArray(data)
```
<a name="formatObject"></a>

## formatObject(data) ⇒ <code>object</code>
**Kind**: global function  
**Date**: 2022-03-03  

| Param | Type |
| --- | --- |
| data | <code>any</code> | 

**Example**  
```js
formatObject(data)
```
<a name="formatString"></a>

## formatString(data) ⇒ <code>string</code>
formatString(data)

**Kind**: global function  
**Date**: 2022-03-03  

| Param | Type |
| --- | --- |
| data | <code>any</code> | 

<a name="formatBoolean"></a>

## formatBoolean(data) ⇒ <code>boolean</code>
**Kind**: global function  
**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| data | <code>any</code> | 

**Example**  
```js
formatBoolean(data)
```
<a name="formatActualObject"></a>

## formatActualObject(actual, expected) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-22  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| actual | <code>any</code> | 
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

## getObject(objectOrArray) ⇒ <code>object</code>
1. If it's an array, will return the first item in array

**Kind**: global function  
**Date**: 2022-03-10  
**Author**: zen-out  

| Param | Type |
| --- | --- |
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

| Param | Type |
| --- | --- |
| data | <code>any</code> | 

**Example**  
```js
getType(data)
```
<a name="mergeWithOriginal"></a>

## mergeWithOriginal() ⇒ <code>object</code>
**Kind**: global function  
**Date**: 2022-03-22  
**Author**: zen-out  
**Example**  
```js
let original = { id: 1, whatsup: "nothing" }
    let update = { id: 2, whatsup: "im pissed" }
    let merged = mergeWithOriginal(original, update)
```

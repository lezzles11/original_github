hello intro
# module_name
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Downloads](https://img.shields.io/npm/dw/module_name)
## Instructions: 
```npm install module_name ``` 
 ``` const module_name =  require('module_name')```

## If utilizing in html...: 
```<script src="https://cdn.jsdelivr.net/npm/module_name/dist/index.js"></script> ``` 
 ``` const output =  module_name.method(parameter)```
[![here](video_link)](video_link)
<a name="EffectiveKnex"></a>

## EffectiveKnex
**Kind**: global class  
**Date**: 2022-03-02  

* [EffectiveKnex](#EffectiveKnex)
    * [new EffectiveKnex()](#new_EffectiveKnex_new)
    * [.getOne(table)](#EffectiveKnex+getOne) ⇒ <code>any</code>
    * [.getAll(knex,)](#EffectiveKnex+getAll) ⇒ <code>array</code>
    * [.del(table)](#EffectiveKnex+del) ⇒ <code>integer</code>
    * [.cleanPostObject(checkObj[&quot;id&quot;)](#EffectiveKnex+cleanPostObject) ⇒ <code>any</code>
    * [.cleanUpdateObject(knex, table, checkObj, callbacks)](#EffectiveKnex+cleanUpdateObject) ⇒ <code>any</code>
    * [.getInfo(knex, table, type)](#EffectiveKnex+getInfo) ⇒ <code>any</code>
    * [.getObject()](#EffectiveKnex+getObject) ⇒ <code>any</code>
    * [.makeData(knex, table)](#EffectiveKnex+makeData) ⇒ <code>any</code>
    * [.postFakeData(knex, table)](#EffectiveKnex+postFakeData) ⇒ <code>any</code>

<a name="new_EffectiveKnex_new"></a>

### new EffectiveKnex()
let effectiveKnex = new effectiveKnex()

<a name="EffectiveKnex+getOne"></a>

### effectiveKnex.getOne(table) ⇒ <code>any</code>
1. returns one instance of item, given id

**Kind**: instance method of [<code>EffectiveKnex</code>](#EffectiveKnex)  
**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| table | <code>any</code> | 

**Example**  
```js
let getOne = getOne(knex, table, id)
```
<a name="EffectiveKnex+getAll"></a>

### effectiveKnex.getAll(knex,) ⇒ <code>array</code>
getAll(knex, table)

**Kind**: instance method of [<code>EffectiveKnex</code>](#EffectiveKnex)  
**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type | Description |
| --- | --- | --- |
| knex, | <code>any</code> | table |

**Example**  
```js
let all = getAll(knex, "hourglass")
```
<a name="EffectiveKnex+del"></a>

### effectiveKnex.del(table) ⇒ <code>integer</code>
del(knex, table, id)

**Kind**: instance method of [<code>EffectiveKnex</code>](#EffectiveKnex)  
**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| table | <code>any</code> | 

<a name="EffectiveKnex+cleanPostObject"></a>

### effectiveKnex.cleanPostObject(checkObj[&quot;id&quot;) ⇒ <code>any</code>
* 1. Trims object
2. If it has id, will delete it 
3. Gets table (only matches with values that has table)
4. Gets keys from that table
5. Loops through array 
6. If there is a callback passed in and the key matches the column, then it will assign that to the new object
7. If the column type doesn't match the column value

**Kind**: instance method of [<code>EffectiveKnex</code>](#EffectiveKnex)  
**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| checkObj["id" | <code>any</code> | 

<a name="EffectiveKnex+cleanUpdateObject"></a>

### effectiveKnex.cleanUpdateObject(knex, table, checkObj, callbacks) ⇒ <code>any</code>
* 1. Trims object
2. If it has id, will delete it
3. Gets table (only matches with values that has table)
4. Gets keys from that table
5. Loops through array
6. If there is a callback passed in and the key matches the column, then it will assign that to the new object
7. If the column type doesn't match the column value

**Kind**: instance method of [<code>EffectiveKnex</code>](#EffectiveKnex)  
**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| knex | <code>any</code> | 
| table | <code>any</code> | 
| checkObj | <code>any</code> | 
| callbacks | <code>any</code> | 

<a name="EffectiveKnex+getInfo"></a>

### effectiveKnex.getInfo(knex, table, type) ⇒ <code>any</code>
1. Has a dictionary - 
2. Gets knex(table).columnInfo()
3. if property isn't created 
4. Push it into array called tableColumns
5. If third parameter is object, will return key and value pairs of column: type. Else, if third parameter is array, will return an array of the key values

**Kind**: instance method of [<code>EffectiveKnex</code>](#EffectiveKnex)  
**Date**: 2022-02-16  
**Author**: zen-out  

| Param | Type | Default |
| --- | --- | --- |
| knex | <code>any</code> |  | 
| table | <code>any</code> |  | 
| type | <code>any</code> | <code>&quot;object&quot;</code> | 

**Example**  
```js
this.getTableInfo(knex, "hourglass", "object")
// returns {emails: string... }
```
<a name="EffectiveKnex+getObject"></a>

### effectiveKnex.getObject() ⇒ <code>any</code>
Checks if object or array. If array, returns first item, else, will return object

**Kind**: instance method of [<code>EffectiveKnex</code>](#EffectiveKnex)  
**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| Array.isArray(objectOrArray | <code>any</code> | 

<a name="EffectiveKnex+makeData"></a>

### effectiveKnex.makeData(knex, table) ⇒ <code>any</code>
makeData(knex, table, number)
Will create fake data

**Kind**: instance method of [<code>EffectiveKnex</code>](#EffectiveKnex)  
**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| knex | <code>any</code> | 
| table | <code>any</code> | 

<a name="EffectiveKnex+postFakeData"></a>

### effectiveKnex.postFakeData(knex, table) ⇒ <code>any</code>
Will insert data, given knex, table, and unmber of items to insert

**Kind**: instance method of [<code>EffectiveKnex</code>](#EffectiveKnex)  
**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| knex | <code>any</code> | 
| table | <code>any</code> |
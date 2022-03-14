![NPM Downloads](https://img.shields.io/npm/dw/effective_knex)

# Purpose

To be able to quickly render a knex post, and match whatever value that you are trying to post to your database 

User Requirements: 

- Users will be able to be confident in their posts (especially if they have more than one definition for a specific item - e.g., could be "easy" in the UI but the label in the database would be 1)
- Users will be able to feel confident in their updates 


## Directions

See example here - [example](https://github.com/lezzles11/knex_cleandata/tree/master/playground.js)

1. Install the package 

```
npm install knex_cleandata
```

2. Instantiate it in a javascript file

```
const {knexCleanData} = require("knex_cleandata")
```

3. Pass in object configuration 

```
1. knex database
2. table name
3. callback functions (specific ones that you want)
See example here - [example](https://github.com/lezzles11/knex_cleandata/tree/master/callbackExample.js)
4. object to post 

    let data = await cleanKnexPost.init({ knex: knex, table: "datetime", callbacks: callbacks, object: getObject })

```

4. Enjoy! 

## EffectiveKnex
    *[getOne(table)](#EffectiveKnex+getOne) ⇒ <code>any</code>
    *[getAll(knex,)](#EffectiveKnex+getAll) ⇒ <code>array</code>
    *[del(table)](#EffectiveKnex+del) ⇒ <code>integer</code>
    *[cleanPostObject(checkObj[&quot;id&quot;)](#EffectiveKnex+cleanPostObject) ⇒ <code>any</code>
    *[cleanUpdateObject(knex, table, checkObj, callbacks)](#EffectiveKnex+cleanUpdateObject) ⇒ <code>any</code>
    *[getInfo(knex, table, type)](#EffectiveKnex+getInfo) ⇒ <code>any</code>
    *[getObject()](#EffectiveKnex+getObject) ⇒ <code>any</code>
    *[makeData(knex, table)](#EffectiveKnex+makeData) ⇒ <code>any</code>
    *[postFakeData(knex, table)](#EffectiveKnex+postFakeData) ⇒ <code>any</code>

<a name="new_EffectiveKnex_new"></a>

### new EffectiveKnex()
let effectiveKnex = new effectiveKnex()

<a name="EffectiveKnex+getOne"></a>

### getOne(table) ⇒ <code>any</code>
1. returns one instance of item, given id


**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| table | <code>any</code> |

<a name="EffectiveKnex+getAll"></a>

### getAll(knex,) ⇒ <code>array</code>
getAll(knex, table)


**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type             | Description |
|-------|------------------|-------------|
| knex, | <code>any</code> | table       |

<a name="EffectiveKnex+del"></a>

### del(table) ⇒ <code>integer</code>
del(knex, table, id)


**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| table | <code>any</code> |

<a name="EffectiveKnex+cleanPostObject"></a>

### cleanPostObject(checkObj[&quot;id&quot;) ⇒ <code>any</code>
* 1. Trims object
2. If it has id, will delete it 
3. Gets table (only matches with values that has table)
4. Gets keys from that table
5. Loops through array 
6. If there is a callback passed in and the key matches the column, then it will assign that to the new object
7. If the column type doesn't match the column value


**Date**: 2022-03-03  
**Author**: zen-out  

| Param         | Type             |
|---------------|------------------|
| checkObj["id" | <code>any</code> |

<a name="EffectiveKnex+cleanUpdateObject"></a>

### cleanUpdateObject(knex, table, checkObj, callbacks) ⇒ <code>any</code>
* 1. Trims object
2. If it has id, will delete it
3. Gets table (only matches with values that has table)
4. Gets keys from that table
5. Loops through array
6. If there is a callback passed in and the key matches the column, then it will assign that to the new object
7. If the column type doesn't match the column value


**Date**: 2022-03-03  
**Author**: zen-out  

| Param     | Type             |
|-----------|------------------|
| knex      | <code>any</code> |
| table     | <code>any</code> |
| checkObj  | <code>any</code> |
| callbacks | <code>any</code> |

<a name="EffectiveKnex+getInfo"></a>

### getInfo(knex, table, type) ⇒ <code>any</code>
1. Has a dictionary - 
2. Gets knex(table).columnInfo()
3. if property isn't created 
4. Push it into array called tableColumns
5. If third parameter is object, will return key and value pairs of column: type. Else, if third parameter is array, will return an array of the key values


**Date**: 2022-02-16  
**Author**: zen-out  

| Param | Type             | Default                         |
|-------|------------------|---------------------------------|
| knex  | <code>any</code> |                                 |
| table | <code>any</code> |                                 |
| type  | <code>any</code> | <code>&quot;object&quot;</code> |

**Example**  
```js
this.getTableInfo(knex, "hourglass", "object")
// returns {emails: string... }
```
<a name="EffectiveKnex+getObject"></a>

### getObject() ⇒ <code>any</code>
Checks if object or array. If array, returns first item, else, will return object


**Date**: 2022-03-03  
**Author**: zen-out  

| Param                       | Type             |
|-----------------------------|------------------|
| Array.isArray(objectOrArray | <code>any</code> |

<a name="EffectiveKnex+makeData"></a>

### makeData(knex, table) ⇒ <code>any</code>
makeData(knex, table, number)
Will create fake data


**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| knex  | <code>any</code> |
| table | <code>any</code> |

<a name="EffectiveKnex+postFakeData"></a>

### postFakeData(knex, table) ⇒ <code>any</code>
Will insert data, given knex, table, and unmber of items to insert


**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| knex  | <code>any</code> |
| table | <code>any</code> |


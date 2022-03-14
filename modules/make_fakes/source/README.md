# make_fakes
[make_fakes - start here](https://zen-out.github.io/packages/make_fakes)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Downloads](https://img.shields.io/npm/dw/make_fakes)
```js
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

let getMany = make_fakes.createMany(hourglass, 2, true, { title: "hello" })
console.log("🚀 ~ file: index.js ~ line 17 ~ getOne", getMany)

let getOneDirty = make_fakes.createOneDirty(hourglass, { title: "hello" })
console.log("🚀 ~ file: index.js ~ line 23 ~ getOneDirty", getOneDirty)

let getManyDirty = make_fakes.createManyDirty(hourglass, 2, true, { title: "hello" })
console.log("🚀 ~ file: index.js ~ line 23 ~ getOneDirty", getManyDirty)
```

## Instructions: 
```npm install make_fakes ``` 
 ``` const make_fakes =  require('make_fakes')```

## If utilizing in html...: 
```<script src="https://cdn.jsdelivr.net/npm/make_fakes/dist/index.js"></script> ``` 
 ``` const output =  make_fakes.method(parameter)```
[![here](https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/make_fakes.png)](https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/make_fakes.png)
## Functions

<dl>
<dt><a href="#createOne">createOne(object, object)</a> ⇒ <code>object</code></dt>
<dd><p>make_fakes.createOne(object)</p>
</dd>
<dt><a href="#createOneDirty">createOneDirty(object, object)</a> ⇒ <code>object</code></dt>
<dd><p>Returns realistic fake dirty data
boolean -&gt; boolean to string or undefined 
number -&gt; stringed number, float, undefined 
email -&gt; string, number, undefined
password -&gt; &quot; &quot;, undefined, paragraph,
past_date -&gt; dateInput format, LL format, undefined
future_date -&gt; L format, l format, undefined
number_date -&gt; dateInput format, ll format
phone -&gt; future_date, boolean, undefined
image -&gt; string, &quot; &quot;, undefined</p>
</dd>
<dt><a href="#createMany">createMany(object, length, addId, things)</a> ⇒ <code>array</code></dt>
<dd></dd>
<dt><a href="#createManyDirty">createManyDirty(object, length, addId, things)</a> ⇒ <code>array</code></dt>
<dd></dd>
</dl>

<a name="createOne"></a>

## createOne(object, object) ⇒ <code>object</code>
make_fakes.createOne(object)

**Kind**: global function  
**Date**: 2022-03-02  

| Param  | Type                |
|--------|---------------------|
| object | <code>object</code> |
| object | <code>object</code> |

**Example**  
```js
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
```
<a name="createOneDirty"></a>

## createOneDirty(object, object) ⇒ <code>object</code>
Returns realistic fake dirty data
boolean -> boolean to string or undefined 
number -> stringed number, float, undefined 
email -> string, number, undefined
password -> " ", undefined, paragraph,
past_date -> dateInput format, LL format, undefined
future_date -> L format, l format, undefined
number_date -> dateInput format, ll format
phone -> future_date, boolean, undefined
image -> string, " ", undefined

**Kind**: global function  
**Date**: 2022-03-02  

| Param  | Type                |
|--------|---------------------|
| object | <code>object</code> |
| object | <code>object</code> |

**Example**  
```js
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
```
<a name="createMany"></a>

## createMany(object, length, addId, things) ⇒ <code>array</code>
**Kind**: global function  
**Date**: 2022-03-08  
**Author**: zen-out  

| Param  | Type                 | Default            | Description |
|--------|----------------------|--------------------|-------------|
| object | <code>object</code>  |                    |             |
| length | <code>number</code>  | <code>1</code>     |             |
| addId  | <code>boolean</code> | <code>false</code> |             |
| things | <code>object</code>  |                    | to add      |

**Example**  
```js
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
let getMany = make_fakes.createMany(hourglass, 2, true, { title: "hello" })
console.log("🚀 ~ file: index.js ~ line 17 ~ getOne", getMany)
```
<a name="createManyDirty"></a>

## createManyDirty(object, length, addId, things) ⇒ <code>array</code>
**Kind**: global function  
**Date**: 2022-03-02  

| Param  | Type                 | Default            | Description |
|--------|----------------------|--------------------|-------------|
| object | <code>object</code>  |                    |             |
| length | <code>number</code>  | <code>1</code>     |             |
| addId  | <code>boolean</code> | <code>false</code> |             |
| things | <code>object</code>  |                    | to add      |

**Example**  
```js
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
let getManyDirty = make_fakes.createManyDirty(hourglass, 2, true, { title: "hello" })
console.log("🚀 ~ file: index.js ~ line 23 ~ getOneDirty", getManyDirty)
```
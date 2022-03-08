# Instructions: 
```npm install clear_concise_creative ``` 
 ``` const ccc =  require('clear_concise_creative')```
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Downloads](https://img.shields.io/npm/dw/clear_concise_creative)
## Functions

<dl>
<dt><a href="#deletePath">deletePath(path)</a> ⇒ <code>any</code></dt>
<dd><p>deletePath(&quot;./test/deleteThis2&quot;)
deletePath(&quot;./test/deleteThis2/delete.js&quot;)</p>
</dd>
<dt><a href="#writeJSON">writeJSON(filePath, object)</a></dt>
<dd><p>writeJSON(&#39;./db.json&#39;, array)
writeJSON(&#39;./db.json&#39;, object)</p>
</dd>
<dt><a href="#readJSON">readJSON(filePath)</a> ⇒ <code>object</code></dt>
<dd><p>let getJSON = readJSON(&quot;./db.json&quot;)</p>
</dd>
<dt><a href="#appendToJSON">appendToJSON(&quot;1:30PM&quot;)</a> ⇒ <code>any</code></dt>
<dd><ol>
<li>Grabs JSON from json file</li>
<li>If the key does not exist, then it will create a new key and assign the object </li>
<li>If the key does exist, and it is not an array </li>
<li>It will create an array and it will push the object into the array</li>
</ol>
</dd>
<dt><a href="#replaceJSON">replaceJSON(filePath, filePath)</a> ⇒ <code>any</code></dt>
<dd><ol>
<li>Reads from json file </li>
<li>Replaces object depeneding on array passed in</li>
</ol>
</dd>
<dt><a href="#getJSONObject">getJSONObject(filePath, arrDir)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#mergeJSONObject">mergeJSONObject(filePath, arrDir, updateObj)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#addToNestedJSON">addToNestedJSON(filePath, arrDir, addObj)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#writeFile">writeFile(type, &quot;string&quot;)</a> ⇒ <code>any</code></dt>
<dd><ol>
<li>Will format the type of data you have and then write to the file accordingly</li>
</ol>
</dd>
<dt><a href="#appendFile">appendFile(type, &quot;string&quot;)</a> ⇒ <code>any</code></dt>
<dd><ol>
<li>Formats data</li>
<li>Appends to file</li>
</ol>
</dd>
</dl>

<a name="deletePath"></a>

## deletePath(path) ⇒ <code>any</code>
deletePath("./test/deleteThis2")
deletePath("./test/deleteThis2/delete.js")

**Kind**: global function  
**Date**: 2022-03-04  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| path  | <code>any</code> |

<a name="writeJSON"></a>

## writeJSON(filePath, object)
writeJSON('./db.json', array)
writeJSON('./db.json', object)

**Kind**: global function  
**Date**: 2022-03-04  
**Author**: zen-out  

| Param    | Type             |
|----------|------------------|
| filePath | <code>any</code> |
| object   | <code>any</code> |

<a name="readJSON"></a>

## readJSON(filePath) ⇒ <code>object</code>
let getJSON = readJSON("./db.json")

**Kind**: global function  
**Date**: 2022-03-04  
**Author**: zen-out  

| Param    | Type             |
|----------|------------------|
| filePath | <code>any</code> |

<a name="appendToJSON"></a>

## appendToJSON(&quot;1:30PM&quot;) ⇒ <code>any</code>
1. Grabs JSON from json file
2. If the key does not exist, then it will create a new key and assign the object 
3. If the key does exist, and it is not an array 
4. It will create an array and it will push the object into the array

**Kind**: global function  
**Date**: 2022-03-04  
**Author**: zen-out  

| Param    | Type             |
|----------|------------------|
| "1:30PM" | <code>any</code> |

**Example**  
```js
ccc.appendToJSON("./data/appendToMe.json", "test", { id: "lesley" })
```
<a name="replaceJSON"></a>

## replaceJSON(filePath, filePath) ⇒ <code>any</code>
1. Reads from json file 
2. Replaces object depeneding on array passed in

**Kind**: global function  
**Date**: 2022-03-05  
**Author**: zen-out  

| Param    | Type             |
|----------|------------------|
| filePath | <code>any</code> |
| filePath | <code>any</code> |

**Example**  
```js
let objectDir = ["opts", "theme_opts", "codepen"]
ccc.replaceJSON("./data/appendToMe.json", objectDir, { "sexylink": "link" })
```
<a name="getJSONObject"></a>

## getJSONObject(filePath, arrDir) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-06  
**Author**: zen-out  

| Param    | Type             |
|----------|------------------|
| filePath | <code>any</code> |
| arrDir   | <code>any</code> |

**Example**  
```js
// let scripts = getJSONObject("../package.json", ["scripts"])
// console.log("🚀 ~ file: json.js ~ line 116 ~ scripts", scripts)
```
<a name="mergeJSONObject"></a>

## mergeJSONObject(filePath, arrDir, updateObj) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-06  
**Author**: zen-out  

| Param     | Type             |
|-----------|------------------|
| filePath  | <code>any</code> |
| arrDir    | <code>any</code> |
| updateObj | <code>any</code> |

**Example**  
```js
let addedCommands = mergeJSONObject("../package.json", ["scripts"], {
    "play": "node playground.js",
    "deploy": "git add . && git commit -m 'updated' && git push && npm version patch && npm publish",
})
```
<a name="addToNestedJSON"></a>

## addToNestedJSON(filePath, arrDir, addObj) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-06  
**Author**: zen-out  

| Param    | Type             |
|----------|------------------|
| filePath | <code>any</code> |
| arrDir   | <code>any</code> |
| addObj   | <code>any</code> |

**Example**  
```js
addToNestedJSON("../sample.json", ["opts", "theme_opts", "menu"], {
    "title": "visual instructions",
    "link": "hi",
    "target": "_blank"
})
```
<a name="writeFile"></a>

## writeFile(type, &quot;string&quot;) ⇒ <code>any</code>
1. Will format the type of data you have and then write to the file accordingly

**Kind**: global function  
**Date**: 2022-03-05  
**Author**: zen-out  

| Param    | Type             |
|----------|------------------|
| type     | <code>any</code> |
| "string" | <code>any</code> |

**Example**  
```js
let writeThis = ccc.writeFile("./data/writeToMe.txt", [1, 2, 3])
let writeObject = ccc.writeFile("./data/writeToMe.txt", { id: 1, name: "lesley" })
```
<a name="appendFile"></a>

## appendFile(type, &quot;string&quot;) ⇒ <code>any</code>
1. Formats data
2. Appends to file

**Kind**: global function  
**Date**: 2022-03-06  
**Author**: zen-out  

| Param    | Type             |
|----------|------------------|
| type     | <code>any</code> |
| "string" | <code>any</code> |

**Example**  
```js
ccc.appendFile("./readMe.txt", { yo: "whatsup" })
```
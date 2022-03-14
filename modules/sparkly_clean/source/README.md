# sparkly_clean
[sparkly_clean - start here](https://zen-out.github.io/packages/sparkly_clean)
[![here](https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/sparkly_clean.png)](https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/sparkly_clean.png)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Downloads](https://img.shields.io/npm/dw/sparkly_clean)
## Instructions: 
```npm install sparkly_clean ``` 
 ``` const sparkly_clean =  require('sparkly_clean')```

## If utilizing in html...: 
```<script src="https://cdn.jsdelivr.net/npm/sparkly_clean/dist/index.js"></script> ``` 
 ``` const output =  sparkly_clean.method(parameter)```

## Functions

<dl>
<dt><a href="#foldersToDelete">foldersToDelete(git, days)</a> ⇒ <code>any</code></dt>
<dd><ol>
<li>Checks whether or not git is needed </li>
<li></li>
</ol>
</dd>
<dt><a href="#filterForGitTrue">filterForGitTrue()</a> ⇒ <code>any</code></dt>
<dd><p>Filters got git true</p>
</dd>
<dt><a href="#dateIsLonger">dateIsLonger(limit)</a> ⇒ <code>any</code></dt>
<dd><ul>
<li>If true, should delete. 
let shouldWeDelete = dateIsLonger(&quot;March 2, 2022&quot;, 5)
let shouldDelete = dateIsLonger(&quot;March 2, 2022&quot;, 1)
console.log(&quot;🚀 ~ file: fs.js ~ line 82 ~ shouldDelete&quot;, shouldDelete)
console.log(&quot;🚀 ~ file: fs.js ~ line 80 ~ shouldWeDelete&quot;, shouldWeDelete)</li>
</ul>
</dd>
<dt><a href="#getDirectoryStructure">getDirectoryStructure(filepath, {extensions:extension}, (item, PATH, stats)</a> ⇒ <code>any</code></dt>
<dd><p>getDirectoryStructure(&quot;./tree&quot;, /.txt$/)</p>
</dd>
<dt><a href="#printDirectory">printDirectory(filePath, extension)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#isGitSync">isGitSync()</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#formatStats">formatStats(filePath)</a> ⇒ <code>object</code></dt>
<dd></dd>
<dt><a href="#getShape">getShape()</a> ⇒ <code>any</code></dt>
<dd><ol>
<li>Prints directory structure</li>
</ol>
</dd>
</dl>

<a name="foldersToDelete"></a>

## foldersToDelete(git, days) ⇒ <code>any</code>
1. Checks whether or not git is needed 
2.

**Kind**: global function  
**Date**: 2022-03-04  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| git   | <code>any</code> |
| days  | <code>any</code> |

<a name="filterForGitTrue"></a>

## filterForGitTrue() ⇒ <code>any</code>
Filters got git true

**Kind**: global function  
**Date**: 2022-03-04  
**Author**: zen-out  
<a name="dateIsLonger"></a>

## dateIsLonger(limit) ⇒ <code>any</code>
- If true, should delete. 
let shouldWeDelete = dateIsLonger("March 2, 2022", 5)
let shouldDelete = dateIsLonger("March 2, 2022", 1)
console.log("🚀 ~ file: fs.js ~ line 82 ~ shouldDelete", shouldDelete)
console.log("🚀 ~ file: fs.js ~ line 80 ~ shouldWeDelete", shouldWeDelete)

**Kind**: global function  
**Date**: 2022-03-04  
**Author**: zen-out  

| Param | Type             |
|-------|------------------|
| limit | <code>any</code> |

<a name="getDirectoryStructure"></a>

## getDirectoryStructure(filepath, {extensions:extension}, (item, PATH, stats) ⇒ <code>any</code>
getDirectoryStructure("./tree", /\.txt$/)

**Kind**: global function  
**Date**: 2022-03-04  
**Author**: zen-out  

| Param                  | Type             |
|------------------------|------------------|
| filepath               | <code>any</code> |
| {extensions:extension} | <code>any</code> |
| (item                  | <code>any</code> |
| PATH                   | <code>any</code> |
| stats                  | <code>any</code> |

<a name="printDirectory"></a>

## printDirectory(filePath, extension) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-04  
**Author**: zen-out  

| Param     | Type             |
|-----------|------------------|
| filePath  | <code>any</code> |
| extension | <code>any</code> |

**Example**  
```js
1. Gets directory structure
2. Prints out directory into structure/index.json file 
```
<a name="isGitSync"></a>

## isGitSync() ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-04  
**Author**: zen-out  

| Param         | Type             |
|---------------|------------------|
| path.join(dir | <code>any</code> |
| '.git'        | <code>any</code> |

**Example**  
```js
isGitSync(dir)
```
<a name="formatStats"></a>

## formatStats(filePath) ⇒ <code>object</code>
**Kind**: global function  
**Date**: 2022-03-04  
**Author**: zen-out  

| Param    | Type             |
|----------|------------------|
| filePath | <code>any</code> |

**Example**  
```js
1. Get Stats, based on the path 
2. Object 
{
  git: false,
  atime: 2022-03-04T07:14:08.480Z,
  birthtime: 2022-03-04T05:56:32.358Z,
  size: 352
}
```
<a name="getShape"></a>

## getShape() ⇒ <code>any</code>
1. Prints directory structure

**Kind**: global function  
**Date**: 2022-03-04  
**Author**: zen-out  

| Param      | Type             |
|------------|------------------|
| "./delete" | <code>any</code> |


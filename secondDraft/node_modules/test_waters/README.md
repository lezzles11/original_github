# test_waters

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Downloads](https://img.shields.io/npm/dw/test_waters)
[Play with docs](https://zen-out.github.io/modules/test_waters.html)
## Instructions: 

```js
npm install test_waters
const test_waters =  require('test_waters')
```

## If utilizing in html...: 
```html
<script src="./node_modules/test_waters/index.js"></script>
<script> 
$(()=> { 
     const output =  test_waters.method(parameter)
 })
</script>
```


## Functions

<dl>
<dt><a href="#testAllTypes">testAllTypes(name, export)</a> ⇒ <code>array</code></dt>
<dd></dd>
<dt><a href="#testFunction">testFunction(name, func, array)</a> ⇒ <code>array</code></dt>
<dd></dd>
<dt><a href="#testAsyncFunction">testAsyncFunction(name, func, array)</a> ⇒ <code>array</code></dt>
<dd><p>testAsyncFunction(name, func, array of objects for input testing)</p>
</dd>
</dl>

<a name="testAllTypes"></a>

## testAllTypes(name, export) ⇒ <code>array</code>
**Kind**: global function  
**Date**: 2022-03-06  
**Author**: zen-out  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> |  |
| export | <code>function</code> | function to pass in random inputs |

**Example**  
```js
export function justPrint(input) {
    return "waters" + input;
}
let getAll = test_waters.testAllTypes("just print", justPrint)
console.log("🚀 ~ file: playground.js ~ line 7 ~ getAll", getAll)
```
<a name="testFunction"></a>

## testFunction(name, func, array) ⇒ <code>array</code>
**Kind**: global function  
**Date**: 2022-03-16  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 
| func | <code>function</code> | 
| array | <code>array</code> | 

**Example**  
```js
let inputs = [
  { id: 1, name: "lesley" }, { id: 2, name: "ryan" }
]
export function addToDatabase(object) {
  object["added"] = "done"
  return object;
}
let result = test_waters.testFunction("add to database", addToDatabase, inputs)
console.log("🚀 ~ file: playground.js ~ line 34 ~ result", result)
```
<a name="testAsyncFunction"></a>

## testAsyncFunction(name, func, array) ⇒ <code>array</code>
testAsyncFunction(name, func, array of objects for input testing)

**Kind**: global function  
**Date**: 2022-03-16  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 
| func | <code>function</code> | 
| array | <code>array</code> | 

**Example**  
```js
async export function resolveAfter2Seconds(object) {
  let getPromise = await new Promise(resolve => {
      setTimeout(() => {
          resolve(object);
      }, 2000);
  });
  return getPromise
}
async export function getTest() {
  let results = await test_waters.testAsyncFunction("async", resolveAfter2Seconds, inputs)
  console.log(results)
}
getTest()
```

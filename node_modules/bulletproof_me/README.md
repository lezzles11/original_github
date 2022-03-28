# bulletproof_me

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Downloads](https://img.shields.io/npm/dw/bulletproof_me)
[Play with docs](https://zen-out.github.io/modules/bulletproof_me.html)
## Instructions: 

```js
npm install bulletproof_me
const bulletproof_me =  require('bulletproof_me')
```

## If utilizing in html...: 
```html
<script src="./node_modules/bulletproof_me/index.js"></script>
<script> 
$(()=> { 
     const output =  bulletproof_me.method(parameter)
 })
</script>
```


## Functions

<dl>
<dt><a href="#HAS">HAS(one, two)</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#STARTSWITH">STARTSWITH(string, substring)</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#ENDSWITH">ENDSWITH(string, substring)</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#COUNT">COUNT(type, item, amount)</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#ATLEAST">ATLEAST(type, item, amount)</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#ISLESS">ISLESS(first, second)</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#DOESNOTHAVE">DOESNOTHAVE(string, item)</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#ISTYPE">ISTYPE(data, type)</a> ⇒ <code>boolean</code></dt>
<dd></dd>
</dl>

<a name="HAS"></a>

## HAS(one, two) ⇒ <code>boolean</code>
**Kind**: global function  
**Date**: 2022-02-09  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| one | <code>string</code> | 
| two | <code>string</code> | 

**Example**  
```js
HAS("string", "st")
```
<a name="STARTSWITH"></a>

## STARTSWITH(string, substring) ⇒ <code>boolean</code>
**Kind**: global function  
**Date**: 2022-02-10  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| string | <code>string</code> | 
| substring | <code>string</code> | 

**Example**  
```js
STARTSWITH(string, substring)
```
<a name="ENDSWITH"></a>

## ENDSWITH(string, substring) ⇒ <code>boolean</code>
**Kind**: global function  
**Date**: 2022-02-10  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| string | <code>string</code> | 
| substring | <code>string</code> | 

**Example**  
```js
ENDSWITH("string", "g")
```
<a name="COUNT"></a>

## COUNT(type, item, amount) ⇒ <code>boolean</code>
**Kind**: global function  
**Date**: 2022-03-10  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| type | <code>string</code> | 
| item | <code>string</code> | 
| amount | <code>number</code> | 

**Example**  
```js
COUNT("hello hellodi", "div", 2)
COUNT("hello hellodi", "hello", 2) // true 
```
<a name="ATLEAST"></a>

## ATLEAST(type, item, amount) ⇒ <code>boolean</code>
**Kind**: global function  
**Date**: 2022-02-10  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| type | <code>string</code> | 
| item | <code>string</code> | 
| amount | <code>number</code> | 

**Example**  
```js
ATLEAST("div div", "div", 1) //true 
   ATLEAST("div div", "div", 2) //true 
  ATLEAST("div div", "div", 3) //false 
```
<a name="ISLESS"></a>

## ISLESS(first, second) ⇒ <code>boolean</code>
**Kind**: global function  
**Date**: 2022-02-17  

| Param | Type |
| --- | --- |
| first | <code>string</code> | 
| second | <code>string</code> | 

**Example**  
```js
ISLESS("1993-12-11", "1994-12-11")
```
<a name="DOESNOTHAVE"></a>

## DOESNOTHAVE(string, item) ⇒ <code>boolean</code>
**Kind**: global function  
**Date**: 2022-02-10  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| string | <code>string</code> | 
| item | <code>string</code> | 

**Example**  
```js
DOESNOTHAVE("string", "s")
```
<a name="ISTYPE"></a>

## ISTYPE(data, type) ⇒ <code>boolean</code>
**Kind**: global function  
**Date**: 2022-03-01  

| Param | Type |
| --- | --- |
| data | <code>any</code> | 
| type | <code>string</code> | 

**Example**  
```js
ISTYPE([2, 3], "array")
```

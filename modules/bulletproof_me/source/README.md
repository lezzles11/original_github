# bulletproof_me
[bulletproof_me - start here](https://zen-out.github.io/packages/bulletproof_me)
[![here](https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/bulletproof_me.png)](https://github.com/zen-out/zen-out.github.io/blob/master/packages/videos/bulletproof_me.png)undefined
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Downloads](https://img.shields.io/npm/dw/bulletproof_me)
## Instructions: 
```npm install bulletproof_me ``` 
 ``` const bulletproof_me =  require('bulletproof_me')```

## If utilizing in html...: 
```<script src="https://cdn.jsdelivr.net/npm/bulletproof_me/dist/index.js"></script> ``` 
 ``` const output =  bulletproof_me.method(parameter)```

## Functions

<dl>
<dt><a href="#HAS">HAS(one, two)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#STARTSWITH">STARTSWITH(string, substring)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#ENDSWITH">ENDSWITH(string, substring)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#COUNT">COUNT(type, item, amount)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#ATLEAST">ATLEAST(type, item, amount)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#ISLESS">ISLESS(first, second, type)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#DOESNOTHAVE">DOESNOTHAVE(string, item)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#ISTYPE">ISTYPE(data, type)</a> ⇒ <code>any</code></dt>
<dd><p>ISTYPEOFHELPER</p>
</dd>
</dl>

<a name="HAS"></a>

## HAS(one, two) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-09  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| one | <code>any</code> | 
| two | <code>any</code> | 

**Example**  
```js
HAS("string", "st")
HAS(323, 2)
HAS({hi: "whatsup"}, "whatsup")
HAS([1, 2, 3], 1)
```
<a name="STARTSWITH"></a>

## STARTSWITH(string, substring) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-10  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| string | <code>any</code> | 
| substring | <code>any</code> | 

**Example**  
```js
it("starts with", () => {
        T(STARTSWITHHELPER("hello", "h"))
        F(STARTSWITHHELPER("hello", "b"))
    })
```
<a name="ENDSWITH"></a>

## ENDSWITH(string, substring) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-10  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| string | <code>any</code> | 
| substring | <code>any</code> | 

**Example**  
```js
it("ends with", () => {
        F(ENDSWITHHELPER("HELLO", "o"))
        T(ENDSWITHHELPER("<div></div>", "</div>"))
    })
```
<a name="COUNT"></a>

## COUNT(type, item, amount) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-10  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| type | <code>any</code> | 
| item | <code>any</code> | 
| amount | <code>any</code> | 

**Example**  
```js
COUNT("hello hellodi", "div", 2)
COUNT("hello hellodi", "hello", 2) // true 
```
<a name="ATLEAST"></a>

## ATLEAST(type, item, amount) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-10  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| type | <code>any</code> | 
| item | <code>any</code> | 
| amount | <code>any</code> | 

**Example**  
```js
ATLEAST("div div", "div", 1) //true 
   ATLEAST("div div", "div", 2) //true 
  ATLEAST("div div", "div", 3) //false 
```
<a name="ISLESS"></a>

## ISLESS(first, second, type) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-17  

| Param | Type |
| --- | --- |
| first | <code>any</code> | 
| second | <code>any</code> | 
| type | <code>any</code> | 

**Example**  
```js
T(ISLESS("a", "b", "string"))
        T(ISLESS(1, 2, "number"))
        T(ISLESS("Dec 11, 1993", "Dec 11, 1994", "date"))
        F(ISLESS("b", "a", "string"))
        F(ISLESS(2, 1, "number"))
        F(ISLESS("Dec 11, 1996", "Dec 11, 1995", "date"))
```
<a name="DOESNOTHAVE"></a>

## DOESNOTHAVE(string, item) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-02-10  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| string | <code>any</code> | 
| item | <code>any</code> | 

**Example**  
```js
it('', () => {
        F(DOESNOTHAVEHELPER("{{>", ">")) // false (matches the full instance)
        T(DOESNOTHAVEHELPER("{{>", "asdf")) // true (matches the full instance)
    });
```
<a name="ISTYPE"></a>

## ISTYPE(data, type) ⇒ <code>any</code>
ISTYPEOFHELPER

**Kind**: global function  
**Date**: 2022-03-01  

| Param | Type |
| --- | --- |
| data | <code>any</code> | 
| type | <code>any</code> | 


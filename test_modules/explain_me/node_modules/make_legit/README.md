# make_legit
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Downloads](https://img.shields.io/npm/dw/make_legit)## Instructions: 
```npm install make_legit ``` 
 ``` const make_legit =  require('make_legit')```

## If utilizing in html...: 
```<script src="https://cdn.jsdelivr.net/npm/make_legit/dist/index.js"></script> ``` 
 ``` const output =  make_legit.method(parameter)```

## Functions

<dl>
<dt><a href="#trimObj">trimObj(obj)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#trimArr">trimArr(arr)</a> ⇒ <code>array</code></dt>
<dd></dd>
<dt><a href="#clean">clean(data)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#formatDate">formatDate(data)</a> ⇒ <code>date</code></dt>
<dd></dd>
<dt><a href="#formatNumber">formatNumber(data, type)</a> ⇒ <code>number</code></dt>
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
<dt><a href="#getType">getType(data)</a> ⇒ <code>string</code></dt>
<dd></dd>
</dl>

<a name="trimObj"></a>

## trimObj(obj) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| obj | <code>any</code> | 

**Example**  
```js
trimObj(obj)
```
<a name="trimArr"></a>

## trimArr(arr) ⇒ <code>array</code>
**Kind**: global function  
**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| arr | <code>any</code> | 

**Example**  
```js
trimArr(arr)
```
<a name="clean"></a>

## clean(data) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-03  

| Param | Type |
| --- | --- |
| data | <code>any</code> | 

**Example**  
```js
clean(data)
```
<a name="formatDate"></a>

## formatDate(data) ⇒ <code>date</code>
**Kind**: global function  
**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| data | <code>any</code> | 

**Example**  
```js
formatDate(data)
```
<a name="formatNumber"></a>

## formatNumber(data, type) ⇒ <code>number</code>
**Kind**: global function  
**Date**: 2022-03-03  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| data | <code>any</code> | 
| type | <code>any</code> | 

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
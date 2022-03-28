# when_you_free

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Downloads](https://img.shields.io/npm/dw/when_you_free)
[Play with docs](https://zen-out.github.io/modules/when_you_free.html)
## Instructions: 

```js
npm install when_you_free
const when_you_free =  require('when_you_free')
```

## If utilizing in html...: 
```html
<script src="./node_modules/when_you_free/index.js"></script>
<script> 
$(()=> { 
     const output =  when_you_free.method(parameter)
 })
</script>
```


## Functions

<dl>
<dt><a href="#isBefore">isBefore()</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#difference">difference(one, two, seconds,)</a> ⇒ <code>integer</code></dt>
<dd></dd>
<dt><a href="#isBetween">isBetween(target, start, end)</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#dateIsWithinLimit">dateIsWithinLimit(getDate, limit)</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#createDay">createDay(year, month, day)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#createFullDate">createFullDate(year, month, day, hour, minute, second)</a> ⇒ <code>date</code></dt>
<dd></dd>
<dt><a href="#getDuration">getDuration(end, type)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#getReadableFormat">getReadableFormat(getDate, type)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#format">format(date, type)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#digitalToSeconds">digitalToSeconds(string)</a> ⇒ <code>any</code></dt>
<dd></dd>
<dt><a href="#formatDateToPost">formatDateToPost(stringInput)</a> ⇒ <code>date</code></dt>
<dd></dd>
<dt><a href="#formatToTimezone">formatToTimezone()</a></dt>
<dd></dd>
<dt><a href="#isDate">isDate()</a></dt>
<dd></dd>
</dl>

<a name="isBefore"></a>

## isBefore() ⇒ <code>boolean</code>
**Kind**: global function  
**Date**: 2022-03-06  
**Author**: zen-out  
**Example**  
```js
letTrue = when_you_free.isBefore("Dec 11, 2012", "Dec 12, 2012")
```
<a name="difference"></a>

## difference(one, two, seconds,) ⇒ <code>integer</code>
**Kind**: global function  
**Date**: 2022-01-13  
**Author**: zen-out  

| Param | Type | Description |
| --- | --- | --- |
| one | <code>date</code> |  |
| two | <code>date</code> |  |
| seconds, | <code>string</code> | minutes, hours, weeks, months |

**Example**  
```js
let isTrue3 = when_you_free.difference("2020-03-01", "2021-02-01", "minutes")
```
<a name="isBetween"></a>

## isBetween(target, start, end) ⇒ <code>boolean</code>
**Kind**: global function  
**Date**: 2022-03-07  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| target | <code>date</code> | 
| start | <code>date</code> | 
| end | <code>date</code> | 

**Example**  
```js
let isTrue3 = when_you_free.isBetween("2020-03-01", "2021-03-01", "2022-02-01") // true
```
<a name="dateIsWithinLimit"></a>

## dateIsWithinLimit(getDate, limit) ⇒ <code>boolean</code>
**Kind**: global function  
**Date**: 2022-03-10  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| getDate | <code>date</code> | 
| limit | <code>number</code> | 

**Example**  
```js
if today is march 10
let getDays = when_you_free.dateIsWithinLimit("2022-01-01", 14) // return false
```
<a name="createDay"></a>

## createDay(year, month, day) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-20  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| year | <code>any</code> | 
| month | <code>any</code> | 
| day | <code>any</code> | 

**Example**  
```js
let day = createDay(2022, 2, 2)
```
<a name="createFullDate"></a>

## createFullDate(year, month, day, hour, minute, second) ⇒ <code>date</code>
**Kind**: global function  
**Date**: 2022-03-07  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| year | <code>number</code> | 
| month | <code>number</code> | 
| day | <code>number</code> | 
| hour | <code>number</code> | 
| minute | <code>number</code> | 
| second | <code>number</code> | 

**Example**  
```js
createFullDate(year, month, day, hour, minute, second)
```
<a name="getDuration"></a>

## getDuration(end, type) ⇒ <code>string</code>
**Kind**: global function  
**Date**: 2022-03-07  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| end | <code>date</code> | 
| type | <code>date</code> | 

**Example**  
```js
let getDuration = when_you_free.getDuration("2022-03-01T19:06:31.047Z", "2022-03-01T20:04:32.047Z", "seconds")
```
<a name="getReadableFormat"></a>

## getReadableFormat(getDate, type) ⇒ <code>string</code>
**Kind**: global function  
**Date**: 2022-01-13  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| getDate | <code>any</code> | 
| type | <code>any</code> | 

**Example**  
```js
when_you_free.getReadableFormat("Dec 11, 2012", "from") in 2 months
 when_you_free.getReadableFormat("Dec 11, 2012", "to") 2 months ago
```
<a name="format"></a>

## format(date, type) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-06  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| date | <code>any</code> | 
| type | <code>any</code> | 

**Example**  
```js
let formatted1 = when_you_free.format("Dec 11, 1994", "ll")
```
<a name="digitalToSeconds"></a>

## digitalToSeconds(string) ⇒ <code>any</code>
**Kind**: global function  
**Date**: 2022-03-07  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| string | <code>any</code> | 

**Example**  
```js
let digitalOne = when_you_free.digitalToSeconds("11:22")
```
<a name="formatDateToPost"></a>

## formatDateToPost(stringInput) ⇒ <code>date</code>
**Kind**: global function  
**Date**: 2022-01-13  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| stringInput | <code>any</code> | 

**Example**  
```js
when_you_free.formatDateToPost(stringInput)
```
<a name="formatToTimezone"></a>

## formatToTimezone()
**Kind**: global function  
**Date**: 2022-03-26  
**Author**: zen-out  
**Example**  
```js
let first = when_you_free.formatToTimezone("Asia/Hong_Kong", "Dec 11, 1994")
let second = when_you_free.formatToTimezone("America/New_York", "Dec 11, 1994")
let third = when_you_free.formatToTimezone("Europe/Copenhagen", "Dec 11, 1994")
let fifth = when_you_free.formatToTimezone("Europe/London", "Dec 11, 1994")
let seventh = formatToTimezone("Asia/Tokyo", "Dec 11, 1994")
let nine = formatToTimezone("Asia/Bangkok", "Dec 11, 1994")
```
<a name="isDate"></a>

## isDate()
**Kind**: global function  
**Author**: github.com/zen-out  
**Example**  
```js
let trueOrNot =  when_you_free.isDate("1994-01-01")
```

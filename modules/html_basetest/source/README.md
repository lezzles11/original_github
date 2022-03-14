![NPM Downloads](https://img.shields.io/npm/dw/html_basetest)

# BaseTest

The purpose of this repository is to allow users to more easily test for the various elements in their html documents. 

## Directions

1. Install the package 

```
npm install html_basetest
```

2. In your html document, import the script (make sure to import it after your JQuery script, and before your javascript file)

```
<script src="https://cdn.jsdelivr.net/npm/html_basetest/index.js"></script>
```

3. Create javascript file - make sure to put all your jquery selectors after the instantiator - e.g., 

```
$(() => {
    let firstTest = baseTest.hasClass($(".test"), ".red-text") 
    console.log("first test passed", firstTest)
})
```

<a name="module_baseTest"></a>

* [~BaseTest](#module_baseTest.. BaseTest)
    - [new BaseTest()](#new_module_baseTest..BaseTest_new)
    - [.checkElement(el)](#module_baseTest..BaseTest+checkElement) ⇒ <code>boolean</code>
    - [.STRING_HAS(one, two)](#module_baseTest..BaseTest+STRING_HAS) ⇒ <code>boolean</code>
    - [.STRING_COUNT(type, item, amount)](#module_baseTest..BaseTest+STRING_COUNT) ⇒ <code>boolean</code>
    - [.STRING_ATLEAST(type, item, amount)](#module_baseTest..BaseTest+STRING_ATLEAST) ⇒ <code>boolean</code>
    - [.STRING_DOESNOTHAVE(string, item)](#module_baseTest..BaseTest+STRING_DOESNOTHAVE) ⇒ <code>boolean</code>
    - [.hasClass(element, classname)](#module_baseTest..BaseTest+hasClass) ⇒ <code>boolean</code>
    - [.hasId(element, id)](#module_baseTest..BaseTest+hasId) ⇒ <code>boolean</code>
    - [.hasAttr(element, attribute)](#module_baseTest..BaseTest+hasAttr) ⇒ <code>boolean</code>
    - [.hasDataTest(element, key, value)](#module_baseTest..BaseTest+hasDataTest) ⇒ <code>boolean</code>
    - [.hasHTML(element, html)](#module_baseTest..BaseTest+hasHTML) ⇒ <code>boolean</code>
    - [.hasChild(element, child)](#module_baseTest..BaseTest+hasChild) ⇒ <code>boolean</code>
    - [.exists(element)](#module_baseTest..BaseTest+exists) ⇒ <code>boolean</code>
    - [.visible(element)](#module_baseTest..BaseTest+visible) ⇒ <code>boolean</code>
    - [.hasCSS(element, key, value)](#module_baseTest..BaseTest+hasCSS) ⇒ <code>boolean</code>

<a name="new_module_baseTest.. BaseTest_new"></a>

#### new BaseTest()

let baseTest = new BaseTest()

<a name="module_baseTest.. BaseTest+checkElement"></a>

#### baseTest.checkElement(el) ⇒ <code>boolean</code>

ensures that you can pass in jquery or string

**Kind**: instance method of [<code>BaseTest</code>](#module_baseTest.. BaseTest)  
**Date**: 2022-01-05  

| Param | Type |
| --- | --- |
| el | <code>any</code> | 

<a name="module_baseTest.. BaseTest+STRING_HAS"></a>

#### baseTest. STRING\_HAS(one, two) ⇒ <code>boolean</code>

**Kind**: instance method of [<code>BaseTest</code>](#module_baseTest.. BaseTest)  
**Date**: 2022-02-13  

| Param | Type |
| --- | --- |
| one | <code>any</code> | 
| two | <code>any</code> | 

**Example**  

```js
const getHAS = baseTest.STRING_HAS("helllo", "lo")
console.log("🚀 ~ file: test.js ~ line 5 ~ getHAS", getHAS)
const getNeg = baseTest.STRING_HAS("hello", "z")
console.log("🚀 ~ file: test.js ~ line 7 ~ getNeg", getNeg)
```

<a name="module_baseTest.. BaseTest+STRING_COUNT"></a>

#### baseTest. STRING\_COUNT(type, item, amount) ⇒ <code>boolean</code>

**Kind**: instance method of [<code>BaseTest</code>](#module_baseTest.. BaseTest)  
**Date**: 2022-02-13  

| Param | Type |
| --- | --- |
| type | <code>any</code> | 
| item | <code>any</code> | 
| amount | <code>any</code> | 

**Example**  

```js
const getCount = baseTest.STRING_COUNT("hello hello", "llo", 2)
console.log("🚀 ~ file: test.js ~ line 7 ~ getCount", getCount)
const getNegC = baseTest.STRING_COUNT("hello", "z", 2)
console.log("🚀 ~ file: test.js ~ line 11 ~ getNegC", getNegC)
```

<a name="module_baseTest.. BaseTest+STRING_ATLEAST"></a>

#### baseTest. STRING\_ATLEAST(type, item, amount) ⇒ <code>boolean</code>

**Kind**: instance method of [<code>BaseTest</code>](#module_baseTest.. BaseTest)  
**Date**: 2022-02-13  

| Param | Type |
| --- | --- |
| type | <code>any</code> | 
| item | <code>any</code> | 
| amount | <code>any</code> | 

**Example**  

```js
const getAtLeast = baseTest.STRING_ATLEAST("hello", "l", 1)
console.log("🚀 ~ file: test.js ~ line 9 ~ gtAtLeast", getAtLeast)
const getAtLeastNeg = baseTest.STRING_ATLEAST("hello", "z", 1)
console.log("🚀 ~ file: test.js ~ line 16 ~ getAtLeastNeg", getAtLeastNeg)
```

<a name="module_baseTest.. BaseTest+STRING_DOESNOTHAVE"></a>

#### baseTest. STRING\_DOESNOTHAVE(string, item) ⇒ <code>boolean</code>

**Kind**: instance method of [<code>BaseTest</code>](#module_baseTest.. BaseTest)  
**Date**: 2022-02-13  

| Param | Type |
| --- | --- |
| string | <code>any</code> | 
| item | <code>any</code> | 

**Example**  

```js
const doesNotHave = baseTest.STRING_DOESNOTHAVE("hello", "z")
console.log("🚀 ~ file: test.js ~ line 11 ~ doesNotHave", doesNotHave)
const doesNotHaveNeg = baseTest.STRING_DOESNOTHAVE("hello", "ll")
console.log("🚀 ~ file: test.js ~ line 19 ~ doesNotHaveNeg", doesNotHaveNeg)
```

<a name="module_baseTest.. BaseTest+hasClass"></a>

#### baseTest.hasClass(element, classname) ⇒ <code>boolean</code>

hasClass(element, classname)

**Kind**: instance method of [<code>BaseTest</code>](#module_baseTest.. BaseTest)  
**Date**: 2022-01-05  

| Param | Type |
| --- | --- |
| element | <code>any</code> | 
| classname | <code>any</code> | 

**Example**  

```js
let hasClass = baseTest.hasClass(el, "yonas")
let hasClassFalse = baseTest.hasClass(el, "no")
```

<a name="module_baseTest.. BaseTest+hasId"></a>

#### baseTest.hasId(element, id) ⇒ <code>boolean</code>

hasId(element, id)

**Kind**: instance method of [<code>BaseTest</code>](#module_baseTest.. BaseTest)  
**Date**: 2022-01-05  

| Param | Type |
| --- | --- |
| element | <code>any</code> | 
| id | <code>any</code> | 

**Example**  

```js
let hasIdTrue = baseTest.hasId(el, "yon")
console.log('hasIdTrue:', hasIdTrue);
let hasIdFalse = baseTest.hasId(el, "whatsup")
console.log('hasIdFalse:', hasIdFalse);
```

<a name="module_baseTest.. BaseTest+hasAttr"></a>

#### baseTest.hasAttr(element, attribute) ⇒ <code>boolean</code>

hasAttr(element, attribute)

**Kind**: instance method of [<code>BaseTest</code>](#module_baseTest.. BaseTest)  
**Date**: 2022-01-05  

| Param | Type |
| --- | --- |
| element | <code>any</code> | 
| attribute | <code>any</code> | 

**Example**  

```js
let hasAttrTrue = baseTest.hasAttr(el, "disabled")
console.log('hasAttrTrue:', hasAttrTrue);
let hasAttrFalse = baseTest.hasAttr(el, "no")
console.log('hasAttrFalse:', hasAttrFalse);
```

<a name="module_baseTest.. BaseTest+hasDataTest"></a>

#### baseTest.hasDataTest(element, key, value) ⇒ <code>boolean</code>

hasDataTest(element, key, value = "")

**Kind**: instance method of [<code>BaseTest</code>](#module_baseTest.. BaseTest)  
**Date**: 2022-01-05  

| Param | Type | Default |
| --- | --- | --- |
| element | <code>any</code> |  | 
| key | <code>any</code> |  | 
| value | <code>any</code> | <code>&quot; &quot; </code> | 

**Example**  

```js
let hasDataTrue = baseTest.hasDataTest(el, "problem_id")
console.log('hasDataTrue:', hasDataTrue);
let hasDataFalse = baseTest.hasDataTest(el, "task_id")
console.log('hasDataFalse:', hasDataFalse);
let hasDataTrueTrue = baseTest.hasDataTest(el, "problem_id", 3)
console.log("🚀 ~ file: baseTest.js ~ line 76 ~ hasDataTrueTrue", hasDataTrueTrue)
let hasDataTrueTrue2 = baseTest.hasDataTest(el, "problem_id", "3")
console.log("🚀 ~ file: baseTest.js ~ line 78 ~ hasDataTrueTrue2", hasDataTrueTrue2)
```

<a name="module_baseTest.. BaseTest+hasHTML"></a>

#### baseTest.hasHTML(element, html) ⇒ <code>boolean</code>

hasHTML(element, html)

**Kind**: instance method of [<code>BaseTest</code>](#module_baseTest.. BaseTest)  
**Date**: 2022-01-05  

| Param | Type |
| --- | --- |
| element | <code>any</code> | 
| html | <code>any</code> | 

**Example**  

```js
let htmlTrue = baseTest.hasHTML(el, "<div>baller</div>")
console.log("🚀 ~ file: baseTest.js ~ line 80 ~ htmlTrue", htmlTrue)
let htmlFalse = baseTest.hasHTML(el, "whatthef")
console.log("🚀 ~ file: baseTest.js ~ line 82 ~ htmlFalse", htmlFalse)
let htmltext = baseTest.hasHTML(el, "ll")
console.log("🚀 ~ file: baseTest.js ~ line 84 ~ htmltext", htmltext)
```

<a name="module_baseTest.. BaseTest+hasChild"></a>

#### baseTest.hasChild(element, child) ⇒ <code>boolean</code>

hasChild(element, child)

**Kind**: instance method of [<code>BaseTest</code>](#module_baseTest.. BaseTest)  
**Date**: 2022-01-05  

| Param | Type |
| --- | --- |
| element | <code>any</code> | 
| child | <code>any</code> | 

**Example**  

```js
let ChildTrue1 = baseTest.hasChild(el, ".supergrandchild")
console.log("🚀 ~ file: baseTest.js ~ line 103 ~ ChildTrue1", ChildTrue1)
let hasChildFalse = baseTest.hasChild(el, ".what")
console.log("🚀 ~ file: baseTest.js ~ line 105 ~ hasChildFalse", hasChildFalse)
```

<a name="module_baseTest.. BaseTest+exists"></a>

#### baseTest.exists(element) ⇒ <code>boolean</code>

exists(element)

         let existTrue = baseTest.exists(el)
         console.log("🚀 ~ file: baseTest.js ~ line 90 ~ existTrue", existTrue)
         let existFalse = baseTest.exists($(".love"))
         console.log("🚀 ~ file: baseTest.js ~ line 92 ~ existFalse", existFalse)

**Kind**: instance method of [<code>BaseTest</code>](#module_baseTest.. BaseTest)  
**Date**: 2022-01-05  

| Param | Type |
| --- | --- |
| element | <code>any</code> | 

<a name="module_baseTest.. BaseTest+visible"></a>

#### baseTest.visible(element) ⇒ <code>boolean</code>

visible(element)

**Kind**: instance method of [<code>BaseTest</code>](#module_baseTest.. BaseTest)  
**Date**: 2022-01-05  

| Param | Type |
| --- | --- |
| element | <code>any</code> | 

**Example**  

```js
let visibleTrue = baseTest.visible(el)
console.log("🚀 ~ file: baseTest.js ~ line 91 ~ visibleTrue", visibleTrue)
let visibleFalse = baseTest.visible($(".noDisplay"))
console.log("🚀 ~ file: baseTest.js ~ line 93 ~ visibleFalse", visibleFalse)
```

<a name="module_baseTest.. BaseTest+hasCSS"></a>

#### baseTest.hasCSS(element, key, value) ⇒ <code>boolean</code>

hasCSS(element, key, value)

         let hasCSSFalse = baseTest.hasCSS(el, "color", "#6f57e5")
         console.log("🚀 ~ file: baseTest.js ~ line 95 ~ hasCSSFalse", hasCSSFalse)
         let hasCSSTrue = baseTest.hasCSS(el, "display", "flex")
         console.log("🚀 ~ file: baseTest.js ~ line 97 ~ hasCSSTrue", hasCSSTrue)

**Kind**: instance method of [<code>BaseTest</code>](#module_baseTest.. BaseTest)  
**Date**: 2022-01-05  

| Param | Type |
| --- | --- |
| element | <code>any</code> | 
| key | <code>any</code> | 
| value | <code>any</code> | 

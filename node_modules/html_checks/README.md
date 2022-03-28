![NPM Downloads](https://img.shields.io/npm/dw/html_checks)

# BaseTest

The purpose of this repository is to allow users to more easily test for the various elements in their html documents. 

## Directions

1. Install the package 

```
npm install html_checks
```

2. In your html document, import the script (make sure to import it after your JQuery script, and before your javascript file)

```
<script src="./node_modules/html_checks/index.js"></script>
  <script>
        $(() => {
            console.log("hello")
            let el = ".yonas"
            let love = $(".love")
            let hasClass = html_checks.hasClass(el, "yonas")
            let hasClassFalse = html_checks.hasClass(el, "no")
            console.log('hasClassFalse:', hasClassFalse);
            console.log('hasClass:', hasClass);
            let hasIdTrue = html_checks.hasId(el, "yon")
            console.log('hasIdTrue:', hasIdTrue);
            let hasIdFalse = html_checks.hasId(el, "whatsup")
            console.log('hasIdFalse:', hasIdFalse);
            let hasAttrTrue = html_checks.hasAttr(el, "disabled")
            console.log('hasAttrTrue:', hasAttrTrue);
            let hasAttrFalse = html_checks.hasAttr(el, "no")
            console.log('hasAttrFalse:', hasAttrFalse);
            let hasDataTrue = html_checks.hasDataTest(el, "problem_id")
            console.log('hasDataTrue:', hasDataTrue);
            let hasDataFalse = html_checks.hasDataTest(el, "task_id")
            console.log('hasDataFalse:', hasDataFalse);
            let hasDataTrueTrue = html_checks.hasDataTest(el, "problem_id", 32)
            console.log("🚀 ~ file: html_checks.js ~ line 76 ~ hasDataTrueTrue", hasDataTrueTrue)
            let hasDataTrueTrue2 = html_checks.hasDataTest(el, "problem_id", "3")
            console.log("🚀 ~ file: html_checks.js ~ line 78 ~ hasDataTrueTrue2", hasDataTrueTrue2)
            let htmlTrue = html_checks.hasHTML(el, "<div>baller</div>")
            console.log("🚀 ~ file: html_checks.js ~ line 80 ~ htmlTrue", htmlTrue)
            let htmlFalse = html_checks.hasHTML(el, "whatthef")
            console.log("🚀 ~ file: html_checks.js ~ line 82 ~ htmlFalse", htmlFalse)
            let htmltext = html_checks.hasHTML(el, "ll")
            console.log("🚀 ~ file: html_checks.js ~ line 84 ~ htmltext", htmltext)
            let existTrue = html_checks.exists(el)
            console.log("🚀 ~ file: html_checks.js ~ line 90 ~ existTrue", existTrue)
            let existFalse = html_checks.exists($(".love"))
            console.log("🚀 ~ file: html_checks.js ~ line 92 ~ existFalse", existFalse)
            let visibleTrue = html_checks.visible(el)
            console.log("🚀 ~ file: html_checks.js ~ line 91 ~ visibleTrue", visibleTrue)
            let visibleFalse = html_checks.visible($(".noDisplay"))
            console.log("🚀 ~ file: html_checks.js ~ line 93 ~ visibleFalse", visibleFalse)
            let hasCSSFalse = html_checks.hasCSS(el, "color", "#6f57e5")
            console.log("🚀 ~ file: html_checks.js ~ line 95 ~ hasCSSFalse", hasCSSFalse)
            let hasCSSTrue = html_checks.hasCSS(el, "display", "flex")
            console.log("🚀 ~ file: html_checks.js ~ line 97 ~ hasCSSTrue", hasCSSTrue)
            let hasChildTrue = html_checks.hasChild(el, $(".supergrandchild"))
            console.log("🚀 ~ file: html_checks.js ~ line 101 ~ hasChildTrue", hasChildTrue)
            let ChildTrue1 = html_checks.hasChild(el, ".supergrandchild")
            console.log("🚀 ~ file: html_checks.js ~ line 103 ~ ChildTrue1", ChildTrue1)
            let hasChildFalse = html_checks.hasChild(el, ".what")
            console.log("🚀 ~ file: html_checks.js ~ line 105 ~ hasChildFalse", hasChildFalse)
        })
    </script>
```

3. Create javascript file - make sure to put all your jquery selectors after the instantiator - e.g., 

```
$(() => {
    let firstTest = html_checks.hasClass($(".test"), ".red-text") 
    console.log("first test passed", firstTest)
})
```

<a name="module_baseTest"></a>

* [~BaseTest](#module_html_checks.. BaseTest)
    - [new BaseTest()](#new_module_html_checks..BaseTest_new)
    - [.checkElement(el)](#module_html_checks..BaseTest+checkElement) ⇒ <code>boolean</code>
    - [.STRING_HAS(one, two)](#module_html_checks..BaseTest+STRING_HAS) ⇒ <code>boolean</code>
    - [.STRING_COUNT(type, item, amount)](#module_html_checks..BaseTest+STRING_COUNT) ⇒ <code>boolean</code>
    - [.STRING_ATLEAST(type, item, amount)](#module_html_checks..BaseTest+STRING_ATLEAST) ⇒ <code>boolean</code>
    - [.STRING_DOESNOTHAVE(string, item)](#module_html_checks..BaseTest+STRING_DOESNOTHAVE) ⇒ <code>boolean</code>
    - [.hasClass(element, classname)](#module_html_checks..BaseTest+hasClass) ⇒ <code>boolean</code>
    - [.hasId(element, id)](#module_html_checks..BaseTest+hasId) ⇒ <code>boolean</code>
    - [.hasAttr(element, attribute)](#module_html_checks..BaseTest+hasAttr) ⇒ <code>boolean</code>
    - [.hasDataTest(element, key, value)](#module_html_checks..BaseTest+hasDataTest) ⇒ <code>boolean</code>
    - [.hasHTML(element, html)](#module_html_checks..BaseTest+hasHTML) ⇒ <code>boolean</code>
    - [.hasChild(element, child)](#module_html_checks..BaseTest+hasChild) ⇒ <code>boolean</code>
    - [.exists(element)](#module_html_checks..BaseTest+exists) ⇒ <code>boolean</code>
    - [.visible(element)](#module_html_checks..BaseTest+visible) ⇒ <code>boolean</code>
    - [.hasCSS(element, key, value)](#module_html_checks..BaseTest+hasCSS) ⇒ <code>boolean</code>

<a name="new_module_html_checks.. BaseTest_new"></a>

#### new BaseTest()

let baseTest = new BaseTest()

<a name="module_html_checks.. BaseTest+checkElement"></a>

#### html_checks.checkElement(el) ⇒ <code>boolean</code>

ensures that you can pass in jquery or string

**Kind**: instance method of [<code>BaseTest</code>](#module_html_checks.. BaseTest)  
**Date**: 2022-01-05  

| Param | Type             |
|-------|------------------|
| el    | <code>any</code> |

<a name="module_html_checks.. BaseTest+STRING_HAS"></a>

#### html_checks. STRING\_HAS(one, two) ⇒ <code>boolean</code>

**Kind**: instance method of [<code>BaseTest</code>](#module_html_checks.. BaseTest)  
**Date**: 2022-02-13  

| Param | Type             |
|-------|------------------|
| one   | <code>any</code> |
| two   | <code>any</code> |

**Example**  

```js
const getHAS = html_checks.STRING_HAS("helllo", "lo")
console.log("🚀 ~ file: test.js ~ line 5 ~ getHAS", getHAS)
const getNeg = html_checks.STRING_HAS("hello", "z")
console.log("🚀 ~ file: test.js ~ line 7 ~ getNeg", getNeg)
```

<a name="module_html_checks.. BaseTest+STRING_COUNT"></a>

#### html_checks. STRING\_COUNT(type, item, amount) ⇒ <code>boolean</code>

**Kind**: instance method of [<code>BaseTest</code>](#module_html_checks.. BaseTest)  
**Date**: 2022-02-13  

| Param  | Type             |
|--------|------------------|
| type   | <code>any</code> |
| item   | <code>any</code> |
| amount | <code>any</code> |

**Example**  

```js
const getCount = html_checks.STRING_COUNT("hello hello", "llo", 2)
console.log("🚀 ~ file: test.js ~ line 7 ~ getCount", getCount)
const getNegC = html_checks.STRING_COUNT("hello", "z", 2)
console.log("🚀 ~ file: test.js ~ line 11 ~ getNegC", getNegC)
```

<a name="module_html_checks.. BaseTest+STRING_ATLEAST"></a>

#### html_checks. STRING\_ATLEAST(type, item, amount) ⇒ <code>boolean</code>

**Kind**: instance method of [<code>BaseTest</code>](#module_html_checks.. BaseTest)  
**Date**: 2022-02-13  

| Param  | Type             |
|--------|------------------|
| type   | <code>any</code> |
| item   | <code>any</code> |
| amount | <code>any</code> |

**Example**  

```js
const getAtLeast = html_checks.STRING_ATLEAST("hello", "l", 1)
console.log("🚀 ~ file: test.js ~ line 9 ~ gtAtLeast", getAtLeast)
const getAtLeastNeg = html_checks.STRING_ATLEAST("hello", "z", 1)
console.log("🚀 ~ file: test.js ~ line 16 ~ getAtLeastNeg", getAtLeastNeg)
```

<a name="module_html_checks.. BaseTest+STRING_DOESNOTHAVE"></a>

#### html_checks. STRING\_DOESNOTHAVE(string, item) ⇒ <code>boolean</code>

**Kind**: instance method of [<code>BaseTest</code>](#module_html_checks.. BaseTest)  
**Date**: 2022-02-13  

| Param  | Type             |
|--------|------------------|
| string | <code>any</code> |
| item   | <code>any</code> |

**Example**  

```js
const doesNotHave = html_checks.STRING_DOESNOTHAVE("hello", "z")
console.log("🚀 ~ file: test.js ~ line 11 ~ doesNotHave", doesNotHave)
const doesNotHaveNeg = html_checks.STRING_DOESNOTHAVE("hello", "ll")
console.log("🚀 ~ file: test.js ~ line 19 ~ doesNotHaveNeg", doesNotHaveNeg)
```

<a name="module_html_checks.. BaseTest+hasClass"></a>

#### html_checks.hasClass(element, classname) ⇒ <code>boolean</code>

hasClass(element, classname)

**Kind**: instance method of [<code>BaseTest</code>](#module_html_checks.. BaseTest)  
**Date**: 2022-01-05  

| Param     | Type             |
|-----------|------------------|
| element   | <code>any</code> |
| classname | <code>any</code> |

**Example**  

```js
let hasClass = html_checks.hasClass(el, "yonas")
let hasClassFalse = html_checks.hasClass(el, "no")
```

<a name="module_html_checks.. BaseTest+hasId"></a>

#### html_checks.hasId(element, id) ⇒ <code>boolean</code>

hasId(element, id)

**Kind**: instance method of [<code>BaseTest</code>](#module_html_checks.. BaseTest)  
**Date**: 2022-01-05  

| Param   | Type             |
|---------|------------------|
| element | <code>any</code> |
| id      | <code>any</code> |

**Example**  

```js
let hasIdTrue = html_checks.hasId(el, "yon")
console.log('hasIdTrue:', hasIdTrue);
let hasIdFalse = html_checks.hasId(el, "whatsup")
console.log('hasIdFalse:', hasIdFalse);
```

<a name="module_html_checks.. BaseTest+hasAttr"></a>

#### html_checks.hasAttr(element, attribute) ⇒ <code>boolean</code>

hasAttr(element, attribute)

**Kind**: instance method of [<code>BaseTest</code>](#module_html_checks.. BaseTest)  
**Date**: 2022-01-05  

| Param     | Type             |
|-----------|------------------|
| element   | <code>any</code> |
| attribute | <code>any</code> |

**Example**  

```js
let hasAttrTrue = html_checks.hasAttr(el, "disabled")
console.log('hasAttrTrue:', hasAttrTrue);
let hasAttrFalse = html_checks.hasAttr(el, "no")
console.log('hasAttrFalse:', hasAttrFalse);
```

<a name="module_html_checks.. BaseTest+hasDataTest"></a>

#### html_checks.hasDataTest(element, key, value) ⇒ <code>boolean</code>

hasDataTest(element, key, value = "")

**Kind**: instance method of [<code>BaseTest</code>](#module_html_checks.. BaseTest)  
**Date**: 2022-01-05  

| Param   | Type             | Default                     |
|---------|------------------|-----------------------------|
| element | <code>any</code> |                             |
| key     | <code>any</code> |                             |
| value   | <code>any</code> | <code>&quot; &quot; </code> |

**Example**  

```js
let hasDataTrue = html_checks.hasDataTest(el, "problem_id")
console.log('hasDataTrue:', hasDataTrue);
let hasDataFalse = html_checks.hasDataTest(el, "task_id")
console.log('hasDataFalse:', hasDataFalse);
let hasDataTrueTrue = html_checks.hasDataTest(el, "problem_id", 3)
console.log("🚀 ~ file: html_checks.js ~ line 76 ~ hasDataTrueTrue", hasDataTrueTrue)
let hasDataTrueTrue2 = html_checks.hasDataTest(el, "problem_id", "3")
console.log("🚀 ~ file: html_checks.js ~ line 78 ~ hasDataTrueTrue2", hasDataTrueTrue2)
```

<a name="module_html_checks.. BaseTest+hasHTML"></a>

#### html_checks.hasHTML(element, html) ⇒ <code>boolean</code>

hasHTML(element, html)

**Kind**: instance method of [<code>BaseTest</code>](#module_html_checks.. BaseTest)  
**Date**: 2022-01-05  

| Param   | Type             |
|---------|------------------|
| element | <code>any</code> |
| html    | <code>any</code> |

**Example**  

```js
let htmlTrue = html_checks.hasHTML(el, "<div>baller</div>")
console.log("🚀 ~ file: html_checks.js ~ line 80 ~ htmlTrue", htmlTrue)
let htmlFalse = html_checks.hasHTML(el, "whatthef")
console.log("🚀 ~ file: html_checks.js ~ line 82 ~ htmlFalse", htmlFalse)
let htmltext = html_checks.hasHTML(el, "ll")
console.log("🚀 ~ file: html_checks.js ~ line 84 ~ htmltext", htmltext)
```

<a name="module_html_checks.. BaseTest+hasChild"></a>

#### html_checks.hasChild(element, child) ⇒ <code>boolean</code>

hasChild(element, child)

**Kind**: instance method of [<code>BaseTest</code>](#module_html_checks.. BaseTest)  
**Date**: 2022-01-05  

| Param   | Type             |
|---------|------------------|
| element | <code>any</code> |
| child   | <code>any</code> |

**Example**  

```js
let ChildTrue1 = html_checks.hasChild(el, ".supergrandchild")
console.log("🚀 ~ file: html_checks.js ~ line 103 ~ ChildTrue1", ChildTrue1)
let hasChildFalse = html_checks.hasChild(el, ".what")
console.log("🚀 ~ file: html_checks.js ~ line 105 ~ hasChildFalse", hasChildFalse)
```

<a name="module_html_checks.. BaseTest+exists"></a>

#### html_checks.exists(element) ⇒ <code>boolean</code>

exists(element)

         let existTrue = html_checks.exists(el)
         console.log("🚀 ~ file: html_checks.js ~ line 90 ~ existTrue", existTrue)
         let existFalse = html_checks.exists($(".love"))
         console.log("🚀 ~ file: html_checks.js ~ line 92 ~ existFalse", existFalse)

**Kind**: instance method of [<code>BaseTest</code>](#module_html_checks.. BaseTest)  
**Date**: 2022-01-05  

| Param   | Type             |
|---------|------------------|
| element | <code>any</code> |

<a name="module_html_checks.. BaseTest+visible"></a>

#### html_checks.visible(element) ⇒ <code>boolean</code>

visible(element)

**Kind**: instance method of [<code>BaseTest</code>](#module_html_checks.. BaseTest)  
**Date**: 2022-01-05  

| Param   | Type             |
|---------|------------------|
| element | <code>any</code> |

**Example**  

```js
let visibleTrue = html_checks.visible(el)
console.log("🚀 ~ file: html_checks.js ~ line 91 ~ visibleTrue", visibleTrue)
let visibleFalse = html_checks.visible($(".noDisplay"))
console.log("🚀 ~ file: html_checks.js ~ line 93 ~ visibleFalse", visibleFalse)
```

<a name="module_html_checks.. BaseTest+hasCSS"></a>

#### html_checks.hasCSS(element, key, value) ⇒ <code>boolean</code>

hasCSS(element, key, value)

         let hasCSSFalse = html_checks.hasCSS(el, "color", "#6f57e5")
         console.log("🚀 ~ file: html_checks.js ~ line 95 ~ hasCSSFalse", hasCSSFalse)
         let hasCSSTrue = html_checks.hasCSS(el, "display", "flex")
         console.log("🚀 ~ file: html_checks.js ~ line 97 ~ hasCSSTrue", hasCSSTrue)

**Kind**: instance method of [<code>BaseTest</code>](#module_html_checks.. BaseTest)  
**Date**: 2022-01-05  

| Param   | Type             |
|---------|------------------|
| element | <code>any</code> |
| key     | <code>any</code> |
| value   | <code>any</code> |

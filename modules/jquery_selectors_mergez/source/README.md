![NPM Downloads](https://img.shields.io/npm/dw/jquery_selectors_mergez)

# Purpose 

The purpose of this package is to allow users to quickly select and change various elements. 

![JQuery Selectors](https://dl.dropbox.com/s/py4rhrl52k8yy7n/jquery_selectors.png)

## Directions

1. Install the package 

```
npm install jquery-selectors-mergez 
```

2. In your html document, import the script (make sure to import it after your JQuery script, and before your javascript file)

```
<script src="https://cdn.jsdelivr.net/npm/jquery_selectors_mergez/index.js"></script>
```

3. Create javascript file - make sure to put all your jquery selectors after the instantiator - e.g., 

```
$(() => {
 mergeE.insertAsFirst($("[data-child=1] .grandchild"), $("<div>new Element</div>"))
})
```

```
<script src="yourScript.js"></script>
```
<a name="MergeElements"></a>

## MergeElements
**Kind**: global class  
**Date**: 2022-02-01  

* [MergeElements](#MergeElements)
    * [new MergeElements()](#new_MergeElements_new)
    * [.insertAsFirst()](#MergeElements+insertAsFirst)
    * [.wrapEach()](#MergeElements+wrapEach)
    * [.addToEndOfNthElement()](#MergeElements+addToEndOfNthElement) ⇒ <code>any</code>
    * [.addToBegOfNthElement()](#MergeElements+addToBegOfNthElement) ⇒ <code>any</code>
    * [.insertBefore()](#MergeElements+insertBefore) ⇒ <code>any</code>
    * [.insertAfter()](#MergeElements+insertAfter) ⇒ <code>any</code>
    * [.insertAsLast(element, child)](#MergeElements+insertAsLast) ⇒ <code>any</code>
    * [.findAllFirstOfElement()](#MergeElements+findAllFirstOfElement) ⇒ <code>any</code>
    * [.getAllElementsWithinParent(parent, selector)](#MergeElements+getAllElementsWithinParent) ⇒ <code>any</code>
    * [.getAllTextWithinElement()](#MergeElements+getAllTextWithinElement) ⇒ <code>any</code>
    * [.getElementBasedOnSibling()](#MergeElements+getElementBasedOnSibling) ⇒ <code>any</code>
    * [.insertAsFirstIntoNthElement()](#MergeElements+insertAsFirstIntoNthElement) ⇒ <code>any</code>
    * [.insertAsLastIntoNthElement(nthElement, lastElementInNth)](#MergeElements+insertAsLastIntoNthElement) ⇒ <code>any</code>
    * [.changeParent()](#MergeElements+changeParent)

<a name="new_MergeElements_new"></a>

### new MergeElements()
a way to insert into elements

<a name="MergeElements+insertAsFirst"></a>

### mergeElements.insertAsFirst()
mergeE.insertAsFirst($("[data-child=1] .grandchild"), newElement)

**Kind**: instance method of [<code>MergeElements</code>](#MergeElements)  
**Example**  
```js
let newElement = $("<div>insert me as first</div>")
         mergeE.insertAsFirst($("[data-child=1] .grandchild"), newElement)
```
<a name="MergeElements+wrapEach"></a>

### mergeElements.wrapEach()
mergeE.wrapEach($(".dropdown > *"), newWrapper)

**Kind**: instance method of [<code>MergeElements</code>](#MergeElements)  
**Example**  
```js
let newWrapper = $("<div class='box'></div>")
         mergeE.wrapEach($(".dropdown > *"), newWrapper)
```
<a name="MergeElements+addToEndOfNthElement"></a>

### mergeElements.addToEndOfNthElement() ⇒ <code>any</code>
mergeE.addToEndOfNthElement(".dropdown-item", 3, newItem)

**Kind**: instance method of [<code>MergeElements</code>](#MergeElements)  
**Date**: 2022-02-01  
**Example**  
```js
// index works the same as in js, starts with 0
  let newItem = $("<div>newdropdown</div>")
        mergeE.addToEndOfNthElement(".dropdown-item", 3, newItem)
```
<a name="MergeElements+addToBegOfNthElement"></a>

### mergeElements.addToBegOfNthElement() ⇒ <code>any</code>
mergeE.addToBegOfNthElement(".dropdown-item", 3, newItem2)

**Kind**: instance method of [<code>MergeElements</code>](#MergeElements)  
**Example**  
```js
// index works the same as in js, starts with 0
         let newItem2 = $("<div>newdropdown</div>")
         mergeE.addToBegOfNthElement(".dropdown-item", 3, newItem2)
```
<a name="MergeElements+insertBefore"></a>

### mergeElements.insertBefore() ⇒ <code>any</code>
**Kind**: instance method of [<code>MergeElements</code>](#MergeElements)  
**Date**: 2022-02-02  
**Example**  
```js
let newDropdown1 = $(`<a href="#" class="dropdown-item" data-id='0'>og0</a>`)
         mergeE.insertBefore($("[data-id=1]"), $("<div>insert before other element</div>"))
```
<a name="MergeElements+insertAfter"></a>

### mergeElements.insertAfter() ⇒ <code>any</code>
let newDropdown = $(`<a href="#" class="dropdown-item" data-id='6'>6</a>`)
         mergeE.insertAfter($("[data-id=5]"), $("<div>insert after</div>"))

**Kind**: instance method of [<code>MergeElements</code>](#MergeElements)  
**Date**: 2022-02-02  
<a name="MergeElements+insertAsLast"></a>

### mergeElements.insertAsLast(element, child) ⇒ <code>any</code>
insertAsLast($(".parent"), $(".child"))

**Kind**: instance method of [<code>MergeElements</code>](#MergeElements)  
**Date**: 2022-01-31  

| Param | Type |
| --- | --- |
| element | <code>any</code> | 
| child | <code>any</code> | 

<a name="MergeElements+findAllFirstOfElement"></a>

### mergeElements.findAllFirstOfElement() ⇒ <code>any</code>
findAllFirstOfElement(parent, first)

**Kind**: instance method of [<code>MergeElements</code>](#MergeElements)  
<a name="MergeElements+getAllElementsWithinParent"></a>

### mergeElements.getAllElementsWithinParent(parent, selector) ⇒ <code>any</code>
mergeE.getAllElementsWithinParent($(".parent"), $(".selectorWithinParent"))

**Kind**: instance method of [<code>MergeElements</code>](#MergeElements)  
**Date**: 2022-02-06  

| Param | Type |
| --- | --- |
| parent | <code>any</code> | 
| selector | <code>any</code> | 

<a name="MergeElements+getAllTextWithinElement"></a>

### mergeElements.getAllTextWithinElement() ⇒ <code>any</code>
**Kind**: instance method of [<code>MergeElements</code>](#MergeElements)  
**Example**  
```js
//     let getText = mergeE.getAllTextWithinElement("[data-parent='2']")
getAllTextWithinElement(element)
```
<a name="MergeElements+getElementBasedOnSibling"></a>

### mergeElements.getElementBasedOnSibling() ⇒ <code>any</code>
**Kind**: instance method of [<code>MergeElements</code>](#MergeElements)  
**Example**  
```js
mergeE.getElementBasedOnSibling("[data-greatgrandchild='2']", ".great-grandchild", changeToGreen)
```
<a name="MergeElements+insertAsFirstIntoNthElement"></a>

### mergeElements.insertAsFirstIntoNthElement() ⇒ <code>any</code>
**Kind**: instance method of [<code>MergeElements</code>](#MergeElements)  
**Example**  
```js
let newLastInsertion2 = $("<div>yoyoas last</div>")
         mergeE.insertAsFirstIntoNthElement(".grandchild", 2, $("<div>insert</div>"))
```
<a name="MergeElements+insertAsLastIntoNthElement"></a>

### mergeElements.insertAsLastIntoNthElement(nthElement, lastElementInNth) ⇒ <code>any</code>
insertAsLastIntoNthElement(".parent", 2, $("<div>insert</div>"))

**Kind**: instance method of [<code>MergeElements</code>](#MergeElements)  
**Date**: 2022-01-31  

| Param | Type |
| --- | --- |
| nthElement | <code>any</code> | 
| lastElementInNth | <code>any</code> | 

<a name="MergeElements+changeParent"></a>

### mergeElements.changeParent()
**Kind**: instance method of [<code>MergeElements</code>](#MergeElements)  
**Example**  
```js
mergeE.changeParent("[data-greatgrandchild='2']", ".parent", changeToPink)
```

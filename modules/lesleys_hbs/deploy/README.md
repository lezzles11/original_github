# lesleys_hbs
[array_helperz - start here](https://zen-out.github.io/packages/lesleys_hbs)
[![here](https://github.com/zen-out/zen-out.github.io/blob/master/assets/images/lesleys_hbs.png)](https://github.com/zen-out/zen-out.github.io/blob/master/assets/images/lesleys_hbs.png)




<a name="ArrayOfObjectsHBSHelper"></a>

## ArrayOfObjectsHBSHelper

### arrayOfObjectsHBSHelper.trimArr(arr) ⇒ <code>array</code>

trims array values

**Kind**: instance method of [<code>ArrayOfObjectsHBSHelper</code>](#ArrayOfObjectsHBSHelper)  
**Date**: 2021-12-19  
**Author**: lezzles11 :) - www.github.com/lezzles11  

| Param | Type               |
|-------|--------------------|
| arr   | <code>array</code> |

<a name="ArrayOfObjectsHBSHelper+countByCondition"></a>

### arrayOfObjectsHBSHelper.countByCondition(array, key, value) ⇒ <code>number</code>

**Kind**: instance method of [<code>ArrayOfObjectsHBSHelper</code>](#ArrayOfObjectsHBSHelper)  
**Returns**: <code>number</code> - of objects that meet that condition  
**Date**: 2022-02-17  
**Author**: lezzles11 :) - www.github.com/lezzles11  

| Param | Type                |
|-------|---------------------|
| array | <code>any</code>    |
| key   | <code>string</code> |
| value | <code>string</code> |

**Example**  

```hbs
{{countByCondition problem "status" "to do"}}
```

<a name="ArrayOfObjectsHBSHelper+filterValues"></a>

### arrayOfObjectsHBSHelper.filterValues(array, keyword, arrOfKeys) ⇒ <code>array</code>

**Kind**: instance method of [<code>ArrayOfObjectsHBSHelper</code>](#ArrayOfObjectsHBSHelper)  
**Returns**: <code>array</code> - of objects  
**Date**: 2022-02-17  
**Author**: lezzles11 :) - www.github.com/lezzles11  

| Param     | Type               |
|-----------|--------------------|
| array     | <code>array</code> |
| keyword   | <code>any</code>   |
| arrOfKeys | <code>any</code>   |

**Example**  

```hbs
{{#filterValues problem "you" "whatshouldbe"}}

<div class="message">
<div class="content">
hi
{{problem}}<br />
{{whatshouldbe}}<br />
{{whatactuallyis}}<br />
{{hypothesis}}
</div>
</div>
{{/filterValues}}
```

<a name="ArrayOfObjectsHBSHelper+sortAsc"></a>

### arrayOfObjectsHBSHelper.sortAsc(array, property) ⇒ <code>array</code>

**Kind**: instance method of [<code>ArrayOfObjectsHBSHelper</code>](#ArrayOfObjectsHBSHelper)  
**Returns**: <code>array</code> - of objects  
**Date**: 2022-02-17  
**Author**: lezzles11 :) - www.github.com/lezzles11  

| Param    | Type               |
|----------|--------------------|
| array    | <code>array</code> |
| property | <code>any</code>   |

**Example**  

```hbs
{{#sortAsc problem "seconds" "string"}}
{{problem}} {{whatshouldbe}}
{{/sortAsc}}
```

<a name="ArrayOfObjectsHBSHelper+sortDesc"></a>

### arrayOfObjectsHBSHelper.sortDesc(array, property) ⇒ <code>array</code>

**Kind**: instance method of [<code>ArrayOfObjectsHBSHelper</code>](#ArrayOfObjectsHBSHelper)  
**Returns**: <code>array</code> - of objects  
**Date**: 2022-02-17  
**Author**: lezzles11 :) - www.github.com/lezzles11  

| Param    | Type               |
|----------|--------------------|
| array    | <code>array</code> |
| property | <code>any</code>   |

**Example**  

```hbs
{{#sortAsc problem "seconds" "string"}}
{{problem}} {{whatshouldbe}}
{{/sortAsc}}
```

<a name="ArrayOfObjectsHBSHelper+contains"></a>

### arrayOfObjectsHBSHelper.contains(array, property) ⇒ <code>array</code>

**Kind**: instance method of [<code>ArrayOfObjectsHBSHelper</code>](#ArrayOfObjectsHBSHelper)  
**Returns**: <code>array</code> - of objects  
**Date**: 2022-02-17  
**Author**: lezzles11 :) - www.github.com/lezzles11  

| Param    | Type               |
|----------|--------------------|
| array    | <code>array</code> |
| property | <code>any</code>   |

**Example**  

```hbs
{{#arrContains problem "status" "doing"}}
<div class="message">{{problem}}
{{whatactuallyis}}
{{whatshouldbe}}
{{hypothesis}}{{plan}}</div>
{{/arrContains}}
```

<a name="ArrayOfObjectsHBSHelper+doesNotContain"></a>

### arrayOfObjectsHBSHelper.doesNotContain(array, property) ⇒ <code>array</code>

**Kind**: instance method of [<code>ArrayOfObjectsHBSHelper</code>](#ArrayOfObjectsHBSHelper)  
**Returns**: <code>array</code> - of objects  
**Date**: 2022-02-17  
**Author**: lezzles11 :) - www.github.com/lezzles11  

| Param    | Type               |
|----------|--------------------|
| array    | <code>array</code> |
| property | <code>any</code>   |

**Example**  

```hbs
{{#doesNotContain problem "status" "doing"}}
<div class="message">{{problem}}
{{whatactuallyis}}
{{whatshouldbe}}
{{hypothesis}}{{plan}}</div>
{{/doesNotContain}}
```

<a name="ArrayOfObjectsHBSHelper+filterAndSortObject"></a>

### arrayOfObjectsHBSHelper.filterAndSortObject(data, object, sortValue, sortType, asc, limit) ⇒ <code>any</code>

**Kind**: instance method of [<code>ArrayOfObjectsHBSHelper</code>](#ArrayOfObjectsHBSHelper)  
**Date**: 2022-02-17  

| Param     | Type             | Default           |
|-----------|------------------|-------------------|
| data      | <code>any</code> |                   |
| object    | <code>any</code> |                   |
| sortValue | <code>any</code> |                   |
| sortType  | <code>any</code> |                   |
| asc       | <code>any</code> | <code>true</code> |
| limit     | <code>any</code> |                   |

<a name="ArrayOfObjectsHBSHelper+filterAndSort"></a>

### arrayOfObjectsHBSHelper.filterAndSort(of, containsThisWord, arrOfKeys, sortValue, asc) ⇒ <code>array</code>

**Kind**: instance method of [<code>ArrayOfObjectsHBSHelper</code>](#ArrayOfObjectsHBSHelper)  
**Returns**: <code>array</code> - of objects  
**Date**: 2022-02-17  
**Author**: lezzles11 :) - www.github.com/lezzles11  

| Param            | Type               | Default           | Description |
|------------------|--------------------|-------------------|-------------|
| of               | <code>array</code> |                   | objects     |
| containsThisWord | <code>any</code>   |                   |             |
| arrOfKeys        | <code>any</code>   |                   |             |
| sortValue        | <code>any</code>   |                   |             |
| asc              | <code>any</code>   | <code>true</code> |             |

**Example**  

```hbs
{{#filterAndSort problem 5 "hi" "problem" "string" true }}
{{problem}}
{{whatactuallyis}}
{{whatshouldbe}}
{{hypothesis}}{{plan}}
{{/filterAndSort}}
```

<a name="ArrayOfObjectsHBSHelper+group"></a>

### arrayOfObjectsHBSHelper.group(of, groupByCondition, dictionary) ⇒ <code>array</code>

group(array, "status")

**Kind**: instance method of [<code>ArrayOfObjectsHBSHelper</code>](#ArrayOfObjectsHBSHelper)  
**Returns**: <code>array</code> - of objects  
**Date**: 2022-02-17  
**Author**: lezzles11 :) - www.github.com/lezzles11  

| Param            | Type               | Description |
|------------------|--------------------|-------------|
| of               | <code>array</code> | objects     |
| groupByCondition | <code>any</code>   |             |
| dictionary       | <code>any</code>   |             |

<a name="ArrayOfObjectsHBSHelper+parentAnArray"></a>

### arrayOfObjectsHBSHelper.parentAnArray(getAll, getAllSecond, firstTableName, secondTableName) ⇒ <code>array</code>

**Kind**: instance method of [<code>ArrayOfObjectsHBSHelper</code>](#ArrayOfObjectsHBSHelper)  
**Returns**: <code>array</code> - of objects  
**Date**: 2022-02-17  
**Author**: lezzles11 :) - www.github.com/lezzles11  

| Param           | Type               |
|-----------------|--------------------|
| getAll          | <code>array</code> |
| getAllSecond    | <code>array</code> |
| firstTableName  | <code>any</code>   |
| secondTableName | <code>any</code>   |

## HelpersCode

<a name="HelpersCode+hbsPrintCode"></a>

### helpersCode.hbsPrintCode(code, language) ⇒ <code>any</code>

hbsPrintCode

**Kind**: instance method of [<code>HelpersCode</code>](#HelpersCode)  
**Date**: 2022-01-29  
**Author**: lezzles11 :) - www.github.com/lezzles11  

| Param    | Type             |
|----------|------------------|
| code     | <code>any</code> |
| language | <code>any</code> |

**Example**  

```hbs
{{hbsPrintCode '{{> core/isotopeButtons}}'}}
```

<a name="HelpersCode+hbsPrintFile"></a>

### helpersCode.hbsPrintFile(filepath, language, ext) ⇒ <code>any</code>

**Kind**: instance method of [<code>HelpersCode</code>](#HelpersCode)  
**Date**: 2022-01-29  
**Author**: lezzles11 :) - www.github.com/lezzles11  

| Param    | Type             |
|----------|------------------|
| filepath | <code>any</code> |
| language | <code>any</code> |
| ext      | <code>any</code> |

**Example**  

```hbs
{{hbsPrintFileJS "buildComponents/button.js"}}
```

<a name="HelpersCode+hbsPrintFileJS"></a>

### helpersCode.hbsPrintFileJS(filepath, language, ext) ⇒ <code>any</code>

**Kind**: instance method of [<code>HelpersCode</code>](#HelpersCode)  
**Date**: 2022-01-29  
**Author**: lezzles11 :) - www.github.com/lezzles11  

| Param    | Type             |
|----------|------------------|
| filepath | <code>any</code> |
| language | <code>any</code> |
| ext      | <code>any</code> |

**Example**  

```hbs
{{hbsPrintFileJS "buildComponents/button.js"}}
```

<a name="HelpersCode+hbsPrint"></a>

### helpersCode.hbsPrint(options) ⇒ <code>any</code>

**Kind**: instance method of [<code>HelpersCode</code>](#HelpersCode)  
**Date**: 2022-01-29  
**Author**: lezzles11 :) - www.github.com/lezzles11  

| Param   | Type             |
|---------|------------------|
| options | <code>any</code> |

**Example**  

```hbs
{{#hbsPrint}}
  <span class="has-text-danger is-clickable icon is-size-5 m-4">
    <i
      class="icon icon-delete m-2 mx-4"
      onclick="axiosDelete('problem', '{{problem_id}}')"
      data-problem_id="{{problem_id}}"
    ></i>
  </span>
{{/hbsPrint}}
```

<a name="HelpersCode+hbsPrintHTML"></a>

### helpersCode.hbsPrintHTML(options) ⇒ <code>any</code>

**Kind**: instance method of [<code>HelpersCode</code>](#HelpersCode)  
**Date**: 2022-01-29  
**Author**: lezzles11 :) - www.github.com/lezzles11  

| Param   | Type             |
|---------|------------------|
| options | <code>any</code> |

**Example**  

```hbs
{{#hbsPrintHTML}} <i class="icon icon-highImp"> </i> {{/hbsPrintHTML}}
```

<a name="HelpersCode+hbsPrintJS"></a>

### helpersCode.hbsPrintJS(options) ⇒ <code>any</code>

**Kind**: instance method of [<code>HelpersCode</code>](#HelpersCode)  
**Date**: 2022-01-29  
**Author**: lezzles11 :) - www.github.com/lezzles11  

| Param   | Type             |
|---------|------------------|
| options | <code>any</code> |

**Example**  

```hbs
{#hbsPrintJS}} $(() => { let allKeywords = $(".hljs-keyword") }) {{/hbsPrintJS}}
```

## HelpersDate

### helpersDate.getDuration(dateOne, dateTwo) ⇒ <code>any</code>

**Kind**: instance method of [<code>HelpersDate</code>](#HelpersDate)  
**Date**: 2022-02-17  

| Param   | Type             |
|---------|------------------|
| dateOne | <code>any</code> |
| dateTwo | <code>any</code> |

**Example**  

```hbs
{{getDuration "00:20:00" "00:40:00"}}
```

<a name="HelpersDate+futureDate"></a>

### helpersDate.futureDate(date) ⇒ <code>any</code>

**Kind**: instance method of [<code>HelpersDate</code>](#HelpersDate)  
**Date**: 2022-02-17  

| Param | Type             |
|-------|------------------|
| date  | <code>any</code> |

**Example**  

```hbs
{{futureDate problem_created}} // 15 hours ago 
```

<a name="HelpersDate+pastDate"></a>

### helpersDate.pastDate(date) ⇒ <code>any</code>

**Kind**: instance method of [<code>HelpersDate</code>](#HelpersDate)  
**Date**: 2022-02-17  

| Param | Type             |
|-------|------------------|
| date  | <code>any</code> |

**Example**  

```hbs
{{pastDate problem_created}} // in 15 hours
```

<a name="HelpersDate+getDifferenceInMonths"></a>

### helpersDate.getDifferenceInMonths(one, two) ⇒ <code>any</code>

**Kind**: instance method of [<code>HelpersDate</code>](#HelpersDate)  
**Date**: 2022-02-17  

| Param | Type             |
|-------|------------------|
| one   | <code>any</code> |
| two   | <code>any</code> |

**Example**  

```hbs
{{getDifferenceInDays created end}}
```

<a name="HelpersDate+getDifferenceInDays"></a>

### helpersDate.getDifferenceInDays(one, two) ⇒ <code>any</code>

**Kind**: instance method of [<code>HelpersDate</code>](#HelpersDate)  
**Date**: 2022-02-17  

| Param | Type             |
|-------|------------------|
| one   | <code>any</code> |
| two   | <code>any</code> |

**Example**  

```hbs
{{getDifferenceInDays created end}} 
```

<a name="HelpersDate+getDifferenceInMinutes"></a>

### helpersDate.getDifferenceInMinutes(one, two) ⇒ <code>any</code>

**Kind**: instance method of [<code>HelpersDate</code>](#HelpersDate)  
**Date**: 2022-02-17  

| Param | Type             |
|-------|------------------|
| one   | <code>any</code> |
| two   | <code>any</code> |

**Example**  

```hbs
{{getDifferenceInMinutes created end}}
```

<a name="HelpersDate+format"></a>

### helpersDate.format(date, type) ⇒ <code>any</code>

**Kind**: instance method of [<code>HelpersDate</code>](#HelpersDate)  
**Date**: 2022-02-17  

| Param | Type             |
|-------|------------------|
| date  | <code>any</code> |
| type  | <code>any</code> |

**Example**  

```hbs
{{format created "ll"}}
```

## HelpersIfElse

**Kind**: instance method of [<code>HelpersIfElse</code>](#HelpersIfElse)  
**Date**: 2022-01-29  
**Author**: lezzles11 :) - www.github.com/lezzles11  

| Param   | Type             |
|---------|------------------|
| v1      | <code>any</code> |
| v2      | <code>any</code> |
| options | <code>any</code> |

**Example**  

```hbs
{{#ifLength problem task}}
array problem longer than task
{{else}}
not longer
{{/ifLength}}
```

<a name="HelpersIfElse+ifLengthGreaterThan"></a>

### helpersIfElse.ifLengthGreaterThan(array, options) ⇒ <code>any</code>

If the length of the array is greater than a number then render it

**Kind**: instance method of [<code>HelpersIfElse</code>](#HelpersIfElse)  
**Date**: 2022-01-29  
**Author**: lezzles11 :) - www.github.com/lezzles11  

| Param   | Type             |
|---------|------------------|
| array   | <code>any</code> |
| options | <code>any</code> |

**Example**  

```hbs
{{#ifLengthGreaterThan task 3}}
length of task is greater than 3
{{else}}
not longer than one
{{/ifLengthGreaterThan}}
```

(base) lesleycheung@Lesleys-MBP modules % node save.js
<a name="HelpersIfElse"></a>

## HelpersIfElse

**Kind**: global class  
**Date**: 2022-01-29  
**Author**: lezzles11 :) - www.github.com/lezzles11  

* [HelpersIfElse](#HelpersIfElse)
    - [new HelpersIfElse()](#new_HelpersIfElse_new)
    - [.ifLength(v1, v2, options)](#HelpersIfElse+ifLength) ⇒ <code>any</code>
    - [.ifLengthGreaterThan(array, options)](#HelpersIfElse+ifLengthGreaterThan) ⇒ <code>any</code>
    - [.ifEmpty(array, options)](#HelpersIfElse+ifEmpty) ⇒ <code>any</code>

<a name="new_HelpersIfElse_new"></a>

### new HelpersIfElse()

let helpersIfElse = new HelpersIfElse()

<a name="HelpersIfElse+ifLength"></a>

### helpersIfElse.ifLength(v1, v2, options) ⇒ <code>any</code>

If the length of the array is above 0, then render this, otherwise, render something else

**Kind**: instance method of [<code>HelpersIfElse</code>](#HelpersIfElse)  
**Date**: 2022-01-29  
**Author**: lezzles11 :) - www.github.com/lezzles11  

| Param   | Type             |
|---------|------------------|
| v1      | <code>any</code> |
| v2      | <code>any</code> |
| options | <code>any</code> |

**Example**  

```hbs
{{#ifLength problem task}}
array problem longer than task
{{else}}
not longer
{{/ifLength}}
```

<a name="HelpersIfElse+ifLengthGreaterThan"></a>

### helpersIfElse.ifLengthGreaterThan(array, options) ⇒ <code>any</code>

If the length of the array is greater than a number then render it

**Kind**: instance method of [<code>HelpersIfElse</code>](#HelpersIfElse)  
**Date**: 2022-01-29  
**Author**: lezzles11 :) - www.github.com/lezzles11  

| Param   | Type             |
|---------|------------------|
| array   | <code>any</code> |
| options | <code>any</code> |

**Example**  

```hbs
{{#ifLengthGreaterThan task 3}}
length of task is greater than 3
{{else}}
not longer than one
{{/ifLengthGreaterThan}}
```

<a name="HelpersIfElse+ifEmpty"></a>

### helpersIfElse.ifEmpty(array, options) ⇒ <code>any</code>

**Kind**: instance method of [<code>HelpersIfElse</code>](#HelpersIfElse)  
**Date**: 2022-02-17  
**Author**: lezzles11 :) - www.github.com/lezzles11  

| Param   | Type             |
|---------|------------------|
| array   | <code>any</code> |
| options | <code>any</code> |

**Example**  

```hbs
{{#ifEmpty problem}}
hello
{{else}}
fill in this form
{{/ifEmpty}}
```

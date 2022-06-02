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

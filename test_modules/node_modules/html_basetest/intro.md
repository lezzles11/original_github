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

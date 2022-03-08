# Purpose

- Defines common regexp patterns
- Keep all important definitions here 
## how to use 
```js
const { git, node_modules } = require("define_me")
let check = new RegExp(git)
let str = ".git"
console.log(check.test(str));
```
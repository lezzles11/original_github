
# know_youre_real
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Downloads](https://img.shields.io/npm/dw/know_youre_real)
[![here](https://github.com/zen-out/zen-out.github.io/blob/master/assets/images/know_youre_real.png)](https://github.com/zen-out/zen-out.github.io/blob/master/assets/images/know_youre_real.png)

## Problem Statement: 
- Difficult to integrate login and signup securely and convenient
- Maybe check devices -> does the device match? 

##### How to use - less than 10 steps in implementing authentication (given familiarity with pg and knex)

1. Create knex migrations with user and device table 
Both user and device tables require these following values: 

## User table
```js
 table.increments("id").primary();
  table.string("email").unique();
table.boolean("logged_in")
 table.string("hash");
```
## Device Table
```js
table.increments("id").primary();
        table.integer("user_id").unsigned().references("user.id").onUpdate("CASCADE").onDelete("CASCADE")
        table.string("type")
        table.string("device")
        table.timestamp("last_login")
        table.timestamp("created").defaultTo(knex.fn.now());
```
2. Run migrations 

3. For post signup route 
- Checks if email already exists
- Checks if email is valid 
- Changes password to hash 
- Adds device 
- Returns user object 
```js
const kyr = require("know_youre_real")
const {see, hourglass} = require("code_clarity")
app.post("/api/signup/", async(req, res) => {
  let postAndGetUser = await kyr.signup(req, knex, req.body)
  // returns a user object that you can send to the frontend
    if (postAndGetUser.error) {
    see.problem(postAndGetUser.error)
see.problem(postAndGetUser.location)
see.should(postAndGetUser.expected)
// handle error
  } else {
    res.render("dashboard", {user: postAndGetUser})
  }
})
```

4. For post login route 
- Transforms hash to password
- Changes logged_in in user table to true 
- Changes last logged in date in device table
```js
const kyr = require("know_youre_real")
const {see, hourglass} = require("code_clarity")
app.post("/api/login/", async(req, res) => {
  let postAndGetUser = await login(req, knex, req.body)
  // returns a user object that you can send to the frontend
  if (postAndGetUser.error) {
    see.problem(postAndGetUser.error)
see.problem(postAndGetUser.location)
see.should(postAndGetUser.expected)
// handle error
  } else {
    res.render("dashboard", {user: postAndGetUser})
  }
})
```

5. For logout 
```js
const kyr = require("know_youre_real")
const {see, hourglass} = require("code_clarity")
app.post("/api/logout/:user_id", async(req, res) => {
  let id = parseInt(req.params.user_id)
  let getBoolean = await kyr.logout(id)
  if (getBoolean === true) {
// redirect to home
  } else {
// redirect to error page
  }
})
```
6. And for every subsequent route 
- Checks if device login is still in its verification period (last login + 14 days)
- If user is currently logged in, which are only changeable via signup/login functions (which it checks in the user table)
```js
const kyr = require("know_youre_real")
const {see, hourglass} = require("code_clarity")
app.post("/dashboard/", async(req, res) => {
  let getVerified = await kyr.verifyUserRoute(req, knex, user_id, 14)
  // returns a user object that you can send to the frontend
  if (getVerified.error) {
    see.problem(postAndGetUser.error)
see.problem(postAndGetUser.location)
see.should(postAndGetUser.expected)
// handle error
  } else {
    // redirect to dashboard
  }
})
```

## Frontend

7. 
```js
axios.post(userObject).then((response) => {
if (response.error) {

} else {
  let userObject = kyr.confirm_signup_login(response, "/dashboard")
}
})
```

8. Pull from local storage 
```js
// will return id 
let id = kyr.verify_local_storage()
axios.post(`/api/user/${id}/task`, object).then((response) => {

}) 
```

9. Redirect to another page after logout 
<button onclick="kyr.confirm_logout('/signup')">Logout</button>

#### Example

```js
  let sampleObject = {
        email: "lesleyc.2@gmail.com",
        password: "testtest"
    }
        let firstSignup = await signup(sampleRequest, knex, sampleObject)
        console.log("🚀 ~ file: routes.js ~ line 210 ~ testHandlePost ~ firstSignup", firstSignup)
    let firstLogin = await login(sampleRequest, knex, sampleObject)
    console.log("🚀 ~ file: routes.js ~ line 194 ~ testHandlePost ~ firstLogin", firstLogin)
    let verify = await verifyUserRoute(sampleRequest, knex, firstLogin.id, 14)
    console.log("🚀 ~ file: routes.js ~ line 238 ~ testHandlePost ~ verify", verify)
        let thenLogout = await logout(knex, firstLogin.id)
        console.log("🚀 ~ file: routes.js ~ line 284 ~ testHandlePost ~ thenLogout", thenLogout)
```
### Frontend
```js

    <script src="./node_modules/know_youre_real/dist/frontend.js"></script>
    <script>
        $(() => {
            $(".signup").click(function(event) {

                let user = confirm_signup_login({
                    id: 4,
                    email: "whatsup"
                }, "/")
                console.log(user)
            })
            $(".verify").click(function(event) {
                let verify = verify_local_storage()
                console.log(verify)
            })
            $(".logout").click(function(event) {
                confirm_logout("/")
            })
        })
    </script>
```
## Instructions: 
```npm install know_youre_real ``` 
 ``` const kyr =  require('know_youre_real')```

## If utilizing in html...: 
```<script src="./node_modules/know_youre_real/index.js"></script> ``` 
 ``` const output =  know_youre_real.method(parameter)```

## Functions

<dl>
<dt><a href="#passwordToHash">passwordToHash(password)</a> ⇒ <code>string</code></dt>
<dd><p>passwordToHash</p>
</dd>
<dt><a href="#hashToPassword">hashToPassword(password, hash)</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#postDevice">postDevice(knex, object)</a> ⇒ <code>any</code></dt>
<dd><ol>
<li>Get device</li>
<li>If device exists</li>
<li>Update the last login date </li>
<li>Else, create new device </li>
<li>Return device</li>
</ol>
</dd>
<dt><a href="#signup">signup(knex, userObject)</a> ⇒ <code>any</code></dt>
<dd><ol>
<li>Will grab user from user table </li>
<li>If user exists, will return error object </li>
<li>Otherwise, will change logged_in to true </li>
<li>Will set last_login to today&#39;s date.</li>
</ol>
</dd>
<dt><a href="#login">login(knex, userObject)</a> ⇒ <code>any</code></dt>
<dd><ul>
<li>Transforms hash to password</li>
<li>Changes logged_in in user table to true </li>
<li>Changes last logged in date in device table</li>
</ul>
</dd>
<dt><a href="#verifyUserRoute">verifyUserRoute(req, res, next)</a> ⇒ <code>any</code></dt>
<dd><ol>
<li>Checks if user is logged in</li>
</ol>
</dd>
<dt><a href="#logout">logout(knex, user_id)</a> ⇒ <code>any</code></dt>
<dd><ol>
<li>Checks if user is logged in </li>
<li>If they are, change logged in to false</li>
</ol>
</dd>
</dl>

<a name="passwordToHash"></a>

## passwordToHash(password) ⇒ <code>string</code>
passwordToHash

**Kind**: global function  
**Returns**: <code>string</code> - hash  
**Date**: 2022-03-11  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| password | <code>any</code> | 

<a name="hashToPassword"></a>

## hashToPassword(password, hash) ⇒ <code>boolean</code>
**Kind**: global function  
**Date**: 2022-03-11  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| password | <code>string</code> | 
| hash | <code>string</code> | 

<a name="postDevice"></a>

## postDevice(knex, object) ⇒ <code>any</code>
1. Get device
2. If device exists
3. Update the last login date 
4. Else, create new device 
5. Return device

**Kind**: global function  
**Date**: 2022-03-16  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| knex | <code>any</code> | 
| object | <code>any</code> | 

**Example**  
```js
userObject["user_id"] = postUser.id
            userObject["device"] = req.device.parser.useragent.source;
            userObject["type"] = req.device.type;
            let getPost = await postDevice(knex, userObject)
```
<a name="signup"></a>

## signup(knex, userObject) ⇒ <code>any</code>
1. Will grab user from user table 
2. If user exists, will return error object 
3. Otherwise, will change logged_in to true 
4. Will set last_login to today's date.

**Kind**: global function  
**Date**: 2022-03-16  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| knex | <code>any</code> | 
| userObject | <code>any</code> | 

**Example**  
```js
let firstSignup = await signup(sampleRequest, knex, sampleObject)
```
<a name="login"></a>

## login(knex, userObject) ⇒ <code>any</code>
- Transforms hash to password
- Changes logged_in in user table to true 
- Changes last logged in date in device table

**Kind**: global function  
**Date**: 2022-03-16  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| knex | <code>any</code> | 
| userObject | <code>any</code> | 

**Example**  
```js
// let firstLogin = await login(sampleRequest, knex, sampleObject)
```
<a name="verifyUserRoute"></a>

## verifyUserRoute(req, res, next) ⇒ <code>any</code>
1. Checks if user is logged in

**Kind**: global function  
**Date**: 2022-03-16  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| req | <code>any</code> | 
| res | <code>any</code> | 
| next | <code>any</code> | 

**Example**  
```js
// let verify = await verifyUserRoute(sampleRequest, knex, 1)
```
<a name="logout"></a>

## logout(user_id) ⇒ <code>any</code>
1. Checks if user is logged in 
2. If they are, change logged in to false

**Kind**: global function  
**Date**: 2022-03-16  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| knex | <code>database</code> | 
| user_id | <code>any</code> | 

**Example**  
```js
let thenLogout = await logout(knex, 1) // returns true or false; 
```


## Functions

<dl>
<dt><a href="#confirm_signup_login">confirm_signup_login(responseFromLoginSignup, route)</a> ⇒ <code>object</code></dt>
<dd><ul>
<li>Will stringify parameter</li>
<li>Set local storage &quot;user&quot; to stringed object</li>
</ul>
</dd>
<dt><a href="#verify_local_storage">verify_local_storage()</a> ⇒ <code>number</code></dt>
<dd><p>goes to local storage and parses user. if user and user.token, then will return parseInt(user.id)</p>
</dd>
<dt><a href="#confirm_logout">confirm_logout(routeToGoAfter)</a></dt>
<dd><ul>
<li>removes from local storage user
replaces window.location with login</li>
</ul>
</dd>
</dl>

<a name="confirm_signup_login"></a>

## confirm\_signup\_login(responseFromLoginSignup, route) ⇒ <code>object</code>
- Will stringify parameter
- Set local storage "user" to stringed object

**Kind**: global function  
**Date**: 2022-03-16  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| responseFromLoginSignup | <code>object</code> | 
| route | <code>string</code> | 

**Example**  
```js
confirm_signup_login(object, "/dashboard")
```
<a name="verify_local_storage"></a>

## verify\_local\_storage() ⇒ <code>number</code>
goes to local storage and parses user. if user and user.token, then will return parseInt(user.id)

**Kind**: global function  
**Returns**: <code>number</code> - user id  
**Date**: 2021-12-30  
<a name="confirm_logout"></a>

## confirm\_logout(routeToGoAfter)
* removes from local storage user
replaces window.location with login

**Kind**: global function  
**Date**: 2022-03-16  
**Author**: zen-out  

| Param | Type |
| --- | --- |
| routeToGoAfter | <code>string</code> | 

**Example**  
```js
confirm_logout("/login")
```

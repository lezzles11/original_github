# crystal_clear


### March 3, 2022 (goal)
- [x ] Finish this design document 
- [ x] Finish writing all update, get, post, delete and edit model classes 
- [ x] Create tests for these classes
- [ ] Finish writin update, get, post delete and edit for controller 
- [ ] Create supertest
- [ ] Create a clear checklist method on how to write and integrate classes 
- [ ] Go slowly. Due in a week. 

### Date (actual)

## Definition of Done: 
Able to install this package, then deploy it within 30 minutes. 

## imagine that you are teaching samuel ng how to do this 

## dreams
 - could run command npm run create_db -n task
 - could run command npm run create_routes -n task 
 - could run command npm run create_test -n task 
 - could install this package and then quickly deploy a website for games or something 
 - all i would need to is to change the .env variables

# hbs_auth_temp
Problem: Not currently a streamlined way to install the basic needed functionalities to deploy a fullstack applications. The purpose here is to essentially make it as easy as possible to get set up and focus instead on the functionalities of a website, rather than on the setup of the database and controller. 

What should be: It should be easy to install and create a package that will essentially help you quickly deploy a package
What actually is: It's difficult to do so, because it takes a while to set up the package. 
Hypothesis: Think less. Create an easy to use template that will help you get set up. 
Plan: Implement service, controller, basic hbs template, test classes, clear instructions on how to, let's say, make a to do list application. 

## VSCode Extensions 

- [project-manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)
- [draw.io](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio)
- [snippets](https://marketplace.visualstudio.com/items?itemName=rebornix.project-snippets)

## Notable Features
 - Able to integrate into profile easily 
 - Ensures that you have legitimate commit messages
   - Commits always need to be followed by "library", "feature", "util", "test", "docs", "refactor", "style", "bug", "deploy", "fix"
   - e.g., docs: clear readme
  - Ensures that you have legitimate documentation 
   - go to localhost:3000/swag and you will see the documentation
   - go to localhost:3000/js_docs and you will documentation for your classes 
- Ensures easy and straightforward deployment
   - After setting up aws configuration, you will be able to see your site deployed (will fullstack and back)

## Organization of Folders  

Ideally: if everything goes well and is tested, when the user downloads this folder, they will purely be able to work from this folder.

    ├── app.js # root folder 
    ├── backend 
    │   ├── controller (folder names should correspond to feature)       
        │   ├── auth
            │   ├── index.js     
            │   ├── index.test.js 
        │   ├── pages
            │   ├── index.js     
            │   ├── index.test.js   
    │   ├── queries (folder names should correspond to table names)
        │   ├── user
            │   ├── index.js     
            │   ├── index.test.js 
            │   ├── playground.js (should run basic post, edit, delete, get, getall)  
        │   ├── eachTable
            │   ├── index.js     
            │   ├── index.test.js   
            │   ├── playground.js (should run basic post, edit, delete, get, getall)  
    │   └── knex
        │   ├── knexfile.js     
        │   ├── migrations
        │   └── seeds 
        │   ├── getKnex.js // will return production, development or test database 
    ├── docs
    │   ├── jsdocs # can be seen on /jsdocs     
    │   ├── swagger # can be seen on /swag
    │   ├── diagrams 
        │   ├── use_case  
        │   ├── user_interface        
        │   ├── db_diagram 
    │   ├── bible  
        │   ├── start        
        │   ├── tools
        │   ├── personal 
        │   ├── deploy               
    ├── frontend
    │   ├── views  
        │   ├── layouts    
            │   ├── main.hbs       
            │   ├── auth.hbs      
            │   ├── lib-links.hbs    
            │   ├── my-links.hbs 
        │   ├── pages    
            │   ├── signup.hbs 
            │   ├── payment.hbs       
            │   ├── login.hbs      
            │   ├── forgot-pass.hbs    
            │   ├── home.hbs 
            │   ├── error.hbs 
            │   ├── settings.hbs 
        │   ├── partials    
            │   ├── global  
    │   ├── public  
        │   ├── views        
        │   ├── public  
            │   ├── libraries        
            │   ├── scss    
            │   ├── js  
            │   ├── modules 
    ├── dreamcatcher
        │   ├── logs
    │   ├── README.md
## Snippets 


## Sprint

Libraries: 
- [node_basetest](https://www.npmjs.com/package/node_basetest)
A easy way to test all your classes. 

- [format_date_time_moment](https://www.npmjs.com/package/format_date_time_moment)
An easy way to format your date time utilities 

- [effective_knex](https://www.npmjs.com/package/effective_knex)
An easy to clean your post objects 

- [classic_axios]
- [array_helperz](https://www.npmjs.com/package/array_helperz)
- [lesleys_hbs](https://www.npmjs.com/package/lesleys_hbs)
- [make_fakes](https://www.npmjs.com/package/make_fakes)
- [code_clarity](https://www.npmjs.com/package/code_clarity)



## Screen recording



## Getting Started

- [ ] install the package
```js
npm install 
```
- [ ] test 
```
npm run test
```
- [ ] integrate tested module 
```

```



## playground.js 

- This file will demonstrate how to utilize the module. 

```

```

## examples.js 

- This file will demonstrate use cases from other modules 





# Design Guidelines
This section defines the requirements for this module.
## Requirements 

### API 
1. The developer will be able to add routes on /api/tableName
2. The developer will be able to see the list of users 
3. The developer will be able to delete, edit, post, get and get all for table names 

### Helper Functionalities
1. Developers will able to quickly add to helper methods 
2. Developers can utilize see.problem("to indicate what the problem is"), see.is("what is actually happening"), see.should("what should be happening"), see.step("1. finish this"), see.motherlode("always be creating requirement documents")
3. 

### Auth Service Class
The auth service class should include methods that will allow a user to signup, login, logout as well as retrieve their password. 

1. The Auth Service class should utilize the bcrypt package to create a hash for the user's password.
2. Users will receive errors for signup if the user already exists
3. Users will receive errors for login if the user has already registered, if their password is inaccurate 

### Auth Controller Class 
The auth controller class should 

1. The auth controller class is linked to /signup, /login, /forgotpass
2. The auth controller class should send out 

### Task Service Class
The task service class should allow the developer to post, edit, delete, get and get all. 

### Task Controller Class 
1. The task controller class should 


### Documentation 
1. The developer can quickly add documentation to the classes, which can then be viewed on  

## Use Case 

### Actors

#### Developer 
The developer should be able to quickly test for the service and controller classes. 

#### User
- The user can login, signup and get an email to verify their email address. They can also 

#### Admin

## Actions 

### Create 

### Get 

### Process 


## Implementation 

### Class Dictionary

#### AuthService
##### Description
##### Methods

Method | Type | Description
-------|------|------------
       | B1   | C1
A2     | B2   | C2
A3     | B3   | C3

##### Associations 

#### AuthController

#### TaskService
#### TaskController 



##### Sample Script

```js

```
## Testing 
- [ ] Service classes
- 

## Issues and Resolutions :flashlight:

**ERROR**: :gear:
**RESOLUTION**: :key:

| Issue                | Where it occurs | Possible solution | Actual solution |
|----------------------|:---------------:|:-----------------:|:---------------:|
| Creating a checklist |        H        |       2hrs        |     2.5hrs      |

#### What is one thing that I learned from doing this project? :books:

#### Credits :recycle:

[Jest](https://jestjs.io/)

#### Contributing :round_pushpin:

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Not sure how? Learn [Github](https://www.youtube.com/watch?v=3RjQznt-8kE&list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR)
Please make sure to update tests as appropriate.

#### License :memo:

console.log("🚀 ~ file: README.md ~ line 290 ~ # crystal_clear

## Definition of Done: 
Able to install this package, then deploy it within 30 minutes. 

## imagine that you are teaching samuel ng how to do this 

## dreams
 - could run command npm run create_db -n task
 - could run command npm run create_routes -n task 
 - could run command npm run create_test -n task 
 - could install this package and then quickly deploy a website for games or something 
 - all i would need to is to change the .env variables

# hbs_auth_temp
Problem: Not currently a streamlined way to install the basic needed functionalities to deploy a fullstack applications. The purpose here is to essentially make it as easy as possible to get set up and focus instead on the functionalities of a website, rather than on the setup of the database and controller. 

What should be: It should be easy to install and create a package that will essentially help you quickly deploy a package
What actually is: It's difficult to do so, because it takes a while to set up the package. 
Hypothesis: Think less. Create an easy to use template that will help you get set up. 
Plan: Implement service, controller, basic hbs template, test classes, clear instructions on how to, let's say, make a to do list application. 

## VSCode Extensions 

- [project-manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)
- [draw.io](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio)
- [snippets](https://marketplace.visualstudio.com/items?itemName=rebornix.project-snippets)

## Notable Features
 - Ensures that you have legitimate commit messages
   - Commits always need to be followed by "library", "feature", "util", "test", "docs", "refactor", "style", "bug", "deploy", "fix"
   - e.g., docs: clear readme
  - Ensures that you have legitimate documentation 
   - go to localhost:3000/swag and you will see the documentation
   - go to localhost:3000/js_docs and you will documentation for your classes 
- Ensures easy and straightforward deployment
   - After setting up aws configuration, you will be able to see your site deployed (will fullstack and back)

## Organization of Folders  

Ideally: if everything goes well and is tested, when the user downloads this folder, they will purely be able to work from this folder.

    ├── app.js # root folder 
    ├── backend 
    │   ├── controller (folder names should correspond to feature)       
        │   ├── auth
            │   ├── index.js     
            │   ├── index.test.js 
        │   ├── pages
            │   ├── index.js     
            │   ├── index.test.js   
    │   ├── queries (folder names should correspond to table names)
        │   ├── user
            │   ├── index.js     
            │   ├── index.test.js 
            │   ├── playground.js (should run basic post, edit, delete, get, getall)  
        │   ├── eachTable
            │   ├── index.js     
            │   ├── index.test.js   
            │   ├── playground.js (should run basic post, edit, delete, get, getall)  
    │   └── knex
        │   ├── knexfile.js     
        │   ├── migrations
        │   └── seeds 
        │   ├── getKnex.js // will return production, development or test database 
    ├── docs
    │   ├── jsdocs # can be seen on /jsdocs     
    │   ├── swagger # can be seen on /swag
    │   ├── diagrams 
        │   ├── use_case  
        │   ├── user_interface        
        │   ├── db_diagram 
    │   ├── bible  
        │   ├── start        
        │   ├── tools
        │   ├── personal 
        │   ├── deploy               
    ├── frontend
    │   ├── views  
        │   ├── layouts    
            │   ├── main.hbs       
            │   ├── auth.hbs      
            │   ├── lib-links.hbs    
            │   ├── my-links.hbs 
        │   ├── pages    
            │   ├── signup.hbs 
            │   ├── payment.hbs       
            │   ├── login.hbs      
            │   ├── forgot-pass.hbs    
            │   ├── home.hbs 
            │   ├── error.hbs 
            │   ├── settings.hbs 
        │   ├── partials    
            │   ├── global  
    │   ├── public  
        │   ├── views        
        │   ├── public  
            │   ├── libraries        
            │   ├── scss    
            │   ├── js  
            │   ├── modules 
    ├── dreamcatcher
        │   ├── logs
    │   ├── README.md
## Snippets 


## Sprint

Libraries: 
- [node_basetest](https://www.npmjs.com/package/node_basetest)
A easy way to test all your classes. 

- [format_date_time_moment](https://www.npmjs.com/package/format_date_time_moment)
An easy way to format your date time utilities 

- [knex_cleandata](https://www.npmjs.com/package/knex_cleandata)
An easy to clean your post objects 

- [classic_axios]
- [array_helperz](https://www.npmjs.com/package/array_helperz)
- [lesleys_hbs](https://www.npmjs.com/package/lesleys_hbs)
- [make_fakes](https://www.npmjs.com/package/make_fakes)
- [code_clarity](https://www.npmjs.com/package/code_clarity)

### March 3, 2022 (goal)
- [ ] Finish this design document 
- [ ] Finish writing all update, get, post, delete and edit model classes 
- [ ] Create tests for these classes
- [ ] Finish writin update, get, post delete and edit for controller 
- [ ] Create supertest
- [ ] Create a clear checklist method on how to write and integrate classes 
- [ ] Go slowly. Due in a week. 

### Date (actual)
- [ ] 
- [ ] Deploy


## Screen recording



## Getting Started

- [ ] install the package
```js
npm install 
```
- [ ] test 
```
npm run test
```
- [ ] integrate tested module 
```

```



## playground.js 

- This file will demonstrate how to utilize the module. 

```

```

## examples.js 

- This file will demonstrate use cases from other modules 





# Design Guidelines
This section defines the requirements for this module.
## Requirements 

### API 
1. The developer will be able to add routes on /api/tableName
2. The developer will be able to see the list of users 
3. The developer will be able to delete, edit, post, get and get all for table names 

### Helper Functionalities
1. Developers will able to quickly add to helper methods 
2. Developers can utilize see.problem("to indicate what the problem is"), see.is("what is actually happening"), see.should("what should be happening"), see.step("1. finish this"), see.motherlode("always be creating requirement documents")
3. 

### Auth Service Class
The auth service class should include methods that will allow a user to signup, login, logout as well as retrieve their password. 

1. The Auth Service class should utilize the bcrypt package to create a hash for the user's password.
2. Users will receive errors for signup if the user already exists
3. Users will receive errors for login if the user has already registered, if their password is inaccurate 

### Auth Controller Class 
The auth controller class should 

1. The auth controller class is linked to /signup, /login, /forgotpass
2. The auth controller class should send out 

### Task Service Class
The task service class should allow the developer to post, edit, delete, get and get all. 

### Task Controller Class 
1. The task controller class should 


### Documentation 
1. The developer can quickly add documentation to the classes, which can then be viewed on  

## Use Case 

### Actors

#### Developer 
The developer should be able to quickly test for the service and controller classes. 

#### User
- The user can login, signup and get an email to verify their email address. They can also 

#### Admin

## Actions 

### Create 

### Get 

### Process 


## Implementation 

### Class Dictionary

#### AuthService
##### Description
##### Methods

Method | Type | Description
-------|------|------------
       | B1   | C1
A2     | B2   | C2
A3     | B3   | C3

##### Associations 

#### AuthController

#### TaskService
#### TaskController 



##### Sample Script

```js

```
## Testing 
- [ ] Service classes
- 

## Issues and Resolutions :flashlight:

**ERROR**: :gear:
**RESOLUTION**: :key:

| Issue                | Where it occurs | Possible solution | Actual solution |
|----------------------|:---------------:|:-----------------:|:---------------:|
| Creating a checklist |        H        |       2hrs        |     2.5hrs      |

#### What is one thing that I learned from doing this project? :books:

#### Credits :recycle:

[Jest](https://jestjs.io/)

#### Contributing :round_pushpin:

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Not sure how? Learn [Github](https://www.youtube.com/watch?v=3RjQznt-8kE&list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR)
Please make sure to update tests as appropriate.

#### License :memo:

[MIT](https://choosealicense.com/licenses/mit/)", # crystal_clear

## Definition of Done: 
Able to install this package, then deploy it within 30 minutes. 

## imagine that you are teaching samuel ng how to do this 

## dreams
 - could run command npm run create_db -n task
 - could run command npm run create_routes -n task 
 - could run command npm run create_test -n task 
 - could install this package and then quickly deploy a website for games or something 
 - all i would need to is to change the .env variables

# hbs_auth_temp
Problem: Not currently a streamlined way to install the basic needed functionalities to deploy a fullstack applications. The purpose here is to essentially make it as easy as possible to get set up and focus instead on the functionalities of a website, rather than on the setup of the database and controller. 

What should be: It should be easy to install and create a package that will essentially help you quickly deploy a package
What actually is: It's difficult to do so, because it takes a while to set up the package. 
Hypothesis: Think less. Create an easy to use template that will help you get set up. 
Plan: Implement service, controller, basic hbs template, test classes, clear instructions on how to, let's say, make a to do list application. 

## VSCode Extensions 

- [project-manager](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager)
- [draw.io](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio)
- [snippets](https://marketplace.visualstudio.com/items?itemName=rebornix.project-snippets)

## Notable Features
 - Ensures that you have legitimate commit messages
   - Commits always need to be followed by "library", "feature", "util", "test", "docs", "refactor", "style", "bug", "deploy", "fix"
   - e.g., docs: clear readme
  - Ensures that you have legitimate documentation 
   - go to localhost:3000/swag and you will see the documentation
   - go to localhost:3000/js_docs and you will documentation for your classes 
- Ensures easy and straightforward deployment
   - After setting up aws configuration, you will be able to see your site deployed (will fullstack and back)

## Organization of Folders  

Ideally: if everything goes well and is tested, when the user downloads this folder, they will purely be able to work from this folder.

    ├── app.js # root folder 
    ├── backend 
    │   ├── controller (folder names should correspond to feature)       
        │   ├── auth
            │   ├── index.js     
            │   ├── index.test.js 
        │   ├── pages
            │   ├── index.js     
            │   ├── index.test.js   
    │   ├── queries (folder names should correspond to table names)
        │   ├── user
            │   ├── index.js     
            │   ├── index.test.js 
            │   ├── playground.js (should run basic post, edit, delete, get, getall)  
        │   ├── eachTable
            │   ├── index.js     
            │   ├── index.test.js   
            │   ├── playground.js (should run basic post, edit, delete, get, getall)  
    │   └── knex
        │   ├── knexfile.js     
        │   ├── migrations
        │   └── seeds 
        │   ├── getKnex.js // will return production, development or test database 
    ├── docs
    │   ├── jsdocs # can be seen on /jsdocs     
    │   ├── swagger # can be seen on /swag
    │   ├── diagrams 
        │   ├── use_case  
        │   ├── user_interface        
        │   ├── db_diagram 
    │   ├── bible  
        │   ├── start        
        │   ├── tools
        │   ├── personal 
        │   ├── deploy               
    ├── frontend
    │   ├── views  
        │   ├── layouts    
            │   ├── main.hbs       
            │   ├── auth.hbs      
            │   ├── lib-links.hbs    
            │   ├── my-links.hbs 
        │   ├── pages    
            │   ├── signup.hbs 
            │   ├── payment.hbs       
            │   ├── login.hbs      
            │   ├── forgot-pass.hbs    
            │   ├── home.hbs 
            │   ├── error.hbs 
            │   ├── settings.hbs 
        │   ├── partials    
            │   ├── global  
    │   ├── public  
        │   ├── views        
        │   ├── public  
            │   ├── libraries        
            │   ├── scss    
            │   ├── js  
            │   ├── modules 
    ├── dreamcatcher
        │   ├── logs
    │   ├── README.md
## Snippets 


## Sprint

Libraries: 
- [node_basetest](https://www.npmjs.com/package/node_basetest)
A easy way to test all your classes. 

- [format_date_time_moment](https://www.npmjs.com/package/format_date_time_moment)
An easy way to format your date time utilities 

- [knex_cleandata](https://www.npmjs.com/package/knex_cleandata)
An easy to clean your post objects 

- [classic_axios]
- [array_helperz](https://www.npmjs.com/package/array_helperz)
- [lesleys_hbs](https://www.npmjs.com/package/lesleys_hbs)
- [make_fakes](https://www.npmjs.com/package/make_fakes)
- [code_clarity](https://www.npmjs.com/package/code_clarity)

### March 3, 2022 (goal)
- [ ] Finish this design document 
- [ ] Finish writing all update, get, post, delete and edit model classes 
- [ ] Create tests for these classes
- [ ] Finish writin update, get, post delete and edit for controller 
- [ ] Create supertest
- [ ] Create a clear checklist method on how to write and integrate classes 
- [ ] Go slowly. Due in a week. 

### Date (actual)
- [ ] 
- [ ] Deploy


## Screen recording



## Getting Started

- [ ] install the package
```js
npm install 
```
- [ ] test 
```
npm run test
```
- [ ] integrate tested module 
```

```



## playground.js 

- This file will demonstrate how to utilize the module. 

```

```

## examples.js 

- This file will demonstrate use cases from other modules 





# Design Guidelines
This section defines the requirements for this module.
## Requirements 

### API 
1. The developer will be able to add routes on /api/tableName
2. The developer will be able to see the list of users 
3. The developer will be able to delete, edit, post, get and get all for table names 

### Helper Functionalities
1. Developers will able to quickly add to helper methods 
2. Developers can utilize see.problem("to indicate what the problem is"), see.is("what is actually happening"), see.should("what should be happening"), see.step("1. finish this"), see.motherlode("always be creating requirement documents")
3. 

### Auth Service Class
The auth service class should include methods that will allow a user to signup, login, logout as well as retrieve their password. 

1. The Auth Service class should utilize the bcrypt package to create a hash for the user's password.
2. Users will receive errors for signup if the user already exists
3. Users will receive errors for login if the user has already registered, if their password is inaccurate 

### Auth Controller Class 
The auth controller class should 

1. The auth controller class is linked to /signup, /login, /forgotpass
2. The auth controller class should send out 

### Task Service Class
The task service class should allow the developer to post, edit, delete, get and get all. 

### Task Controller Class 
1. The task controller class should 


### Documentation 
1. The developer can quickly add documentation to the classes, which can then be viewed on  

## Use Case 

### Actors

#### Developer 
The developer should be able to quickly test for the service and controller classes. 

#### User
- The user can login, signup and get an email to verify their email address. They can also 

#### Admin

## Actions 

### Create 

### Get 

### Process 


## Implementation 

### Class Dictionary

#### AuthService
##### Description
##### Methods

Method | Type | Description
-------|------|------------
       | B1   | C1
A2     | B2   | C2
A3     | B3   | C3

##### Associations 

#### AuthController

#### TaskService
#### TaskController 



##### Sample Script

```js

```
## Testing 
- [ ] Service classes
- 

## Issues and Resolutions :flashlight:

**ERROR**: :gear:
**RESOLUTION**: :key:

| Issue                | Where it occurs | Possible solution | Actual solution |
|----------------------|:---------------:|:-----------------:|:---------------:|
| Creating a checklist |        H        |       2hrs        |     2.5hrs      |

#### What is one thing that I learned from doing this project? :books:

#### Credits :recycle:

[Jest](https://jestjs.io/)

#### Contributing :round_pushpin:

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Not sure how? Learn [Github](https://www.youtube.com/watch?v=3RjQznt-8kE&list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR)
Please make sure to update tests as appropriate.

#### License :memo:

[MIT](https://choosealicense.com/licenses/mit/))
[MIT](https://choosealicense.com/licenses/mit/)
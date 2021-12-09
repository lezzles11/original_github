# Official Optee ReadMe

STARTHERE

# notes 

dec 8 2021

# currently, the sidebar with table has the most recent navbar

### User Stories :telescope:

1. Users will be able to solve their life problems

## Sprint :athletic_shoe:

| Done? | Component                                                                        | Priority | Estimated Time | Actual Time |
| ----- | -------------------------------------------------------------------------------- | :------: | :------------: | :---------: |
| x     | This checklist                                                                   |    H     |    30 mins     |             |
| x     | Read Documentation                                                               |    M     |    30 mins     |             |
| x     | Look at three examples                                                           | 30 mins  |                |             |
| x     | Complete basic example                                                           |    M     |    30 mins     |     15      |
| x     | Write tests for features                                                         |          |                |             |
| x     | follow feature                                                                   |          |                |             |
| x     | Dashboard Layout                                                                 |          |                |             |
| x     | Auth Layout                                                                      |          |                |             |
| x     | Dashboard Kanban Layout                                                          |          |                |             |
| x     | Dashboard Calendar Layout                                                        |          |                |             |
| x     | Settings Layout                                                                  |          |                |             |
| x     | Signup Component                                                                 |          |                |             |
| x     | Login Component                                                                  |          |                |             |
| x     | All components need to be named by theme                                         |          |                |             |
| x     | Write out the cucumber tests                                                     |    H     |                |             |
| x     | Debugging Table                                                                  |          |                |             |
| x     | Look at your past repositories                                                   |          |                |             |
|       | Notice that the table utilizes the handlebars template. How can you do the same? |          |                |             |
|       | Do one thing at a time.                                                          |          |                |             |
|       | Finish all queries                                                               |          |                |             |
|       | Login by tomorrow                                                                |          |                |             |
|       | dude stop meeting up with ppl lol                                                |          |                |             |
|       | Signup Form                                                                      |          |                |             |
| x     | Write down all routes                                                            |          |                |             |
| x     | Write down all database queries                                                  |          |                |             |
|       | Intro layout (look at the codepen example)                                       |          |                |             |
|       | Project page layout                                                              |          |                |             |
|       | Email function: look at the wedding template                                     |          |                |             |
|       |                                                                                  |          |                |             |
|       |                                                                                  |          |                |             |
|       |                                                                                  |          |                |             |
|       |                                                                                  |          |                |             |
|       |                                                                                  |          |                |             |
|       |                                                                                  |          |                |             |
|       |                                                                                  |          |                |             |
|       |                                                                                  |          |                |             |
|       |                                                                                  |          |                |             |
|       |                                                                                  |          |                |             |
|       |                                                                                  |          |                |             |
|       |                                                                                  |          |                |             |
|       |                                                                                  |          |                |             |

### Daily Stand Up :hourglass:

| Done? | Component                         | Priority | Estimated Time | Actual Time |
| ----- | --------------------------------- | :------: | :------------: | :---------: |
|       | Stepper for introduction          |          |                |             |
|       | Profile page for sharing projects |          |                |             |
|       |                                   |          |                |             |
|       |                                   |          |                |             |
|       |                                   |          |                |             |
|       |                                   |          |                |             |
|       |                                   |          |                |             |
|       |                                   |          |                |             |
|       |                                   |          |                |             |

## Issues and Resolutions :flashlight:

**ERROR**: :gear:
**RESOLUTION**: :key:

| Issue                | Where it occurs | Possible solution | Actual solution |
| -------------------- | :-------------: | :---------------: | :-------------: |
| Creating a checklist |        H        |       2hrs        |     2.5hrs      |

## Current Routing 

### Routes :hourglass:

# TODO: Need to also get by user id 

| Done? | Route                   | Method | Action |            Req Body Layout            | Renders         | Res | Res Status |
| ----- | ----------------------- | :----: | :----: | :-----------------------------------: | --------------- | --- | ---------- |
|       | /                       |        |        |                 main                  | pages/home/todo |     | 200        |
|       | /signup                 |  GET   |        |                 auth                  |                 |     | 200        |
|       | /signup                 |  POST  |        |                 auth                  |                 |     | 201/       |
|       | /login                  |        |        |                 auth                  |                 |     |            |
|       | /login                  |        |        |                 auth                  |                 |     |            |
|       | /intro                  |  GET   |        |                 full                  | intro/intro     |     | 200        |
|       | /intro                  |  GET   |        |      naked (no styling or libs)       | loader/loader   |     | 200        |
|       | /db/kanban              |        |        |                  db                   |                 |     | 200        |
|       | /db/table               |        |        |            topbottomstick             |                 |     | 200        |
|       | /db/timeline            |        |        |                  db                   |                 |     | 200        |
|       | /api/get/:type          |        |        |                                       |                 |     | 200 arr    |
|       | /api/get/:type/:id      |        |        |                                       |                 |     | 200 obj    |
|       | /api/condition          |        |        | {condition: "status", value: "to do"} |                 |     | 200 arr    |
|       | /api/joins/:type/:type2 |        |        |                 CHECK                 |                 |     | 200  arr   |
|       | /api/delete/:type/:id   |        |        |                                       |                 |     | 200  arr   |
|       | /api/post/:type         |        |        |                                       |                 |     | 200 arr    |
|       | /api/columns/:type      |        |        |                                       |                 |     | 200 arr    |

## Current Database 

### Notes: each database, when exported, is already initialized 

 - [ x] implemented bcrypt

| Done? | method                                           | method | returns | class |
| ----- | ------------------------------------------------ | :----: | ------- | ----- |
|       | signupWithEmail(name, email, password)           |  POST  | object  | auth  |
|       | getUserById(id)                                  |  GET   | object  |       |
|       | getUserByEmail(email)                            |  GET   | object  |       |
|       | loginWithEmail(email, password)                  |  POST  | object  |       |
|       | getByImportanceJoin(table, table2, values = "*") |  GET   | arr     | basic |
|       | getByMostRecent(table)                           |  GET   |         |       |
|       | search(table, search, keyword)                   |  GET   |         |       |
|       | getByMostRecent(table)                           |  GET   |         |       |
|       | getDescData(table, condition) "problem", "title" |  GET   |         |       |
|       | getAscData(table condition)                      |        |         |       |
|       | getById(table, id)                               |        | object  |       |
|       | getAllByHourglass(table) -                       |        |         |       |
|       | getByHourglassCondition(table, col, val)         |        |         |       |
|       | post(object)   - calls post and edit             |        | object  |       |
|       | delete(table, id)                                |        | id      |       |
|       | getByCondition(table, table2, col, val)          |        | arr     |       |
|       | getAll(table)                                    |        | arr     |       |
|       |                                                  |        |         |       |
|       |                                                  |        |         |       |
|       |                                                  |        |         |       |
|       |                                                  |        |         |       |

## Current Components 

### Rules for components: always need to have all the colors and styling inside it too 

### all require jquery and bootstrap

##### svgs: pencil, dashboard, trash, calendar, star, inbox, print

// all svgs accept a color = "white" hoverColor="lightBlue" 
##### 

#### EVERY COMPONENT MUST HAVE DATA-USER_ID=

| Done? | Location                 |                             Parameters                              | Required Attributes |      libs      | Page | Notes |
| ----- | ------------------------ | :-----------------------------------------------------------------: | :-----------------: | :------------: | ---- | ----- |
|       | > buttons/nerd           |                             name, class                             |                     |      nes       |      |       |
|       | > buttons/download       |                                                                     |                     |                |      |       |
|       | > input/nerd             |                                                                     |        name         |      nes       |      |       |
|       | > input/editable         |            {classname: "", type: "", pk: "", title: ""}             |        name         | nes, bootstrap |      |       |
|       | > dropdown/nerd          |                                                                     |                     |                |      |       |
|       | > favicon/nerd           |                                                                     |                     |                |      |       |
|       | > footer/nerd            |                                                                     |                     |      tui       |      |       |
|       | > header/stickyHeader    |                                                                     |                     |                |      |       |
|       | > nav/sideWhite          |                                                                     |                     |                |      |       |
|       | > nav/nerdTop            |                    decide on the functions here                     |                     |                |      |       |
|       | > intro/nerdLeft         |                            text, element                            |                     |  nes, typeit   |      |       |
|       | > intro/nerdRight        |                            text, element                            |                     |  nes, typeit   |      |       |
|       | > table/nerdTable        |                           problem   [{}]                            |                     |                |      |       |
|       | > table/nerdParentRow    |                                                                     |                     |                |      |       |
|       | > table/nerdChildRow     |                                                                     |                     |                |      |       |
|       | > kanban/kanban          |                 [{_id: 1, title: "", parent_id: 1}]                 |                     |                |      |       |
|       | > notes on kanban/kanban |                returns [{id: "1", order: 2, parent: undefined}]               |                     |                |      |       |
| x     | > graph/timeline         | [{category: "", start: "YYYY-MM-DD", end: "", color: "", task: ""}] |  data-problem_id=   |                |      |       |
|       | > dropdown/nerd          |                  [{name: "", class: "", path: ""}]                  |                     |                |      |       |
|       | > card/nerd              |                                                                     |                     |                |      |       |
|       | > progress/nerd          |                                                                     |  data-problem_id=#  |                |      |       |
|       | > modal/addProblem       |                      id="add_problem_trigger"                       |  data-problem_id=#  |                |      |       |
|       | > modal/addTask          |                                                                     |   data-task_id=#    |                |      |       |
|       | > modal/startTask        |                                                                     |   data-task_id=#    |                |      |       |
|       | > modal/editTask         |                                                                     |   data-task_id=#    |                |      |       |
|       | > modal/editProblem      |                                                                     |  data-problem_id=   |                |      |       |

| Done? | Location       | components | libs | notes |
| ----- | -------------- | :--------: | :--: | :---: |
|       | > anim/hoverUp |    card    |      |       |
|       |                |            |      |       |
|       |                |            |      |       |
|       |                |            |      |       |
|       |                |            |      |       |

## Current Layouts 

### Rules: NO stying whatsoever, only 

| Done? | Layout           |                                      | Requirements | Libs |     |
| ----- | ---------------- | :----------------------------------: | :----------: | :--: | --- |
| x     | auth             |             two columns              |  bootstrap   |      |     |
| x     | dashboard kanban |                                      | bs, masonry  |      |     |
|       | intro            |  Full page need to have text format  |              |      |     |
|       | problem page     |                                      |              |      |     |
|       | dashbord table   |                                      |              |      |     |
|       | dashboard cal    |                                      |              |      |     |
|       | loader           | this would probably come after login |              |      |     |
|       |                  |                                      |              |      |     |
|       |                  |                                      |              |      |     |

# problem

## ideally, i would just be able to pull up each folder and be able to work exclusively in that folder (that would completely be independent of other components - then when webpack loads , it would ideally, also, just load those specific assets)

## test / behavior driven development

starting with clear user stories and using cucumber to essentially guide the process here

* users will be able to add a problem they have been struggling with
* users will be able to update that problem with tasks and tag_snippets as they solve the problem
* users will be able to add cheatsheets to group tasks together 
* users will be able to keep themselves accountable by setting deadlines and having these deadlines sent to a close friend

be purely focused on behavior
* scenario: user feels bad about being cancelled on 
given that lesley feels bad about something 
* given (context/state): user feeling bad about something
* when (action): user will go into phone
* then add a problem, as to why that problem happened

npm install @babel/preset-env @babel/core @babel/register @babel/node @babel/node @babel/polyfill --save-dev
// "babel": "babel-node app.js"
// to transpile code, use: npx babel index.js -o compiled.js -  instead of typing in ./node_modules/.bin/babel index.js you would type in npx babel index.js 
// polyfill -> code that checks whether a feature is supported in the environment, and if not, provides methods that mimic the native implementation.
// preset-env - takes target enviornments you've specified and checks them
// good to run for testing -> transpiles your code before they are run 

read

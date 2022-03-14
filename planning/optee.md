ALWAYS WORK FROM HTML CSS AND JS DOCUMENT. ALWAYS. 

# Official Optee ReadMe

#### Rules 

Naming - this is for testing and creating inputs 

Rules inherent: 
* child handlebars partials, if it has styling, will overtake the parent styling. 
e.g., if partials stylesA has p {color: pink}
if partials stylesB has p {color: blue }
parent thats has both will be overcome by child partial styles 
the one at the most bottom will then dominate. interesting. which makes sense because css files run from top to bottom. 
so i suppose the styles u really want should be at the bottom 

## Cheatsheet

* Always make sure you start with tests, no matter what. 

Today: make sure you streamline your testing methods. 
- 

## Inputs

| Input Names   | Form Attributes | Showing One | Showing All |     |     |
| ------------- | --------------- | ----------- | ----------- | --- | --- |
| name="column" |                 |             |             |     |     |

* Sort and move accordians
* Really understand how to use position 
* Testing 
* Sort by importance
* Sort by difficulty 
* prettydate

## Modal Notes

* make sure to have the modal close and triggers and class all be different class names (because you're closing one specific modal, not all of them)
* Make sure that you wrap each new modal like so (in the codepen example: https://codepen.io/lezzles11/pen/ab0a8c211dc4aaae2aff3b187439ccd6)
<!--  -->
| Modal CSS      |      Modal Triggers      |       Modal Form        |       Modal Close        | Location of Trigger       |
| -------------- | :----------------------: | :---------------------: | :----------------------: | ------------------------- |
| playground, db |    .new_task_trigger, |     .new_task_modal     |  .close_new_task_modal   | On dashboard              |
| playground, db |   .edit_task_trigger, |    .edit_task_modal     |  .close_edit_task_modal  | On kanban cards and table |
| playground, db |   .new_problem_trigger   |   .new_problem_modal    |   close_problem_modal    | On dashboard              |
| playground, db |  .edit_problem_trigger   |   .edit_problem_modal   |   close_problem_modal    |                           |
| playground, db | .new_tag_snippet_trigger | .new_tag_snippet_modal  | close_tag_snippet_modal  |                           |
| playground, db |     .new_task_modal, | .edit_tag_snippet_modal | .close_tag_snippet_modal |                           |
| playground, db |    .new_timer_trigger    |    .new_timer_modal     |    .close_timer_modal    |                           |
| playground, db | .new_cheatsheet_trigger  |  .new_cheatsheet_modal  | .close_cheatsheet_modal  |                           |
| playground, db | .edit_cheatsheet_trigger | .edit_cheatsheet_modal  | .close_cheatsheet_modal  |                           |
| playground, db |     .new_task_modal, |          2hrs           |          2.5hrs          |                           |

# notes 
* Error Handling: add a catch block to all knex queries, returning an object that checks if there is an error
1. Database

```
.catch((error) => {
    return {
        error: "message"
    }
})
```

2. Route 

```
if (!responseFromDB.error) {
// otherwise, call the function here
} else {
    pass in error (rerendering the page)
}
```

### Process

#### Adding a yml file:

- 

## Don't forget the utilities that you have created!

## E.g., the form elements!!!! 

R

* Form submission: if using redirect, no need to use axios, just use form post 
* Always pass back errors as an error object - if you rerender you can pass it in 
* It will always be on the top of the page (as a notification)
* Wrapped around error class 

| Date  | Goal                        | What I competed | Notes |
| ----- | --------------------------- | --------------- | ----- |
| 12/12 | Complete inputs             |                 |       |
|       | Start using the application |                 |       |
|       | Finished timer modal        |                 |       |
|       | Beginning theming           |                 |       |

Flow

Express

| Page           | Data         | Renders                          | Notes |
| -------------- | ------------ | -------------------------------- | ----- |
| Signup         | N/A          |                                  |       |
| Login          | N/A          |                                  |       |
| /dashboard/:id | problemtasks | kanban, {problemTasks: problems} |       |
| Login          | N/A          |                                  |       |
| Login          | N/A          |                                  |       |

1. Signup

2. Dashboard/:id

3. Add Edit Problem
4. See Table View
5. See Kanban View
6. See graph view 
7. Change things (like make things public private)

For each modal trigger, just make it an onclick method - remember how we essentially removed the button styling?

for styling

| Done? | Location   |      components      | notes | notes |
| ----- | ---------- | :------------------: | :---: | :---: |
|       | .is-size-1 |         text         |       |       |
|       | .block     | to just space things |       |       |
|       |            |                      |       |       |
|       |            |                      |       |       |
|       |            |                      |       |       |

| Done? | Location                   | parameters | notes | notes |
| ----- | -------------------------- | :--------: | :---: | :---: |
|       | > "placeholder/tag"        |    text    |       |       |
|       | > "hourglass/progressCard" |            |       |       |
|       |                            |            |       |       |
|       |                            |            |       |       |
|       |                            |            |       |       |

| Done? | Daily Sprint                                                        |                    Notes                    | libs | Deadline |
| ----- | ------------------------------------------------------------------- | :-----------------------------------------: | :--: | :------: |
| x     | Finish all components, and organize them accordingly                |                    card                     |      |  12/16   |
| x     | Finish modals                                                       |                                             |      |  12/18   |
| x     | Finish feature 1: Kanban add, edit and delete, |   finished it but just need to integrate    |      |  12/20   |
| x     | Finish feature 2: Table add edit and delete (check out the masonry) |   just need to work on in the integration   |      |  12/23   |
|       | Finish feature 6: theme                                             | be able to rener stylesheets based on theme |      |  12/24   |
|       | Finish feature 3: Email/text friends with options                   |                                             |      |  12/21   |
|       | Finish feature 4: Duck check in, think aloud                        |                                             |      |  12/22   |
|       | Finish feature 5: authentication with gmail                         |                                             |      |  12 /23  |
|       | Finish feature 5 profile and display (like spotify)                 |                                             |      |  12/24   |
|       | Finish feature 6: theme                                             |                                             |      |  12/25   |
|       | First deploy                                                        |                                             |      |  12/30   |

dec 8 2021

# currently, the sidebar with table has the most recent navbar

### User Stories :telescope:

1. Users will be able to solve their life problems

## Sprint :athletic_shoe:

| Done? | Component                                               | Priority | Estimated Time | Actual Time |
| ----- | ------------------------------------------------------- | :------: | :------------: | :---------: |
| x     | This checklist                                          |    H     |    30 mins     |             |
| x     | Read Documentation                                      |    M     |    30 mins     |             |
| x     | Look at three examples                                  | 30 mins  |                |             |
| x     | Complete basic example                                  |    M     |    30 mins     |     15      |
| x     | Write tests for features                                |          |                |             |
| x     | follow feature                                          |          |                |             |
| x     | Dashboard Layout                                        |          |                |             |
| x     | Auth Layout                                             |          |                |             |
| x     | Dashboard Kanban Layout                                 |          |                |             |
| x     | Dashboard Calendar Layout                               |          |                |             |
| x     | Settings Layout                                         |          |                |             |
| x     | Signup Component                                        |          |                |             |
| x     | Login Component                                         |          |                |             |
| x     | All components need to be named by theme                |          |                |             |
| x     | Write out the cucumber tests                            |    H     |                |             |
| x     | Debugging Table                                         |          |                |             |
| x     | Look at your past repositories                          |          |                |             |
|       | Notic the handlebars template. How can you do the same? |          |                |             |
|       | Do one thing at a time.                                 |          |                |             |
|       | Finish all queries                                      |          |                |             |
|       | Login by tomorrow                                       |          |                |             |
|       | dude stop meeting up with ppl lol                       |          |                |             |
|       | Signup Form                                             |          |                |             |
| x     | Write down all routes                                   |          |                |             |
| x     | Write down all database queries                         |          |                |             |
|       | Intro layout (look at the codepen example)              |          |                |             |
|       | Project page layout                                     |          |                |             |
|       | Email function: look at the wedding template            |          |                |             |
|       | dude write tthings down first lol                       |          |                |             |
| x     | Kanban - on hover                                       |          |                |             |
|       |                                                         |          |                |             |
|       |                                                         |          |                |             |
|       |                                                         |          |                |             |
|       |                                                         |          |                |             |
|       |                                                         |          |                |             |
|       |                                                         |          |                |             |
|       |                                                         |          |                |             |
|       |                                                         |          |                |             |
|       |                                                         |          |                |             |
|       |                                                         |          |                |             |
|       |                                                         |          |                |             |

### Testing 

 
| Done? | Feature | Route | Database | Actual Time |
| ----- | ------- | :---: | :------: | :---------: |
|       |         |       |          |             |
|       |         |       |          |             |
|       |         |       |          |             |
|       |         |       |          |             |
|       |         |       |          |             |
|       |         |       |          |             |
|       |         |       |          |             |
|       |         |       |          |             |
|       |         |       |          |             |

### Daily Stand Up :hourglass:

## Concerns

* A bit worried about the data fetching aspects
* I think it should

| Done? | Component                               | Priority | Estimated Time | Actual Time |
| ----- | --------------------------------------- | :------: | :------------: | :---------: |
|       | Stepper for introduction                |          |   3-5 hours    |             |
|       | Profile page for sharing projects       |          |    3 hours?    |             |
|       | Grabbing data for the  different tables |          |                |             |
|       | Nodemailer                              |          |                |             |
|       | Whatsapp                                |          |                |             |
|       |                                         |          |                |             |
|       |                                         |          |                |             |
|       |                                         |          |                |             |
|       |                                         |          |                |             |

## Issues and Resolutions :flashlight:

**ERROR**: :gear:
**RESOLUTION**: :key:

### Template

* Issue:
* Where it occurs:
* Possible Solution: 
* Actual Solution: 

### Making a modal a wrapper

* Issue: I wanted to make a modal a wrapper by utilizing a handlebars template but it was difficult to pass in blocks (tried using a layout but i couldn't really configure it with express-handlebars)
* Where it occurs: 
* Possible Solution: 
* Actual Solution: Just made a template 

## Current Routing 

### FRONTEND/CONTROLLER :hourglass: ()

# TODO: Need to also get by user id 

| Done? | Route                    | Method | Action |            Req Body Layout            | Renders         | Res | Res Status |
| ----- | ------------------------ | :----: | :----: | :-----------------------------------: | --------------- | --- | ---------- |
| x     | /                        |        |        |                 main                  | pages/home/todo |     | 200        |
| x     | /signup                  |  GET   |        |                 auth                  |                 |     | 200        |
| x     | /signup                  |  POST  |        |                 auth                  |                 |     | 201/       |
| x     | /login                   |        |        |                 auth                  |                 |     |            |
| x     | /login                   |        |        |                 auth                  |                 |     |            |
| x     | /intro                   |  GET   |        |                 full                  | intro/intro     |     | 200        |
| x     | /intro                   |  GET   |        |      naked (no styling or libs)       | loader/loader   |     | 200        |
| x     | /db/kanban               |        |        |                  db                   |                 |     | 200        |
| x     | /db/table                |        |        |            topbottomstick             |                 |     | 200        |
| x     | /db/timeline             |        |        |                  db                   |                 |     | 200        |
| x     | /api/get/:type           |        |        |                                       |                 |     | 200 arr    |
| x     | /api/get/:type/:id       |        |        |                                       |                 |     | 200 obj    |
| x     | /api/condition           |        |        | {condition: "status", value: "to do"} |                 |     | 200 arr    |
| x     | /api/joins/:type/:type2  |        |        |                 CHECK                 |                 |     | 200  arr   |
| x     | /api/delete/:type/:id    |        |        |                                       |                 |     | 200  arr   |
| x     | /api/post/:type          |        |        |                                       |                 |     | 200 arr    |
| x     | /api/columns/:type       |        |        |                                       |                 |     | 200 arr    |
| x     | /api/problem             |  POST  |        |                                       |                 |     |            |
|       | /api/problem             |        |        |                                       |                 |     |            |
|       | /api/task                |        |        |                                       |                 |     |            |
|       | /api/task                |        |        |                                       |                 |     |            |
|       | /api/user/:id/problem    |        |        |                                       |                 |     |            |
|       | /api/user/:id/task       |        |        |                                       |                 |     |            |
|       | /api/user/:id/tagsnippet |        |        |                                       |                 |     |            |
|       | /api/user/:id/cheatsheet |        |        |                                       |                 |     |            |
|       | /api/user/:id/           |        |        |                                       |                 |     |            |

## Current Database BACKEND/QUERIES

### Notes: each database, when exported, is already initialized 

 - [ x] implemented bcrypt
 - [ ] get by one (it always needs user id right so that would be get by one )

| Done? | method                                           | method | returns | class |
| ----- | ------------------------------------------------ | :----: | ------- | ----- |
| x     | signupWithEmail(name, email, password)           |  POST  | object  | auth  |
| x     | getUserById(id)                                  |  GET   | object  |       |
| x     | getUserByEmail(email)                            |  GET   | object  |       |
| x     | loginWithEmail(email, password)                  |  POST  | object  |       |
| x     | getByImportanceJoin(table, table2, values = "*") |  GET   | arr     | basic |
| x     | getByMostRecent(table)                           |  GET   |         |       |
| x     | search(table, search, keyword)                   |  GET   |         |       |
| x     | getByMostRecent(table)                           |  GET   |         |       |
| x     | getDescData(table, condition) "problem", "title" |  GET   |         |       |
| x     | getAscData(table condition)                      |        |         |       |
| x     | getById(table, id)                               |        | object  |       |
| x     | getAllByHourglass(table) -                       |        |         |       |
| x     | getByHourglassCondition(table, col, val)         |        |         |       |
| x     | post(object)   - calls post and edit             |        | object  |       |
| x     | delete(table, id)                                |        | id      |       |
| x     | getByCondition(table, table2, col, val)          |        | arr     |       |
| x     | getAll(table)                                    |        | arr     |       |
| x     | postProblem(table, user_id, body) -transaction   |        |         |       |
| x     | getProblems(table user_id)                       |        |         |       |
| x     | postTask(connection, user_id, body) modal btn    |        |         |       |
| x     | getTask                                          |        |         |       |
| x     | postTagSnippet                                   |        |         |       |
| x     | getTagSnippet                                    |        |         |       |
| x     | postCheatsheet                                   |        |         |       |
| x     | getCheatsheet                                    |        |         |       |
|       | editHourglass                                    |        |         |       |
|       | editProblem                                      |        |         |       |
|       | editTagSnippet                                   |        |         |       |
|       | editTask                                         |        |         |       |
|       | editCheatsheet                                   |        |         |       |
|       |                                                  |        |         |       |
|       |                                                  |        |         |       |
|       |                                                  |        |         |       |
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
 

#### FRONTEND/VIEWS

#### Form 

* Cheatsheet is not a modal 
it's probably a form like a stepper 
remember, manage state in pages *forms - all NON stateful components will be in globalComponentss
I wonder if we can try fetching the data from because wouldn't it be werapped around something else or should we just make it modular 
we should make it modular 

Forms 
|     |     |
| --- | --- |
|     |     |

#### EVERY COMPONENT MUST HAVE DATA-USER_ID=

FINISHED (and works)
| Location                   | Item        | Notes                            | Libs |
| -------------------------- | ----------- | -------------------------------- | ---- |
| > libs/global/js           |             |                                  |      |
| > libs/global/css          |             |                                  |      |
| > favicon/blue             |             |                                  |      |
| > modals/template          | JS and HTML | contains template for all modals |      |
| > modals/pageThatUsesModal | CSS         | should probably be in all files  |      |
| >                          |             |                                  |      |
|                            |             |                                  |      |
|                            |             |                                  |      |

| Done? | Location                 |                         Partials/Parameters                         | Required Attributes |                  libs                   |
| ----- | ------------------------ | :-----------------------------------------------------------------: | :-----------------: | :-------------------------------------: |
|       | > forms/problemForm      |                                                                     |                     |                                         |
|       | >                        |                                                                     |                     |                                         |
|       |                          |                                                                     |                     |                                         |
|       |                          |                                                                     |                     |                                         |
|       |                          |                                                                     |                     |                                         |
|       |                          |                                                                     |                     |                                         |
|       |                          |                                                                     |                     |                                         |
|       |                          |                                                                     |                     |                                         |
|       | > layouts/naked          |                              no links                               |                     |                                         |
|       | > layouts/auth           |                             two columns                             |                     |                                         |
|       | > layouts/db             |                  with navbar and header, modal.css                  |                     |                                         |
|       | > layouts/cover          |                              for intro                              |                     |                                         |
|       | > layouts/settings       |                             only navbar                             |                     |             jquery, axios, |
|       | > layouts/playground     |                          test - modal.css, |                     | basic colors, jquery, axios, handlebars |
|       | > buttons/nerd           |                             name, class                             |                     |                   nes                   |
|       | > buttons/download       |                                                                     |                     |                                         |
|       | > input/nerd             |                                                                     |        name         |                   nes                   |
|       | > input/editable         |            {classname: "", type: "", pk: "", title: ""}             |        name         |             nes, bootstrap              |
|       | > dropdown/nerd          |                                                                     |                     |                                         |
|       | > favicon/nerd           |                                                                     |                     |                                         |
|       | > footer/nerd            |                                                                     |                     |                   tui                   |
|       | > header/stickyHeader    |                                                                     |                     |                                         |
|       | > nav/sideWhite          |                                                                     |                     |                                         |
|       | > nav/nerdTop            |                    decide on the functions here                     |                     |                                         |
|       | > intro/nerdLeft         |                            text, element                            |                     |               nes, typeit               |
|       | > intro/nerdRight        |                            text, element                            |                     |               nes, typeit               |
|       | > table/nerdTable        |                           problem   [{}]                            |                     |                                         |
|       | > table/nerdParentRow    |                                                                     |                     |                                         |
|       | > table/nerdChildRow     |                                                                     |                     |                                         |
|       | > kanban/kanban          |                 [{_id: 1, title: "", parent_id: 1}]                 |                     |                                         |
|       | > notes on kanban/kanban |          returns [{id: "1", order: 2, parent: undefined}]           |                     |                                         |
| x     | > graph/timeline         | [{category: "", start: "YYYY-MM-DD", end: "", color: "", task: ""}] |  data-problem_id=   |                                         |
|       | > dropdown/nerd          |                  [{name: "", class: "", path: ""}]                  |                     |                                         |
|       | > card/nerd              |                                                                     |                     |                                         |
|       | > progress/nerd          |                                                                     |  data-problem_id=#  |                                         |
| x     | > modal/addProblem       |                     class="new_problem_trigger"                     |  data-problem_id=#  |                                         |
| x     | > modal/addTask          |                       class="new_task_trigger                       |   data-task_id=#    |                                         |
|       | > modal/editTask         |                                                                     |   data-task_id=#    |                                         |
|       | > modal/editProblem      |                                                                     |  data-problem_id=   |                                         |
| x     | > modal/hourglass        |   class="new_hourglass_trigger" triggers class="hourglass_modal"    |  data-problem_id=   |                                         |
|       | > 1_effects/hover        |                       width, height, content                        |                     |                                         |
|       | > 1_effects/border       |                                                                     |                     |                                         |
|       |                          |                                                                     |                     |                                         |
|       |                          |                                                                     |                     |                                         |
|       |                          |                                                                     |                     |                                         |

* be careful when moving components because they depend on libraries 

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

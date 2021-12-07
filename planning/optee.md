# Official Optee ReadMe


STARTHERE
# notes 

dec 8 2021

# currently, the sidebar with table has the most recent navbar


### User Stories :telescope:

1. Users will be able to solve their life problems

## Sprint :athletic_shoe:

| Done? |                                    Component                                     | Priority | Estimated Time | Actual Time |
| ----- | -------------------------------------------------------------------------------- | :------: | :------------: | :---------: |
| x     | This checklist                                                                   |    H     |    30 mins     |             |
| x     | Read Documentation                                                               |    M     |    30 mins     |             |
| x     | Look at three examples                                                           | 30 mins  |                |             |
| x     | Complete basic example                                                           |    M     |    30 mins     |     15      |
| x     | Write tests for features                                                         |          |                |             |
| x     | follow feature                                                                   |          |                |             |
|       | Dashboard Page                                                                   |          |                |             |
|       | Dashboard Table                                                                  |          |                |             |
|       | Dashboard Kanban                                                                 |          |                |             |
|       | Dashboard Calendar                                                               |          |                |             |
|       | Deploy by dec 11                                                                 |          |                |             |
|       | Signup                                                                           |          |                |             |
|       | Login                                                                            |          |                |             |
|       | Toggle themes?                                                                   |          |                |             |
| x     | Write out the cucumber tests                                                     |    H     |                |             |
|       | Debugging Table                                                                  |          |                |             |
|       | Make some problems public and some private                                       |          |                |             |
|       | Make every feature unique, dude. lol                                             |          |                |             |
|       | Look at your past repositories                                                   |          |                |             |
|       | Notice that the table utilizes the handlebars template. How can you do the same? |          |                |             |
|       | Do one thing at a time.                                                          |          |                |             |
|       | Finish all queries                                                               |          |                |             |
|       | Login by tomorrow                                                                |          |                |             |
|       | dude stop meeting up with ppl lol                                                |          |                |             |
|       | Signup                                                                           |          |                |             |
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
|       |                                                                                  |          |                |             |
|       |                                                                                  |          |                |             |
|       |                                                                                  |          |                |             |
|       |                                                                                  |          |                |             |
|       |                                                                                  |          |                |             |

### Daily Stand Up :hourglass:

| Done? |             Component             | Priority | Estimated Time | Actual Time |
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

|        Issue         | Where it occurs | Possible solution | Actual solution |
| -------------------- | :-------------: | :---------------: | :-------------: |
| Creating a checklist |        H        |       2hrs        |     2.5hrs      |

## Current Routing 
### Routes :hourglass:

| Done? |             Route             | Parameters | Request | Response |
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

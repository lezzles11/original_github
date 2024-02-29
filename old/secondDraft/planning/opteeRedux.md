Things to test for:

##### User Stories

- Users will be able to signup
- Users will be able to login
- Users will be able to create a new event
- Users will be able to edit an event
- Users will be able to see the upcoming tasks that they have for the day

##### Finished Tasks

- [x] Components
- [ ] Redux Template
- [ x] Redux Tests
- [ x] Redux React Tests
- [ ] API

- I think we should start with the hardest thing, which is user auth
- Then I think we should think about using immer, because that's more used right - use whatever makes the most sense dude

##### Links

- [Tags Library](https://www.npmjs.com/package/react-tag-input)
- [Easy Peasy](https://devlinduldulao.pro/easy-peasy-in-a-nutshell-with-react-easy-peasy-code-sample/)
- [Super deep nesting](https://github.com/ctrlplusb/easy-peasy/issues/695)
- [ Easy Peasy Dispatch](https://github.com/hayawata3626/easy-peasy-sample/blob/master/src/model.js)
- [tests](https://github.com/crissdev/reduxtagram-easy-peasy/blob/7166e542b0929b658cd32175b4a2e7d116466090/src/__tests__/comments-model.spec.ts)
- [easy peasy example](https://github.com/FabrizioFornari/SPM2020-BPU/blob/6794e4e98aff0cb939d4a503c36d26853de40961/frontend/src/redux/models/usersModel.js) tests tests tests

- **User (id, firstName, middleName, lastName, email, password, google_id, facebook_id, spotify_id, company, location, about, google_cal)**

##### Routes

###### User

- [ ] POST User (signup) /api/signup

  - input firstName
  - input lastName
  - input email
  - input password
  - input termsAndServices (checkbox)
  - button googleSignup
  - button facebookSignup
  - button createAccount

- [ ] POST User (login) /api/login

  - input email
  - input password
  - input rememberMe (checkbox)
  - button googleLogin
  - button facebookLogin
  - button login

- [ ] PUT Password /api/getPasswordLink

  - input email
  - button sendResetLink

- [ ] PUT Password /api/changePassword

  - input newPassword
  - button resetPassword
  - reset password

- [ ] PUT Settings (put) /api/profile

  - input firstName
  - input middleName
  - input lastName
  - input company
  - input location
  - input about
  - input (dropdown) calendar
  - button syncCalendar
  - button saveChanges
  - button discardChanges

- [ ] PUT Settings /api/settings

  - button changePassword
  - radio allowNotifications
  - radio allowCookies
  - radio allowAds
  - button deleteAccount
  - button saveChanges
  - button discardChanges

- POST logout /api/logout

  - button logout

###### Tags

- [Tags](https://blog.logrocket.com/building-a-tag-input-field-component-for-react/)

###### Projects (id, name, purpose, startDate, deadline, priority, tagsArray, friendsArray, image)

- Get Ongoing Projects /api/currentProjects

  - progress (get all current tasks that are associated with this project, divide by completed)
  - priority

- Get Project Tasks /api/projects/:projectId/tasks

  - deadline
  - progress
  - Task name, organized by date

- Get Current Project (for each page) /api/projects/:projectId

- Get User's Projects

  - getUsersProjects

- Post Project (Modal) /api/projects

  - input name
  - input purpose
  - input startDate
  - input deadline
  - input (dropdown) priority
  - input tags
  - input friendEmailOne
  - input friendEmailTwo
  - button saveProject
  - button cancel

- [Get All Projects (filter)](https://codesandbox.io/s/fstoj?file=/src/AddProduct.js) /api/projects

  - input projectFilter
  - deadline
  - priority
  - tags
  - id (link to the project page)

###### Tasks (id, index, name, completed, priority, duration, deadline, startDate, deadline, projectId, userId, tagsArray, notes, image){" "}\*\*

- Get Today's Tasks /api/users/:userId/tasks

  - name, completed

- [Complete Task](https://codesandbox.io/s/jpdd2?file=/src/model.js) /api/tasks/:id

  - input checkbox

- Post Task /api/tasks

  - input name
  - input project (get all current projects)
  - input priority
  - input deadline
  - input tags
  - input notes
  - input image
  - button saveTask
  - button cancel

- Get Task to Time (Put Request - Edit Task) /api/tasks/:id

  - get name, priority, project name, duration
  - button beginTask
  - button saveTime

- Get Tasks (Filter) /api/users/:id/tasks

  - button completedTasks
  - button currentTasks

- Organize Tasks - /api/tasks/:id

  - drag and drop changes index

  /api/tasks  
  reset

- Delete Task - /api/tasks/:id

  - button deleteTask

- Edit Task - /api/tasks/:id
  {" "} priority high priority high medium low saveTask cancel

##### Event (id, name, date, time, link, guests, information, status (going,notgoing),tagsArray)\*\*

- Get Events /api/users/:id/events

  - getUsersEvents

- Get event (for modal) /api/events/:id

  - getEvent

- Post Event /api/events/

  - input name
  - input (dropdown) status (priority)
  - input time
  - input date
  - input tags
  - input link
  - input guests
  - input information

##### Feedback (id, rating, user_id)

- stars 5 buttons
  /api/feedback  
  {" "} 1 star 2 star 3 star 4 star 5 star submit feedback
- button submitFeedback

/api/  
 reset

# Just put all event handlers here and play here

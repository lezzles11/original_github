 <div>
      Things to test for:
      <ul>
        <li>sign up and dispatches</li>
        <li>sign up and dispatches</li>
      </ul>
      <strong>
        DECIDE ON THE DISPATCHES - what would make the most
        sense? I think using easy peasy
      </strong>
      <ul>
        <li>
          I think we should start with the hardest thing,
          which is user auth{" "}
        </li>
        <li>
          Then I think we should think about using immer,
          because that's more used right - use whatever
          makes the most sense dude{" "}
        </li>
      </ul>
      <a href="" target="_blank">
        {" "}
        <span>Links</span>
      </a>
      <a
        href="https://www.npmjs.com/package/react-tag-input"
        target="_blank"
      >
        {" "}
        <span>Tags Library</span>
      </a>
      <a
        href="https://devlinduldulao.pro/easy-peasy-in-a-nutshell-with-react-easy-peasy-code-sample/"
        target="_blank"
      >
        {" "}
        <span>Easy Peasy</span>
      </a>
      <a
        href="https://github.com/ctrlplusb/easy-peasy/issues/695"
        target="_blank"
      >
        {" "}
        <span>Super deep nesting</span>
      </a>
      <a
        href="https://github.com/hayawata3626/easy-peasy-sample/blob/master/src/model.js"
        target="_blank"
      >
        {" "}
        <span>Easy Peasy Dispatch</span>
      </a>
      <a
        href="https://github.com/crissdev/reduxtagram-easy-peasy/blob/7166e542b0929b658cd32175b4a2e7d116466090/src/__tests__/comments-model.spec.ts"
        target="_blank"
      >
        tests
      </a>
      <a
        href="https://github.com/FabrizioFornari/SPM2020-BPU/blob/6794e4e98aff0cb939d4a503c36d26853de40961/frontend/src/redux/models/usersModel.js"
        target="_blank"
      >
        easy peasy example
      </a>
      <a href="" target="_blank">
        tests
      </a>
      <a href="" target="_blank">
        tests
      </a>
      <a href="" target="_blank">
        tests
      </a>
      <ul>
        <li>
          <strong>
            User (id, firstName, middleName, lastName,
            email, password, google_id, facebook_id,
            spotify_id, company, location, about,
            google_cal)&nbsp;
          </strong>
          <ul>
            <li>
              POST User (signup)
              <ul>
                <li>input firstName</li>
                <li>input lastName</li>
                <li>input email</li>
                <li>input password</li>
                <li>input termsAndServices (checkbox)</li>
                <li>button googleSignup</li>
                <li>button facebookSignup</li>
                <li>button createAccount</li>
              </ul>
              <ul>
                /api/signup
                <br />
                <input
                  name="firstName"
                  type="text"
                  placeholder="firstName"
                />
                <input
                  name="lastName"
                  type="text"
                  placeholder="firstName"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                />
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                />
                <input
                  name="termsAndServices"
                  className="form-check-input"
                  id="termsAndServices"
                  type="checkbox"
                />
                <label for="termsAndServices">
                  Terms and Services
                </label>
                <button
                  className="signupButton"
                  id="signupButton"
                >
                  google
                </button>
                <button id="googleSignup">google</button>
                <button id="facebookSignup">
                  facebook
                </button>
                <button id="createAccount">
                  create account
                </button>
              </ul>
            </li>

            <li>
              POST User (login)
              <ul>
                <li>input email</li>
                <li>input password</li>
                <li>input rememberMe (checkbox)</li>
                <li>button googleLogin</li>
                <li>button facebookLogin</li>
                <li>button login</li>
              </ul>
              <ul>
                /api/signup
                <br />
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                />
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                />{" "}
                <input
                  name="rememberMe"
                  className="form-check-input"
                  id="rememberMe"
                  type="checkbox"
                />
                <label for="rememberMe">Remember Me</label>
                <br />
                <button name="loginButton">login</button>
                <button id="googleLogin">google</button>
                <button id="facebookLogin">facebook</button>
              </ul>
            </li>
            <li>
              &nbsp;PUT Password
              <ul>
                <li>input email</li>
                <li>button sendResetLink</li>
              </ul>
              <ul>
                /api/getPasswordLink
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                />
                <button
                  name="sendResetLink"
                  id="sendResetLink"
                >
                  send reset link
                </button>
              </ul>
            </li>
            <li>
              PUT Password
              <ul>
                <li>input newPassword</li>
                <li>button resetPassword</li>
              </ul>
              <ul>
                /api/changePassword
                <br />
                <input
                  type="password"
                  name="newPassword"
                  placeholder="password"
                />
                <input
                  type="password"
                  name="confirmNewPassword"
                  placeholder="confirmPassword"
                />
                <button id="resetPassword">
                  reset password
                </button>
              </ul>
            </li>
            <li>
              PUT Settings (put)&nbsp;
              <ul>
                <li>input firstName</li>
                <li>input middleName</li>
                <li>input lastName</li>
                <li>input company</li>
                <li>input location</li>
                <li>input about&nbsp;</li>
                <li>input (dropdown) calendar</li>
                <li>button syncCalendar</li>
                <li>button saveChanges</li>
                <li>button discardChanges</li>
              </ul>
              <ul>
                /api/updateuser
                <br />
                <input
                  name="firstName"
                  type="text"
                  placeholder="firstName"
                />
                <input
                  name="middleName"
                  type="text"
                  placeholder="middleName"
                />
                <input
                  name="lastName"
                  type="text"
                  placeholder="lastName"
                />
                <input
                  name="company"
                  type="text"
                  placeholder="company"
                />
                <input
                  name="location"
                  type="text"
                  placeholder="location"
                />
                <textarea
                  name="about"
                  type="text"
                  placeholder="about"
                ></textarea>
                <button id="syncGoogleCalendar">
                  sync google calendar
                </button>
                <button id="syncAppleCalendar">
                  sync apple calendar
                </button>
                <button id="saveChanges">
                  save changes
                </button>
                <button id="discardChanges">
                  discard changes
                </button>
              </ul>
            </li>
            <li>
              PUT Settings
              <ul>
                <li>button changePassword</li>
                <li>radio allowNotifications</li>
                <li>radio allowCookies</li>
                <li>radio allowAds</li>
                <li>button deleteAccount</li>
                <li>button saveChanges</li>
                <li>button discardChanges</li>
              </ul>
              <ul>
                /api/settings
                <br />
                <button
                  name="settingsChangePassword"
                  id="settingsChangePassword"
                >
                  changePassword
                </button>
                <div>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="notifications"
                    value="granted"
                    id="notifications1"
                  />
                  <label
                    class="form-check-label"
                    for="notifications1"
                  >
                    allow notifications
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="notifications"
                    value="denied"
                    id="notifications2"
                  />{" "}
                  <label
                    class="form-check-label"
                    for="notifications2"
                  >
                    don't allow notifications
                  </label>
                </div>
                <div>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="cookies"
                    value="granted"
                    id="cookies1"
                  />
                  <label
                    class="form-check-label"
                    for="cookies1"
                  >
                    allow cookies
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="cookies"
                    value="denied"
                    id="cookies2"
                  />{" "}
                  <label
                    class="form-check-label"
                    for="cookies2"
                  >
                    don't allow cookies
                  </label>
                </div>
                <div>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="ads"
                    value="granted"
                    id="ads1"
                  />
                  <label
                    class="form-check-label"
                    for="ads1"
                  >
                    allow ads
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="ads"
                    value="denied"
                    id="ads2"
                  />{" "}
                  <label
                    class="form-check-label"
                    for="ads2"
                  >
                    don't allow ads
                  </label>
                </div>
                <button
                  name="deleteAccount"
                  id="deleteAccount"
                >
                  save
                </button>
                <button name="saveChanges" id="saveChanges">
                  save
                </button>
                <button name="discardChanges" id="cancel">
                  cancel
                </button>
              </ul>
            </li>
            <li>
              POST logout
              <ul>
                <li>button logout</li>
              </ul>{" "}
              <ul>
                /api/logout
                <br />
                <button name="logout" id="logout">
                  logout
                </button>
              </ul>
            </li>
            <li></li>
          </ul>
        </li>
        <li>
          <a
            href="https://blog.logrocket.com/building-a-tag-input-field-component-for-react/"
            target="_blank"
          >
            <strong>Tags (id, name)</strong>
          </a>
          <ul>
            <li></li>
          </ul>
        </li>
        <li>
          <strong>
            Projects (id, name, purpose, startDate,
            deadline, priority, tagsArray, friendsArray,
            image)
          </strong>
          <ul>
            <li>
              Get Ongoing Projects&nbsp;
              <ul>
                <li>
                  progress (get all current tasks that are
                  associated with this project, divide by
                  completed)&nbsp;
                </li>
                <li>priority&nbsp;</li>
              </ul>{" "}
              <ul>
                /api/currentProjects
                <br />
                <button
                  name="getCurrentProjects"
                  id="currentProjects"
                >
                  projects
                </button>
              </ul>
            </li>
            <li>
              Get Project Tasks&nbsp;
              <ul>
                <li>deadline</li>
                <li>progress</li>
                <li>Task name, organized by date</li>
              </ul>{" "}
              <ul>
                /api/projects/:projectId/tasks
                <br />
                <button
                  name="getProjectTasks"
                  id="getProjectTasks"
                >
                  get project tasks
                </button>
              </ul>
            </li>
            <li>
              Get Current Project (for each page)&nbsp;
              <ul>
                /api/projects/:projectId
                <br />
                <button name="getProject" id="getProject">
                  get project
                </button>
                <button
                  name="getUsersProjects"
                  id="getUsersProjects"
                >
                  getUsersProjects
                </button>
              </ul>
            </li>
            <li>
              Post Project (Modal)
              <ul>
                <li>input name</li>
                <li>input purpose</li>
                <li>input startDate</li>
                <li>input deadline</li>
                <li>input (dropdown) priority&nbsp;</li>
                <li>input tags</li>
                <li>input friendEmailOne</li>
                <li>input friendEmailTwo</li>
                <li>button saveProject</li>
                <li>button cancel</li>
              </ul>{" "}
              <ul>
                POST /api/projects
                <br />
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                />
                <input
                  type="text"
                  name="purpose"
                  placeholder="purpose"
                />
                <input
                  type="text"
                  name="startDate"
                  placeholder="startDate"
                />
                <input
                  type="text"
                  name="deadline"
                  placeholder="deadline"
                />
                <select
                  name="priority"
                  className="browser-default"
                >
                  <option selected>priority</option>
                  <option value="high">high</option>
                  <option value="medium">medium</option>
                  <option value="low">low</option>
                </select>
                <input
                  type="text"
                  name="tags"
                  placeholder="tags"
                />
                <input
                  type="text"
                  name="friendEmailOne"
                  placeholder="friendEmailOne"
                />
                <input
                  type="text"
                  name="friendEmailTwo"
                  placeholder="friendEmailTwo"
                />
                <button name="saveProject" id="saveProject">
                  save
                </button>
                <button
                  name="discardChanges"
                  id="discardChanges"
                >
                  cancel
                </button>
              </ul>
            </li>
            <li>
              <a
                href="https://codesandbox.io/s/fstoj?file=/src/AddProduct.js"
                target="_blank"
              >
                Get All Projects (filter)&nbsp;
              </a>

              <ul>
                <li>input projectFilter&nbsp;</li>
                <li>deadline</li>
                <li>priority</li>
                <li>tags</li>
                <li>id (link to the project page)</li>
              </ul>
              <ul>
                /api/projects
                <br />
                <input
                  type="text"
                  name="filterProjects"
                  placeholder="filterProjects"
                />
                <button
                  name="getAllProjects"
                  id="getAllProjects"
                >
                  get all projects
                </button>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Tasks (id, index, name, completed, priority,
            duration, deadline, startDate, deadline,
            projectId, userId, tagsArray, notes, image){" "}
          </strong>
          <ul>
            <li>
              Get Today's Tasks&nbsp;
              <ul>
                <li>name, completed</li>
              </ul>
              <ul>
                /api/users/:userId/tasks
                <br />
                <button
                  id="getTodaysTasks"
                  name="getTodaysTasks"
                >
                  get todays tasks
                </button>
                <button id="getAllTasks" name="getAllTasks">
                  getAllTasks
                </button>
              </ul>
            </li>
            <li>
              <a
                href="https://codesandbox.io/s/jpdd2?file=/src/model.js"
                target="_blank"
              >
                Complete Task
              </a>
              <ul>
                <li>input checkbox&nbsp;</li>
              </ul>
              <ul>
                PUT /api/tasks/:id
                <br />
                <input
                  name="completedTask"
                  className="form-check-input"
                  id="completedTask"
                  type="checkbox"
                />
                <label for="completedTask">
                  Done with task
                </label>
              </ul>
            </li>
            <li>
              Post Task&nbsp;
              <ul>
                <li>input name</li>
                <li>
                  input project (get all current projects)
                </li>
                <li>input priority</li>
                <li>input deadline</li>
                <li>input tags</li>
                <li>input notes</li>
                <li>input image</li>
                <li>button saveTask</li>
                <li>button cancel</li>
              </ul>
              <ul>
                /api/
                <br />
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                />
                <select
                  name="projects"
                  className="browser-default"
                >
                  <option selected>priority</option>
                  <option value="high">high</option>
                </select>
                <select
                  name="priority"
                  className="browser-default"
                >
                  <option selected>priority</option>
                  <option value="high">high</option>
                  <option value="medium">medium</option>
                  <option value="low">low</option>
                </select>
                <input
                  type="text"
                  name="deadline"
                  placeholder="deadline"
                />
                <input
                  type="text"
                  name="tags"
                  placeholder="tags"
                />
                <input
                  type="text"
                  name="notes"
                  placeholder="notes"
                />
                <input
                  type="text"
                  name="image"
                  placeholder="image"
                />
                <button name="saveTask" id="saveTask">
                  saveTask
                </button>
                <button name="cancel" id="cancel">
                  cancel
                </button>
              </ul>
            </li>
            <li>
              Get Task to Time (Put Request - Edit
              Task)&nbsp;
              <ul>
                <li>
                  get name, priority, project name, duration
                </li>
                <li>button beginTask</li>
                <li>button saveTime</li>
              </ul>
              <ul>
                /api/tasks/:id
                <br />
                <input
                  type="text"
                  name="setMinutes"
                  placeholder="minutes"
                />
                <button id="beginTask">beginTask</button>
                <button id="saveTime">saveTime</button>
              </ul>
            </li>
            <li>
              Get Tasks (Filter)
              <ul>
                <li>button completedTasks</li>
                <li>button currentTasks</li>
              </ul>
              <ul>
                /api/tasks
                <br />
                <button
                  class="getCompletedTasks"
                  id="getCompletedTasks"
                >
                  get completed tasks
                </button>
                <button
                  class="getCurrentTasks"
                  id="getCurrentTasks"
                >
                  get current tasks
                </button>
              </ul>
            </li>
            <li>
              Organize Tasks&nbsp;
              <ul>
                <li>drag and drop changes index</li>
              </ul>
              <ul>
                /api/tasks
                <br />
                <button id="">reset</button>
              </ul>
            </li>
            <li>
              Delete Task&nbsp;
              <ul>
                <li>button deleteTask</li>
              </ul>
              <ul>
                /api/tasks/:id
                <br />
                <button id="deleteTask">delete task</button>
              </ul>
            </li>
            <li>
              Edit Task
              <ul>
                /api/tasks/:id
                <br />{" "}
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                />
                <select
                  name="projects"
                  className="browser-default"
                >
                  <option selected>priority</option>
                  <option value="high">high</option>
                </select>
                <select className="browser-default">
                  <option selected>priority</option>
                  <option value="high">high</option>
                  <option value="medium">medium</option>
                  <option value="low">low</option>
                </select>
                <input
                  type="text"
                  name="deadline"
                  placeholder="deadline"
                />
                <input
                  type="text"
                  name="tags"
                  placeholder="tags"
                />
                <input
                  type="text"
                  name="notes"
                  placeholder="notes"
                />
                <input
                  type="text"
                  name="image"
                  placeholder="image"
                />
                <button id="saveTask">saveTask</button>
                <button id="cancel">cancel</button>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Event (id, name, date, time, link, guests,
            information, status (going,notgoing),tagsArray)
          </strong>
          <ul>
            <li>
              Get Events
              <ul>
                /api/users/:id/events
                <br />
                <button
                  name="getUserEvents"
                  id="getUserEvents"
                >
                  get user events
                </button>
                <button name="editEvent" id="editEvent">
                  get user events
                </button>
              </ul>
            </li>
            <li>
              Get event (for modal)
              <ul>
                /api/events/:id
                <br />
                <button name="getEvent" id="getEvent">
                  get event
                </button>
              </ul>
            </li>
            <li>
              Post Event
              <ul>
                <li>input name</li>
                <li>
                  input (dropdown) status (priority)&nbsp;
                </li>
                <li>input time</li>
                <li>input date</li>
                <li>input tags</li>
                <li>input link</li>
                <li>input guests</li>
                <li>input information</li>
              </ul>
              <ul>
                /api/events
                <br />
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                />{" "}
                <select
                  name="status"
                  className="browser-default"
                >
                  <option selected>priority</option>
                  <option value="high">high</option>
                  <option value="medium">medium</option>
                  <option value="low">low</option>
                </select>
                <input
                  type="text"
                  name="time"
                  placeholder="time"
                />
                <input
                  type="text"
                  name="date"
                  placeholder="date"
                />
                <input
                  type="text"
                  name="tags"
                  placeholder="tags"
                />
                <input
                  type="text"
                  name="link"
                  placeholder="link"
                />
                <input
                  type="text"
                  name="guests"
                  placeholder="guests"
                />
                <input
                  type="text"
                  name="information"
                  placeholder="information"
                />
                <button name="saveEvent" id="saveEvent">
                  saveEvent
                </button>
                <button name="cancel" id="cancel">
                  cancel
                </button>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Feedback (id, rating, user_id)</strong>
          <ul>
            <li>
              stars 5 buttons
              <ul>
                /api/feedback
                <br />{" "}
                <input
                  className="form-check-input"
                  type="radio"
                  name="star"
                  value="one"
                  id="star1"
                />
                <label class="form-check-label" for="star1">
                  1 star
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="star"
                  value="two"
                  id="star2"
                />
                <label class="form-check-label" for="star2">
                  2 star
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="star"
                  value="three"
                  id="star3"
                />
                <label class="form-check-label" for="star3">
                  3 star
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="star"
                  value="four"
                  id="star4"
                />
                <label class="form-check-label" for="star4">
                  4 star
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="star"
                  value="five"
                  id="star5"
                />
                <label class="form-check-label" for="star5">
                  5 star
                </label>
                <input
                  type="text"
                  name="feedback"
                  placeholder="feedback"
                />
                <button id="submitFeedback">
                  submit feedback
                </button>
              </ul>
            </li>
            <li>button submitFeedback</li>
          </ul>
          <ul>
            /api/
            <br />
            <input
              type="text"
              name="password"
              placeholder="password"
            />
            <button id="">reset</button>
          </ul>
        </li>
      </ul>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <h1>
        Just put all event handlers here and play here
      </h1>
      <ul>
        <li></li>
      </ul>
    </div>

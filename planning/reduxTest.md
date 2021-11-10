# Redux Testing

### Matchers

Matchers - expecting the output to match the expected output

```
it("Matchers", () => {
    expect(24 + 20).toBe(44);
    expect({ one: 1, two: 3 }).toEqual({ one: 1, two: 3 });

    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            expect(i + j).not.toBe(0);
}
}
});
```

### Truthiness

```
it("Truetiness", () => {
    const isActive = null;
    expect(isActive).toBeNull();
    expect(isActive).toBeDefined();
    expect(isActive).not.toBeUndefined();
    expect(isActive).not.toBeTruthy();
    expect(isActive).toBeFalsy();
 });
```

### Zeros

```
it("zeros", () => {
   const z = 0;
   expect(z).not.toBeNull();
   expect(z).toBeDefined();
   expect(z).not.toBeUndefined();
   expect(z).not.toBeTruthy();
   expect(z).toBeFalsy();
});
```

### Numbers

```
it("Numbers", () => {
   const value = 100 + 200;
   expect(value).toBeGreaterThan(200);
   expect(value).toBeGreaterThanOrEqual(200);
   expect(value).toBeLessThan(500);
   expect(value).toBeLessThanOrEqual(300);
   expect(value).toBe(300);
   expect(value).toEqual(300);
});
```

### Strings

```
expect('team').not.toMatch(/I/);
expect('Christoph').toMatch(/stop/);
```

### Arrays

```
it("Arrays", () => {
    const resources = [
        "Patients",
        "Practitioners",
        "Accountants",
        "Employer",
        "Appointments"
 ];
 expect(resources).toContain("Accountants");
 });
```

### Exceptions

```
it("Exceptions", () => {
    const t = () => {
        throw new TypeError();
    };
    expect(t).toThrow(TypeError);
 });
```

### setTimeout, setInterval, clearTimeout, clearInterval

Original Function

```
function takeXray(callback) {
 console.log("Ready, close your eye.");
 setTimeout(() => {
   console.log("Great you are done.");
   callback && callback();
 }, 2000);
}
module.exports = takeXray;
```

```
jest.useFakeTimers();
test("waits 2 second before taking the x-ray", () => {
 const takeXray = require("../time");
 takeXray();
 expect(setTimeout).toHaveBeenCalledTimes(1);
 expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
});
```

### Testing React Components

```
import React from "react";
import renderer from "react-test-renderer";
import Header from "../Header";

jest.mock("react-router-dom/Link", () => "Link");

it("should render correctly", () => {
    const component = renderer.create(<Header />);
    expect(component.toJSON()).toMatchSnapshot();
});
```

Example - let's say that the HeaderNav component contains a Logo and Header component, and we want to test those two

```
import React from "react";
import renderer from "react-test-renderer";
import HeaderNav from "../HeaderNav";
jest.mock("react-router-dom/Link", () => "Link");
jest.mock("../Header", () => "Header");
jest.mock("../SocialMediaLinks", () => "SocialMediaLinks");
jest.mock("../Logo", () => "Logo");
it("should render correctly", () => {
 const component = renderer.create(<HeaderNav />);
 expect(component.toJSON()).toMatchSnapshot();
});
```

Pro Tip - make sure that the first argument is the path to the file

```
jest.mock("../Logo", () => "Logo");
```

### Testing Event Handlers

```
import React, { Component } from "react";
class EmailInput extends Component {
 constructor(props) {
   super(props);
   this.state = {
     value: ""
   };
   this.handleEmailChange = this.handleEmailChange.bind(this);
 }
 handleEmailChange(event) {
   this.setState({ value: event.target.value });
 }
 render() {
   return (
     <div>
       <label>Enter Your Email</label>
       <input
         type="email"
         onChange={this.handleEmailChange}
         value={this.state.value}
         name="email"
       />
     </div>
   );
 }
}
export default EmailInput;
```

### Email Input Test

```
import React from "react";
import renderer from "react-test-renderer";
import EmailInput from "../EmailInput";
it("should render correctly", () => {
    const component = renderer.create(<EmailInput />);
    expect(component.toJSON()).toMatchSnapshot();
    const instance = component.getInstance();
    expect(instance.state).toMatchSnapshot("initial state");
    instance.handleEmailChange({ target: { value: "skmu@hvl.no" } });
    expect(instance.state).toMatchSnapshot("updated state");
});
```

### Testing Action Creators

```
export function addNewDoctor(newDoctorData) {
 return {
   type: "ADD_NEW_DOCTOR",
   newDoctorData
 };
}
```

Corresponding test
** Import function
** Give it the required arguments
\_\_ Assert that the function returns the correct object

```
import * as actions from "../actionCreators";
describe("actions", () => {
 it("should create an action to add a doctor", () => {
   const newDoctorData = {
     name: "Dr. Yoshmi Mukhiya",
    email: "yoshmi@gmail.com",
     age: 22
   };
   const expectedAction = {
     type: "ADD_NEW_DOCTOR",
     newDoctorData
   };
   expect(actions.addNewDoctor(newDoctorData)).toEqual(expectedAction);
 });
});
```

### Testing for Authentication

```
export const authenticate = (credentials: Credentials) => ({
 type: "AUTHENTICATE",
 payload: credentials
});
export const deauthenticate = () => ({
 type: "DEAUTHENTICATE"
});

```

Test

```
import { authenticate, deauthenticate } from '../auth'
describe('actions/authenticate', () => {
 it('should return action object correctly', () => {
   const credentials = {
     email: ‘mentalhelse@bergen.com’,
     password: mentalhelse,
   }
   expect(authenticate(credentials)).toEqual({
     type: 'AUTHENTICATE',
     payload: credentials,
   })
 })
})
describe
('actions/deauthenticate', () => {
 it('should return action object correctly', () => {
   expect(deauthenticate()).toEqual({
     type: 'DEAUTHENTICATE',
   })
 })
})
```

### Testing Reducers

ACTION

```
export const ADD_NEW_DOCTOR = "ADD_NEW_DOCTOR";
```

REDUCER

```
import { ADD_NEW_DOCTOR } from "./actionTypes";
const initialState = [
 {
   newDoctorData: {},
   completed: false
 }
];
export default function addDoctor(state = initialState, action) {
 switch (action.type) {
   case ADD_NEW_DOCTOR:
     return [
       {
         completed: false,
         data: action.newDoctorData
       },
       ...state
     ];
   default:
     return state;
 }
}
```

/**tests**/reducers-test.js

```
import reducer from "../reducers";
import * as types from "../ActionTypes";
const newDoctorData = {
 name: "Dr. Yoshmi Mukhiya",
 email: "yoshmi@gmail.com",
 age: 22
};
describe("add doctor reducer", () => {
 it("should return the initial state", () => {
   expect(reducer(undefined, {})).toEqual([
     {
       newDoctorData: {},
       completed: false
     }
   ]);
 });
 it("should handle ADD_NEW_DOCTOR", () => {
   expect(
     reducer([], {
       type: types.ADD_NEW_DOCTOR,
       newDoctorData
     })
   ).toEqual([
     {
       data: newDoctorData,
       completed: false
     }
   ]);
 });
});
```

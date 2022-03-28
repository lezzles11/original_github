const { extend } = require("lodash")
const { upset } = require("whats_wrong")
const { passwordToHash, hashToPassword } = require("./passwordHash")
const { see, hourglass } = require("code_clarity")
const when_you_free = require("when_you_free")
const ef = require("effective_knex")
const validate = require('validator');
const make_legit = require("make_legit")
async function updateLoggedIn(knex, user_id) {
    try {
        let currentStatus = await ef.getOneByKeyAndValue(knex, "user", "id", user_id)
        see.should("change if already not logged in")
        if (currentStatus["logged_in"] === true) {
            see.should("if logged in is true, should return user")
            see.is(currentStatus)
            return currentStatus;
        } else {
            see.should("if false, should update")
            let update = await ef.updateOne(knex, "user", user_id, "logged_in", false)
            let changedUserToLoggedIn = await ef.getOneByKeyAndValue(knex, "user", "id", user_id)
            see.is(changedUserToLoggedIn)
            return changedUserToLoggedIn
        }
    } catch (error) { return upset("error: " + error, "know you're real, routes.js", "supposed to be able to verify user") }

}
/**********************************************
 * 
 * ==================================
 * - [ ] Finish login route 
 ***********************************************/
// table.increments("id").primary();
// table.string("gmail_id");
// table.string("facebook_id");
// table.string("spotify_id");
// table.string("name");
// table.string("email").unique();
// table.boolean("verified");
// table.string("theme")
// table.string("hash");
// table.boolean("logged_in");
// table.timestamp("created").defaultTo(knex.fn.now());

// table.increments("id").primary();
//     table.integer("user_id").unsigned().references("user.id").onUpdate("CASCADE").onDelete("CASCADE")

//     table.string("type")
//     table.string("device")
// table.timestamp("last_login")
//     table.timestamp("created").defaultTo(knex.fn.now());
function getDeviceInfo(req, object) {
    let device = req.device.parser.useragent.source
    let type = req.device.type;
    object["device"] = device;
    object["type"] = type;
    return object;
}

/**
 * @description 
 * 1. Get device
 * 2. If device exists
 * 3. Update the last login date 
 * 4. Else, create new device 
 * 5. Return device
 * @example 
 *   userObject["user_id"] = postUser.id
            userObject["device"] = req.device.parser.useragent.source;
            userObject["type"] = req.device.type;
            let getPost = await postDevice(knex, userObject)
 * @author zen-out
 * @date 2022-03-16
 * @param {any} knex
 * @param {any}  object
 * @returns {any}
 */
async function postDevice(knex, userObject) {
    let getThis = await knex("device").select("*").where({ user_id: userObject.user_id, type: userObject.type, device: userObject.device })
    let date = Date.now()
    let getOne;
    let objectified;
    let update;
    let obj;
    let format = new Date()
    if (getThis.length > 0) {
        obj = ef.getObject(getThis)
        obj["last_login"] = format;
        update = await knex("device").update(obj).where({ id: obj.id })

        getOne = await knex("device").select("*").where({ id: obj.id })
        objectified = ef.getObject(getOne);
    } else {
        obj = await ef.post(knex, "device", userObject)
        update = await knex("device").update({ last_login: format }).where({ id: obj.id })
        getOne = await knex("device").select("*").where({ id: obj.id })
    }
    objectified = ef.getObject(getOne);
    delete objectified["id"]
    return objectified;
}

/**
 * @description 
 * 1. Will grab user from user table 
 * 2. If user exists, will return error object 
 * 3. Otherwise, will change logged_in to true 
 * 4. Will set last_login to today's date. 
 * @example
 *  let firstSignup = await signup(sampleRequest, knex, sampleObject)
 * @author zen-out
 * @date 2022-03-16
 * @param {any} knex
 * @param {any}  userObject
 * @returns {any}
 */
async function signup(req, knex, userObject) {
    let user_array_from_db = await knex("user").select("*").where("email", userObject.email)
    if (user_array_from_db.length === 1) {
        return upset("already a registered user", "already registered", "go to login page")
    } else if (user_array_from_db.length === 0) {
        let getValidate = validate.isEmail(userObject.email)
        if (getValidate) {
            let changePass = await passwordToHash(userObject.password)
            userObject["hash"] = changePass;
            userObject["logged_in"] = true;
            let postUser = await ef.post(knex, "user", userObject)
            userObject["user_id"] = postUser.id
            userObject["device"] = req.device.parser.useragent.source;
            userObject["type"] = req.device.type;
            let getPost = await postDevice(knex, userObject)
            let merged = extend(userObject, getPost)
            delete merged["password"]
            merged["id"] = postUser.id;
            return merged;
        } else {
            return upset("not valid email", "in know_youre_real", "should be valid email")
        }
    } else {
        let getUpset = upset("how come we have more than one user email?", "routes", "should only have one object in array")
        return getUpset;
    }
}
/**
 * @description
- Transforms hash to password
- Changes logged_in in user table to true 
- Changes last logged in date in device table
 * @example
    // let firstLogin = await login(sampleRequest, knex, sampleObject)
 * @author zen-out
 * @date 2022-03-16
 * @param {any} knex
 * @param {any}  userObject
 * @returns {any}
 */
async function login(req, knex, userObject) {
    try {
        let user_object_from_db = await knex("user").select("*").where("email", userObject.email)
        user_object_from_db = await ef.getObject(user_object_from_db)
        if (user_object_from_db.id) {
            let verifyPass = await hashToPassword(userObject.password, user_object_from_db.hash)
            if (verifyPass === true) {
                let loggedIn = await updateLoggedIn(knex, user_object_from_db.id)
                loggedIn["user_id"] = loggedIn.id
                loggedIn["device"] = req.device.parser.useragent.source;
                loggedIn["type"] = req.device.type;
                let getPost = await postDevice(knex, loggedIn)
                let merged = extend(loggedIn, getPost)
                delete merged["password"]
                merged["id"] = user_object_from_db.id
                return merged;
            } else {
                return upset("wrong password", "in know youre real", "try again")
            }
        } else {
            return upset("havent signed up yet", "in know_youre_real", "go to signup page")
        }
    } catch (error) {
        return upset("error: " + error, "know you're real, routes.js", "supposed to be able to login user")
    }
}

// hash password 


/**
 * @example
    // let verify = await verifyUserRoute(sampleRequest, knex, 1)
 * @description 
    1. Checks if user is logged in 
 * @author zen-out
 * @date 2022-03-16
 * @param {any} req
 * @param {any}  res
 * @param {any}  next
 * @returns {any}
 */
async function verifyUserRoute(req, knex, user_id, dateSinceLastLogin = 14) {
    try {
        user_id = parseInt(user_id)
        let deviceCheck;
        let loggedInCheck;
        let cleanedObject = await knex("user").select("*").where("id", user_id)
        cleanedObject = await ef.getObject(cleanedObject)
        if (cleanedObject.id === user_id) {
            let getDevice = await knex("device").select("*").where({ user_id: user_id })
            getDevice = ef.getObject(getDevice)
            let merged = extend(cleanedObject, getDevice)
            let checKLastLoggedIn = new Date(merged.last_login)

            deviceCheck = when_you_free.dateIsWithinLimit(merged.last_login, dateSinceLastLogin)
        }
        let updateLoggedIn = await ef.getOneByKeyAndValue(knex, "user", "id", user_id)
        if (updateLoggedIn["logged_in"] === true) {
            loggedInCheck = true;
        }
        if (deviceCheck && loggedInCheck) {
            return true;
        } else {
            return false;
        }
    } catch (error) { return upset("error: " + error, "know you're real, routes.js", "supposed to be able to verify user") }
}

/**
 * @description 
 * 1. Checks if user is logged in 
 * 2. If they are, change logged in to false 
 * @example 
 * let thenLogout = await logout(1) // returns true or false; 
 * @author zen-out
 * @date 2022-03-16
 * @param {any} user_id
 * @returns {any}
 */
async function logout(knex, user_id) {
    try {
        let updateLoggedIn = await ef.getOneByKeyAndValue(knex, "user", "id", user_id)
        if (updateLoggedIn["logged_in"] === true) {
            let update = await ef.updateOne(knex, "user", user_id, "logged_in", false)
            return true;
        } else {
            return true;
        }
    } catch (error) { return upset("error: " + error, "know you're real, routes.js", "supposed to be able to verify user") }

}

async function testHandlePost() {

    const knex = require("knex")({
        client: "postgresql",
        connection: {
            database: "optee_test",
            user: "postgres",
            password: "postgres",
        }
    })
    let sampleRequest = {
        device: {
            parser: {
                useragent: {
                    source: "mac"
                }
            },
            type: "desktop"
        }
    }
    let sampleObject = {
        email: "lesleyc.2@gmdail.com",
        password: "orangeorange"
    }
    let sampleObject2 = {
            email: "lesle3yc2@gmail.com",
            password: "orangeorange"
        }
        // let firstSignup = await signup(sampleRequest, knex, sampleObject)
        // see.done("signup", firstSignup)
    let firstLogin = await login(sampleRequest, knex, sampleObject)
    see.done("login", firstLogin)
    let verify = await verifyUserRoute(sampleRequest, knex, firstLogin.id, 14)
    see.done("verify route" + verify)
        // let thenLogout = await logout(knex, firstLogin.id)
        // see.done("logout", thenLogout)

}

// testHandlePost()

async function reset() {
    const knex = require("knex")({
        client: "postgresql",
        connection: {
            database: "optee_test",
            user: "postgres",
            password: "postgres",
        }
    })
    let remove1 = await knex("device").select("*").del()
    console.log(remove1)
    let remove = await knex("user").select("*").del()
    console.log(remove)

}

module.exports = { reset, getDeviceInfo, postDevice, signup, login, verifyUserRoute, logout, testHandlePost };
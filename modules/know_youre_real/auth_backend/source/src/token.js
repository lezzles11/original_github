const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { upset } = require("whats_wrong")
const { see, hourglass } = require("code_clarity")

/**
 * passwordToHash
 * @author zen-out
 * @date 2022-03-11
 * @param {any} password
 * @returns {string} hash
 */
async function passwordToHash(password) {
    try {
        let salt = await bcrypt.genSalt(10)
        let hash = await bcrypt.hash(password, salt)
        return hash;
    } catch (error) {
        return upset(error, "token.js", "should be able to get hash")
    }
}


/**
 * 
 * @author zen-out
 * @date 2022-03-11
 * @param {string} password
 * @param {string}  hash
 * @returns {boolean}
 */
async function hashToPassword(password, hash) {
    let compare;
    try {
        compare = await bcrypt.compare(password, hash)
    } catch (error) {
        return upset(error, "token.js", "should be able to get boolean")
    }
    if (compare) {
        return true;
    } else {
        return false;
    }
}

/**
 * @example
 * getUserByEmail() -> call after you get the user object
 * @author zen-out
 * @date 2022-03-11
 * @param {object} userObject
 * @param {string}  secret
 * @returns {object}
 */
async function addTokenToUser(userObject, secret) {
    const token = jwt.sign({
        sub: userObject.id
    }, secret)
    userObject["token"] = token
    return userObject;
}

module.exports = { passwordToHash, hashToPassword, addTokenToUser };
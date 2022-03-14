const { see, hourglass } = require("code_clarity")
const { passwordToHash, hashToPassword, addTokenToUser } = require("../index.js")

async function testToken() {
    let SECRET = "secret"
    let PASSWORD = "testtest"
    let getHash = await passwordToHash(PASSWORD)
    let verify = await hashToPassword(getHash, PASSWORD)
    let testJSON = await addTokenToUser({ id: 2, email: "lesley", password: "hi" }, SECRET)
    console.log(testJSON)
    see.should("be a boolean")
    see.is(verify)

}

module.exports = { testToken }
const effective_knex = require("effective_knex")


async function login(knex, userObject) {

}
async function logout(knex, userObject) {

}
async function signup(knex, userObject) {

}
async function verifyUser(knex, userObject) {

}

async function testService(knex, userObject) {
    let getLogin = await login(knex, userObject)
    let getLogout = await logout(knex, userObject)
    let getSignup = await signup(knex, userObject)
    let getVerify = await verifyUser(knex, userObject)
}
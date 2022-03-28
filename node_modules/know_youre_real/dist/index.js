const { passwordToHash, hashToPassword, testBcrypt } = require("./passwordHash.js")
const { getDeviceInfo, postDevice, signup, login, verifyUserRoute, logout, testHandlePost, reset } = require("./routes.js")
module.exports = { reset, getDeviceInfo, postDevice, signup, login, verifyUserRoute, logout, testHandlePost, passwordToHash, hashToPassword, testBcrypt }
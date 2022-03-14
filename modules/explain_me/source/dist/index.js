const { addInstructions, readme } = require("./readme.js")
const { addScript } = require("./packagejson")
const { html, copyHTML } = require("./jsdoc")
const { makeGlobal, addIndex } = require("./makeGlobal")
const { moveToDeploy, webpack } = require("./deploy")
module.exports = { addInstructions, readme, addScript, html, makeGlobal, addIndex, copyHTML, moveToDeploy, webpack }
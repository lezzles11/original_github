const when_you_free = require("when_you_free")
let date = when_you_free.format(new Date(), "ll")
let removeSpaces = date.replaceAll(" ", "")
let getDate = removeSpaces.replaceAll(",", "-")
module.exports = { getDate }
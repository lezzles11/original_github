const lezzlesHelpers = require("handlebars-helpers")()
const echo = require("handlebars-echo")
const { helpersDate } = require("./date")
const {
    helpersCode
} = require("./code")
const {
    helpersIfElse
} = require("./ifElse")
const { hbsArrz } = require("./array")
const { helpersString } = require("./string")
lezzlesHelpers.echo = echo;
lezzlesHelpers.hbsPrintCode = helpersCode.hbsPrintCode
lezzlesHelpers.hbsPrintHTML = helpersCode.hbsPrintHTML
lezzlesHelpers.hbsPrintJS = helpersCode.hbsPrintJS
lezzlesHelpers.hbsPrint = helpersCode.hbsPrint
lezzlesHelpers.hbsPrintFile = helpersCode.hbsPrintFile
lezzlesHelpers.hbsPrintFileJS = helpersCode.hbsPrintFileJS
lezzlesHelpers.ifLength = helpersIfElse.ifLength
lezzlesHelpers.ifEmpty = helpersIfElse.ifEmpty
lezzlesHelpers.ifLengthGreaterThan = helpersIfElse.ifLengthGreaterThan
lezzlesHelpers.format = helpersDate.format
lezzlesHelpers.futureDate = helpersDate.futureDate
lezzlesHelpers.getDuration = helpersDate.getDuration
lezzlesHelpers.getDifferenceInDays = helpersDate.getDifferenceInDays
lezzlesHelpers.pastDate = helpersDate.pastDate
lezzlesHelpers.getDifferenceInMonths = helpersDate.getDifferenceInMonths
lezzlesHelpers.getDifferenceInMinutes = helpersDate.getDifferenceInMinutes
lezzlesHelpers.sortAsc = hbsArrz.sortAsc
lezzlesHelpers.sortDesc = hbsArrz.sortDesc
lezzlesHelpers.contains = hbsArrz.contains
lezzlesHelpers.filterValues = hbsArrz.filterValues
lezzlesHelpers.doesNotContain = hbsArrz.doesNotContain
lezzlesHelpers.filterAndSortObject = hbsArrz.filterAndSortObject
lezzlesHelpers.filterAndSort = hbsArrz.filterAndSort
lezzlesHelpers.group = hbsArrz.group
lezzlesHelpers.countByCondition = hbsArrz.countByCondition
lezzlesHelpers.parentAnArray = hbsArrz.parentAnArray
lezzlesHelpers.truncate = helpersString.truncate
lezzlesHelpers.title = helpersString.title
lezzlesHelpers.capitalize = helpersString.capitalize

module.exports = lezzlesHelpers
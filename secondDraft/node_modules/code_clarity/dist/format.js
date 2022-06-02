const { format } = require("winston")
const { white, red, green, magenta, cyan, yellow, rainbow, bold, grey } = require("colors/safe")
const when_you_free = require("when_you_free")
const myFormat = format.printf(({ level, message, timestamp, ...metadata }) => {
    let date = when_you_free.format(new Date(), "MMMM Do YYYY, h:mm:ss a")
    timestamp = grey(date)
    if (level) {
        if (level === "problem") {
            level = red.bold(level)
            message = red(message)
        } else if (level === "should") {
            level = white.bold(level)
            message = white(message)
        } else if (level === "step" || level === "is") {
            level = yellow.bold(level)
            message = yellow(message)
        } else if (level === "motherlode") {
            level = green.bold(level)
            message = green(message)
        } else if (level === "start" || level === "end") {
            level = magenta.bold(level)
            message = magenta(message)
        } else if (level === "done" || level === "how") {
            level = green.bold(level)
            message = green(message)
        } else if (level === "story") {
            level = cyan.bold(level)
            message = cyan(level)
        } else {
            level = grey.bold(level)
            message = green(message)
        }
    }


    let msg = `${timestamp} [${level}] : ${message}`
    if (metadata) {
        msg += JSON.stringify(metadata)
    }
    return msg
});

module.exports = { myFormat }
const { createLogger, format, transports } = require("winston")
const { myFormat } = require("./format")
const { getDate } = require("./getDate")

const hourglass = createLogger({
    format: format.combine(format.splat(),
        format.timestamp(),
        myFormat),
    levels: {
        start: 0,
        end: 1,
    },
    transports: [
        new transports.Console({ level: "end" }),
        new transports.File({
            level: 'end',
            filename: `focus/${getDate}/timer.log`,
            format: format.json()
        })
    ],

})

const see = createLogger({
    levels: {
        done: 0,
        motherlode: 1,
        problem: 2,
        is: 3,
        step: 4,
        how: 5,
        should: 6,
        story: 7,
    },
    format: format.combine(format.splat(),
        format.timestamp(),
        myFormat),
    transports: [
        new transports.Console({ level: "story" }),
        new transports.File({
            filename: `focus/${getDate}/focus.log`,
            format: format.json(),

        }),
        new transports.File({
            level: 'motherlode',
            filename: `focus/${getDate}/done.log`,
            format: format.json()
        }),
    ],
    handleExceptions: [
        new transports.File({
            filename: `focus/${getDate}/errors.log`,
            format: format.json()
        }),
    ],
    handleRejections: [
        new transports.File({
            filename: `focus/${getDate}/errors.log`,
            format: format.json()
        }),

    ],
    level: 'how',
})

module.exports = { see, hourglass }

// see.problem("problem")
// see.should("what should be happening")
// see.is("what actually is happening")
// see.story("hi")
// see.is("hi")
// see.how("how can we get there?")
// see.step("step, try")
// see.motherlode("motherlode, solved it by...")
// hourglass.start("hi")
// hourglass.end("end")
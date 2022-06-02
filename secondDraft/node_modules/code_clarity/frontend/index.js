/**
 * Environment variables.
 *
 * @type {String}
 */

const LOG_LEVEL = "debug"

const LEVELS = {
    debug: 1,
    info: 2,
    warn: 3,
    error: 4,
}

/**
 * Log level styles.
 *
 * @type {Object}
 */

const STYLES = {
    debug: 'color: #9AA2AA',
    info: 'color: #659AD2',
    warn: 'color: #F9C749',
    error: 'color: ##24cbe5',
}

/**
 * Log level methods.
 *
 * @type {Object}
 */

const METHODS = {
    debug: console.debug ? 'debug' : 'log',
    info: console.info ? 'info' : 'log',
    warn: console.warn ? 'warn' : 'log',
    error: console.error ? 'error' : 'log',
}
const CONVERT = {
    error: "problem",
    info: "should",
    warn: "is",
}

/**
 * Define the `Logger` class.
 *
 * @type {Logger}
 */

class Logger {

    /**
     * Constructor.
     *
     * @param {Object} options
     */

    constructor(options = {}) {
        let {
            level = 0,
                prefix = '',
        } = options

        if (typeof level != 'string') {
            level = 'none'
        }

        level = level.toLowerCase()

        if (!(level in LEVELS)) {
            level = 'none'
        }

        if (typeof prefix != 'string') {
            prefix = String(prefix)
        }

        this.config = {
            level,
            prefix,
            threshold: level == 'none' ? Infinity : LEVELS[level],
        }

        for (const key in LEVELS) {
            this[key] = (message, data) => this.log(key, message, data)
        }
    }

    /**
     * Log to the console with `level`, `message` and `data`.
     *
     * @param {String} level
     * @param {String} message
     * @param {Object} data
     */

    log = (level, message, data) => {
        if (typeof level != 'string') {
            level = 'info'
        }

        level = level.toLowerCase()

        if (!(level in LEVELS)) {
            level = 'info'
        }

        if (typeof message != 'string') {
            message = String(message)
        }

        if (typeof data != 'object') {
            data = {}
        }

        const { threshold, prefix } = this.config
        const value = LEVELS[level]
            // if (value < threshold) return

        const method = METHODS[level]
        const args = [`%c [${CONVERT[level]}]`, STYLES[level], `${message} `, data]
        console[method](...args) // eslint-disable-line no-console
    }

    /**
     * Create a new logger, extending the current logger's config.
     *
     * @param {Object} options
     * @return {Logger}
     */

    clone = (options = {}) => {
        return new Logger({
            ...this.config,
            ...options,
        })
    }

}
const logger = new Logger()
let see = {}

see.problem = function(error, location, data) {
    const logger = new Logger()
    let newObj = {}
    newObj[location] = data
    logger.error(error, newObj)
}

see.should = function(message, location, data) {
    const logger = new Logger()
    let newObj = {}
    newObj[location] = data
    logger.info(message, newObj)
}

see.is = function(message, location, data) {
    const logger = new Logger()
    let newObj = {}
    newObj[location] = data
    logger.warn(message, newObj)
}


/**
 * Create a logger singleton with sane defaults.
 *
 * @type {Logger}
 */


/**
 * Export.
 *
 * @type {Logger}
 */
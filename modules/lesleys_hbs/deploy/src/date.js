const when_you_free = require("when_you_free")


class HelpersDate {
    /**
     * let helpersDate = new HelpersDate()
     * @date 2022-02-17
     * @returns {any}
     */
    constructor() {

        }
        /**
         * @example
         * {{getDuration "00:20:00" "00:40:00"}}
         * @date 2022-02-17
         * @param {any} dateOne
         * @param {any} dateTwo
         * @returns {any}
         */
    getDuration(dateOne, dateTwo) {
            return when_you_free.getDuration(dateOne, dateTwo, "minutes")
        }
        /**
         * @example
         * {{futureDate problem_created}} // 15 hours ago 
         * @date 2022-02-17
         * @param {any} date
         * @returns {any}
         */
    futureDate(date) {
            return when_you_free.getReadableFormat(date, "from")
        }
        /**
         * @example
         * {{pastDate problem_created}} // in 15 hours
         * @date 2022-02-17
         * @param {any} date
         * @returns {any}
         */
    pastDate(date) {
            return when_you_free.getReadableFormat(date, "to")
        }
        /**
         * @example {{getDifferenceInDays created end}}
         * @date 2022-02-17
         * @param {any} one
         * @param {any} two
         * @returns {any}
         */
    getDifferenceInMonths(one, two) {
            return when_you_free.difference(one, two, "months")
        }
        /**
         * @example
         * {{getDifferenceInDays created end}} 
         * @date 2022-02-17
         * @param {any} one
         * @param {any} two
         * @returns {any}
         */
    getDifferenceInDays(one, two) {
            return when_you_free.difference(one, two, "days")
        }
        /**
         * @example
         *  {{getDifferenceInMinutes created end}}
         * @date 2022-02-17
         * @param {any} one
         * @param {any} two
         * @returns {any}
         */
    getDifferenceInMinutes(one, two) {
            return when_you_free.difference(one, two, "minutes")
        }
        /**
         * @example
         * {{format created "ll"}}
         * @date 2022-02-17
         * @param {any} date
         * @param {any} type
         * @returns {any}
         */
    format(date, type) {
        return when_you_free.format(date, type)
    }
}
let helpersDate = new HelpersDate()

module.exports = {
    helpersDate
}
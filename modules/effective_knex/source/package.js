const {
    formatDateTime
} = require("format_date_time_moment/node")
const moment = require("moment")









function secondsToString(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);

    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
}

/**
 * cleanGetHourglass
 * @description will be called when sending data to client, will format the hourglass object (adds digitalTime, stringTime, format_edit, format_created, format_end)
 * @author zen-out
         * @date 2021-12-19
 * @param {object} object
 * @returns {object}
 */
function cleanGetHourglass(object) {
    for (let key in object) {
        // console.log("key value", key)
        if (object[key] === null) {
            delete object[key]
        }
    }
    try {
        if (object.public !== undefined && object.public !== null) {
            object.public = formatPublic(object.public)
            console.log(object.public)
        }
        if (object.difficulty !== undefined && object.difficulty !== null) {
            object.difficulty = formatDifficulty(object.difficulty)
        }
        if (object.importance !== undefined && object.importance !== null) {
            object.importance = formatImportance(object.importance)
        }
        if (object.usefulness !== undefined && object.usefulness !== null) {
            object.usefulness = formatImportance(object.usefulness)
        }
        if (object["seconds"] > 0) {
            const formatted = moment.utc(object["seconds"] * 1000).format('HH:mm:ss');
            object["digitalTime"] = formatted
            object["stringTime"] = secondsToString(object["seconds"])
        } else {
            object["seconds"] = 0
        }
        if (object["start"] !== null && object["start"] !== undefined) {
            let date = formatDateTime.format(object["start"], "lll")
            object["format_start"] = date
            object["start"] = formatDateTime.format(object["start"], "dateInput")
        }
        if (object["edit"] !== null && object["edit"] !== undefined) {
            let date = formatDateTime.format(object["edit"], "lll")
            object["format_edit"] = date
            object["edit"] = formatDateTime.format(object["edit"], "dateInput")
        }
        if (object["end"] !== null && object["end"] !== undefined) {
            let date = formatDateTime.format(object["end"], "lll")
            object["format_end"] = date
            object["end"] = formatDateTime.format(object["end"], "dateInput")
        }
        if (object["created"] !== null && object["created"] !== undefined) {
            let date = formatDateTime.format(object["created"], "lll")
            object["format_created"] = date
            object["created"] = formatDateTime.format(object["created"], "dateInput")
        }
        return object
    } catch (error) {
        console.error(error)
        return {
            error: error,
            error_location: "clean data, get hourglass"
        }
    }

}
let cleanKnexPost = new CleanKnexPost()
module.exports = { cleanKnexPost }
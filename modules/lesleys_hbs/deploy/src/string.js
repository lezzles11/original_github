class HelpersString {
    constructor() {

    }
    truncate(string, limit, suffix) {
        if (typeof string === "string") {
            if (typeof suffix !== 'string') {
                suffix = '';
            }
            if (string.length > limit) {
                return string.slice(0, limit - suffix.length) + suffix;
            }
            return string;
        }
    }
    title(string) {
        if (!typeof string === "string") return '';
        var title = string.replace(/[- _]+/g, ' ');
        var words = title.split(' ');
        var len = words.length;
        var res = [];
        var i = 0;
        while (len--) {
            var word = words[i++];
            res.push(this.capitalize(word));
        }
        return res.join(' ');
    }
    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

let helpersString = new HelpersString()

module.exports = { helpersString }
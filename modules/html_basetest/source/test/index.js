! function(e) {
    if ("object" == typeof exports) module.exports = e();
    else if ("function" == typeof define && define.amd) define(e);
    else { var f; "undefined" != typeof window ? f = window : "undefined" != typeof global ? f = global : "undefined" != typeof self && (f = self), f.S = e() }
}(function() {
    var define, module, exports;
    return function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) { var a = typeof require == "function" && require; if (!u && a) return a(o, !0); if (i) return i(o, !0); throw new Error("Cannot find module '" + o + "'") }
                var f = n[o] = { exports: {} };
                t[o][0].call(f.exports, function(e) { var n = t[o][1][e]; return s(n ? n : e) }, f, f.exports, e, t, n, r)
            }
            return n[o].exports
        }
        var i = typeof require == "function" && require;
        for (var o = 0; o < r.length; o++) s(r[o]);
        return s
    }({
        1: [function(_dereq_, module, exports) {
            function count(self, substr) {
                var count = 0;
                var pos = self.indexOf(substr);
                while (pos >= 0) {
                    count += 1;
                    pos = self.indexOf(substr, pos + 1)
                }
                return count
            }
            module.exports = count
        }, {}],
        2: [function(_dereq_, module, exports) {
            function splitLeft(self, sep, maxSplit, limit) { if (typeof maxSplit === "undefined") { var maxSplit = -1 } var splitResult = self.split(sep); var splitPart1 = splitResult.slice(0, maxSplit); var splitPart2 = splitResult.slice(maxSplit); if (splitPart2.length === 0) { splitResult = splitPart1 } else { splitResult = splitPart1.concat(splitPart2.join(sep)) } if (typeof limit === "undefined") { return splitResult } else if (limit < 0) { return splitResult.slice(limit) } else { return splitResult.slice(0, limit) } }
            module.exports = splitLeft
        }, {}],
        3: [function(_dereq_, module, exports) {
            function splitRight(self, sep, maxSplit, limit) {
                if (typeof maxSplit === "undefined") { var maxSplit = -1 }
                if (typeof limit === "undefined") { var limit = 0 }
                var splitResult = [self];
                for (var i = self.length - 1; i >= 0; i--) {
                    if (splitResult[0].slice(i).indexOf(sep) === 0 && (splitResult.length <= maxSplit || maxSplit === -1)) {
                        splitResult.splice(1, 0, splitResult[0].slice(i + sep.length));
                        splitResult[0] = splitResult[0].slice(0, i)
                    }
                }
                if (limit >= 0) { return splitResult.slice(-limit) } else { return splitResult.slice(0, -limit) }
            }
            module.exports = splitRight
        }, {}],
        4: [function(_dereq_, module, exports) {
            ! function() {
                "use strict";
                var VERSION = "3.3.3";
                var ENTITIES = {};
                var latin_map = { "Á": "A", "Ă": "A", "Ắ": "A", "Ặ": "A", "Ằ": "A", "Ẳ": "A", "Ẵ": "A", "Ǎ": "A", "Â": "A", "Ấ": "A", "Ậ": "A", "Ầ": "A", "Ẩ": "A", "Ẫ": "A", "Ä": "A", "Ǟ": "A", "Ȧ": "A", "Ǡ": "A", "Ạ": "A", "Ȁ": "A", "À": "A", "Ả": "A", "Ȃ": "A", "Ā": "A", "Ą": "A", "Å": "A", "Ǻ": "A", "Ḁ": "A", "Ⱥ": "A", "Ã": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ḃ": "B", "Ḅ": "B", "Ɓ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ć": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ĉ": "C", "Ċ": "C", "Ƈ": "C", "Ȼ": "C", "Ď": "D", "Ḑ": "D", "Ḓ": "D", "Ḋ": "D", "Ḍ": "D", "Ɗ": "D", "Ḏ": "D", "ǲ": "D", "ǅ": "D", "Đ": "D", "Ƌ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "É": "E", "Ĕ": "E", "Ě": "E", "Ȩ": "E", "Ḝ": "E", "Ê": "E", "Ế": "E", "Ệ": "E", "Ề": "E", "Ể": "E", "Ễ": "E", "Ḙ": "E", "Ë": "E", "Ė": "E", "Ẹ": "E", "Ȅ": "E", "È": "E", "Ẻ": "E", "Ȇ": "E", "Ē": "E", "Ḗ": "E", "Ḕ": "E", "Ę": "E", "Ɇ": "E", "Ẽ": "E", "Ḛ": "E", "Ꝫ": "ET", "Ḟ": "F", "Ƒ": "F", "Ǵ": "G", "Ğ": "G", "Ǧ": "G", "Ģ": "G", "Ĝ": "G", "Ġ": "G", "Ɠ": "G", "Ḡ": "G", "Ǥ": "G", "Ḫ": "H", "Ȟ": "H", "Ḩ": "H", "Ĥ": "H", "Ⱨ": "H", "Ḧ": "H", "Ḣ": "H", "Ḥ": "H", "Ħ": "H", "Í": "I", "Ĭ": "I", "Ǐ": "I", "Î": "I", "Ï": "I", "Ḯ": "I", "İ": "I", "Ị": "I", "Ȉ": "I", "Ì": "I", "Ỉ": "I", "Ȋ": "I", "Ī": "I", "Į": "I", "Ɨ": "I", "Ĩ": "I", "Ḭ": "I", "Ꝺ": "D", "Ꝼ": "F", "Ᵹ": "G", "Ꞃ": "R", "Ꞅ": "S", "Ꞇ": "T", "Ꝭ": "IS", "Ĵ": "J", "Ɉ": "J", "Ḱ": "K", "Ǩ": "K", "Ķ": "K", "Ⱪ": "K", "Ꝃ": "K", "Ḳ": "K", "Ƙ": "K", "Ḵ": "K", "Ꝁ": "K", "Ꝅ": "K", "Ĺ": "L", "Ƚ": "L", "Ľ": "L", "Ļ": "L", "Ḽ": "L", "Ḷ": "L", "Ḹ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ḻ": "L", "Ŀ": "L", "Ɫ": "L", "ǈ": "L", "Ł": "L", "Ǉ": "LJ", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ń": "N", "Ň": "N", "Ņ": "N", "Ṋ": "N", "Ṅ": "N", "Ṇ": "N", "Ǹ": "N", "Ɲ": "N", "Ṉ": "N", "Ƞ": "N", "ǋ": "N", "Ñ": "N", "Ǌ": "NJ", "Ó": "O", "Ŏ": "O", "Ǒ": "O", "Ô": "O", "Ố": "O", "Ộ": "O", "Ồ": "O", "Ổ": "O", "Ỗ": "O", "Ö": "O", "Ȫ": "O", "Ȯ": "O", "Ȱ": "O", "Ọ": "O", "Ő": "O", "Ȍ": "O", "Ò": "O", "Ỏ": "O", "Ơ": "O", "Ớ": "O", "Ợ": "O", "Ờ": "O", "Ở": "O", "Ỡ": "O", "Ȏ": "O", "Ꝋ": "O", "Ꝍ": "O", "Ō": "O", "Ṓ": "O", "Ṑ": "O", "Ɵ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Õ": "O", "Ṍ": "O", "Ṏ": "O", "Ȭ": "O", "Ƣ": "OI", "Ꝏ": "OO", "Ɛ": "E", "Ɔ": "O", "Ȣ": "OU", "Ṕ": "P", "Ṗ": "P", "Ꝓ": "P", "Ƥ": "P", "Ꝕ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝙ": "Q", "Ꝗ": "Q", "Ŕ": "R", "Ř": "R", "Ŗ": "R", "Ṙ": "R", "Ṛ": "R", "Ṝ": "R", "Ȑ": "R", "Ȓ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꜿ": "C", "Ǝ": "E", "Ś": "S", "Ṥ": "S", "Š": "S", "Ṧ": "S", "Ş": "S", "Ŝ": "S", "Ș": "S", "Ṡ": "S", "Ṣ": "S", "Ṩ": "S", "ẞ": "SS", "Ť": "T", "Ţ": "T", "Ṱ": "T", "Ț": "T", "Ⱦ": "T", "Ṫ": "T", "Ṭ": "T", "Ƭ": "T", "Ṯ": "T", "Ʈ": "T", "Ŧ": "T", "Ɐ": "A", "Ꞁ": "L", "Ɯ": "M", "Ʌ": "V", "Ꜩ": "TZ", "Ú": "U", "Ŭ": "U", "Ǔ": "U", "Û": "U", "Ṷ": "U", "Ü": "U", "Ǘ": "U", "Ǚ": "U", "Ǜ": "U", "Ǖ": "U", "Ṳ": "U", "Ụ": "U", "Ű": "U", "Ȕ": "U", "Ù": "U", "Ủ": "U", "Ư": "U", "Ứ": "U", "Ự": "U", "Ừ": "U", "Ử": "U", "Ữ": "U", "Ȗ": "U", "Ū": "U", "Ṻ": "U", "Ų": "U", "Ů": "U", "Ũ": "U", "Ṹ": "U", "Ṵ": "U", "Ꝟ": "V", "Ṿ": "V", "Ʋ": "V", "Ṽ": "V", "Ꝡ": "VY", "Ẃ": "W", "Ŵ": "W", "Ẅ": "W", "Ẇ": "W", "Ẉ": "W", "Ẁ": "W", "Ⱳ": "W", "Ẍ": "X", "Ẋ": "X", "Ý": "Y", "Ŷ": "Y", "Ÿ": "Y", "Ẏ": "Y", "Ỵ": "Y", "Ỳ": "Y", "Ƴ": "Y", "Ỷ": "Y", "Ỿ": "Y", "Ȳ": "Y", "Ɏ": "Y", "Ỹ": "Y", "Ź": "Z", "Ž": "Z", "Ẑ": "Z", "Ⱬ": "Z", "Ż": "Z", "Ẓ": "Z", "Ȥ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ĳ": "IJ", "Œ": "OE", "ᴀ": "A", "ᴁ": "AE", "ʙ": "B", "ᴃ": "B", "ᴄ": "C", "ᴅ": "D", "ᴇ": "E", "ꜰ": "F", "ɢ": "G", "ʛ": "G", "ʜ": "H", "ɪ": "I", "ʁ": "R", "ᴊ": "J", "ᴋ": "K", "ʟ": "L", "ᴌ": "L", "ᴍ": "M", "ɴ": "N", "ᴏ": "O", "ɶ": "OE", "ᴐ": "O", "ᴕ": "OU", "ᴘ": "P", "ʀ": "R", "ᴎ": "N", "ᴙ": "R", "ꜱ": "S", "ᴛ": "T", "ⱻ": "E", "ᴚ": "R", "ᴜ": "U", "ᴠ": "V", "ᴡ": "W", "ʏ": "Y", "ᴢ": "Z", "á": "a", "ă": "a", "ắ": "a", "ặ": "a", "ằ": "a", "ẳ": "a", "ẵ": "a", "ǎ": "a", "â": "a", "ấ": "a", "ậ": "a", "ầ": "a", "ẩ": "a", "ẫ": "a", "ä": "a", "ǟ": "a", "ȧ": "a", "ǡ": "a", "ạ": "a", "ȁ": "a", "à": "a", "ả": "a", "ȃ": "a", "ā": "a", "ą": "a", "ᶏ": "a", "ẚ": "a", "å": "a", "ǻ": "a", "ḁ": "a", "ⱥ": "a", "ã": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ḃ": "b", "ḅ": "b", "ɓ": "b", "ḇ": "b", "ᵬ": "b", "ᶀ": "b", "ƀ": "b", "ƃ": "b", "ɵ": "o", "ć": "c", "č": "c", "ç": "c", "ḉ": "c", "ĉ": "c", "ɕ": "c", "ċ": "c", "ƈ": "c", "ȼ": "c", "ď": "d", "ḑ": "d", "ḓ": "d", "ȡ": "d", "ḋ": "d", "ḍ": "d", "ɗ": "d", "ᶑ": "d", "ḏ": "d", "ᵭ": "d", "ᶁ": "d", "đ": "d", "ɖ": "d", "ƌ": "d", "ı": "i", "ȷ": "j", "ɟ": "j", "ʄ": "j", "ǳ": "dz", "ǆ": "dz", "é": "e", "ĕ": "e", "ě": "e", "ȩ": "e", "ḝ": "e", "ê": "e", "ế": "e", "ệ": "e", "ề": "e", "ể": "e", "ễ": "e", "ḙ": "e", "ë": "e", "ė": "e", "ẹ": "e", "ȅ": "e", "è": "e", "ẻ": "e", "ȇ": "e", "ē": "e", "ḗ": "e", "ḕ": "e", "ⱸ": "e", "ę": "e", "ᶒ": "e", "ɇ": "e", "ẽ": "e", "ḛ": "e", "ꝫ": "et", "ḟ": "f", "ƒ": "f", "ᵮ": "f", "ᶂ": "f", "ǵ": "g", "ğ": "g", "ǧ": "g", "ģ": "g", "ĝ": "g", "ġ": "g", "ɠ": "g", "ḡ": "g", "ᶃ": "g", "ǥ": "g", "ḫ": "h", "ȟ": "h", "ḩ": "h", "ĥ": "h", "ⱨ": "h", "ḧ": "h", "ḣ": "h", "ḥ": "h", "ɦ": "h", "ẖ": "h", "ħ": "h", "ƕ": "hv", "í": "i", "ĭ": "i", "ǐ": "i", "î": "i", "ï": "i", "ḯ": "i", "ị": "i", "ȉ": "i", "ì": "i", "ỉ": "i", "ȋ": "i", "ī": "i", "į": "i", "ᶖ": "i", "ɨ": "i", "ĩ": "i", "ḭ": "i", "ꝺ": "d", "ꝼ": "f", "ᵹ": "g", "ꞃ": "r", "ꞅ": "s", "ꞇ": "t", "ꝭ": "is", "ǰ": "j", "ĵ": "j", "ʝ": "j", "ɉ": "j", "ḱ": "k", "ǩ": "k", "ķ": "k", "ⱪ": "k", "ꝃ": "k", "ḳ": "k", "ƙ": "k", "ḵ": "k", "ᶄ": "k", "ꝁ": "k", "ꝅ": "k", "ĺ": "l", "ƚ": "l", "ɬ": "l", "ľ": "l", "ļ": "l", "ḽ": "l", "ȴ": "l", "ḷ": "l", "ḹ": "l", "ⱡ": "l", "ꝉ": "l", "ḻ": "l", "ŀ": "l", "ɫ": "l", "ᶅ": "l", "ɭ": "l", "ł": "l", "ǉ": "lj", "ſ": "s", "ẜ": "s", "ẛ": "s", "ẝ": "s", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ᵯ": "m", "ᶆ": "m", "ń": "n", "ň": "n", "ņ": "n", "ṋ": "n", "ȵ": "n", "ṅ": "n", "ṇ": "n", "ǹ": "n", "ɲ": "n", "ṉ": "n", "ƞ": "n", "ᵰ": "n", "ᶇ": "n", "ɳ": "n", "ñ": "n", "ǌ": "nj", "ó": "o", "ŏ": "o", "ǒ": "o", "ô": "o", "ố": "o", "ộ": "o", "ồ": "o", "ổ": "o", "ỗ": "o", "ö": "o", "ȫ": "o", "ȯ": "o", "ȱ": "o", "ọ": "o", "ő": "o", "ȍ": "o", "ò": "o", "ỏ": "o", "ơ": "o", "ớ": "o", "ợ": "o", "ờ": "o", "ở": "o", "ỡ": "o", "ȏ": "o", "ꝋ": "o", "ꝍ": "o", "ⱺ": "o", "ō": "o", "ṓ": "o", "ṑ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "õ": "o", "ṍ": "o", "ṏ": "o", "ȭ": "o", "ƣ": "oi", "ꝏ": "oo", "ɛ": "e", "ᶓ": "e", "ɔ": "o", "ᶗ": "o", "ȣ": "ou", "ṕ": "p", "ṗ": "p", "ꝓ": "p", "ƥ": "p", "ᵱ": "p", "ᶈ": "p", "ꝕ": "p", "ᵽ": "p", "ꝑ": "p", "ꝙ": "q", "ʠ": "q", "ɋ": "q", "ꝗ": "q", "ŕ": "r", "ř": "r", "ŗ": "r", "ṙ": "r", "ṛ": "r", "ṝ": "r", "ȑ": "r", "ɾ": "r", "ᵳ": "r", "ȓ": "r", "ṟ": "r", "ɼ": "r", "ᵲ": "r", "ᶉ": "r", "ɍ": "r", "ɽ": "r", "ↄ": "c", "ꜿ": "c", "ɘ": "e", "ɿ": "r", "ś": "s", "ṥ": "s", "š": "s", "ṧ": "s", "ş": "s", "ŝ": "s", "ș": "s", "ṡ": "s", "ṣ": "s", "ṩ": "s", "ʂ": "s", "ᵴ": "s", "ᶊ": "s", "ȿ": "s", "ɡ": "g", "ß": "ss", "ᴑ": "o", "ᴓ": "o", "ᴝ": "u", "ť": "t", "ţ": "t", "ṱ": "t", "ț": "t", "ȶ": "t", "ẗ": "t", "ⱦ": "t", "ṫ": "t", "ṭ": "t", "ƭ": "t", "ṯ": "t", "ᵵ": "t", "ƫ": "t", "ʈ": "t", "ŧ": "t", "ᵺ": "th", "ɐ": "a", "ᴂ": "ae", "ǝ": "e", "ᵷ": "g", "ɥ": "h", "ʮ": "h", "ʯ": "h", "ᴉ": "i", "ʞ": "k", "ꞁ": "l", "ɯ": "m", "ɰ": "m", "ᴔ": "oe", "ɹ": "r", "ɻ": "r", "ɺ": "r", "ⱹ": "r", "ʇ": "t", "ʌ": "v", "ʍ": "w", "ʎ": "y", "ꜩ": "tz", "ú": "u", "ŭ": "u", "ǔ": "u", "û": "u", "ṷ": "u", "ü": "u", "ǘ": "u", "ǚ": "u", "ǜ": "u", "ǖ": "u", "ṳ": "u", "ụ": "u", "ű": "u", "ȕ": "u", "ù": "u", "ủ": "u", "ư": "u", "ứ": "u", "ự": "u", "ừ": "u", "ử": "u", "ữ": "u", "ȗ": "u", "ū": "u", "ṻ": "u", "ų": "u", "ᶙ": "u", "ů": "u", "ũ": "u", "ṹ": "u", "ṵ": "u", "ᵫ": "ue", "ꝸ": "um", "ⱴ": "v", "ꝟ": "v", "ṿ": "v", "ʋ": "v", "ᶌ": "v", "ⱱ": "v", "ṽ": "v", "ꝡ": "vy", "ẃ": "w", "ŵ": "w", "ẅ": "w", "ẇ": "w", "ẉ": "w", "ẁ": "w", "ⱳ": "w", "ẘ": "w", "ẍ": "x", "ẋ": "x", "ᶍ": "x", "ý": "y", "ŷ": "y", "ÿ": "y", "ẏ": "y", "ỵ": "y", "ỳ": "y", "ƴ": "y", "ỷ": "y", "ỿ": "y", "ȳ": "y", "ẙ": "y", "ɏ": "y", "ỹ": "y", "ź": "z", "ž": "z", "ẑ": "z", "ʑ": "z", "ⱬ": "z", "ż": "z", "ẓ": "z", "ȥ": "z", "ẕ": "z", "ᵶ": "z", "ᶎ": "z", "ʐ": "z", "ƶ": "z", "ɀ": "z", "ﬀ": "ff", "ﬃ": "ffi", "ﬄ": "ffl", "ﬁ": "fi", "ﬂ": "fl", "ĳ": "ij", "œ": "oe", "ﬆ": "st", "ₐ": "a", "ₑ": "e", "ᵢ": "i", "ⱼ": "j", "ₒ": "o", "ᵣ": "r", "ᵤ": "u", "ᵥ": "v", "ₓ": "x" };

                function initialize(object, s) {
                    if (s !== null && s !== undefined) {
                        if (typeof s === "string") object.s = s;
                        else object.s = s.toString()
                    } else { object.s = s }
                    object.orig = s;
                    if (s !== null && s !== undefined) { if (object.__defineGetter__) { object.__defineGetter__("length", function() { return object.s.length }) } else { object.length = s.length } } else { object.length = -1 }
                }

                function S(s) { initialize(this, s) }
                var __nsp = String.prototype;
                var __sp = S.prototype = {
                    between: function(left, right) {
                        var s = this.s;
                        var startPos = s.indexOf(left);
                        var endPos = s.indexOf(right, startPos + left.length);
                        if (endPos == -1 && right != null) return new this.constructor("");
                        else if (endPos == -1 && right == null) return new this.constructor(s.substring(startPos + left.length));
                        else return new this.constructor(s.slice(startPos + left.length, endPos))
                    },
                    camelize: function() { var s = this.trim().s.replace(/(\-|_|\s)+(.)?/g, function(mathc, sep, c) { return c ? c.toUpperCase() : "" }); return new this.constructor(s) },
                    capitalize: function() { return new this.constructor(this.s.substr(0, 1).toUpperCase() + this.s.substring(1).toLowerCase()) },
                    charAt: function(index) { return this.s.charAt(index) },
                    chompLeft: function(prefix) { var s = this.s; if (s.indexOf(prefix) === 0) { s = s.slice(prefix.length); return new this.constructor(s) } else { return this } },
                    chompRight: function(suffix) {
                        if (this.endsWith(suffix)) {
                            var s = this.s;
                            s = s.slice(0, s.length - suffix.length);
                            return new this.constructor(s)
                        } else { return this }
                    },
                    collapseWhitespace: function() { var s = this.s.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, ""); return new this.constructor(s) },
                    contains: function(ss) { return this.s.indexOf(ss) >= 0 },
                    count: function(ss) { return _dereq_("./_count")(this.s, ss) },
                    dasherize: function() { var s = this.trim().s.replace(/[_\s]+/g, "-").replace(/([A-Z])/g, "-$1").replace(/-+/g, "-").toLowerCase(); return new this.constructor(s) },
                    equalsIgnoreCase: function(prefix) { var s = this.s; return s.toLowerCase() == prefix.toLowerCase() },
                    latinise: function() { var s = this.replace(/[^A-Za-z0-9\[\] ]/g, function(x) { return latin_map[x] || x }); return new this.constructor(s) },
                    decodeHtmlEntities: function() {
                        var s = this.s;
                        s = s.replace(/&#(\d+);?/g, function(_, code) { return String.fromCharCode(code) }).replace(/&#[xX]([A-Fa-f0-9]+);?/g, function(_, hex) { return String.fromCharCode(parseInt(hex, 16)) }).replace(/&([^;\W]+;?)/g, function(m, e) { var ee = e.replace(/;$/, ""); var target = ENTITIES[e] || e.match(/;$/) && ENTITIES[ee]; if (typeof target === "number") { return String.fromCharCode(target) } else if (typeof target === "string") { return target } else { return m } });
                        return new this.constructor(s)
                    },
                    endsWith: function() { var suffixes = Array.prototype.slice.call(arguments, 0); for (var i = 0; i < suffixes.length; ++i) { var l = this.s.length - suffixes[i].length; if (l >= 0 && this.s.indexOf(suffixes[i], l) === l) return true } return false },
                    escapeHTML: function() { return new this.constructor(this.s.replace(/[&<>"']/g, function(m) { return "&" + reversedEscapeChars[m] + ";" })) },
                    ensureLeft: function(prefix) { var s = this.s; if (s.indexOf(prefix) === 0) { return this } else { return new this.constructor(prefix + s) } },
                    ensureRight: function(suffix) { var s = this.s; if (this.endsWith(suffix)) { return this } else { return new this.constructor(s + suffix) } },
                    humanize: function() { if (this.s === null || this.s === undefined) return new this.constructor(""); var s = this.underscore().replace(/_id$/, "").replace(/_/g, " ").trim().capitalize(); return new this.constructor(s) },
                    isAlpha: function() { return !/[^a-z\xDF-\xFF]|^$/.test(this.s.toLowerCase()) },
                    isAlphaNumeric: function() { return !/[^0-9a-z\xDF-\xFF]/.test(this.s.toLowerCase()) },
                    isEmpty: function() { return this.s === null || this.s === undefined ? true : /^[\s\xa0]*$/.test(this.s) },
                    isLower: function() { return this.isAlpha() && this.s.toLowerCase() === this.s },
                    isNumeric: function() { return !/[^0-9]/.test(this.s) },
                    isUpper: function() { return this.isAlpha() && this.s.toUpperCase() === this.s },
                    left: function(N) { if (N >= 0) { var s = this.s.substr(0, N); return new this.constructor(s) } else { return this.right(-N) } },
                    lines: function() { return this.replaceAll("\r\n", "\n").s.split("\n") },
                    pad: function(len, ch) {
                        if (ch == null) ch = " ";
                        if (this.s.length >= len) return new this.constructor(this.s);
                        len = len - this.s.length;
                        var left = Array(Math.ceil(len / 2) + 1).join(ch);
                        var right = Array(Math.floor(len / 2) + 1).join(ch);
                        return new this.constructor(left + this.s + right)
                    },
                    padLeft: function(len, ch) { if (ch == null) ch = " "; if (this.s.length >= len) return new this.constructor(this.s); return new this.constructor(Array(len - this.s.length + 1).join(ch) + this.s) },
                    padRight: function(len, ch) { if (ch == null) ch = " "; if (this.s.length >= len) return new this.constructor(this.s); return new this.constructor(this.s + Array(len - this.s.length + 1).join(ch)) },
                    parseCSV: function(delimiter, qualifier, escape, lineDelimiter) {
                        delimiter = delimiter || ",";
                        escape = escape || "\\";
                        if (typeof qualifier == "undefined") qualifier = '"';
                        var i = 0,
                            fieldBuffer = [],
                            fields = [],
                            len = this.s.length,
                            inField = false,
                            inUnqualifiedString = false,
                            self = this;
                        var ca = function(i) { return self.s.charAt(i) };
                        if (typeof lineDelimiter !== "undefined") var rows = [];
                        if (!qualifier) inField = true;
                        while (i < len) {
                            var current = ca(i);
                            switch (current) {
                                case escape:
                                    if (inField && (escape !== qualifier || ca(i + 1) === qualifier)) {
                                        i += 1;
                                        fieldBuffer.push(ca(i));
                                        break
                                    }
                                    if (escape !== qualifier) break;
                                case qualifier:
                                    inField = !inField;
                                    break;
                                case delimiter:
                                    if (inUnqualifiedString) {
                                        inField = false;
                                        inUnqualifiedString = false
                                    }
                                    if (inField && qualifier) fieldBuffer.push(current);
                                    else {
                                        fields.push(fieldBuffer.join(""));
                                        fieldBuffer.length = 0
                                    }
                                    break;
                                case lineDelimiter:
                                    if (inUnqualifiedString) {
                                        inField = false;
                                        inUnqualifiedString = false;
                                        fields.push(fieldBuffer.join(""));
                                        rows.push(fields);
                                        fields = [];
                                        fieldBuffer.length = 0
                                    } else if (inField) { fieldBuffer.push(current) } else {
                                        if (rows) {
                                            fields.push(fieldBuffer.join(""));
                                            rows.push(fields);
                                            fields = [];
                                            fieldBuffer.length = 0
                                        }
                                    }
                                    break;
                                case " ":
                                    if (inField) fieldBuffer.push(current);
                                    break;
                                default:
                                    if (inField) fieldBuffer.push(current);
                                    else if (current !== qualifier) {
                                        fieldBuffer.push(current);
                                        inField = true;
                                        inUnqualifiedString = true
                                    }
                                    break
                            }
                            i += 1
                        }
                        fields.push(fieldBuffer.join(""));
                        if (rows) { rows.push(fields); return rows }
                        return fields
                    },
                    replaceAll: function(ss, r) { var s = this.s.split(ss).join(r); return new this.constructor(s) },
                    splitLeft: function(sep, maxSplit, limit) { return _dereq_("./_splitLeft")(this.s, sep, maxSplit, limit) },
                    splitRight: function(sep, maxSplit, limit) { return _dereq_("./_splitRight")(this.s, sep, maxSplit, limit) },
                    strip: function() { var ss = this.s; for (var i = 0, n = arguments.length; i < n; i++) { ss = ss.split(arguments[i]).join("") } return new this.constructor(ss) },
                    stripLeft: function(chars) {
                        var regex;
                        var pattern;
                        var ss = ensureString(this.s);
                        if (chars === undefined) { pattern = /^\s+/g } else {
                            regex = escapeRegExp(chars);
                            pattern = new RegExp("^[" + regex + "]+", "g")
                        }
                        return new this.constructor(ss.replace(pattern, ""))
                    },
                    stripRight: function(chars) {
                        var regex;
                        var pattern;
                        var ss = ensureString(this.s);
                        if (chars === undefined) { pattern = /\s+$/g } else {
                            regex = escapeRegExp(chars);
                            pattern = new RegExp("[" + regex + "]+$", "g")
                        }
                        return new this.constructor(ss.replace(pattern, ""))
                    },
                    right: function(N) { if (N >= 0) { var s = this.s.substr(this.s.length - N, N); return new this.constructor(s) } else { return this.left(-N) } },
                    setValue: function(s) { initialize(this, s); return this },
                    slugify: function() { var sl = new S(new S(this.s).latinise().s.replace(/[^\w\s-]/g, "").toLowerCase()).dasherize().s; if (sl.charAt(0) === "-") sl = sl.substr(1); return new this.constructor(sl) },
                    startsWith: function() { var prefixes = Array.prototype.slice.call(arguments, 0); for (var i = 0; i < prefixes.length; ++i) { if (this.s.lastIndexOf(prefixes[i], 0) === 0) return true } return false },
                    stripPunctuation: function() { return new this.constructor(this.s.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ")) },
                    stripTags: function() {
                        var s = this.s,
                            args = arguments.length > 0 ? arguments : [""];
                        multiArgs(args, function(tag) { s = s.replace(RegExp("</?" + tag + "[^<>]*>", "gi"), "") });
                        return new this.constructor(s)
                    },
                    template: function(values, opening, closing) {
                        var s = this.s;
                        var opening = opening || Export.TMPL_OPEN;
                        var closing = closing || Export.TMPL_CLOSE;
                        var open = opening.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, "\\$");
                        var close = closing.replace(/[-[\]()*\s]/g, "\\$&").replace(/\$/g, "\\$");
                        var r = new RegExp(open + "(.+?)" + close, "g");
                        var matches = s.match(r) || [];
                        matches.forEach(function(match) {
                            var key = match.substring(opening.length, match.length - closing.length).trim();
                            var value = typeof values[key] == "undefined" ? "" : values[key];
                            s = s.replace(match, value)
                        });
                        return new this.constructor(s)
                    },
                    times: function(n) { return new this.constructor(new Array(n + 1).join(this.s)) },
                    titleCase: function() { var s = this.s; if (s) { s = s.replace(/(^[a-z]| [a-z]|-[a-z]|_[a-z])/g, function($1) { return $1.toUpperCase() }) } return new this.constructor(s) },
                    toBoolean: function() { if (typeof this.orig === "string") { var s = this.s.toLowerCase(); return s === "true" || s === "yes" || s === "on" || s === "1" } else return this.orig === true || this.orig === 1 },
                    toFloat: function(precision) {
                        var num = parseFloat(this.s);
                        if (precision) return parseFloat(num.toFixed(precision));
                        else return num
                    },
                    toInt: function() { return /^\s*-?0x/i.test(this.s) ? parseInt(this.s, 16) : parseInt(this.s, 10) },
                    trim: function() {
                        var s;
                        if (typeof __nsp.trim === "undefined") s = this.s.replace(/(^\s*|\s*$)/g, "");
                        else s = this.s.trim();
                        return new this.constructor(s)
                    },
                    trimLeft: function() {
                        var s;
                        if (__nsp.trimLeft) s = this.s.trimLeft();
                        else s = this.s.replace(/(^\s*)/g, "");
                        return new this.constructor(s)
                    },
                    trimRight: function() {
                        var s;
                        if (__nsp.trimRight) s = this.s.trimRight();
                        else s = this.s.replace(/\s+$/, "");
                        return new this.constructor(s)
                    },
                    truncate: function(length, pruneStr) {
                        var str = this.s;
                        length = ~~length;
                        pruneStr = pruneStr || "...";
                        if (str.length <= length) return new this.constructor(str);
                        var tmpl = function(c) { return c.toUpperCase() !== c.toLowerCase() ? "A" : " " },
                            template = str.slice(0, length + 1).replace(/.(?=\W*\w*$)/g, tmpl);
                        if (template.slice(template.length - 2).match(/\w\w/)) template = template.replace(/\s*\S+$/, "");
                        else template = new S(template.slice(0, template.length - 1)).trimRight().s;
                        return (template + pruneStr).length > str.length ? new S(str) : new S(str.slice(0, template.length) + pruneStr)
                    },
                    toCSV: function() {
                        var delim = ",",
                            qualifier = '"',
                            escape = "\\",
                            encloseNumbers = true,
                            keys = false;
                        var dataArray = [];

                        function hasVal(it) { return it !== null && it !== "" }
                        if (typeof arguments[0] === "object") {
                            delim = arguments[0].delimiter || delim;
                            delim = arguments[0].separator || delim;
                            qualifier = arguments[0].qualifier || qualifier;
                            encloseNumbers = !!arguments[0].encloseNumbers;
                            escape = arguments[0].escape || escape;
                            keys = !!arguments[0].keys
                        } else if (typeof arguments[0] === "string") { delim = arguments[0] }
                        if (typeof arguments[1] === "string") qualifier = arguments[1];
                        if (arguments[1] === null) qualifier = null;
                        if (this.orig instanceof Array) dataArray = this.orig;
                        else {
                            for (var key in this.orig)
                                if (this.orig.hasOwnProperty(key))
                                    if (keys) dataArray.push(key);
                                    else dataArray.push(this.orig[key])
                        }
                        var rep = escape + qualifier;
                        var buildString = [];
                        for (var i = 0; i < dataArray.length; ++i) {
                            var shouldQualify = hasVal(qualifier);
                            if (typeof dataArray[i] == "number") shouldQualify &= encloseNumbers;
                            if (shouldQualify) buildString.push(qualifier);
                            if (dataArray[i] !== null && dataArray[i] !== undefined) {
                                var d = new S(dataArray[i]).replaceAll(qualifier, rep).s;
                                buildString.push(d)
                            } else buildString.push("");
                            if (shouldQualify) buildString.push(qualifier);
                            if (delim) buildString.push(delim)
                        }
                        buildString.length = buildString.length - 1;
                        return new this.constructor(buildString.join(""))
                    },
                    toString: function() { return this.s },
                    underscore: function() { var s = this.trim().s.replace(/([a-z\d])([A-Z]+)/g, "$1_$2").replace(/([A-Z\d]+)([A-Z][a-z])/g, "$1_$2").replace(/[-\s]+/g, "_").toLowerCase(); return new this.constructor(s) },
                    unescapeHTML: function() { return new this.constructor(this.s.replace(/\&([^;]+);/g, function(entity, entityCode) { var match; if (entityCode in escapeChars) { return escapeChars[entityCode] } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) { return String.fromCharCode(parseInt(match[1], 16)) } else if (match = entityCode.match(/^#(\d+)$/)) { return String.fromCharCode(~~match[1]) } else { return entity } })) },
                    valueOf: function() { return this.s.valueOf() },
                    wrapHTML: function(tagName, tagAttrs) {
                        var s = this.s,
                            el = tagName == null ? "span" : tagName,
                            elAttr = "",
                            wrapped = "";
                        if (typeof tagAttrs == "object")
                            for (var prop in tagAttrs) elAttr += " " + prop + '="' + new this.constructor(tagAttrs[prop]).escapeHTML() + '"';
                        s = wrapped.concat("<", el, elAttr, ">", this, "</", el, ">");
                        return new this.constructor(s)
                    }
                };
                var methodsAdded = [];

                function extendPrototype() {
                    for (var name in __sp) {
                        (function(name) {
                            var func = __sp[name];
                            if (!__nsp.hasOwnProperty(name)) {
                                methodsAdded.push(name);
                                __nsp[name] = function() { String.prototype.s = this; return func.apply(this, arguments) }
                            }
                        })(name)
                    }
                }

                function restorePrototype() {
                    for (var i = 0; i < methodsAdded.length; ++i) delete String.prototype[methodsAdded[i]];
                    methodsAdded.length = 0
                }
                var nativeProperties = getNativeStringProperties();
                for (var name in nativeProperties) {
                    (function(name) { var stringProp = __nsp[name]; if (typeof stringProp == "function") { if (!__sp[name]) { if (nativeProperties[name] === "string") { __sp[name] = function() { return new this.constructor(stringProp.apply(this, arguments)) } } else { __sp[name] = stringProp } } } })(name)
                }
                __sp.repeat = __sp.times;
                __sp.include = __sp.contains;
                __sp.toInteger = __sp.toInt;
                __sp.toBool = __sp.toBoolean;
                __sp.decodeHTMLEntities = __sp.decodeHtmlEntities;
                __sp.constructor = S;

                function getNativeStringProperties() {
                    var names = getNativeStringPropertyNames();
                    var retObj = {};
                    for (var i = 0; i < names.length; ++i) {
                        var name = names[i];
                        if (name === "to" || name === "toEnd") continue;
                        var func = __nsp[name];
                        try {
                            var type = typeof func.apply("teststring");
                            retObj[name] = type
                        } catch (e) {}
                    }
                    return retObj
                }

                function getNativeStringPropertyNames() {
                    var results = [];
                    if (Object.getOwnPropertyNames) {
                        results = Object.getOwnPropertyNames(__nsp);
                        results.splice(results.indexOf("valueOf"), 1);
                        results.splice(results.indexOf("toString"), 1);
                        return results
                    } else { var stringNames = {}; var objectNames = []; for (var name in String.prototype) stringNames[name] = name; for (var name in Object.prototype) delete stringNames[name]; for (var name in stringNames) { results.push(name) } return results }
                }

                function Export(str) { return new S(str) }
                Export.extendPrototype = extendPrototype;
                Export.restorePrototype = restorePrototype;
                Export.VERSION = VERSION;
                Export.TMPL_OPEN = "{{";
                Export.TMPL_CLOSE = "}}";
                Export.ENTITIES = ENTITIES;
                if (typeof module !== "undefined" && typeof module.exports !== "undefined") { module.exports = Export } else { if (typeof define === "function" && define.amd) { define([], function() { return Export }) } else { window.S = Export } }

                function multiArgs(args, fn) {
                    var result = [],
                        i;
                    for (i = 0; i < args.length; i++) { result.push(args[i]); if (fn) fn.call(args, args[i], i) }
                    return result
                }
                var escapeChars = { lt: "<", gt: ">", quot: '"', apos: "'", amp: "&" };

                function escapeRegExp(s) {
                    var c;
                    var i;
                    var ret = [];
                    var re = /^[A-Za-z0-9]+$/;
                    s = ensureString(s);
                    for (i = 0; i < s.length; ++i) { c = s.charAt(i); if (re.test(c)) { ret.push(c) } else { if (c === "\\000") { ret.push("\\000") } else { ret.push("\\" + c) } } }
                    return ret.join("")
                }

                function ensureString(string) { return string == null ? "" : "" + string }
                var reversedEscapeChars = {};
                for (var key in escapeChars) { reversedEscapeChars[escapeChars[key]] = key }
                ENTITIES = { amp: "&", gt: ">", lt: "<", quot: '"', apos: "'", AElig: 198, Aacute: 193, Acirc: 194, Agrave: 192, Aring: 197, Atilde: 195, Auml: 196, Ccedil: 199, ETH: 208, Eacute: 201, Ecirc: 202, Egrave: 200, Euml: 203, Iacute: 205, Icirc: 206, Igrave: 204, Iuml: 207, Ntilde: 209, Oacute: 211, Ocirc: 212, Ograve: 210, Oslash: 216, Otilde: 213, Ouml: 214, THORN: 222, Uacute: 218, Ucirc: 219, Ugrave: 217, Uuml: 220, Yacute: 221, aacute: 225, acirc: 226, aelig: 230, agrave: 224, aring: 229, atilde: 227, auml: 228, ccedil: 231, eacute: 233, ecirc: 234, egrave: 232, eth: 240, euml: 235, iacute: 237, icirc: 238, igrave: 236, iuml: 239, ntilde: 241, oacute: 243, ocirc: 244, ograve: 242, oslash: 248, otilde: 245, ouml: 246, szlig: 223, thorn: 254, uacute: 250, ucirc: 251, ugrave: 249, uuml: 252, yacute: 253, yuml: 255, copy: 169, reg: 174, nbsp: 160, iexcl: 161, cent: 162, pound: 163, curren: 164, yen: 165, brvbar: 166, sect: 167, uml: 168, ordf: 170, laquo: 171, not: 172, shy: 173, macr: 175, deg: 176, plusmn: 177, sup1: 185, sup2: 178, sup3: 179, acute: 180, micro: 181, para: 182, middot: 183, cedil: 184, ordm: 186, raquo: 187, frac14: 188, frac12: 189, frac34: 190, iquest: 191, times: 215, divide: 247, "OElig;": 338, "oelig;": 339, "Scaron;": 352, "scaron;": 353, "Yuml;": 376, "fnof;": 402, "circ;": 710, "tilde;": 732, "Alpha;": 913, "Beta;": 914, "Gamma;": 915, "Delta;": 916, "Epsilon;": 917, "Zeta;": 918, "Eta;": 919, "Theta;": 920, "Iota;": 921, "Kappa;": 922, "Lambda;": 923, "Mu;": 924, "Nu;": 925, "Xi;": 926, "Omicron;": 927, "Pi;": 928, "Rho;": 929, "Sigma;": 931, "Tau;": 932, "Upsilon;": 933, "Phi;": 934, "Chi;": 935, "Psi;": 936, "Omega;": 937, "alpha;": 945, "beta;": 946, "gamma;": 947, "delta;": 948, "epsilon;": 949, "zeta;": 950, "eta;": 951, "theta;": 952, "iota;": 953, "kappa;": 954, "lambda;": 955, "mu;": 956, "nu;": 957, "xi;": 958, "omicron;": 959, "pi;": 960, "rho;": 961, "sigmaf;": 962, "sigma;": 963, "tau;": 964, "upsilon;": 965, "phi;": 966, "chi;": 967, "psi;": 968, "omega;": 969, "thetasym;": 977, "upsih;": 978, "piv;": 982, "ensp;": 8194, "emsp;": 8195, "thinsp;": 8201, "zwnj;": 8204, "zwj;": 8205, "lrm;": 8206, "rlm;": 8207, "ndash;": 8211, "mdash;": 8212, "lsquo;": 8216, "rsquo;": 8217, "sbquo;": 8218, "ldquo;": 8220, "rdquo;": 8221, "bdquo;": 8222, "dagger;": 8224, "Dagger;": 8225, "bull;": 8226, "hellip;": 8230, "permil;": 8240, "prime;": 8242, "Prime;": 8243, "lsaquo;": 8249, "rsaquo;": 8250, "oline;": 8254, "frasl;": 8260, "euro;": 8364, "image;": 8465, "weierp;": 8472, "real;": 8476, "trade;": 8482, "alefsym;": 8501, "larr;": 8592, "uarr;": 8593, "rarr;": 8594, "darr;": 8595, "harr;": 8596, "crarr;": 8629, "lArr;": 8656, "uArr;": 8657, "rArr;": 8658, "dArr;": 8659, "hArr;": 8660, "forall;": 8704, "part;": 8706, "exist;": 8707, "empty;": 8709, "nabla;": 8711, "isin;": 8712, "notin;": 8713, "ni;": 8715, "prod;": 8719, "sum;": 8721, "minus;": 8722, "lowast;": 8727, "radic;": 8730, "prop;": 8733, "infin;": 8734, "ang;": 8736, "and;": 8743, "or;": 8744, "cap;": 8745, "cup;": 8746, "int;": 8747, "there4;": 8756, "sim;": 8764, "cong;": 8773, "asymp;": 8776, "ne;": 8800, "equiv;": 8801, "le;": 8804, "ge;": 8805, "sub;": 8834, "sup;": 8835, "nsub;": 8836, "sube;": 8838, "supe;": 8839, "oplus;": 8853, "otimes;": 8855, "perp;": 8869, "sdot;": 8901, "lceil;": 8968, "rceil;": 8969, "lfloor;": 8970, "rfloor;": 8971, "lang;": 9001, "rang;": 9002, "loz;": 9674, "spades;": 9824, "clubs;": 9827, "hearts;": 9829, "diams;": 9830 }
            }.call(this)
        }, { "./_count": 1, "./_splitLeft": 2, "./_splitRight": 3 }]
    }, {}, [4])(4)
});


/**
 * @module baseTest
 */
class BaseTest {
    /**
     * let baseTest = new BaseTest()
     * @date 2022-01-05
     * @returns {class}
     */
    constructor() {

        }
        /**
         * checkElement(el) 
         * @description ensures that you can pass in jquery or string
         * @date 2022-01-05
         * @param {any} el
         * @returns {any}
         */
    checkElement(el) {
            if (typeof el === "string") {
                return $(el)
            } else {
                return el;
            }
        }
        /**
         * @example
         * const getHAS = baseTest.STRING_HAS("helllo", "lo")
    console.log("🚀 ~ file: test.js ~ line 5 ~ getHAS", getHAS)
    const getNeg = baseTest.STRING_HAS("hello", "z")
    console.log("🚀 ~ file: test.js ~ line 7 ~ getNeg", getNeg)
         * @date 2022-02-13
         * @param {any} one
         * @param {any} two
         * @returns {any}
         */
    STRING_HAS(one, two) {
            console.log(typeof one, one, "ELEMENT")
            var isArr = Array.isArray(one);
            let includes;
            if (isArr) {
                includes = one.includes(two)
            } else if (typeof one === "string") {
                includes = S(one).contains(two);
            } else if (typeof one === "object") {
                includes = Object.values(one)
            } else {
                throw new Error("Type is not string object or array")
            }
            return includes;
        }
        /**
         * @example
         * const getCount = baseTest.STRING_COUNT("hello hello", "llo", 2)
    console.log("🚀 ~ file: test.js ~ line 7 ~ getCount", getCount)
    const getNegC = baseTest.STRING_COUNT("hello", "z", 2)
    console.log("🚀 ~ file: test.js ~ line 11 ~ getNegC", getNegC)
         * @date 2022-02-13
         * @param {any} type
         * @param {any} item
         * @param {any} amount
         * @returns {any}
         */
    STRING_COUNT(type, item, amount) {
            var isArr = Array.isArray(type);
            let counts;
            if (isArr) {
                const freqCounter = {};
                for (const num of isArr) {
                    freqCounter[num] = freqCounter[num] ? freqCounter[num] + 1 : 1;
                }
                let getBoolean = freqCounter["item"] === amount;
                counts = getBoolean
            } else if (typeof type === "string") {
                let getStringCount = S(type).count(item);
                let stringIncludes = getStringCount === amount;
                counts = stringIncludes
            }
            return counts;
        }
        /**
         * @example
         * const getAtLeast = baseTest.STRING_ATLEAST("hello", "l", 1)
    console.log("🚀 ~ file: test.js ~ line 9 ~ gtAtLeast", getAtLeast)
    const getAtLeastNeg = baseTest.STRING_ATLEAST("hello", "z", 1)
    console.log("🚀 ~ file: test.js ~ line 16 ~ getAtLeastNeg", getAtLeastNeg)
         * @date 2022-02-13
         * @param {any} type
         * @param {any} item
         * @param {any} amount
         * @returns {any}
         */
    STRING_ATLEAST(type, item, amount) {
            var isArr = Array.isArray(type);
            let counts;
            if (isArr) {
                const freqCounter = {};
                for (const num of isArr) {
                    freqCounter[num] = freqCounter[num] ? freqCounter[num] + 1 : 1;
                }
                counts = freqCounter["item"]
            } else if (typeof type === "string") {
                counts = S(type).count(item);
            }
            if (counts >= amount) {
                return true;
            } else {
                return false;
            }
        }
        /**
         * @example
         * const doesNotHave = baseTest.STRING_DOESNOTHAVE("hello", "z")
    console.log("🚀 ~ file: test.js ~ line 11 ~ doesNotHave", doesNotHave)
    const doesNotHaveNeg = baseTest.STRING_DOESNOTHAVE("hello", "ll")
    console.log("🚀 ~ file: test.js ~ line 19 ~ doesNotHaveNeg", doesNotHaveNeg)
         * @date 2022-02-13
         * @param {any} string
         * @param {any} item
         * @returns {any}
         */
    STRING_DOESNOTHAVE(string, item) {
        let getItems = S(string).count(item)
        let getBoolean = getItems === 0
        return getBoolean;
    }

    /**
     * hasClass(element, classname)
     * @example
     let hasClass = baseTest.hasClass(el, "yonas")
     let hasClassFalse = baseTest.hasClass(el, "no")
     * @date 2022-01-05
     * @param {any} element
     * @param {any} classname
     * @returns {any}
     */
    hasClass(element, classname) {
            element = this.checkElement(element)
            if (element.hasClass(classname)) {
                return true;
            } else {
                return false;
            }
        }
        /**
         * hasId(element, id)
         * @example
         let hasIdTrue = baseTest.hasId(el, "yon")
         console.log('hasIdTrue:', hasIdTrue);
         let hasIdFalse = baseTest.hasId(el, "whatsup")
         console.log('hasIdFalse:', hasIdFalse);
         * @date 2022-01-05
         * @param {any} element
         * @param {any} id
         * @returns {any}
         */
    hasId(element, id) {
            element = this.checkElement(element)
            var elmId = element.attr("id");
            return elmId === id ? true : false;
        }
        /**
         * hasAttr(element, attribute)
         * @example
         let hasAttrTrue = baseTest.hasAttr(el, "disabled")
         console.log('hasAttrTrue:', hasAttrTrue);
         let hasAttrFalse = baseTest.hasAttr(el, "no")
         console.log('hasAttrFalse:', hasAttrFalse);
         * @date 2022-01-05
         * @param {any} element
         * @param {any} attribute
         * @returns {any}
         */
    hasAttr(element, attribute) {
            element = this.checkElement(element)
            var getVal = element.attr(attribute);
            return getVal === undefined ? false : true;
        }
        /**
         * hasDataTest(element, key, value = "")
        * @example
         let hasDataTrue = baseTest.hasDataTest(el, "problem_id")
         console.log('hasDataTrue:', hasDataTrue);
         let hasDataFalse = baseTest.hasDataTest(el, "task_id")
         console.log('hasDataFalse:', hasDataFalse);
             let hasDataTrueTrue = baseTest.hasDataTest(el, "problem_id", 3)
             console.log("🚀 ~ file: baseTest.js ~ line 76 ~ hasDataTrueTrue", hasDataTrueTrue)
             let hasDataTrueTrue2 = baseTest.hasDataTest(el, "problem_id", "3")
             console.log("🚀 ~ file: baseTest.js ~ line 78 ~ hasDataTrueTrue2", hasDataTrueTrue2)
         * @date 2022-01-05
         * @param {any} element
         * @param {any} key
         * @param {any} value=""
         * @returns {any}
         */
    hasDataTest(element, key, value = "") {
            element = this.checkElement(element)
            let getData = element.data(key)
            if (value === "") {
                return getData ? true : false
            } else {
                return getData === value ? true : false
            }
        }
        /**
         * hasHTML(element, html)
         * @example
         let htmlTrue = baseTest.hasHTML(el, "<div>baller</div>")
         console.log("🚀 ~ file: baseTest.js ~ line 80 ~ htmlTrue", htmlTrue)
         let htmlFalse = baseTest.hasHTML(el, "whatthef")
         console.log("🚀 ~ file: baseTest.js ~ line 82 ~ htmlFalse", htmlFalse)
         let htmltext = baseTest.hasHTML(el, "ll")
         console.log("🚀 ~ file: baseTest.js ~ line 84 ~ htmltext", htmltext)
         * @date 2022-01-05
         * @param {any} element
         * @param {any} html
         * @returns {any}
         */
    hasHTML(element, html) {
            element = this.checkElement(element)
            let get = element.html();
            let stringed = get.toString()
            return stringed.includes(html) ? true : false
        }
        /**
         * hasChild(element, child)
         * @example 
         let ChildTrue1 = baseTest.hasChild(el, ".supergrandchild")
         console.log("🚀 ~ file: baseTest.js ~ line 103 ~ ChildTrue1", ChildTrue1)
         let hasChildFalse = baseTest.hasChild(el, ".what")
         console.log("🚀 ~ file: baseTest.js ~ line 105 ~ hasChildFalse", hasChildFalse)
         * @date 2022-01-05
         * @param {any} element
         * @param {any} child
         * @returns {any}
         */
    hasChild(element, child) {
            element = this.checkElement(element)
            let found = $(child)
            let get = element.find(found)
            return get.length > 0 ? true : false
        }
        /**
         * exists(element)
         let existTrue = baseTest.exists(el)
         console.log("🚀 ~ file: baseTest.js ~ line 90 ~ existTrue", existTrue)
         let existFalse = baseTest.exists($(".love"))
         console.log("🚀 ~ file: baseTest.js ~ line 92 ~ existFalse", existFalse)
         * @date 2022-01-05
         * @param {any} element
         * @returns {any}
         */
    exists(element) {
            element = this.checkElement(element)
            if (element.length) {
                return true;
            } else {
                return false
            }
        }
        /**
         * visible(element)
         * @example
         let visibleTrue = baseTest.visible(el)
         console.log("🚀 ~ file: baseTest.js ~ line 91 ~ visibleTrue", visibleTrue)
         let visibleFalse = baseTest.visible($(".noDisplay"))
         console.log("🚀 ~ file: baseTest.js ~ line 93 ~ visibleFalse", visibleFalse)
         * @date 2022-01-05
         * @param {any} element
         * @returns {any}
         */
    visible(element) {
            element = this.checkElement(element)
            let getDisplayNone = element.is(":visible")
            return getDisplayNone ? true : false
        }
        /**
         * hasCSS(element, key, value)
         let hasCSSFalse = baseTest.hasCSS(el, "color", "#6f57e5")
         console.log("🚀 ~ file: baseTest.js ~ line 95 ~ hasCSSFalse", hasCSSFalse)
         let hasCSSTrue = baseTest.hasCSS(el, "display", "flex")
         console.log("🚀 ~ file: baseTest.js ~ line 97 ~ hasCSSTrue", hasCSSTrue)
         * @date 2022-01-05
         * @param {any} element
         * @param {any} key
         * @param {any} value
         * @returns {any}
         */
    hasCSS(element, key, value) {
        element = this.checkElement(element)
        let getValue = element.css(key)
        return getValue === value ? true : false
    }
}


let baseTest = new BaseTest()
! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e(require("lodash")) : "function" == typeof define && define.amd ? define(["lodash"], e) : "object" == typeof exports ? exports.array_helperz = e(require("lodash")) : t.array_helperz = e(t.lodash) }(this, (function(t) { return function() { var e = { 826: function(t) { var e = { "À": "A", "Á": "A", "Â": "A", "Ã": "A", "Ä": "A", "Å": "A", "Ấ": "A", "Ắ": "A", "Ẳ": "A", "Ẵ": "A", "Ặ": "A", "Æ": "AE", "Ầ": "A", "Ằ": "A", "Ȃ": "A", "Ç": "C", "Ḉ": "C", "È": "E", "É": "E", "Ê": "E", "Ë": "E", "Ế": "E", "Ḗ": "E", "Ề": "E", "Ḕ": "E", "Ḝ": "E", "Ȇ": "E", "Ì": "I", "Í": "I", "Î": "I", "Ï": "I", "Ḯ": "I", "Ȋ": "I", "Ð": "D", "Ñ": "N", "Ò": "O", "Ó": "O", "Ô": "O", "Õ": "O", "Ö": "O", "Ø": "O", "Ố": "O", "Ṍ": "O", "Ṓ": "O", "Ȏ": "O", "Ù": "U", "Ú": "U", "Û": "U", "Ü": "U", "Ý": "Y", "à": "a", "á": "a", "â": "a", "ã": "a", "ä": "a", "å": "a", "ấ": "a", "ắ": "a", "ẳ": "a", "ẵ": "a", "ặ": "a", "æ": "ae", "ầ": "a", "ằ": "a", "ȃ": "a", "ç": "c", "ḉ": "c", "è": "e", "é": "e", "ê": "e", "ë": "e", "ế": "e", "ḗ": "e", "ề": "e", "ḕ": "e", "ḝ": "e", "ȇ": "e", "ì": "i", "í": "i", "î": "i", "ï": "i", "ḯ": "i", "ȋ": "i", "ð": "d", "ñ": "n", "ò": "o", "ó": "o", "ô": "o", "õ": "o", "ö": "o", "ø": "o", "ố": "o", "ṍ": "o", "ṓ": "o", "ȏ": "o", "ù": "u", "ú": "u", "û": "u", "ü": "u", "ý": "y", "ÿ": "y", "Ā": "A", "ā": "a", "Ă": "A", "ă": "a", "Ą": "A", "ą": "a", "Ć": "C", "ć": "c", "Ĉ": "C", "ĉ": "c", "Ċ": "C", "ċ": "c", "Č": "C", "č": "c", "C̆": "C", "c̆": "c", "Ď": "D", "ď": "d", "Đ": "D", "đ": "d", "Ē": "E", "ē": "e", "Ĕ": "E", "ĕ": "e", "Ė": "E", "ė": "e", "Ę": "E", "ę": "e", "Ě": "E", "ě": "e", "Ĝ": "G", "Ǵ": "G", "ĝ": "g", "ǵ": "g", "Ğ": "G", "ğ": "g", "Ġ": "G", "ġ": "g", "Ģ": "G", "ģ": "g", "Ĥ": "H", "ĥ": "h", "Ħ": "H", "ħ": "h", "Ḫ": "H", "ḫ": "h", "Ĩ": "I", "ĩ": "i", "Ī": "I", "ī": "i", "Ĭ": "I", "ĭ": "i", "Į": "I", "į": "i", "İ": "I", "ı": "i", "Ĳ": "IJ", "ĳ": "ij", "Ĵ": "J", "ĵ": "j", "Ķ": "K", "ķ": "k", "Ḱ": "K", "ḱ": "k", "K̆": "K", "k̆": "k", "Ĺ": "L", "ĺ": "l", "Ļ": "L", "ļ": "l", "Ľ": "L", "ľ": "l", "Ŀ": "L", "ŀ": "l", "Ł": "l", "ł": "l", "Ḿ": "M", "ḿ": "m", "M̆": "M", "m̆": "m", "Ń": "N", "ń": "n", "Ņ": "N", "ņ": "n", "Ň": "N", "ň": "n", "ŉ": "n", "N̆": "N", "n̆": "n", "Ō": "O", "ō": "o", "Ŏ": "O", "ŏ": "o", "Ő": "O", "ő": "o", "Œ": "OE", "œ": "oe", "P̆": "P", "p̆": "p", "Ŕ": "R", "ŕ": "r", "Ŗ": "R", "ŗ": "r", "Ř": "R", "ř": "r", "R̆": "R", "r̆": "r", "Ȓ": "R", "ȓ": "r", "Ś": "S", "ś": "s", "Ŝ": "S", "ŝ": "s", "Ş": "S", "Ș": "S", "ș": "s", "ş": "s", "Š": "S", "š": "s", "Ţ": "T", "ţ": "t", "ț": "t", "Ț": "T", "Ť": "T", "ť": "t", "Ŧ": "T", "ŧ": "t", "T̆": "T", "t̆": "t", "Ũ": "U", "ũ": "u", "Ū": "U", "ū": "u", "Ŭ": "U", "ŭ": "u", "Ů": "U", "ů": "u", "Ű": "U", "ű": "u", "Ų": "U", "ų": "u", "Ȗ": "U", "ȗ": "u", "V̆": "V", "v̆": "v", "Ŵ": "W", "ŵ": "w", "Ẃ": "W", "ẃ": "w", "X̆": "X", "x̆": "x", "Ŷ": "Y", "ŷ": "y", "Ÿ": "Y", "Y̆": "Y", "y̆": "y", "Ź": "Z", "ź": "z", "Ż": "Z", "ż": "z", "Ž": "Z", "ž": "z", "ſ": "s", "ƒ": "f", "Ơ": "O", "ơ": "o", "Ư": "U", "ư": "u", "Ǎ": "A", "ǎ": "a", "Ǐ": "I", "ǐ": "i", "Ǒ": "O", "ǒ": "o", "Ǔ": "U", "ǔ": "u", "Ǖ": "U", "ǖ": "u", "Ǘ": "U", "ǘ": "u", "Ǚ": "U", "ǚ": "u", "Ǜ": "U", "ǜ": "u", "Ứ": "U", "ứ": "u", "Ṹ": "U", "ṹ": "u", "Ǻ": "A", "ǻ": "a", "Ǽ": "AE", "ǽ": "ae", "Ǿ": "O", "ǿ": "o", "Þ": "TH", "þ": "th", "Ṕ": "P", "ṕ": "p", "Ṥ": "S", "ṥ": "s", "X́": "X", "x́": "x", "Ѓ": "Г", "ѓ": "г", "Ќ": "К", "ќ": "к", "A̋": "A", "a̋": "a", "E̋": "E", "e̋": "e", "I̋": "I", "i̋": "i", "Ǹ": "N", "ǹ": "n", "Ồ": "O", "ồ": "o", "Ṑ": "O", "ṑ": "o", "Ừ": "U", "ừ": "u", "Ẁ": "W", "ẁ": "w", "Ỳ": "Y", "ỳ": "y", "Ȁ": "A", "ȁ": "a", "Ȅ": "E", "ȅ": "e", "Ȉ": "I", "ȉ": "i", "Ȍ": "O", "ȍ": "o", "Ȑ": "R", "ȑ": "r", "Ȕ": "U", "ȕ": "u", "B̌": "B", "b̌": "b", "Č̣": "C", "č̣": "c", "Ê̌": "E", "ê̌": "e", "F̌": "F", "f̌": "f", "Ǧ": "G", "ǧ": "g", "Ȟ": "H", "ȟ": "h", "J̌": "J", "ǰ": "j", "Ǩ": "K", "ǩ": "k", "M̌": "M", "m̌": "m", "P̌": "P", "p̌": "p", "Q̌": "Q", "q̌": "q", "Ř̩": "R", "ř̩": "r", "Ṧ": "S", "ṧ": "s", "V̌": "V", "v̌": "v", "W̌": "W", "w̌": "w", "X̌": "X", "x̌": "x", "Y̌": "Y", "y̌": "y", "A̧": "A", "a̧": "a", "B̧": "B", "b̧": "b", "Ḑ": "D", "ḑ": "d", "Ȩ": "E", "ȩ": "e", "Ɛ̧": "E", "ɛ̧": "e", "Ḩ": "H", "ḩ": "h", "I̧": "I", "i̧": "i", "Ɨ̧": "I", "ɨ̧": "i", "M̧": "M", "m̧": "m", "O̧": "O", "o̧": "o", "Q̧": "Q", "q̧": "q", "U̧": "U", "u̧": "u", "X̧": "X", "x̧": "x", "Z̧": "Z", "z̧": "z" },
                        r = Object.keys(e).join("|"),
                        n = new RegExp(r, "g"),
                        o = new RegExp(r, ""),
                        i = function(t) { return t.replace(n, (function(t) { return e[t] })) };
                    t.exports = i, t.exports.has = function(t) { return !!t.match(o) }, t.exports.remove = i }, 356: function(e) { "use strict";
                    e.exports = t } },
            r = {};

        function n(t) { var o = r[t]; if (void 0 !== o) return o.exports; var i = r[t] = { exports: {} }; return e[t](i, i.exports, n), i.exports }
        n.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return n.d(e, { a: e }), e }, n.d = function(t, e) { for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: e[r] }) }, n.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, n.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }; var o = {}; return function() { "use strict";
            n.r(o), n.d(o, { contains: function() { return v }, countByCondition: function() { return l }, doesNotContain: function() { return b }, filterAndSort: function() { return t.filterAndSort }, filterItems: function() { return e.filterItems }, filterValues: function() { return h }, filterWithFuncObjectOrString: function() { return x }, getOneMakeChildOfAnother: function() { return E }, getUnique: function() { return M }, group: function() { return g }, intersection: function() { return _ }, list: function() { return q }, makeChildOfAnother: function() { return j }, makeChildOfAnotherTest: function() { return k }, mergeByKeys: function() { return S }, removeByFunction: function() { return B }, replaceKey: function() { return C }, search: function() { return d }, sortAsc: function() { return m }, sortDesc: function() { return p }, testFilterWithFuncStringObject: function() { return z }, testMergeByKeys: function() { return I }, testUnique: function() { return W }, trimArr: function() { return f } }); var t = {};
            n.r(t), n.d(t, { r3: function() { return v }, QH: function() { return l }, YQ: function() { return b }, m_: function() { return h }, ru: function() { return g }, yC: function() { return d }, nO: function() { return m }, Rm: function() { return p }, FE: function() { return f } }); var e = {};
            n.r(e), n.d(e, { ew: function() { return E }, At: function() { return j }, dz: function() { return k }, eW: function() { return S }, EA: function() { return I } }); var r = n(356);
            n(826);

            function i(t) { return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, i(t) }

            function a(t) { return function(t) { if (Array.isArray(t)) return c(t) }(t) || function(t) { if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t) }(t) || s(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function u(t, e) { return function(t) { if (Array.isArray(t)) return t }(t) || function(t, e) { var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (null != r) { var n, o, i = [],
                            a = !0,
                            u = !1; try { for (r = r.call(t); !(a = (n = r.next()).done) && (i.push(n.value), !e || i.length !== e); a = !0); } catch (t) { u = !0, o = t } finally { try { a || null == r.return || r.return() } finally { if (u) throw o } } return i } }(t, e) || s(t, e) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function s(t, e) { if (t) { if ("string" == typeof t) return c(t, e); var r = Object.prototype.toString.call(t).slice(8, -1); return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? c(t, e) : void 0 } }

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]; return n }

            function f(t) { for (var e = 0; e < t.length; e++)
                    for (var r = 0, n = Object.entries(t[e]); r < n.length; r++) { var o = u(n[r], 2),
                            i = o[0],
                            a = o[1]; if ("string" == typeof a) { var s = a.trim();
                            t[e][i] = s } }
                return t }

            function l(t, e, r) { for (var n = 0, o = 0; o < t.length; o++) t[o][e] === r && n++; return n }

            function d(t, e) { var r = []; return t || (t = {}), e || (e = ""), t.forEach((function(t, n) { for (var o in t) t.hasOwnProperty(o) && t[o] && -1 !== t[o].toString().indexOf(e) && r.push(t) })), r }

            function y(t, e, r) { return t.filter((function(t) { if ("string" == typeof t[e] && -1 !== t[e].toLowerCase().indexOf(r.toLowerCase())) return t })) }

            function h(t, e, n) { for (var o = [], i = d(t, e), u = 0; u < n.length; u++) { var s = y(i, n[u], e);
                    o = [].concat(a(o), a(s)) } return f(o = (0, r.uniqWith)(o, r.isEqual)) }

            function m(t, e) { for (var n = 0; n < t.length; n++)
                    if ("object" === i(t[n])) { Object.keys(t[n]); for (var o = 0, a = Object.entries(t[n]); o < a.length; o++) { var s = u(a[o], 2),
                                c = s[0],
                                l = s[1];
                            Array.isArray(l) && (t[n][c] = (0, r.sortBy)(l, [e])) } }
                return f((0, r.sortBy)(t, [e])) }

            function p(t, e) { for (var n = 0; n < t.length; n++)
                    if ("object" === i(t[n])) { Object.keys(t[n]); for (var o = 0, a = Object.entries(t[n]); o < a.length; o++) { var s = u(a[o], 2),
                                c = s[0],
                                l = s[1];
                            Array.isArray(l) && (t[n][c] = (0, r.sortBy)(l, [e]).reverse()) } }
                return f((0, r.sortBy)(t, [e]).reverse()) }

            function v(t, e, r) { for (var n = [], o = 0; o < t.length; o++) t[o][e] === r && n.push(t[o]); return f(n) }

            function b(t, e, r) { for (var n = [], o = 0; o < t.length; o++) t[o][e] !== r && n.push(t[o]); return f(n) }

            function g(t, e) { return f((0, r.groupBy)(t, e)) }

            function w(t, e) { var r = Object.keys(t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) { return Object.getOwnPropertyDescriptor(t, e).enumerable }))), r.push.apply(r, n) } return r }

            function O(t) { for (var e = 1; e < arguments.length; e++) { var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? w(Object(r), !0).forEach((function(e) { A(t, e, r[e]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : w(Object(r)).forEach((function(e) { Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e)) })) } return t }

            function A(t, e, r) { return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t }

            function S(t, e) { var n = (0, r.merge)((0, r.keyBy)(t.data, t.key), (0, r.keyBy)(e.data, e.key)); return (0, r.values)(n) }

            function I() { var t = S([{ title: "I want to be free. Free to live,  and to find my own way,  to love,  or to be alone,  but at least it is my choice,  and I am so tired of not having choices,  so scared of the years rushing past beneath my feet. I do not want to die as I’ve lived,  which is no life at all.", status: "to do", id: 1 }, { title: "Because we loved each other too much and found each other too interesting. And I love that about humanity,  and in fact it’s the very reason I root for us to survive—because we are so stupid about each other.", status: "doing", id: 2 }, { title: "But a life without art,  without wonder,  without beautiful things—she would go mad. She has gone mad. What she needs are stories. Stories are a way to preserve one’s self. To be remembered. And to forget.", status: "doing", id: 3 }], { data: [{ name: "Whatever", status: "doing", problem_id: 2, id: 1 }, { name: "is", status: "doing", problem_id: 2, id: 2 }, { name: "people", status: "to do", problem_id: 2, id: 3 }], key: "problem_id", value: 2 });
                console.log(t) }

            function j(t, e) { return t.data.map((function(r) { return O(O({}, r), {}, { child: e.data.filter((function(n) { return r[t.key] === n[e.key] })).map((function(t) { return t })) }) })) }

            function E(t, e) { var n = {};
                n[e.key] = e.value; var o = t.data.map((function(r) { return O(O({}, r), {}, { child: e.data.filter((function(n) { return r[t.key] === n[e.key] })).map((function(t) { return t })) }) })),
                    i = (o.filter((function(t) { return n })), {}); return i[t.key] = t.value, (0, r.filter)(o, i) }

            function k() { var t = [{ title: "I want to be free. Free to live,  and to find my own way,  to love,  or to be alone,  but at least it is my choice,  and I am so tired of not having choices,  so scared of the years rushing past beneath my feet. I do not want to die as I’ve lived,  which is no life at all.", status: "to do", id: 1 }, { title: "Because we loved each other too much and found each other too interesting. And I love that about humanity,  and in fact it’s the very reason I root for us to survive—because we are so stupid about each other.", status: "doing", id: 2 }, { title: "But a life without art,  without wonder,  without beautiful things—she would go mad. She has gone mad. What she needs are stories. Stories are a way to preserve one’s self. To be remembered. And to forget.", status: "doing", id: 3 }],
                    e = [{ name: "Whatever", status: "doing", problem_id: 2, id: 1 }, { name: "is", status: "doing", problem_id: 2, id: 2 }, { name: "people", status: "to do", problem_id: 2, id: 3 }],
                    r = E({ data: t, key: "id", value: 2 }, { data: e, key: "problem_id", value: 2 });
                console.log(r); var n = j({ data: t, key: "id" }, { data: e, key: "problem_id" });
                console.log(n) }

            function U(t) { return U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, U(t) }

            function x(t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0; if (!(t.length > 0)) return []; if ("function" == typeof e) t.filter(e);
                else { if ("string" == typeof e && void 0 !== n) { var o = v(t, e, n); return o } if ("object" === U(e)) return (0, r.filter)(t, e) } var i = (0, r.filter)(t, e); return i }

            function z() { var t = [{ name: "Because we loved each other too much and found each other too interesting. And I love that about humanity,  and in fact it’s the very reason I root for us to survive—because we are so stupid about each other.", status: "doing", problem_id: 2, id: 1 }, { name: "I want to be free. Free to live,  and to find my own way,  to love,  or to be alone,  but at least it is my choice,  and I am so tired of not having choices,  so scared of the years rushing past beneath my feet. I do not want to die as I’ve lived,  which is no life at all.", status: "doing", problem_id: 2, id: 2 }, { name: "But a life without art,  without wonder,  without beautiful things—she would go mad. She has gone mad. What she needs are stories. Stories are a way to preserve one’s self. To be remembered. And to forget.", status: "to do", problem_id: 2, id: 3 }],
                    e = x(t, (function(t) { if ("to do" === t.status) return t })),
                    r = x(t, { status: "to do" }),
                    n = x(t, "status", "to do"),
                    o = x(t, "status");
                console.log(e), console.log(r), console.log(n), console.log(o) }

            function C(t, e, n) { var o = []; return t.map((function(t) { o.push((0, r.mapKeys)(t, (function(t, r) { var o = r; return r === e && (o = n), o }))) })), o }

            function B(t, e) { return (0, r.remove)(t, e) }

            function K(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]; return n }

            function _(t, e) { var r, n, o = new Set(t),
                    i = new Set(e),
                    a = [];
                o.size > i.size ? (r = o, n = i) : (r = i, n = o); var u, s = function(t, e) { var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (!r) { if (Array.isArray(t) || (r = function(t, e) { if (t) { if ("string" == typeof t) return K(t, e); var r = Object.prototype.toString.call(t).slice(8, -1); return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? K(t, e) : void 0 } }(t)) || e && t && "number" == typeof t.length) { r && (t = r); var n = 0,
                                o = function() {}; return { s: o, n: function() { return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] } }, e: function(t) { throw t }, f: o } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var i, a = !0,
                        u = !1; return { s: function() { r = r.call(t) }, n: function() { var t = r.next(); return a = t.done, t }, e: function(t) { u = !0, i = t }, f: function() { try { a || null == r.return || r.return() } finally { if (u) throw i } } } }(r); try { for (s.s(); !(u = s.n()).done;) { var c = u.value;
                        n.has(c) && a.push(c) } } catch (t) { s.e(t) } finally { s.f() } return a }

            function P(t, e) {
                (null == e || e > t.length) && (e = t.length); for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]; return n }

            function M(t, e) { return function(t) { return function(t) { if (Array.isArray(t)) return P(t) }(t) || function(t) { if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t) }(t) || function(t, e) { if (t) { if ("string" == typeof t) return P(t, e); var r = Object.prototype.toString.call(t).slice(8, -1); return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? P(t, e) : void 0 } }(t) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }(new Map(t.map((function(t) { return [t[e], t] }))).values()) } var T = [{ id: 1, hello: "whatsup" }, { id: 2, hello: "whatsup" }, { id: 1, hello: "whatsup" }];

            function W() { var t = M(T, "id");
                console.log(t) }

            function q() { var t = '\n    let filter = arrz.filterWithFuncObjectOrString(arr, { status: "to do" })\n    let trim = arrz.trimArr(arr) // trims if value is string\n    let count = arrz.countByCondition(arr, "id", 1) // returns number\n    let serach = arrz.search(arr, stringValue) // returns arr\n    let filter_values = arrz.filterValues(arr, stringValue, arrOfKeys)\n    let sortAsc = arrz.sortAsc(arr, stringKey)\n    let sortDesc = arrz.sortDesc(arr, stringKey)\n    let contains = arrz.contains(arr, stringKey, stringValue)\n    let doesNotContain = arrz.doesNotContain(arr, stringKey, stringValue)\n    let group = arrz.group(arr, stringKey)\n    let unique = arrz.getUnique(arr, stringKey)\n    let intersection = arrz.intersection(arr, arr2)\n    let merge = arrz.mergeByKeys({ data: arr, key: "id" }, { data: arr2, key: "id" })\n    let child = arrz.makeChildOfAnother({ data: arr, key: "id" }, { data: arr2, key: "id" })\n    let oneChild = arrz.getOneMakeChildOfAnother({ data: arr, key: "id", value: 2 }, { data: arr2, key: "id", value: 3 })\n    let remove = arrz.removeByFunction(arr, function removeObj(x) {\n        if (x.id === 2) {\n            return true;\n        }\n    })\n    let replacedKey = arrz.replaceKey(arr, originalKey, replaceKey)\n  '; return console.log(t), t } }(), o }() }));
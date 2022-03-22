! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t(require("lodash")) : "function" == typeof define && define.amd ? define(["lodash"], t) : "object" == typeof exports ? exports.arrz = t(require("lodash")) : e.arrz = t(e.lodash) }(this, (function(e) { return (() => { var t = { 826: e => { var t = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", Ấ: "A", Ắ: "A", Ẳ: "A", Ẵ: "A", Ặ: "A", Æ: "AE", Ầ: "A", Ằ: "A", Ȃ: "A", Ç: "C", Ḉ: "C", È: "E", É: "E", Ê: "E", Ë: "E", Ế: "E", Ḗ: "E", Ề: "E", Ḕ: "E", Ḝ: "E", Ȇ: "E", Ì: "I", Í: "I", Î: "I", Ï: "I", Ḯ: "I", Ȋ: "I", Ð: "D", Ñ: "N", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", Ố: "O", Ṍ: "O", Ṓ: "O", Ȏ: "O", Ù: "U", Ú: "U", Û: "U", Ü: "U", Ý: "Y", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", ấ: "a", ắ: "a", ẳ: "a", ẵ: "a", ặ: "a", æ: "ae", ầ: "a", ằ: "a", ȃ: "a", ç: "c", ḉ: "c", è: "e", é: "e", ê: "e", ë: "e", ế: "e", ḗ: "e", ề: "e", ḕ: "e", ḝ: "e", ȇ: "e", ì: "i", í: "i", î: "i", ï: "i", ḯ: "i", ȋ: "i", ð: "d", ñ: "n", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", ố: "o", ṍ: "o", ṓ: "o", ȏ: "o", ù: "u", ú: "u", û: "u", ü: "u", ý: "y", ÿ: "y", Ā: "A", ā: "a", Ă: "A", ă: "a", Ą: "A", ą: "a", Ć: "C", ć: "c", Ĉ: "C", ĉ: "c", Ċ: "C", ċ: "c", Č: "C", č: "c", C̆: "C", c̆: "c", Ď: "D", ď: "d", Đ: "D", đ: "d", Ē: "E", ē: "e", Ĕ: "E", ĕ: "e", Ė: "E", ė: "e", Ę: "E", ę: "e", Ě: "E", ě: "e", Ĝ: "G", Ǵ: "G", ĝ: "g", ǵ: "g", Ğ: "G", ğ: "g", Ġ: "G", ġ: "g", Ģ: "G", ģ: "g", Ĥ: "H", ĥ: "h", Ħ: "H", ħ: "h", Ḫ: "H", ḫ: "h", Ĩ: "I", ĩ: "i", Ī: "I", ī: "i", Ĭ: "I", ĭ: "i", Į: "I", į: "i", İ: "I", ı: "i", Ĳ: "IJ", ĳ: "ij", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", Ḱ: "K", ḱ: "k", K̆: "K", k̆: "k", Ĺ: "L", ĺ: "l", Ļ: "L", ļ: "l", Ľ: "L", ľ: "l", Ŀ: "L", ŀ: "l", Ł: "l", ł: "l", Ḿ: "M", ḿ: "m", M̆: "M", m̆: "m", Ń: "N", ń: "n", Ņ: "N", ņ: "n", Ň: "N", ň: "n", ŉ: "n", N̆: "N", n̆: "n", Ō: "O", ō: "o", Ŏ: "O", ŏ: "o", Ő: "O", ő: "o", Œ: "OE", œ: "oe", P̆: "P", p̆: "p", Ŕ: "R", ŕ: "r", Ŗ: "R", ŗ: "r", Ř: "R", ř: "r", R̆: "R", r̆: "r", Ȓ: "R", ȓ: "r", Ś: "S", ś: "s", Ŝ: "S", ŝ: "s", Ş: "S", Ș: "S", ș: "s", ş: "s", Š: "S", š: "s", Ţ: "T", ţ: "t", ț: "t", Ț: "T", Ť: "T", ť: "t", Ŧ: "T", ŧ: "t", T̆: "T", t̆: "t", Ũ: "U", ũ: "u", Ū: "U", ū: "u", Ŭ: "U", ŭ: "u", Ů: "U", ů: "u", Ű: "U", ű: "u", Ų: "U", ų: "u", Ȗ: "U", ȗ: "u", V̆: "V", v̆: "v", Ŵ: "W", ŵ: "w", Ẃ: "W", ẃ: "w", X̆: "X", x̆: "x", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Y̆: "Y", y̆: "y", Ź: "Z", ź: "z", Ż: "Z", ż: "z", Ž: "Z", ž: "z", ſ: "s", ƒ: "f", Ơ: "O", ơ: "o", Ư: "U", ư: "u", Ǎ: "A", ǎ: "a", Ǐ: "I", ǐ: "i", Ǒ: "O", ǒ: "o", Ǔ: "U", ǔ: "u", Ǖ: "U", ǖ: "u", Ǘ: "U", ǘ: "u", Ǚ: "U", ǚ: "u", Ǜ: "U", ǜ: "u", Ứ: "U", ứ: "u", Ṹ: "U", ṹ: "u", Ǻ: "A", ǻ: "a", Ǽ: "AE", ǽ: "ae", Ǿ: "O", ǿ: "o", Þ: "TH", þ: "th", Ṕ: "P", ṕ: "p", Ṥ: "S", ṥ: "s", X́: "X", x́: "x", Ѓ: "Г", ѓ: "г", Ќ: "К", ќ: "к", A̋: "A", a̋: "a", E̋: "E", e̋: "e", I̋: "I", i̋: "i", Ǹ: "N", ǹ: "n", Ồ: "O", ồ: "o", Ṑ: "O", ṑ: "o", Ừ: "U", ừ: "u", Ẁ: "W", ẁ: "w", Ỳ: "Y", ỳ: "y", Ȁ: "A", ȁ: "a", Ȅ: "E", ȅ: "e", Ȉ: "I", ȉ: "i", Ȍ: "O", ȍ: "o", Ȑ: "R", ȑ: "r", Ȕ: "U", ȕ: "u", B̌: "B", b̌: "b", Č̣: "C", č̣: "c", Ê̌: "E", ê̌: "e", F̌: "F", f̌: "f", Ǧ: "G", ǧ: "g", Ȟ: "H", ȟ: "h", J̌: "J", ǰ: "j", Ǩ: "K", ǩ: "k", M̌: "M", m̌: "m", P̌: "P", p̌: "p", Q̌: "Q", q̌: "q", Ř̩: "R", ř̩: "r", Ṧ: "S", ṧ: "s", V̌: "V", v̌: "v", W̌: "W", w̌: "w", X̌: "X", x̌: "x", Y̌: "Y", y̌: "y", A̧: "A", a̧: "a", B̧: "B", b̧: "b", Ḑ: "D", ḑ: "d", Ȩ: "E", ȩ: "e", Ɛ̧: "E", ɛ̧: "e", Ḩ: "H", ḩ: "h", I̧: "I", i̧: "i", Ɨ̧: "I", ɨ̧: "i", M̧: "M", m̧: "m", O̧: "O", o̧: "o", Q̧: "Q", q̧: "q", U̧: "U", u̧: "u", X̧: "X", x̧: "x", Z̧: "Z", z̧: "z" },
                        r = Object.keys(t).join("|"),
                        o = new RegExp(r, "g"),
                        n = new RegExp(r, ""),
                        a = function(e) { return e.replace(o, (function(e) { return t[e] })) };
                    e.exports = a, e.exports.has = function(e) { return !!e.match(n) }, e.exports.remove = a }, 356: t => { "use strict";
                    t.exports = e } },
            r = {};

        function o(e) { var n = r[e]; if (void 0 !== n) return n.exports; var a = r[e] = { exports: {} }; return t[e](a, a.exports, o), a.exports }
        o.n = e => { var t = e && e.__esModule ? () => e.default : () => e; return o.d(t, { a: t }), t }, o.d = (e, t) => { for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] }) }, o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o.r = e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }; var n = {}; return (() => { "use strict";
            o.r(n), o.d(n, { contains: () => p, countByCondition: () => l, doesNotContain: () => b, filterAndSort: () => m, filterValues: () => d, filterWithFuncObjectOrString: () => k, getOneMakeChildOfAnother: () => j, getUnique: () => T, group: () => v, intersection: () => C, makeChildOfAnother: () => I, makeChildOfAnotherTest: () => E, mergeByKeys: () => A, search: () => f, sortAsc: () => y, sortDesc: () => h, testFilterWithFuncStringObject: () => x, testMergeByKeys: () => S, testUnique: () => _, trimArr: () => s }); var e = o(356);
            o(826);

            function t(e) { return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, t(e) }

            function r(e) { return function(e) { if (Array.isArray(e)) return u(e) }(e) || function(e) { if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e) }(e) || i(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function a(e, t) { return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) { var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (null != r) { var o, n, a = [],
                            i = !0,
                            u = !1; try { for (r = r.call(e); !(i = (o = r.next()).done) && (a.push(o.value), !t || a.length !== t); i = !0); } catch (e) { u = !0, n = e } finally { try { i || null == r.return || r.return() } finally { if (u) throw n } } return a } }(e, t) || i(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function i(e, t) { if (e) { if ("string" == typeof e) return u(e, t); var r = Object.prototype.toString.call(e).slice(8, -1); return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? u(e, t) : void 0 } }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length); for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r]; return o }

            function s(e) { for (var t = 0; t < e.length; t++)
                    for (var r = 0, o = Object.entries(e[t]); r < o.length; r++) { var n = a(o[r], 2),
                            i = n[0],
                            u = n[1]; if ("string" == typeof u) { var s = u.trim();
                            e[t][i] = s } }
                return e }

            function l(e, t, r) { for (var o = 0, n = 0; n < e.length; n++) e[n][t] === r && o++; return o }

            function f(e, t) { var r = []; return e || (e = {}), t || (t = ""), e.forEach((function(e, o) { for (var n in e) e.hasOwnProperty(n) && e[n] && -1 !== e[n].toString().indexOf(t) && r.push(e) })), r }

            function c(e, t, r) { return e.filter((function(e) { if ("string" == typeof e[t] && -1 !== e[t].toLowerCase().indexOf(r.toLowerCase())) return e })) }

            function d(t, o, n) { for (var a = [], i = f(t, o), u = 0; u < n.length; u++) { var l = c(i, n[u], o);
                    a = [].concat(r(a), r(l)) } return s(a = (0, e.uniqWith)(a, e.isEqual)) }

            function y(r, o, n) { for (var i = 0; i < r.length; i++)
                    if ("object" === t(r[i])) { Object.keys(r[i]); for (var u = 0, l = Object.entries(r[i]); u < l.length; u++) { var f = a(l[u], 2),
                                c = f[0],
                                d = f[1];
                            Array.isArray(d) && (r[i][c] = (0, e.sortBy)(d, [o])) } }
                return s((0, e.sortBy)(r, [o])) }

            function h(r, o, n) { for (var i = 0; i < r.length; i++)
                    if ("object" === t(r[i])) { Object.keys(r[i]); for (var u = 0, l = Object.entries(r[i]); u < l.length; u++) { var f = a(l[u], 2),
                                c = f[0],
                                d = f[1];
                            Array.isArray(d) && (r[i][c] = (0, e.sortBy)(d, [o]).reverse()) } }
                return s((0, e.sortBy)(r, [o]).reverse()) }

            function p(e, t, r) { for (var o = [], n = 0; n < e.length; n++) e[n][t] === r && o.push(e[n]); return s(o) }

            function b(e, t, r) { for (var o = [], n = 0; n < e.length; n++) e[n][t] !== r && o.push(e[n]); return s(o) }

            function m(t, r, o, n) { var a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                    i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : void 0,
                    u = (0, e.filter)(t, r),
                    l = (0, e.sortBy)(u, [o]); if (l = !1 === a ? h(l, o) : y(l, o), i) { var f = l.slice(0, i); return s(f) } return s(l) }

            function v(t, r) { return s((0, e.groupBy)(t, r)) }

            function g(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), r.push.apply(r, o) } return r }

            function w(e) { for (var t = 1; t < arguments.length; t++) { var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(r), !0).forEach((function(t) { O(e, t, r[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)) })) } return e }

            function O(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e }

            function A(t, r) { var o = (0, e.merge)((0, e.keyBy)(t.data, t.key), (0, e.keyBy)(r.data, r.key)); return (0, e.values)(o) }

            function S() { var e = A([{ title: "I want to be free. Free to live,  and to find my own way,  to love,  or to be alone,  but at least it is my choice,  and I am so tired of not having choices,  so scared of the years rushing past beneath my feet. I do not want to die as I’ve lived,  which is no life at all.", status: "to do", id: 1 }, { title: "Because we loved each other too much and found each other too interesting. And I love that about humanity,  and in fact it’s the very reason I root for us to survive—because we are so stupid about each other.", status: "doing", id: 2 }, { title: "But a life without art,  without wonder,  without beautiful things—she would go mad. She has gone mad. What she needs are stories. Stories are a way to preserve one’s self. To be remembered. And to forget.", status: "doing", id: 3 }], { data: [{ name: "Whatever", status: "doing", problem_id: 2, id: 1 }, { name: "is", status: "doing", problem_id: 2, id: 2 }, { name: "people", status: "to do", problem_id: 2, id: 3 }], key: "problem_id", value: 2 });
                console.log(e) }

            function I(e, t) { return e.data.map((function(r) { return w(w({}, r), {}, { child: t.data.filter((function(o) { return r[e.key] === o[t.key] })).map((function(e) { return e })) }) })) }

            function j(t, r) { var o = {};
                o[r.key] = r.value; var n = t.data.map((function(e) { return w(w({}, e), {}, { child: r.data.filter((function(o) { return e[t.key] === o[r.key] })).map((function(e) { return e })) }) })),
                    a = (n.filter((function(e) { return o })), {}); return a[t.key] = t.value, (0, e.filter)(n, a) }

            function E() { var e = [{ title: "I want to be free. Free to live,  and to find my own way,  to love,  or to be alone,  but at least it is my choice,  and I am so tired of not having choices,  so scared of the years rushing past beneath my feet. I do not want to die as I’ve lived,  which is no life at all.", status: "to do", id: 1 }, { title: "Because we loved each other too much and found each other too interesting. And I love that about humanity,  and in fact it’s the very reason I root for us to survive—because we are so stupid about each other.", status: "doing", id: 2 }, { title: "But a life without art,  without wonder,  without beautiful things—she would go mad. She has gone mad. What she needs are stories. Stories are a way to preserve one’s self. To be remembered. And to forget.", status: "doing", id: 3 }],
                    t = [{ name: "Whatever", status: "doing", problem_id: 2, id: 1 }, { name: "is", status: "doing", problem_id: 2, id: 2 }, { name: "people", status: "to do", problem_id: 2, id: 3 }],
                    r = j({ data: e, key: "id", value: 2 }, { data: t, key: "problem_id", value: 2 });
                console.log(r); var o = I({ data: e, key: "id" }, { data: t, key: "problem_id" });
                console.log(o) }

            function U(e) { return U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, U(e) }

            function k(t, r) { var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0; if (!(t.length > 0)) return []; if ("function" == typeof r) t.filter(r);
                else { if ("string" == typeof r && "string" == typeof o) { var n = p(t, r, o); return n } if ("object" === U(r)) return (0, e.filter)(t, r); if ("string" == typeof r) return d(t, "", [r]) } var a = (0, e.filter)(t, r); return a }

            function x() { var e = [{ name: "Because we loved each other too much and found each other too interesting. And I love that about humanity,  and in fact it’s the very reason I root for us to survive—because we are so stupid about each other.", status: "doing", problem_id: 2, id: 1 }, { name: "I want to be free. Free to live,  and to find my own way,  to love,  or to be alone,  but at least it is my choice,  and I am so tired of not having choices,  so scared of the years rushing past beneath my feet. I do not want to die as I’ve lived,  which is no life at all.", status: "doing", problem_id: 2, id: 2 }, { name: "But a life without art,  without wonder,  without beautiful things—she would go mad. She has gone mad. What she needs are stories. Stories are a way to preserve one’s self. To be remembered. And to forget.", status: "to do", problem_id: 2, id: 3 }],
                    t = k(e, (function(e) { if ("to do" === e.status) return e })),
                    r = k(e, { status: "to do" }),
                    o = k(e, "status", "to do"),
                    n = k(e, "status");
                console.log(t), console.log(r), console.log(o), console.log(n) }

            function B(e, t) {
                (null == t || t > e.length) && (t = e.length); for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r]; return o }

            function C(e, t) { var r, o, n = new Set(e),
                    a = new Set(t),
                    i = [];
                n.size > a.size ? (r = n, o = a) : (r = a, o = n); var u, s = function(e, t) { var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]; if (!r) { if (Array.isArray(e) || (r = function(e, t) { if (e) { if ("string" == typeof e) return B(e, t); var r = Object.prototype.toString.call(e).slice(8, -1); return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? B(e, t) : void 0 } }(e)) || t && e && "number" == typeof e.length) { r && (e = r); var o = 0,
                                n = function() {}; return { s: n, n: function() { return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] } }, e: function(e) { throw e }, f: n } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var a, i = !0,
                        u = !1; return { s: function() { r = r.call(e) }, n: function() { var e = r.next(); return i = e.done, e }, e: function(e) { u = !0, a = e }, f: function() { try { i || null == r.return || r.return() } finally { if (u) throw a } } } }(r); try { for (s.s(); !(u = s.n()).done;) { var l = u.value;
                        o.has(l) && i.push(l) } } catch (e) { s.e(e) } finally { s.f() } return i }

            function P(e, t) {
                (null == t || t > e.length) && (t = e.length); for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r]; return o }

            function T(e, t) { return function(e) { return function(e) { if (Array.isArray(e)) return P(e) }(e) || function(e) { if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e) }(e) || function(e, t) { if (e) { if ("string" == typeof e) return P(e, t); var r = Object.prototype.toString.call(e).slice(8, -1); return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? P(e, t) : void 0 } }(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }(new Map(e.map((function(e) { return [e[t], e] }))).values()) } var M = [{ id: 1, hello: "whatsup" }, { id: 2, hello: "whatsup" }, { id: 1, hello: "whatsup" }];

            function _() { var e = T(M, "id");
                console.log(e) } })(), n })() }));
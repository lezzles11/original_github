! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.test_waters = t() : e.test_waters = t() }(this, (function() { return (() => { "use strict"; var e = { d: (t, o) => { for (var r in o) e.o(o, r) && !e.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: o[r] }) }, o: (e, t) => Object.prototype.hasOwnProperty.call(e, t), r: e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) } },
            t = {};

        function o(e) { for (var t = ["helllo", [1, 2, 3],
                    ["item one", "item two"], { id: 1, name: "lesley" }, !0, 34, {},
                    void 0, null, 0, "", -4
                ], o = [], r = 0; r < t.length; r++) { var n = {},
                    i = t[r],
                    u = void 0; try { u = e(t[r]) } catch (e) { u = e }
                n.input = i, n.output = u, o.push(n) } return o } return e.r(t), e.d(t, { test: () => o }), t })() }));
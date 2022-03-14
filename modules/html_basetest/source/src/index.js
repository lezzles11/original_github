/**
 * @module baseTest
 */
class BaseTest {
    /**
     * let baseTest = new BaseTest()
     * @author zen-out
     * @date 2022-01-05
     * @returns {class}
     */
    constructor() {

        }
        /**
         * checkElement(el) 
         * @description ensures that you can pass in jquery or string
         * @author zen-out
         * @date 2022-01-05
         * @param {any} el
         * @returns {boolean}
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
   * @author zen-out
   * @date 2022-02-13
   * @param {any} one
   * @param {any} two
   * @returns {boolean}
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
   * @author zen-out
   * @date 2022-02-13
   * @param {any} type
   * @param {any} item
   * @param {any} amount
   * @returns {boolean}
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
   * @author zen-out
   * @date 2022-02-13
   * @param {any} type
   * @param {any} item
   * @param {any} amount
   * @returns {boolean}
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
   * @author zen-out
   * @date 2022-02-13
   * @param {any} string
   * @param {any} item
   * @returns {boolean}
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
     * @author zen-out
         * @date 2022-01-05
     * @param {any} element
     * @param {any} classname
     * @returns {boolean}
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
         * @author zen-out
         * @date 2022-01-05
         * @param {any} element
         * @param {any} id
         * @returns {boolean}
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
         * @author zen-out
         * @date 2022-01-05
         * @param {any} element
         * @param {any} attribute
         * @returns {boolean}
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
         * @author zen-out
         * @date 2022-01-05
         * @param {any} element
         * @param {any} key
         * @param {any} value=""
         * @returns {boolean}
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
         * @author zen-out
         * @date 2022-01-05
         * @param {any} element
         * @param {any} html
         * @returns {boolean}
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
         * @author zen-out
         * @date 2022-01-05
         * @param {any} element
         * @param {any} child
         * @returns {boolean}
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
         * @author zen-out
         * @date 2022-01-05
         * @param {any} element
         * @returns {boolean}
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
         * @author zen-out
         * @date 2022-01-05
         * @param {any} element
         * @returns {boolean}
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
         * @author zen-out
         * @date 2022-01-05
         * @param {any} element
         * @param {any} key
         * @param {any} value
         * @returns {boolean}
         */
    hasCSS(element, key, value) {
        element = this.checkElement(element)
        let getValue = element.css(key)
        return getValue === value ? true : false
    }
}


let baseTest = new BaseTest()
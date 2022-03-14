class BaseTest {
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
                console.debug("has class name", classname)
                return true;
            } else {
                console.debug("does has class name", classname)
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
            elmId === id ? console.debug("has id", id) : console.debug("does not have id", id)
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
            getVal === undefined ? console.debug("does not have attribute", attribute) : console.debug("has attribute", attribute)
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
                getData ? console.debug(`has data-key`) : console.debug(`does not has data-key`)
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
            stringed.includes(html) ? console.debug("has html", html) : console.debug("does not have html", html)
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
            get.length > 0 ? console.debug("has child", child) : console.debug("does not have child", child)
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
                console.debug("element exists")
                return true;
            } else {
                console.debug("element does not exist")
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
            getDisplayNone ? console.debug("element is not visible") : console.debug("element is visible")
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
        getValue === value ? console.debug("has css", key, value) : console.debug("does not have css", key, value)
        return getValue === value ? true : false
    }
}


let baseTest = new BaseTest()
    /* 
    baseTest.hasClass(el, "classname")
    baseTest.hasId(el, "apple")
    baseTest.hasAttr(el, "disabled")

    baseTest.hasAttr(el, "problem_id", 3)
    // will return true for numbers (if its a number "3" it will be true for 3 but not for "3")
    baseTest.hasDataTest(el, "problem_id", 3)
    baseTest.hasHTML(el, "<div>baller</div>")
    baseTest.exists(el)
    baseTest.visible(el)
    baseTest.hasChild(el, ".what")
    */


// $(() => {
//     console.log("hello")
//     let el = ".yonas"
//     let love = $(".love")
//     let base = new BaseTest()
//     let hasClass = baseTest.hasClass(el, "yonas")
//     let hasClassFalse = baseTest.hasClass(el, "no")
//         // console.log('hasClassFalse:', hasClassFalse);
//         // console.log('hasClass:', hasClass);
//     let hasIdTrue = baseTest.hasId(el, "yon")
//         // console.log('hasIdTrue:', hasIdTrue);
//     let hasIdFalse = baseTest.hasId(el, "whatsup")
//         // console.log('hasIdFalse:', hasIdFalse);
//     let hasAttrTrue = baseTest.hasAttr(el, "disabled")
//         // console.log('hasAttrTrue:', hasAttrTrue);
//     let hasAttrFalse = baseTest.hasAttr(el, "no")
//         // console.log('hasAttrFalse:', hasAttrFalse);
//     let hasDataTrue = baseTest.hasDataTest(el, "problem_id")
//         // console.log('hasDataTrue:', hasDataTrue);
//     let hasDataFalse = baseTest.hasDataTest(el, "task_id")
//         // console.log('hasDataFalse:', hasDataFalse);
//     let hasDataTrueTrue = baseTest.hasDataTest(el, "problem_id", 3)
//         // console.log("🚀 ~ file: baseTest.js ~ line 76 ~ hasDataTrueTrue", hasDataTrueTrue)
//     let hasDataTrueTrue2 = baseTest.hasDataTest(el, "problem_id", "3")
//         // console.log("🚀 ~ file: baseTest.js ~ line 78 ~ hasDataTrueTrue2", hasDataTrueTrue2)
//     let htmlTrue = baseTest.hasHTML(el, "<div>baller</div>")
//         // console.log("🚀 ~ file: baseTest.js ~ line 80 ~ htmlTrue", htmlTrue)
//     let htmlFalse = baseTest.hasHTML(el, "whatthef")
//         // console.log("🚀 ~ file: baseTest.js ~ line 82 ~ htmlFalse", htmlFalse)
//     let htmltext = baseTest.hasHTML(el, "ll")
//         // console.log("🚀 ~ file: baseTest.js ~ line 84 ~ htmltext", htmltext)
//     let existTrue = baseTest.exists(el)
//         // console.log("🚀 ~ file: baseTest.js ~ line 90 ~ existTrue", existTrue)
//     let existFalse = baseTest.exists($(".love"))
//         // console.log("🚀 ~ file: baseTest.js ~ line 92 ~ existFalse", existFalse)
//     let visibleTrue = baseTest.visible(el)
//         // console.log("🚀 ~ file: baseTest.js ~ line 91 ~ visibleTrue", visibleTrue)
//     let visibleFalse = baseTest.visible($(".noDisplay"))
//         // console.log("🚀 ~ file: baseTest.js ~ line 93 ~ visibleFalse", visibleFalse)
//     let hasCSSFalse = baseTest.hasCSS(el, "color", "#6f57e5")
//         // console.log("🚀 ~ file: baseTest.js ~ line 95 ~ hasCSSFalse", hasCSSFalse)
//     let hasCSSTrue = baseTest.hasCSS(el, "display", "flex")
//         // console.log("🚀 ~ file: baseTest.js ~ line 97 ~ hasCSSTrue", hasCSSTrue)
//         // let hasChildTrue = baseTest.hasChild(el, $(".supergrandchild"))
//         // console.log("🚀 ~ file: baseTest.js ~ line 101 ~ hasChildTrue", hasChildTrue)
//     let ChildTrue1 = baseTest.hasChild(el, ".supergrandchild")
//         // console.log("🚀 ~ file: baseTest.js ~ line 103 ~ ChildTrue1", ChildTrue1)
//     let hasChildFalse = baseTest.hasChild(el, ".what")
//         // console.log("🚀 ~ file: baseTest.js ~ line 105 ~ hasChildFalse", hasChildFalse)
// })
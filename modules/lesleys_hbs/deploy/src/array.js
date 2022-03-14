const _ = require("lodash")
const arrz = require("array_helperz")
class ArrayOfObjectsHBSHelper {
    constructor() {}

    /**
     * trimArr(arr)
     * @description trims array values
     * @author lezzles11 :) - www.github.com/lezzles11
     * @date 2021-12-19
     * @param {array} arr
     * @returns {array}
     */
    trimArr(arr) {
            for (let i = 0; i < arr.length; i++) {
                for (const [key, value] of Object.entries(arr[i])) {
                    //   console.debug(`${key}: ${value}`);
                    if (typeof value === "string") {
                        let trimmed = _.trim(value);
                        arr[i][key] = trimmed;
                    }
                }
            }
            return arr;
        }
        /**
* @example
* 
{{countByCondition problem "status" "to do"}}
* @author lezzles11 :) - www.github.com/lezzles11
* @date 2022-02-17
* @param {any} array
* @param {string} key
* @param {string} value
* @returns {number} of objects that meet that condition
*/
    countByCondition(array, key, value) {
            let count = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i][key] === value) {
                    count++;
                }
            }
            return count;
        }
        /**
* @example
* {{#filterValues problem "you" "whatshouldbe"}}

<div class="message">
<div class="content">
hi
{{problem}}<br />
{{whatshouldbe}}<br />
{{whatactuallyis}}<br />
{{hypothesis}}
</div>
</div>
{{/filterValues}}
* @author lezzles11 :) - www.github.com/lezzles11
* @date 2022-02-17
* @param {array} array
* @param {any} keyword
* @param {any} arrOfKeys
* @returns {array} of objects
*/
    filterValues(array, keyword, value, options) {
        let result = arrz.filterValues(array, keyword, [value])
        let stringed = ""
        for (let i = 0; i < result.length; i++) {
            stringed += options.fn(
                result[i]
            )

        }
        return stringed;
    }

    /**
     * @example
     * {{#sortAsc problem "seconds" "string"}}
     * {{problem}} {{whatshouldbe}}
{{/sortAsc}}
     * @author lezzles11 :) - www.github.com/lezzles11
     * @date 2022-02-17
     * @param {array} array
     * @param {any} property
     * @returns {array} of objects
     */
    sortAsc(array, property, type, options) {
            let result = arrz.sortAsc(array, property, type)
            let stringed = ""
            for (let i = 0; i < result.length; i++) {
                stringed += options.fn(
                    result[i]
                )

            }
            return stringed;
        }
        /**
* @example
* {{#sortAsc problem "seconds" "string"}}
* {{problem}} {{whatshouldbe}}
{{/sortAsc}}
* @author lezzles11 :) - www.github.com/lezzles11
* @date 2022-02-17
* @param {array} array
* @param {any} property
* @returns {array} of objects
*/
    sortDesc(array, property, type, options) {
            let result = arrz.sortDesc(array, property, type)
            let stringed = ""
            for (let i = 0; i < result.length; i++) {
                stringed += options.fn(
                    result[i]
                )

            }
            return stringed;
        }
        /**
* @example
* {{#arrContains problem "status" "doing"}}
<div class="message">{{problem}}
{{whatactuallyis}}
{{whatshouldbe}}
{{hypothesis}}{{plan}}</div>
{{/arrContains}}
* @author lezzles11 :) - www.github.com/lezzles11
* @date 2022-02-17
* @param {array} array
* @param {any} property
* @returns {array} of objects
*/
    contains(array, property, value, options) {
            let result = []
            for (let i = 0; i < array.length; i++) {
                if (array[i][property] === value) {
                    result.push(array[i])
                }
            }
            let stringed = ""
            for (let i = 0; i < result.length; i++) {
                stringed += options.fn(
                    result[i]
                )

            }
            return stringed;
        }
        /**
* @example
* {{#doesNotContain problem "status" "doing"}}
<div class="message">{{problem}}
{{whatactuallyis}}
{{whatshouldbe}}
{{hypothesis}}{{plan}}</div>
{{/doesNotContain}}
* @author lezzles11 :) - www.github.com/lezzles11
* @date 2022-02-17
* @param {array} array
* @param {any} property
* @returns {array} of objects
*/
    doesNotContain(array, property, value, options) {
            let result = []
            for (let i = 0; i < array.length; i++) {
                if (array[i][property] !== value) {
                    result.push(array[i])
                }
            }
            let stringed = ""
            for (let i = 0; i < result.length; i++) {
                stringed += options.fn(
                    result[i]
                )

            }
            return stringed;
        }
        /**
         * @example
         * @date 2022-02-17
         * @param {any} data
         * @param {any} object
         * @param {any} sortValue
         * @param {any} sortType
         * @param {any} asc=true
         * @param {any} limit
         * @returns {any}
         */
    filterAndSortObject(data, object, sortValue, sortType, asc = true, limit, options) {

            let result = arrz.filterAndSortObject(data, object, sortValue, sortType, asc, limit)
            let stringed = ""
            for (let i = 0; i < result.length; i++) {
                stringed += options.fn(
                    result[i]
                )

            }
            return stringed;

        }
        /**
* 
* @example
* {{#filterAndSort problem 5 "hi" "problem" "string" true }}
{{problem}}
{{whatactuallyis}}
{{whatshouldbe}}
{{hypothesis}}{{plan}}
{{/filterAndSort}}

* @author lezzles11 :) - www.github.com/lezzles11
* @date 2022-02-17
* @param {array} of objects
* @param {any} containsThisWord
* @param {any} arrOfKeys
* @param {any} sortValue
* @param {any} asc=true
* @returns {array} of objects
*/
    filterAndSort(data, limit, keyword, sortValue, sortType, asc = true, options) {
        let result = arrz.filterAndSort(data, keyword, ["problem"], sortValue, sortType, asc, limit)
        let length = result.length
        console.log("🚀 ~ file: array.js ~ line 259 ~ ArrayOfObjectsHelper ~ filterAndSort ~ length", length)
        let stringed = ""
        for (let i = 0; i < result.length; i++) {
            stringed += options.fn(
                result[i]
            )

        }
        return stringed;

    }

    /**
     * group(array, "status")
     * @example
     * @author lezzles11 :) - www.github.com/lezzles11
     * @date 2022-02-17
     * @param {array} of objects
     * @param {any} groupByCondition
     * @param {any} dictionary
     * @returns {array} of objects
     */
    group(data, groupByCondition, options) {
        let result = arrz.group(data, groupByCondition)
        let stringed = ""
        for (let i = 0; i < result.length; i++) {
            stringed += options.fn(
                result[i]
            )

        }
        return stringed;
    }

    /**
     * @example
     * @author lezzles11 :) - www.github.com/lezzles11
     * @date 2022-02-17
     * @param {array} getAll
     * @param {array} getAllSecond
     * @param {any} firstTableName
     * @param {any} secondTableName
     * @returns {array} of objects
     */
    parentAnArray(getAll, getAllSecond, firstTableName, secondTableName, options) {
        let result = arrz.parentAnArray(getAll, getAllSecond, firstTableName, secondTableName)
        console.log(result)
        let stringed = ""
        for (let i = 0; i < result.length; i++) {
            stringed += options.fn(
                result[i]
            )

        }
        return stringed;
    }


}
let hbsArrz = new ArrayOfObjectsHBSHelper()
module.exports = { hbsArrz }
class HelpersIfElse {
    /**
     * let helpersIfElse = new HelpersIfElse()
     * @author lezzles11 :) - www.github.com/lezzles11
     * @date 2022-01-29
     * @returns {any}
     */
    constructor() {

        }
        /**
* @example
* {{#ifLength problem task}}
array problem longer than task
{{else}}
not longer
{{/ifLength}}
* @description 
* If the length of the array is above 0, then render this, otherwise, render something else 
* @author lezzles11 :) - www.github.com/lezzles11
* @date 2022-01-29
* @param {any} v1
* @param {any} v2
* @param {any} options
* @returns {any}
*/
    ifLength(v1, v2, options) {
            if (v1.length > v2) {
                return options.fn(this);
            }
            return options.inverse(this);
        }
        /**
* @example 
* {{#ifLengthGreaterThan task 3}}
length of task is greater than 3
{{else}}
not longer than one
{{/ifLengthGreaterThan}}
* @description 
* If the length of the array is greater than a number then render it 
* @author lezzles11 :) - www.github.com/lezzles11
* @date 2022-01-29
* @param {any} array
* @param {any} options
* @returns {any}
*/
    ifLengthGreaterThan(array, length, options) {
        console.log(array)
        if (length >= 1) {
            return options.fn(this)
        } else {
            return options.inverse(this);
        }
    }

    /**
* @example
* {{#ifEmpty problem}}
hello
{{else}}
fill in this form
{{/ifEmpty}}
* @author lezzles11 :) - www.github.com/lezzles11
* @date 2022-02-17
* @param {any} array
* @param {any} options
* @returns {any}
*/
    ifEmpty(array, options) {
        if (!array || array.length <= 0) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    }



}
let helpersIfElse = new HelpersIfElse()

module.exports = {
    helpersIfElse
}
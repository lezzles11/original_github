const path = require("path")
const hljs = require('highlight.js/lib/core');
const fs = require("fs")
const Handlebars = require("handlebars")
hljs.registerLanguage('js', require('highlight.js/lib/languages/Javascript'));
hljs.registerLanguage('hbs', require('highlight.js/lib/languages/Handlebars'));
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));

class HelpersCode {
    /**
     * let helpersCode = new HelpersCode()
     * @author lezzles11 :) - www.github.com/lezzles11
     * @date 2022-01-29
     * @returns {any}
     */
    constructor() {}
        /**
         * hbsPrintCode
         * @example
         * {{hbsPrintCode '{{> core/isotopeButtons}}'}}
         * @author lezzles11 :) - www.github.com/lezzles11
         * @date 2022-01-29
         * @param {any} code
         * @param {any} language
         * @returns {any}
         */
    hbsPrintCode(code, language) {
            // return "hi"
            let highlighted;
            highlighted = hljs.highlightAuto(code).value;
            let wrapped = "<div><pre><code>" + highlighted + "</code></pre></div>"
            return new Handlebars.SafeString(wrapped)
        }
        /**
         * @example
         * {{hbsPrintFileJS "buildComponents/button.js"}}
         * @author lezzles11 :) - www.github.com/lezzles11
         * @date 2022-01-29
         * @param {any} filepath
         * @param {any} language
         * @param {any} ext
         * @returns {any}
         */
    hbsPrintFile(filepath, language, ext) {
        // return "hi"
        ext = typeof ext !== 'string' ? path.extname(filepath).slice(1) : ext;
        var code = fs.readFileSync(filepath, 'utf8');
        if (ext === 'markdown' || ext === 'md') {
            ext = 'markdown';
            // if the string is markdown, escape backticks
            code = code.split('`').join('&#x60');
        }
        let highlighted;
        // if (language === "js") {
        //     highlighted = hljs.highlight(code, {
        //         language: "js"
        //     }).value;
        // } else if (language === "hbs") {
        //     highlighted = hljs.highlight(code, {
        //         language: "hbs"
        //     }).value;
        // } else {
        //     highlighted = hljs.highlight(code, {
        //         language: "xml"
        //     }).value;
        // }
        highlighted = hljs.highlightAuto(code).value;
        // let wrapped = "<div><pre><code>" + highlighted + "</code></pre></div>"
        let wrapped = "<div><pre><code>" + highlighted + "</code></pre></div>"
        return new Handlebars.SafeString(wrapped)
    };
    /**
     * @example
     * {{hbsPrintFileJS "buildComponents/button.js"}}
     * @author lezzles11 :) - www.github.com/lezzles11
     * @date 2022-01-29
     * @param {any} filepath
     * @param {any} language
     * @param {any} ext
     * @returns {any}
     */
    hbsPrintFileJS(filepath, language, ext) {
        // return "hi"
        ext = typeof ext !== 'string' ? path.extname(filepath).slice(1) : ext;
        var code = fs.readFileSync(filepath, 'utf8');
        if (ext === 'markdown' || ext === 'md') {
            ext = 'markdown';
            // if the string is markdown, escape backticks
            code = code.split('`').join('&#x60');
        }
        // console.log(code)
        let highlighted = hljs.highlight(code, {
            language: "js"
        }).value;
        let formatted = highlighted.replaceAll('<span class="hljs-keyword">', '<br /><span class="hljs-keyword">')
            // console.log(formatted, "FORMAT")
        let wrapped = "<div><pre><code>" + formatted + "</code></pre></div>"
        return new Handlebars.SafeString(wrapped)
    };

    /**
     * @example
     * {{#hbsPrint}}
  <span class="has-text-danger is-clickable icon is-size-5 m-4">
    <i
      class="icon icon-delete m-2 mx-4"
      onclick="axiosDelete('problem', '{{problem_id}}')"
      data-problem_id="{{problem_id}}"
    ></i>
  </span>
{{/hbsPrint}}
     * @author lezzles11 :) - www.github.com/lezzles11
         * @date 2022-01-29
     * @param {any} options
     * @returns {any}
     */
    hbsPrint(options) {
            // return "hi"
            var str = options.fn();
            let highlighted = hljs.highlight(str, {
                language: "hbs"
            }).value;

            let wrapped = "<div><pre><code>" + highlighted + "</code></pre></div>"
            return new Handlebars.SafeString(wrapped)
        }
        /**
         * @example
         * {{#hbsPrintHTML}} <i class="icon icon-highImp"> </i> {{/hbsPrintHTML}}
         * @author lezzles11 :) - www.github.com/lezzles11
         * @date 2022-01-29
         * @param {any} options
         * @returns {any}
         */
    hbsPrintHTML(options) {
            // return "hi"
            var str = options.fn();
            let highlighted = hljs.highlight(str, {
                language: "xml"
            }).value;
            let wrapped = "<div><pre><code>" + highlighted + "</code></pre></div>"
            return new Handlebars.SafeString(wrapped)
        }
        /**
         * @example
         * {#hbsPrintJS}} $(() => { let allKeywords = $(".hljs-keyword") }) {{/hbsPrintJS}}
         * @author lezzles11 :) - www.github.com/lezzles11
         * @date 2022-01-29
         * @param {any} options
         * @returns {any}
         */
    hbsPrintJS(options) {
        // return "hi"
        var str = options.fn();
        let highlighted = hljs.highlight(str, {
            language: "js"
        }).value;
        let formatted = highlighted.replaceAll('<span class="hljs-keyword">', '<br /><span class="hljs-keyword">')
        console.log(formatted, "FORMAT")
        let wrapped = "<div><pre><code>" + formatted + "</code></pre></div>"
        return new Handlebars.SafeString(wrapped)
    }
}


let helpersCode = new HelpersCode()
module.exports = {
    helpersCode
}
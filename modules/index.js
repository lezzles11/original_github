/**********************************************
 * 
 * ==================================
 * - [ ] Check every readme
 * - [ ] Check every website
 * - [ ] Documentation and methods need to be clear. 
 ***********************************************/

const files = ['array_helperz',
    'automate_me', 'bulletproof_me',
    'clear_concise_creative', 'code_clarity',
    'define_me', 'effective_knex',
    'explain_me', 'handlebarstojsrender',
    'html_basetest',
    'jquery_selectors_mergez', 'know_youre_real',
    'lesleys_hbs', 'make_fakes',
    'make_legit', 'node_basetest', 'proud_of_me', 'sparkly_clean',
    'test_waters', 'whats_wrong',
    'when_you_free'
]


let html = item => `<br /> <div class='divider'>${item}</div> <a href='' target='_blank'> <h6 class='title p-0 mb-1 effect-2' id="${item}">${item}</h6> </a> <a href='./modules/${item}/source/docs/global.html' target="_blank" data-tooltip='see documentation'><i class='icon icon-about'></i></a> <a href='${item}' data-tooltip='see node package'><i class='icon icon-dashboard'></i></a>  <br /> <a href='./modules/${item}/source/docs/global.html' target="_blank" data-tooltip='see documentation'> <img src="./assets/images/${item}.png"/></a>`
let modules = item => `git submodule add https://github.com/zen-out/${item} modules/${item}/deploy`
let tabs = item => `<li><a href="#${item}">${item}</a></li>`
let items = item => `- [${item}](https://www.npmjs.com/package/${item}) ~ ![NPM Downloads](https://img.shields.io/npm/dw/${item})`
let getString = ""
let getModules = ""
let getTabs = ""
for (let i = 0; i < files.length; i++) {
    getString += html(files[i])
    getTabs += tabs(files[i])
}
// console.log(getString)
// console.log(getTabs)

$(() => {
    let newElement = $(getString)
    $(".modules").append(newElement)
})
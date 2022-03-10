const ccc = require("clear_concise_creative")

function createLinks() {
    let names = ccc.getDirNames("./", ".html")
    console.log(names)
}

console.log(createLinks())

let html = item => `<br /> <div class='divider'></div> <a href=''
    target='_blank'> <h6 class='title p-0 mb-1 effect-2'>${item.title}</h6> </a>
  <a href='./packages/${item.html}.html' data-tooltip='see documentation'><i
      class='icon icon-about'></i></a> <a href='${item.npmLink}' data-tooltip='see
    node package'><i class='icon icon-dashboard'></i></a> <br/> <h6 class='heading
      p-0 my-2 effect-2'>problem statement </h6> <p class='p-0 my-1 is-size-7
      effect-1'>${item.problem} </p> ${item.video} <br />`

let tabs = item => `<li><a href="#${item}">${item}</a></li>`
const packages = [{
        title: "Code Clarity",
        html: "code_clarity",
        npmLink: "code_clarity",
        problem: "It can be hard to track our current problems, as well as list out the steps in which we need to take to solve the problem, practically, in front of us. The goal of this repository is to to create a useful tracker for logging your coding problems.",
        video: ""
    },
    {
        title: "Array Helperz",
        html: "array_helperz",
        npmLink: "array_helperz",
        problem: "An awesome way to manipulate array of object data.",
        video: ""
    }
]

let html = item => `<br /> <div class='divider'></div> <a href='' target='_blank'> <h6 class='title p-0 mb-1 effect-2'>${item.title}</h6> </a> <a href='./packages/${item.html}.html' data-tooltip='see documentation'><i class='icon icon-about'></i></a> <a href='${item.npmLink}' data-tooltip='see node package'><i class='icon icon-dashboard'></i></a> <br/> <h6 class='heading p-0 my-2 effect-2'>problem statement </h6> <p class='p-0 my-1 is-size-7 effect-1'>${item.problem} </p> ${item.video} <br />`
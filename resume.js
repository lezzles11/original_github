window.onload = loadProjects

// for each project 
// create a new html file 
// inside folder projects 

function loadProjects() {
    let projects = ["kellan", "optee"]
    projects.forEach((x) => {
        resumeLoad(x)
    })
}

function resumeLoad(projectName) {
    // get template
    if ('content' in document.createElement('template')) {
        var t = document.querySelector('#project_template')
        let name = t.content.querySelector(".project__text")
        let tech = t.content.querySelector(".project__votes")
        let link = t.content.querySelector(".project__upvote")
        console.log(link)
        console.log("name", name)
        name.textContent = projectName
        tech.textContent = "tech"
        link.textContent = "see more"
        link.setAttribute("href", `https://raw.githubusercontent.com/lezzles11/lezzles11.github.io/master/planning/${projectName}.md`)
        let wrapper = document.querySelector(".project__wrapper")
        let clone = document.importNode(t.content, true)
        wrapper.appendChild(clone)
    } else {}

}
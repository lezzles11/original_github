window.onload = projectLoad
// const _ = require("lodash")
// const axios = require("axios")

function getFile(string) {
    let lastIndex = string.lastIndexOf("/")
    let file = string.slice(lastIndex + 1, string.length)
    return file;
}
// receives object 
function entity(projectName, arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        // console.log("each entity", arr[i])
        let file = getFile(arr[i]['name'])
        let time = arr[i]["text"]
        let seconds = arr[i]["total_seconds"]
        if (arr[i]["total_seconds"] > 60) {
            let obj = {
                project: projectName,
                file: file,
                time: time,
                seconds: seconds
            }
            newArr.push(obj)
        }


    }
    return newArr;
}

function getDependencies(dependencies) {
    let arr = []
    for (let j = 0; j < dependencies.length; j++) {
        let obj = {
            file: dependencies[j]["name"],
            time: dependencies[j]["text"]
        }
        arr.push(obj)

    }
    return arr;
}

function getDay(one) {
    let day = {
        date: "",
        dependencies: [],
        files: []
    }
    let date = one.date;
    day.date = date;

    // sample[0] { date: "",grand_total: {}, projects: []}
    let projectWrap = one.projects
    if (one.grand_total.total_seconds > 60) {
        // console.log(Object.keys(one))
        if (one.dependencies.length > 0) {
            let d = getDependencies(one.dependencies)
            day.dependencies.push(d)
        }
        if (one.projects.length > 0) {
            for (let i = 0; i < one.projects.length; i++) {
                if (one.projects[i].entities.length > 0) {
                    let projectName = one.projects[i]["name"]
                    let e = entity(projectName, one.projects[i].entities)
                    if (e.length > 0) {
                        day.files.push(e)
                    }

                }

                // let project = eachProject(one.projects[i])
                // arr.push(project)
            }

        }
    }
    let flat = _.flattenDeep(day.files)
    // console.log(day.dependencies)
    let flatD = _.flattenDeep(day.dependencies)
    for (let i = 0; i < flat.length; i++) {
        flat[i].date = date;
    }

    // console.log(flatD)
    day.dependencies = flatD;
    // console.log(day.files)
    // console.log(flat)

    // day.files = flat;
    return flat;
}
axios.get("http://localhost:3000/days").then((array) => {
    let thisMonth = []

    for (let i = 0; i < array.data.length; i++) {
        if (array.data[i].date.includes("2021-12-09")) {
            thisMonth.push(array.data[i])
        }

    }
    let final = []
    thisMonth.forEach((x) => {
        let day = getDay(x)
        final.push(day)
    })
    // console.log(final)
    let flatten = _.flattenDeep(final)
    let stringed = JSON.stringify(flatten)
    console.log(JSON.stringify(flatten))




})

function projectLoad() {
    axios.get("http://localhost:3000/days").then((array) => {
        console.log(array)
        let thisMonth = []

        for (let i = 0; i < array.data.length; i++) {
            if (array.data[i].date.includes("2021-12-09")) {
                thisMonth.push(array.data[i])
            }

        }
        let final = []
        thisMonth.forEach((x) => {
            let day = getDay(x)
            final.push(day)
        })
        // console.log(final)
        let flatten = _.flattenDeep(final)
        console.log(flatten)




    })
}

function resumeLoad(projectName) {
    // get template
    if ('content' in document.createElement('template')) {
        var t = document.querySelector('#project-card')
        let name = t.content.querySelector(".title")
        let tech = t.content.querySelector(".date")
        let link = t.content.querySelector(".time")
        console.log(link)
        console.log("name", name)
        name.textContent = projectName
        tech.textContent = "tech"

        let wrapper = document.querySelector(".project__render")
        let clone = document.importNode(t.content, true)
        wrapper.appendChild(clone)
    } else {}

}
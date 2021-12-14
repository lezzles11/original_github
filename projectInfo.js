window.onload = loadFeatures

// for each project 
// create a new html file 
// inside folder projects 

let data = [{
    "id": 2,
    "color": "#4b4bf1",
    "title": "kellan",
    "fileLength": 34,
    "value": 318826.01989800006,
    "totalTime": "88h 33m 46s",
    "mostcodedJS": "",
    "secondMost": "",
    "x": 6561.596396999998,
    "jsTime": "1h 49m 21s",
    "y": 2.05804921414482,
    "mostcodedHTML": "/Users/lesleycheung/Desktop/current/PitterPatter/kellan/views/rsvp.handlebars: 15h 18m 35s\n",
    "mostcodedCSS": "/Users/lesleycheung/Desktop/current/PitterPatter/kellan/assets/css/information.css: 18h 8m 55s\n"
}, {
    "id": 3,
    "color": "#f1ba4b",
    "title": "LectureExamples",
    "fileLength": 121,
    "value": 281193.57884099986,
    "totalTime": "78h 6m 33s",
    "mostcodedJS": "/Users/lesleycheung/Desktop/current/Work/LectureExamples/02web/14canvasproject/assets/javascript/main.js: 9h 3m 51s",
    "secondMost": "/Users/lesleycheung/Desktop/current/Work/LectureExamples/02web/12_JqueryEffects/handlingMultipleEvents/assets/js/index.js: 3h 24m 52s",
    "x": 85716.51165799997,
    "jsTime": "23h 48m 36s",
    "y": 30.483097093219236,
    "mostcodedHTML": "/Users/lesleycheung/Desktop/current/Work/LectureExamples/02web/14canvasproject/index.html: 12h 24m 48s\n",
    "mostcodedCSS": ""
}, {
    "id": 4,
    "color": "#f1ba4b",
    "title": "capstone",
    "fileLength": 86,
    "value": 168253.719786,
    "totalTime": "46h 44m 13s",
    "mostcodedJS": "/Users/lesleycheung/Desktop/current/Work/capstone/src/components/pages/CalendarPage/CalendarPage.js: 13h 20m 44s",
    "secondMost": "/Users/lesleycheung/Desktop/current/Work/capstone/src/components/pages/ProjectPage/ProjectPage.js: 6h 10m 50s",
    "x": 154415.62933600007,
    "jsTime": "42h 53m 35s",
    "y": 91.77546239833482,
    "mostcodedHTML": "",
    "mostcodedCSS": "/Users/lesleycheung/Desktop/current/Work/capstone/src/components/pages/CalendarPage/calendar.css: 21m 31s\n"
}, {
    "id": 5,
    "color": "#d6f14b",
    "title": "pitterpatter",
    "fileLength": 158,
    "value": 166128.285353,
    "totalTime": "46h 8m 48s",
    "mostcodedJS": "/Users/lesleycheung/Desktop/current/pitterpatter/pitterpatter/src/pages/layout.js: 10h 32m 39s",
    "secondMost": "/Users/lesleycheung/Desktop/current/pitterpatter/pitterpatter/src/pages/category.js: 4h 50m 37s",
    "x": 129627.65392,
    "jsTime": "36h 27s",
    "y": 78.02864734597054,
    "mostcodedHTML": "/Users/lesleycheung/Desktop/pitterpatter/views/addFriend.handlebars: 56m 12s\n",
    "mostcodedCSS": ""
}, {
    "id": 6,
    "color": "#baf14b",
    "title": "first-draft",
    "fileLength": 291,
    "value": 164246.52271399985,
    "totalTime": "45h 37m 26s",
    "mostcodedJS": "/Users/lesleycheung/Desktop/first-draft/frontend/src/pages/Home.tsx: 3h 32m 23s",
    "secondMost": "/Users/lesleycheung/Desktop/first-draft/frontend/src/pages/CheckInForm.tsx: 2h 48m 18s",
    "x": 153964.59178300004,
    "jsTime": "42h 46m 4s",
    "y": 93.73993996274515,
    "mostcodedHTML": "/Users/lesleycheung/Desktop/first-draft/redux/index.html: 1m 21s\n",
    "mostcodedCSS": ""
}, {
    "id": 7,
    "color": "#f14bba",
    "title": "Reference",
    "fileLength": 179,
    "value": 145394.996159,
    "totalTime": "40h 23m 14s",
    "mostcodedJS": "/Users/lesleycheung/Desktop/Reference/react/Udemy/steele/backend/server.js: 9h 35m 34s",
    "secondMost": "/Users/lesleycheung/Desktop/Reference/react/Udemy/steele/frontend/src/index.js: 6h 13m 16s",
    "x": 129332.960755,
    "jsTime": "35h 55m 32s",
    "y": 88.95282793196336,
    "mostcodedHTML": "",
    "mostcodedCSS": ""
}, {
    "id": 8,
    "color": "#4bf1d6",
    "title": "template",
    "fileLength": 280,
    "value": 139525.661516,
    "totalTime": "38h 45m 25s",
    "mostcodedJS": "/Users/lesleycheung/Desktop/current/template/frontend/src/components/Playground.jsx: 4h 15m 21s",
    "secondMost": "/Users/lesleycheung/Desktop/current/template/frontend/src/redux/actions/events.test.js: 2h 3m 52s",
    "x": 117645.10102699998,
    "jsTime": "32h 40m 45s",
    "y": 84.31789518052858,
    "mostcodedHTML": "",
    "mostcodedCSS": ""
}, {
    "id": 9,
    "color": "#f14bba",
    "title": "hktaboo",
    "fileLength": 125,
    "value": 139230.19215600006,
    "totalTime": "38h 40m 30s",
    "mostcodedJS": "/Users/lesleycheung/Desktop/hktaboo/src/components/components/Work/Notes/Academind.js: 4h 48m 36s",
    "secondMost": "/Users/lesleycheung/Desktop/Doing/LongTerm/hktaboo/src/components/components/Components/Navbar.js: 3h 58m 5s",
    "x": 126102.654879,
    "jsTime": "35h 1m 42s",
    "y": 90.57134298694973,
    "mostcodedHTML": "",
    "mostcodedCSS": ""
}, {
    "id": 10,
    "color": "#d6f14b",
    "title": "01algos",
    "fileLength": 87,
    "value": 129735.61181799999,
    "totalTime": "36h 2m 15s",
    "mostcodedJS": "/Users/lesleycheung/Desktop/Work/01algos/Stack/Mochi.js: 4h 44m 53s",
    "secondMost": "/Users/lesleycheung/Desktop/Work/01algos/Exercism/PerfectNumbers.js: 3h 41m 25s",
    "x": 82412.01038099997,
    "jsTime": "22h 53m 32s",
    "y": 63.5230444641614,
    "mostcodedHTML": "/Users/lesleycheung/Desktop/Work/01algos/Stack/index.html: 8h 53m 8s\n",
    "mostcodedCSS": ""
}, {
    "id": 11,
    "color": "#d64bf1",
    "title": "sharelink",
    "fileLength": 82,
    "value": 86397.47408000004,
    "totalTime": "23h 59m 57s",
    "mostcodedJS": "/Users/lesleycheung/Desktop/sharelink/backend/services/BugService.js: 7h 23m 13s",
    "secondMost": "/Users/lesleycheung/Desktop/sharelink/frontend/src/pages/BugsPage.js: 1h 54m 16s",
    "x": 73746.88975300001,
    "jsTime": "20h 29m 6s",
    "y": 85.3576919213099,
    "mostcodedHTML": "/Users/lesleycheung/Desktop/sharelink/backend/views/intro.handlebars: 20m 22s\n",
    "mostcodedCSS": ""
}, {
    "id": 12,
    "color": "#f1d64b",
    "title": "Templates",
    "fileLength": 247,
    "value": 86107.23666400003,
    "totalTime": "23h 55m 7s",
    "mostcodedJS": "/Users/lesleycheung/Desktop/TEMPLATES/layouts/final/secondDraft.js: 56m 45s",
    "secondMost": "/Users/lesleycheung/Desktop/TEMPLATES/layouts/final/delete.js: 44m 19s",
    "x": 18635.706333,
    "jsTime": "5h 10m 35s",
    "y": 21.64243918977285,
    "mostcodedHTML": "/Users/lesleycheung/Desktop/TEMPLATES/intro/duck.html: 1h 27m 13s\n",
    "mostcodedCSS": "/Users/lesleycheung/Desktop/TEMPLATES/layouts/final/styles.css: 28m 26s\n"
}, {
    "id": 13,
    "color": "#4bf1d6",
    "title": "Videos",
    "fileLength": 64,
    "value": 78868.36723099994,
    "totalTime": "21h 54m 28s",
    "mostcodedJS": "/Users/lesleycheung/Desktop/current/Work/Videos/regexp/test.js: 3h 26m 46s",
    "secondMost": "/Users/lesleycheung/Desktop/current/Work/Videos/promises/promise.js: 2h 42m 24s",
    "x": 52415.885921,
    "jsTime": "14h 33m 35s",
    "y": 66.4599607691605,
    "mostcodedHTML": "/Users/lesleycheung/Desktop/current/Work/Videos/bootstrap/index.html: 4h 41m 11s\n",
    "mostcodedCSS": ""
}, {
    "id": 14,
    "color": "#4b4bf1",
    "title": "StoreModelService",
    "fileLength": 139,
    "value": 68812.68866700005,
    "totalTime": "19h 6m 52s",
    "mostcodedJS": "",
    "secondMost": "",
    "x": 0,
    "jsTime": "0s",
    "y": 0,
    "mostcodedHTML": "",
    "mostcodedCSS": ""
}]

function loadFeatures() {
    for (let i = 0; i < data.length; i++) {
        resumeLoad(data[i].title, data[i].totalTime, data[i].fileLength, data[i].mostcodedJS)
    }
}

function resumeLoad(projectName, time, getLength, jsFile) {
    // get template
    if ('content' in document.createElement('template')) {
        var t = document.querySelector('#project-card')
        let name = t.content.querySelector(".title")
        let tech = t.content.querySelector(".date")
        let link = t.content.querySelector(".time")
        let length = t.content.querySelector(".length")
        let hoverTitle = t.content.querySelector(".hover_title")
        let hoverFiles = t.content.querySelector(".hover_files")
        let hoverTime = t.content.querySelector(".hover_time")
        hoverTime.textContent = time
        hoverFiles.textContent = getLength
        hoverTitle.textContent = projectName
        name.textContent = projectName
        tech.textContent = jsFile
        // length.textContent = length;
        link.textContent = time
        let wrapper = document.querySelector(".project__render")
        let clone = document.importNode(t.content, true)
        wrapper.appendChild(clone)
    } else {}

}
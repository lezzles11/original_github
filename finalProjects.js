const fs = require("fs")
const _ = require("lodash")
const axios = require("axios")

axios.get("http://localhost:3000/projects").then((array) => {
    let data = array.data
    let finalArr = []
    for (let i = 0; i < data.length; i++) {
        if (data[i]["total_time"] > 6000) {
            let getInfo = getTime(data[i].name, data[i].total_time, data[i].files)
            finalArr.push(getInfo)
            console.log(data[i])
            // console.log(getInfo)
        }
    }
    // console.log(finalArr)
    let getGraphData = graph(finalArr)
    delete getGraphData[0]
    // console.log(getGraphData)
    fs.writeFile("db5.json", JSON.stringify(getGraphData), function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log("done")
        }
    })


})

function HSLToHex(h, s, l) {
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
        m = l - c / 2,
        r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
    } else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
    } else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
    } else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
    } else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
    } else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
    }
    // Having obtained RGB, convert channels to hex
    r = Math.round((r + m) * 255).toString(16);
    g = Math.round((g + m) * 255).toString(16);
    b = Math.round((b + m) * 255).toString(16);

    // Prepend 0s, if necessary
    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;

    return "#" + r + g + b;
}

function getColors() {

    let arr2 = [
        20, 40, 50, 60, 70, 80, 150, 160, 170, 200, 240, 230,
        250, 260, 290, 300, 320, 340,
    ];
    let random = Math.floor(Math.random() * (arr2.length - 1) + 1)
    let getColor = arr2[random]
    let color2 = `color: hsl(${getColor}, 86%, 62%); }`;
    return HSLToHex(getColor, 86, 62)
}
// console.log(getColors())

function graph(arr) {
    let graphArr = []
    for (let i = 0; i < arr.length; i++) {
        let index = i + 1;
        let obj = {
            id: index,
            color: getColors(),
            // digital,
            title: arr[i].name,
            fileLength: arr[i].fileLength,
            value: arr[i].total,
            totalTime: convertTime(arr[i].total),
            mostcodedJS: arr[i].mostcodedJS,
            secondMost: arr[i].secondMostJS,
            x: arr[i].js,
            jsTime: arr[i].jsTime,
            y: arr[i].percentage,
            value: arr[i].total,
            mostcodedHTML: arr[i].mostcodedHTML,
            mostcodedCSS: arr[i].mostcodedCSS,
        }
        graphArr.push(obj)
    }
    return graphArr;
}

function getTotalTime(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]["seconds"]
    }
    return sum;
}

// this accepts 
function getTime(projectName, totalTime, arr) {
    let java = _.filter(arr, function(o) {
        return o["name"].includes(".java")
    })
    let html = _.filter(arr, function(o) {
        if (o["total_seconds"] > 500 && o["name"].includes(".handlebars") || o["name"].includes(".html") || o["name"].includes(".pug")) {
            return o;
        }
    })
    let css = _.filter(arr, function(o) {
        if (o["total_seconds"] > 500 && o["name"].includes(".css")) {
            return o;
        }
    })
    let javascript = _.filter(arr, function(o) {
        if (o["total_seconds"] > 500 && o["name"].includes(".js") || o["name"].includes(".ts")) {
            // console.log(o)
            return o;
        }
    })
    let mostCodedJS = ""
    let mostCodedHTML = ""
    let mostCodedCSS = ""
    let mostCodedJava = ""
    let secondMostJS = ""
    if (javascript.length > 1) {
        mostCodedJS += javascript[0].name + ": " + convertTime(javascript[0].total_seconds)
        secondMostJS = javascript[1].name + ": " + convertTime(javascript[1].total_seconds)
    }
    if (html.length > 1) {
        mostCodedHTML += html[0].name + ": " + convertTime(html[0].total_seconds) + "\n"
    }
    if (css.length > 1) {
        mostCodedCSS += css[0].name + ": " + convertTime(css[0].total_seconds) + "\n"
    }
    if (java.length > 1) {
        mostCodedJava += java[0].name + ": " + convertTime(java[0].total_seconds) + "\n"
    }
    // console.log("most coded", mostCoded)
    // console.log(javascript[0])
    let cssTime = getSeconds(css)
    let htmlTime = getSeconds(html)
    let javaTime = getSeconds(java)
    let jsTime = getSeconds(javascript)
    // console.log(convertTime(jsTime))
    let percentage = jsTime / totalTime * 100;
    let project = {
        name: projectName,
        total: totalTime,
        fileLength: arr.length,
        time: convertTime(totalTime),
        js: jsTime,
        percentage: percentage,
        jsTime: convertTime(jsTime),
        html: convertTime(htmlTime),
        css: convertTime(cssTime),
        java: convertTime(javaTime),
        mostcodedJS: mostCodedJS,
        secondMostJS: secondMostJS,
        mostcodedHTML: mostCodedHTML,
        mostcodedCSS: mostCodedCSS,
        mostcodedJava: mostCodedJava
    }
    // console.log(project)
    return project
}

function convertTime(seconds) {
    var seconds = parseInt(seconds, 10)
    var hours = Math.floor(seconds / 3600)
    var minutes = Math.floor((seconds - (hours * 3600)) / 60)
    var seconds = seconds - (hours * 3600) - (minutes * 60)
    if (!!hours) {
        if (!!minutes) {
            return `${hours}h ${minutes}m ${seconds}s`
        } else {
            return `${hours}h ${seconds}s`
        }
    }
    if (!!minutes) {
        return `${minutes}m ${seconds}s`
    }
    return `${seconds}s`
}

function getSeconds(arr) {
    let seconds = 0;
    for (let i = 0; i < arr.length; i++) {
        seconds += arr[i]["total_seconds"]
    }
    return seconds;
}



// project name
// total time
// files for that project
// js time for that project
// html time for that project
// css time for that project 
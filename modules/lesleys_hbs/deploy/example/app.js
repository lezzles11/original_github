const {
    engine
} = require("express-handlebars")
const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const app = express();
const helpers = require("../index.js")
const Handlebars = require("handlebars")
const fs = require("fs")
const axios = require("axios")
let { problem, task } = require("./delete.js")
app.engine('.hbs', engine({
    extname: '.hbs',
    helpers: helpers
}));

app.set('view engine', '.hbs');
app.set('views', './views');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static("public"))

app.get("/", function(req, res) {
    // console.log("🚀 ~ file: app.js ~ line 30 ~ app.get ~ problem", problem)
    let stringed = JSON.stringify(problem)
    res.render("home", { stringed: stringed, problem: problem, task: task });
});


app.listen(3001, () => {
    console.log("app listening on port 3001")
});
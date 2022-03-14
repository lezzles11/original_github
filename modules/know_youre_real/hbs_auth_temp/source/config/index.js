require("dotenv").config();
const path = require("path");
var express = require("express");
var methodOverride = require("method-override");
const bodyParser = require("body-parser");
const cors = require("cors");
var cookieParser = require("cookie-parser");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const ymlDocument = YAML.load(
    path.join(__dirname, "../../docs/swagger/swagger.yaml")
);
const { getEngine } = require("./hbs");
const app = express();
// Static Assets
app.use(express.static(path.join(__dirname, "/public")));
// Documentation
app.use("/swag", swaggerUi.serve, swaggerUi.setup(ymlDocument));
app.use("/jsdocs", express.static(path.join(__dirname, "/jsdocs")));
// Views
app.engine(".hbs", getEngine);
app.set("view engine", ".hbs");
app.set("views", "./views");

// Network
app.use(methodOverride("_method"));
app.use(cors());

// Parsers
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

module.exports = { app };
const hbs = require("express-hbs");
const helpers = require("lesleys_hbs");
const i18n = require("i18n");
const fp = require("path");

function relative(path) {
  return fp.join(__dirname, path);
}

const getEngine = hbs.express4({
  partialsDir: [
    relative("views/pages"),
    relative("views/partials/components"),
    relative("views/partials/modules"),
    relative("views/layouts"),
  ],
  // layoutsDir: relative('views/layout'),
  defaultLayout: relative("views/layouts/main.hbs"),
  i18n: i18n.configure({
    locales: ["en", "fr"],
    cookie: "locale",
    directory: __dirname + "/locales",
  }),
});

module.exports = { getEngine };

console.log("file loads");

// PROJECTS
const HYGGE =
  "https://raw.githubusercontent.com/lezzles11/lezzles11.github.io/master/planning/hyggechats.md";
const KELLAN =
  "https://raw.githubusercontent.com/lezzles11/lezzles11.github.io/master/planning/kellan.md";
const OPTEE =
  "https://raw.githubusercontent.com/lezzles11/lezzles11.github.io/master/planning/opteeRedux.md";
const DYNAMIX = "";

// CODE SNIPPETS
const REDUX_TESTS =
  "https://raw.githubusercontent.com/lezzles11/lezzles11.github.io/master/planning/reduxTest.md";
const REACT_TESTS = "";
const EASY_PEASY = "";
const AWS = "";

// PROCESSES
const THINKING = "";
const PLANNING = "";
const UI = "";

$(document).ready(function () {
  hljs.initHighlightingOnLoad();
  let options = {
    html: true,
    doHighlight: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (__) {}
      }

      try {
        return hljs.highlightAuto(str).value;
      } catch (__) {}

      return "";
    },
  };
  function getText(url) {
    var result = null;
    $.ajax({
      url: url,
      type: "get",
      dataType: "html",
      async: false,
      success: function (data) {
        console.log(data);
        result = data;
      },
    });
    FileReady = true;
    return result;
  }
  var markdown_source = getText(KELLAN);
  //   var classy = window.markdownItClassy;
  //   var comment_contents =
  //     markdown_source.split(" SPLIT ")[1];

  var md = new Remarkable(options);
  //   md.use(classy);
  $("#optee").append(md.render(markdown_source));
});

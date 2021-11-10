console.log("file loads");

$(document).ready(function () {
  function getText(url) {
    var result = null;
    $.ajax({
      url: url,
      type: "get",
      dataType: "html",
      async: false,
      success: function (data) {
        result = data;
      },
    });
    FileReady = true;
    return result;
  }
  var markdown_source = getText();
  var comment_contents =
    markdown_source.split("축하의 말")[1];

  var md = new Remarkable();
  $("#github").append(md.render(comment_contents));

  if (findGetParameter("gift") == "false") {
    $("#gifts").hide();
  }
});

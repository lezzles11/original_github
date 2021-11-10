window.onload = jsonInit;
function jsonInit() {
  const URL = "http://localhost:3000/schools";
  function createElement(object) {
    let jsonDiv = document.querySelector("#json");
    let school = document.createElement("p");
    let major = document.createElement("p");
    let type = document.createElement("p");
    let year = document.createElement("p");
    // assigning each li tag to the index in the array
    school.innerHTML = object["School"];
    major.innerHTML = object["Program/Major"];
    type.innerHTML = object["Type"];
    year.innerHTML = object["Year Conferred"];

    jsonDiv.appendChild(school);
    jsonDiv.appendChild(major);
    jsonDiv.appendChild(type);
    jsonDiv.appendChild(year);
  }

  function informUs(endpoint, callback) {
    let http = new XMLHttpRequest();

    // target the file you want to GET
    http.open("GET", endpoint);

    // handle error and success
    http.onreadystatechange = function () {
      if (http.readyState != XMLHttpRequest.DONE) {
        return;
      } else if (http.status == 200) {
        let parsed = JSON.parse(http.responseText);
        console.log("Response text: ", parsed);
        for (let i = 0; i < parsed.length; i++) {
          console.log(
            "\n\nEach response text",
            parsed[i].name,
            "\n\n"
          );
          createElement(parsed[i]);
        }
        // get data into console
        callback(JSON.parse(http.responseText));
      } else {
        // tell user there is an error
        console.log("error occurred " + http.status);
      }
    };

    http.send(); //send the request
  }

  informUs(URL, function (data) {
    console.log(data);
  });

  let title = document.getElementsByTagName("h1");
  console.log(title);
  title[0].innerHTML = "yo";

  let content = document.getElementsByTagName("p");
  content[0].innerHTML = "sup dawg";

  let listenedElement = document.getElementsByTagName("h2");
  listenedElement[0].onclick = function () {
    alert("I was clicked.");
    listenedElement[0].innerHTML =
      "I have changed, its not you its me";
    listenedElement[0].style.border = "1 px";
  };
}

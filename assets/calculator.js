// Welcome
window.onload = calcInit;

function calcInit() {
  alert("Hi!");

  let name = prompt("What's your name?");
  console.log("name", typeof name);
  let divName = document.createElement("h1");
  divName.innerHTML = name;
  console.log(divName);
  let divWithName = document.querySelector("#calculator");
  divWithName.appendChild(divName);

  console.log(divWithName);
  function getSum() {
    let getTwo = prompt(
      "Please enter two numbers, seperated by a comma (e.g. 4, 5"
    );

    let getNumbers = getTwo.split(",");

    console.log(getNumbers);
    getNumbers.forEach((n) => {
      n.trim();
    });
    let numOne = parseInt(getNumbers[0]);
    let numTwo = parseInt(getNumbers[1]);

    let getSum = numOne + numTwo;

    if (getSum > 10) {
      alert("That is a big number" + getSum);
    } else {
      alert("That is a small number" + getSum);
    }
  }
  getSum();
  let done = prompt(
    "Do you want to add two numbers again? Type in yes or no"
  );

  let doneValue = done.trim().toLowerCase();
  while (doneValue === "yes") {
    getSum();
    let done = prompt(
      "Do you want to add two numbers again? Type in yes or no"
    );
    doneValue = done.trim().toLowerCase();
  }
}

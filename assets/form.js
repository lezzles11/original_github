window.onload = formInit;

function formInit() {
  let firstName = document.querySelector("#firstName");
  let lastName = document.querySelector("#lastName");
  let validateInput = document.querySelector(".validate");
  let validateInstructor =
    document.querySelector("#facilitator");
  let form = document.querySelector("#form");
  let formSubmitBtn = document.querySelector(
    "#formSubmitBtn"
  );

  formSubmitBtn.addEventListener("click", function () {
    let instructor = validateInstructor.value.toLowerCase();
    console.log("instructor", instructor !== "laura");
    if (
      instructor === "laura" ||
      instructor === "fazil" ||
      instructor === "harsh"
    ) {
      form.submit();
    } else {
      alert("no");
      return false;
    }
  });
  validateInput.addEventListener(
    "keydown",
    function (event) {
      console.log(event);
      let value = event.target.value;
      if (value.length < 2) {
        firstName.classList.add("invalidate");
      } else {
        firstName.classList.replace(
          "validate",
          "invalidate"
        );
      }
    }
  );
}

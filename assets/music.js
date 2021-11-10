window.onload = musicInit;
function musicInit() {
  let player = document.querySelector("#playerButton");
  player.addEventListener("click", function () {
    document.getElementById("player").play();
  });
}

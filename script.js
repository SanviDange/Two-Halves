const leftHalf = document.getElementById("leftHalf");
const rightHalf = document.getElementById("rightHalf");

let leftPressed = false;
let rightPressed = false;

document.addEventListener("keydown", function(e) {

  if (e.key === "ArrowLeft") {
    leftPressed = true;
    leftHalf.classList.add("move-left");
  }

  if (e.key === "ArrowRight") {
    rightPressed = true;
    rightHalf.classList.add("move-right");
  }

});

document.addEventListener("keyup", function(e) {

  if (e.key === "ArrowLeft") {
    leftPressed = false;
    leftHalf.classList.remove("move-left");
  }

  if (e.key === "ArrowRight") {
    rightPressed = false;
    rightHalf.classList.remove("move-right");
  }

});
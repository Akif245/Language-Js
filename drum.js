var allbuttons = document.querySelectorAll(".drum").length;

for (let i = 0; i < allbuttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

    // buttonAnimation(buttonInnerHTML);
  });
}

function makeSound(key) {
  switch (key) {
    case "A":
      var audio1 = new Audio("1.mp3");
      audio1.play();

      break;
    case "B":
      var audio2 = new Audio("2.mp3");
      audio2.play();
      break;
    case "C":
      var audio3 = new Audio("3.mp3");
      audio3.play();
      break;
    case "D":
      var audio4 = new Audio("4.mp3");
      audio4.play();
      break;
    case "E":
      var audio5 = new Audio("5.mp3");
      audio5.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

// function buttonAnimation(currentKey) {
//   var activeButton = document.querySelector("." + currentKey);

//   activeButton.classList.add("pressed");

//   setTimeout(function () {
//     action.classList.remove("pressed");
//   }, 1000);
// }

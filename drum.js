var allbuttons = document.querySelectorAll(".a").length;

// for (let i = 0; i < allbuttons; i++) {

//   document.querySelectorAll(".a")[i].addEventListener("click", function () {

//     console.log("akif");

//   });
// }

document.querySelector("button").addEventListener("click",function(){
  
  var  audio = new Audio('audio.mp3');
  audio.play()
})
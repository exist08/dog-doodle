// document.addEventListener("mousemove", function (event) {
//   var target = document.getElementById("target");
//   var container = document.body;

//   // Calculate the position of the target div
//   var mouseX = event.pageX - container.offsetLeft - 100;
//   var mouseY = event.pageY - container.offsetTop - 100;

//   // Set the position of the target div based on mouse coordinates
//   target.style.left = mouseX + "px";
//   target.style.top = mouseY + "px";
// });

// // Show the target div when mouse enters the container
// document
//   .getElementById("container")
//   .addEventListener("mouseenter", function () {
//     document.getElementById("target").style.display = "block";
//   });

// // Hide the target div when mouse leaves the container
// document
//   .getElementById("container")
//   .addEventListener("mouseleave", function () {
//     document.getElementById("target").style.display = "none";
//   });

let pawbtn = document.getElementById("pawbtn");
let painter = document.getElementById("painter");
pawbtn.onclick = () => {
  painter.classList.add("active")
};

document.querySelector("#close").addEventListener("mousedown", () => {
  var imgElements = painter.getElementsByTagName("img"); // Get all <img> elements within painter
  // Remove each <img> element from painter
  while (imgElements.length > 0) {
    painter.removeChild(imgElements[0]); // Remove the first <img> element until none are left
  }
  painter.classList.remove("active"); // Remove the "active" class from painter
})

let audio = new Audio('https://assets.mixkit.co/active_storage/sfx/3015/3015-preview.mp3')

painter.addEventListener("mousedown",e=>{
  if(!painter.classList.contains("active")) return
  console.log(`Mouse click on ${e.clientX} ${e.clientY}`);
  let paw = document.createElement("img")
  paw.src = `https://unpkg.com/ionicons@7.1.0/dist/svg/paw.svg`
  painter.appendChild(paw)
  paw.classList.add("paw")
  paw.style.left = e.clientX - 50 + "px"
  paw.style.top = e.clientY - 50 + "px"
  paw.style.rotate = getRandomNumber() + "deg"
  audio.play()
})


function getRandomNumber() {
  // Generate a random number between 0 and 1
  var randomNumber = Math.random();

  // Scale the random number to be between -90 and 90
  var scaledNumber = randomNumber * 180 - 90;

  return scaledNumber;
}

var image = document.querySelector("img");
var msg = document.querySelector("h3 #msg");

image.addEventListener("mouseenter", function () {
  msg.innerHTML = "Entered on image.";
});

image.addEventListener("mouseleave", function () {
  msg.innerHTML = "Left from image.";
});

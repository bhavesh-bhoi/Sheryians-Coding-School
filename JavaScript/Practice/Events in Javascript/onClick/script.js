let clickMe = document.getElementById("clickMe");
let dblClickMe = document.getElementById("dblClickMe");

clickMe.addEventListener("click", function () {
  alert("Button Clicked!");
});

dblClickMe.addEventListener("dblclick", function () {
  alert("Button Double Clicked!");
});

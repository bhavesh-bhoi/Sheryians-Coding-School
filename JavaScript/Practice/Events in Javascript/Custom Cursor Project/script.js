var body = document.body;
var cursor = document.querySelector("img");

body.addEventListener("mousemove", function (val) {
  cursor.style.left = val.x + "px";
  cursor.style.top = val.y + "px";
});

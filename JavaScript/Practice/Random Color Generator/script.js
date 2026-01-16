var btn = document.querySelector("button");
var colorDisplay = document.querySelector("#colorDisplay");
var colorCode = document.querySelector("#colorCode");

colorDisplay.addEventListener("click", function () {
  navigator.clipboard.writeText(colorCode.textContent);
  alert("Color code copied to clipboard: " + colorCode.textContent);
});

btn.addEventListener("click", function () {
  let redColor = Math.floor(Math.random() * 256);
  let greenColor = Math.floor(Math.random() * 256);
  let blueColor = Math.floor(Math.random() * 256);

  const color = `rgb(${redColor}, ${greenColor}, ${blueColor})`;

  colorDisplay.style.backgroundColor = color;
  colorCode.textContent = color;
  //   colorCode.innerHTML = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
  //   colorCode.innerText = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
});

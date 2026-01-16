var btnInc = document.querySelector("#add");
var btnDec = document.querySelector("#sub");
var count = document.querySelector("h1");

let newVal = 0;

btnInc.addEventListener("click", function () {
  newVal++;
  count.innerHTML = newVal;
});

btnDec.addEventListener("click", function () {
  if (newVal <= 0 || count <= 0) {
    count.innerHTML = "Cannot Print Negative Values!";
  } else {
    newVal--;
    count.innerHTML = newVal;
  }
});

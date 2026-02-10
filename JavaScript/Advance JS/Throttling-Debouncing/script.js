// Debouncing

function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}

let search = document.querySelector("#search").addEventListener(
  "input",
  debounce(function () {
    console.log("Started!!!");
  }, 400),
);

// Throttling

function throttle(fn, delay) {
  let last = 0;

  return function () {
    const now = Date.now();
    if (now - last >= delay) {
      last = now;
      fn();
    }
  };
}

window.addEventListener(
  "mousemove",
  function () {
    throttle(function () {
      console.log("moving");
    });
  },
  2000,
);

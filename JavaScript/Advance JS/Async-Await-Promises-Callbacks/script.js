// Callback - any function inside a function is known as callback function(eg. filter, reduce, map, addEventListener,setTimeout etc)

setTimeout(() => {
  console.log("Hey");
}, 2000);

// book("buyBook", function () {
//   console.log("Callback Function Activated!");
// });

function book(fnc) {
  fnc();
}

book(function () {
  console.log("Book Function Called!");
});

function f1(f2) {
  f2(function (f4) {
    f4(function (f6) {
      f6();
    //   console.log("Function 6 Executed!");
    });
  });
}

f1(function (f3) {
  f3(function (f5) {
    f5(function () {
      console.log("Function 5 Executed!");
    });
  });
});

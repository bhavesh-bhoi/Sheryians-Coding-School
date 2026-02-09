// Syntax Error - missing symbols, spelling mistakes etc
// Logical Error - implementing wrong logic
// Runtime Errors - error at project runtime

// Understanding Error Object ['Message', 'Name', 'Stack']

try {
  console.log(a.name.age);
} catch (err) {
  // error message
  console.error(err.message);
  // error name
  console.error(err.name);
  // complete error message
  console.error(err.stack);
  // Executes Everytime
} finally {
  console.log("Error Handled!!!");
}

// How to Throw Errors in JavaScript

try {
  let a = 10;
  console.log(a.name.age);
} catch (err) {
  throw new Error("Something Went Wrong!");
}

// const input = prompt("Please enter your age:");

// // Validate input
// if (!input?.trim()) {
//   // Handle null or empty input
//   console.error(
//     input === null ? "You clicked Cancel" : "Empty input is not allowed!"
//   );
// } else {
//   // Convert to number
//   const age = Number(input.trim());

//   //   Check for NaN
//   if (Number.isNaN(age)) {
//     console.error("Invalid age entered!");
//   } else {
//     console.log(`Age is: ${age}`);
//   }
// }

let savedPassword = "user1234";
let attempts = 0;
let maxAttempts = 3;

let userPassword;

while (attempts < maxAttempts) {
  userPassword = prompt("Please enter your password:");

  if (userPassword === savedPassword) {
    alert("Welcome back! Account access granted.");
    break;
  } else {
    attempts++;
    if (attempts === maxAttempts) {
      alert("Too many incorrect attempts. Access denied. Account BLOCKED.");
    } else {
      alert(
        `Incorrect password. You have ${maxAttempts - attempts} attempts left.`
      );
    }
  }
}

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

function addUnlimited(...nums){
  let ans = nums.reduce(function(prev, curr){
    return prev + curr;
  },0)
  console.log(ans)
}

addUnlimited(1,2,3,4,5)


// IIFE

(function(){
  console.log('IIFE!')
})()


// CLOSURE

function parent(){
  let a = 12;
  function child(){
    console.log(a)
  }
  child()
}
parent()


// print all elements from the array

let arr = [1,2,3,4,5,6,7,8,9];

for(let i=0;i<arr.length;i++){
  console.log(arr[i]);
}

// Print keys and key's value from obj

let obj = {
  name:"Bhavesh",
  age:21,
  gender:"Male"
}

for(let key in obj){
  console.log(key);
  console.log(obj[key]);
}

// setTimeOut

setTimeout(function(){
  console.log("Time is Up!");
}, 2000)
let age = prompt("Please enter your age:");

// If user clicks "Cancel", age will be null
if (age === null) {
  console.warn("You Clicked Cancel");
} else {
  // Check for empty string
  if (age.trim() === "") {
    console.error("Empty String is NOT Allowed, Please Enter Age in NUMBER!");
  } else {
    // Convert to number
    age = Number(age.trim());
    // Check if conversion to number was successful
    if (isNaN(age)) {
      console.error("Invalid Age Entered!");
    } else {
      console.log("Age is: " + age);
    }
  }
}

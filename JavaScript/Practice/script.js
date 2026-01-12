const input = prompt("Please enter your age:");

// Validate input
if (!input?.trim()) {
  // Handle null or empty input
  console.error(
    input === null ? "You clicked Cancel" : "Empty input is not allowed!"
  );
} else {
  // Convert to number
  const age = Number(input.trim());

  //   Check for NaN
  if (Number.isNaN(age)) {
    console.error("Invalid age entered!");
  } else {
    console.log(`Age is: ${age}`);
  }
}

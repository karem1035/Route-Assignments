// Get user input
var userInput = prompt('Enter a number:');

// Convert the user input to a number
var number = parseInt(userInput);

// Check if the number is divisible by both 3 and 4
if (number % 3 === 0 && number % 4 === 0) {
  console.log('Yes');
} else {
  console.log('No');
}

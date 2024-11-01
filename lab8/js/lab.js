/* 
 *  Author: Ronie Antonio and Ben Awtry
 *  Emails: <rantoni1@ucsc.edu> and <bawtry@ucsc.edu>
 *  Created: 28 Oct 2024
 *  License: Public Domain
 */

// Create an array
var numbers = [4, 7, 5, 9];
console.log("Our array: ", numbers);

// Function made to add 4
function addFour(x) {
    return x + 4;
}
//Test the function
console.log("3 + 4 = ", addFour(3));

// Add four to the array
var numbersAddFour = numbers.map(addFour);
console.log("Updated array (+4): ", numbersAddFour);

// Multiple the array by three
var numbersTimesThree = numbers.map(function(x) {
  return x * 3;
})
// Test the anon function
console.log("Updated array (3x): ", numbersTimesThree);

// Output
$("#output").html("Original Array: " + numbers + "</br>" + 
  "Updated Array (+4): " + numbersAddFour + "</br>" + 
  "Udpated Array (3x): " + numbersTimesThree);
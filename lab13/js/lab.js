/* 
 *  Author: Ronie Antonio and Ben Awtry
 *  Emails: <rantoni1@ucsc.edu> and <bawtry@ucsc.edu>
 *  Created: 12 November 2024
 *  License: Public Domain
 */

function failureManagement() {
    // Variable to hold output string
    let longString = "";
  
    // Loop through numbers 1 to 250
    for (let num = 0; num <= 250; num++) {
        // Initialize an empty string for each number's output
        let output = "";

        // Check divisibility and append corresponding words
        if (num % 3 == 0) {
            output += "Welcome to ";
        } if (num % 5 == 0) {
            output += "Failure ";
        } if (num % 7 == 0) {
            output += "Management"
        } if (num % 3 == 0 && num % 5 == 0 && num % 7 == 0) {
            output += "!"; //just the added exclamation mark :)
        } if (output == "") {
            output += "";
        } // If output string is still empty, 
          // the number is not a multiple of 3, 5, or 7

        // Append the number and the output to longString; revised by ChatGPT
        longString += `<div>${num}: ${output}</div>`;
    }

    // Output the final result to the #output div
    document.getElementById("output").innerHTML = longString;
  }
  
  // Call function
  failureManagement();
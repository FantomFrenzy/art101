/* 
 *  Author: Ronie Antonio and Ben Awtry
 *  Emails: <rantoni1@ucsc.edu> and <bawtry@ucsc.edu>
 *  Created: 5 November 2024
 *  License: Public Domain
 */

function generateRandomText() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

// Click listener for button
$("#make-convo").click(function(){
  // Get new fake dialogue
  const newText = generateRandomText();
  
  // Append a new div to our output div
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});

// Click listener for Submit button
$("#submit-convo").click(function(){
  // Get the user input from the input field
  const userText = $("#userInput").val();
  
  // Check if input is not empty ()
  if (userText.trim() !== "") { //courtesy of ChatGPT
    // Append a new div with the user input to the output div, using userText class
    $("#output").append('<div class="userText"><p>' + userText + '</p></div>');
    
    // Clear the input field for the next entry
    $("#userInput").val('');
  }
});

/* 
 *  Author: Ronie Antonio and Ben Awtry
 *  Emails: <rantoni1@ucsc.edu> and <bawtry@ucsc.edu>
 *  Created: 10 November 2024
 *  License: Public Domain
 */

// Generate an anagram of a given string
function anagram(inputString) {
    // Convert the string to an array
    const charArray = inputString.split('');

    // Thank you Mr. Modes (: This shuffles the characters
    for (let i = charArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
    }

    // Join the shuffled characters backinto a string
    const anagram = charArray.join('');
    
    // Return the generated anagram
    return anagram;
}



// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // Convert our string to an array and to sort it back again
    const sortedString = inputString.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    // additional functions added -  .replace() used to remove spaces
    // additional functions added - .toLowerCase() makes upper cases to lower cases
    return sortedString.charAt(0).toUpperCase() + sortedString.slice(1);
    // capitalizes first character and combine it with the rest of the sorted string
}

// Click listener for button
$("#submit").click(function() {
    // Get value of input field
    const userName = $("#user-name").val();

    // Sort the user's name
    const userNameSorted = sortString(userName);

    // Append a new div to our output div with the sorted name
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
    $("#secret").html('<div class="text"><p>HA! You\'ve been cursed. You cannot change back.</p></div>');
});


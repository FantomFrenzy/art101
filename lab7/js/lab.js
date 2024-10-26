// index.js - purpose and description here
/* 
 *  Author: Ronie Antonio and Ben Awtry
 *  Emails: <rantoni1@ucsc.edu> and <bawtry@ucsc.edu>
 *  Created: 28 Oct 2024
 *  License: Public Domain
 */

// sortUserName - takes input & sorts the letters of the input's name
function sortUserName() {
    var userName = window.prompt("I woke up from my coma to turn off 'Thick of It' by KSI. Who are you again?");
    console.log("userName =", userName);

    // Split the string to an array + sort the array + join the array to a string
    var sortedName = userName.split('').sort().join('');
    console.log("sortedName =", sortedName);

    // Return sorted name
    return sortedName;
}

// Output
document.writeln("I just woke up from my coma to turn off 'Thick of It' by KSI. Who are you again?", "</br>")
document.writeln("I won't be able to remember your name. Therefore, I shall rename you: ",
    sortUserName(), "</br>");

// index.js - purpose and description here
// Author: Ronie Antonio & Ben Awtry
//Emails: <rantoni1@ucsc.edu> <bawtry@ucsc.edu>
// Date: 24 October 2024

// Defining Variables
myTransport = ["Kia Soul", " Toyota Camry", " bike", " buses"];

// Creatng object for my main ride
myMainRide = {
    make: "Kia",
    model: "Soul",
    color: "Green",
    year: 2012,
    // Defining a function within our object (a method) that uses the 
    // value of year above (using this.year)
    age: function() {
      return 2024 - this.year;
    }
}

// Output
document.writeln("Here are the kinds of transportation I use: ", myTransport, "</br>");
// This allows us to write an object to the document
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();

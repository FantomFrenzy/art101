/* 
 *  Author: Ronie Antonio and Ben Awtry
 *  Emails: <rantoni1@ucsc.edu> and <bawtry@ucsc.edu>
 *  Created: 12 November 2024
 *  License: Public Domain
 */

// Return House
// depending on length mod 4
function sortingHat(str) {
    len = str.length;
    mod = len % 4;
    if (mod == 0) {
        return "Gryffindor" + "<br>" + "<h4>House of the Brave and Determined</h4>" + 
        "<img id='sigil' src='./img/gryffindor.png'>";
    }
    else if (mod == 1) {
        return "Ravenclaw" + "<br>" + "<h4>House of the Wise and Curious</h4>" + 
        "<img id='sigil' src='./img/ravenclaw.jpg'>";

    }
    else if (mod == 2) {
        return "Slytherin" + "<br>" + "<h4>House of the Ambitious and Cunning</h4>" + 
        "<img id='sigil' src='./img/slytherin.jpg'>";

    }
    else if (mod == 3) {
        return "Hufflepuff" + "<br>" + "<h4>House of the Loyal and Kind</h4>" + 
        "<img id='sigil' src='./img/hufflepuff.jpg'>";
    }
}

var myButton = document.getElementById("submit");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
})



/* 
 *  Author: Ronie Antonio and Ben Awtry
 *  Emails: <rantoni1@ucsc.edu> and <bawtry@ucsc.edu>
 *  Created: 25 November 2024
 *  License: Public Domain
 */

// Bind a click event to the button with ID "activate"
$("#activate").click(function() {
        // Fetch the XKCD comic data using AJAX
        $.ajax({
            // URL for the request to fetch comic data
            url: "https://xkcd.com/info.0.json",
            // Type of request (GET)
            type: "GET",
            // Expecting JSON data from the API
            dataType: "json",
            // Success callback function when the request succeeds
            success: function(comicObj) {
                // Clear the previous content in the output div
                $("#output").empty();

                // Create the title element with the comic title
                var comicTitle = $("<h3></h3>").text(comicObj.title);
                
                // Create the image element with the comic image
                var comicImage = $("<img />", {
                    src: comicObj.img,       // Set image source from the object
                    alt: comicObj.alt,       // Set alt text from the object
                    title: comicObj.alt      // Set title text to match the alt attribute
                });
                
                // Append the title and image to the output div
                $("#output").append(comicTitle).append(comicImage);
            },
            // Error callback if the request fails
            error: function(jqXHR, textStatus, errorThrown) {
                // Log any errors to the console and display an error message in the output div
                console.log("Error:", textStatus, errorThrown);
                $("#output").text("Failed to load the comic. Please try again later.");
            }
        });
    });
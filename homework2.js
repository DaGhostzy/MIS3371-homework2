/*
 Name: Michael Tran
 Date created: 2/22/2025
 Date last edited:2/28/2025
Version: 1.0
Description: Homework 2 JavaScript
*/

/*
    MISSO resources were used as a framework reference and guideline for this project.
    All additional insights, modifications, and enhancements are my own work.
    Extra explanations and additions have been included in the comments for clarity.
    For full access to the MISSO resources, visit:
    Homework 1: https://adhesive-tarragon-137.notion.site/Homework-1-15c348e9135280eea832f9de5dfbe8d9
    Homework 2: https://adhesive-tarragon-137.notion.site/Homework-2-170348e9135280b4aca0e8794485b640
*/

//dynamic date js code
const d= new Date();
let text= d.toLocaleDateString();
document.getElementById("today").innerHTML= text;

//name slider js code
let slider= document.getElementById("range");
let output= document.getElementById("range-slider");
output.innerHTML= slider.value;

slider.onimput= function ()
{
    output.innerHTML= this.value;
}

/*
 Name: Michael Tran
 Date created: 2/22/2025
 Date last edited:2/28/2025
Version: 1.0
Description: Homework 2 JavaScript
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

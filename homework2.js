/*
 Name: Michael Tran
 Date created: 2/22/2025
 Date last edited:2/28/2025
Version: 1.0
Description: Homework 2 JavaScript
*/

/*
/*
    The refrence structure and guidelines for this project were derived from the MISSO resources.
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

slider.oninput= function ()
{
    output.innerHTML= this.value;
}

// validattion for date of birth
function validateDob()
 {
   dob = document.getElementById("dob");
   let date = new Date(dob.value);
   let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

  if (date > new Date()
     {
       document.getElementById("dob-error").innerHTML = 
       "The date can NOT be in the future";
       dob.value = "";
       return false;
     }
  
  else if (date < new Date(maxDate))
     {
       document.getElementById("dob-error").innerHTML =
       "The date can NOT be over 120 years ago";
       dob.value = "";
       return false;
     }
  
  else
     {
       document.getElementById("dob-error").innerHTML = "";
       return true;
     }
 }
// structure guidelines derived from MISSO resources

// validation for social security number
function validateSsn()
 {
   const ssn = document.getElementById("ssn").value;
   const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

   if (!ssnR.test(ssn))
     {
       document.getElementById("ssn-error").innerHTML = 
       "Enter a valid Social Security Number";
       return false;
     }

   else
   {
     document.getElementById("ssn-error").innerHTML = "";
     return true;
   }
 }
// structure guidelines derived from MISSO resources

// validation for ZIP code
function validateZipcode()
 {
   const zipInput = document.getElementById("Zipcode");
   let zip = zipInput.value.replace(/[^\d-]/g, "");

   if (!zip)
     {
       document.getElementById("Zipcode-error").innerHTML = 
       "Enter a Zip Code";
       return false;
     }

   if (zip.length > 5)
     {
       zip = zip.slice(0,5) + "-" + zip.slice(5,9);
     }
   else
     {
       zip = zip.slice(0,5);
     }

      zipInput.value = zip;
      document.getElementById("Zipcode-error").innerHTML = "";
      return true;
   }
 }
// structure guidelines derived from MISSO resources


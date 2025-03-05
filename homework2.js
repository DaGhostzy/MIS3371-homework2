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

//dynamic date
const d= new Date();
let text= d.toLocaleDateString();
document.getElementById("today").innerHTML= text;

//name slider
let slider= document.getElementById("range");
let output= document.getElementById("range-slider");
output.innerHTML= slider.value;

slider.oninput= function ()
{
    output.innerHTML= this.value;
}

// validation for date of birth
function validateDob()
 {
   dob = document.getElementById("dob");
   let date = new Date(dob.value);
   let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

  if (date > new Date())
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
// regex social security number validate pattern from MISSO resources

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

//validate email
function validateEmail()
 {
   var email = document.getElementById("Email").value;
   var emailR= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.length == 0) 
     {
        document.getElementById("Email-error").innerHTML = 
        "Email can't be blank";
        return false;
     }
  
   if (!emailR.test(email))
     {
       document.getElementById("Email-error").innerHTML = 
       "Enter a valid email address";
       return false;
     }
   else
   {
     document.getElementById("Email-error").innerHTML = "";
     return true;
   }
 }
// regex var validate pattern for email derived from MISSO resources

//validate and format phone number
//format phone number
function formatPhoneNumber()
 {
   var phoneInput = document.getElementById("PhoneNumber");
   var phoneValue = phoneInput.value.replace(/\D/g, "");

  if (phoneValue.length <=3) 
     {
        phoneInput.value = phoneValue;
     }
   
  else if (phoneValue.length <6)
     {
       phoneInput.value = phoneValue.slice(0,3) + "-" + phoneValue.slice(3);
     }

   else
   {
     phoneInput.value = phoneValue.slice(0,3) + "-" + phoneValue.slice(3,6) + "-" + phoneValue.slice(6,10);
   }
 }

// validate phone number
function validatePhoneNumber()
 {
   var phoneInput = document.getElementById("PhoneNumber");
   var phoneValue = phoneInput.value;

  if (phoneValue.length === 0) 
     {
        document.getElementById("PhoneNumber-error").innerHTML = 
        "Phone number can NOT be blank";
        return false;
     }
   
  var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
  if (!phonePattern.test(phoneValue))
     {
        document.getElementById("PhoneNumber-error").innerHTML = 
        "Enter a valid phone #";
        return false;
     }

   else
   {
        document.getElementById("PhoneNumber-error").innerHTML = "";
        return true;
   }
 }
// regex pattern for phone # from stack overflow- https://stackoverflow.com/questions/8634139/phone-validation-regex and https://stackoverflow.com/questions/18028776/phone-number-regex-in-javascript-jquery-on-000000-0000 

// validate User ID
function validateUsid()
 {
   usid = document.getElementById("usid").value.toLowerCase();
   document.getElementById("usid").value = usid;

  if (usid.length ==0)
     {
       document.getElementById("usid-error").innerHTML = 
       "The User ID can NOT be left blank, MUST be filled in";
       return false;
     }

   if (!isNaN(usid.charAt(0)))
     {
       document.getElementById("usid-error").innerHTML = 
       "The User ID can NOT start with a number";
       return false;
     }

  let regex = /^[a-zA-Z0-9_-]+$/;
  if (!regex.test(usid))
     {
      document.getElementById("usid-error").innerHTML = 
       "The User ID can ONLY have letters, numbers, and an underscore OR dash. NO special characters";
       return false;
     }
  else if (usid.length < 5)
     {
       document.getElementById("usid-error").innerHTML =
       "The User ID must have a minimum of 5 characters";
       return false;
     }
  else if (usid.length > 30)
     {
       document.getElementById("usid-error").innerHTML =
       "The User ID can NOT have more than 30 characters";
       return false;
     }
  else
     {
       document.getElementById("usid-error").innerHTML = "";
       return true;
     }
 }
// regex validate pattern derived from MISSO resources

//validate password
function validatePsword()
 { 
       const psword = document.getElementById("psword").value;
       const usid = document.getElementById("usid").value;
       const errorMessage = [];
  
   if (!psword.match(/[a-z]/)) 
     {
       errorMessage.push("Include at least one lowercase letter");
     }

  if (!psword.match(/[A-Z]/)) 
     {
       errorMessage.push("Include at least one uppercase letter");
     }

  if (!psword.match(/[0-9]/)) 
     {
       errorMessage.push("Include at least one number");
     }

  if (!psword.match(/[!\@#\$%&*\-_\\.+\(\)]))
     {
       errorMessage.push("Include at least one special character");
     }

  if (!psword.includes(usid)) 
     {
       errorMessage.push("User ID can NOT be part of the password");
     }
 }
// password match and special chatacter validate pattern derived from MISSO resources

// confirm password validation
function validateConfirmPsword()
 {
       psword1 = document.getElementById("psword").value;
       psword2 = document.getElementById("cpsword").value;

  if (psword1 !== psword2) 
     {
        document.getElementById("psword2-error").innerHTML = 
        "Both passwords do NOT match";
        return false;
     }
      else
     {
        document.getElementById("psword2-error").innerHTML = 
        "Both passwords match!";
        return true;
     }
 }

// Review Button
function reviewInput()
{
   var formcontent = document.getElementById("signup");
   var formoutput = "<table class= 'output'><th colspan = '3'> Review your Information:</th></tr>;
   for (let i = 0; i < formcontent.length; i++)
     {
       if (formcontent.elements[i].value !== "")
        {
          switch (formcontent.elements[i].checked)
           {
            case "checkbox":
             if(formcontent.elements[i].checked)
             {
               formoutput += `<tr><td align= 'right'>${formcontent.elements[i].name}</td<td>&#x2713;</td></tr>`;
             }
             break;
           case "radio":
             if (formcontent.elements[i].checked)
             {
               formoutput += `<tr><td align= 'right'>${formcontent.elements[i].name}</td><td${formcontent.elements[i].value}</td></tr>`;
             }
             break;
           default:
             formoutput += `<tr><td align= 'right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
           }
        }  
     }
     formoutput =+ "</table>";
     document.getElementById("showInput").innerHTML = formoutput;
}
// some of "for loop" statement derived from MISSO resources


// remove review data
function removeReview()
 {
   document.getElementById("showInput").innerHTML = "";
 }

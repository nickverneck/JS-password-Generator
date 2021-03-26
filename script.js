// creating arrays that will hold the characters we gonna use for the password
// one array for each type of character
var specialChar =["`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+"];
var lowerChar =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChar = ['0','1','2','3','4','5','6','7','8','9'];
//creating variables to hold user inputs (password lenght, if they want special characters or not.)
var passLength;
var isSpecial;
var isLower;
var isUpper;
var isNumber;
// Assignment Code
var generateBtn = document.querySelector("#generate");

// lets create a function to deal with user inputs
function userInputs()
{
  var passChars = [];
  passLength = prompt("How many characters you want for your password? (It must be between 8 and 128 Characters");
  //check if user input was a number between 8 and 128 otherwise prompt user again.
  if (passLength >= 8 && passLength <= 128)
  {

    //number was valid so lets ask the user if they want special characters,numbers, lower and uppercase
    isSpecial = confirm("Do you want special characters in your password? \n ex: @#$");
    isNumber =  confirm("Do you want numbers in your password?");
    isLower = confirm("Do you want some lower case characters in your password?"); 
    isUpper = confirm("Do you want some upper case characters in your password?")
   
    //making sure the user chose at least one type of character otherwise let the user know .
    if (isSpecial || isNumber || isLower || isUpper)
    {
       // Now that we know what the user wants, let's create an array with the possible characters for the password to be generated.
      if (isSpecial)
      {
       passChars = passChars.concat(specialChar);
      }
     if (isNumber)
     {
      passChars = passChars.concat(numberChar);
      
     }
     if (isLower)
     {
      passChars = passChars.concat(lowerChar);
     
     }
     if (isUpper)
     {
      passChars = passChars.concat(upperChar);
      
     }

  } 
  else
    {
      alert("You must choose at least one type of character");
    } 
   
  }
  
  else
  {
    
    alert("Incorrect value, Please input a number between 8 and 128.");
   
   
  }
  //return passchars so it can be used to generate the password
  return passChars; 
}

function generatePassword(pass,length)
{
  // Lets loop through the entire array pass[] adding random picked values to another array called finalpass[]
  // once the length is satisfied we stop the loop, transform the final pass array into a string and return the final value
  var finalPass = [];


  for (var i = length-1; i > -1 ;i--)
  {
    var j = Math.floor(Math.random()* pass.length);
    finalPass[i]= pass[j];
    }
  finalPass = finalPass.join("");
  return finalPass;
}

function writePassword() {
  //lets get an array with all possible characters that the user have chosen
  // and generate a password out of this array, after that is completed we show to the user in the website
  var passChars = userInputs();
  
  var password = generatePassword(passChars,passLength);
 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

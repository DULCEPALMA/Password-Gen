///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////
}

var generate = document.querySelector("#generate");




function genertatePassword() {

var userInput =  window.prompt("How long do you want your password to be?")

var passwordLength = parseInt(userInput)

if (isNaN(passwordLength)) {
  window.alert("That's not a number!")
}

}




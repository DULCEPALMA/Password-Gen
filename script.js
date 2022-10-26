///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function randomInt(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  var random = Math.random();
  return Math.floor(min * (1 - random) + random * max);
}
function getRandomItem(list) {
  return list[randomInt(list.length)];
}

function generatePassword() {
  var userInput = window.prompt("How long do you want your password to be?");
  var passwordLength = parseInt(userInput);

  if (isNaN(passwordLength)) {
    window.alert("That's not a number!");
  }
  if (passwordLength < 8) {
    window.alert("Not an acceptable length");
  }
  if (passwordLength > 128) {
    window.alert("Not an acceptable length");
  }
  var userUppercase = window.confirm(
    "Do you want upcase letters for password?"
  );
  console.log(userUppercase);
  var userLowercase = window.confirm(
    "Do you want lower case letters for password?"
  );
  console.log(userLowercase);
  var userNumericcharacters = window.confirm(
    "Do you want any nurmeric characters for password?"
  );
  console.log(userNumericcharacters);
  var userSpecialcharacter = window.confirm(
    "Do you want any special characters?"
  );
  console.log(userSpecialcharacter);
  var UppercaseList = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var LowercaseList = [
    "a",
    "b",
    "c",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o,",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var NumericcharactersList = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  var SpecialcharacterList = ["!", "@", "#", "%", "&", "*", "$"];
  var optionsCart = [];
  if (userNumericcharacters === true) {
    optionsCart.push(NumericcharactersList);
  }
  if (userUppercase === true) {
    optionsCart.push(UppercaseList);
  }
  if (userLowercase === true) {
    optionsCart.push(LowercaseList);
  }
  if (userSpecialcharacter === true) {
    optionsCart.push(SpecialcharacterList);
  }
  if (optionsCart.length === 0) {
    optionsCart.push(LowercaseList);
  }
  var generatePassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomItem = getRandomItem(optionsCart);
    var randomCharacter = getRandomItem(randomItem);
    generatePassword += randomCharacter;
  }
  console.log(generatePassword);
  return generatePassword;

  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////
  var generate = document.querySelector("#generate");
}

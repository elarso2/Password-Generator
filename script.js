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

// create bool variables for the user input after each popup window
var boolLower = true;
var boolUpper = true;
var boolSpecial = true;
var boolNumber = true;

// create collections (array) (in global scope) for each character type (capitol, lowercase, number, special character)
// lowercase
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// uppercase
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// special character
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "+", "*", "@", "?", "^", "_", "-", "~"];

// number
var selectNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];






function generatePassword() {
var password = [];
var fullChar =[];
// asking user for password character length, with range of [8, 128]
var charInput = 0;

while (charInput < 8 ||  charInput > 128){
    charInput = window.prompt("How many characters would you like your password to contain? ", "Must contain between 8 and 128 characters.");
}
     
// convert charinput to a number

// Want lowercase letters?
if (confirm ("Would you like to include lowercase letters?")) {
    boolLower= true;
    var random = Math.floor(Math.random() * lowerCase.length);
    console.log(lowerCase[random]);
    password.push(lowerCase[random]);
    fullChar = fullChar.concat(lowerCase);
}

// Want uppercase letters?
if (confirm ("Would you like to include uppercase letters?")) {
    boolUpper = true;
    var random = Math.floor(Math.random() * upperCase.length);
    console.log(upperCase[random]);
    password.push(upperCase[random]);
    fullChar = fullChar.concat(upperCase);
}

// Want numbers?
if (confirm ("Would you like to include numbers?")) {
    boolNumber = true;
    var random = Math.floor(Math.random() * selectNumber.length);
    console.log(selectNumber[random]);
    password.push(selectNumber[random]);
    fullChar = fullChar.concat(selectNumber);
}

// Want special characters?
if (confirm ("Would you like to add special characters?")) {
    boolSpecial = true;
    var random = Math.floor(Math.random() * specialChar.length);
    console.log(specialChar[random]);
    password.push(specialChar[random]);
    fullChar = fullChar.concat(specialChar);
}
// for loop to select random characters from full list, using an '=' sign in the middle parameter so that the loop runs only a number of times equivalent to the difference of the user input length and the password length created by the above character selections.
// set a variable number of remaining characters (rather that middle parameter inside for loop)
var remaining = parseInt(charInput - password.length)
for (var i = 0; i < remaining ;  i++) {
    var random = Math.floor(Math.random() * fullChar.length);
    password.push(fullChar[random]);
}

console.log(password.length);

// convert password from an array to a string
let passwordString = password.join("");

console.log(charInput)
console.log(fullChar)
console.log(password)
console.log(passwordString)

return passwordString;
}
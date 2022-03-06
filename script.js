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

var bool_lower = true;
var bool_upper = true;
var bool_special = true;
var bool_nospecial = true;
var bool_number = true;
var bool_nonumber = true;

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
// your code goes here
// get user preferences
// identify and collect the buckets the user has chosen
// Create a guaranteed collection (concatonate selected collections into a single, temporary array)
// create a local password variable that starts as an empty string, an array
// randomly draw a character from guaranteed collection
// add character item to the password array/variable
// repeat as many times as user specified, for loop iterations (i=0, i=user input, i++)
// loop through the guaranteed and replace elements in password array use : math.floor(math.random)
// join the characters in the password array into a string
// return the password string to user

//fxn for random lowercase
    function lower(){
        const random = Math.floor(Math.random() * lowerCase.length);
        console.log(random, lowerCase[random]);
    }

// fxn for random uppercase
    function upper()}
        const random = Math.floor(Math.random() * upperCase.length);
        console.log(random, upperCase[random]);
    }

// fxn for random special char
    function special(){
        const random = Math.floor(Math.random() * specialChar.length);
        console.log(random, specialChar[random]);
    }

// fxn for number
    function number() {
        const random = Math.floor(Math.random() * selectNumber.length);
        console.log(random, selectNumber[random]);
    }

}
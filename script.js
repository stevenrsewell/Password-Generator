// Pseudo Code
// Click generate password button and see prompts for password criteria.
// First ask for password length between 8-128 characters
// Validate user selection
// Then ask if they want lowercase letters and validate user selection.
// Then ask if they want uppercase letters and validate user selection.
// Then ask if they want numbers and validate user selection.
// Then ask if they want special characters and validate user selection.
// Once user had made all their selections, a password generates either in an alert or written on the page using all the criteria the user selected.

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseValue;
var upperCaseValue;
var numbersValue;
var specialValue;
var lengthValue;


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password);
  passwordText.value = password;

  var copyBtn = document.querySelector("#copy");
  copyBtn.style.display = "block";

}

// Generating password with a function. Creates the prompts and confirms user must go through to create password
function generatePassword() {
  var length = getPasswordLength()
  var lowerCase = confirm("Do you want lowercase letters?");
  var upperCase = confirm("Do you want uppercase letters?");
  var numbers = confirm("Do you want Numbers?");
  var special = confirm("Do you want special characters?");
  var passwordValue = [];

  // Password length based on user prompt input

  function getPasswordLength() {
    var input = prompt("Choose your password length. It must be least 8 characters and no more than 128 characters");
    while (isNaN(input) || parseInt(input) > 128 || parseInt(input) < 8) {
      var input = prompt("Try again. It must be least 8 characters and no more than 128 characters");
    }
    return input
  }

  // console.log(passwordValue.length);
  // console.log(passwordValue.length === 0);
  generatePasswordOptions()
  while (passwordValue.length === 0) {
    alert("Please make a selection")
    var lowerCase = confirm("Do you want lowercase letters?");
    var upperCase = confirm("Do you want uppercase letters?");
    var numbers = confirm("Do you want Numbers?");
    var special = confirm("Do you want special characters?");
    generatePasswordOptions()
  }

  function generatePasswordOptions() {
    //Lower case values based on user confirm input
    lowerCaseValue = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    if (lowerCase) {
      lowerCaseValue.forEach(function (option) {
        passwordValue.push(option)
      })
    }

    // Uppercase values based on user input
    upperCaseValue = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    if (upperCase) {
      upperCaseValue.forEach(function (option) {
        passwordValue.push(option)
      })
    }

    // Numbers values based on user confirm input
    numbersValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (numbers) {
      numbersValue.forEach(function (option) {
        passwordValue.push(option)
      })
    }

    // Special Characters values based on user confirm input
    specialValue = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ":", ";", "'", "<", ">", "?", "/", "`", "~"];
    if (special) {
      specialValue.forEach(function (option) {
        passwordValue.push(option)
      })
    }

  }

  // Create for loop that loops through criteria and concatenates them randomly
  var newPassword = ""
  for (var i = 0; i < length; i++) {
    newPassword += passwordValue[Math.floor(Math.random() * passwordValue.length)];
  }

  return newPassword;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to copy password button
var copyBtn = document.querySelector("#copy");
copyBtn.addEventListener("click", copyPassword);

// Function to copy password to clipboard
function copyPassword() {
  var passwordText = document.querySelector("#password");
  passwordText.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
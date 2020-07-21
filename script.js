// Assignment Code


var numCharacters;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// Start Password variable values:
// Special characters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// lowercasebetical characters
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];

// finalPassword declared outside the if statement so they can be concatenated upon condition
var finalPassword;

// converts letters to uppercase
var toUpper = function (x) {
    return x.toUpperCase();
};
// creates a variable for uppercase conversion
upperCase = lowercase.map(toUpper);


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  numCharacters = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // First if statement for user validation
  if (!numCharacters) {
      alert("This value cannot be empty");
  } else if (numCharacters < 8 || numCharacters > 128) {
      // Validates user input
      // Start user input prompts
      numCharacters = parseInt(prompt("You must choose a number between 8 and 128"));

  } else {
      // Continues once user input is validated
      confirmNumber = confirm("Will this contain numbers?");
      confirmCharacter = confirm("Will this contain special characters?");
      confirmUppercase = confirm("Will this contain Uppercase letters?");
      confirmLowercase = confirm("Will this contain Lowercase letters?");
  };

  // Else all the options are negative, make the person choose at least 1 criteria
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      finalPassword = alert("You must choose at least 1 criteria to generate your password!");
  }
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

      finalPassword = character.concat(number, lowercase, upperCase);
    //  finalPassword = concatVar.replace(/ /g, "");
  }
  // Else if for 3 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
      finalPassword = character.concat(number, upperCase);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
      finalPassword = character.concat(number, lowercase);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
      finalPassword = character.concat(lowercase, upperCase);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
      finalPassword = number.concat(lowercase, upperCase);
  }
  // Else if for 2 positive options
  else if (confirmCharacter && confirmNumber) {
      finalPassword = character.concat(number);

  } else if (confirmCharacter && confirmLowercase) {
      finalPassword = character.concat(lowercase);

  } else if (confirmCharacter && confirmUppercase) {
      finalPassword = character.concat(upperCase);
  }
  else if (confirmLowercase && confirmNumber) {
      finalPassword = lowercase.concat(number);

  } else if (confirmLowercase && confirmUppercase) {
      finalPassword = lowercase.concat(upperCase);

  } else if (confirmNumber && confirmUppercase) {
      finalPassword = number.concat(upperCase);
  }
  // Else if for 1 positive option
  else if (confirmCharacter) {
      finalPassword = character;
  }
  else if (confirmNumber) {
      finalPassword = number;
  }
  else if (confirmLowercase) {
      finalPassword = lowercase;
  }
  // Created space variable to fill uppercase conversion
  else if (confirmUppercase) {
      finalPassword = space.concat(upperCase);
  };

  var password = [];

  for (var i = 0; i < numCharacters; i++) {
      var char = finalPassword[Math.floor(Math.random() * finalPassword.length)];
      password.push(char);
  }

  var generatedPWD = password.join("");
  document.getElementById("password").textContent = generatedPWD;

}

generateBtn.addEventListener("click", writePassword);

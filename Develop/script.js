// Assignment Code
var lCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialCharacters = ['!','"','#','$','%','&',"'",'(',')','*','+',',','-','/',':',';','<','=','>','?','@','[',']','^','_','`','{','}','|','~'];
var num = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];
var containsLowerCase = false;
var containsUpperCase = false;
var containsSpecialChar = false;
var containsNumeric = false;

//generate password button selector
var generateBtn = document.querySelector("#generate");

//ask user for password criteria
//ask for password length, this will equal how many characters should be generated. possible loop until length is equaled
function getPasswordOptions() {
  //getting the password length from the user
  var passwordLength = parseInt(prompt("How long would you like your password to be? Please pick a number between 8 and 128."));
  
    if (passwordLength !==NaN && passwordLength >= 8 && passwordLength <= 128) {
      containsLowerCase = confirm('Would you like lower case letters in your password?');
      containsUpperCase = confirm('Would you like upper case letters in your password?');
      containsSpecialChar = confirm('Would you like special characters in your password?');
      containsNumeric = confirm('Would you like numbers in your password?')
      console.log(containsLowerCase, containsUpperCase, containsSpecialChar, containsNumeric);
    } else {
        do {
    passwordLength = parseInt(prompt('Try Again, Please enter a NUMBER BETWEEN 8 and 128 in numeric form.'));
        }
        while (passwordLength > 128 || passwordLength < 8);
      containsLowerCase = confirm('Would you like lower case letters in your password.');
      containsUpperCase = confirm('Would you like upper case letters in your password?');
      containsSpecialChar = confirm('Would you like special characters in your password?');
      containsNumeric = confirm('Would you like numbers in your password?');
      console.log(containsLowerCase, containsUpperCase, containsSpecialChar, containsNumeric);

  }

  if(!containsNumeric && !containsSpecialChar && !containsUpperCase && !containsLowerCase) {
    alert("Please select at least one character type for your password.");
    return;
  }

  var passwordOptions = {
    length: passwordLength,
    upperCase: containsUpperCase,
    lowerCase: containsLowerCase,
    special: containsSpecialChar,
    numbers: containsNumeric
  };
    return passwordOptions;

      
};

function randomCharacters(array) {
  return array[Math.floor(Math.random() * array.length)];

}

function generatePassword() {
  var options = getPasswordOptions();
  var password = [];
  var possibleChar = [];
  var guaranteeChar = [];

  if(options.special) {
    possibleChar = possibleChar.concat(specialCharacters);
    guaranteeChar.push(randomCharacters(specialCharacters));
  }
  password.concat(guaranteeChar);

  if(options.upperCase) {
    possibleChar = possibleChar.concat(uCaseLetters);
    guaranteeChar.push(randomCharacters(uCaseLetters));
  }
  password.concat(guaranteeChar);

  if(options.lowerCase) {
    possibleChar = possibleChar.concat(lCaseLetters);
    guaranteeChar.push(randomCharacters(lCaseLetters));
  }
  password.concat(guaranteeChar);

  if(options.numbers) {
    possibleChar = possibleChar.concat(num);
    guaranteeChar.push(randomCharacters(num));
  }
  password.concat(guaranteeChar);

  for (var i=0; i<options.length; i++) {
    var charResult = randomCharacters(possibleChar);
    password.push(charResult);
  }
 console.log(password)
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //text area where the generated password is displayed 
  var passwordText = document.querySelector("#password");

  passwordText.innerHTML = password;
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

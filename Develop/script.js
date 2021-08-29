// Assignment Code
var lCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialCharacters = ['!','"','#','$','%','&',"'",'(',')','*','+',',','-','/',':',';','<','=','>','?','@','[',']','^','_','`','{','}','|','~'];

//random Number function
function randNum() {
  Math.floor(Math.random());
  return;
} 
//generate password button selector
var generateBtn = document.querySelector("#generate");

//ask user for password criteria
//ask for password length, this will equal how many characters should be generated. possible loop until length is equaled
function generatePassword() {
  var passwordLength = parseInt(prompt("How long would you like your password to be? Please pick a number between 8 and 128."));
  if (passwordLength !==NaN && passwordLength >= 8 && passwordLength <= 128) {
  return passwordLength;
  } else {
    passwordLength = parseInt(prompt('Please make your selection a NUMBER between 8 and 128.'));
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //text area where the generated password is displayed 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

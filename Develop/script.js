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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //text area where the generated password is displayed 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

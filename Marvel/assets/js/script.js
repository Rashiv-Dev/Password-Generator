// Assignment code here
var keys = {
    upperCaseChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCaseChars: "abcdefghijklmnopqrstuvwxyz",
    numberChars: "1234567890",
    specialChars: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
  }
  
  var generatePassword = function() {
    window.alert("Hello! Welcome to Marvel Password Generator. Let's Create a Password")
    
  
    /* START USER INPUT */
  
    // numberChar
    var numberChar = window.prompt("Choose amount of password characters between '8' and '128' by typing a number into the input field");
    if (numberChar < 8 || numberChar > 128) {
      window.alert("Enter valid input");
      return ""; 
    }
  
    //lowercase
    var useLowerCase = false
    var lowerCaseChar = window.prompt("Did you to include lowercase characters? Enter 'YES' or 'NO'");
    if (lowerCaseChar === "YES") {
      useLowerCase = true;
    } 
  // uppercase
    var useUpperCase = false
    var upperCaseChar = window.prompt("Did you to include uppercase characters? Enter 'YES' or 'NO'");
    if (upperCaseChar === "YES") {
      useUpperCase = true;
    }
  
    //Choose numeric characters
    var useNumeric = false
    var numericChar = window.prompt("Did you to include numeric characters? Enter 'YES' or 'NO'");
    if (numericChar === "YES") {
      useNumeric = true;
    }
  
    // Choose special characters
    var useSpecial = false
    var specialChar = window.prompt("Did you to include special characters? Enter 'YES' or 'NO'");
    if (specialChar === "YES") {
      useSpecial = true;
    }
  
    /* END USER INPUT */
    var randomPassword = "";
    var numCharacterTypes = 0
    var combineCharacters = "";
    
    if (useLowerCase) {
      combineCharacters = combineCharacters.concat(keys.lowerCaseChars);
      var randomIndex = Math.floor(Math.random() * keys.lowerCaseChars.length);
      randomPassword = randomPassword + keys.lowerCaseChars[randomIndex];
      numCharacterTypes++;
    }
  
    if (useUpperCase) {
      combineCharacters = combineCharacters.concat(keys.upperCaseChars);
      var randomIndex = Math.floor(Math.random() * keys.upperCaseChars.length);
      randomPassword = randomPassword + keys.upperCaseChars[randomIndex];
      numCharacterTypes++;
    }
  
    if (useNumeric) {
      combineCharacters = combineCharacters.concat(keys.numberChars);
      var randomIndex = Math.floor(Math.random() * keys.numberChars.length);
      randomPassword = randomPassword + keys.numberChars[randomIndex];
      numCharacterTypes++;
    }
  
    if (useSpecial) {
      combineCharacters = combineCharacters.concat(keys.specialChars);
      var randomIndex = Math.floor(Math.random() * keys.specialChars.length);
      randomPassword = randomPassword + keys.specialChars[randomIndex];
      numCharacterTypes++;
    }
    
    if (numCharacterTypes === 0) {
      window.alert("You must choose at least one valid character!");
      return "";
    }
  
    for(var i = 0; i < numberChar - numCharacterTypes; i++) {
      var randomIndex = Math.floor(Math.random() * combineCharacters.length);
      randomPassword = randomPassword + combineCharacters[randomIndex];
    }
    return randomPassword;
  }
  
  // Get references to the #generate element
  // links red button to the html button with id=generate
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  // "When you click the red button, writePassword() function will execute"
  generateBtn.addEventListener("click", writePassword);
  
// Assignment Code
function generatePassword(){
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_0123456789",
        password = "";

for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));

}
return password;
}



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    const passwordlength = prompt("how many characters do you want to use?")
    const charset = prompt("Click ok to add special characters")
    const lenght = prompt("Click ok to add numbers")

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


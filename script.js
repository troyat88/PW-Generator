// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var spcChar = ["!@#$%^&*"];
var numbers = ["1234567890"];
var upperCase = ["abcdefghijklmnopqrstuvwxyz"]
var pwTemp = [""]


function pwPrompts() {
  var length = parseInt(prompt('Plese set a password length between 8 and 128.'));
  if (length < 8 || length > 128) {
    confirm('You must choose a password length between 8 and 128.');
    return pwPrompts();
  } else if (!length){
    confirm('Length is a required parameter to create your password.')
    return pwPrompts()
  }else {
    var selectLower = confirm('Include lowercase letters?')
    var selectUpper = confirm('Include uppercase letters?')
    var selectNumber = confirm('Include numbers?')
    var selectSpecial = confirm('Include special characters?')
  }if (selectLower) {
    pwTemp.push(lowerCase);
  }if (selectUpper) {
    pwTemp.push(upperCase);
  }if (selectNumber) {
    pwTemp.push(numbers);
  }if (selectSpecial);{
    pwTemp.push(spcChar);
  } if (!selectLower & !selectNumber & ! selectUpper & !selectSpecial) {
    alert("Please slect at least one criteria.")
    return pwPrompts()
  }
  console.log(pwTemp);
  //return pwTemp
  console.log(pwTemp.join(""));

  var pwContent = pwTemp.join("");

  function generatePassword() {
    var pw = "";
    for (var i = 0; i < length; ++i) {
        pw += pwContent.charAt(Math.floor(Math.random() * pwContent.length ));
  }
    console.log(pw);
    var passwordText = document.querySelector("#password");

  passwordText.value = pw;
}

generatePassword();

}
generateBtn.addEventListener("click", pwPrompts);









// // Write password to the #password input
// function writePassword() {
//   pwPrompts(generatePassword())
//  // var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }



// // Add event listener to generate button




let $generateBtn = document.querySelector("#generate");/*links to button Id in html*/
//added a bunch of arrays to contain all required characters
const lowCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const UppCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numbers = ['1','2','3','4','5','6','7','8','9'];
const SpecialChar=['!','@','#','$','%','^','&','*'];
//linked all arrays together in one array
const All=[lowCase, UppCase, numbers, SpecialChar];

  function GenPass(){
    length = prompt("Please enter the desired length of password: ");
      if (length < 8 || length > 128) {
        alert("Please enter a valid length between 8 and 128.");
        GenPass();
  } else {
    LowerCase=confirm('would you like to include lower case letters?');
    UpperCase=confirm('Would you like to include Upper Case letters?');
    Num=confirm("Would you like to include numbers?");
    Special=confirm('Would you like to include special characters?');
  }
//user confirms what they would like to include in their password through promts 

let NewAll = [LowerCase, UpperCase, Num, Special];
let TotalAll = [] ;

for (i=0; i <NewAll.length; i++){
    if (NewAll[i]) {
        TotalAll=TotalAll.concat(All[i]);
    }
}

console.log(TotalAll);

Pass= ""
 for (i=0; i <length; i++){
    UserChar= TotalAll[Math.floor(Math.random() * TotalAll.length)];
    Pass=Pass.concat(UserChar);
 }
 return Pass;
}

function writePassword() {
  var password = GenPass();  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

$generateBtn.addEventListener("click", writePassword );



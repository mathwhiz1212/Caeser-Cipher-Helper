"use strict";
//Licensed under the Apache License 2.0. See license file for information.

function decipher() {
  var il = "0";
  var alphabet = "";
  var userInput = "";
  var shiftNum = "";
  var LetterReg = /^[A-Za-z]+$/;
  var numReg = /^\d+$/;
  var Answer = "";
  var spaceReg = /\s/;
  var inputLength = "";
  var inputSplit = "";
  var i = "0";
  
  //Get input
  
  var userInput = document.getElementById("userInput").value;
  var shiftNum = document.getElementById("shiftNum").value;
  
  //Checks if input is a letter. Uses a modified version of code found here: http://www.w3resource.com/javascript/form/all-letters-field.php
  
  if (userInput.match(LetterReg))
  {
    //Do nothing.
  }
  else
  {
    //Tells them to enter only letters with no caps, spaces or punctuation.
    
    alert("Please enter only letters, no caps, spaces or punctuation in message field.");
  }
  
  if (shiftNum.match(numReg))
  {
    //Do nothing.
  }
  else
  {
    //Tells them to enter only numbers.
    
    alert("Please enter only numbers in the shift field.");
  }
  
  //Gets input length.
  
  var inputLength = userInput.length;
  
  
  //Splits input into an array.
  
  var inputSplit = userInput.split("");
  
  //Code using Evan's idea and his fix.
  
  alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
  for (il = 0; il < inputLength; il++) {
    
    for (i = 0; i < 26; i++) {
      
      if (inputSplit[il] === alphabet[i]) {
        
        //Debug code from Evan is commented out.
        //console.log(inputSplit[il]);
        //console.log(i);
        
        var letter = Number(i) - Number(shiftNum);
        if (letter < 0) {
          var letter = letter + 26;
        }
        
        var Answer = Answer + alphabet[letter];
        break;
      }
    }
  }
  
  //Show result
  alert("Your secret message is " +  Answer);
  document.getElementById("Answer").innerHTML = "Your secret message is " + Answer;
  
}

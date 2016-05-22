'use strict';
//Licensed under the Apache License 2.0. See license file for information.

function sanitizeInputs(opts) {
  var letterReg = /^[A-Za-z]+$/;
  var numReg = /^\d+$/;

  //Checks if input is a letter. Uses a modified version of code found here: http://www.w3resource.com/javascript/form/all-letters-field.php

  // was userInput.match(letterReg)
  if (!letterReg.test(opts.input)) {
    //Tells them to enter only letters with no caps, spaces or punctuation.
    // TODO ignore non-alphas letters in the loop

    throw new Error("Please enter only letters, no caps, spaces or punctuation in message field.");
  }

  // was shiftNum.match(numReg)
  if (!numReg.test(opts.shift)) {
    //Tells them to enter only numbers.

    throw new Error("Please enter only numbers in the shift field.");
  }

  // NOTE
  // in JavaScript you must always use parseInt(str, radix)
  // where radix is the base - 2 (binary), 10 (decimal), 16 (hex), etc
  // DO NOT use Number()
  // it is sometimes wrong, for example: Number("017")
  // it should only be used if you know you're parsing scientific notation i.e. Number("2.7e6")
  return {
    input: opts.input
  , shift: parseInt(opts.shift, 10)
  };
}

function cipher(opts) {
  var userInput = opts.input;
  var shiftNum = opts.shift;

  var il;
  var alphabet = "";
  var answer = "";
  var inputLength = "";
  var inputSplit = "";
  var i;

  //Gets input length.
  inputLength = userInput.length;


  //Splits input into an array.
  inputSplit = userInput.split("");

  //Code using Evan's idea and his fix.
  alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  // TODO create alphabet table

  for (il = 0; il < inputLength; il += 1) {

    for (i = 0; i < alphabet.length; i += 1) {

      if (inputSplit[il] === alphabet[i]) {

        //Debug code from Evan is commented out.
        //console.log(inputSplit[il]);
        //console.log(i);

        var letter = i + shiftNum;
        // TODO use mod operator %
        if (letter > 25) {
          // letter = letter - 26;
          letter -= 26;
        }

        //answer = answer + alphabet[letter];
        answer += alphabet[letter];

        // we are done with the inner alphabet loop
        break;
      }
    }
  }

  return answer;
}

function runInBrowser() {
  var options = sanitizeInputs({
    input: document.getElementById("userInput").value
  , shift: document.getElementById("shiftNum").value
  });
  var cipherText;

  try {
    cipherText = cipher(options);
  } catch(e) {
    window.alert(e.message);
  }

  // Show result
  window.alert("Your secret message is " +  cipherText);
  document.getElementById("Answer").innerHTML = "Your secret message is " + cipherText;
}

function runInNode() {
  var answer = cipher({ input: "HelloWorldItIsSuchAGoodLongLongLongDayTodayDontYouThink", shift: 7 });

  console.log(answer);
}

runInNode();


"use strict";
//Licensed under the Apache License 2.0. See license file for information.

function frequency() {

  var userInput = "";
  //Letters regex
  var LetterReg = /^[A-Za-z]+$/;
  var i = "0";
  var Answer = "";
  var shiftNum = "";
  //whitespace regex
  var space = /\s/;
  var a = "0";
  var b = "0";
  var c = "0";
  var d = "0";
  var e = "0";
  var f = "0";
  var g = "0";
  var h = "0";
  var ii = "0";
  var j = "0";
  var k = "0";
  var l = "0";
  var m = "0";
  var n = "0";
  var o = "0";
  var p = "0";
  var q = "0";
  var r = "0";
  var s = "0";
  var t = "0";
  var u = "0";
  var v = "0";
  var w = "0";
  var x = "0";
  var y = "0";
  var z = "0";
  var anw = "";
  //Get input

  var userInput = document.getElementById("userInput").value;

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
//get length
var inputLength = userInput.length;



  //Splits input into an array.

  var inputSplit = userInput.split("");

  //Encipher

  for (i = 0; i < inputLength; i++) {

    if (inputSplit[i] === "a") {
      var a = Number(a) + 1;
    }
    if (inputSplit[i] === "b") {
      var b = Number(b) + 1;
    }
    if (inputSplit[i] === "c") {
      var c = Number(c) + 1;
    }
    if (inputSplit[i] === "d") {
      var d = Number(d) + 1;
    }
    if (inputSplit[i] === "e") {
      var e = Number(e) + 1;
    }
    if (inputSplit[i] === "f") {
      var f = Number(f) + 1;
    }
    if (inputSplit[i] === "g") {
      var g = Number(g) + 1;
    }
    if (inputSplit[i] === "h") {
      var h = Number(h) + 1;
    }
    if (inputSplit[i] === "i") {
      var ii = Number(ii) + 1;
    }
    if (inputSplit[i] === "j") {
      var j = Number(j) + 1;
    }
    if (inputSplit[i] === "k") {
      var k = Number(k) + 1;
    }
    if (inputSplit[i] === "l") {
      var l = Number(l) + 1;
    }
    if (inputSplit[i] === "m") {
      var m = Number(m) + 1;
    }
    if (inputSplit[i] === "n") {
      var n = Number(n) + 1;
    }
    if (inputSplit[i] === "o") {
      var o = Number(o) + 1;
    }
    if (inputSplit[i] === "p") {
      var p = Number(p) + 1;
    }
    if (inputSplit[i] === "q") {
      var q = Number(q) + 1;
    }
    if (inputSplit[i] === "r") {
      var r = Number(r) + 1;
    }
    if (inputSplit[i] === "s") {
      var s = Number(s) + 1;
    }
    if (inputSplit[i] === "t") {
      var t = Number(t) + 1;
    }
    if (inputSplit[i] === "u") {
      var u = Number(u) + 1;
    }
    if (inputSplit[i] === "v") {
      var v = Number(v) + 1;
    }
    if (inputSplit[i] === "w") {
      var w = Number(w) + 1;
    }
    if (inputSplit[i] === "x") {
      var x = Number(x) + 1;
    }
    if (inputSplit[i] === "y") {
      var y = Number(y) + 1;
    }
    if (inputSplit[i] === "z") {
      var z = Number(z) + 1;
    }
}
    //var Answer = Answer + letter;

var anw = [a,b,c,d,e,f,g,h,ii,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];

//Solution from stackoverflow.
var Freq = anw[0];
var letterFreq = 0;

for (var i = 1; i < anw.length; i++) {
  if (anw[i] > Freq) {
    //maxIndex shows whcih set in the array is the most frequent.
    letterFreq = i;
    Freq = anw[i];
  }
}
  //alert(letterFreq);
  //alert("Your secret message is " +  Answer);
  //document.getElementById("Answer").innerHTML = "Your secret message is " + Answer;

//for (i = 0; i < userInput.length; i++) {

  if (inputSplit[i] === "a") {
    var userInput = 1;
  }
  if (inputSplit[i] === "b") {
    var userInput = "2";
  }
  if (inputSplit[i] === "c") {
    var userInput = "3";
  }
  if (inputSplit[i] === "d") {
    var userInput = "4";
  }
  if (inputSplit[i] === "e") {
    var userInput = "5";
  }
  if (inputSplit[i] === "f") {
    var userInput = "6";
  }
  if (inputSplit[i] === "g") {
    var userInput = "7";
  }
  if (inputSplit[i] === "h") {
    var userInput = "8";
  }
  if (inputSplit[i] === "i") {
    var userInput = "9";
  }
  if (inputSplit[i] === "j") {
    var userInput = "10";
  }
  if (inputSplit[i] === "k") {
    var userInput = "11";
  }
  if (inputSplit[i] === "l") {
    var userInput = "12";
  }
  if (inputSplit[i] === "m") {
    var userInput = "13";
  }
  if (inputSplit[i] === "n") {
    var userInput = "14";
  }
  if (inputSplit[i] === "o") {
    var userInput = "15";
  }
  if (inputSplit[i] === "p") {
    var userInput = "16";
  }
  if (inputSplit[i] === "q") {
    var userInput = "17";
  }
  if (inputSplit[i] === "r") {
    var userInput = "18";
  }
  if (inputSplit[i] === "s") {
    var userInput = "19";
  }
  if (inputSplit[i] === "t") {
    var userInput = "20";
  }
  if (inputSplit[i] === "u") {
    var userInput = "21";
  }
  if (inputSplit[i] === "v") {
    var userInput = "22";
  }
  if (inputSplit[i] === "w") {
    var userInput = "23";
  }
  if (inputSplit[i] === "x") {
    var userInput = "24";
  }
  if (inputSplit[i] === "y") {
    var userInput = "25";
  }
  if (inputSplit[i] === "z") {
    var userInput = "26";
  }
 //alert(letterFreq);
  var shiftNum = letterFreq - 4;
  //var shiftNum = Number(userInput) - lettersh;
//alert(letterFreq)
//alert(userInput);
 //alert(shiftNum);
  //var letter = userInput - shiftNum;
//  alert(letter);
//var letter =  ;
//alert(shiftNum);
//var letter = shiftNum;
//alert(letter);
  if (shiftNum < 1) {
    var shiftNum = shiftNum + 26;
  }
  //alert(letter);
  alert("The shift is " +  shiftNum);
  document.getElementById("Answer").innerHTML = "The shift is " +  shiftNum;
  // if (letter === 1) {
  //   var letter = "a";
  // }
  // if (letter === 2) {
  //   var letter = "b";
  // }
  // if (letter === 3) {
  //   var letter = "c";
  // }
  // if (letter === 4) {
  //   var letter = "d";
  // }
  // if (letter === 5) {
  //   var letter = "e";
  // }
  // if (letter === 6) {
  //   var letter = "f";
  // }
  // if (letter === 7) {
  //   var letter = "g";
  // }
  // if (letter === 8) {
  //   var letter = "h";
  // }
  // if (letter === 9) {
  //   var letter = "i";
  // }
  // if (letter === 10) {
  //   var letter = "j";
  // }
  // if (letter === 11) {
  //   var letter = "k";
  // }
  // if (letter === 12) {
  //   var letter = "l";
  // }
  // if (letter === 13) {
  //   var letter = "m";
  // }
  // if (letter === 14) {
  //   var letter = "n";
  // }
  // if (letter === 15) {
  //   var letter = "o";
  // }
  // if (letter === 16) {
  //   var letter = "p";
  // }
  // if (letter === 17) {
  //   var letter = "q";
  // }
  // if (letter === 18) {
  //   var letter = "r";
  // }
  // if (letter === 19) {
  //   var letter = "s";
  // }
  // if (letter === 20) {
  //   var letter = "t";
  // }
  // if (letter === 21) {
  //   var letter = "u";
  // }
  // if (letter === 22) {
  //   var letter = "v";
  // }
  // if (letter === 23) {
  //   var letter = "w";
  // }
  // if (letter === 24) {
  //   var letter = "x";
  // }
  // if (letter === 25) {
  //   var letter = "y";
  // }
  // if (letter === 26) {
  //   var letter = "z";
  // }
//alert(letter);
}
//}

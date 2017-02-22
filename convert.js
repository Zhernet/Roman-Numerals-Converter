"use strict";

function convertToRoman(number) {
  function convertDigitToRoman(number, inc, middle, biggest) {
    switch(number) {
      case 1 : return inc;
      case 2 : return inc + inc;
      case 3 : return inc + inc + inc;
      case 4 : return inc + middle;
      case 5 : return middle;
      case 6 : return middle + inc;
      case 7 : return middle + inc + inc;
      case 8 : return middle + inc + inc + inc;
      case 9 : return inc + biggest;
    }
    return '';
  }

  if (number > 0 && number < 4000) { 
    return convertDigitToRoman(Math.floor(number/1000) % 10, 'M', '', '')
      + convertDigitToRoman(Math.floor(number/100) % 10, 'C', 'D', 'M')
      + convertDigitToRoman(Math.floor(number/10) % 10, 'X', 'L', 'C')
      + convertDigitToRoman(number % 10 , 'I', 'V', 'X');
    } else {
      return '';
    }
}

module.exports.convertToRoman = convertToRoman;
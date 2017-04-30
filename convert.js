"use strict";

const EMPTY = '';
const INVALID_INPUT = 'invalid input';

function isBlankInput(input) {
  if (input === undefined) {
    return true;
  }
  let regex = new RegExp("^\\s*$");
  return regex.test(input);
}

function convertToRoman(number) {
  function isInvalidInput(number) {
    let regex = new RegExp("^[0-9]*$");
    return !(regex.test(number) && (number > 0) && (number < 4000));
  };

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
  
  if (isBlankInput(number)) {
    return EMPTY;
  } else if (isInvalidInput(number)) {
    return INVALID_INPUT;
  } else {
    return convertDigitToRoman(Math.floor(number/1000) % 10, 'M', '', '')
      + convertDigitToRoman(Math.floor(number/100) % 10, 'C', 'D', 'M')
      + convertDigitToRoman(Math.floor(number/10) % 10, 'X', 'L', 'C')
      + convertDigitToRoman(number % 10 , 'I', 'V', 'X');
  }
}

function isRomanNumber(input) {
  let regex = new RegExp("^[IVXLCDM]+$", "i");
  return regex.test(input);
};      

function convertToNumber(roman) {
  function convertLetterToNumber(letter) {
    if (letter === 'I') {
      return 1;
    } else if (letter === 'V') {
      return 5;
    } else if (letter === 'X') {
      return 10;
    } else if (letter === 'L') {
      return 50;
    } else if (letter === 'C') {
      return 100;
    } else if (letter === 'D') {
      return 500;
    } else if (letter === 'M') {
      return 1000;
    } else {
      return EMPTY;
    }
  };  

  if (isBlankInput(roman)) {
      return EMPTY;
  }
  
  if (!isRomanNumber(roman)) {
    return INVALID_INPUT;
  }

  try {    
    let letters = roman.toUpperCase();
    let result = 0;
    let last = 0;
    for (let i = letters.length - 1; i >= 0; i--) {
      let current = convertLetterToNumber(letters[i]);
      if (current < last) {
        result -= current;
      } else {
        result += current;
      last = current;
      }      
    }
    return result;
  } catch(err) {
    console.log(err);
    return err;
  }  
}

function convert(input) {
  if (isRomanNumber(input)) {
    return convertToNumber(input);
  } else {
    return convertToRoman(input);
  }
}

module.exports.convertToRoman = convertToRoman;
module.exports.convertToNumber = convertToNumber;
module.exports.convert = convert;
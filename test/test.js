var assert = require('assert');
var convertToRoman = require('./../server/convert').convertToRoman;
var convertToNumber = require('./../server/convert').convertToNumber;

describe('convert to roman numeral', function() {
  describe('convert single digit to roman numeral', function() {
    it('1 should return I', function() {
      assert.equal('I', convertToRoman(1));
    });
    it('2 should return II', function() {
      assert.equal('II', convertToRoman(2));
    });
    it('3 should return III', function() {
      assert.equal('III', convertToRoman(3));
    });
    it('4 should return IV', function() {
      assert.equal('IV', convertToRoman(4));
    });
    it('5 should return V', function() {
      assert.equal('V', convertToRoman(5));
    });
    it('6 should return VI', function() {
      assert.equal('VI', convertToRoman(6));
    });
    it('7 should return VII', function() {
      assert.equal('VII', convertToRoman(7));
    });
    it('8 should return VIII', function() {
      assert.equal('VIII', convertToRoman(8));
    });
    it('9 should return IX', function() {
      assert.equal('IX', convertToRoman(9));
    });
  });

  describe('convert number between 10 and 99 to roman numeral', function() {
    it('10 should return X', function() {
      assert.equal('X', convertToRoman(10));
    });
    it('40 should return XL', function() {
      assert.equal('XL', convertToRoman(40));
    });
    it('42 should return XLII', function() {
      assert.equal('XLII', convertToRoman(42));
    });
    it('99 should return XCIX', function() {
      assert.equal('XCIX', convertToRoman(99));
    });
  });

  describe('convert number between 100 and 999 to roman numeral', function() {
    it('100 should return C', function() {
      assert.equal('C', convertToRoman(100));
    });
    it('40 should return XL', function() {
      assert.equal('XL', convertToRoman(40));
    });
    it('42 should return XLII', function() {
      assert.equal('XLII', convertToRoman(42));
    });
    it('98 should return XCVIII', function() {
      assert.equal('XCVIII', convertToRoman(98));
    });
  });

  describe('convert number between 1000 and 3999 to roman numeral', function() {
    it('1000 should return M', function() {
      assert.equal('M', convertToRoman(1000));
    });
    it('1247 should return MCCXLVII', function() {
      assert.equal('MCCXLVII', convertToRoman(1247));
    });
    it('1789 should return MDCCLXXXIX', function() {
      assert.equal('MDCCLXXXIX', convertToRoman(1789));
    });
    it('1997 should return MCMXCVII', function() {
      assert.equal('MCMXCVII', convertToRoman(1997));
    });
    it('3999 should return MMMCMXCIX', function() {
      assert.equal('MMMCMXCIX', convertToRoman(3999));
    });
  });

  describe('convert empty input to roman numeral', function() {
    it('empty should return empty', function() {
      assert.equal('', convertToRoman());
    });
    it('no character should return empty', function() {
      assert.equal('', convertToRoman(''));
    });
    it('several spaces should return empty', function() {
      assert.equal('', convertToRoman('    '));
    });
  });

  describe('convert invalid number to roman numeral', function() {
    it('0 should return "invalid input" error', function() {
      assert.equal('invalid input', convertToRoman(0));
    });
    it('-1 should return "invalid input" error', function() {
      assert.equal('invalid input', convertToRoman(-1));
    });    
    it('97.5 should return "invalid input" error', function() {
      assert.equal('invalid input', convertToRoman(97.5));
    });
    it('4000 should return "invalid input" error', function() {
      assert.equal('invalid input', convertToRoman(4000));
    });
    it('12345 should return "invalid input" error', function() {
      assert.equal('invalid input', convertToRoman(12345));
    });
    it('array of numbers should return "invalid input" error', function() {
      assert.equal('invalid input', convertToRoman([1, 2, 3]));
    });
    it('text should return "invalid input" error', function() {
      assert.equal('invalid input', convertToRoman('this is a text'));
    });
    it('roman numeral should return "invalid input" error', function() {
      assert.equal('invalid input', convertToRoman('MCMXCVII'));
    });
  });
});

describe('convertToNumber', function() {
  describe('convert roman numeral to number', function() {
    it('I should return 1', function() {
      assert.equal(1, convertToNumber('I'));
    });
    it('V should return 5', function() {
      assert.equal(5, convertToNumber('V'));
    });
    it('X should return 10', function() {
      assert.equal(10, convertToNumber('X'));
    });
    it('L should return 50', function() {
      assert.equal(50, convertToNumber('L'));
    });
    it('C should return 100', function() {
      assert.equal(100, convertToNumber('C'));
    });
    it('D should return 500', function() {
      assert.equal(500, convertToNumber('D'));
    });
    it('M should return 1000', function() {
      assert.equal(1000, convertToNumber('M'));
    });
  });

  describe('convert roman letter to single digit', function() {
    it('II should return 2', function() {
      assert.equal(2, convertToNumber('II'));
    });
    it('III should return 3', function() {
      assert.equal(3, convertToNumber('III'));
    });
    it('IV should return 4', function() {
      assert.equal(4, convertToNumber('IV'));
    });
    it('IIII should return 4', function() {
      assert.equal(4, convertToNumber('IIII'));
    });
    it('VI should return 6', function() {
      assert.equal(6, convertToNumber('VI'));
    });
    it('VII should return 7', function() {
      assert.equal(7, convertToNumber('VII'));
    });
    it('VIII should return 8', function() {
      assert.equal(8, convertToNumber('VIII'));
    });
    it('IX should return 9', function() {
      assert.equal(9, convertToNumber('IX'));
    }); 
    it('VIIII should return 9', function() {
      assert.equal(9, convertToNumber('VIIII'));
    }); 
  });

  describe('convert roman numeral to number', function() {
    it('XLIV should return 44', function() {
      assert.equal(44, convertToNumber('XLIV'));
    });
    it('MMMCMXCIX should return 3999', function() {
      assert.equal(3999, convertToNumber('MMMCMXCIX'));
    });
    it('XM should return 990', function() {
      assert.equal(990, convertToNumber('XM'));
    });
    it('IIM should return 998', function() {
      assert.equal(998, convertToNumber('IIM'));
    });
  });

  describe('convert lower case roman to number', function() {
    it('dccxliv should return 744', function() {
      assert.equal(744, convertToNumber('dccxliv'));
    });
    it('DCcxLiV should return 744', function() {
      assert.equal(744, convertToNumber('DCcxLiV'));
    });
  });

  describe('convert empty input to number', function() {
    it('empty should return empty', function() {
      assert.equal('', convertToNumber());
    });
    it('no character should return empty', function() {
      assert.equal('', convertToNumber(''));
    });
    it('several spaces should return empty', function() {
      assert.equal('', convertToNumber('    '));
    });
  });

  describe('convert invalid input to number', function() {
    it('invalid single letter should return "invalid input" error', function() {
      assert.equal('invalid input', convertToNumber('J'));
    });
    it('roman number with 1 invalid letter should return "invalid input" error', function() {
      assert.equal('invalid input', convertToNumber('MCMJXII'));
    }); 
  });
});
var assert = require('assert');
var convertToRoman = require('./../convert').convertToRoman;

describe('convert single digit to roman number', () => {
  it('1 should return I', () => {
    assert.equal('I', convertToRoman(1));
  });
  it('2 should return II', () => {
    assert.equal('II', convertToRoman(2));
  });
  it('3 should return III', () => {
    assert.equal('III', convertToRoman(3));
  });
  it('4 should return IV', () => {
    assert.equal('IV', convertToRoman(4));
  });
  it('5 should return V', () => {
    assert.equal('V', convertToRoman(5));
  });
  it('6 should return VI', () => {
    assert.equal('VI', convertToRoman(6));
  });
  it('7 should return VII', () => {
    assert.equal('VII', convertToRoman(7));
  });
  it('8 should return VIII', () => {
    assert.equal('VIII', convertToRoman(8));
  });
  it('9 should return IX', () => {
    assert.equal('IX', convertToRoman(9));
  });
});

describe('convert number between 10 and 99 to roman number', () => {
  it('10 should return X', () => {
    assert.equal('X', convertToRoman(10));
  });
  it('40 should return XL', () => {
    assert.equal('XL', convertToRoman(40));
  });
  it('42 should return XLII', () => {
    assert.equal('XLII', convertToRoman(42));
  });
  it('99 should return XCIX', () => {
    assert.equal('XCIX', convertToRoman(99));
  });
});

describe('convert number between 100 and 999 to roman number', () => {
  it('100 should return C', () => {
    assert.equal('C', convertToRoman(100));
  });
  it('40 should return XL', () => {
    assert.equal('XL', convertToRoman(40));
  });
  it('42 should return XLII', () => {
    assert.equal('XLII', convertToRoman(42));
  });
  it('98 should return XCVIII', () => {
    assert.equal('XCVIII', convertToRoman(98));
  });
});

describe('convert number between 1000 and 3999 to roman number', () => {
  it('1000 should return M', () => {
    assert.equal('M', convertToRoman(1000));
  });
  it('1247 should return MCCXLVII', () => {
    assert.equal('MCCXLVII', convertToRoman(1247));
  });
  it('1789 should return MDCCLXXXIX', () => {
    assert.equal('MDCCLXXXIX', convertToRoman(1789));
  });
  it('1997 should return MCMXCVII', () => {
    assert.equal('MCMXCVII', convertToRoman(1997));
  });
  it('3999 should return MMMCMXCIX', () => {
    assert.equal('MMMCMXCIX', convertToRoman(3999));
  });
});

describe('convert invalid number to roman number', () => {
  it('empty should return empty', () => {
    assert.equal('', convertToRoman());
  });
  it('empty string should return empty', () => {
    assert.equal('', convertToRoman(''));
  });
  it('0 should return empty', () => {
    assert.equal('', convertToRoman(0));
  });
  it('-1 should return empty', () => {
    assert.equal('', convertToRoman(-1));
  });
  it('4000 should return empty', () => {
    assert.equal('', convertToRoman(4000));
  });
  it('12345 should return empty', () => {
    assert.equal('', convertToRoman(12345));
  });
  it('array of numbers should return empty', () => {
    assert.equal('', convertToRoman([1, 2, 3]));
  });
  it('text should return empty', () => {
    assert.equal('', convertToRoman('this is a text'));
  });
  it('roman number should return empty', () => {
    assert.equal('', convertToRoman('MCMXCVII'));
  });
});
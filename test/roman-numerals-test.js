const expect = require('chai').expect;
const romanNumeral = require('../src/roman-numerals');

describe('Roman Numerals Test', function () {
  describe('Numerals at ones place only (1 - 10)', function () {
    it('should convert lower half addition numerals', function () {
      expect(romanNumeral(1)).to.be.equal('I');
      expect(romanNumeral(3)).to.be.equal('III');
    });

    it('should convert base numerals', function () {
      expect(romanNumeral(5)).to.be.equal('V');
      expect(romanNumeral(10)).to.be.equal('X');
    });

    it('should convert upper half addition numerals', function () {
      expect(romanNumeral(6)).to.be.equal('VI');
      expect(romanNumeral(7)).to.be.equal('VII');
    });

    it('should convert subtraction numerals', function () {
      expect(romanNumeral(4)).to.be.equal('IV');
      expect(romanNumeral(9)).to.be.equal('IX');
    });
  });

  describe('Numerals at tens place only (20, 30 ... 90, 100)', function () {
    it('should convert lower half addition numerals', function () {
      expect(romanNumeral(20)).to.be.equal('XX');
      expect(romanNumeral(30)).to.be.equal('XXX');
    });

    it('should convert base numerals', function () {
      expect(romanNumeral(50)).to.be.equal('L');
      expect(romanNumeral(100)).to.be.equal('C');
    });

    it('should convert upper half addition numerals', function () {
      expect(romanNumeral(60)).to.be.equal('LX');
      expect(romanNumeral(70)).to.be.equal('LXX');
    });

    it('should convert subtraction numerals', function () {
      expect(romanNumeral(40)).to.be.equal('XL');
      expect(romanNumeral(90)).to.be.equal('XC');
    });
  });

  describe('Numerals at hundreds place only (100, 200 ... 900, 1000)', function () {
    it('should convert base numerals', function () {
      expect(romanNumeral(500)).to.be.equal('D');
      expect(romanNumeral(1000)).to.be.equal('M');
    });

    it('should convert addition numerals', function () {
      expect(romanNumeral(200)).to.be.equal('CC');
      expect(romanNumeral(800)).to.be.equal('DCCC');
    });

    it('should convert subtraction numerals', function () {
      expect(romanNumeral(400)).to.be.equal('CD');
      expect(romanNumeral(900)).to.be.equal('CM');
    });
  });

  describe('Numerals at thousands place only (1000, 2000 ... 3000)', function () {
    it('should convert addition numerals', function () {
      expect(romanNumeral(2000)).to.be.equal('MM');
    });
  });

  describe('Numerals with mixed places', function () {
    it('should convert numerals with mixed places', function () {
      expect(romanNumeral(46)).to.be.equal('XLVI');
      expect(romanNumeral(949)).to.be.equal('CMXLIX');
      expect(romanNumeral(3892)).to.be.equal('MMMDCCCXCII');
    });
  });
});
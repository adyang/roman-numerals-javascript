const symbolGroups = [
  {unit: 'I', half: 'V', full: 'X'},
  {unit: 'X', half: 'L', full: 'C'},
  {unit: 'C', half: 'D', full: 'M'},
  {unit: 'M'}
];

module.exports = function romanNumeral(num) {
  return Array.from(String(num)).reverse()
    .map(d => parseInt(d))
    .map((d, idx) => toRomanNumeral(d, symbolGroups[idx]))
    .reduce((acc, r) => r + acc, '');
};

function toRomanNumeral(digit, symbolGroup) {
  if (isSubtraction(digit))
    return subtractionNumeral(digit, symbolGroup);
  else
    return additionNumeral(digit, symbolGroup);
}

function isSubtraction(digit) {
  return digit === 4 || digit === 9;
}

function subtractionNumeral(digit, symbolGroup) {
  return symbolGroup.unit + nearestHighSymbol(digit, symbolGroup);
}

function nearestHighSymbol(digit, symbolGroup) {
  return digit === 4 ? symbolGroup.half : symbolGroup.full;
}

function additionNumeral(digit, symbolGroup) {
  if (digit <= 3)
    return symbolGroup.unit.repeat(digit);
  else {
    return symbolGroup.half + symbolGroup.unit.repeat(digit - 5);
  }
}

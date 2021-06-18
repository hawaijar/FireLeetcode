/*
Convert a non-negative integer num to its English words representation.
```
Input: num = 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
```
 */

const oneDigit = (x) => {
  switch (x) {
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    default:
      return "";
  }
};
const elevenToNineteen = (x) => {
  switch (x) {
    case 11:
      return "Eleven";
    case 12:
      return "Twelve";
    case 13:
      return "Thirteen";
    case 14:
      return "Fourteen";
    case 15:
      return "Fifteen";
    case 16:
      return "Sixteen";
    case 17:
      return "Seventeen";
    case 18:
      return "Eighteen";
    case 19:
      return "Nineteen";
    default:
      return "";
  }
};
const tens = (x) => {
  switch (x) {
    case 10:
      return "Ten";
    case 20:
      return "Twenty";
    case 30:
      return "Thirty";
    case 40:
      return "Forty";
    case 50:
      return "Fifty";
    case 60:
      return "Sixty";
    case 70:
      return "Seventy";
    case 80:
      return "Eighty";
    case 90:
      return "Ninety";
    default:
      return "";
  }
};

const twoDigits = (x) => {
	if(x === 0) return ""
  if (x % 10 === 0) {
    return tens(x);
  }
  if (x >= 11 && x <= 19) {
    return elevenToNineteen(x);
  }
  const q = Math.floor(x / 10);
  const r = x % 10;

  if (r !== 0) {
    return tens(q * 10) + " " + oneDigit(r);
  }
  return tens(q * 10);
};
const threeDigits = (x) => {
  const q = Math.floor(x / 100);
  const r = x % 100;
  // 500 case
  if (r === 0) {
    return oneDigit(q) + " Hundred";
  }
  // 045 case
  if (q === 0) {
    return twoDigits(r);
  }
  // 523 case
  return oneDigit(q) + " Hundred " + twoDigits(r);
};
const BILLION = 1000000000;
const MILLION = 1000000;
const THOUSAND = 1000;

function numberToWords(num) {
  // base case
  if (num === 0) return "Zero";
  const billion = Math.floor(num / BILLION);
  const billionRemainder = num % BILLION;
  const million = Math.floor(billionRemainder / MILLION);
  const millionRemainder = billionRemainder % MILLION;
  const thousand = Math.floor(millionRemainder / THOUSAND);
  const thousandRemainder = millionRemainder % THOUSAND;

  let result = "";

  if (billion !== 0) {
    result += threeDigits(billion) + " Billion";
  }
  if (million !== 0) {
    if (result !== "") {
      result += " ";
    }
    result += threeDigits(million) + " Million";
  }
  if (thousand !== 0) {
    if (result !== "") {
      result += " ";
    }
    result += threeDigits(thousand) + " Thousand";
  }
  if (thousandRemainder !== 0) {
    if (result !== "") {
      result += " ";
    }
    result += threeDigits(thousandRemainder);
  }
  result = result.trim();
  const temp = result.split(' ');
  const final = temp.reduce((acc, elm) => {
  	if(elm === '') return acc;
  	acc += elm + ' ';
  	return acc;
  }, '')
  return final.trim();
}

console.log(numberToWords(1234567));

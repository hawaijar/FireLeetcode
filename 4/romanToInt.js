const ROMAN_MAPPING = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}
const OTHERS = {
  'IV': 4,
  'IX': 9,
  'XL': 40,
  'XC': 90,
  'CD': 400,
  'CM': 900
}
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if(s.length === 1 && s in ROMAN_MAPPING) return ROMAN_MAPPING[s]
    if(s.length === 2 && s in OTHERS) return OTHERS[s]
    let result = 0;
    let i = 0;
    while(i < s.length) {
        if(i === s.length - 1) {
            result += ROMAN_MAPPING[s[i]];
            break;
        }
        let current = ROMAN_MAPPING[s[i]];
        let next = ROMAN_MAPPING[s[i + 1]];
        if(current >= next) {
            result += current;
            i += 1;
        }
        else {
            result += (next - current);
            i += 2;
        }
        
    }
    return result;
};

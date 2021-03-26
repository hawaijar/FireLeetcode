const ROMAN_MAPPING = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
    4: 'IV',
    9: 'IX',
    40: 'XL',
    90: 'XC',
    400: 'CD',
    900: 'CM'
}

const ROMAN_KEYS = Object.keys(ROMAN_MAPPING).map(x => Number(x));
console.log(ROMAN_KEYS)
let result = [];

function convertRoman(num, result) {
    // base case
    if(ROMAN_KEYS.includes(num)) {
        result.push(ROMAN_MAPPING[num]);
    }
    
    else {
        if(num > 1000) {
            const diff = num - 1000;
            result.push('M');
            convertRoman(diff, result);
        }
        else {
            for(let i = 0; i < ROMAN_KEYS.length; i++) {
            const key = ROMAN_KEYS[i];
                if(num < key) {
                    const previousKey = ROMAN_KEYS[i - 1];
                    const diff = num - previousKey;

                    result.push(ROMAN_MAPPING[previousKey]);
                    convertRoman(diff, result);
                    break;
                }
            }
        }
        
    }
}

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const result = [];
    convertRoman(num, result);
    return result.join('');
};

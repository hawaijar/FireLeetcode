## 12. Integer to Roman
[Leetcode link](https://leetcode.com/problems/integer-to-roman/)

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

For example, 2 is written as II in Roman numeral, just two one's added together. 
12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

<hr/>

### What is my approach in solving this problem?

First define all 13 alphabets of Roman numeric system -
```
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
```
The idea is to use recursion and keep on reducing the problem into simpler problems.

Take an example, say 1994 to be converted into Roman numeral.

case 1: If the number is greater than 1000, substract 1000 from the number and try solving the substracted result as follows -

```
  function convertRoman(num, result) {
     ...
     ...
     if(num > 1000) {
            const diff = num - 1000;
            result.push('M');
            convertRoman(diff, result);
     }
 ```
 So, the roman numeral 'M' is pushed to the result variable
 
```
result = ['M']
```
 diff = 1994 - 1000 = 994
 Then we again call convertRoman as convertRoman(994, result)
 
 case 2: If the number is less than 1000, iterate the above Roman alphabets list and find the number, X that's less than the given number.
 Then, substract X from the number and keep on checking the remaining substracted value as shown below -
 
 ```
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
 ```
 so in the above for loop, we will get -
 
 diff = 994 - 900 = 94
 So, the roman numeral 'CM' (corresponding to key = 900) is pushed to the result variable
 Now, the result is -
 ```
 result = ['M', 'CM']
 ```
 
 Then we call convertRoman(94, result)
 Now, diff = 94 - 90 = 4
 So, the roman numeral 'XC' (corresponding to key = 90) is pushed to the result variable
 Now, the result is -
 ```
 result = ['M', 'CM', 'XC']
 ```
 Then we call convertRoman(4, result)
 
 And finally we push 'IV' corresponding to Roman numeral 4 is added to the result as shown below -
 
 ```
 result = ['M', 'CM', 'XC', 'IV']
 ```
 And we return the join(result) = 'MCMXCIV' as a final result.
 
 [Solution code](https://github.com/hawaijar/FireLeetcode/tree/master/day:101)

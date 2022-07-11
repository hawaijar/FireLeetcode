const LETTER_TO_ASCII: { [key: string]: number } = {};
const ASCII_TO_LETTER: { [key: number]: string } = {};
const codePointOfSmallA = "a".charCodeAt(0);
for (let i = codePointOfSmallA; i < codePointOfSmallA + 26; i++) {
  LETTER_TO_ASCII[String.fromCharCode(i)] = i - codePointOfSmallA;
  ASCII_TO_LETTER[i - codePointOfSmallA] = String.fromCharCode(i);
}

class CaesarCipher {
  solution(string: string, key: number): string {
    // base case
    if (string.length === 0 || key < 0) return "";
    if (key === 0) return string;

    const result: string[] = [];
    for (const letter of string) {
      const index = (LETTER_TO_ASCII[letter] + key) % 26;
      const newLetter = ASCII_TO_LETTER[index];
      result.push(newLetter);
    }

    return result.join("");
  }
}

// testing

const cObj = new CaesarCipher();
const x = cObj.solution("abc", 3);
console.log(x);

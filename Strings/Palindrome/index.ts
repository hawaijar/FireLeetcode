class Palindrome {
  isPalindrome(string: string): boolean {
    // base cases
    if (string.length <= 1) {
      return true;
    }
    // two pointers solution
    let [left, right] = [0, string.length - 1];

    while (left <= right) {
      if (string[left] !== string[right]) {
        return false;
      }
      left += 1;
      right -= 1;
    }
    return true;
  }
}

// Code a function, isPalindrome(s), that takes in a string ("s") and returns true/false if it's a palindrome.

const tests = [
  "A man, a plan, a canal: Panama",
  "race a car",
  " "
];

const isPalindrome = function(s) {
  const transformedS = s.replace(/[^a-zA-Z\d]/gi, "").toLowerCase();
  const reversedS = transformedS.split("").reverse().join("");

  return reversedS === transformedS;
};

console.log(isPalindrome(tests[0])); // true
console.log(isPalindrome(tests[1])); // false
console.log(isPalindrome(tests[2])); // true

const isPalindromeVariant = function(s) {
  const transformedS = s.replace(/[^a-zA-Z\d]/gi, "").toLowerCase();
  let i = 0;
  let j = transformedS.length - 1;
  while (i < j) {
    if (transformedS[i] !== transformedS[j]) {
      return false;
    } else {
      i++;
      j--;
    }
  }
  return true;
}

console.log(isPalindromeVariant(tests[0])); // true
console.log(isPalindromeVariant(tests[1])); // false
console.log(isPalindromeVariant(tests[2])); // true

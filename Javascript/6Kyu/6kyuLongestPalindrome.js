function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  // length of palindrome = right - left - 1
  return right - left - 1;
}

function longestPalindrome(s) {
  if (s.length === 0) return 0;

  let maxLength = 1;

  for (let i = 0; i < s.length; i++) {
    // odd length
    let len1 = expandAroundCenter(s, i, i);
    // even length
    let len2 = expandAroundCenter(s, i, i + 1);
    
    maxLength = Math.max(maxLength, len1, len2);
  }

  return maxLength;
}

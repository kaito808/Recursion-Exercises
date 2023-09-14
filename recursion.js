
/** product: calculate the product of an array of numbers. */
function product(nums) {
  if (nums.length === 0) {
    return 1; // Base case: the product of an empty array is 1.
  } else {
    const [first, ...rest] = nums;
    return first * product(rest); // Recursive case: multiply the first number with the product of the rest.
  }
}

/** longest: return the length of the longest word in an array of words. */
function longest(words) {
  if (words.length === 0) {
    return 0; // Base case: the length of the longest word in an empty array is 0.
  } else {
    const [first, ...rest] = words;
    const restLongest = longest(rest); // Recursive case: find the length of the longest word in the rest of the array.
    return Math.max(first.length, restLongest); // Return the maximum of the length of the first word and the length of the longest word in the rest.
  }
}

/** everyOther: return a string with every other letter. */
function everyOther(str) {
  if (str.length <= 1) {
    return str; // Base case: if the string has 0 or 1 character, return the string itself.
  } else {
    const [first, , ...rest] = str;
    return first + everyOther(rest.join('')); // Recursive case: take the first character and concatenate it with everyOther of the rest of the string.
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str) {
  if (str.length <= 1) {
    return true; // Base case: if the string has 0 or 1 character, it's a palindrome.
  } else {
    const [first, ...rest] = str;
    const last = rest.pop();
    return first === last && isPalindrome(rest.join('')); // Recursive case: compare the first and last characters and check if the rest is a palindrome.
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
function findIndex(arr, val, index = 0) {
  if (index >= arr.length) {
    return -1; // Base case: val is not found in the array.
  } else if (arr[index] === val) {
    return index; // Base case: val is found at the current index.
  } else {
    return findIndex(arr, val, index + 1); // Recursive case: search for val in the rest of the array.
  }
}

/** revString: return a copy of a string, but in reverse. */
function revString(str) {
  if (str.length <= 1) {
    return str; // Base case: if the string has 0 or 1 character, return the string itself.
  } else {
    const [first, ...rest] = str;
    return revString(rest.join('')) + first; // Recursive case: reverse the rest of the string and append the first character.
  }
}

/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj) {
  let strings = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      strings.push(obj[key]); // Add string values to the array.
    } else if (typeof obj[key] === 'object') {
      strings = strings.concat(gatherStrings(obj[key])); // Recursively gather strings from nested objects.
    }
  }
  return strings;
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings
};


// Q - 1
// Write a function `isAnagram` which takes 2 parameters and returns true/false if those areanagrams or not.

function isAnagram(str1, str2) {
  // Convert strings to lowercase
  const newStr1 = str1.toLowerCase();
  const newStr2 = str2.toLowerCase();

  // If the lengths of the strings are different, they can't be anagrams
  if (newStr1.length !== newStr2.length) {
    return false;
  }

  // Convert strings to arrays, sort them, and then join them back into strings
  const sortedStr1 = newStr1.split("").sort().join("");
  const sortedStr2 = newStr2.split("").sort().join("");

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(isAnagram("Listen", "Silent")); // true
console.log(isAnagram("Hello", "World")); // false

// Q - 2
//  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter and returns a list of objects where each object is unique category-wise and has total price spent as its value

function calculateTotalSpentByCategory(transactions) {
  // Create an object to store the total amount spent by each category
  const categoryTotals = {};

  // Iterate over each transaction
  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    // Initialize the category in the object if it doesn't exist
    if (!categoryTotals[category]) {
      categoryTotals[category] = 0;
    }

    // Add the price to the total for this category
    categoryTotals[category] += price;
  });

  // Convert the categoryTotals object to an array of objects
  const result = Object.keys(categoryTotals).map((category) => ({
    category: category,
    totalSpent: categoryTotals[category],
  }));

  return result;
}

// Example :
const transactions = [
  { category: "Food", price: 10.5 },
  { category: "Transport", price: 25.0 },
  { category: "Food", price: 5.25 },
  { category: "Utilities", price: 100.0 },
  { category: "Transport", price: 7.5 },
];

console.log(calculateTotalSpentByCategory(transactions));

// Q - 3
// Write a function `findLargestElement` that takes an array of numbers and returns the largest element
function findLargestElement(numbers) {
  if (numbers.length === 0) {
    throw new Error("Array cannot be empty");
  }

  let largest = numbers[0]; // Initialize with the first element

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}

// Example usage:
const array = [1, 5, 3, 9, 2];
console.log(findLargestElement(array)); // Output: 9

// Q - 4
// Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
function isPalindrome(str) {
  // Normalize the string by removing non-alphanumeric characters and converting to lowercase
  const cleanedStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  // Get the reversed string
  const reversedStr = cleanedStr.split("").reverse().join("");

  // Check if the cleaned string is equal to the reversed string
  return cleanedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello, World!")); // false

// Q - 5
// Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input
function calculateTime(n) {
  // Record the start time
  const startTime = performance.now();

  // Compute the sum from 1 to n
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  // Record the end time
  const endTime = performance.now();

  // Calculate the time taken in seconds
  const timeTaken = (endTime - startTime) / 1000; // convert milliseconds to seconds

  // Return the time taken
  return timeTaken.toFixed(2); // Round to 2 decimal places
}

// Example usage:
const n = 1000000;
console.log(`Time taken: ${calculateTime(n)} seconds`);

// Q - 6
//  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
function countVowels(str) {
  // Define a regular expression to match vowels (case-insensitive)
  const vowelRegex = /[aeiou]/gi;

  // Use the match method to find all vowels in the string
  const matches = str.match(vowelRegex);

  // Return the number of vowels found, or 0 if no vowels are found
  return matches ? matches.length : 0;
}

// Example usage:
console.log(countVowels("Hello World")); // Output: 3
console.log(countVowels("JavaScript is awesome")); // Output: 8
console.log(countVowels("123456")); // Output: 0

// Q - 7
// Write a function `sumArray` that takes an array of numbers as input and returns the sum of all the numbers.
function sumArray(numbers) {
  // Use the reduce method to sum all elements of the array
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

// Example usage:
console.log(sumArray([1, 2, 3, 4])); // Output: 10
console.log(sumArray([10, -2, 3.5, 0])); // Output: 11.5
console.log(sumArray([])); // Output: 0

// Q - 8
//  Implement a function `filterEvenNumbers` that takes an array of numbers and returns a new array containing only the even numbers
function filterEvenNumbers(numbers) {
  // Use the filter method to keep only even numbers
  return numbers.filter((num) => num % 2 === 0);
}

// Example usage:
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]
console.log(filterEvenNumbers([10, 21, 32, 43, 54])); // Output: [10, 32, 54]
console.log(filterEvenNumbers([7, 13, 21])); // Output: []

// Q - 9
// Write a function `findSmallestElement` that takes an array of numbers and returns the smallest element.
function findSmallestElement(numbers) {
  // Check if the array is empty
  if (numbers.length === 0) {
    throw new Error("Array cannot be empty");
  }

  // Initialize the smallest element with the first element of the array
  let smallest = numbers[0];

  // Iterate through the array to find the smallest number
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }

  return smallest;
}

// Example usage:
console.log(findSmallestElement([5, 3, 9, 1, 6])); // Output: 1
console.log(findSmallestElement([-2, -5, 0, 4])); // Output: -5
console.log(findSmallestElement([7])); // Output: 7

// Q - 10
// Create a function `reverseString` that takes a string and returns the string reversed
function reverseString(str) {
  // Use the split, reverse, and join methods to reverse the string
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // Output: "olleh"

// Q - 11
//  Write a function `fibonacci` that takes a number `n` and returns the `n`th number in the Fibonacci sequence.
function fibonacci(n) {
  if (n <= 0) {
      throw new Error("The input must be a positive integer.");
  }
  if (n === 1) return 0;
  if (n === 2) return 1;

  let a = 0;
  let b = 1;
  for (let i = 3; i <= n; i++) {
      let temp = a + b;
      a = b;
      b = temp;
  }
  return b;
}
 console.log(fibonacci(5)); // Output: 3

// Q - 12
// Implement a function `removeDuplicates` that takes an array and returns a new array with duplicate values removed.
function removeDuplicates(arr) {
  // Convert the array to a Set to remove duplicates, then convert it back to an array
  return Array.from(new Set(arr));
}

// Example usage:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates(["a", "b", "a", "c"])); // Output: ['a', 'b', 'c']

// Q - 13
// Write a function `countOccurrences` that takes a string and a character and returns the number of times the character appears in the string.
// program to check the number of occurrence of a character

function countString(str, letter) {
  let count = 0;

  // looping through the items
  for (let i = 0; i < str.length; i++) {
    // check if the character is at that position
    if (str.charAt(i) == letter) {
      count += 1;
    }
  }
  return count;
}

// take input from the user
const string = "Hellooo";
const letterToCheck = "o";

//passing parameters and calling the function
const result = countString(string, letterToCheck);

// displaying the result
console.log(result);

// Q - 14
//  Create a function `findCommonElements` that takes two arrays and returns a new array containing the elements that are present in both arrays
function findCommonElements(arr1, arr2) {
  // Convert the first array to a Set for fast lookup
  const set1 = new Set(arr1);

  // Filter the second array to include only elements that are in set1
  return arr2.filter((element) => set1.has(element));
}

// Example usage:
console.log(findCommonElements([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [3, 4]
console.log(findCommonElements(["a", "b", "c"], ["b", "c", "d"])); // Output: ['b', 'c']
console.log(findCommonElements([1, 2, 3], [4, 5, 6])); // Output: []

// Q - 15
// Implement a function `sortStrings` that takes an array of strings and returns the array sorted in alphabetical order.
function sortStrings(arr) {
  // Sort the array of strings alphabetically
  return arr.slice().sort();
}

// Example usage:
console.log(sortStrings(["banana", "apple", "cherry"])); // Output: ["apple", "banana", "cherry"]
console.log(sortStrings(["zebra", "elephant", "dog", "cat"])); // Output: ["cat", "dog", "elephant", "zebra"]
console.log(sortStrings(["grape", "apple", "mango", "banana"])); // Output: ["apple", "banana", "grape", "mango"]

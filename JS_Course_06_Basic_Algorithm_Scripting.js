/* freeCodeCamp - JavaScript Algorithms and Data Structures - Courses - VI - Basic Algorithm Scripting */


/*
An algorithm is a series of step-by-step instructions that describe how to do something.

To write an effective algorithm, it helps to break a problem down into smaller parts and think carefully about how to solve each part with code.

In this course, you'll learn the fundamentals of algorithmic thinking by writing algorithms that do everything from converting temperatures to handling complex 2D arrays.
*/


/* 1. Basic Algorithm Scripting - Convert Celsius to Fahrenheit */
/*
The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
*/
/* Solution */

function convertCtoF(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

convertCtoF(30);


/* 2. Basic Algorithm Scripting - Reverse a String */
/*
Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh".
*/
/* Solution */

function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

reverseString("hello");


/* 3. Basic Algorithm Scripting - Factorialize a Number */
/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
*/
/* Solution */

function factorialize(num) {
  if (num == 0 || num == 1) {
    return 1;
  } else {
    return num * factorialize(num-1);
  }
}

factorialize(5);


/* 4. Basic Algorithm Scripting - Find the Longest Word in a String */
/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/
/* Solution */

function findLongestWordLength(str) {
  let words = str.split(" ");
  let maxLength = " ";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");


/* 5. Basic Algorithm Scripting - Return Largest Numbers in Arrays */
/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/
/* Solution */

function largestOfFour(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }
  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


/* 6. Basic Algorithm Scripting - Confirm the Ending */
/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/
/* Solution */

function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}

confirmEnding("Bastian", "n");


/* 7. Basic Algorithm Scripting - Repeat a String Repeat a String */
/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.
*/
/* Solution */

function repeatStringNumTimes(str, num) {
  let newStr = "";
  for (let i = 1; i <= num; i++) {
    newStr += str;
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);


/* 8. Basic Algorithm Scripting - Truncate a String */
/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/
/* Solution */

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


/* 9. Basic Algorithm Scripting - Finders Keepers */
/*
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
*/
/* Solution */

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i <= arr.length; i++) {
    num = arr[i];
    if (func(num) == true) {
      return num;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);


/* 10. Basic Algorithm Scripting - Boo who */
/*
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/
/* Solution */

function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  } else {
    return false;
  }
}

booWho(null);


/* 11. Basic Algorithm Scripting - Title Case a Sentence */
/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/
/* Solution */

function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}

titleCase("I'm a little tea pot");


/* 12. Basic Algorithm Scripting - Slice and Splice */
/*
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/
/* Solution */

function frankenSplice(arr1, arr2, n) {
  let frankenArr = [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
  return frankenArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);


/* 13. Basic Algorithm Scripting - Falsy Bouncer */
/*
Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/
/* Solution */

function bouncer(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) filteredArr.push(arr[i]);
  }
  return filteredArr;
}

bouncer([7, "ate", "", false, 9]);

/* 14. Basic Algorithm Scripting - Where do I Belong */
/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/
/* Solution */

function getIndexToIns(arr, num) {
  let sortedArr = arr.sort();
  let index = 0;
  for (let i = 0; i < sortedArr.length; i++) {
    if (num > sortedArr[i]) {
      index += 1;
    } else {
      index += 0;
    }
  }
  return index;
}

getIndexToIns([40, 60], 50);


/* 15. Basic Algorithm Scripting - Mutations */
/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/
/* Solution */

function mutation(arr) {
  const arr1 = arr[0].toLowerCase();
  const arr2 = arr[1].toLowerCase();
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) < 0) return false;
  }
  return true;
}

mutation(["hello", "hey"]);


/* 16. Basic Algorithm Scripting - Chunky Monkey */
/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/
/* Solution */

function chunkArrayInGroups(arr, size) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);



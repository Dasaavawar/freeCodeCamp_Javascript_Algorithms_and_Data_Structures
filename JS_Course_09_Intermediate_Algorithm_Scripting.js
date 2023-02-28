/* freeCodeCamp - JavaScript Algorithms and Data Structures - Courses - IX - Intermediate Algorithm Scripting */


/* 1. Intermediate Algorithm Scripting - Sum All Numbers in a Range */
/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/
/* Solution */

function sumAll(arr) {
  if (arr[0]>arr[1]) {
    var sum = 0;
    for (let i=arr[1]; i <= arr[0]; i++) {
      sum += i;
    }
    return sum;
  } else if (arr[0]<arr[1]) {
    var sum = 0;
    for (let i=arr[0]; i <= arr[1]; i++) {
      sum += i;
    }
    return sum;
  }
}

sumAll([1, 4]);


/* 2. Intermediate Algorithm Scripting - Diff Two Arrays */
/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/
/* Solution */

function diffArray(arr1, arr2) {
  const newArr = [];
  for (let i=0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) == false) {
      newArr.push(arr1[i]);
    }
  }
  for (let i=0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i]) == false) {
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


/* 3. Intermediate Algorithm Scripting - Seek and Destroy */
/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/
/* Solution */

function destroyer(arr) {
  const removers = Object.values(arguments).slice(1);
  var newArr = [];
  for (let i=0; i < arr.length; i++) {
    let remove = false;
    for (let j=0; j < removers.length; j++) {
      if (arr[i] == removers[j]) {
        remove = true;
      }
    }
    if (remove == false) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


/* 4. Intermediate Algorithm Scripting - Wherefore art thou */
/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
*/
/* Solution */

function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  return collection.filter(obj => sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]));
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


/* 5. Intermediate Algorithm Scripting - Spinal Tap Case */
/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/
/* Solution */

function spinalCase(str) {
  var regex = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str.replace(regex, "-").toLowerCase();
}

spinalCase('This Is Spinal Tap');


/* 6. Intermediate Algorithm Scripting - Pig Latin */
/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/
/* Solution */

function translatePigLatin(str) {
  let vowelRegex = /^[aeiou]/;
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  if (str[0].match(vowelRegex)) {
    return str + "way";
  } else if (str[0].match(consonantRegex)) {
    return str.replace(consonantRegex, "").concat(myConsonants).concat("ay")
  }
}

translatePigLatin("consonant");


/* 7. Intermediate Algorithm Scripting - Search and Replace */
/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog.
*/
/* Solution */

function myReplace(str, before, after) {
  const upperRegex = /^[A-Z]/;
  if (upperRegex.test(before[0])) {
    let newAfter = after.charAt(0).toUpperCase() + after.slice(1);
    return str.replace(before, newAfter);
  } else if (!upperRegex.test(before[0])) {
    let newAfter = after.toLowerCase();
    return str.replace(before, newAfter);
  }
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


/* 8. Intermediate Algorithm Scripting - DNA Pairing */
/*
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/
/* Solution */

function pairElement(str) {
  let newArr = [];
  for (let i=0; i < str.length; i++) {
    if (str.charAt(i) == "G") {
      newArr.push(["G", "C"]);
    } else if (str.charAt(i) == "C") {
      newArr.push(["C", "G"]);
    } else if (str.charAt(i) == "T") {
      newArr.push(["T", "A"]);
    } else if (str.charAt(i) == "A") {
      newArr.push(["A", "T"]);
    }
  }
  return newArr;
}

pairElement("GCG");


/* 9. Intermediate Algorithm Scripting - Missing letters */
/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/
/* Solution */

function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    if (charCode != str.charCodeAt(0) + i) {
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}

fearNotLetter("abce");


/* 10. Intermediate Algorithm Scripting - Sorted Union */
/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/
/* Solution */

function uniteUnique(arr) {
  const args = [...arguments];
  const newArr = [];
  for (let i=0; i < args.length; i++) {
    for (let j=0; j < args[i].length; j++) {
      if (!newArr.includes(args[i][j])) {
        newArr.push(args[i][j]);
      }
    }
  }
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


/* 11. Intermediate Algorithm Scripting - Convert HTML Entities */
/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/
/* Solution */

function convertHTML(str) {
  var temp = str.split("");
  for (let i=0; i < temp.length; i++) {
     switch (temp[i]) {
      case "&":
        temp[i] = "&amp;";
        break;
      case "<":
        temp[i] = "&lt;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }
  const newStr = temp.join("");
  return newStr;
}

convertHTML("Dolce & Gabbana");


/* 12. Intermediate Algorithm Scripting - Sum All Odd Fibonacci Numbers */
/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/
/* Solution */

function sumFibs(num) {
  var num0 = 0;
  var num1 = 1;
  let sum = 0;
  while (num1 <= num) {
    if (num1 % 2 !== 0) {
      sum += num1;
    }
    num1 += num0;
    num0 = num1 - num0;
  }
  return sum;
}

sumFibs(4);


/* 13. Intermediate Algorithm Scripting - Sum All Primes */
/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/
/* Solution */

function sumPrimes(num) {
  function isPrime(n) {
    const sqrt = Math.sqrt(n);
    for (let i = 2; i <= sqrt; i++) {
      if (n % i === 0)
        return false;
    }
    return true;
  }
  
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      sum += i;
  }
  return sum;
}

sumPrimes(10);


/* 14. Intermediate Algorithm Scripting - Smallest Common Multiple */
/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/
/* Solution */

function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  let upperBound = 1;

  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }

  for (let multiple = max; multiple <= upperBound; multiple += max) {

    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

smallestCommons([1,5]);


/* 15. Intermediate Algorithm Scripting - Drop it */
/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/
/* Solution */

function dropElements(arr, func) {
   while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });


/* 16. Intermediate Algorithm Scripting - Steamroller */
/*
Flatten a nested array. You must account for varying levels of nesting.
*/
/* Solution */

function steamrollArray(arr) {
  const flattenedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);


/* 17. Intermediate Algorithm Scripting - Binary Agents */
/*
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/
/* Solution */

function binaryAgent(str) {
  var biString = str.split(" ");
  var uniString = [];

  for (let i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  return uniString.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


/* 18. Intermediate Algorithm Scripting - Everything Be True */
/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
*/
/* Solution */

function truthCheck(collection, pre) {
  var counter = 0;
  for (let c in collection) {
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  
  return counter == collection.length;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");


/* 19. Intermediate Algorithm Scripting - Arguments Optional */
/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/
/* Solution */

function addTogether() {
  const [first, second] = arguments;
  if (typeof(first) !== "number")
    return undefined;
  if (arguments.length === 1)
    return (second) => addTogether(first, second);
  if (typeof(second) !== "number")
    return undefined;
  return first + second;
}

addTogether(2,3);


/* 20. Intermediate Algorithm Scripting - Make a Person */
/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
*/
/* Solution */

const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  }

  this.getLastName = function() {
    return fullName.split(" ")[1];
  }

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(first) {
    fullName = first + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(last) {
    fullName = fullName.split(" ")[0] + " " + last;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

const bob = new Person('Bob Ross');
bob.getFullName();


/* 21. Intermediate Algorithm Scripting - Map the Debris */
/*
According to Kepler's Third Law, the orbital period T

of two point masses orbiting each other in a circular or elliptic orbit is:

T=2π√(a3/μ)

  1.   a is the orbit's semi-major axis
μ=GM
  2.   μ is the standard gravitational parameter
  3.   G is the gravitational constant,
  4.   M is the mass of the more massive body.

Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/
/* Solution */

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI;
  const newArr = [];

  const getOrbPeriod = function(obj) {
    const c = Math.pow(earthRadius + obj.avgAlt, 3);
    const b = Math.sqrt(c / GM);
    const orbPeriod = Math.round(a * b);

    return {name: obj.name, orbitalPeriod: orbPeriod};
  };

  for (let elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);



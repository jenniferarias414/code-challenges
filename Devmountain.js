//  CODE CHALLENGES //



// This is a short-length challenge, but requires some clever thinking.

// Given two lists, find the smallest difference (subtraction) between any two nums.

// For example, given the arrays:

// [10, 20, 14, 16, 18]
// [30, 23, 54, 33, 96]
// The result would be 3, since 23 - 20 = 3 is the smallest difference of any pair of numbers in those lists.

// Write a function that determines the smallest difference.

function smallestDiff(arr1, arr2){
    // let arr1 = [];
    // let arr2 = [];
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
  
    let minDiff = Infinity;
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        const currentDiff = Math.abs(arr1[i] - arr2[j]);
        minDiff = Math.min(minDiff, currentDiff);

    // for (i=0; i<arr1.length; i++){
    //     for (let j=0; j<arr2.length;)
    if (arr1[i] < arr2[j]) {
        i++;
      } else {
        j++;
      }
    }
  
    return minDiff;
}

// Joely's soln below
function smallestDiff(arr1, arr2) {
    let diffs = []
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr2[j] > arr1[i]) {
          diffs.push(arr2[j] - arr1[i])
        } else {
          diffs.push(arr1[i] - arr2[j])
        }
      }
    }  
    return Math.min(...diffs) //can't do math.min on an array, ... spread operator takes all those values out of the array so you can find the min num
  }

console.log(smallestDiff([10,20,14,16,18], [30, 23, 54, 33, 96]))

  // ---------------------------------------------------


//see png//

function catchSignChange(arr){
  let signChange = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] * arr[i+1] < 0){
//       signChange++;
//     }
//   }
//   return signChange;
for (let i = 0; i < arr.length - 1; i++) {
    if ((arr[i] >= 0 && arr[i + 1] < 0) || (arr[i] < 0 && arr[i + 1] >= 0)) {
      signChange++;
    }
  }
  return signChange;
}

console.log(catchSignChange([1, -3, -4, 7, 6, -2, -1])); //3
console.log(catchSignChange([1,-1,0,-2,-3,5,-6,7,-6])) //5 ?
console.log(catchSignChange([1,-1,0,0,3,5,-6,7,7])) 
console.log(catchSignChange([1,-3,-4,0,5])) 

  // ---------------------------------------------------


// Write a function that takes in a number. It should return a “tower” of *. The tower will be an array of strings.

// The number passed in tells you how many floors the tower should have.

// The first floor should have 1 block, the 2nd should have 3 blocks, the 3rd should have 5 blocks, and so on.

// Each block is represented by a *.

// For example, a tower of 3 floors looks like this (note the spacing):

// [
//     '  *  ',
//     ' *** ',
//     '*****'
// ]
// and a tower of 6 floors looks like this:

// [
//     '     *     ',
//     '    ***    ',
//     '   *****   ',
//     '  *******  ',
//     ' ********* ',
//     '***********'
// ]

//first attempt below:
// function buildTower(num) {
//     let floor = []
//     for (let i=0; i<num; i++){
//         const spaces = ' '
//     }
// }

function towerBuilder(nFloors) {
  const tower = []
  let towerString = '*'
    for(let i = 0; i<nFloors; i++){ 
      tower.push(towerString)
      towerString += "**"
      for (let j = 0; j<i; j++){
        tower[j] = " " + tower[j] + ' '
      }
    }
    return tower
  }

  // ---------------------------------------------------

  // Write a function that will take in a string containing only s, m, and l characters. Ex: slsmmsllsmsmlmsls

// This string essentially represents a bunch of t-shirts in an unsorted pile. Your function should return this pile of t-shirts sorted by small, then medium, then large. The above example would be returned sssssssmmmmmlllll.

// The given string will never include characters outside of the lowercase s, m, and l. The string will also never contain any spaces.

// >>> tshirtSorter('lms')
// // sml

// >>> tshirtSorter('smllms')
// // ssmmll

// Write your solution below:

// let string = ""
// let newString = ""

// function tshirtSorter (string) {
//     for (let i=0; i<string.length; i++){
//         if(string[i] === 's'){
//             newString.unshift('s')
//         } else if (string[i] === 'l') {
//             newString.push('l')
//         } else {
//             newString = string
//         }
//     }
//     return newString
// }


// console.log(tshirtSorter('smsmsmsls'))

// solution
// function tshirtSorter(str) {
//     let small = ""
//     let medium = ""
//     let large = ""
  
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === "s") {
//         small += "s"
//       } else if (str[i] === "m") {
//         medium += "m"
//       } else {
//         large += "l"
//       }
//     }
//     return small + medium + large
//   }

//   function tshirtSorter(tshirtPile) {
//     let sortedTshirts = [];
    
//     // Count the occurrences of each size
//     const countS = (tshirtPile.match(/s/g) || []).length;
//     const countM = (tshirtPile.match(/m/g) || []).length;
//     const countL = (tshirtPile.match(/l/g) || []).length;
  
//     // Use push and unshift to construct the sorted array
//     for (let i = 0; i < countS; i++) {
//       sortedTshirts.push('s');
//     }
  
//     for (let i = 0; i < countM; i++) {
//       sortedTshirts.push('m');
//     }
  
//     for (let i = 0; i < countL; i++) {
//       sortedTshirts.push('l');
//     }
  
//     return sortedTshirts.join('');
//   }

//s m and l are in reverse alphabetical order, can do this implicit return
//sort automatically puts in alpha order, reverse will invert that
const tshirtSorter = str => str.split('').sort().reverse().join('')
console.log(tshirtSorter('smsmsmsls'))

  // ---------------------------------------------------

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a function that takes the array as an argument and returns this “outlier” N.

// Examples:

// [2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)

const nums = [2,4,0,100,4,11,2602,36]

function findOutlier (arr){
    let evenNums = []
    let oddNums = []
    for (let i=0; i<arr.length; i++){
        if (arr[i] % 2 === 0){
            evenNums.push(arr[i])
        } else {
            oddNums.push(arr[i])
        }
        // if (evenNums.length > oddNums.length){
        //     return oddNums
        // } else {
        //     return evenNums
        // }
    }
    if (evenNums.length > oddNums.length){
        return oddNums //returns the array with 1 num in it
    } else {
        return evenNums //can do evenNums[0] to return the 1 num in the array
    }
}

console.log(findOutlier(nums))

// joely's soln
// function outlier(nums){
//     let evens = [];
//     let odds = [];
  
//     for(let i = 0; i < nums.length; i++){
//       if(nums[i]%2 === 0){
//         evens.push(nums[i])
//       } else {
//         odds.push(nums[i])
//       }
//     }
    
//     if(odds.length > evens.length){
//       return evens.join('')
//     } else {
//       return odds.join('')
//     }
//   }

  // ---------------------------------------------------



// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don’t forget the space after the closing parentheses!

// function createPhoneNumber (arr){
//     let newArr = []
//     for (i=0; i<arr.length; i++){
//         newArr.push('(', arr[0], arr[1], arr[2], ') ', arr[3], arr[4], arr[5], '-', arr[6], arr[7], arr[8], arr[9]).join('')
//     }
//     return newArr
// }

// console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))

//----------using a for loop option BELOW --------------

// function createPhoneNumber(nums){
//     let format = '(xxx) xxx-xxxx'
//     for(let i=0; i<nums.length; i++){
//         format = format.replace('x', nums[i])
//     }
//     return format
// }


function createPhoneNumber (arr) {
  const areaCode = arr.slice(0, 3).join('') //.slice: This extracts the elements from index 0 to index 2 from the array. It creates a new array containing the first three digits of the phone number.   

  //.join(''): This joins the elements of the array into a string. The argument '' specifies that there should be no separator between the joined elements.

  const middle = arr.slice(3, 6).join('') //This extracts the elements from index 3 to index 5
  const last = arr.slice(6).join('') //extracts the elements from index 6 to the end 

  return `(${areaCode}) ${middle}-${last}`
}

let momsNumber = [9,7,2,8,0,2,9,8,5,3]
// console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))
console.log(createPhoneNumber(momsNumber))

  // ---------------------------------------------------

  // Write your code below this line
// In this challenge, you’ll write a decoder.

// Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm

// The number in the string represents how many characters each letter should shift. For example:

// >>> "1a" // "b"
// >>> "3ce" // "fh"
// >>> "2fcjjm" // "hello"

// function decoder(str) {
//     for (i=0; i<str.length; i++) {
//         if (str[0] === NaN) {
//             console.log('this no gonna work')
//         } else

//     }}


    // owen's soln
    function decodeString(string){

      const shift = parseInt(string[0])
      const alphabet = 'abcdefghijklmnopqrstuvwxyz'
      let newString = ""

      for (let i = 1; 1<string.length; i++) {
          newString += alphabet[alphabet.indexOf(string[i]) + shift]
      }
      return newString
  }

  console.log(decodeString('1a'))


  // ---------------------------------------------------

  // Given a string, return true or false depending on whether that string has balanced parentheses.

// For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets.

// For example:

// >>> has_balanced_parens("()")
// // true

// >>> has_balanced_parens("(Oh Noes!)(")
// // false

// >>> has_balanced_parens("((There's a bonus open paren here.)")
// // false

// >>> has_balanced_parens(")")
// // false

// >>> has_balanced_parens("(")
// // false

// >>> has_balanced_parens("(This has (too many closes.) ) )")
// // false
// You may consider a string with no parentheses balanced:

// >>> has_balanced_parens("Hey...there are no parens here!")
// // true

// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

function hasBalancedParens(string){
    let stack = []
    for(i=0; i<string.length; i++){
        if (string[i] === '('){
            stack.push('(')
        } else if (string[i] === ')'){
            stack.push(')')
        }
    }
}
//stack data structure attempt above....

function balancedParens(str) {
    let openPar = 0
    let closedPar = 0
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") {
        openPar += 1
      } else if (str[i] === ")") {
        closedPar += 1
      }
    }
    return openPar === closedPar //forcing this to be a boolean value; returns true
  }

  console.log(balancedParens("This ( is unbalanced."))

//Regex method
  function balancedParens(str){
    let opens = str.replace(/[^(]/g, "").length; //^ is the NOT operator, like !, /g = global (affects everything)
    let closes = str.replace(/[^)]/g, "").length; //replacing everything that is not a ) with NOTHING ("")
    return opens === closes
  }
  //REGEX method

  //or can write in 1 line
  function balancedParens(str){
    return str.replace(/[^(]/g, "").length === str.replace(/[^)]/g, "").length
  }

  // ---------------------------------------------------

//Find the range code challenge

// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:
let lowestInt = array[0]
let largestInt = array[0]

for (let i = 0; i < array.length; i++) {
    if (array[i] < lowestInt) {
        lowestInt = array[i]
    } else if (array[i] > largestInt) {
        largestInt = array[i]
    }
}

console.log("Lowest Integer:", lowestInt)
console.log("Largest Integer:", largestInt)
console.log(lowestInt, largestInt)

// ---------------------------------------------------

// Your task is to sort an array of integer numbers by the product (multiplication) of the value and the index.

// For sorting the index starts at 1, NOT at 0!

// The sorting has to be ascending.

// The array will never be null and will always contain numbers.

// Example:

// Input: 23, 2, 3, 4, 5

// Product of value and index:

// 23 => 23 * 1 = 23 -> Output-Pos 4

// 2 => 2 * 2 = 4 -> Output-Pos 1

// 3 => 3 * 3 = 9 -> Output-Pos 2

// 4 => 4 * 4 = 16 -> Output-Pos 3

// 5 => 5 * 5 = 25 -> Output-Pos 5

// Output: 2, 3, 4, 23, 5

// let input = [];

function sortByProduct(input){
  let output = [];
  
  for (let i=0; i<input.length; i++){
      output.push(input[i]*(i+1))
  }
  return output.sort(function(a, b){return a-b})
  //A function that defines a sort order. The function should return a negative, zero, or positive value, depending on the arguments:
  // function(a, b){return a-b}
  // When sort() compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

  // Example:

  // The sort function will sort 40 as a value lower than 100.

  // When comparing 40 and 100, sort() calls the function(40,100).

  // The function calculates 40-100, and returns -60 (a negative value).
}

console.log(sortByProduct([23,2,3,4,5]))

// ---------------------------------------------------

// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:

// for (let i = 0; i < array.length; i++) {
//     for (let x = 0; x < array.length; x++) {
//         if (array[i] + array[x] === 0) {
//             console.log('true')
//         } else {
//             console.log('false')
//         }
//     }
// }
let value = false

function addToZero(array) {
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        return true;
      } 
    }
  }
}
}

// console.log(value)
// console.log(addToZero(array))
value = addToZero(array)
console.log(value)

// ---------------------------------------------------


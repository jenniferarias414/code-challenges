//  CODE CHALLENGES 

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
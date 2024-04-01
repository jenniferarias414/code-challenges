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

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


function findAnagrams(words) {
    const map = new Map();
    for (const word of words) {
        const sortedWord = word.split('').sort().join('');
        map.set(sortedWord, (map.get(sortedWord) || []).concat(word));
    }
    return Array.from(map.values());
}
 
 function generateSubsets(array) {
  // Helper function to recursively generate subsets
  function generateHelper(index, subset) {
    // Base case: if index reaches the end of the array, add the current subset to the result
    if (index === array.length) {
      result.push(subset);
      return;
    }

    // Include the current element in the subset and recursively generate subsets
    generateHelper(index + 1, subset.concat(array[index]));

    // Exclude the current element from the subset and recursively generate subsets
    generateHelper(index + 1, subset);
  }

  // Initialize an empty array to store the result
  const result = [];

  // Start the recursion with index 0 and an empty subset
  generateHelper(0, []);

  return result;
}

function calculateSumOfDigits(n){
  let strArr = n.toString().split('');
  if(strArr.length <=1) return n;
  let numArr = strArr.map(str => Number(str));
  return numArr.reduce((a,b) => a + b);
}

function calculateFibonacciaAtN(n){
 if(n<=1) return n;
 return (calculateFibonacciaAtN(n-1) + calculateFibonacciaAtN(n-2))
}

function calculateFactorial(n){
 if(n <= 1) return n;
 return n * calculateFactorial(n - 1);
}

function printCountdownFromN(n){
 console.log(n);
 if(n==0){ 
   return;
 }else{
   printCountdownFromN(n-1);
 }
}

function removeDuplicateFromArray(arr){
 let existingArr = {}, outputArr = [], element;
 arr.forEach(e => {if(!existingArr[e]){outputArr.push(e);existingArr[e]=true;}})
 return outputArr;
}

// https://stackblitz.com/edit/osh-word-frequency-interview-wpz239?file=src%2FwordFrequencyAnalyzer.test.ts,src%2FwordFrequencyAnalyzer.ts
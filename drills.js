// 1. Understanding merge sort
// 1.1 What is the resulting list that will be sorted after 3 recursive calls to mergesort?
//  [ 21, 1, 26, 45 ]
// 1.2 What is the resulting list that will be sorted after 16 recursive calls to mergesort?
//  The final array [ 1, 2, 9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45, 46, 49 ]
// 1.3 What are the first 2 lists to be merged?
//  [ 1, 21 ] [ 26, 45 ]
// 1.4 Which two lists would be merged on the 7th merge?
//  [ 1, 21, 26, 45 ] [ 2, 9, 28, 29 ]

let count = 0;
function mergeSort(array) {
  //console.log('MergeSort Count: ' + count);
  //console.log('Array', array);
  count++;

  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);

  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right, array);
}

function merge(left, right, array) {
  //console.log('merge', left, right);
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    }
    else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }

  return array;
};

const array = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];
console.log('Final Sort', mergeSort(array));

function bucketSort(arr, min, max) {

    let result = new Array(max - min + 1);
  
    for(let i = 0; i < arr.length; i++){
      result[arr[i] - min] = (result[arr[i] - min]|0) +1;
    }
    let ans = []
    for(let i = min; i <= max; i++){
      for(let j = 0; j < result[i-min]; j++){
        ans.push(i)
      }
    }
    return ans
  }
  
  const arr1 = [1, 7, 2, 6, 4, 9]
  //console.log(bucketSort(arr1, 1, 9))
  
  function sortInPlace(array){
    for(let i = 0; i < array.length; i++){
      let j = Math.floor(Math.random() * array.length);
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  }
  
  const arr2 = [1, 2, 3, 4, 5]
  //console.log(sortInPlace(arr2))
  
  function sortingBooks(arr){
    return arr.sort((book1, book2) => book1.author > book2.author)
  }
  
  function sortingBooks2(arr){
    return quickSort(arr)
  }
  
  const library = ['The REXX Language', 'Teach Yourself C++ In 21 Days', 'The C++ Programming Language',
                  'JavaScript: The Good Parts', 'JavaScript: The Definitive Guide', 'Windows Vista for Dummies',
                  'NIV Study Bible', 'Starlight and Time', 'Jane\'s Fighting Ships', 'The Official Chuck Norris Fact Book'];
  
  //console.log(sortingBooks2(library))
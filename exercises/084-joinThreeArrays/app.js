function joinThreeArrays(arr1, arr2, arr3) {
  // your code here
  arr1.push(arr2, arr3);
  return arr1.flat();
}

let array1 = [1,2];
let array2 = [3,4];
let array3 = [5,6];

joinThreeArrays(array1, array2, array3);
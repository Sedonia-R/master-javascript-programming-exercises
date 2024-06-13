// function search(array, value) {
//   let start = 0;
//   let end = array.length - 1;
//   while (start <= end) {
//       let middleIndex = Math.floor((start + end) / 2);
//       if (array[middleIndex] === value) {
//         return middleIndex;
//       }
//       else if (array[middleIndex] < value) {
//           start = middleIndex + 1;
//       }
//       else {
//           end = middleIndex - 1;
//       }
//   }
//   return null;
// }

// let arr = [1, 3, 16, 22, 31, 33, 34]
// console.log(search(arr, 31)); // --> 4

function search(array, value){
  array.sort((a, b) => a - b);
  return binarySearch(array, value);
}

function binarySearch(array,value, start=0, end=array.length){
  //console.log(array, value, start, end);
  if (start === end){
    return start;
  }
  let middle = Math.ceil((start + end) / 2);
  
  if (value === array[middle]){
    return middle;
  }

  if (value < array[middle]){
    return binarySearch(array, value, start, middle);
  }
  if (value > array[middle]){
  return binarySearch(array, value, middle, end);
  }
  return null;
}


let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // --> 4
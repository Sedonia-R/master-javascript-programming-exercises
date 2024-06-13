function isIsogram(text) {
  // your code here
  text = text.toLowerCase();
  let array = text.split('');
  if (array.length != new Set(array).size) {
    return false
  } return true;
}


console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false

// for(let allIndices = 0; allIndices < array.length; allIndices++){
//   for(let firstIndexExamined = 0; firstIndexExamined < array.length; firstIndexExamined++){
//     let firstOfPair = array[firstIndexExamined];
//     for(let followingIndicesExamined = 1; followingIndicesExamined < array.length; followingIndicesExamined++){
//       let secondOfPair = array[followingIndicesExamined];
//       let sum = firstOfPair + array[followingIndicesExamined];
//       if (sum == number){
//         let pairOfSum = [firstOfPair, secondOfPair];
//         return pairOfSum;
//       }
//     }
//   }
// }
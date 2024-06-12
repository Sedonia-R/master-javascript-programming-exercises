function findPairForSum(array, number) {
  // your code here
  for(let allIndices = 0; allIndices < array.length; allIndices++){
    for(let firstIndexExamined = 0; firstIndexExamined < array.length; firstIndexExamined++){
      let firstOfPair = array[firstIndexExamined];
      for(let followingIndicesExamined = 1; followingIndicesExamined < array.length; followingIndicesExamined++){
        let secondOfPair = array[followingIndicesExamined];
        let sum = firstOfPair + array[followingIndicesExamined];
        if (sum == number){
          let pairOfSum = [firstOfPair, secondOfPair];
          return pairOfSum;
        }
      }
    }
  }
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]

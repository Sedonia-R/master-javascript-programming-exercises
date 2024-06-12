function getLargestElement(arr) {
  // your code here
  if (arr.length == 0) {
    return 0;
  } else {
    return arr.sort((a, b) => a - b).pop();
  }
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;
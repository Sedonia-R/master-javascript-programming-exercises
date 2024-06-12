function computeProductOfAllElements(arr) {
  // your code here
  if (arr.length == 0) {
    return 0;
  } else {
  return arr.reduce((a,b) => a * b);
}
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60

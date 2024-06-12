function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  var newArr = arr.filter((x) => typeof x == 'number');
  if (arr.length == 0 || newArr.length == 0) {
      return 0;
  } else {
      for(let i = 0; i < newArr.length; i++) {
          newArr.sort();
      }
  } 
  return newArr[0];
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4

function fromListToObject(array) {
  // your code here
  let obj = {};
  for(let index of array){
    obj[index[0]] = index[1];
  }
  return obj;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // --> { make: 'Ford', model: 'Mustang', year: 1964 }

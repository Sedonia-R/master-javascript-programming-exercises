function getAllKeys(obj) {
  // your code here
  let array = [];
  for(let key in obj){
    array.push(key);
  }
  return array;
}

let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); // --> [ 'name', 'age', 'hasPets' ]

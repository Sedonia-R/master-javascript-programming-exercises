function listAllValues(obj) {
  // your code here
  let array = [];
  for (let key in obj){
    array.push(obj[key]);
  }
  return array;
}

let output = listAllValues({name: "Krysten", age: 33, hasPets: false});
console.log(output); // --> [ 'Krysten', 33, false ]

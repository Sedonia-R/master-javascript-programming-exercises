function convertObjectToList(obj) {
  // your code here
  let array = [];
  for(let key in obj){
    array.push([key, obj[key]]);
  }
  return array;
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]

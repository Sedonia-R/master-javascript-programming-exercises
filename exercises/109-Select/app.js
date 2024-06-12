function select(arr, obj) {
  var keys = Object.entries(obj);
  var hash = [];
  for(let i = 0; i < arr.length; i++) {
    if (arr.includes(keys[i][0])) {
      hash.push(keys[i]);
    }
  }
  return Object.fromEntries(hash);
}

let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
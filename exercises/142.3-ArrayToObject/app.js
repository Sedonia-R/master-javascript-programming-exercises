function transformEmployeeData(array) {
  // your code here
  
  let innerArray;
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    const obj = {};
    innerArray = array[i];
    for(let j = 0; j < innerArray.length; j++){
      if(Object.keys(obj).length < innerArray.length){
        obj[innerArray[j][0]] = innerArray[j][1];
      }
    }
    newArray.push(obj);
  }
  return newArray;
}

let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']], [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output); // --> [{ firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' }, { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }]
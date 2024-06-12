let object1 = {
    a: 1,
    b: 2
};
let object2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    for (let keys in obj2) {
      obj1.hasOwnProperty(keys) || (obj1[keys] = obj2[keys]);
    };
    return obj1;
}

extend(object1, object2);
console.log(object1);
console.log(object2);
function addToFrontOfNew(arr, element) {
    // your code here
    let newArr = [];
    newArr.push(arr);
    newArr.unshift(element);
    return newArr.flat();
}

let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]

// Write your function here
function keep(array, elem) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == elem) {
           newArray.push(elem);
        } 
    }
    return newArray;
}
let output = keep([1, 2, 3, 2, 1], 2)
console.log(output); // --> [2, 2]
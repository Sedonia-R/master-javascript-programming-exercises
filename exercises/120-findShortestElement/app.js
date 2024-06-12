function findShortestElement(arr) {
    // your code here
    let newArr = [];
    if (arr.length == 0) {
        return '';
    } else {
        for (let i in arr) {
            newArr.push([arr[i].length, arr[i]]);
        }
    }
    newArr.sort();
    let shortest = newArr.shift();
    return shortest[1];
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'
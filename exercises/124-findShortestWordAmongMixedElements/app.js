function findShortestWordAmongMixedElements(arr) {
    // your code here
/*     if (arr.length == 0) {
        return "0";
    } else {
         */
    var counts = [];
    var newArr = arr.filter((x) => typeof x == 'string');
    if (arr.length == 0 || newArr.length == 0) {
        return "";
    } else {
        for(let i = 0; i < newArr.length; i++) {
            counts.push([newArr[i].length, newArr[i]]);
        }
    } 
    var smallest = counts[0];
    for (let i in counts) {
        if (counts[i] < smallest) {
            smallest = counts[i];
        }
    }
    return smallest[1];
}


let output = findShortestWordAmongMixedElements(['seventeen', 4, 'two', 2, 'three']);
console.log(output); // --> 'two'

function countAllCharacters(string) {
    var obj = {};
    var array = string.split('');
    array.forEach(function (x) { obj[x] = (obj[x] || 0) + 1; });
    return obj;
}

let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
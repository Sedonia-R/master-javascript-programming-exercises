function getAllLetters(str) {
    // your code here
    arr = str.split('');
    return arr;
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']

function countCharacter(str, char) {
    // your code here
    let count = 0;
    str.split('').forEach(x => x == char ? count++ : null);
    return count;
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3

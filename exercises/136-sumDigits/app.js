function sumDigits(num) {
    // your code here
    let number = num.toString().split('');
    if (number[0] === '-') {
        number[0] += number[1];
        number.splice(1, 1)
    }
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
    }
    return sum;
}

let output = sumDigits(-316);
console.log(output); // --> 4

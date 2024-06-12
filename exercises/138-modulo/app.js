function modulo(num1, num2) {
    // your code here
    if (num1 === NaN || num2 === NaN) {
        return NaN;
    } else if (num1 == Infinity || num2 == 0) {
        return NaN;
    } else if (num2 == Infinity || num1 == 0) {
        return 0;
    } else {
        let quotient = parseInt(num1 / num2);  //finding quotient (integer part only)
        let product = quotient * num2;  //finding product
        let remainder = num1 - product;  //finding modulus
        return remainder;
    }
}

let output = modulo(25, 4);
console.log(output); // --> 1

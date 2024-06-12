function isOddWithoutModulo(num) {
    // your code here
    let quotient = parseInt(num / 2);  //finding quotient (integer part only)
    let product = quotient * 2;  //finding product
    let remainder = num - product;  //finding modulus
    if (remainder !== 0){
        return true;
    }
    return false;
}

let output = isOddWithoutModulo(17);
console.log(output); // --> true

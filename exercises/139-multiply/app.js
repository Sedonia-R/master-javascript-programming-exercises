function multiply(num1, num2) {
    // your code here
    let array = [];
    let sum = 0;
    positiveNum1 = Math.abs(num1);
    positiveNum2 = Math.abs(num2);

    for (let i = 0; i < positiveNum2; i++){
        array.push(positiveNum1);
    }
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }

    if((num1<0 && num2>0) || (num1>0 && num2<0)) {
        return -(sum);
    } 
    return sum;
}

let output = multiply(4, 7);
console.log(output); // --> 28

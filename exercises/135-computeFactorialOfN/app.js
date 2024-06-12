function computeFactorialOfN(n) {
    // your code here
    let fact = 1;
    for (i = 1; i <= n; i++){
        fact *= i;
    }
    return fact;
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24

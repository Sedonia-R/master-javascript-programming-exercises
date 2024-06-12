array = [1, 2, 3, 4];

function computeAverageOfNumbers(arr) {
    let initialValue = 0;
    let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue,
    initialValue,);
    if (arr.length == 0) {
        return 0;
    } else {
    return sum / arr.length;
    }
}

console.log(computeAverageOfNumbers(array));
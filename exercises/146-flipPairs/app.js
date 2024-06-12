function flipPairs(input) {
    // your code here
    let array = input.split('');
    let flippedArray = [];
    for (let i = 0; i < array.length; i+=2){
        flippedArray.push(array[i+1]);
        flippedArray.push(array[i]);
    }
    return flippedArray.join('');
}

let input = "Can you see what this is about?";
let output = flipPairs(input);
console.log(output); // --> aC noy ues ehwtat ih ssia obtu?

function getStringLength(string) {
    // your code here
    let array = string.split('');
    let counter = 0;
    for(let index of array){
        counter++;
    }
    return counter;
}

let output = getStringLength('hello');
console.log(output); // --> 5

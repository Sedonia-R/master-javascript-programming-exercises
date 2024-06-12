function flipEveryNChars(input, n) {
    // your code here
    let array = [];
    for(let i = 0; i < input.length; i+=n){
        array.push(input.substring(i, (i+n)));
        //console.log(array);
    }
    let reversedElement;
    let reversedArray = [];
    for(let i = 0; i < array.length; i++) {
        reversedElement = array[i].split('');
        reversedElement = (reversedElement.reverse());
        reversedElement = (reversedElement.join(''));
        reversedArray.push(reversedElement);
    }
    return reversedArray.join('');
}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

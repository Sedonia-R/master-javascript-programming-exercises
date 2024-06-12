function turnStringToNumber(string) {
    return Number(string);
}

function detectOutlierValue(string) {
    // your code here
    //loop through to check for even and odd
    //set a counter for even 
    // set a counter for odd
    // if counter for even is one and odd is n-1 
    //or the other way around - determine which position
    // and return that position (zero indexed)
    const array = string.split(" ");
    let evenCounter = 0;
    let evenIndex = 1;
    let oddCounter = 0;
    let oddIndex = 1;
    for(let number in array){
        const arrayNumber = turnStringToNumber(array[number]);
        if (arrayNumber % 2 == 0) {
            evenCounter++;
            //console.log(evenCounter);
            evenIndex = Number(number) + 1;
            // console.log(evenIndex);
        } else if (arrayNumber % 2 != 0) {
            oddCounter++;
            // console.log(oddCounter);
            oddIndex = Number(number) + 1;
            // console.log(oddIndex);
        }
    }
    if (evenCounter == 1 && oddCounter == (array.length - 1)) {
        return evenIndex;
    } else if (oddCounter == 1 && evenCounter == (array.length - 1)) {
        return oddIndex;
    }    
}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  // --> 2

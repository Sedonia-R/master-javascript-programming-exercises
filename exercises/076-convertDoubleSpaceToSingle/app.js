function convertDoubleSpaceToSingle(str) {
    // your code here
    let arr = str.split('  ');
    return (arr.join(" "));
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"

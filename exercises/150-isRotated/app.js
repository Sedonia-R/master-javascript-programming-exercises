function rotate(string){
  let firstLetter = string[0];
  string = string.substring(1);
  return `${string}${firstLetter}`;
}

function isRotated(str1, str2) {
  // your code here
  if(str1.length != str2.length) return false;
  let rotatedString = rotate(str1);
  for(let i = 0; i < str1.length; i++){
    if (rotatedString === str2) {
      return true;
    } rotatedString = rotate(rotatedString);
  }
  return false;
}
  
console.log(isRotated('hello world', 'orldhello w')); // --> true
console.log(isRotated('hello world', 'omrel wp')); // --> false
  

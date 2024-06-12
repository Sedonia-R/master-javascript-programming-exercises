function or(expression1, expression2) {
  // your code here
  if (expression1 == true && expression2 != true) {
    return true;
  } else if (expression1 != true && expression2 == true) {
    return true;
  } else if (expression1 == true && expression2 == true) {
    return true;
  }
  else {
    return false;
  }
}

let output = or(true, false);
console.log(output); // --> true;

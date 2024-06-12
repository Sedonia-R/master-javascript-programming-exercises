function getElementsLessThan100AtProperty(obj, key) {
    if(!obj[key] || !Array.isArray(obj[key])){
        return [];
    }
    else {
        let equalsTen = obj[key].filter(element => element < 100);
        return equalsTen;
    }
}

let obj = {
    key: [1000, 20, 50, 500]
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]
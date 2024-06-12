function getOddLengthWordsAtProperty(obj, key) {
  
    if (!obj[key] || !Array.isArray(obj[key])) {
        return [];
    } else {
        let odd = obj[key].filter (element => (element.length % 2 != 0));
        return odd;
    }
}

let obj = {
    key: ['It', 'has', 'some', 'words']
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']
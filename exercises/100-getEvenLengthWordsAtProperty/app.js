function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length == 0) {
      return [];
    } else {
      let evenLength = obj[key].filter (element => element.length % 2 == 0);
      return evenLength;
    }
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']

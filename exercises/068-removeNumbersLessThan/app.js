let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLessThan(num, obj) {
    // your code here
    let prop = (Object.keys(obj).find(key => obj[key] < num));
    delete obj[prop];
    return obj;
}

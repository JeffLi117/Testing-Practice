function capitalize(str) {
    let length = str.length;
    let capFirstLetter = str.slice(0,1).toUpperCase();
    let restOfStr = str.slice(1,length);
    return capFirstLetter+restOfStr;
}

function reverseString(str) {
    let strArray = str.split("");
    let newStr = "";
    let length = strArray.length - 1;
    for (let i = length; i >= 0; i--) {
        newStr = newStr.concat(strArray[i].toString());
    };
    return newStr;
}

function generateNumbersForLetters() {
    let obj = {};
    let lowercaseArray = "abcdefghijklmnopqrstuvwxyz".split("");
    let uppercaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let length = lowercaseArray.length;
    for (let i = 0; i < length; i++) {
        obj[i] = lowercaseArray[i].toString();
    }
    for (let j = 0; j < length; j++) {
        obj[j+100] = uppercaseArray[j].toString();
    }
    obj[200] = " ";//spaces
    return obj;
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function getNewValFromOldVal(object, oneArrayEl, shift) {
    //get key of old letter/value
    let key = Number(getKeyByValue(object, oneArrayEl.toString()));
    let newKey = null;
    //set new key from old key
    if (key === 200) {
        newKey = key;
    } else {
        if (key < 26) {//lower case stuff
            newKey = key + shift;
            if (newKey > 25) {//ex: key of 25, shift of 2 (z > b)
                //newKey of 27
                newKey = (newKey - 25) - 1; //need go to from 25 to 2
                //23 + 3 shift = 26, should be a (key of 0)
            } else if (newKey < 0) {//ex: key of 0, shift of -1 (a > z)
                //newKey of -1
                newKey = 26 + shift;//need to go from 0 to 25
            };
        } else {
            newKey = key + shift;
            if (newKey > 125) {//ex: key of 125, shift of 2 (Z > B)
                //newKey of 127
                newKey = (newKey - 25) - 1; //need go to from 125 to 102
            } else if (newKey < 100) {//ex: key of 100, shift of -1 (A > Z)
                //newKey of 99
                newKey = 126 + shift;//need to go from 100 to 125
            };
        }
    }
    let newVal = object[newKey];
    return newVal;
}
  

function caesarCipher(str, shift) {
    let mainObj = generateNumbersForLetters();
    //object has key 0-25 for a-z, key 100-125 for A-Z
    let strToShift = str.split("");
    let stringHolder = "";
    strToShift.forEach(el => {
        let newVal = getNewValFromOldVal(mainObj, el, shift);
        stringHolder = stringHolder.concat(newVal);
    });
    return stringHolder;
}

module.exports = { 
    capitalize: capitalize, 
    reverseString: reverseString,
    caesarCipher: caesarCipher
} 
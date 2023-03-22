function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function divide(a,b) {
    return (a/b);
}

function multiply(a,b) {
    return a*b;
}

/* takes an array of numbers and returns an object with the following properties: average, min, max, and length */
function analyzeArray(array) {//ex: [1,2,4,5]
    let object = {average: null, min: null, max: null, length: array.length};
    let total = array.reduce((prev, cur) => prev + cur, 0);
    object.average = total/array.length;
    let minHolder = null;
    array.forEach(el => {
        if (minHolder === null) {
            minHolder = el;
        } else {
            if (el < minHolder) {
                minHolder = el;
            }
        }
    })
    object.min = minHolder;
    let maxHolder =  null;
    array.forEach(el => {
        if (maxHolder === null) {
            maxHolder = el;
        } else {
            if (el > maxHolder) {
                maxHolder = el;
            }
        }
    })
    object.max = maxHolder;

    return object;
}

module.exports = { 
    add: add, 
    subtract: subtract,
    divide: divide,
    multiply: multiply,
    analyzeArray: analyzeArray
} 
function deepEqual(x, y) {
    if (x === y) {
        return true;
    }

    if (typeof x === 'object' && x !== null && typeof y === 'object' && y !== null){
        for (let prop in x) {
            if(y.hasOwnProperty(prop)) {
                deepEqual(x[prop], y[prop]);
            }
        }
    }
    return true;
}

let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
function deepEqual(x, y) {
    if (x === y) {
        return true;
    }

    if (typeof x === 'object' && x !== null && typeof y === 'object' && y !== null){
        let xKeys = Object.keys(x);
        let yKeys = Object.keys(y);

        if(xKeys.length !== yKeys.length) {
            return false;
        }
    }
    return true;
}

let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
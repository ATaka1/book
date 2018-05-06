function deepEqual(x, y) {
    if (x === y) {
        return true;
    }

    else if (typeof x === 'object' && x !== null && typeof y === 'object' && y !== null){
        if( Object.keys(x).length !== Object.keys(y).length) {
            return false;
        }
        for (let prop in x) {
            if(y.hasOwnProperty(prop)) {
                if ( !deepEqual(x[prop], y[prop]) ) {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }

}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
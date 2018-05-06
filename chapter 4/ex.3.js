function List(value, rest) {
    this.value = value;
    this.rest = rest;
}

function arrayToList(arr) {
    let root = new List(arr[arr.length - 1], null);
    var list = root;
    for(let i = arr.length - 2; i >= 0; i--) {
        var tempList = new List(arr[i], list);
        list = tempList;
    }
    return list;
}

function listToArray(list) {
    let arr = [];
    for(let node = list; node; node=node.rest) {
        arr.push(node.value);
    }
    return arr;
}

function prepend(value, list) {
    let newList = new List(value, list);
    return newList;
}

// function nth(list, index) {
//     if(!list) {
//         return undefined;
//     }
//     else if(index === 0) {
//         return list.value;
//     }
//     else {
//         return nth(list.rest, index - 1);
//     }
// }

function nth(list, index) {
    let count = 0;
    for(let node = list; node; node = node.rest) {
        if(count == index) {
            return node.value;
        }
        count++;
    }
    return undefined;
}


console.log(arrayToList([10, 20, 30]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
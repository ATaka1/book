function  reverseArray(arr) {
    let newArray = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
}

function reverseArrayInPlace(arr) {
    let mid = Math.floor(arr.length / 2);
    for(let i = 0; i < mid; i++) {
        let temp = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i];
        arr[i] = temp;
        // console.log(arr);
    }
    // console.log(arr);
}



console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
// console.log(arrayValue);
reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
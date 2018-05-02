function range(start, end, step) {
    let numbers = [];
    for(let i = start; i <= end; i++) {
        numbers.push(i);
    }
    return numbers;
}

function sum(arr) {
    let sum = 0;
    arr.forEach(function(num) {
        sum += num;
    });
    return sum;
}

console.log(sum(range(1, 10)));
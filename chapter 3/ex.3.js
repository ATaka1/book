function countBs(str) {
    const letter = "B";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] === letter) {
            count++;
        }
    }
    return count;
}

function countChar(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] === letter) {
            count++;
        }
    }
    return count;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
let string = "";
let counter = 1;
for(let i = 0; i < 7; i++) {
    for(let j = 0; j < 8; j++) {
        if( counter % 2 === 0) {
            string += "#";
            counter++;
        }
        else {
            string += " ";
            counter++;
        }
    }
    string += "\n";
    counter++;
}
console.log(string);
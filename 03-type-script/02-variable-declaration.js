var number = 1;
var count123 = 2;
function print() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Printing" + i);
}
print();
var count = 1;
count = "a";
console.log(count);
// There is error in Line Number-9,13,14...
// Scope of let in within for loop only
// But if you generate js file, you get proper js fileand output

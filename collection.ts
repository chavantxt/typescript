//---------------Set------------------- - Do not add duplicate data
let mySet = new Set();

mySet.add("Hello");
mySet.add(1 );
mySet.add(1);

console.log(mySet.size); //output : 2

let newSet = new Set([1,2,3,4,4,4,4]);
console.log(newSet.size);//o/p : 4

let chainSet = new Set().add("Hello").add("World");

console.log(chainSet.size); // o/p: 2

console.log(newSet.has(1)); //true
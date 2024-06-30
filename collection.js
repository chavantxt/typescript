//---------------Set------------------- - Do not add duplicate data
var mySet = new Set();
mySet.add("Hello");
mySet.add(1);
mySet.add(1);
console.log(mySet.size); //output : 2
var newSet = new Set([1, 2, 3, 4, 4, 4, 4]);
console.log(newSet.size); //o/p : 4
var chainSet = new Set().add("Hello").add("World");
console.log(chainSet.size); // o/p: 2
console.log(newSet.has(1)); //true
//---------------WeakSet---------------
var mysetw = new Set();
var key = {};
mysetw.add(key);
console.log(mySet.size);

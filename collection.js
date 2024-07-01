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
console.log(mySet.size);
//-----------------Map-------------------
var myMap = new Map();
myMap.set("fname", "Chandlar");
myMap.set("age", 30);
console.log(myMap.get("fname"));
var ob1 = {};
var ob2 = {};
myMap.set(ob1, 10);
myMap.set(ob2, 20);
console.log(myMap.get(ob1));
console.log(myMap.size);
console.log(myMap.has(20));
myMap.delete("fname");
console.log(myMap.size);
console.log(myMap.keys());
console.log(myMap.values());
for (var _i = 0, _a = myMap.values(); _i < _a.length; _i++) {
    var value = _a[_i];
    console.log(value);
}
var numbers = [2, 4, 6, 8];
function arrayFunction(element, index, array) {
    console.log("arr[" + index + "] = " + element);
}
;
//----------------WeakMap----------------------
var myMap5 = new WeakMap();
var obb1 = {};
myMap5.set(obb1, "Hello World");
console.log(myMap5.get(obb1));
var obb2 = null;
// myMap5.set(obb2,"myMap5"); - Thiśwe can not assign
//-------------Symbol-------------------------
var s = Symbol("First Symbol");
console.log(typeof s);
console.log(s.toString());
var s2 = Symbol();
var s3 = Symbol();
console.log(s.valueOf());
console.log(s2 === s3);

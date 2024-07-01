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

//---------------WeakSet---------------

let mysetw=new Set ();
let key ={};
mysetw.add(key);
console.log(mySet.size);
console.log(mySet.size);

//-----------------Map-------------------

let myMap = new Map();
myMap.set("fname","Chandlar")
myMap.set("age",30);
console.log(myMap.get("fname")); 
let ob1= {};
let ob2={};
myMap.set(ob1,10);
myMap.set(ob2,20);
console.log(myMap.get(ob1));
console.log(myMap.size);
console.log(myMap.has(20));
myMap.delete("fname");
console.log(myMap.size);

console.log(myMap.keys());
console.log(myMap.values());


for(let value of myMap.values()){
    console.log(value);
}

var numbers=[2,4,6,8];

function arrayFunction(element:any,index:any,array:any[]){
    console.log("arr["+index+"] = "+element);
};


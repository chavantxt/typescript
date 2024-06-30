console.log("Hello Wolrd!!!")

function greetPerson(name:String){

    if(name==="Chandler"){
        var greet = "Hello Calender";
    }
    else
    {
        var greet="Hi there";
    }
    console.log(greet);
}
greetPerson("Tejaswini");

var a=1;
var b=2;
if(a ===1 ){
    var a=10;
    let b=20;
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);

for(let i=0;i<5;i++){
    setTimeout(function(){console.log(i);},1000)
}

let num1;
const num2=10;
 
const obj = {
    name:"Joatmon"
}
console.log(obj.name)

// function keyword
var getRegValue = function(){
    return 10;
}

console.log(getRegValue());

// Arrow Function
const getArrowValue = () =>{
    return 10;  
}

console.log(getArrowValue())

// typeof
console.log(typeof getArrowValue())

var employee={
    id:1,
    greet:function(){
        console.log(this.id)
    }
};
console.log(employee.greet());

//default function parameter

let getValue = function(value=1){
    console.log(value);
};
getValue(10);

let getFunValue = function(value=10,bouns=value*0.1){

    console.log(value);
    console.log(bouns);

};

getFunValue(20);

let displayColor=function(message:String,...color:String[]){
    console.log(message);
    console.log(color);
    for(let i in color){
        console.log(color[i]);
    }
}

displayColor("I lové u","Yellow","green");
class Person{

    constructor(name:String){
        console.log(name + "Constuctor")
    }

    static staticMethod(){
        console.log("Static Method")
    }

    greet(){}
}

class Employee extends Person{

    constructor(name:String){
        super(name);
        console.log(name + "Employee ")
    }
}


let p2 = new Person("Teju");
console.log(p2.greet === Person.prototype.greet);


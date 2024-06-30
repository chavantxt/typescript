let fname="Tejaswini";
let lname="Chavan";

let person = {
    firstName: fname,
    lastName: lname
};

console.log(person.firstName);
console.log(person.lastName);

function createPerson(firstName:String,lastName:String){
    let fullname=firstName+ " " + lastName;
    return {firstName,lastName,fullname}
}

let p=createPerson("Ross","Geller");
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullname); 

var fname = "Tejaswini";
var lname = "Chavan";
var person = {
    firstName: fname,
    lastName: lname
};
console.log(person.firstName);
console.log(person.lastName);
function createPerson(firstName, lastName) {
    var fullname = firstName + " " + lastName;
    return { firstName: firstName, lastName: lastName, fullname: fullname };
}
var p = createPerson("Ross", "Geller");
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullname);

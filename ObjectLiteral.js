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
var employee2 = ["Chanlar", "Bing"];
var fname2;
var lname2;
fname2 = employee2[0], lname2 = employee2[1];
console.log(fname2);
console.log(lname2);

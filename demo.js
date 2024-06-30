console.log("Hello Wolrd!!!");
function greetPerson(name) {
    if (name === "Chandler") {
        var greet = "Hello Calender";
    }
    else {
        var greet = "Hi there";
    }
    console.log(greet);
}
greetPerson("Tejaswini");
var a = 1;
var b = 2;
if (a === 1) {
    var a = 10;
    var b_1 = 20;
    console.log(a);
    console.log(b_1);
}
console.log(a);
console.log(b);
var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, 1000);
};
for (var i = 0; i < 5; i++) {
    _loop_1(i);
}
var num1;
var num2 = 10;
var obj = {
    name: "Joatmon"
};
console.log(obj.name);
// function keyword
var getRegValue = function () {
    return 10;
};
console.log(getRegValue());
// Arrow Function
var getArrowValue = function () {
    return 10;
};
console.log(getArrowValue());
// typeof
console.log(typeof getArrowValue());
var employee = {
    id: 1,
    greet: function () {
        console.log(this.id);
    }
};
console.log(employee.greet());

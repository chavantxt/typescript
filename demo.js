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
//default function parameter
var getValue = function (value) {
    if (value === void 0) { value = 1; }
    console.log(value);
};
getValue(10);
var getFunValue = function (value, bouns) {
    if (value === void 0) { value = 10; }
    if (bouns === void 0) { bouns = value * 0.1; }
    console.log(value);
    console.log(bouns);
};
getFunValue(20);
var displayColor = function (message) {
    var color = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        color[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(color);
    for (var i in color) {
        console.log(color[i]);
    }
};
displayColor("I lové u", "Yellow", "green");

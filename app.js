// Variables
var myName = "Bishal";
var PI = 3.14;
// Functions
// 1. Normal Fuction
function Greeting(name, message) {
    console.log("Hello! ".concat(name, ". ").concat(message));
}
Greeting("Deepthi", "How are you!!");
// 2. Arrow Fuction
var Greet = function (name, msg) {
    return "Hello ".concat(name, ". ").concat(msg);
};
console.log(Greet("Bishal", "How are you!!"));
var displayData = function (person) {
    console.log("First Name: ".concat(person.fName));
    console.log("Last Name: ".concat(person.lName));
    console.log("Age: ".concat(person.age));
    console.log("Gender: ".concat(person.gender));
};
displayData({ fName: 'Bishal', lName: 'J', age: 21, gender: true });
// 1. Multiplying two number
function multiplyTwoNumbers(number1, number2) {
    return number1 * number2;
}
console.log(multiplyTwoNumbers(12, 21));
// 2. Add two strings
var addTwoStrings = function (firstName, lastName) {
    return firstName + " " + lastName;
};
console.log(addTwoStrings('Deepthimayi', 'Rana Singh'));
// Arrays 
var vowels = ['a', 'e', 'i', 'o', 'u'];
vowels.map(function (vowel) {
    console.log("".concat(vowel));
});
// 1. Multiplication using Array
var tableLists = [2, 3, 4];
var count = 10;
tableLists.map(function (table) {
    for (var x = 1; x <= count; x++) {
        console.log("".concat(table, " x ").concat(x, " = ").concat(table * x));
    }
});

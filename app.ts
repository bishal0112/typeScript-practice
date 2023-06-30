// Variables

let myName: string = "Bishal";
const PI: number = 3.14;

// Functions

// 1. Normal Fuction
function Greeting(name: string, message: string) {
	console.log(`Hello! ${name}. ${message}`);
}

Greeting("Deepthi", "How are you!!");

// 2. Arrow Fuction

const Greet = (name: string, msg: string) => {
	return `Hello ${name}. ${msg}`;
};
console.log(Greet("Bishal", "How are you!!"));

// Type keyword

type Person = {
	fName: string;
	lName: string;
	age: number;
	gender: boolean;
};

const displayData = (person: Person) => {
	console.log(`First Name: ${person.fName}`);
	console.log(`Last Name: ${person.lName}`);
	console.log(`Age: ${person.age}`);
	console.log(`Gender: ${person.gender}`);
};

displayData({fName: 'Bishal', lName: 'J', age: 21, gender: true});

// 1. Multiplying two number

function multiplyTwoNumbers(number1: number, number2: number): number {
	return number1 * number2;
}
console.log(multiplyTwoNumbers(12,21));

// 2. Add two strings

const addTwoStrings = (firstName: string, lastName: string): string => {
	return firstName + " " + lastName;
}
console.log(addTwoStrings('Deepthimayi', 'Rana Singh'));

// Arrays 

const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];

vowels.map(vowel => {
	console.log(`${vowel}`);
})

// 1. Multiplication using Array

const tableLists: number[] = [2,3,4];
let count: number = 10;

tableLists.map(table => {
	for(let x: number = 1; x <= count ; x++) {
		console.log(`${table} x ${x} = ${table * x}`);
	}
})


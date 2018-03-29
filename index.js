"use strict";

function askTrueFalse() {
	if(confirm("Click OK if you agree and No if you disagree.")) {
		alert("You clicked yes!");
	} else {
		alert("You clicked no!")
	}
}

function askTrueFalseTernary() {
	confirm("Click OK if you agree and No if you disagree.") ? alert("You clicked yes!") : alert("You clicked no!");
}

function inputNumber() {
	let number = prompt("Please input your favorite number.");
	if(number == null) {
		alert("You hit cancel");
	} else if(isNaN(number)) {
		alert("You did not enter a number.");
	} else if(number == "") {
		alert("You didn't input anything.");
	} else {
		alert("Your favorite number is " + number);
	}
}

function RandomConstructorFunction(newName, newNumber) {
	this.name = newName;
	this.number = newNumber;
	this.twoNumber = newNumber * 2;
}

function CopyObject(object, lastName) {
    this.name = object.name;
    this.number = object.number;
    this.twoNumber = object.twoNumber;
    this.lastName = lastName;
} 

function optionalDefault(firstNumber, secondNuber, thirdNumber) {
	if(thirdNumber == undefined) {
		thirdNumber = 1;
	}
	return firstNumber * secondNuber * thirdNumber;
}


let optionalDefaultExpression = function(firstNumber, secondNumber, thirdNumber) {
	if(thirdNumber == undefined) {
		thirdNumber = 1;
	}
	return firstNumber * secondNuber * thirdNumber;
}

// askTrueFalse();
// askTrueFalseTernary();
// inputNumber();
// let newPerson = new RandomConstructorFunction(prompt("Please enter your name"), prompt("please enter a random number"));
// console.log("This is a newPerson " + newPerson.name + " " + newPerson.number + " " + newPerson.twoNumber);
// let newerPerson = new CopyObject(newPerson, prompt("enter your last name"));
// console.log("This is a newerPerson " + newerPerson.name + " " + newerPerson.lastName + " " + newerPerson.number + " " + newerPerson.twoNumber);
// optionalDefault(12, 15);
// optionalDefaultExpression(12. 15);
// let nums = [25, 24];
// console.log(nums.map(({multiply}) => multiply));
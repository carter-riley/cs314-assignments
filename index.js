"use strict";

// 1: Char Swap
function charSwap(inputString) {
	if(inputString == null) {
		alert("You hit cancel");
		return;
	} else if(inputString == "") {
		alert("You did not enter anything");
		return;
	}

	let first = inputString.slice(0,1);
	let last = inputString.slice(inputString.length - 1, inputString.length);
	
	inputString = inputString.substring(1,inputString.length);
	inputString = inputString.substring(0,inputString.length - 1);

	let newString = last + inputString + first;
	
	alert("This is your new string: " + newString);
}

// 2: Hi String
function greeting(name) {
	if(name == null) {
		alert("You hit cancel");
		return;
	} else if(name == "") {
		alert("You did not enter anything");
		return;
	}

	if(name.substring(0,2) == "Hi") {
		alert(name);
	} else {
		alert("Hi " + name);
	}
}

// 3: Three Chars to Front
function threeCharFront(inputString) {
	if(inputString == null) {
		alert("You hit cancel");
		return;
	} else if(inputString == "") {
		alert("You did not enter anything");
		return;
	} else if(inputString.length < 3) {
		alert("The string was shorter than three characters.");
		return;
	}

	let newString = inputString.slice(inputString.length - 3,inputString.length) + inputString.substring(0,inputString.length - 3);
	alert("The new string is: " + newString);
}

// 4: Strings to Sentence
function stringSentence(stringList) {
	if(stringList == null) {
		alert("You hit cancel");
		return;
	} else if(stringList == "") {
		alert("You did not enter anything");
		return;
	}
	let stringArray = stringList.split(", ");
	
	alert(`My favorite color is ${stringArray[0]}, ${stringArray[1]} are awesome, and I love ${stringArray[2]}`);
}

// 5: Upper or Lower
function upperLower(someString) {
	if(someString == null) {
		alert("You hit cancel");
		return;
	} else if(someString == "") {
		alert("You did not enter anything");
		return;
	}
	let newString = "";
	
	if(someString.length > 3) {
		newString = someString.slice(0,3);
		newString = newString.toLowerCase() + someString.slice(3,someString.length);
	} else {
		newString = someString.toUpperCase();
	}
	
	alert("Your new string is: " + newString);
}

// 6: Integer Swap
function integerSwap(numList) {
	if(numList == null) {
		alert("You hit cancel");
		return;
	} else if(numList == "") {
		alert("You did not enter anything");
		return;
	}

	let numArray = numList.split(",");
	
	let last = numArray.pop();
	let first = numArray.shift();
	
	numArray.unshift(last);
	numArray.push(first);
	alert("The new array is: " + numArray);
}

// 7: Longest String
function longestString(stringList){
	if(stringList == null) {
		alert("You hit cancel");
		return;
	} else if(stringList == "") {
		alert("You did not enter anything");
		return;
	}

	let stringArray = stringList.split(",");
	let lengthOfLongestString = 0;
	let currLongestString = 0;

	for(let i = 0; i < stringArray.length; i++) {
		if(stringArray[i].length > lengthOfLongestString) {
			lengthOfLongestString = stringArray[i].length;
			currLongestString = i;	
		}
	}
	alert("The longest string is: " + stringArray[currLongestString]);
}

// 8: Largest Even Number
function largestEvenNumber(numList) {
	if(numList == null) {
		alert("You hit cancel");
		return;
	} else if(numList == "") {
		alert("You didn\'t input anything.");
		return;
	}

	let largestNum = 0;
	let newNum;

	for(let i = 0; i < numList.length; i++) {
		if(numList[i] > largestNum && numList[i] % 2 == 0) {
			largestNum = numList[i];
		}
	}
	if(largestNum != NaN) {
		alert("The largest even number in the list you provided is: " + largestNum);
	} else {
		alert("You did not enter any even numbers");
	}
}

// 9: Current Day Time
function currentDayTime() {
	let now = new Date();
	let dayOfWeek;
	switch(now.getDay()) {
		case 0:
			dayOfWeek = "Sunday";
			break;
		case 1:
			dayOfWeek = "Monday";
			break;
		case 2:
			dayOfWeek = "Tuesday";
			break;
		case 3:
			dayOfWeek = "Wednesday";
			break;
		case 4:
			dayOfWeek = "Thursday";
			break;
		case 5:
			dayOfWeek = "Friday";
			break;
		case 6:
			dayOfWeek = "Saturday";
			break;
		default:
			dayOfWeek = "Something went wrong";
			break;
	}

	let AMPM;
	let hours;

	if(now.getHours() > 12) {
		hours = now.getHours() - 12;
		AMPM = "PM";
	} else if(now.getHours() == 12) {
		hours = 12
		AMPM = "PM";
	}else {
		hours = now.getHours();
		AMPM = "AM";
	}

	alert("Today is " + dayOfWeek + ".\nIt is " + hours + ":" + now.getMinutes() + " " + AMPM);
}

// 10: Unlimited Function
function unlimitedFunction() {
	let togetherString = "";
	for(let i = 0; i < arguments.length; i++) {
		togetherString += arguments[i];
	}
	alert(togetherString);
}

// Function calls:
charSwap(prompt("Please enter a string."));
greeting(prompt("Please enter a string."));
threeCharFront(prompt("Please enter a string longer than 3 characters"));
stringSentence(prompt("Please enter strings seperated by commas."));
upperLower(prompt("Please input a string."));
integerSwap(prompt("Please enter numbers seperated by commas."));
longestString(prompt("Please enter strings seperated by commas."));
largestEvenNumber(prompt("Please enter numbers seperated by commas."));
currentDayTime();
unlimitedFunction("Hello ", "my ", "name ", "is ", "Carter.");
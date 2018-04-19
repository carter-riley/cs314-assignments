"use strict";

function moveOnClick(number) {
	console.log("You clicked: " + number.toString());
	document.getElementById(number).scrollIntoView();
}

function backgroundColorOnClick(color) {
	console.log("You clicked: " + color);
	document.getElementById("html").style.backgroundColor = color;
}

function backgroundColorOnClick2() {
	let currentColor = document.getElementById("colorButton").innerText;
	let color = currentColor.substring(10);
	let newColor = color.substring(0, color.length - 1);
	console.log("You clicked: " + newColor);
	document.getElementById("html").style.backgroundColor = newColor;
	if(newColor == "pink") {
		document.getElementById("colorButton").innerText = "Click for orange!";
	} else {
		document.getElementById("colorButton").innerText = "Click for pink!";
	}
}

function addTextInput() {
	let input = document.getElementById("input").value;

	let listObject = document.createElement("LI");
	let text = document.createTextNode(input);
	listObject.appendChild(text);
	document.getElementById("newItemList").appendChild(listObject);
	console.log("You submitted: " + input);
}

function removeListItem(currentElement) {
	console.log("you pressed item: " + currentElement);
	let list = document.getElementById("removeListItem");
	if(list.hasChildNodes()) {
		list.removeChild(list.childNodes[currentElement]);
		if(currentElement == 1) {
			list.removeChild(list.childNodes[1]);
		} else if(currentElement == 2) {
			list.removeChild(list.childNodes[3]);
		} else if(currentElement == 3) {
			list.removeChild(list.childNodes[5]);
		} else if(currentElement == 4) {
			list.removeChild(list.childNodes[7]);
		}
	}
}

function highLightListItem(currentElement) {
	let list = document.getElementById("highLightListItem");
	list.childNodes[1].style.backgroundColor = "lightgray";
 	list.childNodes[3].style.backgroundColor = "lightgray";
 	list.childNodes[5].style.backgroundColor = "lightgray";
	list.childNodes[7].style.backgroundColor = "lightgray";
	 
	if(currentElement == 1) {
		list.childNodes[1].style.backgroundColor = "red";
	} else if(currentElement == 2) {
		list.childNodes[3].style.backgroundColor = "red";
	} else if(currentElement == 3) {
		list.childNodes[5].style.backgroundColor = "red";
	} else if(currentElement == 4) {
		list.childNodes[7].style.backgroundColor = "red";
	}
	// document.getElementById("highListListItem").style.backgroundColor = "red";
}
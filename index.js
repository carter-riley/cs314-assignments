'use strict'

$.ajax({
	url: "https://jsonplaceholder.typicode.com/users/",
	type: "GET",
	dataType: "json",
})
.done( function( json ) {
	$(event.target).attr('data-loaded', 'true');
	
	getResponse(json);
})

function getResponse(response) {
	for(let i = 0; i < response.length; i++) {
		let newParagraph = $(`<p id='id${response[i].id}'></p>`);
		$("body").append(newParagraph);
		
        $(`#id${response[i].id}`).append("Name: " + response[i].name);
        $(`#id${response[i].id}`).append("<br>");
		$(`#id${response[i].id}`).append("Email: " + response[i].email);
        $(`#id${response[i].id}`).append("<br>");
		$(`#id${response[i].id}`).append("Company: " + response[i].company.name);
        $(`#id${response[i].id}`).append("<br>");
		$(`#id${response[i].id}`).append(`<button id="todo${response[i].id}" onClick='todoOnClick(${response[i].id})'>Click to see Todos</button>`);
        $(`#id${response[i].id}`).append("<br>");
		$(`#id${response[i].id}`).append(`<button id="album${response[i].id}" onClick='albumOnClick(${response[i].id})'>Click to see Albums</button>`);
	}
}



function todoOnClick(number) {
	$.ajax({
		url: "https://jsonplaceholder.typicode.com/todos/",
		type: "GET",
		dataType: "json",
	})
	.done( function( json ) {
		$(event.target).attr('data-loaded', 'true');
		
		getToDo(json, number);
	})
}

function getToDo(response, userID) {
    $(`#todo${userID}`).replaceWith(`<button id="todo${userID}" onClick='removeTodo(${userID})'>Click to remove Todos</button>`);

	$(`#id${userID}`).append(`<ul class="todoList${userID}">`)

	
	for(let i = 0; i < response.length; i++) {
		if(response[i].userId == userID) {
            if(response[i].completed) {
			    $(`.todoList${userID}`).append("<li>" + response[i].title + " <i class='fas fa-check-square'></i></li>");
            } else {
			    $(`.todoList${userID}`).append("<li>" + response[i].title + "<i class='fas fa-square'></i></li>");
            }
		}
	}
	
	$(`#id${userID}`).append("</ul>")
}

function removeTodo(userID) {
    $(`#todo${userID}`).replaceWith(`<button id="todo${userID}" onClick='todoOnClick(${userID})'>Click to see Todos</button>`);
    $(`.todoList${userID}`).remove();
}

function albumOnClick(number) {
		$.ajax({
		url: "https://jsonplaceholder.typicode.com/albums/",
		type: "GET",
		dataType: "json",
	})
	.done( function( json ) {
		$(event.target).attr('data-loaded', 'true');
		
		getAlbum(json, number);
	})
}

function getAlbum(response, userID) {
    $(`#album${userID}`).replaceWith(`<button id="album${userID}" onClick='removeAlbum(${userID})'>Click to remove Albums</button>`);

    $(`#id${userID}`).append(`<ul class="albumList${userID}">`)
	
	for(let i = 0; i < response.length; i++) {
		if(response[i].userId == userID) {
			$(`.albumList${userID}`).append("<li>" + response[i].title + "</li>")
		}
	}
	
	$(`#id${userID}`).append("</ul>")
}

function removeAlbum(userID) {
    $(`#album${userID}`).replaceWith(`<button id="album${userID}" onClick='albumOnClick(${userID})'>Click to see Albums</button>`);
    $(`.albumList${userID}`).remove();
}
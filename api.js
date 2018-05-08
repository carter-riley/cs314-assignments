'use strict'

getHackerNewsStories();

function getHackerNewsStories() {
	$.ajax({
		url: "https://hacker-news.firebaseio.com/v0/topstories.json",
		type: "GET",
		dataType: "json",
	})
	.done( function( topStories ) {
		$(event.target).attr('data-loaded', 'true');
		// topStories.length
		for(let i = 0; i < topStories.length; i++) {
			$.ajax({
				url: "https://hacker-news.firebaseio.com/v0/item/" + topStories[i] + ".json",
				type: "GET",
				dataType: "json",
			})
			.done( function( item ) {
				$(event.target).attr('data-loaded', 'true');
				
				// console.log(item.title);

				let newParagraph = $(`<p class='id${item.id}'></p>`);
				$("#hackerNews").append(newParagraph);
		
  		        $(`.id${item.id}`).append(item.title);
        		$(`.id${item.id}`).append("<br>");
				$(`.id${item.id}`).append("Posted by: " + item.by);
        		$(`.id${item.id}`).append("<br>");
				$(`.id${item.id}`).append("ID: " + item.id);
				$(`.id${item.id}`).append("<br>");
				if(item.kids != "null") {
					$(`.id${item.id}`).append(`<button id="button${item.id}" onClick='getComments(${item.id})'>Click to see Comments</button>`);
				} else {
					$(`.id${item.id}`).append("There are no comments right now :(");
				}
				// getitem(json);
			})
		}
	})
}

// console.log(getCurrentMax().toString());
function getComments(itemID) {
	$.ajax({
		url: "https://hacker-news.firebaseio.com/v0/item/" + itemID + ".json",
		type: "GET",
		dataType: "json",
	})
	.done( function( item ) {
		$(event.target).attr('data-loaded', 'true');

		// $(`#id${itemID}`).append("<p>")
		
		if(item.kids != "null") {
			// $(`#id${itemID}`).append(`<p class="commentList${itemID}"></p>`)
			
			for(let i = 0; i < item.kids.length; i++) {
				$.ajax({
					url: "https://hacker-news.firebaseio.com/v0/item/" + item.kids[i] + ".json",
					type: "GET",
					dataType: "json",
				})
				.done( function( response ) {
					$(event.target).attr('data-loaded', 'true');

					
					$(`#button${itemID}`).replaceWith(`<button id="button${response.id}" onClick='removeComments(${response.id, itemID})'>Click to remove Comments</button>`);

					let newParagraph = $(`<p class='id${response.id}'></p>`);
					$(`.id${itemID}`).append(newParagraph);
			
					$(`.id${response.id}`).append(response.text);
					$(`.id${response.id}`).append("<br>");
					$(`.id${response.id}`).append("Posted by: " + response.by);
					$(`.id${response.id}`).append("<br>");
					$(`.id${response.id}`).append("ID: " + response.id);
					$(`.id${response.id}`).append("<br>");
					if(response.kids != null) {
						$(`.id${response.id}`).append(`<button id="button${response.id}" onClick='getComments(${response.id})'>Click to see Comments</button>`);
					} else {
						$(`.id${response.id}`).append("There are no comments right now :(");
					}
				})
			}
		} else {	
			$(`#id${itemID}`).append("There are no comments.")
		}		

		$(`#id${itemID}`).append("</p>")
	})
	
}

function removeComments(itemID, prev) {
    $(`#button${itemID}`).replaceWith(`<button id="button${itemID}" onClick='getComments(${itemID})'>Click to see Comments</button>`);
    $(`.id${itemID}`).remove();
}
/*

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

function getAlbum(item, userID) {
    $(`#album${userID}`).replaceWith(`<button id="album${userID}" onClick='removeAlbum(${userID})'>Click to remove Albums</button>`);

    $(`#id${userID}`).append(`<ul class="albumList${userID}">`)
	
	for(let i = 0; i < item.length; i++) {
		if(item[i].userId == userID) {
			$(`.albumList${userID}`).append("<li>" + item[i].title + "</li>")
		}
	}
	
	$(`#id${userID}`).append("</ul>")
}

function removeAlbum(userID) {
    $(`#album${userID}`).replaceWith(`<button id="album${userID}" onClick='albumOnClick(${userID})'>Click to see Albums</button>`);
    $(`.albumList${userID}`).remove();
}
*/
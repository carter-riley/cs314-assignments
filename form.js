'use strict'

function submitFunction() {
    // console.log("Submitted");

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let reason = document.getElementById("reason").value;

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("reason").value = "";

    if(name == null || name == "") {
        alert("You did not enter a name");
        return;
    } else if(email == null || email == "") {
        alert("You did not enter an email");
        return;
    } else if(reason == null || reason == "") {
        alert("You did not enter a reason");
        return;
    }
  
    
	$(`#formResults`).append("<br>");
  	$(`#formResults`).append("Name: " + name);
   	$(`#formResults`).append("<br>");
	$(`#formResults`).append("Email: " + email);
    $(`#formResults`).append("<br>");
	$(`#formResults`).append("Reason: " + reason);
	$(`#formResults`).append("<br>");
}

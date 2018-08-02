

function test(){
	var textbox = document.getElementById("textbox");
    var myBtn = document.getElementById("myBtn");
	var messages = document.getElementById("messages");
	var newMessage = document.createElement("p");
	newMessage.innerHTML = textbox.value;
	messages.appendChild(newMessage);
	textbox.value = "helo";
}
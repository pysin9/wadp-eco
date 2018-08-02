
function back() {
	setInterval(function() {
	alert('Are you still there?') 
	} , 60000) 
} 

back() 

function changeMenu(value) {
	if (value == 'videos') {
		location.assign('Demo Videos.html') 
	} 
	
	else if (value == 'submitVideos') {
		location.assign('submitVideos.html') 
	} 
	
	else if (value == 'help-section') {
		location.assign('Animated Guide.html') 
	} 
	else { 
		alert('I do not know') 
		location.assign('homepage.html') 
	} 
} 
 
minutes = (1000 * 60) 
hours = 60 * minutes

function logout() {
	setInterval(function() {
	location.replace('login.html') 
	}, hours) 
}
logout() 

document.querySelector("li."

function search () {
	var search = document.getElementById('search').value
	console.log(search);
	var input  = JSON.stringify(search);
		if (input== 'game') {
	location.assign('game.html');
	}
	else if (input=='video') {
	var ask = prompt('Is this what you want?');
	}
	else {
	alert('Please try again, I do not know!');
	}
	} 
 
document.getElementById('searchButton').addEventListener('click', search()) 	
var username = localStorage.getItem('saveUsername') 
console.log(username) 
function welcome () {
	var element = document.createElement('li'); 
	
	var message = document.createTextNode('Welcome, '+ username);
	element.appendChild(message);
	document.querySelector('li').appendChild(element);
} 

welcome() 

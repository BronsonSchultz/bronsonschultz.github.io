
var count = 0;
var button = document.getElementById("nButton");
var display = document.getElementById("displayCount");


 
  


button.onclick = function(){
	var n = prompt("How many progressions do you want to generate?", 10);
	display.innerHTML = "Here are " + n + " progressions:";
}


function get_progression(){
}


var colors = randomColors(6);
var squares = document.querySelectorAll(".squares");
var goalColor;
var messageDisplay = document.querySelector("#message");
var winColor = document.querySelector("#win");
var colorDisplay = document.getElementById("display");
var resetButon = document.getElementById("restart");

resetButon.addEventListener("click", function(){
	colors = randomColors(6);
	goalColor = colors[rand0to5()];
	colorDisplay.textContent = goalColor;
	for(var i=0; i< squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	winColor.style.backgroundColor = "#232323";
	resetButon.textContent = "Mudar Cores";
})





for(var i =0; i <  squares.length; i++){

	//coloca as cores no lugar
	squares[i].style.backgroundColor = colors[i];
	goalColor = colors[rand0to5()];
	colorDisplay.textContent = goalColor;
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		
		console.log(clickedColor, goalColor);

		if(clickedColor === goalColor){
			messageDisplay.textContent = "certô";
			win(clickedColor);
			resetButon.textContent = "jogar novamente";
		}
		
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "erô";
		}
	});
}





function win(color){
	for(var i =0; i< colors.length; i++){
		squares[i].style.backgroundColor = color;
    	}
    	winColor.style.backgroundColor = color;

}

function generateRgb(){
	var r = Math.floor(Math.random() * 255 +1);
	var g = Math.floor(Math.random() * 255 +1);
	var b = Math.floor(Math.random() * 255 +1);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


function randomColors(num){
	arr = [];

	for(var i =0; i< num; i++){
		arr.push(generateRgb());
	}
	return arr;
}

function rand0to5() {
	return Math.floor(Math.random() * 5 +1);
}
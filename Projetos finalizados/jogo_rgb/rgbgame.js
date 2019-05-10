var colors = randomColors(6);
var modeButtons = document.querySelectorAll(".mode");
var squares = document.querySelectorAll(".squares");
var messageDisplay = document.querySelector("#message");
var winColor = document.querySelector("#win");
var colorDisplay = document.getElementById("display");
var resetButon = document.getElementById("restart");
var hard = document.getElementById("hard");
var expert = document.getElementById("expert");
var easy = document.getElementById("easy");
var numbSquares = 6;
var pickedColor;


init();


function init(){
	
	setupModebuttons();


	for(var i =0; i <  squares.length; i++){

		//coloca as cores no lugar
		squares[i].style.backgroundColor = colors[i];
		colorDisplay.textContent = pickedColor;
		squares[i].addEventListener("click",function(){
			var clickedColor = this.style.backgroundColor;
			
			console.log(clickedColor, pickedColor);

			if(clickedColor === pickedColor){
				messageDisplay.textContent = "certô";
				resetButon.textContent = "jogar novamente?";
				win(clickedColor);
			}
			
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "erô";
			}
		});
	}
	reset();
}

function setupModebuttons(){
		for (var i= 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		
		this.classList.add("selected");		
		if (this.textContent === "Fácil"){
			numbSquares = 3;
		} else {
			numbSquares = 6;
		}
		reset();
		})
	}
}

function reset(){
	colors = randomColors(numbSquares);
	pickedColor = pickColor();
	messageDisplay.textContent = "";
	
	colorDisplay.textContent = pickedColor;
	for(var i=0; i< squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	winColor.style.backgroundColor = "steelblue";
	resetButon.textContent = "Mudar Cores";
}



resetButon.addEventListener("click", function(){
	reset();
})



function win(color){
	for(var i =0; i< colors.length; i++){
		squares[i].style.backgroundColor = color;
    	}
    	winColor.style.backgroundColor = color;
    	resetButon.textContent

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
function rand0to2() {
	return Math.floor(Math.random() * 2 +1);
}
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
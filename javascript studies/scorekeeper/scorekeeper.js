var player1 = document.getElementById("p1");
var player2 = document.getElementById("p2");
var p1score = 0;
var p2score = 0;
var h1 = document.querySelector("h1");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var reset = document.getElementById("restart");
var gameOver = false;
var input = document.querySelector("input");
var bestof = document.getElementById("bestof");
var winscore = 5;

player1.addEventListener("click", function(){
	
	if(!gameOver){
			
		p1score++;
		console.log(winscore);
		if(p1score === winscore){
			console.log("game over");
			p1display.classList.add("winner");
			gameOver = true;
		}
			p1display.textContent = p1score;
	}
});


player2.addEventListener("click", function(){
	if(!gameOver){
		console.log("clicked");
		p2score++;
		if(p2score === winscore){
			console.log("gameover");
			p2display.classList.add("winner");
			gameOver = true;
		}
		p2display.textContent = p2score;
	}
});


reset.addEventListener("click", function(){
	console.log("clicked reset");
	p1score = 0;
	p2score = 0;
	p1display.textContent = p1score;
	p2display.textContent = p2score;
	gameOver = false;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");

});


input.addEventListener("change", function(){
	winscore = Number(input.value);
	bestof.textContent = Number(input.value);
});
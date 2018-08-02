var secret = Math.floor((Math.random() * 10) +1);
var guess = null;



guess = prompt("guess a number between 1 and 10");

while(guess !=  secret) {
	if(guess < secret){
		guess = prompt("guess a higher number!");
	}
	if(guess > secret){
		guess = prompt("guess a lower number");
	}
}





	if(guess == secret){
		console.log("you guessed it right");
	}

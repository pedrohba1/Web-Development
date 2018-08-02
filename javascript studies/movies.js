var movies = [
	{	
		title: "Pai de familia",
		rating: 10,
		haswatched: true
	},
	{
		title: "velose e furioso",
		rating: 7,
		haswatched: false
	}
]


function print_movie(movie){
	if(movie.haswatched === true){
		console.log("voce assistiu " + movie.title + ", nota: " + movie.rating);
	}
	if(movie.haswatched === false){
		console.log("voce nao assistiu " + movie.title + ", nota: " + movie.rating);
	}
}


function list(){
	movies.forEach(function(elem){
		print_movie(elem);
	});
}






console.log($("h1")[0])



$('h1').addClass("correct"); 


$("li").css("color", "blue");


$("li").css({
	fontSize: "10px",
	border: "3px dashed purple",
	background: "rgba(200, 200, 200)"
});


// primeiro exercício
$("div").css({
	background: "purple",
});

$(".highlight").css({
	width: "200px",
});

$("#third").css({
	border: "2px solid orange"
});

$("div").first().css({
	color: "pink"
});


console.log($("ul").text());
$("h1").text("Texto novo");

console.log($("ul").html());

$("ul").html("<li> testeste </li>");


$('li').addClass('wrong');

$('li').toggleClass('wrong'); //adiciona e remove as classes2


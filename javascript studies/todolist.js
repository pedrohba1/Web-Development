var list = new Array();

var input;
	input = prompt("write the option number");

while(input !=="exit"){
	input = prompt("write the option number");

	if(input ===  "add"){
		console.log("-------------")
		var newitem = prompt("write the item you want to add");
		list.unshift(newitem);	
	}
	else if(input === "remove"){
		var removeitem = prompt("write the index of the item you want to remove");
		list.splice(removeitem,1);


	}
	else if(input === "list"){
		list.forEach(function(item, i){
			console.log(i + "- " + item);
		});
	}
	input = prompt("write the option number");
}
alert("you exited the program");

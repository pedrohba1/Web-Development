




//----------------------
function printReverse(arr){
	end = arr.length -1;
	for(end; end >= 0; end--){
		console.log(arr[end]);
	}
}



//---------------------
function isUniform(arr){
	var uniform =1;
	var item;
	item = arr[0];
	arr.forEach(function(arritem){
		if(item !== arritem){
			uniform =0;
		}
	});
	if(uniform === 0){
		console.log("not uniform");
		return 0;
	}
	else if(uniform === 1){
		console.log("uniform");
		return 1;
	}

}

//----------------
function sumArray(arr){	
	var sum = 0;
		arr.forEach(function(item){
			sum += item;
		});
	return sum;
}


function max(arr){
	var max = arr[0];
	arr.forEach(function(item){
		if(item > max){
			max = item;
		}
	});
	return max;	
}
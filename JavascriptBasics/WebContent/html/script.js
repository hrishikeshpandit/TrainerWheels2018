function test(){
	var idli=3;
	alert(typeof(idli)+'idli');
	
}
function test1(){
	alert(document.myform.unmae.value);
}
function seasons(){
	var snum=14;
	switch(snum){
	
	
	case 1:
	case 2:
	case 3:
	case 4:alert("Its Spring");
	       break;
	case 5 :
	case 6:
	case 7:
	case 8:
	case 9:alert("its monsoon");
			break;
	case 10:
	case 11:
	case 12:alert("its cold");
			break;
	default:alert("well ur a time traveller");
	
	}
	
	
}
function aloop(){
	for(var counter1=0;counter1<5;counter1++){
		for(var counter2=0;counter2<5;counter2++){
			document.write(counter2);
		}
	}
}

function forlooptest(){
	
	
	var name=Array(2);
	name[0]='AA';
	name[1]='BB';
	var obj={age:99, nam:'fefed'};
	for(index in obj){
		alert(obj[index]);
	}
}


var difference =function(num1,num2){
	return num1-num2;
}

function confusion(){
	func=difference;
	alert(func(5,3));
}
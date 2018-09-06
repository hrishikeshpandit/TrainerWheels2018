function dynamic(){
	var indev=document.getElementById("dydiv");
	var inText=indev.innerHTML;
	console.log(inText);
	indev.innerHTML= "<h1>Hello</h1>";
	var divtags=document.getElementsByTagName("div");
	divtags[1].innerHTML="Bye Bye";
	var para=document.createElement("p");
	var paratext=document.createTextNode("Hi i am jyst born");
	para.appendChild(paratext);
	indev.appendChild(para);
	var txt1="Hello";
	var text2=new String("Hrror");
	alert(txt1.length);
	alert(txt1.toUpperCase());
	var myCar=new Object();
	myCar.model="KA";
	myCar.engine="2A";
	myCar.tyre=3;
	console.log(myCar);
	var myCar2=new Object();
	myCar.model="jKA";
	myCar.engine="b2A";
	myCar.tyre=66;
	console.log(myCar2);
	var myNewCar1={
			color:"red",
			axle: 4,
			graphics:{front:"red",back:"red"}
	}
	function myNewCar(color,axle,graphics){//object constructor
		this.color=color;
		this.axle=axle;
		this.graphics=graphics;
		this.display=function(){
			alert("hi");
		};
	}
	graph={
			front:"green",
			back:"yellow"
	}
	
	var myNewCar2=new myNewCar("greeen",4,graph);
	//console.log(myNewCar1);
	console.log(myNewCar2);
	alert(myNewCar2.display());
}

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



function bookstore(){
	function book(title,author,read){
		this.title=title;
		this.author=author;
		this.read=read;
	}
	var shelf= [];
	shelf.push(new book("kmes","Me",0))
	shelf.push(new book("Jdff","le",0))
		shelf.push(new book("Jfes","lke",1))
     for(i =0;i<3;i++){
    	 console.log(shelf[i].title);
    	 console.log(shelf[i].author);
    	 if(shelf[i].read==0){
    		 console.log("NOT read");
    	 }else{
    		 console.log("read");
    	 }
     }
}

function movieTheater(){
	function movie(title,duration,actors){
		this.title=title;
		this.duration=duration;
		this.actors=actors;
		this.display=function(){
			var result="the movie name is "+this.title+" and the duration is "+duration+ " the actors are  "+actors[0]+" ,"+actors[1];
		    return result;	
		}
	}
	var mov=[];
	mov.push(new movie("MI6",45,Array("Tom","Rob")));
	mov.push(new movie("MI5",45,Array("Tom","Robin")));
	for(i=0;i<mov.length;i++){
		console.log(mov[i]);
		console.log("the movie name");
		console.log(mov[i].display());
	}

}


function shoppingCart(){
	var cart1={
			  banana: "1.25",
			  handkerchief: ".99",
			  Tshirt: "25.01",
			  apple: "0.60",
			  nalgene: "10.34",
			  proteinShake: "22.36"			
				}
	var x;
	var val=0;
	function cartel(obj){
		for( x in obj){
			val=val+parseFloat(obj[x]);
			console.log(val);
		}
		alert("Your Total is "+val+" rupees");
	}}
 function curday(sp){
		today = new Date();
		var dd =today.getDate() ;
		var mm =today.getMonth() ; 
		var yyyy =today.getFullYear() ;
		if(dd<=9){
			dd='0'+dd;
		}
		if(mm<=9){
			mm='0'+mm;
		}
		console.log(mm+sp+dd+sp+yyyy);

		};

	function stringOps(){
		var string1="Bisibelebath";
		var str1=string1.substr(5,10);
		console.log(str1);
		console.log(str1.toUpperCase());
		var num1=2345678;
		console.log("the number is "+num1);
		console.log(num1.toString());
	}

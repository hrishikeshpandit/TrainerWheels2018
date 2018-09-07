var but1=document.getElementById("button1");
	var but2=document.getElementById("button2");
	but2.disabled=true;
function doSomething(){
	
	but1.onclick=function(){
		console.log("doing boutton 2");
		but2.disabled=false;
	}
}

function doSomething2(){
	
	
		console.log(" boutton 2");
		
}
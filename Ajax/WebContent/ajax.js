function idVerify(){
	 
	 try{
		 
		 var xhttp = new XMLHttpRequest();
		 
	 }catch(e){
		 
		 
		 
		 try{
			 xmlHttp=new ActiveXObject("Msxml2.XML");
		 }
		 catch(e){
			 try{
			 xmlHttp=new ActiveXObject("Microsoft.xmlhttp");
		 }catch(e){
			 
		 alert("badLuck no ajax support");
		 return false;}
		 }
	 }
	 xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		     document.getElementById("demo").innerHTML = this.responseText;
		    }
		  }
		  xhttp.open("GET", "register?userid="+document.RegForm.userid.value, true);
		  xhttp.send(null);
}
		
	
	
	

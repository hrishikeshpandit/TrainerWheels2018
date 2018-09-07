var questArea=document.getElementById("quest");	
var questArea2=document.getElementById("quest2");
questArea2.style.display="none";
var counter=0;
var finals=Array(2);
var score=0;
var ansArray=Array("fusion","fusion");
function answer(){
	
	
	
	var inputAnswer=document.getElementsByName("answer");
	for(i=0;i<inputAnswer.length;i++){
		if(inputAnswer[i].checked){
		finals.push(inputAnswer[i].value);
		counter=counter+1;
	}}
	questArea.style.display="none";
	questArea2.style.display="block";
	var inputAnswer2=document.getElementsByName("answer2");
	for(i=0;i<inputAnswer2.length;i++){
		if(inputAnswer2[i].checked){
		finals.push(inputAnswer2[i].value);
		counter=counter+1;
	}}
	
	/*if(finalAnswer==ans){
		quest.innerHTML="";
		quest.innerHTML="<h1>Congratulations You are right!!!</h1><strong>Your Score is 100%</strong>";
	}
	else{
		quest.innerHTML="<h1><strong>Your Score is 0%</strong></h1>";
		
	}*/
	//console.log(finalAnswer);
	//		console.log(finalAnswer2);
		console.log(counter);
	if(counter==2){
		for(i=0;i<finals.length;i++){
			if(finals.pop()==ansArray[i]){
				score=score+1;
				//console.log("Arrray");
				//console.log("Score");
			}
			questArea2.innerHTML="";
			questArea2.innerHTML="<h1>Your Score is </h1>"+score;
		}
		
		
		//console.log(finals.pop());
		}
	
	
}
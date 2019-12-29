var b = 0; 

function employees(){
	
  
  var h = prompt("Please enter employee hours. Enter -1 to finish.", "Enter amount of hours here"); 
  
  if (h == -1 || h == null) {
    document.getElementById("closing").innerHTML = "Have a great day!";
	
  } 
  
  else {
	    	
  var table = document.getElementById("employeesT");
  var row = table.insertRow(1); 
  var cell1 = row.insertCell(0); 
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2); 
  cell1.innerHTML = "Employee" + " " + ++b;
  cell2.innerHTML = h;
  cell3.innerHTML = "$"+pay(h); 
     
   
  employees();
 
   
  }

}

 function pay(h){
	  
	  var check= 0;
	  
	  if (h<=40){
	  check = h*15;
	  }
	  
	  else check = h*15+((h-40)*1.5);
	  
	  return check;
	
  }
  
  
  var tries=0;
  function guessNo(){
  var rand = Math.floor(Math.random() * 100 + 1);
    
	  if(tries==3){
			  document.getElementById("batman").innerHTML = "HAHA! You lose! " + "The number was " + rand;
			  window.reload();
		  }
	   
	  var guess = prompt ("Choose a number between 1 and 100", "Enter number here");
	  		  
	  if(guess>rand){
			  document.getElementById("batman1").innerHTML = "Too high!";
			  ++tries;
			  document.getElementById("batman2").innerHTML = 3-tries + " tries remaining! Press enter.";
			  }
			  
	  if(guess<rand){ 
		  document.getElementById("batman1").innerHTML = "Too low!";
		  ++tries;
		  document.getElementById("batman2").innerHTML = 3-tries + " tries remaining! Press enter.";
	  }
	  
	  else if(guess==rand){
	  document.getElementById("batman").innerHTML = "You win!";
  }  
  }
	  
	 
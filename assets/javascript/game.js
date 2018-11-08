var counterWin=0;
var counterLoss=0;
var counterGuessLeft = 9;
var userGuess = 0;
var computerGuess;
var userGuessShow="";

function makeid(){
   computerGuess="";
   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";       
   computerGuess += possible.charAt(Math.floor(Math.random() * possible.length));
   return computerGuess;
   }

var playGame = confirm("Ready to play?");
console.log(playGame);


if (playGame){
    
    i=0;

    while (i<9){

    userGuess = prompt("Choose a Letter");
    userGuessShow += userGuess;
    document.getElementById("GuessSoFar").innerHTML = userGuessShow;
       
    makeid();
    console.log("computerGuess "+ computerGuess);
    

    if(userGuess===computerGuess){
      counterWin++;
      document.getElementById("Win").innerHTML = counterWin;
      console.log("counterWin "+ counterWin);
    }
  
    else{   
       counterLoss++;
       console.log( "counterLoss " + counterLoss);
       document.getElementById("Loss").innerHTML = counterLoss;
     
    }
   
    counterGuessLeft = counterGuessLeft-1;
    document.getElementById("GuessLeft").innerHTML = counterGuessLeft;
    console.log("counterGuessLeft "+ counterGuessLeft);

    i=i+1;
    }
}

else{
    alert("Please Come Back!");
}    
 

 



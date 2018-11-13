function psychicGame(){

var counterWin=0;
var counterLoss=0;
var counterGuessLeft = 9;
var userGuess = 0;
var computerGuess;
var userGuessShow="";

var i=0;

//To clear slate//
document.getElementById("guessSoFar").innerHTML = 0;
document.getElementById("win").innerHTML = 0;
document.getElementById("loss").innerHTML = 0;
document.getElementById("guessLeft").innerHTML = 0;


while (i<9){

    computerGuess="";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";       
    computerGuess = possible.charAt(Math.floor(Math.random() * possible.length));
    console.log("computerGuess is "+ computerGuess);

    userGuess = prompt ("Choose one letter:")
    console.log("userGuess is " + userGuess);
    userGuessShow += (userGuess + ", ");
    document.getElementById("guessSoFar").innerHTML = userGuessShow;
       
    if(userGuess===computerGuess){
      counterWin++;
      console.log("counterWin "+ counterWin);
      document.getElementById("win").innerHTML = counterWin;
      }
  
    else{   
       counterLoss++;
       console.log( "counterLoss " + counterLoss);
       document.getElementById("loss").innerHTML = counterLoss;
    }
   
    counterGuessLeft = counterGuessLeft-1;
    document.getElementById("guessLeft").innerHTML = counterGuessLeft;
    console.log("counterGuessLeft "+ counterGuessLeft);

    i++;
    }

alert("To play again, press Start Playing!")    

}





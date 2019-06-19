
var psychicChoices = ["a", "b", "c","d", "e", "f","g","h","i","j"]; 
var yourGuess;
var numWins=0;
var numLosses=0;
var numTrialsRemaining=10;
var numRemaining =document.getElementById("guessLeft");
numRemaining.textContent="Guess Left:"+ ""+ numTrialsRemaining;
var totalGuessed=0;
var text = document.getElementById("psychic");
    text.textContent = "Guess what letter I'm thinking of?.";
//create an array to capture your Guesses
    //the array is empty when trials ==0
    var yourGuessSoFar=[];
    
    //var trials=0;
    var txt;    
    
    document.onkeyup = function (event){
    var yourGuess = event.key;
    //console.log(yourGuess);
    yourGuessSoFar.push(yourGuess);
    //txt="Your Guesses So Far :" + yourGuessSoFar+ ",";
   // document.getElementById("yourGuesses").innerHTML = txt;
    //resetting the number of guesses so far
    if(numTrialsRemaining==10 || numTrialsRemaining==0){
        yourGuessSoFar=[];
    txt="Your Guesses So Far :" + yourGuessSoFar;
    document.getElementById("yourGuesses").innerHTML = txt;

    }else{
        txt="Your Guesses So Far :" + yourGuessSoFar+ ",";
    document.getElementById("yourGuesses").innerHTML = txt;



    }
    
///
    var psychicThinking = psychicChoices[Math.floor(Math.random() * psychicChoices.length)];
    if (yourGuess === psychicThinking){
        //this is a win
        //check if number of trials remaining is zero
        if(numTrialsRemaining==0){
            //yes, reset to 10 and reduce by 1
            //reset it to 10            
            numTrialsRemaining=10;
             //reduce by 1
            numTrialsRemaining--;
          var numRemaining =document.getElementById("guessLeft");
          numRemaining.textContent="Guess Left:"+ ""+ numTrialsRemaining;
          //add to array 
         // yourGuessSoFar[trials] = document.getElementById("psychic").value;
          //trials++;
          
          
          
          //display
          for(i=0; i<yourGuessSoFar; i++){
            txt="Your Guesses So Far :" + yourGuessSoFar[i] + ",";

          }


          //check if wins==10;
          if(numWins==10){
                //yes reset to zero and increment by 1
                numWins=0;
                numWins++;
          
          var wins = document.getElementById("numWins");
          wins.textContent ="Wins :"+ ""+ numWins;    

          }else{
              //no, just increment wins by 1

              numWins++;
          
          var wins = document.getElementById("numWins");
          wins.textContent ="Wins :"+ ""+ numWins;    
          }




        }else{
            //no, reduce by 1
            
            numTrialsRemaining--;
          var numRemaining =document.getElementById("guessLeft");
          numRemaining.textContent="Guess Left:"+ ""+ numTrialsRemaining;

          
          //check if wins==10;
          if(numWins==10){
                //yes reset to zero and increment by 1
                numWins=0;
                numWins++;
          
          var wins = document.getElementById("numWins");
          wins.textContent ="Wins :"+ ""+ numWins;    

          }else{
              //no, just increment wins by 1

              numWins++;
          
          var wins = document.getElementById("numWins");
          wins.textContent ="Wins :"+ ""+ numWins;    
          }





        }






    }else{
        //this is a loss
        //check if number of trials remaining is zero
        if(numTrialsRemaining==0){
            //yes, reset to zero and reduce by 1
            //reset it to 10            
            numTrialsRemaining=10;
             //reduce by 1
            numTrialsRemaining--;
          var numRemaining =document.getElementById("guessLeft");
          numRemaining.textContent="Guess Left:"+ ""+ numTrialsRemaining;
          
          //check if number of losses==10;
          if(numLosses==10){
              //yes, reset to zero and increment by 1
              numLosses=0;
              numLosses++;
              
         var losses= document.getElementById("numLosses");
         losses.textContent ="Losses :" + "" + numLosses;

          }else{
              //no, increment by 1
              numLosses++;
              
         var losses= document.getElementById("numLosses");
         losses.textContent ="Losses :" + "" + numLosses;


          }







        }else{
            //no, number of trials remianing is not zero, and it is a loss
            //reduce by 1
            numTrialsRemaining--;
          var numRemaining =document.getElementById("guessLeft");
          numRemaining.textContent="Guess Left:"+ ""+ numTrialsRemaining;
//check if number of losses==10;
if(numLosses==10){
              //yes, reset to zero and increment by 1
              numLosses=0;
              numLosses++;
              
         var losses= document.getElementById("numLosses");
         losses.textContent ="Losses :" + "" + numLosses;

          }else{
              //no, increment by 1
              numLosses++;
              
         var losses= document.getElementById("numLosses");
         losses.textContent ="Losses :" + "" + numLosses;


          }





        }



    }
        
}
 
      


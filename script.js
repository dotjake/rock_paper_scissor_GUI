
const container = document.querySelector('#container');

const buttons = document.querySelectorAll('button');


// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', (e) => {
      playRound(parseInt(button.id));
    });
  });



function computerPlay(){
    //returns a random integer, between 0 and 3, not including 3
    // The number is used to describe rock paper or scissor
    // ROCK, PAPAER, SCISSOR = [0,1,2]
    return Math.floor(Math.random()*3);
}

function playRound(playerSelection){
    //This function plays the round, checks if its a win or draw
    //Returns result in an array ["WIN,DRAW or LOSE", PLAYER SELECTION, COMPUTER SELECTION,FINISHTEXT]
    let finishText = "";
    let resultText = "";
    let computerSelection = computerPlay();
    
    // The switch case checks the player selection and runs if statements to determine if it was a win or draw
    switch(playerSelection){
        case 0:
        //Rock
        if(computerSelection == 0){
            //Rock-Rock
            resultText = "DRAW";
            finishText = "ITS A DRAW!";
        }else if(computerSelection == 1){
            //Rock-Paper
            resultText = "LOSE";
            finishText="YOU LOSE! PAPER BEATS ROCK!";
        }else{
            //Rock-Scissor
            resultText = "WIN";
            finishText = "YOU WIN! ROCK BEATS SCISSOR";
        }
        break;

        case 1:
        //Paper
        if(computerSelection == 1){
            //Paper-Paper
            resultText = "DRAW";
            finishText = "ITS A DRAW!";
        }else if(computerSelection == 2){
            //Paper-Scissor
            resultText = "LOSE";
            finishText="YOU LOSE! SCISSOR BEATS PAPER!";
        }else{
            //Paper-Rock
            resultText = "WIN";
            finishText="YOU WIN! PAPER BEATS ROCK!";
        }
        break;

        case 2:
        //Scissor
        if(computerSelection == 2){
            //Scissor-Scissor
            resultText = "DRAW";
            finishText = "ITS A DRAW!";
        }else if(computerSelection == 0){
            //Scissor-Rock
            resultText = "LOSE";
            finishText = "YOU LOSE! ROCK BEATS SCISSOR!";
        }else{
            //Scissor-Papper
            resultText = "WIN";
            finishText = "YOU WIN! SCISSOR BEATS PAPER!";
        }
        break;
    }
    game([resultText,playerSelection,computerSelection,finishText]);
}

function game(roundResults){
    console.log(roundResults);
}

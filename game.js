let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const getComputerChoice = ()=>{
    let option = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random()*3) // q ki hame 0 se 2 index chahiye
    return option[randomIndex];
}


const drawGame = ()=>{
    //console.log("Game was Draw 😒!");
    msg.innerText = "Draw, Play Again...";
    msg.style.backgroundColor = "orange";
    msg.style.color = "green";
}
const playGame = (userChoice)=>{
    console.log("user choose",userChoice);

    const computerChoice = getComputerChoice();
    console.log("computer choose",computerChoice);


    const showWinner = (userWin, userChoice, computerChoice) =>{
        if(userWin){
            // console.log("Hurrah! You Win the game...");
            msg.innerText = `You Win!,Your ${userChoice} beats ${computerChoice}`;
            msg.style.backgroundColor = "green";
            msg.style.color = "yello";
            userScore++;
            userScorePara.innerText = userScore;
        }

        else{
            // console.log("Sorry Yaar, You Loose the game...");
            msg.innerText = `You Loose ${computerChoice} beats your ${userChoice}`
            msg.style.backgroundColor = "red";
            computerScore++;
            computerScorePara.innerText = computerScore;
        }
        
    }
    

    // aab hum condition likh lete hai game ka..

    if(userChoice === computerChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = computerChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = computerChoice === "scissor" ? false : true;
        }
        else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice, computerChoice);
    }
    
}

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        //console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    })
})

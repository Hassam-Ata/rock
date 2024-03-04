
let pscore=0;
let cscore=0;


function updateScore(cscore,pscore) {
    const currentPlayerScore=document.querySelector(".currentPlayerScore");
    const currentComputerScore=document.querySelector(".currentComputersScore");
    currentPlayerScore.textContent=pscore;
    currentComputerScore.textContent=cscore;
    
}

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) return "rock";

    if (computerChoice === 2) return "paper";

    if (computerChoice === 3) return "scissors";

}


function playGame(userChoice) {
    
    const computerSelection = getComputerChoice();
     if (computerSelection !== userChoice) {

        if ((computerSelection === "rock" && userChoice === "scissors")) {
            cscore++;
            updateScore(cscore,pscore);
        }

        if ((computerSelection === "scissors" && userChoice === "rock")) {
            pscore++;
            updateScore(cscore,pscore);
        }


        if ((computerSelection === "scissors" && userChoice === "paper")) {
            cscore++;           
            updateScore(cscore,pscore);
        }


        if ((computerSelection === "paper" && userChoice === "scissors")) {
            pscore++;
            updateScore(cscore,pscore);
          

        }

        if (computerSelection === "paper" && userChoice === "rock") {
            cscore++;
            updateScore(cscore,pscore);

        }
        if (userChoice === "paper" && computerSelection === "rock") {

            pscore++;
            updateScore(cscore,pscore);
         

        }


    }
    if (computerSelection===userChoice) {
        updateScore(cscore,pscore);
    }

    
}

function gameStart() {
    alert("Game has started");

    const choices = document.querySelectorAll(".choice");
    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
            if (pscore===5 || cscore===5) {
                announcement();
            }
        });
    });
}
function announcement() {
    const result = document.querySelector(".winner");
if (pscore > cscore) {

    result.innerHTML = "Player wins";

} else if (cscore > pscore) {

    result.innerHTML = "Computer wins";
} else {

    result.innerHTML = "It's a Draw";
} 
  

   alert("Game has ended");
}
const play = document.querySelector(".play");
play.addEventListener('click', () => {

    gameStart();
});



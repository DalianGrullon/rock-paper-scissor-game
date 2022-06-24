var game = function() {
    // variable/function declarations and definitions
    var player;
    var numTie = 0;
    var playerScore = {
        win: 0,
        loss: 0,
    };
    var computerOptions = ["R", "P", "S"];
    var computer = computerOptions[Math.floor(Math.random() * computerOptions.length)]; // returns random index from array
    var computerScore = {
        win: 0,
        loss: 0,
    };
    var playAgain = true; 

    // play again loop
    while (playAgain) {
        player = prompt("Enter R, P, or S for choice. (R-rock, P-paper, S-scissors).").toUpperCase();

        // player input validation loop
        while (computerOptions.includes(player) === false) {
            alert("Invalid entry, please try again..");
            player = prompt("Enter R, P, or S for choice. (R-rock, P-paper, S-scissors).").toUpperCase();
        }

        // score allocation conditions
        if (player === computer) {
            alert("It's a tie! Computer chose: " + computer);
            numTie++;
        } else if ((player === "R" && computer === "S") || (player === "P" && computer === "R") || (player === "S" && computer === "P")) {
            alert("You win! Computer chose: " + computer);
            playerScore.win++;
            computerScore.loss++;
        } else {
            alert("You lost! Computer chose " + computer);
            playerScore.loss++;
            computerScore.win++;
        }

        // scoreboard
        alert(
            "Ties: " + numTie + "\n\n" +
            "Player wins: " + playerScore.win + "\n" +
            "Player losses: " + playerScore.loss + "\n\n" +

            "Computer wins: " + computerScore.win + "\n" +
            "Computer losses: " + computerScore.loss
        );

        playAgain = confirm("Would you like to play again?");
    }

    alert("Thank you for playing..");
}

game();
### Requirements
- player vs. computer
- input options (for player and computer): R, P, S
- computer chooses R, P, or S randomly
- ask for option to play again
- prompt scoreboard at end of rounds: tie, loss, win
- must use: alert(), confirm(), prompt()

### Method
0. variables and functions
    - var: player, playerScore{}, computer, computerScore{}, computerOptions[], playAgain, numTie
    - functions: game()
1. prompt for user input
    - verify validity of user input
3. alert computer's choice and report win, loss, or tie
    - increment accordingly
4. alert scoreboard
5. confirm for play again with terminate option
    - save previous scores if played again

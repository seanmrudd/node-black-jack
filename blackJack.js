var inquirer = require("inquirer");
const deck = require("./deckOfCards.json");
const chalk = require('chalk');
var mysql = require("mysql");

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'rootroot',
//     database: 'blackjack_db'
//   });

// connection.connect();


// ---------- *** DECLARE VARIABLES *** ---------- //
let shuffledDeck = [];
let player1Hand = [];
let computerHand = [];
let player1HandScore = [];
let computerHandScore = [];
let player1HandScoreFirstIndex = 0;
let secondaryValueCounter = 0;
let cardFaceDown = true;

// ---------- *** START GAME *** ---------- //
let startNewGame = () => {

    shuffleDeck();

    deal();

    if ((player1Hand[0].value + player1Hand[1].secondaryValue) == 21) {
        endGame();
    } else if ((player1Hand[0].secondaryValue + player1Hand[1].value) == 21) {
        endGame();
    } else playGame();

}

// ---------- *** GAME FUNCTIONS *** ---------- //

// ---------- *** Shuffle Deck *** ---------- //
let shuffleDeck = () => {

    let deckOfCards = deck;
    let deckLength = deckOfCards.length

    for (let i = 0; i < deckLength; i++) {
        let randomDeckIndex = Math.floor(Math.random() * deckOfCards.length);
        let randomCard = deckOfCards[randomDeckIndex];
        shuffledDeck.splice(0, 0, randomCard);
        deckOfCards.splice(randomDeckIndex, 1);
    }

}

// ---------- *** Deal Deck Out To Computer And Player 1 *** ---------- //
let deal = () => {

    player1Hand.push(shuffledDeck[0]);
    shuffledDeck.splice(0, 1);

    computerHand.push(shuffledDeck[0]);
    shuffledDeck.splice(0, 1);

    player1Hand.push(shuffledDeck[0]);
    shuffledDeck.splice(0, 1);

    computerHand.push(shuffledDeck[0]);
    shuffledDeck.splice(0, 1);

}

// ---------- *** After Deck Is Dealt, Play The Game *** ---------- //
let playGame = () => {

    showDealerHand();
    showPlayerHand();

    inquirer
        .prompt([
            {
                type: "list",
                name: "hitOrStay",
                message: "Would you like to hit or stay?",
                choices: ["Hit", "Stay"]
            }
        ])
        .then(function (answers) {
            switch (answers.hitOrStay) {
                case "Hit":
                    hit();
                    break;
                case "Stay":
                    stay();
                    break;
            }
        })
        .catch(error => {
            if (error) {
                console.log(error);
                connection.end();
            }
        })

}

// ---------- *** Show What The Computer Has *** ---------- //
let showDealerHand = () => {

    computerHandScoreFunction();

    console.log(chalk.red("\nThe dealer has a"));

    if (cardFaceDown) {
        console.log(chalk.red(`[  ]`));
        for (i = 1; i < computerHand.length; i++) {
            console.log(chalk.red(`[${computerHand[i].cardUnicode}] ${computerHand[i].cardName}`));
        }
    } else {
        for (i = 0; i < computerHand.length; i++) {
            console.log(chalk.red(`[${computerHand[i].cardUnicode}] ${computerHand[i].cardName}`));
        }
    }

    console.log(chalk.red(`Dealer is showing ${computerHandScore}`));

}

// ---------- *** Show What The Player Has *** ---------- //
let showPlayerHand = () => {

    secondaryValueCounterFunction();

    player1HandScoreFunction();

    console.log(chalk.yellow("\nYou have a"));

    for (i = 0; i < player1Hand.length; i++) {
        console.log(chalk.yellow(`[${player1Hand[i].cardUnicode}] ${player1Hand[i].cardName}`));
    }

    console.log(chalk.yellow(`Your score is ${player1HandScore}.\n`));

}

// ---------- *** Add Another Card To Player's Hand *** ---------- //
let hit = () => {

    player1Hand.push(shuffledDeck[0]);
    shuffledDeck.splice(0, 1);

    player1HandScoreFunction();

    if (player1HandScore[0] >= 21) {
        endGame();
    } else {
        playGame();
    }

}

let secondaryValueCounterFunction = () => {

    secondaryValueCounter = 0;

    for (i = 0; i < player1Hand.length; i++) {

        if (player1Hand[i].secondaryValue) {
            secondaryValueCounter++;
        }

    }

}

// ---------- *** Show The Score Of The Player *** ---------- //
let player1HandScoreFunction = () => {

    player1HandScore.length = [];

    player1HandScoreFirstIndex = 0;

    for (i = 0; i < player1Hand.length; i++) {

        player1HandScoreFirstIndex += player1Hand[i].value;

    }

    player1HandScore.push(player1HandScoreFirstIndex);

    for (i = 0; i < secondaryValueCounter; i++) {
        player1HandScore[i+1] = ((i+1)*10) + player1HandScore[0];
    }

}

// ---------- *** Show The Score The Computer Has *** ---------- //
let computerHandScoreFunction = () => {

    computerHandScore = 0;

    if (cardFaceDown) {

        for (i = 1; i < computerHand.length; i++) {
            computerHandScore += computerHand[i].value
        }

    } else {

        for (i = 0; i < computerHand.length; i++) {
            computerHandScore += computerHand[i].value
        }

    }

}

// ---------- *** Player Stays And Moves To The End Of The Game *** ---------- //
let stay = () => {

    endGame();

}

// ---------- *** Move To the End Of The Game *** ---------- //
let endGame = () => {

    for (i = 0; i < player1HandScore.length; i++) {
        if (player1HandScore[0] > 21) {
            loseGame();
        } else {
            
        }
    }

    console.log("Yay");
    // connection.end();
}

let loseGame = () => {
    console.log("Sorry you lost.");
}

startNewGame();

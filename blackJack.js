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

// ---------- *** Show What The Computer Has` *** ---------- //
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

let showPlayerHand = () => {

    player1HandScoreFunction();

    console.log(chalk.yellow("\nYou have a"));

    for (i = 0; i < player1Hand.length; i++) {
        console.log(chalk.yellow(`[${player1Hand[i].cardUnicode}] ${player1Hand[i].cardName}`));
    }

    console.log(chalk.yellow(`Your score is ${player1HandScore}.\n`));

}

let hit = () => {

    player1Hand.push(shuffledDeck[0]);
    shuffledDeck.splice(0, 1);

    player1HandScoreFunction();

    if (player1HandScore >= 21) {
        endGame();
    } else {
        playGame();
    }

}

let player1HandScoreFunction = () => {

    player1HandScore.length = 0;

    for (i = 0; i < player1Hand.length; i++) {
        if (player1Hand.secondaryValue) {
            
        }
    }

    for (i = 0; i < player1Hand.length; i++) {
        player1HandScore += player1Hand[i].value

    }

}

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

let test = () => {
    console.log(player1Hand[0].cardUnicode);
}

let stay = () => {
    endGame();
}

let endGame = () => {
    switch (player1Hand) {
        case (player1HandScore > 21):
            console.log(`Player has a ${player1Hand} and busts.  Better luck next time.`);
            break;
    }

    console.log("Yay");
    // connection.end();
}

startNewGame();

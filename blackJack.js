var inquirer = require("inquirer");
const deck = require("./deckOfCards.json");
const chalk = require('chalk');
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'blackjack_db'
  });

connection.connect();

let shuffledDeck = [];
let player1Hand = [];
let computerHand = [];
let player1HandScore = 0;

let startNewGame = () => {
    shuffleDeck();
    deal();

    if ((player1Hand[0].value + player1Hand[1].secondaryValue) == 21) {
        endGame();
    } else if ((player1Hand[0].secondaryValue + player1Hand[1].value) == 21) {
        endGame();
    } else playGame();
}

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

let showDealerHand = () => {
    console.log(chalk.red("\nThe dealer has a"));
    for (i = 0; i < computerHand.length; i++) {
        if (i == 0) {
            console.log(chalk.red("[  ]"));
        } else {
            console.log(chalk.red(`[${computerHand[i].cardUnicode}] ${computerHand[i].cardName}`));
        }
    }
}

let showPlayerHand = () => {
    console.log(chalk.yellow("\nYou have a"));
    for (i = 0; i < player1Hand.length; i++) {
        console.log(chalk.yellow(`[${computerHand[i].cardUnicode}] ${computerHand[i].cardName}`));
    }
    console.log("\n");
}

let hit = () => {
    player1Hand.push(shuffledDeck[0]);
    shuffledDeck.splice(0, 1);

    for (i = 0; i < player1Hand.length; i++) {
        player1HandScore += player1Hand[i].value
    }

    test();
    // playGame();

    //     if (player1HandScore == 21) {
//         endGame();
//     } else
//         playGame();
}

let test = () => {
    showPlayerHand();

}

let stay = () => {
    console.log("Stay");
    connection.end();
}

let endGame = () => {
    console.log("Yay");
    connection.end();
}

startNewGame();

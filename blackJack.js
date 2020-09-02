var inquirer = require('inquirer');
const deck = require("./deckOfCards.json");
const chalk = require('chalk');

let shuffledDeck = [];
let player1Hand = [];
let computerHand = [];

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

    for(let i = 0; i < deckLength; i++) {
        let randomDeckIndex = Math.floor(Math.random() * deckOfCards.length);
        let randomCard = deckOfCards[randomDeckIndex];
        shuffledDeck.splice(0, 0, randomCard);
        deckOfCards.splice(randomDeckIndex, 1);
    }
}

let deal = () => {
    player1Hand.splice(0, 0, shuffledDeck[0]);
    shuffledDeck.splice(0, 1);

    computerHand.splice(0, 0, shuffledDeck[0]);
    shuffledDeck.splice(0, 1);

    player1Hand.splice(0, 0, shuffledDeck[0]);
    shuffledDeck.splice(0, 1);

    computerHand.splice(0, 0, shuffledDeck[0]);
    shuffledDeck.splice(0, 1);
}

let playGame = () => {
    console.log(chalk.red(`\nDealer has a ${computerHand[0].cardName} and a ${computerHand[1].cardName}\n[${computerHand[0].cardUnicode}] [  ]`));
    console.log(chalk.yellow(`\nYou have ${player1Hand[0].cardName} and a ${player1Hand[1].cardName}\n[${player1Hand[0].cardUnicode}] [${player1Hand[1].cardUnicode}]\n`));
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
}

let hit = () => {
    player1Hand.push(shuffledDeck[0]);
    shuffledDeck.splice(0, 1);
    console.log(player1Hand);

    let player1HandScore = 0;

    for (i = 0; i < player1Hand.length; i++) {
        player1HandScore += player1Hand[i].value
    }

    console.log(player1HandScore);
}

let stay = () => {
    console.log("Stay");
}

let endGame = () => {
    console.log("Yay");
}

startNewGame();

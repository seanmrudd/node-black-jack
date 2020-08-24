function Card (suit, card, value, secondaryValue) {
    this.suit = suit;
    this.card = card;
    this.value = value;
    this.secondaryValue = secondaryValue;
};

let deck = [];

function makeCard (suit, cardName, value, secondaryValue) {
    let card = new Card(suit, cardName, value, secondaryValue);
    deck.push(card);
};

//Hearts
makeCard("Hearts", "2", 2);
makeCard("Hearts", "3", 3);
makeCard("Hearts", "4", 4);
makeCard("Hearts", "5", 5);
makeCard("Hearts", "6", 6);
makeCard("Hearts", "7", 7);
makeCard("Hearts", "8", 8);
makeCard("Hearts", "9", 9);
makeCard("Hearts", "10", 10);
makeCard("Hearts", "Jack", 11);
makeCard("Hearts", "Queen", 12);
makeCard("Hearts", "King", 13);
makeCard("Hearts", "Ace", 1, 11);

//Clubs
makeCard("Clubs", "2", 2);
makeCard("Clubs", "3", 3);
makeCard("Clubs", "4", 4);
makeCard("Clubs", "5", 5);
makeCard("Clubs", "6", 6);
makeCard("Clubs", "7", 7);
makeCard("Clubs", "8", 8);
makeCard("Clubs", "9", 9);
makeCard("Clubs", "10", 10);
makeCard("Clubs", "Jack", 11);
makeCard("Clubs", "Queen", 12);
makeCard("Clubs", "King", 13);
makeCard("Clubs", "Ace", 1, 11);

//Diamonds
makeCard("Diamonds", "2", 2);
makeCard("Diamonds", "3", 3);
makeCard("Diamonds", "4", 4);
makeCard("Diamonds", "5", 5);
makeCard("Diamonds", "6", 6);
makeCard("Diamonds", "7", 7);
makeCard("Diamonds", "8", 8);
makeCard("Diamonds", "9", 9);
makeCard("Diamonds", "10", 10);
makeCard("Diamonds", "Jack", 11);
makeCard("Diamonds", "Queen", 12);
makeCard("Diamonds", "King", 13);
makeCard("Diamonds", "Ace", 1, 11);

//Spades
makeCard("Spades", "2", 2);
makeCard("Spades", "3", 3);
makeCard("Spades", "4", 4);
makeCard("Spades", "5", 5);
makeCard("Spades", "6", 6);
makeCard("Spades", "7", 7);
makeCard("Spades", "8", 8);
makeCard("Spades", "9", 9);
makeCard("Spades", "10", 10);
makeCard("Spades", "Jack", 11);
makeCard("Spades", "Queen", 12);
makeCard("Spades", "King", 13);
makeCard("Spades", "Ace", 1, 11);

// let t = JSON.stringify(deck);
// console.log(t);

// console.log(deck.length);

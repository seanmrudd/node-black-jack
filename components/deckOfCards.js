
function Card(cardName, cardSuit, cardType, value, secondaryValue) {
    this.cardName = cardName;
    this.cardSuit = cardSuit;
    this.cardType = cardType;
    this.value = value;
    this.secondaryValue = secondaryValue;
};

let deck = [];

function makeCard(cardName, cardSuit, cardType, value, secondaryValue) {
    let card = new Card(cardName, cardSuit, cardType, value, secondaryValue);
    deck.push(card);
};

//Hearts
makeCard("Two of Hearts", "Hearts", "2", 2);
makeCard("Three of Hearts", "Hearts", "3", 3);
makeCard("Four of Hearts", "Hearts", "4", 4);
makeCard("Five of Hearts", "Hearts", "5", 5);
makeCard("Six of Hearts", "Hearts", "6", 6);
makeCard("Seven of Hearts", "Hearts", "7", 7);
makeCard("Eight of Hearts", "Hearts", "8", 8);
makeCard("Nine of Hearts", "Hearts", "9", 9);
makeCard("Ten of Hearts", "Hearts", "10", 10);
makeCard("Jack of Hearts", "Hearts", "Jack", 10);
makeCard("Queen of Hearts", "Hearts", "Queen", 10);
makeCard("King of Hearts", "Hearts", "King", 10);
makeCard("Ace of Hearts", "Hearts", "Ace", 1, 11);

//Spades
makeCard("Two of Spades", "Spades", "2", 2);
makeCard("Three of Spades", "Spades", "3", 3);
makeCard("Four of Spades", "Spades", "4", 4);
makeCard("Five of Spades", "Spades", "5", 5);
makeCard("Six of Spades", "Spades", "6", 6);
makeCard("Seven of Spades", "Spades", "7", 7);
makeCard("Eight of Spades", "Spades", "8", 8);
makeCard("Nine of Spades", "Spades", "9", 9);
makeCard("Ten of Spades", "Spades", "10", 10);
makeCard("Jack of Spades", "Spades", "Jack", 10);
makeCard("Queen of Spades", "Spades", "Queen", 10);
makeCard("King of Spades", "Spades", "King", 10);
makeCard("Ace of Spades", "Spades", "Ace", 1, 11);

//Diamonds
makeCard("Two of Diamonds", "Diamonds", "2", 2);
makeCard("Three of Diamonds", "Diamonds", "3", 3);
makeCard("Four of Diamonds", "Diamonds", "4", 4);
makeCard("Five of Diamonds", "Diamonds", "5", 5);
makeCard("Six of Diamonds", "Diamonds", "6", 6);
makeCard("Seven of Diamonds", "Diamonds", "7", 7);
makeCard("Eight of Diamonds", "Diamonds", "8", 8);
makeCard("Nine of Diamonds", "Diamonds", "9", 9);
makeCard("Ten of Diamonds", "Diamonds", "10", 10);
makeCard("Jack of Diamonds", "Diamonds", "Jack", 10);
makeCard("Queen of Diamonds", "Diamonds", "Queen", 10);
makeCard("King of Diamonds", "Diamonds", "King", 10);
makeCard("Ace of Diamonds", "Diamonds", "Ace", 1, 11);

//Clubs
makeCard("Two of Clubs", "Clubs", "2", 2);
makeCard("Three of Clubs", "Clubs", "3", 3);
makeCard("Four of Clubs", "Clubs", "4", 4);
makeCard("Five of Clubs", "Clubs", "5", 5);
makeCard("Six of Clubs", "Clubs", "6", 6);
makeCard("Seven of Clubs", "Clubs", "7", 7);
makeCard("Eight of Clubs", "Clubs", "8", 8);
makeCard("Nine of Clubs", "Clubs", "9", 9);
makeCard("Ten of Clubs", "Clubs", "10", 10);
makeCard("Jack of Clubs", "Clubs", "Jack", 10);
makeCard("Queen of Clubs", "Clubs", "Queen", 10);
makeCard("King of Clubs", "Clubs", "King", 10);
makeCard("Ace of Clubs", "Clubs", "Ace", 1, 11);

console.log(deck);

// let t = JSON.stringify(deck);
// console.log(t);

// console.log(deck.length);


function Card(cardId, cardName, cardSuit, cardType, value, secondaryValue) {
    this.cardId = cardId;
    this.cardName = cardName;
    this.cardSuit = cardSuit;
    this.cardType = cardType;
    this.value = value;
    this.secondaryValue = secondaryValue;
};

let deck = [];

function makeCard(cardId, cardName, cardSuit, cardType, value, secondaryValue) {
    let card = new Card(cardId, cardName, cardSuit, cardType, value, secondaryValue);
    deck.push(card);
};

//Hearts
makeCard(1, "Two of Hearts", "Hearts", "2", 2);
makeCard(2, "Three of Hearts", "Hearts", "3", 3);
makeCard(3, "Four of Hearts", "Hearts", "4", 4);
makeCard(4, "Five of Hearts", "Hearts", "5", 5);
makeCard(5, "Six of Hearts", "Hearts", "6", 6);
makeCard(6, "Seven of Hearts", "Hearts", "7", 7);
makeCard(7, "Eight of Hearts", "Hearts", "8", 8);
makeCard(8, "Nine of Hearts", "Hearts", "9", 9);
makeCard(9, "Ten of Hearts", "Hearts", "10", 10);
makeCard(10, "Jack of Hearts", "Hearts", "Jack", 10);
makeCard(11, "Queen of Hearts", "Hearts", "Queen", 10);
makeCard(12, "King of Hearts", "Hearts", "King", 10);
makeCard(13, "Ace of Hearts", "Hearts", "Ace", 1, 11);

//Spades
makeCard(14, "Two of Spades", "Spades", "2", 2);
makeCard(15, "Three of Spades", "Spades", "3", 3);
makeCard(16, "Four of Spades", "Spades", "4", 4);
makeCard(17, "Five of Spades", "Spades", "5", 5);
makeCard(18, "Six of Spades", "Spades", "6", 6);
makeCard(19, "Seven of Spades", "Spades", "7", 7);
makeCard(20, "Eight of Spades", "Spades", "8", 8);
makeCard(21, "Nine of Spades", "Spades", "9", 9);
makeCard(22, "Ten of Spades", "Spades", "10", 10);
makeCard(23, "Jack of Spades", "Spades", "Jack", 10);
makeCard(24, "Queen of Spades", "Spades", "Queen", 10);
makeCard(25, "King of Spades", "Spades", "King", 10);
makeCard(26, "Ace of Spades", "Spades", "Ace", 1, 11);

//Diamonds
makeCard(27, "Two of Diamonds", "Diamonds", "2", 2);
makeCard(28, "Three of Diamonds", "Diamonds", "3", 3);
makeCard(29, "Four of Diamonds", "Diamonds", "4", 4);
makeCard(30, "Five of Diamonds", "Diamonds", "5", 5);
makeCard(31, "Six of Diamonds", "Diamonds", "6", 6);
makeCard(32, "Seven of Diamonds", "Diamonds", "7", 7);
makeCard(33, "Eight of Diamonds", "Diamonds", "8", 8);
makeCard(34, "Nine of Diamonds", "Diamonds", "9", 9);
makeCard(35, "Ten of Diamonds", "Diamonds", "10", 10);
makeCard(36, "Jack of Diamonds", "Diamonds", "Jack", 10);
makeCard(37, "Queen of Diamonds", "Diamonds", "Queen", 10);
makeCard(38, "King of Diamonds", "Diamonds", "King", 10);
makeCard(39, "Ace of Diamonds", "Diamonds", "Ace", 1, 11);

//Clubs
makeCard(40, "Two of Clubs", "Clubs", "2", 2);
makeCard(41, "Three of Clubs", "Clubs", "3", 3);
makeCard(42, "Four of Clubs", "Clubs", "4", 4);
makeCard(43, "Five of Clubs", "Clubs", "5", 5);
makeCard(44, "Six of Clubs", "Clubs", "6", 6);
makeCard(45, "Seven of Clubs", "Clubs", "7", 7);
makeCard(46, "Eight of Clubs", "Clubs", "8", 8);
makeCard(47,"Nine of Clubs", "Clubs", "9", 9);
makeCard(48, "Ten of Clubs", "Clubs", "10", 10);
makeCard(49, "Jack of Clubs", "Clubs", "Jack", 10);
makeCard(50, "Queen of Clubs", "Clubs", "Queen", 10);
makeCard(51, "King of Clubs", "Clubs", "King", 10);
makeCard(52, "Ace of Clubs", "Clubs", "Ace", 1, 11);

console.log(deck);

// let t = JSON.stringify(deck);
// console.log(t);

// console.log(deck.length);

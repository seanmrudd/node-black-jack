DROP DATABASE IF EXISTS blackjack_db;

CREATE DATABASE blackjack_db;

USE blackjack_db;

CREATE TABLE deck (
	card_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    card_name TEXT,
    card_suit TEXT,
    card_type TEXT,
    card_unicode TEXT,
    card_value INT,
    card_secondary_value INT
);

CREATE TABLE hand (
	hand_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    card_one JSON,
    card_two JSON,
    card_three JSON,
    card_four JSON,
    card_five JSON,
    card_six JSON,
    card_seven JSON,
    card_eight JSON,
    card_nine JSON,
    card_ten JSON
);

INSERT INTO deck (card_id, card_name, card_suit, card_type, card_unicode, card_value, card_secondary_value) VALUES (1, "Two of Hearts", "Hearts", "Two", "2♥", 2, null);

INSERT INTO hand (card_one, card_two) VALUES('{
    "cardId": 51,
    "cardName": "King of Clubs",
    "cardSuit": "Clubs",
    "cardType": "King",
    "cardUnicode": "K♣",
    "value": 10,
    "secondaryValue": null
    }',
    '{
    "cardId": 52,
    "cardName": "Ace of Clubs",
    "cardSuit": "Clubs",
    "cardType": "Ace",
    "cardUnicode": "A♣",
    "value": 1,
    "secondaryValue": 11
    }');
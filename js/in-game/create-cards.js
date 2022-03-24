function createNewCardPlayer() {
    var suit = currentCard.suit;
    var face = currentCard.face;
    currentCardValue = currentCard.face;

    imageBox = document.createElement("img");
    imageBox.src = "./images/card-images/" + suit + "-" + face + ".png";
    imageBox.alt = suit + "-" + face;
    // imageBox.id = "playerCard" + playerCardCounter;
}

function createNewCardDealer() {
    var suit = currentCard.suit;
    var face = currentCard.face;
    currentCardValue = currentCard.face;

    imageBox = document.createElement("img");
    imageBox.src = "./images/card-images/" + suit + "-" + face + ".png";
    imageBox.alt = suit + "-" + face;
    imageBox.className = "dealerCardFace";
    imageBox.hidden = true;
}

function createNewBackDealer() {
    var cardBackRNG = Math.floor(Math.random() * 3);
    if(cardBackRNG === 0) {
        cardBackPicker = "C";
    } else if(cardBackRNG === 1) {
        cardBackPicker = "D";
    } else if(cardBackRNG === 2) {
        cardBackPicker = "E";
    }

    backBox = document.createElement("img");
    backBox.src = "./images/card-images/" + cardBackPicker + "-" + "Back.png";
    imageBox.alt = cardBackPicker + "-Back";
    backBox.className = "dealerCardBack";
}

function playerStartingHand() {
    hit();
    hit();
}

function dealerStartingHand() {
    dealerHit();
    dealerHit();
}
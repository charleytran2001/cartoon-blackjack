function startGame() {
    deck = newDeck();
    playerStartingHand();
    dealerStartingHand();
    document.querySelector("#dealer-cards").querySelectorAll("img")[0].hidden = false;
    document.querySelector("#dealer-cards").querySelectorAll("img")[1].hidden = true;
}

// startGame();
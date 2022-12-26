function startGame() {
    deck = newDeck();
    playerStartingHand();
    dealerStartingHand();
    document.querySelector("#dealer-cards").querySelectorAll("img")[0].hidden = false;
    document.querySelector("#dealer-cards").querySelectorAll("img")[1].hidden = true;

    if((currentBet * 2) > playerMoney) {
        document.getElementById("double-down").style.filter = "grayscale(100%)";
        document.getElementById("double-down").style.cursor = "not-allowed";
        document.querySelector("#double-down").removeEventListener("click", doubleDown);
    }
}

// startGame();
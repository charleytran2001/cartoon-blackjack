function hit() {
    playerCardCounter++;
    currentCard = drawRandomCard();
    createNewCardPlayer();
    document.getElementById("player-cards").appendChild(imageBox);

    if(currentCardValue === "A") {
        playerSoftHandTotal += 11;
        if(playerSoftHandTotal > 21) {
            playerSoftHandTotal -= 10;
        }
        playerHardHandTotal += 1;
    } else if(currentCardValue === "J" || currentCardValue === "Q" || currentCardValue === "K") {
        playerSoftHandTotal += 10;
        playerHardHandTotal += 10;
    } else {
        playerSoftHandTotal += currentCardValue;
        playerHardHandTotal += currentCardValue;
    }

    // Selects between Soft or Hard Hand for Aces
    playerAceTotal = playerSoftHandTotal;
    if(playerSoftHandTotal > 21) {
        playerAceTotal = playerHardHandTotal;
    }
    document.getElementById("player-total").innerHTML = "TOTAL: " + playerAceTotal;

    if(playerAceTotal === 21) {
        document.getElementById("hit").style.filter = "grayscale(100%)";
        document.getElementById("hit").style.cursor = "default";
        document.getElementById("hit").onclick = null;
    } else if(playerAceTotal > 21) {
        document.getElementById("hit").style.filter = "grayscale(100%)";
        document.getElementById("hit").style.cursor = "default";
        document.getElementById("hit").onclick = null;
        document.getElementById("player-total").style.color = "red";
    }

    if(playerCardCounter === 6) {
        document.getElementById("hit").style.filter = "grayscale(100%)";
        document.getElementById("hit").style.cursor = "default";
        document.getElementById("hit").onclick = null;
        document.getElementById("hit").disabled = true;
    }

    // Runs until dealer's hand is 17 or more
    if(dealerAceTotal < 17) {
        dealerHit();
    }
}

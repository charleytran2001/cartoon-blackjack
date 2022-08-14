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
    document.getElementById("player-total").innerHTML = "PLAYER TOTAL: " + playerAceTotal;

    if(playerAceTotal === 21) {
        document.getElementById("hit").style.filter = "grayscale(100%)";
        document.getElementById("hit").style.cursor = "not-allowed";
        document.querySelector("#hit").removeEventListener("click", hit);
        document.querySelector("#double-down").style.filter = "grayscale(100%)";
        document.querySelector("#double-down").style.cursor = "not-allowed";
        document.querySelector("#double-down").removeEventListener("click", doubleDown);
        document.querySelector("#surrender").style.filter = "grayscale(100%)";
        document.querySelector("#surrender").style.cursor = "not-allowed";
        document.querySelector("#surrender").removeEventListener("click", surrender);
    } else if(playerAceTotal > 21) {
        document.getElementById("hit").style.filter = "grayscale(100%)";
        document.getElementById("hit").style.cursor = "not-allowed";
        document.querySelector("#hit").removeEventListener("click", hit);
        document.querySelector("#double-down").style.filter = "grayscale(100%)";
        document.querySelector("#double-down").style.cursor = "not-allowed";
        document.querySelector("#double-down").removeEventListener("click", doubleDown);
        document.querySelector("#surrender").style.filter = "grayscale(100%)";
        document.querySelector("#surrender").style.cursor = "not-allowed";
        document.querySelector("#surrender").removeEventListener("click", surrender);
        document.getElementById("player-total").style.color = "red";
    }

    if(playerCardCounter > 2) {
        document.querySelector("#double-down").style.filter = "grayscale(100%)";
        document.querySelector("#double-down").style.cursor = "not-allowed";
        document.querySelector("#double-down").removeEventListener("click", doubleDown);
        document.querySelector("#surrender").style.filter = "grayscale(100%)";
        document.querySelector("#surrender").style.cursor = "not-allowed";
        document.querySelector("#surrender").removeEventListener("click", surrender);
    }

    if(playerCardCounter === 6) {
        document.getElementById("hit").style.filter = "grayscale(100%)";
        document.getElementById("hit").style.cursor = "not-allowed";
        document.querySelector("#hit").removeEventListener("click", hit);;
    }

    /*
    // Runs until dealer's hand is 17 or more
    if(dealerAceTotal < 17) {
        dealerHit();
    }
    */
}

document.querySelector("#hit").addEventListener("click", hit);
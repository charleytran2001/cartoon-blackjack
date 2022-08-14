function dealerHit() {
    dealerCardCounter++;
    currentCard = drawRandomCard();
    createNewCardDealer();
    createNewBackDealer();
    document.getElementById("dealer-cards").appendChild(imageBox);
    document.getElementById("dealer-cards").appendChild(backBox);

    if(dealerCardCounter === 1) {
        dealerFirstCard = currentCardValue;
    }

    if(currentCardValue === "A") {
        dealerSoftHandTotal += 11;
        if(dealerSoftHandTotal > 21) {
            dealerSoftHandTotal -= 10;
        }
        dealerHardHandTotal += 1;
    } else if(currentCardValue === "J" || currentCardValue === "Q" || currentCardValue === "K") {
        dealerSoftHandTotal += 10;
        dealerHardHandTotal += 10;
    } else {
        dealerSoftHandTotal += currentCardValue;
        dealerHardHandTotal += currentCardValue;
    }

    // Selects between Soft or Hard Hand for Aces
    dealerAceTotal = dealerSoftHandTotal;
    if(dealerSoftHandTotal > 21) {
        dealerAceTotal = dealerHardHandTotal;
    }

    // document.getElementById("dealer-total").innerHTML = "DEALER TOTAL: ???";
    document.querySelector("#dealer-total").innerText = `DEALER TOTAL: ${dealerFirstCard}, ?`
}
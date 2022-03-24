function stand() {
    document.getElementById("hit").hidden = true;
    document.getElementById("stand").hidden = true;
    document.getElementById("double-down").hidden = true;
    document.getElementById("surrender").hidden = true;
    // document.getElementById("menu").hidden = false;
    document.getElementById("restart").hidden = false;
    
    // Runs until dealer's hand is 17 or more
    while(dealerAceTotal < 17) {
        dealerHit();
    }

    for(var i = 0; i < dealerCardCounter; i++) {
        document.getElementsByClassName("dealerCardFace")[i].hidden = false;
        document.getElementsByClassName("dealerCardBack")[i].hidden = true;
    }

    console.log(dealerCardCounter);

    document.getElementById("dealer-total").innerHTML = "DEALER TOTAL: " + dealerAceTotal;

    // Checks for Blackjack
    if(playerAceTotal === 21 && dealerAceTotal === 21) {
        document.getElementById("status").innerHTML = "DOUBLE 21: TIE";
    } else if(playerAceTotal === 21) {
        document.getElementById("status").innerHTML = "21: YOU WIN";
    } else if(dealerAceTotal === 21) {
        document.getElementById("status").innerHTML = "DEALER 21: YOU LOSE";

        // Checks for Charlie
    } else if(playerCardCounter === 6 && playerAceTotal <= 21 && dealerCardCounter === 6 && dealerAceTotal <= 21) {
        if(playerAceTotal === dealerAceTotal) {
            document.getElementById("status").innerHTML = "DOUBLE 6-CARD CHARLIE - YOU WIN";
        } else if(playerAceTotal > dealerAceTotal) {
            document.getElementById("status").innerHTML = "DOUBLE 6-CARD CHARLIE - YOU HAVE THE LARGER HAND: YOU WIN";
        } else if(dealerAceTotal > playerAceTotal) {
            document.getElementById("status").innerHTML = "DOUBLE 6-CARD CHARLIE - THE DEALER HAS THE LARGER HAND: YOU LOSE";
        }
    } else if(playerCardCounter === 6 && playerAceTotal <= 21) {
        document.getElementById("status").innerHTML = "6-CARD CHARLIE: YOU WIN";
    } else if(dealerCardCounter === 6 && dealerAceTotal <= 21) {
        document.getElementById("status").innerHTML = "DEALER 6-CARD CHARLIE: YOU LOSE";

    } else if(playerAceTotal > 21 && dealerAceTotal > 21) {
        document.getElementById("status").innerHTML = "BUST: TIE";

        // Checks if user busted
    } else if(playerAceTotal > 21) {
        document.getElementById("status").innerHTML = "BUST: YOU LOSE";

        // Checks if dealer busted
    } else if(dealerAceTotal > 21) {
        document.getElementById("status").innerHTML = "DEALER BUST: YOU WIN";

        // Checks for victor
    } else if(playerAceTotal > dealerAceTotal) {
        document.getElementById("status").innerHTML = "YOU WIN";
    } else if(playerAceTotal < dealerAceTotal) {
        document.getElementById("status").innerHTML = "YOU LOSE";
    } else {
        document.getElementById("status").innerHTML = "IT'S A TIE";
    }

    document.getElementById("dealer-total").innerHTML = "DEALER TOTAL: " + dealerAceTotal;

    if(dealerAceTotal > 21) {
        document.getElementById("dealer-total").style.color = "red";
    }
}
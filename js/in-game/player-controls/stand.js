function stand() {
    document.getElementById("hit").hidden = true;
    document.getElementById("stand").hidden = true;
    document.getElementById("double-down").hidden = true;
    document.getElementById("surrender").hidden = true;
    // document.getElementById("restart").hidden = false;
    document.querySelector("#restartButton").style.display = "block";

    // Test Variables
    // playerAceTotal = 21;
    // playerSoftHandTotal = 21;
    // playerHardHandTotal = 11;
    // playerCardCounter = 7;
    
    // dealerAceTotal = 21;
    // dealerSoftHandTotal = 21;
    // dealerHardHandTotal = 11;
    // dealerCardCounter = 2;
    
    // Runs until dealer's hand is 17 or more
    while(dealerAceTotal <= 17) {
        if(dealerSoftHandTotal === 17) {
            dealerHit();
        } else if(dealerHardHandTotal >= 17) {
            break;
        } else {
            dealerHit();
        }

    }

    for(var i = 0; i < dealerCardCounter; i++) {
        document.getElementsByClassName("dealerCardFace")[i].hidden = false;
        document.getElementsByClassName("dealerCardBack")[i].hidden = true;
    }

    // console.log(dealerCardCounter);

    document.getElementById("dealer-total").innerHTML = "DEALER TOTAL: " + dealerAceTotal;

    // Checks for 7-Card Charlie
    if(playerCardCounter === 7 && playerAceTotal <= 21 && dealerCardCounter === 7 && dealerAceTotal <= 21) {
        if(playerAceTotal === dealerAceTotal) {
            document.getElementById("status").innerHTML = "DOUBLE 7-CARD CHARLIE - YOU WIN";
            playerMoney += currentBet;
        } else if(playerAceTotal > dealerAceTotal) {
            document.getElementById("status").innerHTML = "DOUBLE 7-CARD CHARLIE - YOU HAVE THE LARGER HAND: YOU WIN";
            playerMoney += currentBet;
        } else if(dealerAceTotal > playerAceTotal) {
            document.getElementById("status").innerHTML = "DOUBLE 7-CARD CHARLIE - THE DEALER HAS THE LARGER HAND: YOU LOSE";
            playerMoney -= currentBet;
        }
    } else if(playerCardCounter === 7 && playerAceTotal <= 21) {
        document.getElementById("status").innerHTML = "7-CARD CHARLIE: YOU WIN";
        playerMoney += currentBet;
    } else if(dealerCardCounter === 7 && dealerAceTotal <= 21) {
        document.getElementById("status").innerHTML = "DEALER 7-CARD CHARLIE: YOU LOSE";
        playerMoney -= currentBet;

    // Checks for Blackjack
    } else if(playerAceTotal === 21 && dealerAceTotal === 21 && playerCardCounter === 2 && dealerCardCounter === 2) {
        document.getElementById("status").innerHTML = "DOUBLE BLACKJACK: TIE";

    // Blackjack vs. 21
    } else if (playerAceTotal === 21 && dealerAceTotal === 21 && playerCardCounter === 2 && dealerCardCounter > 2) {
        document.getElementById("status").innerHTML = "BLACKJACK BEATS DEALER 21: YOU WIN";
        playerMoney += (currentBet * 1.5);
    } else if (playerAceTotal === 21 && dealerAceTotal === 21 && playerCardCounter > 2 && dealerCardCounter === 2) {
        document.getElementById("status").innerHTML = "DEALER BLACKJACK BEATS 21: YOU LOSE";
        playerMoney -= currentBet;
    } else if(playerAceTotal === 21 && playerCardCounter === 2) {
        document.getElementById("status").innerHTML = "BLACKJACK: YOU WIN";
        playerMoney += (currentBet * 1.5);
    } else if(dealerAceTotal === 21 && dealerCardCounter === 2) {
        document.getElementById("status").innerHTML = "DEALER BLACKJACK: YOU LOSE";
        playerMoney -= currentBet;

    // Checks for 21
    } else if(playerAceTotal === 21 && dealerAceTotal === 21) {
        document.getElementById("status").innerHTML = "DOUBLE 21: TIE";
    } else if(playerAceTotal === 21) {
        document.getElementById("status").innerHTML = "21: YOU WIN";
        playerMoney += currentBet;
    } else if(dealerAceTotal === 21) {
        document.getElementById("status").innerHTML = "DEALER 21: YOU LOSE";
        playerMoney -= currentBet;

    // Checks if user busted
    } else if(playerAceTotal > 21 && dealerAceTotal > 21) {
        document.getElementById("status").innerHTML = "DOUBLE BUST: YOU LOSE";
        playerMoney -= currentBet;
    } else if(playerAceTotal > 21) {
        document.getElementById("status").innerHTML = "BUST: YOU LOSE";
        playerMoney -= currentBet;

    // Checks if dealer busted
    } else if(dealerAceTotal > 21) {
        document.getElementById("status").innerHTML = "DEALER BUST: YOU WIN";
        playerMoney += currentBet;

    // Checks for victor
    } else if(playerAceTotal > dealerAceTotal) {
        document.getElementById("status").innerHTML = "YOU WIN";
        playerMoney += currentBet;
    } else if(playerAceTotal < dealerAceTotal) {
        document.getElementById("status").innerHTML = "YOU LOSE";
        playerMoney -= currentBet;
    } else {
        document.getElementById("status").innerHTML = "IT'S A TIE";
    }

    document.getElementById("dealer-total").innerHTML = "DEALER TOTAL: " + dealerAceTotal;

    if(dealerAceTotal > 21) {
        document.getElementById("dealer-total").style.color = "red";
    }
}
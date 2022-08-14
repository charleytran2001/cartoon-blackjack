let reset = () => {
    playerHardHandTotal = 0;
    playerSoftHandTotal = 0;
    playerAceTotal = 0;
    playerCardCounter = 0;

    dealerHardHandTotal = 0;
    dealerSoftHandTotal = 0;
    dealerAceTotal = 0;
    dealerCardCounter = 0;

    document.getElementById("player-cards").innerHTML = "";
    document.querySelector("#player-total").innerText = "";
    document.getElementById("dealer-cards").innerHTML = "";
    document.querySelector("#dealer-total").innerText = "";

    document.getElementById("player-total").style.color = "black";
    document.getElementById("dealer-total").style.color = "black";
    document.querySelector("#status").innerText = "";

    document.getElementById("hit").style.filter = "grayscale(0)";
    document.getElementById("hit").style.cursor = "pointer";
    document.getElementById("hit").style.pointerEvents = "auto";
    document.querySelector("#double-down").style.filter = "grayscale(0)";
    document.querySelector("#double-down").style.cursor = "pointer";
    document.querySelector("#double-down").style.pointerEvents = "auto";
    document.querySelector("#surrender").style.filter = "grayscale(0)";
    document.querySelector("#surrender").style.cursor = "pointer";
    document.querySelector("#surrender").style.pointerEvents = "auto";

    document.getElementById("hit").hidden = false;
    document.getElementById("stand").hidden = false;
    document.getElementById("double-down").hidden = false;
    document.getElementById("surrender").hidden = false;
    document.querySelector("#restartButton").style.display = "none";
}
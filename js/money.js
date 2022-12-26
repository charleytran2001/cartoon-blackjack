let playerMoney = 100;
let currentBet = 0;

let doubleDown = () => {
    currentBet *= 2;
    hit();
    stand();
};

let surrender = () => {
    let tempMoney = playerMoney;
    stand();
    playerMoney = tempMoney;
    playerMoney -= (currentBet / 2);
    document.querySelector("#status").innerText = "SURRENDERED"
};

startButton.addEventListener("click", () => {
    currentBet = document.querySelector("#currentBet").valueAsNumber;
    document.querySelector("#hit").addEventListener("click", hit);
    document.querySelector("#double-down").addEventListener("click", doubleDown);
    document.querySelector("#surrender").addEventListener("click", surrender);
});

restartButton.addEventListener("click", () => {
    document.querySelector("#currentMoney").innerText = `Current Balance: $${playerMoney}`;
    currentBet = 0;
});

// Game over message
function gameover() {
    if(playerMoney <= 0) {
        document.querySelector("#title").hidden = true;
        document.querySelector("#homeMessage").innerText = "You ran out of money"
        document.querySelector("#currentBet").hidden = true;
        document.querySelector("#startButton").hidden = true;

        var deathmessage = Math.floor(Math.random() * 5 + 1);
        switch (deathmessage) {
            case 1:
                document.getElementById("gameover").innerHTML = "Ashamed of yourself, you went home and commited toaster bath. You died. THE END";
                break;
            case 2:
                document.getElementById("gameover").innerHTML = "The dealer shot you for being broke. You died. THE END";
                break;
            case 3:
                document.getElementById("gameover").innerHTML = "You smoke a cig to relieve the stress of wasting all your savings on Blackjack. You got lung cancer and died. THE END";
                break;
            case 4:
                document.getElementById("gameover").innerHTML = "You tripped on your way out of the casino and snapped your neck. You died. THE END";
                break;
            case 5:
                document.getElementById("gameover").innerHTML = "As you were walking out of the casino, a meteor hits you. You died. THE END";
                break;
            case 6:
                document.getElementById("gameover").innerHTML = "Your car blew up the moment you stepped in. You died. THE END";
                break;
            case 7:
                document.getElementById("gameover").innerHTML = "You brought great dishonor to your family and committed sudoku. You died. THE END";
                break;
        }
        //     document.getElementById("status").innerHTML = " You died. THE END";
        //     document.getElementById("status").innerHTML = " You died. THE END";
        //     document.getElementById("status").innerHTML = " You died. THE END";
        //     document.getElementById("status").innerHTML = " You died. THE END";
    }
}
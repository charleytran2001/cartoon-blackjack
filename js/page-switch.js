let homePage = document.querySelector("#homePage");
let gamePage = document.querySelector("#gamePage");

let startButton = document.querySelector("#startButton");
let restartButton = document.querySelector("#restartButton");

startButton.addEventListener("click", () => {
    if(currentBet > playerMoney) {
        document.querySelector("#homeMessage").innerText = "You don't have enough money";
    } else {
        homePage.style.display = "none";
        gamePage.style.display = "block";
        startGame();
    }
});

restartButton.addEventListener("click", () => {
    homePage.style.display = "block";
    gamePage.style.display = "none";
    document.querySelector("#homeMessage").innerText = "Place Your Bets Here";

    reset();
    
    if(playerMoney <= 0) {
        gameover();
    }
});
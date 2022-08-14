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
    document.querySelector("#currentMoney").innerText = `Current Money: $${playerMoney}`;
    currentBet = 0;
});
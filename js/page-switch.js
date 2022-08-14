let homePage = document.querySelector("#homePage");
let gamePage = document.querySelector("#gamePage");

let startButton = document.querySelector("#startButton");
let restartButton = document.querySelector("#restartButton");

startButton.addEventListener("click", () => {
    homePage.style.display = "none";
    gamePage.style.display = "block";
    startGame();
});

restartButton.addEventListener("click", () => {
    homePage.style.display = "block";
    gamePage.style.display = "none";

    reset();
});
function buttonRNG() {
    var buttonRNG = Math.floor(Math.random() * 2);
    if(buttonRNG === 0) {
        buttonPicker = "1";
    } else if(buttonRNG === 1) {
        buttonPicker = "2";
    }
}

buttonRNG();
document.getElementById("hit").src = "./images/button-images/hit" + buttonPicker + ".png";
buttonRNG();
document.getElementById("stand").src = "./images/button-images/stand" + buttonPicker + ".png";
buttonRNG();
document.getElementById("double-down").src = "./images/button-images/double-down" + buttonPicker + ".png";
buttonRNG();
document.getElementById("surrender").src = "./images/button-images/surrender" + buttonPicker + ".png";
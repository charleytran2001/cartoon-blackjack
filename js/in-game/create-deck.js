let deck = [];

const newDeck = (deckAmount = 1) => {
    let deckArray = [];

    const suitArray = ["S", "H", "C", "D"];
    const faceArray = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

    for(let i = 0; i < deckAmount; i++) {
        for(let suit of suitArray) {
            for(let face of faceArray) {
                let card = {
                    suit: suit,
                    face: face
                }
                deckArray.push(card);
            }
        }
    }

    return deckArray;
}

const drawRandomCard = () => {
    let randomNumber = Math.floor(Math.random() * deck.length);
    let randomCard = deck.splice(randomNumber, 1)[0];
    return randomCard;
}

/*
// UNUSED CARD RENDERER
const renderCard = id => {
    let card = drawCard();
    let row = document.querySelector(`#row${id}`);

    let cardImg = document.createElement("img");
    cardImg.src = "./images/card-images/" + card.suit + "-" + card.face + ".png";
    cardImg.alt = card.suit + "-" + card.face;

    row.append(cardImg);
}
*/
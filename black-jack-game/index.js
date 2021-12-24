randomNumber = (minimum, maximum) => { return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum } 

let firstCard = randomNumber(1,11);
let secondCard = randomNumber(1,11);
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector(".cards-el");

function startGame(){
    renderGame();
}

function renderGame(){

    sumEl.textContent = "Sum: " + parseInt(cards.reduce((a, b) => a + b, 0))
    cardsEl.textContent = "Cards: " +  cards.join(" ")
    if (sum <= 21){
        message = "Do you want to draw a card?"
    } else if (sum === 21){
        message = "Congrats!"
        // isAlive = false;
    } else {
        message = "You have lost!"
        isAlive = false;
    }

    console.log(message)
    messageEl.textContent = message;
}

function newCard(){
    let card = randomNumber(1,10)

    sum += parseInt(card)
    cards.push(card)

    cardsEl.textContent += card + " "

    renderGame();
}

function newGame(){
    messageEl.textContent = "Start a new game!";
    sumEl.textContent = "Sum: "
    cardsEl.textContent = "Cards: "
}
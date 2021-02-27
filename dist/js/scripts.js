/*! JS Memory Game v0.0.1 | (c) 2021 Misha | MIT License | # */
var cards = [ { id: 1, }, { id: 2, }, { id: 3, }, { id: 4, }, { id: 5, }, { id: 6, }, { id: 7, }, { id: 8, }, { id: 9, }, { id: 10, }, { id: 11, }, { id: 12, }, ];
var game = document.querySelector(".game");
var duplicateDeck = [];

function duplicateCards() {
    for (var i = 0; i < cards.length; i++) {
        var singleCard = cards[i];
        duplicateDeck.push(singleCard);
        duplicateDeck.push(singleCard);
    }
}

duplicateCards();

function shuffleCards() {
  var currentIndex = duplicateDeck.length, temporaryValue, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = duplicateDeck[currentIndex];
    duplicateDeck[currentIndex] = duplicateDeck[randomIndex];
    duplicateDeck[randomIndex] = temporaryValue;
  }
}

shuffleCards();

function createCardElements() {
    for (var i = 0; i < duplicateDeck.length; i++) {
        var cardID = duplicateDeck[i].id;

        var cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.setAttribute("id", cardID);
        cardElement.innerHTML = cardID;
        cardElement.addEventListener("click", showTheCard);
        cardElement.addEventListener("click", compareCards);

        game.appendChild(cardElement);
    }
}

createCardElements();

function showTheCard() {
    this.classList.add("card-visible");
    this.classList.add("remove-click");
}

var compareArray = [];

function compareCards(event) {
    compareArray.push(this);
    console.log(compareArray);
    if (compareArray.length === 2) {
        if (compareArray[0].innerText === compareArray[1].innerText) {
            cardsMatch();
        } else {
            cardsDontMatch();
        }
    }
}

function cardsMatch() {
    compareArray[0].classList.add('card-finished');
    compareArray[1].classList.add('card-finished');
    compareArray[0].classList.remove('card-visible');
    compareArray[0].classList.remove('remove-click');
    compareArray[1].classList.remove('card-visible');
    compareArray[1].classList.remove('remove-click');
    compareArray = [];
}

function cardsDontMatch() {
    setTimeout((function(){ 
        compareArray[0].classList.remove('card-visible');
        compareArray[0].classList.remove('remove-click');
        compareArray[1].classList.remove('card-visible');
        compareArray[1].classList.remove('remove-click');
        compareArray = [];
    }), 1000);
}
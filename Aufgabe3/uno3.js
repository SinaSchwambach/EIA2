var Uno3;
(function (Uno3) {
    document.addEventListener("DOMContentLoaded", main);
    document.addEventListener("DOMContentLoaded", handleClickOnButton);
    document.addEventListener("DOMContentLoaded", handleClickOnDeck);
    document.addEventListener("DOMContentLoaded", handleEventClickOnCard);
    document.addEventListener("click", handleEventClickOnCard);
    let cards = [{ color: "#ff0000", value: "0" }, { color: "#ff0000", value: "1" }, { color: "#ff0000", value: "1" }, { color: "#ff0000", value: "2" }, { color: "#ff0000", value: "3" }, { color: "#ff0000", value: "3" }, { color: "#ff0000", value: "4" }, { color: "#ff0000", value: "4" }, { color: "#ff0000", value: "5" }, { color: "#ff0000", value: "5" }, { color: "#ff0000", value: "6" }, { color: "#ff0000", value: "6" }, { color: "#ff0000", value: "7" }, { color: "#ff0000", value: "7" }, { color: "#ff0000", value: "8" }, { color: "#ff0000", value: "8" }, { color: "#ff0000", value: "9" }, { color: "#ff0000", value: "9" }, { color: "#ff0000", value: "+2" }, { color: "#ff0000", value: "+2" }, { color: "#ff0000", value: "aussetzen" }, { color: "#ff0000", value: "aussetzen" },
        { color: "#00ff00", value: "0" }, { color: "#00ff00", value: "1" }, { color: "#00ff00", value: "1" }, { color: "#00ff00", value: "2" }, { color: "#00ff00", value: "2" }, { color: "#00ff00", value: "3" }, { color: "#00ff00", value: "3" }, { color: "#00ff00", value: "4" }, { color: "#00ff00", value: "4" }, { color: "#00ff00", value: "5" }, { color: "#00ff00", value: "5" }, { color: "#00ff00", value: "6" }, { color: "#00ff00", value: "6" }, { color: "#00ff00", value: "7" }, { color: "#00ff00", value: "7" }, { color: "#00ff00", value: "8" }, { color: "#00ff00", value: "8" }, { color: "#00ff00", value: "9" }, { color: "#00ff00", value: "9" }, { color: "#00ff00", value: "+2" }, { color: "#00ff00", value: "+2" }, { color: "#00ff00", value: "aussetzen" }, { color: "#00ff00", value: "aussetzen" },
        { color: "#0000ff", value: "0" }, { color: "#0000ff", value: "1" }, { color: "#0000ff", value: "1" }, { color: "#0000ff", value: "2" }, { color: "#0000ff", value: "2" }, { color: "#0000ff", value: "3" }, { color: "#0000ff", value: "3" }, { color: "#0000ff", value: "4" }, { color: "#0000ff", value: "4" }, { color: "#0000ff", value: "5" }, { color: "#0000ff", value: "5" }, { color: "#0000ff", value: "6" }, { color: "#0000ff", value: "6" }, { color: "#0000ff", value: "7" }, { color: "#0000ff", value: "7" }, { color: "#0000ff", value: "8" }, { color: "#0000ff", value: "8" }, { color: "#0000ff", value: "9" }, { color: "#0000ff", value: "9" }, { color: "#0000ff", value: "+2" }, { color: "#0000ff", value: "+2" }, { color: "#0000ff", value: "aussetzen" }, { color: "#0000ff", value: "aussetzen" },
        { color: "#ffff00", value: "0" }, { color: "#ffff00", value: "1" }, { color: "#ffff00", value: "1" }, { color: "#ffff00", value: "2" }, { color: "#ffff00", value: "2" }, { color: "#ffff00", value: "3" }, { color: "#ffff00", value: "3" }, { color: "#ffff00", value: "4" }, { color: "#ffff00", value: "4" }, { color: "#ffff00", value: "5" }, { color: "#ffff00", value: "5" }, { color: "#ffff00", value: "6" }, { color: "#ffff00", value: "6" }, { color: "#ffff00", value: "7" }, { color: "#ffff00", value: "7" }, { color: "#ffff00", value: "8" }, { color: "#ffff00", value: "8" }, { color: "#ffff00", value: "9" }, { color: "#ffff00", value: "9" }, { color: "#ffff00", value: "+2" }, { color: "#ffff00", value: "+2" }, { color: "#ffff00", value: "aussetzen" }, { color: "#ffff00", value: "aussetzen" },
        { color: "#000000", value: "+4" }, { color: "#000000", value: "+4" }, { color: "#000000", value: "+4" }, { color: "#000000", value: "+4" }, { color: "#000000", value: "farbwechsel" }, { color: "#000000", value: "farbwechsel" }, { color: "#000000", value: "farbwechsel" }, { color: "#000000", value: "farbwechsel" }];
    let hand = [];
    function main() {
        let numOfCards = prompt("Wie viele Karten m�chtest du?");
        let numCards = +numOfCards;
        drawCards(numCards);
    }
    function drawCards(_numCards) {
        for (let x = 0; x < _numCards; x++) {
            let random = Math.floor(Math.random() * cards.length);
            let getcard = cards.splice(random, 1)[0];
            console.log(getcard);
            hand.push(getcard);
            displayHand(hand);
        }
    }
    function displayHand(hand) {
        let handdiv = document.getElementById("hand");
        let span = document.createElement("span");
        for (let o = 0; o < hand.length; o++) {
            span.innerText = hand[o].value;
            span.style.backgroundColor = hand[o].color;
            span.setAttribute("id", "hand[o]");
            span.style.color = "black";
            if (hand[o].color == "#000000" || hand[o].color == "#0000ff") {
                span.style.color = "white";
            }
            handdiv.appendChild(span);
        }
    }
    function handleClickOnDeck() {
        document.getElementById("Ziehstapel").addEventListener("click", drawNewCard);
        document.addEventListener("space", drawNewCard);
    }
    function drawNewCard(_event) {
        let check = 0;
        if (check <= cards.length) {
            let random = Math.floor(Math.random() * cards.length);
            let getcard = cards.splice(random, 1)[0];
            console.log(getcard);
            hand.push(getcard);
            displayHand(hand); //�nderung DisplayHand(hand)
        }
    }
    function handleClickOnButton() {
        document.getElementById("button").addEventListener("click", sortCards);
    }
    function sortCards(_event) {
        hand.sort(compareCards);
        displayHand(hand); //�nderung DisplayHand(hand)
    }
    function compareCards(card1, card2) {
        let x = card1.color.toLowerCase();
        let y = card2.color.toLowerCase();
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    }
    function handleEventClickOnCard(_event) {
        _event.preventDefault();
        let spanCard = _event.target;
        let id = parseInt(spanCard.getAttribute("id"));
        let selectedCard = hand.splice(id, 1)[0];
        displayHand(hand);
        playCard(selectedCard);
    }
    function playCard(_selectedCard) {
        let pile = document.getElementById("Ablagestapel");
        let span = document.createElement("span");
        span.innerText = _selectedCard.value;
        span.style.backgroundColor = _selectedCard.color;
        span.style.color = "black";
        if (_selectedCard.color == "#000000" || _selectedCard.color == "#0000ff") {
            span.style.color = "white";
        }
        pile.appendChild(span);
    }
})(Uno3 || (Uno3 = {}));
//# sourceMappingURL=uno3.js.map
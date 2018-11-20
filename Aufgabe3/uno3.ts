namespace Uno3 {

    interface Card {
        color: string;
        value: string;
    }
    document.addEventListener("DOMContentLoaded", main);
    document.addEventListener("DOMContentLoaded", createListener);


    let cards: Card[] = [{ color: "#ff0000", value: "0" }, { color: "#ff0000", value: "1" }, { color: "#ff0000", value: "1" }, { color: "#ff0000", value: "2" }, { color: "#ff0000", value: "3" }, { color: "#ff0000", value: "3" }, { color: "#ff0000", value: "4" }, { color: "#ff0000", value: "4" }, { color: "#ff0000", value: "5" }, { color: "#ff0000", value: "5" }, { color: "#ff0000", value: "6" }, { color: "#ff0000", value: "6" }, { color: "#ff0000", value: "7" }, { color: "#ff0000", value: "7" }, { color: "#ff0000", value: "8" }, { color: "#ff0000", value: "8" }, { color: "#ff0000", value: "9" }, { color: "#ff0000", value: "9" }, { color: "#ff0000", value: "+2" }, { color: "#ff0000", value: "+2" }, { color: "#ff0000", value: "aussetzen" }, { color: "#ff0000", value: "aussetzen" },
        { color: "#00ff00", value: "0" }, { color: "#00ff00", value: "1" }, { color: "#00ff00", value: "1" }, { color: "#00ff00", value: "2" }, { color: "#00ff00", value: "2" }, { color: "#00ff00", value: "3" }, { color: "#00ff00", value: "3" }, { color: "#00ff00", value: "4" }, { color: "#00ff00", value: "4" }, { color: "#00ff00", value: "5" }, { color: "#00ff00", value: "5" }, { color: "#00ff00", value: "6" }, { color: "#00ff00", value: "6" }, { color: "#00ff00", value: "7" }, { color: "#00ff00", value: "7" }, { color: "#00ff00", value: "8" }, { color: "#00ff00", value: "8" }, { color: "#00ff00", value: "9" }, { color: "#00ff00", value: "9" }, { color: "#00ff00", value: "+2" }, { color: "#00ff00", value: "+2" }, { color: "#00ff00", value: "aussetzen" }, { color: "#00ff00", value: "aussetzen" },
        { color: "#0000ff", value: "0" }, { color: "#0000ff", value: "1" }, { color: "#0000ff", value: "1" }, { color: "#0000ff", value: "2" }, { color: "#0000ff", value: "2" }, { color: "#0000ff", value: "3" }, { color: "#0000ff", value: "3" }, { color: "#0000ff", value: "4" }, { color: "#0000ff", value: "4" }, { color: "#0000ff", value: "5" }, { color: "#0000ff", value: "5" }, { color: "#0000ff", value: "6" }, { color: "#0000ff", value: "6" }, { color: "#0000ff", value: "7" }, { color: "#0000ff", value: "7" }, { color: "#0000ff", value: "8" }, { color: "#0000ff", value: "8" }, { color: "#0000ff", value: "9" }, { color: "#0000ff", value: "9" }, { color: "#0000ff", value: "+2" }, { color: "#0000ff", value: "+2" }, { color: "#0000ff", value: "aussetzen" }, { color: "#0000ff", value: "aussetzen" },
        { color: "#ffff00", value: "0" }, { color: "#ffff00", value: "1" }, { color: "#ffff00", value: "1" }, { color: "#ffff00", value: "2" }, { color: "#ffff00", value: "2" }, { color: "#ffff00", value: "3" }, { color: "#ffff00", value: "3" }, { color: "#ffff00", value: "4" }, { color: "#ffff00", value: "4" }, { color: "#ffff00", value: "5" }, { color: "#ffff00", value: "5" }, { color: "#ffff00", value: "6" }, { color: "#ffff00", value: "6" }, { color: "#ffff00", value: "7" }, { color: "#ffff00", value: "7" }, { color: "#ffff00", value: "8" }, { color: "#ffff00", value: "8" }, { color: "#ffff00", value: "9" }, { color: "#ffff00", value: "9" }, { color: "#ffff00", value: "+2" }, { color: "#ffff00", value: "+2" }, { color: "#ffff00", value: "aussetzen" }, { color: "#ffff00", value: "aussetzen" },
        { color: "#000000", value: "+4" }, { color: "#000000", value: "+4" }, { color: "#000000", value: "+4" }, { color: "#000000", value: "+4" }, { color: "#000000", value: "farbwechsel" }, { color: "#000000", value: "farbwechsel" }, { color: "#000000", value: "farbwechsel" }, { color: "#000000", value: "farbwechsel" }];

    let hand: Card[] = [];

    function main(): void {
        let numOfCards: string = prompt("Wie viele Karten möchtest du?");
        let numCards: number = +numOfCards;

        drawCards(numCards);
    }

    function createListener(): void {
        document.getElementById("button").addEventListener("click", sortCards);
        document.getElementById("Ziehstapel").addEventListener("click", drawNewCard);
        document.addEventListener("keydown", pressSpace);
    }

    function drawCards(_numCards: number): void {
        for (let x: number = 0; x < _numCards; x++) {
            let random: number = Math.floor(Math.random() * cards.length);
            let getcard: Card = cards.splice(random, 1)[0];
            console.log(getcard);
            hand.push(getcard);
            displayHand();
        }
    }

    function displayHand(): void {
        let handdiv: HTMLElement = document.getElementById("hand");
        document.getElementById("hand").innerHTML = "";

        for (let o: number = 0; o < hand.length; o++) {
            let span: HTMLSpanElement = document.createElement("span");
            let id: string = o.toString();
            span.innerText = hand[o].value;
            span.style.backgroundColor = hand[o].color;
            span.setAttribute("id", id);
            span.style.color = "black";

            if (hand[o].color == "#000000" || hand[o].color == "#0000ff") {
                span.style.color = "white";
            }

            handdiv.appendChild(span);
            span.addEventListener("click", handleEventClickOnCard);
        }

    }


    function drawNewCard(): void {

        if (0 <= cards.length) {
            let random: number = Math.floor(Math.random() * cards.length);
            let getcard: Card = cards.splice(random, 1)[0];
            console.log(getcard);
            hand.push(getcard);
            displayHand(); //Änderung DisplayHand(hand)
        }
    }



    function sortCards(_event: Event): void {
        hand.sort(compareCards);
        displayHand(); //Änderung DisplayHand(hand)
    }

    function compareCards(card1: Card, card2: Card): number {
        let x: string = card1.color.toLowerCase();
        let y: string = card2.color.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;

    }

    function handleEventClickOnCard(_event: Event): void {

        //        _event.preventDefault();
        let spanCard: HTMLElement = <HTMLElement>_event.target;
        let id: number = parseInt(spanCard.getAttribute("id"));
        let realSelectedCard: Card = hand[id];
        let selectedCard: Card;
        playCard(realSelectedCard);
        selectedCard = hand.splice(id, 1)[0];
        displayHand();

    }

    function playCard(_selectedCard: Card): void {
        let pile: HTMLElement = document.getElementById("Ablage");
        pile.innerHTML = "";
        let span: HTMLSpanElement = document.createElement("span");
        span.innerText = _selectedCard.value;
        span.style.backgroundColor = _selectedCard.color;
        span.style.color = "black";

        if (_selectedCard.color == "#000000" || _selectedCard.color == "#0000ff") {
            span.style.color = "white";
        }
        pile.appendChild(span);
    }
    function pressSpace(_event: KeyboardEvent): void {
        if (_event.keyCode == 32) {
            drawNewCard();
        }
    }
}

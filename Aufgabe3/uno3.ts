namespace Uno3 {

    interface Card {
        color: string;
        value: string;
    }
    document.addEventListener("DOMContentLoaded", main);


    let cards: Card[] = [{ color: "#ff0000", value: "0" }, { color: "#ff0000", value: "1" }, { color: "#ff0000", value: "1" }, { color: "#ff0000", value: "2" }, { color: "#ff0000", value: "3" }, { color: "#ff0000", value: "3" }, { color: "#ff0000", value: "4" }, { color: "#ff0000", value: "4" }, { color: "#ff0000", value: "5" }, { color: "#ff0000", value: "5" }, { color: "#ff0000", value: "6" }, { color: "#ff0000", value: "6" }, { color: "#ff0000", value: "7" }, { color: "#ff0000", value: "7" }, { color: "#ff0000", value: "8" }, { color: "#ff0000", value: "8" }, { color: "#ff0000", value: "9" }, { color: "#ff0000", value: "9" }, { color: "#ff0000", value: "+2" }, { color: "#ff0000", value: "+2" }, { color: "#ff0000", value: "aussetzen" }, { color: "#ff0000", value: "aussetzen" },
        { color: "#00ff00", value: "0" }, { color: "#00ff00", value: "1" }, { color: "#00ff00", value: "1" }, { color: "#00ff00", value: "2" }, { color: "#00ff00", value: "2" }, { color: "#00ff00", value: "3" }, { color: "#00ff00", value: "3" }, { color: "#00ff00", value: "4" }, { color: "#00ff00", value: "4" }, { color: "#00ff00", value: "5" }, { color: "#00ff00", value: "5" }, { color: "#00ff00", value: "6" }, { color: "#00ff00", value: "6" }, { color: "#00ff00", value: "7" }, { color: "#00ff00", value: "7" }, { color: "#00ff00", value: "8" }, { color: "#00ff00", value: "8" }, { color: "#00ff00", value: "9" }, { color: "#00ff00", value: "9" }, { color: "#00ff00", value: "+2" }, { color: "#00ff00", value: "+2" }, { color: "#00ff00", value: "aussetzen" }, { color: "#00ff00", value: "aussetzen" },
        { color: "#0000ff", value: "0" }, { color: "#0000ff", value: "1" }, { color: "#0000ff", value: "1" }, { color: "#0000ff", value: "2" }, { color: "#0000ff", value: "2" }, { color: "#0000ff", value: "3" }, { color: "#0000ff", value: "3" }, { color: "#0000ff", value: "4" }, { color: "#0000ff", value: "4" }, { color: "#0000ff", value: "5" }, { color: "#0000ff", value: "5" }, { color: "#0000ff", value: "6" }, { color: "#0000ff", value: "6" }, { color: "#0000ff", value: "7" }, { color: "#0000ff", value: "7" }, { color: "#0000ff", value: "8" }, { color: "#0000ff", value: "8" }, { color: "#0000ff", value: "9" }, { color: "#0000ff", value: "9" }, { color: "#0000ff", value: "+2" }, { color: "#0000ff", value: "+2" }, { color: "#0000ff", value: "aussetzen" }, { color: "#0000ff", value: "aussetzen" },
        { color: "#ffff00", value: "0" }, { color: "#ffff00", value: "1" }, { color: "#ffff00", value: "1" }, { color: "#ffff00", value: "2" }, { color: "#ffff00", value: "2" }, { color: "#ffff00", value: "3" }, { color: "#ffff00", value: "3" }, { color: "#ffff00", value: "4" }, { color: "#ffff00", value: "4" }, { color: "#ffff00", value: "5" }, { color: "#ffff00", value: "5" }, { color: "#ffff00", value: "6" }, { color: "#ffff00", value: "6" }, { color: "#ffff00", value: "7" }, { color: "#ffff00", value: "7" }, { color: "#ffff00", value: "8" }, { color: "#ffff00", value: "8" }, { color: "#ffff00", value: "9" }, { color: "#ffff00", value: "9" }, { color: "#ffff00", value: "+2" }, { color: "#ffff00", value: "+2" }, { color: "#ffff00", value: "aussetzen" }, { color: "#ffff00", value: "aussetzen" },
        { color: "#000000", value: "+4" }, { color: "#000000", value: "+4" }, { color: "#000000", value: "+4" }, { color: "#000000", value: "+4" }, { color: "#000000", value: "farbwechsel" }, { color: "#000000", value: "farbwechsel" }, { color: "#000000", value: "farbwechsel" }, { color: "#000000", value: "farbwechsel" }];

    let hand: Card[] = [];

    document.addEventListener("click", drawNewCard);
    document.addEventListener("space", drawNewCard);
    document.getElementById("button").addEventListener("click", sortCards);
    /*document.addEventListener("click", playCard);*/

    function main(): void {
        let numOfCards: string = prompt("Wie viele Karten möchtest du?");
        let numCards: number = +numOfCards;

        drawCards(numCards);
    }

    function drawCards(_numCards: number): void {
        for (let x: number = 0; x < _numCards; x++) {
            let random: number = Math.floor(Math.random() * cards.length);
            let getcard: Card = cards.splice(random, 1)[0];
            console.log(getcard);
            hand.push(getcard);
            displayHand(hand);
        }
    }

    function displayHand(hand: Card[]): void {
        let handdiv: HTMLElement = document.getElementById("hand");
        let span: HTMLSpanElement = document.createElement("span");
        for (let o: number = 0; o < hand.length; o++) {

            span.innerText = hand[o].value;
            span.style.backgroundColor = hand[o].color;
            span.style.color = "black";

            if (hand[o].color == "#000000" || hand[o].color == "#0000ff") {
                span.style.color = "white";
            }

            handdiv.appendChild(span);
        }
    }

    function drawNewCard(_event: Event): void {
        let check: number = 0;
        if (check <= cards.length) {
            let random: number = Math.floor(Math.random() * cards.length);
            let getcard: Card = cards.splice(random, 1)[0];
            console.log(getcard);
            hand.push(getcard);
            displayHand(hand);
        }
    }

    function sortCards(_event: Event): void {
        hand.sort(compareCards); }
    
    function compareCards(card1: Card, card2: Card): number {
            let x: string = card1.color.toLowerCase();
            let y: string = card2.color.toLowerCase();
            if (x < y) { return -1; }
            if (x > y) { return 1; }
            return 0;
        };
    

}

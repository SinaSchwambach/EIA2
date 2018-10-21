interface Deck {
    color: string;
    value: string;

}



let cards: Deck[] = [{ color: "#ff0000", value: "0" }, { color: "#ff0000", value: "1" }, { color: "#ff0000", value: "1" }, { color: "#ff0000", value: "2" }, { color: "#ff0000", value: "3" }, { color: "#ff0000", value: "3" }, { color: "#ff0000", value: "4" }, { color: "#ff0000", value: "4" }, { color: "#ff0000", value: "5" }, { color: "#ff0000", value: "5" }, { color: "#ff0000", value: "6" }, { color: "#ff0000", value: "6" }, { color: "#ff0000", value: "7" }, { color: "#ff0000", value: "7" }, { color: "#ff0000", value: "8" }, { color: "#ff0000", value: "8" }, { color: "#ff0000", value: "9" }, { color: "#ff0000", value: "9" }, { color: "#ff0000", value: "+2" }, { color: "#ff0000", value: "+2" }, { color: "#ff0000", value: "aussetzen" }, { color: "#ff0000", value: "aussetzen" },
    { color: "#00ff00", value: "0" }, { color: "#00ff00", value: "1" }, { color: "#00ff00", value: "1" }, { color: "#00ff00", value: "2" }, { color: "#00ff00", value: "2" }, { color: "#00ff00", value: "3" }, { color: "#00ff00", value: "3" }, { color: "#00ff00", value: "4" }, { color: "#00ff00", value: "4" }, { color: "#00ff00", value: "5" }, { color: "#00ff00", value: "5" }, { color: "#00ff00", value: "6" }, { color: "#00ff00", value: "6" }, { color: "#00ff00", value: "7" }, { color: "#00ff00", value: "7" }, { color: "#00ff00", value: "8" }, { color: "#00ff00", value: "8" }, { color: "#00ff00", value: "9" }, { color: "#00ff00", value: "9" }, { color: "#00ff00", value: "+2" }, { color: "#00ff00", value: "+2" }, { color: "#00ff00", value: "aussetzen" }, { color: "#00ff00", value: "aussetzen" },
    { color: "#0000ff", value: "0" }, { color: "#0000ff", value: "1" }, { color: "#0000ff", value: "1" }, { color: "#0000ff", value: "2" }, { color: "#0000ff", value: "2" }, { color: "#0000ff", value: "3" }, { color: "#0000ff", value: "3" }, { color: "#0000ff", value: "4" }, { color: "#0000ff", value: "4" }, { color: "#0000ff", value: "5" }, { color: "#0000ff", value: "5" }, { color: "#0000ff", value: "6" }, { color: "#0000ff", value: "6" }, { color: "#0000ff", value: "7" }, { color: "#0000ff", value: "7" }, { color: "#0000ff", value: "8" }, { color: "#0000ff", value: "8" }, { color: "#0000ff", value: "9" }, { color: "#0000ff", value: "9" }, { color: "#0000ff", value: "+2" }, { color: "#0000ff", value: "+2" }, { color: "#0000ff", value: "aussetzen" }, { color: "#0000ff", value: "aussetzen" },
    { color: "#ffff00", value: "0" }, { color: "#ffff00", value: "1" }, { color: "#ffff00", value: "1" }, { color: "#ffff00", value: "2" }, { color: "#ffff00", value: "2" }, { color: "#ffff00", value: "3" }, { color: "#ffff00", value: "3" }, { color: "#ffff00", value: "4" }, { color: "#ffff00", value: "4" }, { color: "#ffff00", value: "5" }, { color: "#ffff00", value: "5" }, { color: "#ffff00", value: "6" }, { color: "#ffff00", value: "6" }, { color: "#ffff00", value: "7" }, { color: "#ffff00", value: "7" }, { color: "#ffff00", value: "8" }, { color: "#ffff00", value: "8" }, { color: "#ffff00", value: "9" }, { color: "#ffff00", value: "9" }, { color: "#ffff00", value: "+2" }, { color: "#ffff00", value: "+2" }, { color: "#ffff00", value: "aussetzen" }, { color: "#ffff00", value: "aussetzen" },
    { color: "#000000", value: "+4" }, { color: "#000000", value: "+4" }, { color: "#000000", value: "+4" }, { color: "#000000", value: "+4" }, { color: "#000000", value: "farbwechsel" }, { color: "#000000", value: "farbwechsel" }, { color: "#000000", value: "farbwechsel" }, { color: "#000000", value: "farbwechsel" },]


function Kartendeckerstellen(_card: Deck[]): void {

    for (let i: number = 0; i < _card.length; i++) {
        let div: HTMLDivElement = document.createElement("div");
        document.addEventListener('DOMContentLoaded', function() {

            document.body.appendChild(div);
        }

        )
    }
}

function Handkartenziehen(min: any = cards[0], max: any = cards[179]): void {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function placeDiv(x: number = 50, y: number = 0, color: Deck[], value: Deck[], _width: number = 50, _height: number = 50): void {
    let div: HTMLDivElement = document.createElement("div");
    document.addEventListener('DOMContentLoaded', function() {

        document.body.appendChild(div);


        let s: CSSStyleDeclaration = div.style;
        s.border = "thin solid black";
        s.position = "absolute";
        s.backgroundColor = color;
        s.width = _width + "px";
        s.height = _height + "px";
        s.left = x + "px";
        s.top = y + "px";

        let n: number = 0;
        while (n < 5) {
            childNodeHtml = "";
            childNodeHtml += "<div ";
            childNodeHtml += ">";
            childNodeHtml += cards[a].value;
            childNodeHtml += "</div>";

            node.innerHTML += childNodeHtml;
        }
    },

        function Ablagestapel(): void {
            let div: HTMLDivElement = document.createElement("div");
            document.addEventListener('DOMContentLoaded', function() {

                document.body.appendChild(div);


                let s: CSSStyleDeclaration = div.style;
                s.border = "thin solid black";
                s.position = "absolute";
                s.backgroundColor = "black";
                s.width = "50 px";
                s.height = " 50 px";
                s.right = "50 px";
                s.top = "30 px";
            });
        },


        function Kartenstapel(): void {
            let div: HTMLDivElement = document.createElement("div");
            document.addEventListener('DOMContentLoaded', function() {

                document.body.appendChild(div);


                let s: CSSStyleDeclaration = div.style;
                s.border = "thin solid black";
                s.position = "absolute";
                s.backgroundColor = "black";
                s.width = "50 px";
                s.height = " 50 px";
                s.left = "50 px";
                s.top = "30 px";
            });
        }










)}
)
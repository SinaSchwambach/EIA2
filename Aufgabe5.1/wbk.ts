namespace HolyChristmasTree2 {
    window.addEventListener("DOMContentLoaded", init);
    let address: string = "http://localhost:8100";

    function init(): void {
        createInput();
        setupAsyncForm();

    }

    function createInput(): void {

        for (let key in offers) {
            let product: Product[] = offers[key];

            let fieldset: HTMLElement = document.getElementById(key);
            fieldset.addEventListener("change", createCart);

            for (let a: number = 0; a < product.length; a++) {

                let input: HTMLInputElement = document.createElement("input");
                document.getElementById(key).appendChild(input);
                input.name = key;

                input.value = offers[key][a].name;
                input.id = offers[key][a].name;
                input.setAttribute("group", key);
                input.setAttribute("index", "" + a);
                input.setAttribute("price", "" + offers[key][a].price);

                let label: HTMLLabelElement = document.createElement("label");
                document.getElementById(key).appendChild(label);
                label.setAttribute("for", offers[key][a].name);
                label.innerHTML = offers[key][a].name + " " + offers[key][a].price + "Euro";

                if (key == "trees" || key == "treeholder" || key == "top" || key == "lightstrings") {
                    input.type = "radio";
                } else {

                    input.type = "number";
                    input.name = offers[key][a].name;
                    input.step = "1.0";
                    input.min = "0";
                    input.max = "100";
                    input.value = "0";

                }

                document.getElementById(key).appendChild(document.createElement("br"));
            }
        }
    }


    function createCart(): void {

        let p: HTMLElement = document.getElementById("cart");
        let total: number = 0;
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        p.innerHTML = " ";
        p.innerHTML = "<h2>Warenkorb</h2>";
        for (let i: number = 0; i < inputs.length; i++) {

            let input: HTMLInputElement = inputs[i];
            if (input.type == "number") {
                if (parseInt(input.value) > 0) {
                    let value: number = parseFloat(input.value);
                    let name: string = input.getAttribute("name");
                    let price: number = parseFloat(input.getAttribute("price"));

                    p.innerHTML += "<p>" + value + "x " + name + " " + " " + (price * value).toFixed(2) + "Euro" + " " + "</p>";
                    total += parseFloat((price * value).toFixed(2));
                }
            }
            if (input.checked == true) {
                let value: string = input.getAttribute("value");
                let price: number = parseFloat(input.getAttribute("price"));
                total += parseFloat((price).toFixed(2));

                p.innerHTML += "<p>" + value + " " + " " + price + "Euro" + "</p>";

            }

        }
        p.innerHTML += "Geamtpreis " + total.toFixed(2) + "Euro";
    }



     function setupAsyncForm(): void {
        let button: Element = document.querySelector("[type=button]");
        button.addEventListener("click", handleClickOnAsync);
    }

    function handleClickOnAsync(_event: Event): void {
        let cartos: HTMLElement = document.getElementById("cart");
        let name: string = (<HTMLInputElement>document.querySelector("#cart")).innerText;
        sendRequestWithCustomData(name);
        
        alert(name);
    }

    function sendRequestWithCustomData(_name: string): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?name=" + _name, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();
    }

    function handleStateChange(_event: ProgressEvent): void {
        var xhr: XMLHttpRequest = <XMLHttpRequest>_event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
            console.log("response: " + xhr.response);
        }
}
}

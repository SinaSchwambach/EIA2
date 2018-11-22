namespace Wbk {
    document.addEventListener("DOMConetentLoaded", init);








    function init(): void {
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        for (let i: number = 0; i < 1; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            createFormat(i, fieldset);
            //fieldset.addEventListener("change", handleChange);
        }
    }
    function createFormat(_i: number, _fieldset: HTMLFieldSetElement): void {
        for (let o: number = 0; o < data["b"].length; o++) {
            for (let a: number = 0; a < data["o"].length; a++) {
                let input: HTMLInputElement = document.createElement("input");
                _fieldset[_i].appendChild(input);
                input.type = "checkbox";
                input.name = "type";
                input.value = data["o"][a].name;
                let price: string = data["o"][a].price.toString();
                input.setAttribute("price", price);
                let label: HTMLLabelElement = document.createElement("label");
                document.getElementById("Baumart").appendChild(label);
                chooseTreeNumber(a);
                label.setAttribute("chosenTreeType", data["tree"][a].name);
                label.innerHTML = data["tree"][a].name + " " + data["tree"][a].price + "€ ";
            }
        }
    }

    function chooseTreeNumber(_a: number): void {
        let input: HTMLInputElement = document.createElement("input");
        document.getElementById("Baumart").appendChild(input);
        input.type = "number";
        input.min = "0";
        input.max = "5";
        input.step = "1";
        input.value = data["tree"][_a].name;
        let price: string = data["tree"][_a].price.toString();
        input.setAttribute("price", price);
        let label: HTMLLabelElement = document.createElement("label");
        document.getElementById("Baumart").appendChild(label);
    }













































}
namespace Wbk {
    document.addEventListener("DOMContentLoaded", init);


    function init(): void {
        createFormat(data);
        
    }





    /* function init(): void {
         let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
         for (let i: number = 0; i < 1; i++) {
             let fieldset: HTMLFieldSetElement = fieldsets[i];
             createFormat(fieldset, data);
             // fieldset.addEventListener("change", handleChange);
         }
     }*/
    function createFormat(_homoVar: HomoVar): void {
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            for (let key in _homoVar) {
                let value: HeteroPredef[] = _homoVar[key];
                for (let a: number = 0; a < value.length; a++) {
                    let input: HTMLInputElement = document.createElement("input");
                    fieldset.appendChild(input);
                    input.type = "checkbox";
                    input.name = "type";
                    input.value = value[a].name;
                    input.id = value[a].name;
                    let label: HTMLLabelElement = document.createElement("label");
                    fieldset.appendChild(label);
                    chooseNumber(a, fieldset, value);
                    label.setAttribute("chosenType", value[a].name);
                    let price: string = value[a].price.toString;
                    label.setAttribute("price", price);
                    label.innerHTML = value[a].name + " " + value[a].price + " Euro " + "<br>";
                }
            }
        }
    }
    function chooseNumber(_a: number, _fieldset: HTMLFieldSetElement, _value: HeteroPredef[]): void {
        let input: HTMLInputElement = document.createElement("input");
        _fieldset.appendChild(input);
        input.type = "number";
        input.min = "0";
        input.max = "50";
        input.step = "1";
        input.value = _value[_a].name;
        input.id = _value[_a].name;
        let label: HTMLLabelElement = document.createElement("label");
        _fieldset.appendChild(label);
        label.innerHTML = "<br>";
    }

    function handleChange (_event: Event): void {
       /* let target: HTMLInputElement = <HTMLInputElement>_event.target;
        if (this.id == value[a].name)
            console.log("Changed " + target.name + " to " + target.checked);*/
        var inputs: NodeListOf<Element> = document.getElementsByClassName("articleInput");
        var sum: number = 0;
        var orderSummaryList: string[] = [];
        for (var i: number = 0; i < inputs.length; i++) {
            var input: HTMLInputElement = <HTMLInputElement>inputs[i];
            if (this.id == value[a].name) {
                var selectElement: HTMLSelectElement = <HTMLSelectElement>inputs[i];
                var name: string = selectElement.options[selectElement.selectedIndex].innerHTML;
                sum += Number(selectElement.value);
                orderSummaryList.push(name);
            } else {
                var amount: number = Number(input.value);
                var price: number = Number(input.getAttribute("price"));
                name = input.getAttribute("name");
                var tempPrice: number = amount * price;
                sum += tempPrice;

                tempPrice = Math.round(tempPrice * 100) / 100;

                if (amount > 0) {
                    orderSummaryList.push(name + " " + tempPrice + " EUR");
                }
            }
        }



        var liveSum: HTMLElement = document.getElementById("summary");
        liveSum.innerText = sum + " EUR";

        var ul: HTMLElement = document.getElementById("orderSummaryList");
        ul.innerHTML = "";
        for (i = 0; i < orderSummaryList.length; i++) {
            var li: HTMLElement = document.createElement("li");
            li.innerText = orderSummaryList[i];
            ul.appendChild(li);
        }
    }
}
             
               
         
        

    
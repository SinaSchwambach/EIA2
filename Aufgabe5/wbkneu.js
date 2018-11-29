var Wbk;
(function (Wbk) {
    document.addEventListener("DOMContentLoaded", init);
    function init() {
        createFormat(Wbk.data);
    }
    /* function init(): void {
         let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
         for (let i: number = 0; i < 1; i++) {
             let fieldset: HTMLFieldSetElement = fieldsets[i];
             createFormat(fieldset, data);
             // fieldset.addEventListener("change", handleChange);
         }
     }*/
    function createFormat(_homoVar) {
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            for (let key in _homoVar) {
                let value = _homoVar[key];
                for (let a = 0; a < value.length; a++) {
                    let input = document.createElement("input");
                    fieldset.appendChild(input);
                    input.type = "checkbox";
                    input.name = "type";
                    input.value = value[a].name;
                    input.id = value[a].name;
                    let label = document.createElement("label");
                    fieldset.appendChild(label);
                    chooseNumber(a, fieldset, value);
                    label.setAttribute("chosenType", value[a].name);
                    label.innerHTML = value[a].name + " " + value[a].price + " Euro " + "<br>";
                }
            }
        }
    }
    function chooseNumber(_a, _fieldset, _value) {
        let input = document.createElement("input");
        _fieldset.appendChild(input);
        input.type = "number";
        input.min = "0";
        input.max = "50";
        input.step = "1";
        input.value = _value[_a].name;
        input.id = _value[_a].name;
        let label = document.createElement("label");
        _fieldset.appendChild(label);
        label.innerHTML = "<br>";
    }
    function handleChange(_event) {
        /* let target: HTMLInputElement = <HTMLInputElement>_event.target;
         if (this.id == value[a].name)
             console.log("Changed " + target.name + " to " + target.checked);*/
        var inputs = document.getElementsByClassName("articleInput");
        var sum = 0;
        var orderSummaryList = [];
        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i];
            if (input.tagName == "SELECT") {
                var selectElement = inputs[i];
                var name = selectElement.options[selectElement.selectedIndex].innerHTML;
                sum += Number(selectElement.value);
                orderSummaryList.push(name);
            }
            else {
                var amount = Number(input.value);
                var price = Number(input.getAttribute("data-price"));
                name = input.getAttribute("data-name");
                var tempPrice = amount * price;
                sum += tempPrice;
                tempPrice = Math.round(tempPrice * 100) / 100;
                if (amount > 0) {
                    orderSummaryList.push(name + " " + tempPrice + " EUR");
                }
            }
        }
        var liveSum = document.getElementById("summary");
        liveSum.innerText = sum + " EUR";
        var ul = document.getElementById("orderSummaryList");
        ul.innerHTML = "";
        for (i = 0; i < orderSummaryList.length; i++) {
            var li = document.createElement("li");
            li.innerText = orderSummaryList[i];
            ul.appendChild(li);
        }
    }
})(Wbk || (Wbk = {}));
//# sourceMappingURL=wbkneu.js.map
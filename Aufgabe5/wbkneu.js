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
        for (let key in _homoVar) {
            let value = _homoVar[key];
            let fieldsets = document.getElementsByTagName("fieldset");
            for (let i = 0; i < value.length; i++) {
                let fieldset = fieldsets[i];
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
                    label.innerHTML = value[a].name + " " + value[a].price + "Euro ";
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
    }
})(Wbk || (Wbk = {}));
//# sourceMappingURL=wbkneu.js.map
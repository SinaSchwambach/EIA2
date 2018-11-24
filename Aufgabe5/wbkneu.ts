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
    function createFormat( _homoVar: HomoVar): void {
        for (let key in _homoVar) {
            let value: HeteroPredef[] = _homoVar[key];
            let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
            for (let i: number = 0; i < value.length; i++) {
                let fieldset: HTMLFieldSetElement = fieldsets[i];
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
                    label.innerHTML = value[a].name + " " + value[a].price + "Euro ";
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
        }

       /*  function handleChange(_event: Event): void {
             let target: HTMLInputElement = <HTMLInputElement>_event.target;
             if (this.id == value[a].name)
             console.log("Changed " + target.name + " to " + target.checked);}*/
             
               
         
        

    }
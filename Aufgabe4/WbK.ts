namespace Weihnachtsbaumkonfigurator {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("DOMContentLoaded", init2);
    document.addEventListener("DOMContentLoaded", init3);
    document.addEventListener("DOMContentLoaded", init4);
    function init(): void {
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        for (let i: number = 0; i < 1; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            //document.getElementById("summary").addEventListener("click", summary);

            //BAUMART
            let node: HTMLElement = document.getElementById("Baumart");
            let childNodeHtml: string;
            let art: Product[] = tree;

            childNodeHtml = "";
            childNodeHtml += "<select name=Select id=select>";
            childNodeHtml += "<optgroup label=Baumarten></optgroup> ";
            childNodeHtml += "<datalist id=options>";

            for (let i: number = 0; i < art.length; i++) {
                childNodeHtml += "<option value=";
                childNodeHtml += "lam" + i;
                childNodeHtml += ">";
                childNodeHtml += art[i].name;
                childNodeHtml += "</option>";
            }
            childNodeHtml += "</select>";

            childNodeHtml += "</hr>";

            node.innerHTML += childNodeHtml;
        }
        //LAMETTA    
        let node: HTMLElement = document.getElementById("Lametta");
        let childNodeHtml: string;
        let art: Product[] = tinsel;

        childNodeHtml = "";
        childNodeHtml += "<select name=Select id=select>";
        childNodeHtml += "<optgroup label=Lametta></optgroup> ";
        childNodeHtml += "<datalist id=options>";

        for (let i: number = 0; i < art.length; i++) {
            childNodeHtml += "<option value=";
            childNodeHtml += "lam" + i;
            childNodeHtml += ">";
            childNodeHtml += art[i].name;
            childNodeHtml += "</option>";
        }
        childNodeHtml += "</select>";
        childNodeHtml += "<select>";
        childNodeHtml += "<h3>Anzahl:</h3>";
        childNodeHtml += "<option value=clear selected></option>";
        for (let i: number = 0; i < 20; i += 5) {
            childNodeHtml += "<option value=lamettanum";
            childNodeHtml += i;
            childNodeHtml += " id=lamettanum";
            childNodeHtml += i;
            childNodeHtml += ">";
            childNodeHtml += i;
            childNodeHtml += "</option>";
        }
        childNodeHtml += "</select>";
        childNodeHtml += "</hr>";

        node.innerHTML += childNodeHtml;
    }
    //KERZEN
    function init2(): void {
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        for (let i: number = 0; i < 1; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];

            let node: HTMLElement = document.getElementById("Kerzen");
            let childNodeHtml: string;
            let art: Product[] = candle;

            childNodeHtml = "";
            childNodeHtml += "<select name=Select id=select>";
            childNodeHtml += "<optgroup label=Kerzen></optgroup> ";
            childNodeHtml += "<datalist id=options>";

            for (let i: number = 0; i < art.length; i++) {
                childNodeHtml += "<option value=";
                childNodeHtml += "lam" + i;
                childNodeHtml += ">";
                childNodeHtml += art[i].name;
                childNodeHtml += "</option>";
            }
            childNodeHtml += "</select>";
            childNodeHtml += "<select>";
            childNodeHtml += "<h3>Anzahl:</h3>";
            childNodeHtml += "<option value=clear selected></option>";
            for (let i: number = 0; i < 20; i += 1) {
                childNodeHtml += "<option value=candlenum";
                childNodeHtml += i;
                childNodeHtml += " id=candlenum";
                childNodeHtml += i;
                childNodeHtml += ">";
                childNodeHtml += i;
                childNodeHtml += "</option>";
            }
            childNodeHtml += "</select>";
            childNodeHtml += "</hr>";

            node.innerHTML += childNodeHtml;
        }
    }

    //KUGELN
    function init3(): void {
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        for (let i: number = 0; i < 1; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];

            let node: HTMLElement = document.getElementById("Kugeln");
            let childNodeHtml: string;
            let art: Product[] = ball;

            childNodeHtml = "";
            childNodeHtml += "<select name=Select id=select>";
            childNodeHtml += "<optgroup label=Kugeln></optgroup> ";
            childNodeHtml += "<datalist id=options>";

            for (let i: number = 0; i < art.length; i++) {
                childNodeHtml += "<option value=";
                childNodeHtml += "lam" + i;
                childNodeHtml += ">";
                childNodeHtml += art[i].name;
                childNodeHtml += "</option>";
            }
            childNodeHtml += "</select>";
            childNodeHtml += "<select>";
            childNodeHtml += "<h3>Anzahl:</h3>";
            childNodeHtml += "<option value=clear selected></option>";
            for (let i: number = 0; i < 20; i += 1) {
                childNodeHtml += "<option value=ballnum";
                childNodeHtml += i;
                childNodeHtml += " id=ballnum";
                childNodeHtml += i;
                childNodeHtml += ">";
                childNodeHtml += i;
                childNodeHtml += "</option>";
            }
            childNodeHtml += "</select>";
            childNodeHtml += "</hr>";

            node.innerHTML += childNodeHtml;
        }
    }
    //Versand
    function init4(): void {
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        for (let i: number = 0; i < 1; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];

            let node: HTMLElement = document.getElementById("Versand");
            let childNodeHtml: string;
            let art: Product[] = shipment;

            childNodeHtml = "";
            childNodeHtml += "<select name=Select id=select>";
            childNodeHtml += "<optgroup label=Versand></optgroup> ";
            childNodeHtml += "<datalist id=options>";

            for (let i: number = 0; i < art.length; i++) {
                childNodeHtml += "<option value=";
                childNodeHtml += "lam" + i;
                childNodeHtml += ">";
                childNodeHtml += art[i].name;
                childNodeHtml += "</option>";
            }
            childNodeHtml += "</select>";

            childNodeHtml += "</hr>";

            node.innerHTML += childNodeHtml;
        }
    }

    function handleChange(_event: Event): void {
        console.log(_event);

        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log("Changed " + target.name + " to " + target.value);


        if (this.id == "Lametta")
            console.log("Changed " + target.name + " to " + target.checked);

        let checkbox: HTMLElement = document.getElementById("summary");



    }

}

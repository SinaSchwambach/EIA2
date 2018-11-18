namespace Weihnachtsbaumkonfigurator {

    document.addEventListener("DOMContentLoaded", init);

    function init(): void {
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            document.getElementById("summary").addEventListener("click", summary);

            let node: HTMLElement = document.getElementById("Baumart");
            let childNodeHtml: string;
            let art: Product[] = tree;

            childNodeHtml = "";
            childNodeHtml += "<select name=Select id=select>";
            childNodeHtml += "<optgroup label=Baumarten></optgroup> ";
            childNodeHtml += "<datalist id=options>";

            for (let i: number = 0; i < art.length; i++) {
                childNodeHtml += "<option value=option1>art[i].name</option>";
            }

            childNodeHtml += "</select>";
            childNodeHtml += "</hr>";

            node.innerHTML += childNodeHtml;

            let node1: HTMLElement = document.getElementById("Lametta");
            let childNodeHtml1: string;
            let art1: Product[] = tinsel;

            childNodeHtml1 = "";

            for (let i: number = 0; i < art1.length; i++) {
                childNodeHtml1 += "<input type=checkbox name=art1[i].color value=art1[i].color id=art1[i].color/>";
                childNodeHtml1 += "<label for=check1>art1[i].color</label>";
            }

            node1.innerHTML += childNodeHtml1;

            let node2: HTMLElement = document.getElementById("Kugeln");
            let childNodeHtml2: string;
            let art2: Product[] = ball;

            childNodeHtml2 = "";

            for (let i: number = 0; i < art2.length; i++) {
                childNodeHtml2 += "<input type=checkbox name=art2[i].color value=art2[i].color id=art2[i].color/>";
                childNodeHtml2 += "<label for=check1>art2[i].color art2[i].size</label>";
            }

            node2.innerHTML += childNodeHtml2;

            let node3: HTMLElement = document.getElementById("Kerzen");
            let childNodeHtml3: string;
            let art3: Product[] = candle;

            childNodeHtml3 = "";

            for (let i: number = 0; i < art3.length; i++) {
                childNodeHtml3 += "<input type=checkbox name=art3[i].color value=art3[i].color id=art3[i].color/>";
                childNodeHtml3 += "<label for=check1>art3[i].color</label>";
            }

            node3.innerHTML += childNodeHtml3;

            let node4: HTMLElement = document.getElementById("Versand");
            let childNodeHtml4: string;
            let art4: Product[] = tree;

            childNodeHtml4 = "";
            childNodeHtml4 += "<select name=Select id=select>";
            childNodeHtml4 += "<optgroup label=Versandoptionen></optgroup> ";
            childNodeHtml4 += "<datalist id=options>";

            for (let i: number = 0; i < art4.length; i++) {
                childNodeHtml += "<option value=option1>art4[i].name</option>";
            }

            childNodeHtml4 += "</select>";
            childNodeHtml4 += "</hr>";

            node4.innerHTML += childNodeHtml4;


        }



        function handleChange(_event: Event): void {
            console.log(_event);

            let target: HTMLInputElement = <HTMLInputElement>_event.target;
            console.log("Changed " + target.name + " to " + target.value);


            if (this.id == "Lametta")
                console.log("Changed " + target.name + " to " + target.checked);

        }





















































































    }
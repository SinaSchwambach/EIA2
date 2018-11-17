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
        }
        let node: HTMLElement = document.getElementById("Lametta");
        let childNodeHtml: string;
        let art: Product[] = tinsel;

        childNodeHtml = "";

        for (let i: number = 0; i < art.length; i++) {
            childNodeHtml += "<input type=checkbox name=art[i].color value=art[i].color id=art[i].color/>";
            childNodeHtml += "<label for=check1>art[i].color</label>";
        }

        node.innerHTML += childNodeHtml;
    }



    function handleChange(_event: Event): void {

    }





















































































}
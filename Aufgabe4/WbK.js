var Weihnachtsbaumkonfigurator;
(function (Weihnachtsbaumkonfigurator) {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("DOMContentLoaded", init2);
    document.addEventListener("DOMContentLoaded", init3);
    document.addEventListener("DOMContentLoaded", init4);
    function init() {
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < 1; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            //document.getElementById("summary").addEventListener("click", summary);
            //BAUMART
            let node = document.getElementById("Baumart");
            let childNodeHtml;
            let art = Weihnachtsbaumkonfigurator.tree;
            childNodeHtml = "";
            childNodeHtml += "<select name=Select id=select>";
            childNodeHtml += "<optgroup label=Baumarten></optgroup> ";
            childNodeHtml += "<datalist id=options>";
            for (let i = 0; i < art.length; i++) {
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
        let node = document.getElementById("Lametta");
        let childNodeHtml;
        let art = Weihnachtsbaumkonfigurator.tinsel;
        childNodeHtml = "";
        childNodeHtml += "<select name=Select id=select>";
        childNodeHtml += "<optgroup label=Lametta></optgroup> ";
        childNodeHtml += "<datalist id=options>";
        for (let i = 0; i < art.length; i++) {
            childNodeHtml += "<option value=";
            childNodeHtml += "lam" + i;
            childNodeHtml += ">";
            childNodeHtml += art[i].color;
            childNodeHtml += "</option>";
        }
        childNodeHtml += "</select>";
        childNodeHtml += "<select>";
        childNodeHtml += "<h3>Anzahl:</h3>";
        childNodeHtml += "<option value=clear selected></option>";
        for (let i = 0; i < 20; i += 5) {
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
    function init2() {
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < 1; i++) {
            let fieldset = fieldsets[i];
            let node = document.getElementById("Kerzen");
            let childNodeHtml;
            let art = Weihnachtsbaumkonfigurator.candle;
            childNodeHtml = "";
            childNodeHtml += "<select name=Select id=select>";
            childNodeHtml += "<optgroup label=Kerzen></optgroup> ";
            childNodeHtml += "<datalist id=options>";
            for (let i = 0; i < art.length; i++) {
                childNodeHtml += "<option value=";
                childNodeHtml += "lam" + i;
                childNodeHtml += ">";
                childNodeHtml += art[i].color;
                childNodeHtml += " ";
                childNodeHtml += art[i].size;
                childNodeHtml += "</option>";
            }
            childNodeHtml += "</select>";
            childNodeHtml += "<select>";
            childNodeHtml += "<h3>Anzahl:</h3>";
            childNodeHtml += "<option value=clear selected></option>";
            for (let i = 0; i < 20; i += 1) {
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
    function init3() {
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < 1; i++) {
            let fieldset = fieldsets[i];
            let node = document.getElementById("Kugeln");
            let childNodeHtml;
            let art = Weihnachtsbaumkonfigurator.ball;
            childNodeHtml = "";
            childNodeHtml += "<select name=Select id=select>";
            childNodeHtml += "<optgroup label=Kugeln></optgroup> ";
            childNodeHtml += "<datalist id=options>";
            for (let i = 0; i < art.length; i++) {
                childNodeHtml += "<option value=";
                childNodeHtml += "lam" + i;
                childNodeHtml += ">";
                childNodeHtml += art[i].color;
                childNodeHtml += "</option>";
            }
            childNodeHtml += "</select>";
            childNodeHtml += "<select>";
            childNodeHtml += "<h3>Anzahl:</h3>";
            childNodeHtml += "<option value=clear selected></option>";
            for (let i = 0; i < 20; i += 1) {
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
    function init4() {
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < 1; i++) {
            let fieldset = fieldsets[i];
            let node = document.getElementById("Versand");
            let childNodeHtml;
            let art = Weihnachtsbaumkonfigurator.shipment;
            childNodeHtml = "";
            childNodeHtml += "<select name=Select id=select>";
            childNodeHtml += "<optgroup label=Versand></optgroup> ";
            childNodeHtml += "<datalist id=options>";
            for (let i = 0; i < art.length; i++) {
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
    function handleChange(_event) {
        console.log(_event);
        let target = _event.target;
        console.log("Changed " + target.name + " to " + target.value);
        if (this.id == "Lametta")
            console.log("Changed " + target.name + " to " + target.checked);
        let checkbox = document.getElementById("summary");
    }
})(Weihnachtsbaumkonfigurator || (Weihnachtsbaumkonfigurator = {}));
//# sourceMappingURL=WbK.js.map
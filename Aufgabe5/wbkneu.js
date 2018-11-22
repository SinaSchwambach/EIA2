var Wbk;
(function (Wbk) {
    document.addEventListener("DOMConetentLoaded", init);
    function init() {
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < 1; i++) {
            let fieldset = fieldsets[i];
            createFormat(i);
        }
    }
    function createFormat(_i) {
        for (let o = 0; o < Wbk.data["b"].length; o++)
            ;
        for (let a = 0; a < Wbk.data["tree"].length; a++) {
            let input = document.createElement("input");
            document.getElementById("Baumart").appendChild(input);
            input.type = "radio";
            input.name = "treetype";
            input.value = Wbk.data["tree"][a].name;
            let price = Wbk.data["tree"][a].price.toString();
            input.setAttribute("price", price);
            let label = document.createElement("label");
            document.getElementById("Baumart").appendChild(label);
            chooseTreeNumber(a);
            label.setAttribute("chosenTreeType", Wbk.data["tree"][a].name);
            label.innerHTML = Wbk.data["tree"][a].name + " " + Wbk.data["tree"][a].price + "� ";
        }
    }
    function chooseTreeNumber(_a) {
        let input = document.createElement("input");
        document.getElementById("Baumart").appendChild(input);
        input.type = "number";
        input.min = "0";
        input.max = "5";
        input.step = "1";
        input.value = Wbk.data["tree"][_a].name;
        let price = Wbk.data["tree"][_a].price.toString();
        input.setAttribute("price", price);
        let label = document.createElement("label");
        document.getElementById("Baumart").appendChild(label);
    }
})(Wbk || (Wbk = {}));
//# sourceMappingURL=wbkneu.js.map
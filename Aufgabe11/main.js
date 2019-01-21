var Inheritance;
(function (Inheritance) {
    window.addEventListener("load", init);
    let fps = 25;
    let objects = [];
    let imgData;
    function init(_event) {
        console.log("Canvas started");
        let canvas = document.getElementsByTagName("canvas")[0];
        Inheritance.crc2 = canvas.getContext("2d");
        console.log(Inheritance.crc2);
        Inheritance.drawBackground();
        generateSnow();
        generateChild();
        imgData = Inheritance.crc2.getImageData(0, 0, 270, 410);
        update();
        function update() {
            Inheritance.crc2.putImageData(imgData, 0, 0);
            window.setTimeout(update, 1000 / fps);
            for (let i = 0; i < objects.length; i++) {
                let object = objects[i];
                object.draw();
                object.move();
            }
        } //update
        function generateChild() {
            for (let i = 0; i < 10; i++) {
                let child = new Inheritance.Child();
                objects.push(child);
            }
        } //generateChild
        function generateSnow() {
            for (let i = 0; i < 150; i++) {
                let snowflake = new Inheritance.Snow();
                objects.push(snowflake);
            }
        } //generateSnow
    }
})(Inheritance || (Inheritance = {}));
//# sourceMappingURL=main.js.map
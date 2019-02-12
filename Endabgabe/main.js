var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", init);
    let objects = [];
    let snowballs = [];
    let children = [];
    let imagedata;
    let cloudOne;
    let cloudTwo;
    let fps = 25;
    let highscore = 0;
    function init() {
        document.getElementById("highscore").style.display = "initial";
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", shoot);
        Endabgabe.crc = canvas.getContext("2d");
        Endabgabe.drawBackground();
        generateSnow();
        generateClouds();
        generateChild();
        generateSnowball();
        imagedata = Endabgabe.crc.getImageData(0, 0, canvas.width, canvas.height);
        update();
        function update() {
            Endabgabe.crc.putImageData(imagedata, 0, 0);
            window.setTimeout(update, 1000 / fps);
            //Wolken
            cloudOne.move();
            cloudOne.draw();
            cloudTwo.move();
            cloudTwo.draw();
            for (let i = 0; i < objects.length; i++) {
                let object = objects[i];
                object.draw();
                object.move();
            }
            for (let i = 0; i < children.length; i++) {
                children[i].draw();
                children[i].move();
                if (children[i].xP < -10 || children[i].yP > (Endabgabe.crc.canvas.height + 10)) {
                    children.splice(i, 1);
                    console.log("length:" + children.length);
                }
            }
            /*         for (let i: number = 0; i < snowballs.length; i++) {
                         snowballs[i].draw();
                         snowballs[i].move();
                         console.log("Snowballarraylenght:" + snowballs.length);
                     }*/
        } //update
        function shoot(_event) {
            let x = _event.clientX;
            let y = _event.clientY;
            let ball = new Endabgabe.Snowball();
            ball.setTargetX = x;
            ball.setTargetY = y;
            //           ball.timer = 25;
            //        ball.draw();
            //ball.move();
            snowballs.push(ball);
            console.log("throw");
            console.log(x, y);
        }
        function generateSnow() {
            for (let i = 0; i < 150; i++) {
                let snowflake = new Endabgabe.Snow();
                objects.push(snowflake);
            }
        } //generateSnow
        function generateClouds() {
            cloudOne = new Endabgabe.CloudOne();
            cloudTwo = new Endabgabe.CloudTwo();
        } //generateClouds
        function generateChild() {
            window.setTimeout(generateChild, 3000);
            let child = new Endabgabe.Child();
            children.push(child);
        } //generateChild
        function generateSnowball() {
            let snowball = new Endabgabe.Snowball();
            snowballs.push(snowball);
        } //generateSnowball
    } //init
})(Endabgabe || (Endabgabe = {})); //namespace
//# sourceMappingURL=main.js.map
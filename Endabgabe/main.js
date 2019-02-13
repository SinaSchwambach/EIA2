var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", startGame);
    function startGame() {
        document.getElementById("start").style.display = "initial";
        let button = document.getElementsByTagName("Button")[0];
        button.addEventListener("click", init);
    }
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
        //       generateSnowball();
        imagedata = Endabgabe.crc.getImageData(0, 0, canvas.width, canvas.height);
        update();
        function shoot(_event) {
            if (snowballs.length < 20) {
                let ball = new Endabgabe.Snowball();
                ball.xP = _event.clientX;
                ball.yP = _event.clientY;
                ball.radius = 50;
                ball.state = "throw";
                snowballs.push(ball);
                console.log("throw");
                console.log(ball.xP, ball.yP);
            }
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
            child.state = "ride";
            children.push(child);
        } //generateChild
        /*      function generateSnowball(): void {
      
                  let snowball: Snowball = new Snowball();
                  snowballs.push(snowball);
      
              }//generateSnowball*/
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
                children[i].move();
                children[i].draw();
                if (children[i].xP < -10 || children[i].yP > (Endabgabe.crc.canvas.height + 10)) {
                    children.splice(i, 1);
                    console.log("length:" + children.length);
                }
            }
            for (let i = 0; i < snowballs.length; i++) {
                if (snowballs[i].radius > 15) {
                    snowballs[i].move();
                    snowballs[i].draw();
                }
                else {
                    if (snowballs[i].radius == 15) {
                        console.log("snowball");
                        snowballs[i].move();
                        snowballs[i].draw();
                        for (let a = 0; a < children.length; a++) {
                            console.log("hallo");
                            if (snowballs[i].hit(children[a].xP, children[a].yP) == true && children[a].state == "ride") {
                                children[a].state = "hit";
                                console.log("hi");
                                highscore += Math.floor(children[a].yD * children[a].xD);
                                console.log(highscore);
                                document.getElementById("highscore").innerHTML = "Curent Score: " + highscore.toString();
                            }
                        }
                    }
                }
            }
            /*     for (let i: number = 0; i < snowballs.length; i++) {
                      snowballs[i].draw();
                      snowballs[i].move();
                      console.log("Snowballarraylenght:" + snowballs.length);
                  }*/
        } //update
    } //init
})(Endabgabe || (Endabgabe = {})); //namespace
//# sourceMappingURL=main.js.map
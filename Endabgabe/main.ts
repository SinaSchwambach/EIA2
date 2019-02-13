namespace Endabgabe {

    window.addEventListener("load", startGame);

    function startGame(): void {
        document.getElementById("start").style.display = "initial";
        let button: HTMLButtonElement = <HTMLButtonElement>document.getElementsByTagName("Button")[0];
        button.addEventListener("click", init);

    }

    export let crc: CanvasRenderingContext2D;

    let objects: DrawObject[] = [];
    let snowballs: Snowball[] = [];
    let children: Child[] = [];

    let imagedata: ImageData;
    let cloudOne: CloudOne;
    let cloudTwo: CloudTwo;

    let fps: number = 25;
    let highscore: number = 0;


    function init(): void {


        document.getElementById("highscore").style.display = "initial";
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", shoot);
        crc = canvas.getContext("2d");

        drawBackground();
        generateSnow();
        generateClouds();
        generateChild();
        //       generateSnowball();

        imagedata = crc.getImageData(0, 0, canvas.width, canvas.height);

        update();




        function shoot(_event: MouseEvent): void {
            if (snowballs.length < 20) {
                let ball: Snowball = new Snowball();

                ball.xP = _event.clientX;
                ball.yP = _event.clientY;

                ball.radius = 50;
                ball.state = "throw";
                snowballs.push(ball);

                console.log("throw");
                console.log(ball.xP, ball.yP);
            }
        }


        function generateSnow(): void {
            for (let i: number = 0; i < 150; i++) {

                let snowflake: Snow = new Snow();
                objects.push(snowflake);
            }
        }//generateSnow

        function generateClouds(): void {
            cloudOne = new CloudOne();
            cloudTwo = new CloudTwo();
        }//generateClouds


        function generateChild(): void {
            window.setTimeout(generateChild, 3000);

            let child: Child = new Child();
            child.state = "ride";
            children.push(child);

        } //generateChild

        /*      function generateSnowball(): void {
      
                  let snowball: Snowball = new Snowball();
                  snowballs.push(snowball);
      
              }//generateSnowball*/
        function update(): void {
            crc.putImageData(imagedata, 0, 0);
            window.setTimeout(update, 1000 / fps);

            //Wolken
            cloudOne.move();
            cloudOne.draw();
            cloudTwo.move();
            cloudTwo.draw();

            for (let i: number = 0; i < objects.length; i++) {
                let object: DrawObject = objects[i];
                object.draw();
                object.move();
            }

            for (let i: number = 0; i < children.length; i++) {
                children[i].move();
                children[i].draw();

                if (children[i].xP < -10 || children[i].yP > (crc.canvas.height + 10)) {
                    children.splice(i, 1);
                    console.log("length:" + children.length);
                }
            }

            for (let i: number = 0; i < snowballs.length; i++) {
                if (snowballs[i].radius > 15) {
                    snowballs[i].move();
                    snowballs[i].draw();
                }
                else {
                    if (snowballs[i].radius == 15) {
                        console.log("snowball");
                        snowballs[i].move();
                        snowballs[i].draw();
                        for (let a: number = 0; a < children.length; a++) {
                            console.log("hallo");
                            if (snowballs[i].hit(children[a].xP, children[a].yP) == true && children[a].state == "ride") {
                                children[a].state = "hit";
                                console.log("hi");
                                highscore += Math.floor(children[a].yD * children[a].xD);
                                console.log(highscore);
                                document.getElementById("highscore").innerHTML = "Curent Score: " + highscore.toString();
                                //   document.getElementById("throw").innerHTML = "SnowBalls you have throwen: " + snowballs.length.toString();
                            }
                            /*else {
                                document.getElementById("throw").innerHTML = "SnowBalls you have throwen: " + snowballs.length.toString();
                            }*/
                        }
                    }
                }
            }

            /*     for (let i: number = 0; i < snowballs.length; i++) {
                      snowballs[i].draw();
                      snowballs[i].move();
                      console.log("Snowballarraylenght:" + snowballs.length);
                  }*/
        }//update
    }//init
}//namespace
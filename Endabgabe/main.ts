namespace Endabgabe {

    window.addEventListener("load", init);

    export let crc: CanvasRenderingContext2D;

    let objects: DrawObject[] = [];
    let snowballs: DrawObject[] = [];
    let children: DrawObject[] = [];

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
        generateSnowball();

        imagedata = crc.getImageData(0, 0, canvas.width, canvas.height);

        update();


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
                children[i].draw();
                children[i].move();
                if (children[i].xP < -10 || children[i].yP > (crc.canvas.height + 10)) {
                    children.splice(i, 1);
                    console.log("length:" + children.length);
                }
            }

            /*         for (let i: number = 0; i < snowballs.length; i++) {
                         snowballs[i].draw();
                         snowballs[i].move();
                         console.log("Snowballarraylenght:" + snowballs.length);
                     }*/
        }//update

        function shoot(_event: MouseEvent): void {

            let x: number = _event.clientX;
            let y: number = _event.clientY;

            let ball: Snowball = new Snowball();

            ball.setTargetX = x;
            ball.setTargetY = y;
            //           ball.timer = 25;
            //        ball.draw();
            //ball.move();

            snowballs.push(ball);
            console.log("throw");
            console.log(x, y);
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
            children.push(child);

        } //generateChild

        function generateSnowball(): void {

            let snowball: Snowball = new Snowball();
            snowballs.push(snowball);

        }//generateSnowball
    }//init
}//namespace
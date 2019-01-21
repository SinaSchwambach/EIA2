namespace Inheritance {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;

    let fps: number = 25;

    let objects: MovingObject[] = [];

    let imgData: ImageData;

    function init(_event: Event): void {
        console.log("Canvas started");

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        console.log(crc2);

        drawBackground();
        generateSnow();
        generateChild();

        imgData = crc2.getImageData(0, 0, 270, 410);

        update();


        function update(): void {
            crc2.putImageData(imgData, 0, 0);
            window.setTimeout(update, 1000 / fps);


            for (let i: number = 0; i < objects.length; i++) {
                let object: MovingObject = objects[i];
                object.draw();
                object.move();
            }
        }//update
        function generateChild(): void {
            for (let i: number = 0; i < 10; i++) {

                let child: Child = new Child();
                objects.push(child);
            }
        } //generateChild
        function generateSnow(): void {
            for (let i: number = 0; i < 150; i++) {

                let snowflake: Snow = new Snow();
                objects.push(snowflake);
            }
        }//generateSnow
    }
}
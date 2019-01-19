namespace Animation {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let fps: number = 25;
    let snowflakes: Snowflake[] = [];
    let childOne: Child1[] = [];
    let sleighOne: Sleigh1[] = [];
    let childTwo: Child2[] = [];
    let sleighTwo: Sleigh2[] = [];
    let imgData: ImageData;

    function init(_event: Event): void {
        console.log("Canvas started");

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        console.log(crc2);

        drawBackground();

        imgData = crc2.getImageData(0, 0, 270, 410);


        for (let i: number = 0; i < 100; i++) {
            let snowflake: Snowflake = new Snowflake();

            snowflake.y = Math.random() * crc2.canvas.height;
            snowflake.x = Math.random() * crc2.canvas.width;

            snowflake.dy = Math.random() * 2 + 4;
            snowflake.color = "#000000";

            snowflakes.push(snowflake);
        }

        //  for (let a: number = 0; a < 5; a++) {
        let child1: Child1 = new Child1();
        child1.x = 140;
        child1.y = 255;
        child1.dx = Math.random() * 4 - 2;
        child1.dy = Math.random() * 4 - 2;

        childOne.push(child1);

        let sleigh1: Sleigh1 = new Sleigh1();
        sleigh1.x = 20;
        sleigh1.y = 30;
        sleigh1.dx = child1.dx;
        sleigh1.dy = child1.dy;

        sleighOne.push(sleigh1);

        let child2: Child2 = new Child2();
        child2.x = 40;
        child2.y = 50;
        child2.dx = Math.random() * 4 - 2;
        child2.dy = Math.random() * 4 - 2;

        childTwo.push(child2);

        let sleigh2: Sleigh2 = new Sleigh2();
        sleigh2.x = 40;
        sleigh2.y = 50;
        sleigh2.dx = child2.dx;
        sleigh2.dy = child2.dy;

        sleighTwo.push(sleigh2);
        //}

        update();
    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < 100; i++) {
            let snowflake: Snowflake = snowflakes[i];
            snowflake.move();
            snowflake.draw(); // keine Parameter erforderlich, denn der Stern weiß über sich Bescheid
        }

        for (let a: number = 0; a < 1; a++) {

            let child1: Child1 = childOne[a];
            let child2: Child2 = childTwo[a];
            let sleigh1: Sleigh1 = sleighOne[a];
            let sleigh2: Sleigh2 = sleighTwo[a];
            child1.move();
            child1.draw();
            sleigh1.move();
            sleigh1.draw();
            child2.move();
            child2.draw();
            sleigh2.move();
            sleigh2.draw();
        }
          console.log("Update");
    }

}    
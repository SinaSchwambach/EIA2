var Animation;
(function (Animation) {
    window.addEventListener("load", init);
    let fps = 25;
    let snowflakes = [];
    let childOne = [];
    let sleighOne = [];
    let childTwo = [];
    let sleighTwo = [];
    let background;
    function init(_event) {
        console.log("Canvas started");
        let canvas = document.getElementsByTagName("canvas")[0];
        Animation.crc2 = canvas.getContext("2d");
        console.log(Animation.crc2);
        for (let i = 0; i < 20; i++) {
            let snowflake = new Animation.Snowflake();
            snowflake.x = 0;
            snowflake.y = Math.random() * Animation.crc2.canvas.height;
            snowflake.dx = Math.random() * 4 - 2;
            snowflake.dy = Math.random() * 4 - 2;
            snowflake.color = "#000000";
            snowflakes.push(snowflake);
        }
        for (let a = 0; a < 5; a++) {
            let child1 = new Animation.Child1();
            child1.x = -Animation.crc2.canvas.width;
            child1.y = -Animation.crc2.canvas.height;
            child1.dx = Math.random() * 4 - 2;
            child1.dy = Math.random() * 4 - 2;
            childOne.push(child1);
            let sleigh1 = new Animation.Sleigh1();
            sleigh1.x = 20;
            sleigh1.y = 30;
            sleigh1.dx = child1.dx;
            sleigh1.dy = child1.dy;
            sleighOne.push(sleigh1);
            let child2 = new Animation.Child2();
            child2.x = 40;
            child2.y = 50;
            child2.dx = Math.random() * 4 - 2;
            child2.dy = Math.random() * 4 - 2;
            childTwo.push(child2);
            let sleigh2 = new Animation.Sleigh2();
            sleigh2.x = 40;
            sleigh2.y = 50;
            sleigh2.dx = child2.dx;
            sleigh2.dy = child2.dy;
            sleighTwo.push(sleigh2);
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Animation.crc2.clearRect(0, 0, Animation.crc2.canvas.width, Animation.crc2.canvas.height);
        for (let i = 0; i < 20; i++) {
            let snowflake = snowflakes[i];
            snowflake.move();
            snowflake.draw(); // keine Parameter erforderlich, denn der Stern weiß über sich Bescheid
        }
        for (let a = 0; a < 5; a++) {
            let child1 = childOne[a];
            let child2 = childTwo[a];
            let sleigh1 = sleighOne[a];
            let sleigh2 = sleighTwo[a];
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
})(Animation || (Animation = {}));
//# sourceMappingURL=main.js.map
var L09_Canvas;
(function (L09_Canvas) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        console.log("Canvas started");
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        drawSky();
        drawHill();
        drawSun();
        drawChild1();
        drawChild2();
        drawSleigh1();
        drawSleigh2();
        drawCloud1();
        drawCloud2();
        drawCloud3();
        drawCloud4();
        for (let i = 0; i < 15; i++) {
            let x = Math.floor(Math.random() * crc2.canvas.width);
            let y = Math.floor(Math.random() * (310 - 410) + crc2.canvas.height);
            drawTree(x, y);
        }
        for (let i = 0; i < 100; i++) {
            let a = Math.floor(Math.random() * crc2.canvas.width);
            let b = Math.floor(Math.random() * crc2.canvas.height);
            drawSnowflake(a, b);
        }
    }
    function drawSky() {
        crc2.fillStyle = "#00bfff";
        crc2.fillRect(0, 0, crc2.canvas.width, 110);
        crc2.beginPath();
        crc2.moveTo(0, 110);
        crc2.lineTo(0, 260);
        crc2.lineTo(270, 110);
        crc2.lineTo(0, 110);
        crc2.closePath();
        crc2.fill();
    }
    function drawSnowflake(_a, _b) {
        crc2.beginPath();
        crc2.arc(_a, _b, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
    function drawCloud1() {
        crc2.beginPath();
        crc2.moveTo(100, 100);
        crc2.arc(95, 100, 12, 0, 2 * Math.PI);
        crc2.arc(110, 100, 12, 0, 2 * Math.PI);
        crc2.arc(87, 100, 12, 0, 2 * Math.PI);
        crc2.arc(100, 95, 12, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
    function drawCloud2() {
        crc2.beginPath();
        crc2.moveTo(235, 55);
        crc2.arc(235, 55, 10, 0, 2 * Math.PI);
        crc2.arc(228, 48, 10, 0, 2 * Math.PI);
        crc2.arc(242, 50, 10, 0, 2 * Math.PI);
        crc2.arc(230, 59, 8, 0, 2 * Math.PI);
        crc2.arc(220, 57, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
    function drawCloud3() {
        crc2.beginPath();
        crc2.moveTo(10, 170);
        crc2.arc(10, 170, 10, 0, 2 * Math.PI);
        crc2.arc(17, 163, 10, 0, 2 * Math.PI);
        crc2.arc(17, 177, 10, 0, 2 * Math.PI);
        crc2.arc(27, 163, 10, 0, 2 * Math.PI);
        crc2.arc(27, 177, 10, 0, 2 * Math.PI);
        crc2.moveTo(34, 170);
        crc2.arc(34, 170, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
    function drawCloud4() {
        crc2.beginPath();
        crc2.moveTo(170, 15);
        crc2.arc(170, 15, 10, 0, 2 * Math.PI);
        crc2.arc(165, 20, 10, 0, 2 * Math.PI);
        crc2.arc(175, 18, 10, 0, 2 * Math.PI);
        crc2.arc(178, 17, 10, 0, 2 * Math.PI);
        crc2.arc(180, 22, 10, 0, 2 * Math.PI);
        crc2.moveTo(180, 22);
        crc2.arc(185, 18, 8, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
    function drawHill() {
        crc2.lineWidth = 1;
        crc2.beginPath();
        crc2.moveTo(270, 110);
        crc2.lineTo(0, 260);
        crc2.closePath();
        crc2.stroke();
    }
    function drawSun() {
        let x = 40;
        let y = 40;
        let radius = 20;
        let startAngle = 0;
        let endAngle = 2 * Math.PI;
        crc2.moveTo(40, 40);
        crc2.beginPath();
        crc2.arc(x, y, radius, startAngle, endAngle, true);
        crc2.fillStyle = "#ffd700";
        crc2.fill();
    }
    function drawChild1() {
        crc2.moveTo(140, 255);
        crc2.beginPath();
        crc2.arc(140, 255, 3, 0, 2 * Math.PI);
        crc2.lineTo(140, 259);
        crc2.lineTo(135, 263);
        crc2.moveTo(140, 259);
        crc2.lineTo(145, 255);
        crc2.moveTo(140, 259);
        crc2.lineTo(140, 265);
        crc2.lineTo(135, 270);
        crc2.moveTo(140, 265);
        crc2.lineTo(145, 270);
        crc2.closePath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.fill();
    }
    function drawChild2() {
        crc2.moveTo(215, 185);
        crc2.beginPath();
        crc2.arc(215, 185, 3, 0, 2 * Math.PI);
        crc2.moveTo(215, 185);
        crc2.lineTo(215, 196);
        crc2.moveTo(215, 196);
        crc2.lineTo(210, 200);
        crc2.moveTo(215, 190);
        crc2.lineTo(210, 192);
        crc2.closePath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.fill();
    }
    function drawSleigh1() {
        crc2.moveTo(135, 263);
        crc2.beginPath();
        crc2.lineTo(130, 265);
        crc2.lineTo(112, 276);
        crc2.moveTo(125, 268);
        crc2.lineTo(125, 276);
        crc2.moveTo(117, 273);
        crc2.lineTo(117, 280);
        crc2.moveTo(130, 273);
        crc2.lineTo(112, 283);
        crc2.closePath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.fill();
    }
    function drawSleigh2() {
        crc2.moveTo(205, 205);
        crc2.beginPath();
        crc2.lineTo(205, 205);
        crc2.lineTo(220, 195);
        crc2.moveTo(211, 202);
        crc2.lineTo(211, 208);
        crc2.moveTo(217, 198);
        crc2.lineTo(217, 204);
        crc2.moveTo(222, 200);
        crc2.lineTo(205, 210);
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.fill();
    }
    function drawTree(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y - 40);
        crc2.lineTo(_x - 10, _y);
        crc2.lineTo(_x + 10, _y);
        crc2.closePath();
        crc2.fillStyle = "#008000";
        crc2.strokeStyle = "#008000";
        crc2.fill();
        crc2.stroke();
    }
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=Rodelbahn.js.map
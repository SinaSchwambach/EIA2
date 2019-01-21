var Inheritance;
(function (Inheritance) {
    function drawBackground() {
        //Sky
        Inheritance.crc2.fillStyle = "#00bfff";
        Inheritance.crc2.fillRect(0, 0, Inheritance.crc2.canvas.width, 110);
        Inheritance.crc2.beginPath();
        Inheritance.crc2.moveTo(0, 110);
        Inheritance.crc2.lineTo(0, 260);
        Inheritance.crc2.lineTo(270, 110);
        Inheritance.crc2.lineTo(0, 110);
        Inheritance.crc2.closePath();
        Inheritance.crc2.fill();
        //Cloud1    
        Inheritance.crc2.beginPath();
        Inheritance.crc2.moveTo(100, 100);
        Inheritance.crc2.arc(95, 100, 12, 0, 2 * Math.PI);
        Inheritance.crc2.arc(110, 100, 12, 0, 2 * Math.PI);
        Inheritance.crc2.arc(87, 100, 12, 0, 2 * Math.PI);
        Inheritance.crc2.arc(100, 95, 12, 0, 2 * Math.PI);
        Inheritance.crc2.fillStyle = "#ffffff";
        Inheritance.crc2.fill();
        //Cloud2
        Inheritance.crc2.beginPath();
        Inheritance.crc2.moveTo(235, 55);
        Inheritance.crc2.arc(235, 55, 10, 0, 2 * Math.PI);
        Inheritance.crc2.arc(228, 48, 10, 0, 2 * Math.PI);
        Inheritance.crc2.arc(242, 50, 10, 0, 2 * Math.PI);
        Inheritance.crc2.arc(230, 59, 8, 0, 2 * Math.PI);
        Inheritance.crc2.arc(220, 57, 10, 0, 2 * Math.PI);
        Inheritance.crc2.fillStyle = "#ffffff";
        Inheritance.crc2.fill();
        //Cloud 3
        Inheritance.crc2.beginPath();
        Inheritance.crc2.moveTo(10, 170);
        Inheritance.crc2.arc(10, 170, 10, 0, 2 * Math.PI);
        Inheritance.crc2.arc(17, 163, 10, 0, 2 * Math.PI);
        Inheritance.crc2.arc(17, 177, 10, 0, 2 * Math.PI);
        Inheritance.crc2.arc(27, 163, 10, 0, 2 * Math.PI);
        Inheritance.crc2.arc(27, 177, 10, 0, 2 * Math.PI);
        Inheritance.crc2.moveTo(34, 170);
        Inheritance.crc2.arc(34, 170, 10, 0, 2 * Math.PI);
        Inheritance.crc2.fillStyle = "#ffffff";
        Inheritance.crc2.fill();
        //Cloud4
        Inheritance.crc2.beginPath();
        Inheritance.crc2.moveTo(170, 15);
        Inheritance.crc2.arc(170, 15, 10, 0, 2 * Math.PI);
        Inheritance.crc2.arc(165, 20, 10, 0, 2 * Math.PI);
        Inheritance.crc2.arc(175, 18, 10, 0, 2 * Math.PI);
        Inheritance.crc2.arc(178, 17, 10, 0, 2 * Math.PI);
        Inheritance.crc2.arc(180, 22, 10, 0, 2 * Math.PI);
        Inheritance.crc2.moveTo(180, 22);
        Inheritance.crc2.arc(185, 18, 8, 0, 2 * Math.PI);
        Inheritance.crc2.fillStyle = "#ffffff";
        Inheritance.crc2.fill();
        //Hill
        Inheritance.crc2.lineWidth = 1;
        Inheritance.crc2.beginPath();
        Inheritance.crc2.moveTo(270, 110);
        Inheritance.crc2.lineTo(0, 260);
        Inheritance.crc2.closePath();
        Inheritance.crc2.stroke();
        //Sun
        let x = 40;
        let y = 40;
        let radius = 20;
        let startAngle = 0;
        let endAngle = 2 * Math.PI;
        Inheritance.crc2.moveTo(40, 40);
        Inheritance.crc2.beginPath();
        Inheritance.crc2.arc(x, y, radius, startAngle, endAngle, true);
        Inheritance.crc2.fillStyle = "#ffd700";
        Inheritance.crc2.fill();
        //Tree
        for (let i = 0; i < 15; i++) {
            let x = Math.floor(Math.random() * Inheritance.crc2.canvas.width);
            let y = Math.floor(Math.random() * (310 - 410) + Inheritance.crc2.canvas.height);
            Inheritance.crc2.beginPath();
            Inheritance.crc2.moveTo(x, y - 40);
            Inheritance.crc2.lineTo(x - 10, y);
            Inheritance.crc2.lineTo(x + 10, y);
            Inheritance.crc2.closePath();
            Inheritance.crc2.fillStyle = "#008000";
            Inheritance.crc2.strokeStyle = "#008000";
            Inheritance.crc2.fill();
            Inheritance.crc2.stroke();
        }
    }
    Inheritance.drawBackground = drawBackground;
})(Inheritance || (Inheritance = {}));
//# sourceMappingURL=background.js.map